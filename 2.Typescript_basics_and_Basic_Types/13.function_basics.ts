// Function `add` takes two numbers and returns their sum.
// The return type `number` is inferred by TypeScript based on the return statement.
function add(n1: number, n2: number): number {
    return n1 + n2; // Returns the sum of n1 and n2
}

// Function `printResult` takes a number and logs it to the console.
// The return type is explicitly set to `void` because this function does not return a value.
function printResult(num: number): void {
    console.log('Result: ' + num); // Logs the result to the console
}

// Function `addAndHandle` takes two numbers and a callback function.
// The callback function takes a number as an argument and returns `void`.
// The result of adding the two numbers is passed to the callback function.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void): void {
    const result = n1 + n2; // Adds n1 and n2
    cb(result); // The callback function `cb` is called with the result.
}

// Calling `printResult` with the result of `add(5, 12)`.
// This will log 'Result: 17' to the console.
printResult(add(5, 12));

// Declaring a variable `combineValues` that can hold a function.
// The function must take two numbers as arguments and return a number.
let combineValues: (a: number, b: number) => number;

// Assigning the `add` function to `combineValues`.
// This is valid because `add` matches the function type signature of `combineValues`.
combineValues = add;

// The following assignments would cause errors because they do not match the function type signature.
// combineValues = printResult; // Error: Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
// combineValues = 5; // Error: Type 'number' is not assignable to type '(a: number, b: number) => number'.

// Calling `combineValues`, which now refers to the `add` function, with arguments 8 and 8.
// This will log '16' to the console.
console.log(combineValues(8, 8));

// Uncommenting the following line would declare a variable of type `undefined`.
// This is typically not useful, hence it's commented out.
// let someValue: undefined;

// Calling `addAndHandle` with two numbers and an inline callback function.
// The callback function logs the result to the console.
addAndHandle(10, 20, (result) => {
    console.log(result); // This will log '30' to the console.
});