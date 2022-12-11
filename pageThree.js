const comments = [
  "Great! doesn't it look funny?",
  "I couldn't have done it better my self!",
  'Okay thats enough, lets enjoy the view',
  'WOAH THERE, calm down! No need for more.',
  'No- NO...Fine, you can have those no more',
  '...',
  'Oh no',
  'STOP',
  'STOOOP',
  'ITS ALL GOING DOWN',
  'You must stop this at once',
  'Its over, its all over',
  'Thats it...its gonna crash...',
];

const emojis = ['👻', '🙌', '🖖', '😎', '🫠', '🐱'];

let commentIndex = 0;
let commentDelay = 0;
let boxIndex = 0;
let summonLimit = 43;
let currentSummonAmount = 0;

const errorSection = () => {
  const summons = document.querySelectorAll('.summon');

  let amountOfSummonsRemaining = summons.length;
  const delay = 500;
  for (let i = 0; i <= amountOfSummonsRemaining; i++) {
    setTimeout(() => {
      summons[i].textContent = 'X';
      summons[i].style.fontSize = '2rem';
    }, i * 150);

    if (amountOfSummonsRemaining === 0) {
      toggleFourthPage();
      window.scrollBy({
        top: 1000,
        behavior: 'smooth',
      });
      setTimeout(() => {
        toggleThirdPage();
      }, 1000);
    }
  }
};

const stageTwoIncrement = () => {
  currentSummonAmount++;
  if (currentSummonAmount === summonLimit) {
    errorSection();
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
  let summonInterval = setInterval(() => {
    if (currentSummonAmount !== summonLimit) {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      summon(emoji);
      commentDelay++;
      if (commentIndex !== 12 && commentDelay === 3) {
        commentIndex++;
        thirdPageH2.textContent = comments[commentIndex];
        commentDelay = 0;
      }
    }
  }, 1000);
};

userInput.addEventListener('keydown', (button) => {
  if (button.key == 'Enter') {
    summon(userInput.value);

    if (commentIndex !== 13) {
      commentIndex++;
      thirdPageH2.textContent = comments[commentIndex];
    }
  }
  stageTwoIncrement();
});

thirdPageBtn.addEventListener('click', () => {
  continueAutoSummon();
  thirdPageBtn.remove();
  userInput.remove();
  userInputText.remove();
});
