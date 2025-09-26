import { ChatOpenAI } from "@langchain/openai";
import { tool } from "@langchain/core/tools";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import {
  END,
  MessagesAnnotation,
  START,
  StateGraph,
  MemorySaver,
} from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { TavilySearch } from "@langchain/tavily";
import { z } from "zod";

export class Supervisor {
  constructor() {}

  private readonly llm = new ChatOpenAI({
    model: 'gpt-4o',
    temperature: 0,
    apiKey: process.env.OPENAI_API_KEY,
  });

  // @ts-ignore
  private emailTool = tool(
    async ({ email, text }) => {
      return 'OK';
    },
    {
      name: "send_email",
      description: "Can send email messages.",
      schema: z.object({
        email: z.string().describe("Email address to send email to."),
        text: z.string().describe("Text of the email."),
      }),
    }
  );

  // @ts-ignore
  private slackTool = tool(
    async ({ userName, text }) => {
      return 'OK';
    },
    {
      name: "send_slack_message",
      description: "Can send slack messages.",
      schema: z.object({
        userName: z.string().describe("Slack user name to send message to."),
        text: z.string().describe("Text of the message."),
      }),
    }
  );

  // Process the prompt based on the determined intent
  async processPrompt(prompt: string) {
    const checkpointer = new MemorySaver();
    const allAvailableTools = [
      new TavilySearch({
        maxResults: 5,
        tavilyApiKey: process.env.TAVILY_API_KEY,
      }),
      this.emailTool,
      this.slackTool,
    ];
    const runnable = ChatPromptTemplate.fromMessages([
      new SystemMessage(`You are a helpful AI assistant. Always answer in clear and polite English. 
        Keep responses concise and focused, avoiding unnecessary repetition or long-winded explanations. 
        If the user asks for details, provide them step by step in a simple way. 
        Be professional, respectful, and easy to understand in every reply. 
      `),
      new MessagesPlaceholder("messages"),
    ]);

    const callModel = async (state: typeof MessagesAnnotation.State) => {
      const output = await runnable
        .pipe(this.llm.bindTools(allAvailableTools))
        .invoke(state);

      return { messages: [output] };
    };

    const shouldContinue = (state: typeof MessagesAnnotation.State) => {
      const lastMessage = state.messages[state.messages.length - 1];
      if (
        "tool_calls" in lastMessage &&
        Array.isArray(lastMessage.tool_calls) &&
        lastMessage.tool_calls?.length
      ) {
        return "tools";
      }
      return END;
    };

    // @ts-ignore
    const langGraph = new StateGraph(MessagesAnnotation)
        .addNode("model", callModel)
        // @ts-ignore
        .addNode("tools", new ToolNode(allAvailableTools))
        .addEdge(START, "model")
        .addEdge("tools", "model")
        .addConditionalEdges("model", shouldContinue)
        .compile({ checkpointer });

    const messages = [new HumanMessage(prompt)];
    const res = await langGraph.invoke(
      { messages },
      { configurable: { thread_id: process.env.THREAD_ID || '' } }
    );

    const lastMessage = res.messages[res.messages.length - 1];
    return lastMessage.content;
  }
}
