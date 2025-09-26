import { Supervisor } from "./supervisor";
import * as readline from "readline";

const main = () => {
  const supervisor = new Supervisor();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter your prompt: ", async (prompt: string) => {
    if (!prompt) {
      console.log("No prompt provided.");
      rl.close();
      return;
    }

    console.log(await supervisor.processPrompt(prompt));
    rl.close();
  });
};

main();
