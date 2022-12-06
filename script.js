const firstPage = document.querySelector('.first-page-active');
const firstPageBtn = firstPage.querySelector('.user-interact-btn');

const secondPage = document.querySelector('.second-page-disabled');
const secondPageH2 = secondPage.querySelector('h2');
const secondPageBtn = secondPage.querySelector('.user-interact-btn');

const thirdPage = document.querySelector('.third-page-disabled');
const thirdPageH2 = thirdPage.querySelector('h2');
const thirdPageInput = thirdPage.querySelector('.user-interact-input');

const toggleSecondPage = () => {
  secondPage.classList.toggle('second-page-active');
  secondPage.classList.toggle('second-page-disabled');
};

const toggleThirdPage = () => {
  thirdPage.classList.toggle('third-page-active');
  thirdPage.classList.toggle('third-page-disabled');
};

const secondPageEvents = () => {
  secondPageBtn.classList.toggle('user-interact-btn-disable');

  setTimeout(() => {
    secondPageH2.textContent = 'So thats how its going to be?';
  }, 1000);

  setTimeout(() => {
    secondPageH2.textContent = 'Fine, how about this';
  }, 3000);

  setTimeout(() => {
    toggleThirdPage();
    window.scrollBy({
      top: 1000,
      behavior: 'smooth',
    });

    setTimeout(() => {
      toggleSecondPage();
    }, 1000);
  }, 4500);
};

firstPageBtn.addEventListener('click', () => {
  toggleSecondPage();
  window.scrollBy({
    top: 1000,
    behavior: 'smooth',
  });

  // After the scroll down remove the first page
  setTimeout(() => {
    firstPage.remove();
  }, 1000);
});

secondPageBtn.addEventListener('click', () => {
  secondPageEvents();
});
