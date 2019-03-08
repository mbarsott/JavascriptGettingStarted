let value = "apple";
console.log(typeof(value)); // string
value = 99;
console.log(typeof(value)); // number
value = 4.1+4.3;
console.log(value); // 8.3999999999999
value = 10/0;
console.log(value); // Infinity
value = -10/0;
console.log(value); // -Infinity
value = 0/0;
console.log(value); // NaN
console.log(typeof(value)); // number
value = false;
console.log(value, typeof(value)); // false boolean
let calculateSaleTax;
console.log(calculateSaleTax, typeof(calculateSaleTax)); // undefined undefined
calculateSaleTax = null;
console.log(calculateSaleTax, typeof(calculateSaleTax)); // null object
let values = [1, 2, 3];
console.log(values[0]); // 1
console.log(values[1]); // 2
console.log(values[2]); // 3 
console.log(values[3]); // undefined
let cities = [];
console.log(cities); // Array(0) []
cities = ['New York', 'Los Angeles', 'Chicago'];
console.log(cities); // Array(3) ["New York", "Los Angeles", "Chicago"]
console.log(cities[0]); // New York
values = [0, "Los Angeles", false];
console.log(values[0]); // 0
console.log(values[1]); // Los Angeles
console.log(values[2]); // false
console.log(values.length); // 3
values.push(44);
values.push(33);
values.push(-100);
console.log(values.length); // 6
let result = values.pop(); // removes the last value from the array
console.log(values.length); // 5
console.log(result); // -100
result = values.shift(); // removes the first value from the array
console.log(values.length); // 4
console.log(result); // 0
values.splice(1,2); // removes two elements from the array starting at position 1 (false and 44 from ["Los Angeles", false, 44, 33])
console.log(values.length); // 2
for (var i = 0; i < values.length; i++) {
    console.log(values[i]); // Los Angeles \n 33
}
values.splice(0, 1, "new item", 55); // removes one item at position zerio ("Los Angeles"), and insert two items in its place
for (var i = 0; i < values.length; i++) {
    console.log(values[i]); // new item \n 55 \n 33
}
