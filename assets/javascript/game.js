// created: June 24, 2017 12:00PM
// Author: Chris Jalallian
// Revisions:
// CJ 6/25 13:00 attempted to get underscores working w/various regex and other functions; unsuccessful
// CJ 6/26 15:25 Underscores work, word generator works, need key capture to register responses



// List of words
var wordBank = ["France", "Sweden", "Spain", "Italy", "Greece", "Iran", "Egypt", "Thailand", "Cambodia", "Mexico", "Canada", "", "China", "Germany"];

var rngBank = "";
var rngBankLetters = [];
var placeholderLength = 0;
var placeholder = [];
var guesses = 12;
// Keep track of guesses
var guessedWrong = [];
var guessedRight = [];

var wins = 0;
var losses = 0;
var userGuess = [];

function word(){
	//random word
	rngBank = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(rngBank);
	//splits word and adds _ as placeholder
	rngBankLetters = rngBank.split("");
	placeholderLength = rngBankLetters.length;
	for (var i = 0; i < placeholderLength; i++) {
		placeholder.push("_");

	console.log(rngBankLetters);
	console.log(placeholder);
	}
}

//generates word on click
document.getElementById("Retry").addEventListener("click", word);	

//FIX THIS??????
document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();
	// Picks a word at random (works)
	
	guesses = 12;
	guessedWrong = [];
	guessedRight = [];

	console.log(guessedRight);
	console.log(guessedWrong);
	console.log(placeholder);

		function check(letter) {
		for (var i = 0; i < rngBankLetters; i++) {
			if (rngBank[i] == letter) {
				userGuess = true;
				console.log(placeholder);
				console.log(userGuess);
			}
		}
	}
}

