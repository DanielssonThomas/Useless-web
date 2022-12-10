const comments = [
  "Great! doesn't it look funny?",
  "I couldn't have done it better my self!",
  'Okay thats enough, lets enjoy the view',
  'WOAH THERE, calm down! No need for more.',
  'No- NO...Fine, you can have THREE no more',
  '...',
  'Oh no',
  'STOP',
  'STOOOP',
  'ITS ALL GOING DOWN',
  'HALT, FREEZE, PAUSE, DISPLAY: NONE; COME ON',
  'Its over, its all over',
  'What is this abomination...',
];

const emojis = ['👻', '🙌', '🖖', '😎', '🫠', '🐱'];

const summonBoxOne = document.querySelector('.summon-container-one');
const summonBoxTwo = document.querySelector('.summon-container-two');
const summonBoxThree = document.querySelector('.summon-container-three');

const userInput = document.querySelector('.user-interact-input');

const thirdPageBtn = thirdPage.querySelector('.user-interact-btn');

let commentIndex = 0;
let commentDelay = 0;
let boxIndex = 0;
let summonLimit = 15;
let currentSummonAmount = 0;

const stageTwo = () => {
  clearInterval();
};

const stageTwoIncrement = () => {
  currentSummonAmount++;
  if (currentSummonAmount === summonLimit) {
  }
};

const summon = (value) => {
  const p = document.createElement('p');
  p.classList.add('summon');
  p.textContent = value;

  if (boxIndex === 0) {
    summonBoxOne.appendChild(p);
  }

  if (boxIndex === 1) {
    summonBoxTwo.appendChild(p);
  }

  if (boxIndex === 2) {
    summonBoxThree.appendChild(p);
  }

  boxIndex++;
  if (boxIndex === 3) {
    boxIndex = 0;
  }
  stageTwoIncrement();
};

const continueAutoSummon = () => {
  setInterval(() => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    summon(emoji);
    commentDelay++;
    if (commentIndex !== 12 && commentDelay === 3) {
      commentIndex++;
      thirdPageH2.textContent = comments[commentIndex];
      commentDelay = 0;
    }
  }, 2000);
};

userInput.addEventListener('keydown', (button) => {
  if (button.key == 'Enter') {
    summon(userInput.value);

    if (commentIndex !== 12) {
      commentIndex++;
      thirdPageH2.textContent = comments[commentIndex];
    }
  }
  stageTwoIncrement();
});

thirdPageBtn.addEventListener('click', () => {
  continueAutoSummon();
  thirdPageBtn.remove();
});
