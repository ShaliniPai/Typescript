// tuples.ts

// Definition: Tuples are a type of array with a fixed number of elements, where each element can have a different type.
let tuple: [string, number];

// Initialization: Assign values matching the specified types.
tuple = ["hello", 10];

// Access Elements: Access elements using index positions.
console.log(tuple[0]); // "hello"
console.log(tuple[1]); // 10

// Element Count: Fixed number of elements as defined in the tuple type.
let fixedTuple: [string, number, boolean];
fixedTuple = ["world", 20, true];

// Type Safety: Enforces type checking on the specified positions.
let typeSafeTuple: [string, number, boolean];
typeSafeTuple = ["hello", 10, true]; // Correct
// typeSafeTuple = [10, "hello", true]; // Error: Type 'number' is not assignable to type 'string'.

// Optional Elements: Use `?` for optional elements at the end.
let optionalTuple: [string, number?];
optionalTuple = ["hello"]; // Valid
optionalTuple = ["hello", 10]; // Valid

// Rest Elements: Use `...` for rest elements to capture a variable number of elements of a specific type.
let restTuple: [string, ...number[]];
restTuple = ["hello", 1, 2, 3]; // Valid

// Destructuring: Destructure tuples to assign values to variables.
let destructuredTuple: [string, number] = ["hello", 10];
let [a, b] = destructuredTuple;
console.log(a); // "hello"
console.log(b); // 10

// Readonly Tuples: Prevent modification by using `readonly`.
let readonlyTuple: readonly [string, number] = ["hello", 10];
// readonlyTuple[0] = "hi"; // Error: Cannot assign to '0' because it is a read-only property.

// Methods: Tuples inherit array methods, but type safety is preserved.
let methodTuple: [string, number] = ["hello", 10];
// methodTuple.push(20); // Error: Argument of type '20' is not assignable to parameter of type 'never'.

// Example of using tuples
let user: [number, string, boolean?];
user = [1, "John"]; // Valid
user = [2, "Jane", true]; // Valid

// Tuples vs Arrays: Tuples have a fixed structure and types for each element, whereas arrays are more flexible with homogenous types.
let array: number[] = [1, 2, 3]; // Array of numbers
let mixedTuple: [string, number, boolean] = ["text", 42, false]; // Tuple with different types