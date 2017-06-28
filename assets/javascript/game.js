// created: June 24, 2017 12:00PM
// Author: Chris Jalallian
// Revisions:
// CJ 6/25 13:00 attempted to get underscores working w/various regex and other functions; unsuccessful
// CJ 6/26 15:25 Underscores work, word generator works, need key capture to register responses
// CJ 6/27 20:00 Complete rework - need to fix wins/losses/html/style/resetting


// List of words
// var wordBank = ["France", "Sweden", "Spain", "Italy", "Greece", "Iran", "Egypt", "Thailand", "Cambodia", "Mexico", "Canada", "China", "Germany"];
var wordBank = ["france", "sweden", "spain", "italy", "greece", "iran", "egypt", "thailand", "cambodia", "mexico", "canada", "china", "germany"];
var rngBank = wordBank[Math.floor(Math.random() * wordBank.length)];
//generates word on click [broke]
// document.getElementById("Retry").addEventListener("click", rngBank);

var answer = [];
var guesses = 12;
// Keep track of guesses
var guessedWrong = [];
var guessedRight = [];

var wins = 0;
var losses = 0;
var userGuess = [];

// function resetWord() {
// 	rngBank;
// }

function startGame() {
	for (var i = 0; i < rngBank.length; i++) {
		guessedRight.push("_");
	}

	console.log(rngBank)
	document.getElementById("correctGuesses").innerHTML = guessedRight.join(" ");
	document.getElementById("guessesRemain").innerHTML = guesses;
}

function updateGuess(letters) {
	guesses--;
	document.getElementById("guessesRemain").innerHTML = guesses;

	// Check word, if wrong letter = -1 life, add to guessed letters
	if (rngBank.indexOf(letters) === -1) {
		guessedWrong.push(letters);
		document.getElementById("alreadyGuessed").innerHTML = guessedWrong.join(", ");
	}
	

	// Need to replace _ for correct letters
	// If letter in word, replace placeholder
	else {
		for (var i = 0; i < rngBank.length; i++) {
			if (rngBank[i] === letters) {
				
				guessedRight[i] = letters;
			}
		}
		//leave space because underscores merge without them and unable to see amount of characters
		document.getElementById("correctGuesses").innerHTML = guessedRight.join(" ");
	}	

	function status() {
		if (guessedRight.indexOf("_") === -1) {
			wins++;
			startGame();
			ResetWord();
		}
		else if (guesses === 0) {
			losses++;
			startGame()
			resetWord()
		}
	}
}

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	updateGuess(letterGuessed);
}

//fix to a key
startGame();





// function word(){

	
// 	console.log(rngBank);
// 	//splits word and adds _ as placeholder
// 	rngBankLetters = rngBank.split("");
// 	placeholderLength = rngBankLetters.length;
// 	for (var i = 0; i < placeholderLength; i++) {
// 		placeholder.push("_");

// 	console.log(rngBankLetters);
// 	console.log(placeholder);
// 	}
// }

// var remainingLetters = wordBank.length;

// while (remainingLetters > 0) {
// 	answer.join("");
// 	console.log(remainingLetters)

// }	

// //FIX THIS??????
// document.onkeyup = function(event) {
// 	var userGuess = event.key.toLowerCase();
// 	// Picks a word at random (works)
	
// 	guesses = 12;
// 	guessedWrong = [];
// 	guessedRight = [];

// 	console.log(guessedRight);
// 	console.log(guessedWrong);
// 	console.log(placeholder);

// 		function check(letter) {
// 		for (var i = 0; i < rngBankLetters; i++) {
// 			if (rngBank[i] == letter) {
// 				userGuess = true;
// 				console.log(placeholder);
// 				console.log(userGuess);
// 			}
// 		}
// 	}
// }

