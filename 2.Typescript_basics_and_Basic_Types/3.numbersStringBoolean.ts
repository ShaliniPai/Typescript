function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const sum = n1 + n2;
    if (showResult) {
        // If true, concatenate the phrase with the sum and log it
        // Note: JavaScript will convert the number to a string when concatenated with a string
        console.log(phrase + sum);
    }
    return sum;
}

const numb1 = 10;
const numb2 = 20;
const phrase = "Result is: "
const output = add(numb1, numb2, true, phrase)