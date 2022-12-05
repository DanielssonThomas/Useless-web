const firstPage = document.querySelector('.first-page-active');
const firstPageBtn = firstPage.querySelector('.user-interact-btn');

const secondPage = document.querySelector('.second-page-disabled');

const toggleSecondPage = () => {
  secondPage.classList.toggle('second-page-active');
  secondPage.classList.toggle('second-page-disabled');
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
