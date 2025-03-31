// a. Capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// b. Reverse a string
function reverse(str) {
  return str.split("").reverse().join("");
}

// c. Check if a string is a palindrome
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters
  return cleanStr === reverse(cleanStr);
}

// d. Count the number of words in a string
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

// e. Convert a string to snake_case
function toSnakeCase(str) {
  return str.toLowerCase().replace(/\s+/g, "_");
}

// f. Convert a string to camelCase
function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) => (index === 0 ? word : capitalize(word)))
    .join("");
}

// g. Find the longest word in a string
function longestWord(str) {
  return str
    .split(/\s+/)
    .reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ""
    );
}

// h. 
function countLetter(str, letter) {
  return str
    .split("")
    .filter((char) => char.toLowerCase() === letter.toLowerCase()).length;
}


console.log(capitalize("hello world")); 
console.log(reverse("hello")); 
console.log(isPalindrome("racecar")); 
console.log(wordCount("This is a test sentence."));
console.log(toSnakeCase("Convert this to snake case")); 
console.log(toCamelCase("convert this to camel case")); 
console.log(longestWord("The quick brown fox jumps over the lazy dog")); 
console.log(countLetter("hello world", "l")); 
