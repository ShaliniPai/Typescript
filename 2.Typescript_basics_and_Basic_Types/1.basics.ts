
/**--------------------------------------------------------------------------------- */

// Scenario 1 => This works normally and prints 7.8 on console
function addNumbersScenario1(n1, n2) {
    return n1 + n2
}
const number1Scenario1 = 5;
const number2Scenario1 = 2.8;

const resultScenario1 = addNumbersScenario1(number1Scenario1, number2Scenario1);
console.log(resultScenario1);

/**--------------------------------------------------------------------------------- */

// Scenario 2 => Let us now change the second number to string
function addNumbersScenario2(n1, n2) {
    return n1 + n2
}
const number1Scenario2 = 5;
const number2Scenario2 = '2.8';
const resultScenario2 = addNumbersScenario2(number1Scenario2, number2Scenario2);
console.log(resultScenario2);
// This would give you 52.8 instead of 7.8. This is the behavior of JS code.
/**
/**
 * This output is due to JavaScript treating the operation as string concatenation
 * instead of mathematical addition.
 * 
 * The input '5' is a string, and JavaScript concatenates it with 2.8,
 * converting 2.8 from a number to a string to create '52.8'.
 * 
 * JavaScript does not treat it mathematically but as a string concatenation,
 * resulting in '52.8' as a string.
 * 
 * This type of error can happen when dealing with user input or when working in a team.
 * It might not be immediately obvious in larger scripts.
 * 
 * TypeScript helps catch such errors by providing type safety during development,
 * preventing mistakes and making them easier to track down.
 */

/**--------------------------------------------------------------------------------- */

//Scenario 3 => Converting the code to TS format
function addNumbersScenario3(n1: number, n2: number) {
    return n1 + n2
}
const number1Scenario3 = 5;
// const number2Scenario3 = '2.8';
const number2Scenario3 = 2.8;
const resultScenario3 = addNumbersScenario3(number1Scenario3, number2Scenario3);
console.log(resultScenario3);

/**
 * We can add type assignments to our function parameters.
 * 
 * We tell TypeScript that these two parameters should be of type number.
 * 
 * We do that by adding a colon after the parameter name and then the type.
 * For example, `number` would be one of the supported types.
 * 
 * Besides `number`, you also got `string` or `boolean`.
 * 
 * Now, both parameters here should be of type number,
 * passing in values of a different type is not allowed.
 * 
 * TypeScript helps us during development by providing type safety.
 * It doesn't change JavaScript behavior at runtime.
 * Browsers have no built-in TypeScript support.
 * 
 * TypeScript only helps during compilation, doesn't do anything during runtime.
 * It adds an extra step, an extra sanity check,
 * where we find out about mistakes and fix them before runtime.
 * 
 * Even though it detected the error during compilation,
 * it still compiles the code but points out the mistake,
 * so that we can fix it and avoid such mistakes.
 * 
 * By default, TypeScript does not block compilation for errors,
 * but it yells at you and points out mistakes for you to fix.
 * 
 * Make sure you don't have `app.js` and `app.ts` open at the same time
 * to avoid duplicate function implementations errors in the IDE.
 * Closing the JavaScript file fixes this.
 */

/**--------------------------------------------------------------------------------- */
