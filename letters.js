function Blank(words) {
    this.words = words;
    this.wordsArr = [];
    this.display = "";

    for (var i = 0; i < this.words.length; i++) {
        this.wordsArr = this.words.split("");
    };

    for (var j = 0; j < this.wordsArr.length; j++) {
        if (this.wordsArr[j] == " ") {
            this.display += "  ";
        } else {
            this.display += "_ ";
        };
    };
    console.log("\n" + this.display + "\n");
    this.display = "";
}

function Letters(words, guess, lettersArr) {
    this.words = words;
    this.display = "";
    this.guess = guess;
    this.letters = "abcdefghijklmnopqrstuvwxyz";
    this.lettersArr = lettersArr;

    for (var m = 0; m < this.letters.length; m++) {
        if (guess == this.letters.length[m]) {
            if (this.letters.length[m]) {
                return false;
            };
        };
    };

    for (var k = 0; k < this.words.length; k++) {
        var n = this.lettersArr.includes(this.words[k])
        if (this.words[k] == " ") {
            this.display += "  ";
        } else if (n) {
            this.display += this.words[k] + " ";
        } else {
            this.display += "_ "
        };
    };

    console.log("\n" + this.display + "\n");
    this.display = ""

    for (var l = 0; l < this.letters.length; l++) {
        if (guess == this.letters.length[l]) {
            this.letters.length[l] = true;
        }
    }



};

module.exports = {
    Letters: Letters,
    Blank: Blank
};




