// Introduction to JavaScript Execution (1:01-1:16): The video begins by emphasizing the
//  importance of understanding how JavaScript code executes, particularly for interviews.
//   It introduces the concept of Execution Context and Call Stack as fundamental elements.
// Execution Context (1:18-5:26):


// The presenter explains that JavaScript executes code in a unique way, dividing the 
// process into two main parts.
// Global Execution Context (GEC) (2:52-3:56): This is the first context that is
//  always created when JavaScript code runs. The this variable references the Global 
// 
//  Execution Context. The video notes differences in GEC between browser environments 
//  (where this is the window object) and Node.js environments.

// Function Execution Context (FEC) (4:36-4:55): This context is created whenever a 
// function is called.
// Eval Execution Context (5:00-5:12): Briefly mentioned as another type of execution context, though less commonly discussed in interviews.
// Phases of Code Execution (5:38-6:41): JavaScript code execution is broken down into two distinct phases:
// Memory Creation Phase / Creation Phase (5:44-6:08): In this phase, JavaScript allocates memory for variables and functions. Variables are initialized with undefined, and functions are stored with their full definitions.
// Execution Phase (6:23-6:41): This is where the actual code execution happens. Variables are assigned their values, and functions are executed.
// Detailed Code Execution Example (6:53-18:07): The video walks through a simple JavaScript code snippet to illustrate how the Memory Creation Phase and Execution Phase work for both global code and function calls. It demonstrates how new execution contexts are created for function calls, leading to a new variable environment and execution thread, and how values are returned to the parent execution context.
// Call Stack (18:22-20:50):
// The Call Stack is explained as a mechanism to manage the order of execution contexts.
// It operates on a LIFO (Last In, First Out) principle (20:39-20:47), meaning the last function pushed onto the stack is the first one to be executed and popped off.
// The video illustrates how the Global Execution Context is at the bottom of the stack, and function calls are added on top.
// Practical Demonstration in Browser Console (20:51-25:40): The presenter uses Google Chrome's developer tools (Sources tab) to visually demonstrate the Call Stack and how execution contexts are added and removed when functions are called, including nested function calls. This section provides a hands-on view of the concepts discussed.





/// chat gpt
// 1. JavaScript Execution Model

// JavaScript is a single-threaded, synchronous language.
// This means:

// It executes one task at a time

// Code runs line by line

// It uses a mechanism called the Call Stack to manage function execution

// 2. What is the Call Stack?

// The Call Stack is a data structure (stack) that:

// Keeps track of function calls

// Works on LIFO (Last In, First Out) principle

// Stores execution contexts

// 👉 Whenever a function is called, it is pushed onto the stack
// 👉 When the function finishes, it is popped from the stack

// 3. Execution Context

// An Execution Context is the environment where JavaScript code is evaluated.

// Types of Execution Context:

// Global Execution Context (GEC)

// Function Execution Context (FEC)

// Each execution context contains:

// Variable Environment

// Scope Chain

// this keyword

// 4. JavaScript Code Execution Phases

// JavaScript executes code in two phases:

// Phase 1: Memory Creation Phase

// Variables are allocated memory

// Functions are stored fully in memory

// Variables are initialized as undefined

// Phase 2: Execution Phase

// Code is executed line by line

// Values are assigned to variables

// Functions are invoked