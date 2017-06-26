// List of words
var wordBank = ["France", "Great Britain", "Canada", "South Korea", "China", "Germany"];



var hiddenWord;
var count = 0;
// Keep track of guesses
var guessed = [];

// Picks a word at random (works)
var rngBank = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(rngBank);
