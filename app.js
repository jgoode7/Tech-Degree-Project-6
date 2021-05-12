//Const and other variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const startGame = document.querySelector('#overlay');


const title = document.querySelector('.title');
const phraseLi = phrase.getElementsByTagName('li');

//Variable for wrong answers
let missed = 0;

//Array for phrases
let phrases = [
    'what do you say billy ray',
    'all good in the hood',
    'whaddayat',
    'oh right on hey',
    'were you born in a barn'
];

//Listener to Start Game-- hide overlay start screen
btnReset.addEventListener('click', () => {
    startGame.style.display = 'none';
});

//Using math.floor to randomize the index of phrase array
const getRandomPhrase = arr => {
    let indexPhrase = Math.floor(Math.random() * arr.length);
    let splitPhrase = arr[indexPhrase].split('');
    return splitPhrase;
}

//Calling function
const randomPhrase = getRandomPhrase(phrases)

//Const to add the phrase, visible on screen
const addPhraseToDisplay = arr => {
    for(let i = 0; i < arr.length; i++ ) {
        let phraseUl = document.querySelector('#phrase ul');
        let li = document.createElement('li');
        li.textContent = arr[i];
        phraseUl.appendChild(li);
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
    let match = null;
    for( let i = 0; i < phraseLi.length; i++ ) {
        if (button === phraseLi[i].textContent) {
            phraseLi[i].classList.add('show');
            match = true;
        }
    }
    return match;

};

// Event Listener for Onscreen Keyboard

qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;
        const selected = checkedLetter(e.target.textContent.toLowerCase());
        if (selected === null) {
            missed++;
            let img = document.querySelector('#scoreboard ol img');
            img.remove();
        }
        checkWin();
    }  
});

//Const to check if player wins
const checkWin = () => {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    if (letter.length === show.length) {
        overlay.className = 'win';
        title.textContent = 'Winner!!!'
        overlay.style.display = 'flex';
    }else if (missed > 4) {
        overlay.className = 'lose';
        title.textContent = "I'm sorry, you're out of lives. Try Again!";
        overlay.style.display = 'flex';
    }
};    





