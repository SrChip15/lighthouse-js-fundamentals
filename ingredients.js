var ingredients = [
"eggs",
"milk",
"flour",
"sugar",
"baking soda",
"baking powder",
"chocolate chips",
"bananas"
];

// Write a while loop that prints out the contents of ingredients:
let counter = 0;
console.log("\nWith while loop");
console.log("---------------");
while (counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nWith for loop");
console.log("---------------");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nWith for loop backwards");
console.log("-----------------------");
let lastIndex = ingredients.length - 1;
for (let i = lastIndex; i >= 0; i--) {
  console.log(ingredients[i]);
}

console.log("\n----End----\n");
