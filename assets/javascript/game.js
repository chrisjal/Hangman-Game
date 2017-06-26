// created: June 24, 2017 12:00PM
// Author: Chris Jalallian
// Revisions:
// CJ 6/25 13:00 attempted to get underscores working w/various regex and other functions; unsuccessful

// List of words
var wordBank = ["France", "Sweden", "Spain", "Italy", "Greece", "Iran", "Egypt", "Thailand", "Cambodia", "Mexico", "Canada", "", "China", "Germany"];

var rngBank = "";
var rngBankLetters = [];
var placeholder = 0;
var guesses = 12;
// Keep track of guesses
var guessedWrong = [];
var guessedRight = [];

var wins = 0;
var losses = 0;
var userGuess = [];

function word(){
	rngBank = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(rngBank);
}

document.getElementById("Retry").addEventListener("click", word);	
document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();
	// Picks a word at random (works)

	rngBankLetters = rngBank.split("");
	placeholder = rngBankLetters.length;
	for (var i = 0; i < placeholder; i++) {
		guessedRight.push("_")
	}
	
	guesses = 12;
	guessedWrong = [];
	guessedRight = [];

	console.log(guessedRight);
	console.log(guessedWrong);
	console.log(placeholder);
}
