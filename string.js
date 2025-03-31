// a. Double every number in an array
function double(arr) {
  return arr.map((num) => num * 2);
}

// b. Filter out even numbers from an array
function filterEven(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

// c. Calculate the sum of all numbers in an array
function sum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// d. Calculate the average of all numbers in an array
function average(arr) {
  return arr.length === 0 ? 0 : sum(arr) / arr.length;
}

// e. Find the largest number in an array
function findMax(arr) {
  return Math.max(...arr);
}

// f. Find the smallest number in an array
function findMin(arr) {
  return Math.min(...arr);
}

// g. Remove duplicate values from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// h. Find the index of a given value in an array (or -1 if not found)
function findIndex(arr, value) {
  return arr.indexOf(value);
}

// Example Usage:
const numbers = [4, 2, 9, 3, 2, 9, 5, 7];

console.log(double(numbers)); // [8, 4, 18, 6, 4, 18, 10, 14]
console.log(filterEven(numbers)); // [9, 3, 9, 5, 7]
console.log(sum(numbers)); // 41
console.log(average(numbers)); // 5.125
console.log(findMax(numbers)); // 9
console.log(findMin(numbers)); // 2
console.log(removeDuplicates(numbers)); // [4, 2, 9, 3, 5, 7]
console.log(findIndex(numbers, 3)); // 3
console.log(findIndex(numbers, 10)); // -1 (not found)
