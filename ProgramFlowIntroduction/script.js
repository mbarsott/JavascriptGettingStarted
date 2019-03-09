/* falsy values:
false
0
empty strings ("" or '')
null
undefined
NaN
*/
let score = 1000;
if (score === 1000) {
  score += 100;
}
if (score !== 1000) {
  console.log("Score is not 1000!");
}
console.log("Score is ", score);

score = 100;
if (score > 1000) {
  score += 100;
} else if (score === 1000) {
  console.log("Almost!");
} else {
  console.log("Nice Try!");
}

let state = "TX";
switch (state) {
  case "NY":
    console.log("New York");
    break;
  case "TX":
    console.log("Texas");
    console.log("Austin");
    break;
  default:
    console.log("Unknown state");
    break;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let count = 1;
while (count < 3) {
  console.log(count);
  count++;
}
