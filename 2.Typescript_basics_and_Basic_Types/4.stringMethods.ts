// String Methods in TypeScript

// 1. charAt(index) - Returns the character at the specified index.
const strMethods = "Hello, World!";
console.log(strMethods.charAt(0)); // "H"
console.log(strMethods.charAt(6)); // " "
console.log(strMethods.charAt(7)); // "W"

// 2. charCodeAt(index) - Returns the Unicode of the character at the specified index.
console.log(strMethods.charCodeAt(0)); // 72
console.log(strMethods.charCodeAt(6)); // 32 unicode for space
console.log(strMethods.charCodeAt(7)); // 87

// 3. concat(...strings) - Concatenates the string arguments to the calling string and returns a new string.
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"

// 4. includes(searchString, position?) - Determines whether one string may be found within another string.
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false

// The position parameter specifies the index to start the search from.
// Example with position parameter
console.log(str.includes("World", 7)); // true
console.log(str.includes("World", 8)); // false
console.log(str.includes("Hello", 1)); // false
console.log(str.includes("o", 5)); // true
console.log(str.includes("o", 6)); // true (second 'o' in "World")

// 5. endsWith(searchString, length?) - Determines whether a string ends with the characters of a specified string.
console.log(str.endsWith("!")); // true
console.log(str.endsWith("World", 12)); // true

// 6. indexOf(searchValue, fromIndex?) - Returns the index within the calling string of the first occurrence of the specified value.
console.log(str.indexOf("o")); // 4
console.log(str.indexOf("o", 5)); // 8

// 7. lastIndexOf(searchValue, fromIndex?) - Returns the index within the calling string of the last occurrence of the specified value.
console.log(str.lastIndexOf("o")); // 8

// 8. localeCompare(compareString) - Returns a number indicating whether the reference string comes before, after, or is the same as the given string in sort order.
console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); // 1
console.log("a".localeCompare("a")); // 0

// 9. match(regexp) - Retrieves the matches when matching a string against a regular expression.
const result = str.match(/o/g);
console.log(result); // ["o", "o"]

// 10. repeat(count) - Returns a new string with a specified number of copies of the string it was called on.
console.log("abc".repeat(3)); // "abcabcabc"

// 11. replace(searchValue, newValue) - Returns a new string with some or all matches of a pattern replaced by a replacement.
console.log(str.replace("World", "TypeScript")); // "Hello, TypeScript!"

// 12. search(regexp) - Executes a search for a match between a regular expression and this String object.
console.log(str.search(/World/)); // 7

// 13. slice(beginIndex, endIndex?) - Extracts a section of a string and returns it as a new string.
console.log(str.slice(7, 12)); // "World"

// 14. split(separator, limit?) - Splits a String object into an array of strings by separating the string into substrings.
const words = str.split(" ");
console.log(words); // ["Hello,", "World!"]

// 15. startsWith(searchString, position?) - Determines whether a string begins with the characters of a specified string.
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("World", 7)); // true

// 16. substring(indexStart, indexEnd?) - Returns the part of the string between the start and end indexes, or to the end of the string.
console.log(str.substring(0, 5)); // "Hello"

// 17. toLowerCase() - Returns the calling string value converted to lower case.
console.log(str.toLowerCase()); // "hello, world!"

// 18. toUpperCase() - Returns the calling string value converted to upper case.
console.log(str.toUpperCase()); // "HELLO, WORLD!"

// 19. trim() - Removes whitespace from both ends of a string.
const strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // "Hello, World!"

// 20. trimStart() / trimLeft() - Removes whitespace from the beginning of a string.
console.log(strWithSpaces.trimStart()); // "Hello, World!   "

// 21. trimEnd() / trimRight() - Removes whitespace from the end of a string.
console.log(strWithSpaces.trimEnd()); // "   Hello, World!"

// 22. valueOf() - Returns the primitive value of a String object.
const strObj = new String("Hello, World!");
console.log(strObj.valueOf()); // "Hello, World!"

// Template Literals

// In addition to the above methods, TypeScript also supports template literals, which are string literals allowing embedded expressions.
// const name = "TypeScript";
// const greeting = `Hello, ${name}!`;
// console.log(greeting); // "Hello, TypeScript!"

// Template literals provide a more readable and convenient syntax for string interpolation and multi-line strings.