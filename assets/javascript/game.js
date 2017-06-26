// created: June 24, 2017 12:00PM
// Author: Chris Jalallian
// Revisions:
// CJ 6/25 13:00 attempted to get underscores working w/various regex and other functions; unsuccessful

// List of words
var wordBank = ["France", "Great Britain", "Canada", "South Korea", "China", "Germany"];



var hiddenWord;
var count = 0;
// Keep track of guesses
var guessed = [];

// Picks a word at random (works)
var rngBank = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(rngBank);
