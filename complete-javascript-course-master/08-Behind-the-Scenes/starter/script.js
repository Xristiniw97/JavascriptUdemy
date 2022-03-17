'use strict';

// Javascript is a high-level prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled
//dynamic single-threated garbage-collected programming language with first-class functions and a non-blocking
// event loop concurrency model

//high-level
// Developer does not have to worry, everything happens automatically

//garbage-collected
// cleaning the memory so we don't have to

//interpreted or just-in-time compiled
// Abstaction over 0s and 1s
// Convert to machine code = compiling
// this happens inside the javascript engine

// multi-paradigm
// Paradigm is an approach and mindset of structing code, which will direct your coding style and technique.
// Procedural programming
// object-oriented programming
// functional programming
// imperative vs declarative

//prototype-based object-oriented
//almost everything in javascript is an object

//first-class functions
// in a language with first class functions, functions are simply treated as variables.
// We can pass them into other functions, and return them from functions

//dynamic
// dynamically-typed language:
// -no data type definitions. Types becomes known at runtime
// -data type of variable is automatically changed

//single-threated
// Concurrency model: how the javascript engine handles multiple tasks happening at the same time
// JavaSript runs in one single thread, so it can only do one thing at a time
// If we have a long running task we want non-blocking behavior!
// We achieve that by using an event loop: takes long running tasks, executes them in the background, and puts them back in the main thread once they are finished

// JAVASCRIPT ENGINE
// Program that executes javascript code
// example V8 engine -> google chrome + nodejs
// Js engine  = call stack(where our code is executed) & heap (where objects are stored)

// Compilation: the entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
// Source code -> Compilation(Step1) -> Portable file: machine code -> Execution(Step2 can happen way after compilation) -> Program running

// Interpretation: Interpreter runs through the source code and executes it line by line
// Source code -> Execution line by line (Step 1 Code still needs to be converted to machine code) -> Program running

// Moden Js uses the two before in one
// Just-in-time (JIT) compilation: Entire code is converted into machine code at once, then executed immediately.
// Source code -> Compilation(Step1) -> NO Portable file!!!!: machine code -> Execution(Step2 happens immediately after compilation) -> Program running

// Code -> Parsing -> Compilation -> Execution (Happens in call stack) (Optimization during the execution)
//Happens in special threads that we can't access from code

// JAVASCRIPT RUNTIME

// RUNTIME IN THE BROWSER
// Runtime is a container including all the things that we need to use JavaScript(in this case in the browser)
// Runtime = Js ENGINE + WEB APIS (Functionalities provided to the engine, accessible on window object) DOM,Timers,Fetch API klp +
// CALLBACK QUEUE click + timer + data + ... (Example: Callback function from DOM event listener)
//EVENT LOOP

// RUNTIME IN NODE.js
// Runtime = Js ENGINE + C++ BINDINGS & THREAD POOL +
// CALLBACK QUEUE click + timer + data + ...
//EVENT LOOP

// WHAT IS AN EXECUTION CONTEXT
// ENVIRONMENT IN WHICH A PIECE OF JAVASCRIPT IS EXECUTED. STORES ALL THE NECESSARY INFORMATION FOR SOME CODE TO EXECUTED.
//EXACTLY ONE GLOABAL EXECUTION CONTEXT: DEFAULT CONTEXT, CREATED FOR CODE THAT IS NOT INSIDE ANY FUNCTION
//ONE EXECUTION CONTEXT PER FUNCTION: FOR EACH FUNCTION CALL, A NEW EXECUTION CONTEXT IS CREATED
//ALL TOGETHER MAKE THE CALL STACK

// COMPILATION -> CREATION OF GLOBAL EXECUTION CONTEXT (FOR TOP-LEVEL CODE, NOT INSIDE A FUNCTION) ->
//EXECUTION OF TOP-LEVEL CODE(INSIDE GLOBAL EC)
//EXECUTION OF FUNCTIONS AND WAITING FOR CALLBACKS

// WHAT'S INSIDE EXECUTION CONTEXT
// GENERATED DURING "CREATION PHASE", RIGHT BEFORE EXECUTION
// 1 VARIABLE INVIRONMENT -> LET, CONST, VAR DECLARATIONS, FUNCTIONS, ARGUMENTS OBJECT
// 2 SCOPE CHAIN
// 3 THIS KEYWORD
// ARGUMENTS OBJECT + THIS KEYWORD NOT IN ARROW FUNCTIONS
// TECHNICALLY, VALUES ONLY BECOME KNOWN DURING EXECUTION

//THE CALL STACK
// PLACE WHERE EXECUTION CONTEXTS GET STACKED ON TOP OF EACH OTHER, TO KEEP TRACK OF WHERE WE ARE IN THE EXECUTION

//SCOPE CONSEPTS
//SCOPING: HOW OUT PROGRAM'S VARIABLES ARE ORGANIZED AND ACCESSED. "WHERE DO VARIABLES LIVE?" OR "WHERE CAN WE ACCESS A CERTAIN VARIABLE, AND WHERE NOT?"
//LEXICAL SCOPING: SCOPING IS CONTROLLED BY PLACEMENT OF FUNCTIONS AND BLOCKS IN THE CODE
// SCOPE: SPACE OR ENVIRONMENT IN WHICH A CERTAIN VARIABLE IS DECLARED(VARIABLE ENVIRONMENT IN CASE OF FUNCTIONS). THERE IS GLOBAL SCOPE, FUNCTION SCOPE AND BLOCK SCOPE;
//SCOPE OF A VARIABLE: REGION OF OUR CODE WHERE A CERTAIN VARIABLE CAN BE ACCESSED

//GLOBAL SCOPE:
//OUTSIDE OF ANY FUNCTION OR BLOCK
//VARIABLES DECLARED IN GLOBAL SCOPE ARE ACCESSIBLE EVERYWHERE

//FUNCTION SCOPE:
//VARIABLES ARE ACCESSIBLE ONLY INSIDE FUNCTION, NOT OUTSIDE
//ALSO CALLED LOCAL SCOPE

// BLOCK SCOPE (ES6)
// VARIABLES ARE ACCESSIBLE ONLY INSIDE BLOCK(BLOCK SCOPED)
// HOWEVER, THIS ONLY APPLIES TO LET AND CONST VARIABLES
// FUNCTIONS ARE ALSO BLOCK SCOPED (ONLY IN STRICT MODE)
//VAR END UP IN THE CLOSEST FUNCTION SCOPE

//SCOPE HAS ACCESS TO VARIABLES FROM ALL OUTER SCOPES
//EVERY SCOPE ALWAYS HAS ACCESS TO ALL THE VARIABLES FROM ALL ITS OUTER SCOPES. THIS IS THE SCOPE CHAIN!

//HOISTING
//MAKES SOME TYPES OF VARIABLES ACCESSIBLE/USABLE IN THE CODE BEFORE THEY ARE ACTYALLY DECLARED. "VARIABLES LIFTED TO THE TOP OF THEIR SCOPE"
//BUT BEHIND THE SCENES
//BEFORE EXECUTION, CODE IS SCANNED FOR VARIABLE DECLARATIONS, AND FOR EACH VARIABLE, A NEW PROPERTY IS CREATED IN THE VARIABLE ENVIRONMENT OBJECT
// WHY HOISTING
//USING FUNCTIONS BEFORE ACTUAL DECLARATION

//TEMPORAL DEAD ZONE, LET ANA CONST
//MAKES IT EASIER TO AVOID AND CATCH ERRORS: ACCESSING VARIABLES BEFORE DELARATION IS BAD PRACTICE AND SHOULD BE AVOIDED
//MAKES CONST VARIABLES ACTUALLY WORK

//VARIABLES THAT DECLARED WITH VAR, MAKES A PROPERTY ON WINDOWS JAVASCRIPT OBJECT
// LET AND CONST VARIABLES DON'T DO THAT

//THIS KEYWORD/VARIABLE:
//SPECIAL VARIABLE THAT IS CREATED FOR EVERY EXECUTION CONTEXT(EVERY FUNCTION).
//TAKES THE VALUE OF (POINTS TO) THE "OWNER" OF THE FUNCTION IN WHICH THE THIS KEYWORD IS USED
//THIS IS NOT STATIC. IT DEPENDS ON HOW THE FUNCTION IS CALLED, AND ITS VALUE IS ONLY ASSIGNED WHEN THE FUNCTION IS ACTUALLY CALLED
//METHOD -> THIS = OBJECT THAT IS CALLING THE METHOD
//SIMPLE FUNCTION CALL -> THIS = UNDEFINED (IN STRICT MODE! OTHERWISE: WINDOW(IN THE BROWSER))
//ARROW FUNCTIONS -> THIS = THIS OF SURRONDING FUNCTION(LEXICAL THIS) SO OF THE PARENT FUNCTION
//EVENT LISTENER -> THIS = DOM ELEMENT THAT THE HANDLER IS ATTACHED TO

//THIS DOES NOT POINT TO THE FUNCTION ITSELF, AND ALSO NOT THE ITS VARIABLE ENVIRONMENT

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         console.log(this);

//         //solution 1
//         // const self = this; //self or that
//         // const isMillenial = function () {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // };

//         //solution 2
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };

//         isMillenial();
//     },

//     greet: () => {
//         console.log(this);
//         console.log(`hey ${this.firstName}`);
//     }
// }

// jonas.greet();
// jonas.calcAge();

//PRIMITIVES VS OBJECTS
//PRIMITIVES ARE NUMBER,STRING,BOOLEAN,UNDEFINED,NULL,SYMBOL,BIGINT -> PRIMITIVE TYPES STORED IN CALL STACK
//OBJECTS OBJECT LITERAL, ARRAYS, FUNCTIONS, MANY MORE -> REFERENCE TYPES STORED IN HEAP

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName,oldLastName);

// const jessica = {
//     fistName: 'Jessica',
//     lastName: 'Williams',
//     age: 27
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// // marriedJessica = {}

// // Copying objects
// const jessica2 = {
//     fistName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice','Bob']
// }

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);

