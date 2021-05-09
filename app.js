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

btnReset.addEventListener('click', () => {
    startGame.style.display = 'none';
});

//Using math.floor to randomize the index of phrase array
const getRandomPhrase = arr => {
    let indexPhrase = Math.floor(Math.random() * arr.length);
    let randomPhrase = arr[indexPhrase].split('');
    return randomPhrase;
}

//Calling function
const randomPhrase = getRandomPhrase(phrases)

//const to add the phrase, visible on screen
const addPhraseToDisplay = arr => {
    for(let i = 0; i < arr.length; i++ ) {
        let phrase = document.querySelector('#phrase ul');
        let li = document.createElement('li');
        li.textContent = arr[i];
        phrase.appendChild(li);
        if (arr[i] === ' '){
            li.classList.add('space');
        } else {
            li.classList.add('letter');
        }
    }
} 

//call function to display hidden phrase on display
addPhraseToDisplay(randomPhrase)

//Calling a function to check the letters
const checkedLetter = button => {
    const letter = document.querySelectorAll('.letter');
    let match = 'null';
    for() {

    }
}




