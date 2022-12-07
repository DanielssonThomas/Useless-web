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
let boxIndex = 0;

const summon = (value) => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  div.classList.add('summon-box');
  p.classList.add('summon');
  p.textContent = value;
  div.append(p);
  if (boxIndex === 0) {
    summonBoxOne.appendChild(div);
  }

  if (boxIndex === 1) {
    summonBoxTwo.appendChild(div);
  }

  if (boxIndex === 2) {
    summonBoxThree.appendChild(div);
  }

  boxIndex++;
  if (boxIndex === 3) {
    boxIndex = 0;
  }
};

const continueAutoSummon = () => {
  setInterval(() => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    summon(emoji);
    if (commentIndex !== 13) {
      commentIndex++;
      thirdPageH2.textContent = comments[commentIndex];
    }
  }, 200);
};

userInput.addEventListener('keydown', (button) => {
  if (button.key == 'Enter') {
    summon(userInput.value);

    if (commentIndex !== 13) {
      commentIndex++;
      thirdPageH2.textContent = comments[commentIndex];
    }
  }
});

thirdPageBtn.addEventListener('click', () => {
  continueAutoSummon();
  thirdPageBtn.remove();
});
