// a. Return the full name of a person object
function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

// b. Check if a person is 18 or older
function isAdult(person) {
  return person.age >= 18;
}

// c. Filter an array of people by minimum age
function filterByAge(people, minAge) {
  return people.filter((person) => person.age >= minAge);
}

// d. Add a new property to an object
function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

// e. Check if an object has a specific property
function hasProperty(obj, key) {
  return obj.hasOwnProperty(key);
}

// f. Count the number of properties in an object
function countProperties(obj) {
  return Object.keys(obj).length;
}

// Example Usage:
const person1 = { firstName: "John", lastName: "Doe", age: 25 };
const person2 = { firstName: "Jane", lastName: "Smith", age: 17 };
const people = [
  person1,
  person2,
  { firstName: "Alice", lastName: "Brown", age: 30 },
];

console.log(fullName(person1)); // "John Doe"
console.log(isAdult(person1)); // true
console.log(isAdult(person2)); // false
console.log(filterByAge(people, 18)); // [{ firstName: "John", lastName: "Doe", age: 25 }, { firstName: "Alice", lastName: "Brown", age: 30 }]

const newPerson = addProperty(person1, "gender", "Male");
console.log(newPerson); // { firstName: "John", lastName: "Doe", age: 25, gender: "Male" }

console.log(hasProperty(person1, "age")); // true
console.log(hasProperty(person1, "address")); // false
console.log(countProperties(person1)); // 4 (firstName, lastName, age, gender)
