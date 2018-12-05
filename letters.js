var a = process.argv[2]

function blankLetters(words, guess) {
    this.words = words;
    this.wordsArr = [];
    this.display = "";
    this.guess = guess;
    this.letters = "abcdefghijklmnopqrstuvwxyz";

    for (var m = 0; m < this.letters.length; m++) {
        if (guess == this.letters.length[m]) {
            if(this.letters.length[m]) {
                console.log("this letter has already been guessed")
                return false
            };
        }
    }

    for (var i = 0; i < this.words.length; i++) {
        this.wordsArr = this.words.split("");
    };
    console.log(this.wordsArr);
    for (var j = 0; j < this.wordsArr.length; j++) {
        if (this.wordsArr[j] == " ") {
            this.display += "  ";
        } else {
            this.display += "_ ";
        };
    };
    console.log(this.display);
    this.display = ""

    for (var k = 0; k < words.length; k++) {
        if (words[k] == " ") {
            this.display += "  ";
        } else if (words[k] == guess) {
            this.display += guess + " "
        } else {
            this.display += "_ "
        };
    };
    console.log(this.display);

    for (var l = 0; l < this.letters.length; l++) {
        if (guess == this.letters.length[l]) {
            this.letters.length[l] = true;
        }
    }
};

var thisone = new blankLetters("word game name", a);

module.exports = blankLetters;




