// Define variables with literal types
let statusVar: 'success' | 'error';
statusVar = 'success';   // Valid
// statusVar = 'pending'; // Error: Type '"pending"' is not assignable to type '"success" | "error"'.

let direction: 'up' | 'down' | 'left' | 'right';
direction = 'left';   // Valid
// direction = 'diagonal'; // Error: Type '"diagonal"' is not assignable to type '"up" | "down" | "left" | "right"'.

let eventVar: 'click' | 'mouseover' | 'keydown';
eventVar = 'click';    // Valid
// eventVar = 'doubleclick'; // Error: Type '"doubleclick"' is not assignable to type '"click" | "mouseover" | "keydown"'.

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 4;       // Valid
// diceRoll = 7;     // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.

let isDone: true | false;
isDone = true;      // Valid
// isDone = null;    // Error: Type 'null' is not assignable to type 'true | false'.

// Type inference with literal types
let directionInferred = 'up'; // Type of directionInferred is 'up' | 'down' | 'left' | 'right'

// Discriminated unions with literal types and interfaces
interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
            // TypeScript checks that all cases are handled
            const exhaustiveCheck: never = shape;
            return exhaustiveCheck;
    }
}

// Example usage
let circle: Circle = { kind: 'circle', radius: 5 };
let square: Square = { kind: 'square', sideLength: 4 };

console.log(getArea(circle)); // Outputs: 78.53981633974483
console.log(getArea(square)); // Outputs: 16

// Type narrowing with literals
function formatMessage(status: 'success' | 'error'): string {
    if (status === 'success') {
        return 'Operation successful';
    } else {
        return 'An error occurred';
    }
}

console.log(formatMessage('success')); // Outputs: "Operation successful"
console.log(formatMessage('error'));   // Outputs: "An error occurred"
// console.log(formatMessage('pending')); // Error: Type '"pending"' is not assignable to type '"success" | "error"'.