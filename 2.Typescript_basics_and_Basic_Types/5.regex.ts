const regexstr = "Hello, World! Hello, TypeScript!";

// Match all occurrences of "Hello"
const allHellos = regexstr.match(/Hello/g);
console.log(allHellos); // ["Hello", "Hello"]

// Find the index of the first occurrence of "TypeScript"
const typeScriptIndex = regexstr.search(/TypeScript/);
console.log(typeScriptIndex); // 20

// Case-insensitive match
const helloCaseInsensitive = regexstr.match(/hello/gi);
console.log(helloCaseInsensitive); // ["Hello", "Hello"]

// Match any word character (alphanumeric & underscore)
const wordChars = regexstr.match(/\w/g);
console.log(wordChars); // ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d", "H", "e", "l", "l", "o", "T", "y", "p", "e", "S", "c", "r", "i", "p", "t"]

// Match a digit
const digits = "abc123".match(/\d/g);
console.log(digits); // ["1", "2", "3"]

// Positive lookahead: match "Hello" only if followed by ", World!"
const helloFollowedByWorld = regexstr.match(/Hello(?=, World!)/);
console.log(helloFollowedByWorld); // ["Hello"]

// Negative lookahead: match "Hello" only if not followed by ", World!"
const helloNotFollowedByWorld = regexstr.match(/Hello(?!, World!)/);
console.log(helloNotFollowedByWorld); // ["Hello"]