function myFunction(message, favoriteNumber) {
  message = message + " World!";
  console.log(message, favoriteNumber);
}

myFunction("Hello");
myFunction("Hi", 42);

function aFunction(favoriteNumber) {
  let newNumber = favoriteNumber + 100;
  return newNumber;
}
let result = aFunction(42);
console.log(result);

function outOfScopeVariable() {
  let message = "Hello World!";
  return message;
}
console.log(outOfScopeVariable());
console.log(message);
