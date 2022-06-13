// declare and initialize array
let game = ["APPLE", "ORANGE", "ANANAS", "STRAWBERRY", "BLUEBERRY", "RASPBERRY", "PERSIMON", "PUMPS", "PEACHES", "GRAPES"];
let hangImg = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png"]
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let wordStatus = null;



function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

function loadImg() {
    document.getElementById('hangman').src = './images/' + attemptsLeft + '.png';
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}




document.getElementById("submit").addEventListener("click", function(event) {

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = '';

    for (let c = 0; c < answer.length; c++) {

        found = false;
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }

        output = output + display[c] + ' ';
    }

    if (found == false) {
        attemptsLeft--;
        hangman = loadImg(hangImg[0]);
    }



    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

    document.getElementById("word").innerHTML = output;
    output = '';

});