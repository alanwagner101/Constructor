var inquirer = require("inquirer");
var Words = require("./words");

var j = 6;
var lettersDisplay = "";
var p = 0;
var lettersArr = [];
var win = 0;
var lose = 0;

function RunBlank() {
    var newWord = Words.Words();
    RunLetters(newWord);
};

RunBlank();

function RunLetters(randomWord) {
    this.randomWord = randomWord;

    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "guess"
            }
        ]).then(function (res) {

            var w = randomWord.includes(res.guess);

            if (w == false) {
                j--
            }

            for (var i = 0; i < randomWord.length; i++) {
                if (randomWord[i] == res.guess) {
                    p++
                }
            }
            console.log(p)

            var x = lettersDisplay.includes(res.guess);
            lettersArr.push(res.guess);

            if (x) {
                console.log("\nThis has already been guessed\n");
                RunLetters(randomWord);
                return false;
            };


            if (j == 0) {
                console.log("\n========================================\n");
                console.log("\n The word was : " + randomWord + "\n");
                console.log("\nYou ran out of tries! Try Again!\n");
                console.log("\n========================================\n");
                j = 6;
                p = 0;
                lose++
                lettersDisplay = "";
                lettersArr = [];
                RunBlank();
            } else if (p == randomWord.length) {
                console.log("\n========================================\n");
                console.log("\n The word was : " + randomWord + "\n");
                console.log("\nYou Win!! Try another one!!\n");
                console.log("\n========================================\n");
                p = 0;
                j = 6;
                win++
                lettersDisplay = "";
                lettersArr = [];
                RunBlank();
            } else {

                Words.Guess(randomWord, res.guess, lettersArr);

                lettersDisplay += res.guess + ", ";
                console.log("\nUsed Letters : " + lettersDisplay);
                console.log("\nTries Left : " + j);
                console.log("\nWins : " + win + "    |     Loses : " + lose + "  ")
                RunLetters(randomWord);
            };



        });



};