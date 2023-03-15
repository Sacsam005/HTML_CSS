var fruits = ["dragon fruit", "banana", "pineapple", "blueberry", "mango", "passion fruit"];

// 1. Sort the fruits in alphabetical order
var sorted = fruits.sort();

console.log(sorted);

// 2. Now remove fruits with the word "fruit" in the name
var noFruit = fruits.filter(fruit => !fruit.includes("fruit"));
console.log(noFruit);