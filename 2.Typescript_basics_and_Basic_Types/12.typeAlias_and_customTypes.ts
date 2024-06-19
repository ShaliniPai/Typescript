// Type Aliases
// Define a type alias for a union type
type Status = 'success' | 'error' | 'pending';

let currentStatus: Status;
currentStatus = 'success'; // Valid
currentStatus = 'error';   // Valid
currentStatus = 'pending'; // Valid
// currentStatus = 'completed'; // Error: Type '"completed"' is not assignable to type 'Status'.

// Define a type alias for a union type of different primitive types
type StringOrNumber = string | number;

let value: StringOrNumber;
value = 42;       // Valid
value = "hello";  // Valid
// value = true;    // Error: Type 'boolean' is not assignable to type 'StringOrNumber'.

// Type alias for an object type
type Point = {
    x: number;
    y: number;
};

let point: Point = {
    x: 10,
    y: 20
};

// Custom Types using Interfaces
// Define an interface for a person
interface Person {
    name: string;
    age: number;
    isEmployee: boolean;
}

let employee: Person = {
    name: "John Doe",
    age: 30,
    isEmployee: true
};

// Optional properties in interfaces
interface Vehicle {
    make: string;
    model: string;
    year?: number; // year is optional
}

let car: Vehicle = {
    make: "Toyota",
    model: "Corolla"
};

// Readonly properties in interfaces
interface Book {
    readonly title: string;
    author: string;
}

let myBook: Book = {
    title: "TypeScript Basics",
    author: "John Smith"
};

// myBook.title = "Advanced TypeScript"; // Error: Cannot assign to 'title' because it is a read-only property.

// Intersection Types
// Combine multiple types into one
type Drivable = {
    drive(): void;
};

type Electric = {
    charge(): void;
};

type ElectricCar = Drivable & Electric;

let tesla: ElectricCar = {
    drive: () => {
        console.log("Driving...");
    },
    charge: () => {
        console.log("Charging...");
    }
};

// Using type aliases with functions
type StringOrNumberArray = (string | number)[];

function printValues(values: StringOrNumberArray): void {
    values.forEach(value => console.log(value));
}

printValues([1, "two", 3, "four"]); // Valid

// Recursive Type Aliases
type NestedArray = (number | NestedArray)[];

let nestedNumbers: NestedArray = [1, [2, [3, 4]], 5];

// Custom Types with Enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move); // Outputs: 1

// Discriminated Unions with Type Aliases
type Circle = {
    kind: 'circle';
    radius: number;
};

type Square = {
    kind: 'square';
    sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

let myCircle: Circle = { kind: 'circle', radius: 5 };
let mySquare: Square = { kind: 'square', sideLength: 10 };

console.log(getArea(myCircle)); // Outputs: 78.53981633974483
console.log(getArea(mySquare)); // Outputs: 100

// Custom Types with Generics
type Result<T> = {
    success: boolean;
    data: T;
};

let stringResult: Result<string> = {
    success: true,
    data: "All good!"
};

let numberResult: Result<number> = {
    success: true,
    data: 42
};