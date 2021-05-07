//Const and other variables
const qwerty = document.getElementById('#qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const startGame = document.querySelector('#overlay');

//Variable for wrong answers
let missed = 0;

//Array for phrases
let phrases = [
    'What do you say Billy Ray',
    'All good in the hood',
    'Whaddayat',
    'Oh right on hey?',
    'Were you born in a barn?'
];

//Listener to Start Game-- hide overlay start screen

btnReset.addEventListener("click", () => {
    startGame.style.display = 'none';
});