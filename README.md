# Sample Langchain App

Got memory allocation error when trying to build this simple app.

macOS 14.7.6 CPU M1PRO 16GB node v20.19.4

Sample .env file
```
NODE_ENV=local
OPENAI_API_KEY=
TAVILY_API_KEY=
THREAD_ID=91e065dd-a4aa-4220-9c05-5ec4914ed088
```

```
> langchain@0.0.1 start
> npm run build && node --env-file=.env dist/main


> langchain@0.0.1 build
> npx tsc


<--- Last few GCs --->

[87445:0x150008000]   131892 ms: Scavenge 4029.9 (4127.7) -> 4014.4 (4127.7) MB, 8.25 / 0.00 ms  (average mu = 0.101, current mu = 0.005) allocation failure; 
[87445:0x150008000]   131907 ms: Scavenge 4030.2 (4127.9) -> 4015.1 (4128.4) MB, 5.62 / 0.00 ms  (average mu = 0.101, current mu = 0.005) allocation failure; 
[87445:0x150008000]   133674 ms: Mark-Compact 4030.5 (4128.4) -> 4014.9 (4128.7) MB, 1762.04 / 0.00 ms  (average mu = 0.070, current mu = 0.025) allocation failure; scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
----- Native stack trace -----

 1: 0x100fe55b8 node::OOMErrorHandler(char const*, v8::OOMDetails const&) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
 2: 0x1011a3968 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
 3: 0x1013b17bc v8::internal::Heap::GarbageCollectionReasonToString(v8::internal::GarbageCollectionReason) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
 4: 0x1013b52b8 v8::internal::Heap::CollectGarbageShared(v8::internal::LocalHeap*, v8::internal::GarbageCollectionReason) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
 5: 0x1013b2134 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::internal::GarbageCollectionReason, char const*) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
 6: 0x1013afcb0 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
 7: 0x1013a5fc0 v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
 8: 0x1013a6818 v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
 9: 0x10138acf8 v8::internal::Factory::NewFillerObject(int, v8::internal::AllocationAlignment, v8::internal::AllocationType, v8::internal::AllocationOrigin) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
10: 0x101797e30 v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
11: 0x101b2cc44 Builtins_CEntry_Return1_ArgvOnStack_NoBuiltinExit [/Users/paket/.nvm/versions/node/v20.19.4/bin/node]
12: 0x106f558a0 
13: 0x107066238 
14: 0x107073208 
15: 0x106e092bc 
16: 0x106b18e4c 
17: 0x106faae34 
18: 0x106fabd30 
19: 0x106f1db8c 
20: 0x106b1382c 
21: 0x106e0b0c0 
22: 0x10707a614 
23: 0x106f1d72c 
24: 0x106b1382c 
25: 0x106e0b0c0 
26: 0x106facae8 
27: 0x106f1d9ec 
28: 0x106b1382c 
29: 0x106e0b0c0 
30: 0x10707a614 
31: 0x106f1d72c 
32: 0x106b1382c 
33: 0x106e0b0c0 
34: 0x106facae8 
35: 0x106f1d9ec 
36: 0x106b1382c 
37: 0x106e0b0c0 
38: 0x10707a614 
39: 0x106f1d72c 
40: 0x106b1382c 
41: 0x106e0b0c0 
42: 0x106facae8 
43: 0x106f1d9ec 
44: 0x106b1382c 
45: 0x106e0b0c0 
46: 0x10707a614 
47: 0x106f1d72c 
48: 0x106b1382c 
49: 0x106e0b0c0 
50: 0x106facae8 
51: 0x106f1d9ec 
52: 0x106b1382c 
53: 0x106e0b0c0 
54: 0x10707a614 
55: 0x106f1d72c 
56: 0x106b1382c 
57: 0x106e0b0c0 
58: 0x106facae8 
59: 0x106f1db8c 
60: 0x106b1382c 
61: 0x106e0b0c0 
62: 0x10707a614 
63: 0x106f1d72c 
64: 0x106b1382c 
65: 0x106e0b0c0 
66: 0x106facae8 
67: 0x106f1d9ec 
68: 0x106b1382c 
69: 0x106e0b0c0 
70: 0x10707a614 
71: 0x106f1d72c 
72: 0x106b1382c 
73: 0x106e0b0c0 
74: 0x106facae8 
75: 0x106f1d9ec 
76: 0x106b1382c 
77: 0x106e0b0c0 
78: 0x10707a614 
79: 0x106f1d72c 
80: 0x106b1382c 
81: 0x106e0b0c0 
82: 0x10707a614 
83: 0x106f1d72c 
84: 0x106b1382c 
85: 0x106e0b0c0 
86: 0x106facae8 
87: 0x106f1d9ec 
88: 0x106b1382c 
89: 0x106e0b0c0 
90: 0x10707a614 
91: 0x106f1d72c 
92: 0x106b1382c 
93: 0x106e0b0c0 
94: 0x106facae8 
95: 0x106f1d9ec 
96: 0x106b1382c 
97: 0x106e0b0c0 
98: 0x10707a614 
99: 0x106f1d72c 
100: 0x106b1382c 
101: 0x106e0b0c0 
102: 0x106f0ee20 
103: 0x106e0b378 
104: 0x106e0b4a0 
105: 0x10707a614 
106: 0x106f1d72c 
107: 0x106b1382c 
108: 0x106e0b0c0 
109: 0x106f0ee20 
110: 0x106e0b378 
111: 0x1069b4908 
112: 0x106f1ead0 
113: 0x106b1382c 
114: 0x106e0b0c0 
115: 0x1070732ac 
116: 0x106e093c0 
117: 0x106facae8 
118: 0x106f1d9ec 
119: 0x106b1382c 
120: 0x106e0b0c0 
121: 0x10707a614 
122: 0x106f1d72c 
123: 0x106b1382c 
124: 0x106e0b0c0 
125: 0x106de3104 
126: 0x1069e28b4 
127: 0x1069d09b0 
128: 0x1069e1f80 
129: 0x106c306e0 
130: 0x106c28970 
131: 0x106fcfa48 
132: 0x106ff3ee4 
133: 0x106c1b8cc 
134: 0x1070673bc 
135: 0x10706b99c 
136: 0x1069e8bb8 
137: 0x106c1e2f4 
138: 0x106bda940 
139: 0x106ff3dc8 
140: 0x106c1b8cc 
141: 0x1070673bc 
142: 0x10706b99c 
143: 0x1069e1adc 
144: 0x106c323e8 
145: 0x106c28970 
146: 0x106fcfa48 
147: 0x106ff3ee4 
148: 0x106c1b8cc 
149: 0x1070673bc 
150: 0x10706b99c 
151: 0x1069e8bb8 
152: 0x106c1e2f4 
153: 0x106bda940 
154: 0x106ff3dc8 
155: 0x106c1b8cc 
156: 0x1070673bc 
157: 0x10706b99c 
158: 0x1069e1adc 
159: 0x106c323e8 
160: 0x106c28970 
161: 0x106fcfa48 
162: 0x106ff3ee4 
163: 0x106c1b8cc 
164: 0x1070673bc 
165: 0x10706b99c 
166: 0x1069e8bb8 
167: 0x106c1e2f4 
168: 0x106bda940 
169: 0x106ff3dc8 
170: 0x106c1b8cc 
171: 0x1070673bc 
172: 0x10706b99c 
173: 0x1069e1adc 
174: 0x106c323e8 
175: 0x106c28970 
176: 0x106fcfa48 
177: 0x106ff3ee4 
178: 0x106c1b8cc 
179: 0x1070673bc 
180: 0x10706b99c 
181: 0x1069e8bb8 
182: 0x106c1e2f4 
183: 0x106bda940 
184: 0x106ff3dc8 
185: 0x106c1b8cc 
186: 0x1070673bc 
187: 0x10706b99c 
188: 0x1069e1adc 
189: 0x106c323e8 
190: 0x106c28970 
191: 0x106fcfa48 
192: 0x106ff3ee4 
193: 0x106c1b8cc 
194: 0x1070673bc 
195: 0x10706b99c 
196: 0x1069e8bb8 
197: 0x106c1e2f4 
198: 0x106bda940 
199: 0x106ff3dc8 
200: 0x106c1b8cc 
201: 0x1070673bc 
202: 0x10706b99c 
203: 0x1069e1adc 
204: 0x106c323e8 
205: 0x106c28970 
206: 0x106fcfa48 
207: 0x106ff3ee4 
208: 0x106c1b8cc 
209: 0x1070673bc 
210: 0x10706b99c 
211: 0x1069e8bb8 
212: 0x106c1e2f4 
213: 0x106bda940 
214: 0x106ff3dc8 
215: 0x106c1b8cc 
216: 0x1070673bc 
217: 0x10706b99c 
218: 0x1069e1adc 
219: 0x106c323e8 
220: 0x106c28970 
221: 0x106fcfa48 
222: 0x106ff3ee4 
223: 0x106c1b8cc 
224: 0x1070673bc 
225: 0x10706b99c 
226: 0x1069e8bb8 
227: 0x106c1e2f4 
228: 0x106bda940 
229: 0x106ff3dc8 
230: 0x106c1b8cc 
231: 0x1070673bc 
232: 0x10706b99c 
233: 0x1069e1adc 
234: 0x106c323e8 
235: 0x106c28970 
236: 0x106fcfa48 
237: 0x106ff3ee4 
238: 0x106c1b8cc 
239: 0x1070673bc 
240: 0x10706b99c 
241: 0x1069e8bb8 
242: 0x106c1e2f4 
243: 0x106bda940 
244: 0x106ff3dc8 
245: 0x106c1b8cc 
246: 0x1070673bc 
247: 0x10706b99c 
248: 0x1069e1adc 
249: 0x106c323e8 
250: 0x106c28970 
251: 0x106fcfa48 
252: 0x106ff3ee4 
253: 0x106c1b8cc 
254: 0x1070673bc 
255: 0x10706b99c 
sh: line 1: 87391 Abort trap: 6           npm run build
```
