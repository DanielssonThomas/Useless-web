const niceComments = [
  "Great! doesn't it look fun? matched the view nicely",
  "I couldn't have done it better my self!",
  'Now, lets enjoy the view. And relax',
];

const questionableComments = [
  'WOAH THERE, calm down! No need for more. Fine. We can have that one two',
  'No- NO...Fine, you can have THREE no more',
  '...',
  'Oh no',
];

const crashingcomments = [
  'STOP',
  'STOOOP',
  'ITS ALL GOING DOWN',
  'HALT, FREEZE, PAUSE, DISPLAY: NONE; COME ON',
  'Its over, its all over',
  'What is this abomination...',
];

const summonBox = document.querySelector('.summon-container');
const userInput = document.querySelector('.user-interact-input');

const summon = (value) => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  div.classList.add('summon-box');
  p.classList.add('summon');
  p.textContent = value;
  div.append(p);
  summonBox.append(div);
};

userInput.addEventListener('keydown', (button) => {
  if (button.key == 'Enter') {
    summon(userInput.value);
  }
});
