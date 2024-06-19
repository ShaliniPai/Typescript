// Scenario 1: Type Inference
const person1 = {
    name: 'Shalini',
    age: 30
};

console.log(person1);

// Trying to access a non-existent property results in a compilation error
// because TypeScript uses type inference to identify `person1` as an object
// with the properties `name` and `age`.

// Error: Property 'nickName' does not exist on type '{ name: string; age: number; }'
// console.log(person1.nickName); 

// Scenario 2: Explicit Type Annotation

// To avoid errors during runtime, it is better to explicitly specify the type
// and the properties associated with the type.
const person2: {
    name: string,
    age: number,
    nickName?: string // `nickName` is marked as optional
} = {
    name: 'Shalini',
    age: 30
};

// If the number of required properties of an object does not match the
// value list, TypeScript throws a compilation error.

// Post compilation to JavaScript, the explicit type assignment for the `person2`
// object will be removed.

// Example of Nested Object Types

// JavaScript object
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};

// TypeScript type for the object
const productTyped: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    };
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};

// You have an object type within an object type, demonstrating nested object types.