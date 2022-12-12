//Array of all comments, changing when more items spawn.
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
//CommentIndex is the index of the comments array and the comment that is displayed at that time.
let commentIndex = 0;

//CommentDelay makes sure the comment doesnt change for every time an item is added.
let commentDelay = 0;

//Array of all emojis which gets added if the user presses the "cause chaos".
const emojis = ['👻', '🙌', '🖖', '😎', '🫠', '🐱', '🍔'];

//BoxIndex is the index for the footers inside the footer wrapper.
let boxIndex = 0;

//Summon information
let summonLimit = 43;
let currentSummonAmount = 0;

//This waits 8 seconds before adding and scrolling down the fourth card, the timeout after that triggers 1 second later which removes the third page.
const activateFourthPage = () => {
  setTimeout(() => {
    toggleFourthPage();
    window.scrollBy({
      top: 1000,
    });
  }, 8000);

  setTimeout(() => {
    const summonWrapper = document.querySelector('.footer-wrapper');
    summonWrapper.remove();
    toggleThirdPage();
  }, 9000);
};

//Finds and changes every summon item with a delay, once all are changed the activateFourthPage() is activated.
const errorSection = () => {
  const summons = document.querySelectorAll('.summon');

  let amountOfSummonsRemaining = summons.length;
  for (let i = 0; i < amountOfSummonsRemaining; i++) {
    setTimeout(() => {
      summons[i].innerHTML = 'X';
      summons[i].style.fontSize = '2.5rem';
    }, i * 150);

    if (i === amountOfSummonsRemaining - 1) {
      activateFourthPage();
    }
  }
};

//Updates the current item amount by incrementing by one. Once the limit has been reached error section activates.
const stageTwoIncrement = () => {
  currentSummonAmount++;
  if (currentSummonAmount === summonLimit) {
    errorSection();
    userInput.remove();
    userInputText.remove();
  }
};

//Summons an item within footer-wrapper by value inserted.
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

//AutoSummon creates an random emoji in flex-wrapper every second until the limit is reached.
const continueAutoSummon = () => {
  setInterval(() => {
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

//Uses summon to add the value within the input section.
userInput.addEventListener('keydown', (button) => {
  if (button.key == 'Enter') {
    summon(userInput.value);

    commentDelay++;
    if (commentIndex !== 12 && commentDelay === 3) {
      commentIndex++;
      thirdPageH2.textContent = comments[commentIndex];
      commentDelay = 0;
    }
  }
});

//Removes the option to use input and begins summoning emojis until it hits its limit!
thirdPageBtn.addEventListener('click', () => {
  continueAutoSummon();
  thirdPageBtn.remove();
  userInput.remove();
  userInputText.remove();
});
