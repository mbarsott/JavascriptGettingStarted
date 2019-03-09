function changeCard(card) {
  card.suit = "Clubs";
}
let card = {
  suit: "Hearts",
  value: "Queen"
};

changeCard(card);

console.log(card.suit);
console.log(card.value);

let cards = [
  { suit: "Hearts", value: "Queen" },
  { suit: "Clubs", value: "King" }
];

console.log(cards[1].value);

let result = Math.random() * 52;
result = Math.trunc(result);
console.log(result);

result = new Date();
console.log(result);
result = result.toDateString();
console.log(result);
result = "Hello World!";
result = result.toUpperCase();
console.log(result);
result = 0 / 0;
console.log(Number.isNaN(result));
