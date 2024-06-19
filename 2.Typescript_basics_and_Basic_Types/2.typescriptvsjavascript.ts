// TypeScript helps us catch errors during development.
// JavaScript has a built-in `typeof` operator to check types at runtime.
let num1 = 1;
console.log(typeof num1); // Prints 'number' to the console


// We can use `typeof` to ensure that our function only processes numbers.
function addScenario1(n1: number, n2: number) {
    if (typeof (n1) !== 'number' || typeof n2 !== 'number') {
        // Throw an error for non-number inputs
        throw new Error("Incorrect Input.")
    }
    return n1 + n2;
}

// Two ways of calling the function

// First way
// try {
//     console.log(addNumbers(1, '2')); // Will throw an error
// } catch (error) {
//     console.error(error.message); // Output: Incorrect input
// }

// Second way
// const num1Scenario1 = 20;
// const num2Scenario1 = '2.8';

// const resScenario1 = addScenario1(num1Scenario1, num2Scenario1);
// console.log(resScenario1);

/**
 * SUMMARY
 * 
 * This runtime type checking is necessary in JavaScript, which is dynamically typed.
 * JavaScript allows variables to change types during runtime.
 * TypeScript is statically typed, enforcing type consistency during development.
 * TypeScript prevents type errors during development by enforcing types.
 * 
 * TypeScript helps avoid runtime errors by catching type mismatches early.
 * JavaScript type checking at runtime can lead to failures only during execution.
 * 
 * TypeScript has a richer type system compared to JavaScript.
 * Runtime type check in JavaScript is limited and less powerful than TypeScript's compile-time checks.
 * 
 * JavaScript's `typeof` is useful but limited compared to TypeScript's type system.
 * TS type systems helps us identify error during development phase.
 * 
 */