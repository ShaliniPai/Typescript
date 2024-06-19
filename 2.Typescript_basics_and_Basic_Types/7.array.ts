// arrayMethods.ts

// Basic Methods

// 1. push - Adds one or more elements to the end of an array.
let arr1 = [1, 2, 3];
arr1.push(4); // arr1 is now [1, 2, 3, 4]
console.log(arr1);

// 2. pop - Removes the last element from an array and returns that element.
let arr2 = [1, 2, 3];
let lastElement = arr2.pop(); // returns 3, arr2 is now [1, 2]
console.log(arr2, lastElement);

// 3. shift - Removes the first element from an array and returns that element.
let arr3 = [1, 2, 3];
let firstElement = arr3.shift(); // returns 1, arr3 is now [2, 3]
console.log(arr3, firstElement);

// 4. unshift - Adds one or more elements to the beginning of an array.
let arr4 = [1, 2, 3];
arr4.unshift(0); // arr4 is now [0, 1, 2, 3]
console.log(arr4);

// 5. concat - Merges two or more arrays.
let arr5_1 = [1, 2];
let arr5_2 = [3, 4];
let merged = arr5_1.concat(arr5_2); // [1, 2, 3, 4]
console.log(merged);

// 6. join - Joins all elements of an array into a string.
let arr6 = ['hello', 'world'];
let str = arr6.join(' '); // "hello world"
console.log(str);

// 7. reverse - Reverses the order of the elements in an array.
let arr7 = [1, 2, 3];
arr7.reverse(); // arr7 is now [3, 2, 1]
console.log(arr7);

// 8. slice - Returns a shallow copy of a portion of an array.
let arr8 = [1, 2, 3, 4, 5];
let sliced = arr8.slice(1, 3); // [2, 3]
console.log(sliced);

// 9. splice - Adds or removes elements from an array.
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(2, 1, 10); // arr9 is now [1, 2, 10, 4, 5]
console.log(arr9);

// 10. toString - Returns a string representing the array and its elements.
let arr10 = [1, 2, 3];
let str10 = arr10.toString(); // "1,2,3"
console.log(str10);

// 11. toLocaleString - Returns a localized string representing the array and its elements.
let arr11 = [1000, 2000, 3000];
let str11 = arr11.toLocaleString(); // "1,000,2,000,3,000" (depending on locale)
console.log(str11);

// Iteration Methods

// 1. forEach - Executes a provided function once for each array element.
let arrIt1 = [1, 2, 3];
arrIt1.forEach(element => console.log(element));

// 2. map - Creates a new array with the results of calling a provided function on every element.
let arrIt2 = [1, 2, 3];
let doubled = arrIt2.map(x => x * 2); // [2, 4, 6]
console.log(doubled);

// 3. filter - Creates a new array with all elements that pass the test implemented by the provided function.
let arrIt3 = [1, 2, 3, 4];
let evens = arrIt3.filter(x => x % 2 === 0); // [2, 4]
console.log(evens);

// 4. reduce - Applies a function against an accumulator and each element to reduce it to a single value.
let arrIt4 = [1, 2, 3, 4];
let sum = arrIt4.reduce((acc, x) => acc + x, 0); // 10
console.log(sum);

// 5. reduceRight - Applies a function against an accumulator and each element (from right to left) to reduce it to a single value.
let arrIt5 = [1, 2, 3, 4];
let sumRight = arrIt5.reduceRight((acc, x) => acc + x, 0); // 10
console.log(sumRight);

// 6. some - Tests whether at least one element in the array passes the test.
let arrIt6 = [1, 2, 3];
let hasEven = arrIt6.some(x => x % 2 === 0); // true
console.log(hasEven);

// 7. every - Tests whether all elements in the array pass the test.
let arrIt7 = [2, 4, 6];
let allEven = arrIt7.every(x => x % 2 === 0); // true
console.log(allEven);

// 8. find - Returns the first element that passes the test.
let arrIt8 = [1, 2, 3, 4];
let firstEven = arrIt8.find(x => x % 2 === 0); // 2
console.log(firstEven);

// 9. findIndex - Returns the index of the first element that passes the test.
let arrIt9 = [1, 2, 3, 4];
let firstEvenIndex = arrIt9.findIndex(x => x % 2 === 0); // 1
console.log(firstEvenIndex);

// Array Properties

// 1. length - Returns the number of elements in the array.
let arrProp = [1, 2, 3];
console.log(arrProp.length); // 3

// Array Manipulation Methods

// 1. fill - Fills all the elements with a static value.
let arrMan1 = [1, 2, 3, 4];
arrMan1.fill(0); // [0, 0, 0, 0]
console.log(arrMan1);

// 2. copyWithin - Copies part of an array to another location within the same array.
let arrMan2 = [1, 2, 3, 4, 5];
arrMan2.copyWithin(0, 3); // [4, 5, 3, 4, 5]
console.log(arrMan2);

// Searching and Sorting Methods

// 1. indexOf - Returns the first index at which a given element is found.
let arrSearch1 = [1, 2, 3, 2];
let index1 = arrSearch1.indexOf(2); // 1
console.log(index1);

// 2. lastIndexOf - Returns the last index at which a given element is found.
let arrSearch2 = [1, 2, 3, 2];
let index2 = arrSearch2.lastIndexOf(2); // 3
console.log(index2);

// 3. includes - Determines whether an array includes a certain element.
let arrSearch3 = [1, 2, 3];
let hasTwo = arrSearch3.includes(2); // true
console.log(hasTwo);

// 4. sort - Sorts the elements of an array.
let arrSearch4 = [3, 1, 2];
arrSearch4.sort(); // [1, 2, 3]
console.log(arrSearch4);

// 5. flat - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let arrSearch5 = [1, [2, 3], [4, [5, 6]]];
let flattened = arrSearch5.flat(); // [1, 2, 3, 4, [5, 6]]
let fullyFlattened = arrSearch5.flat(2); // [1, 2, 3, 4, 5, 6]
console.log(flattened, fullyFlattened);

// 6. flatMap - First maps each element using a mapping function, then flattens the result into a new array.
let arrSearch6 = [1, 2, 3];
let mappedAndFlattened = arrSearch6.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
console.log(mappedAndFlattened);