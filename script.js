const startBtn = document.querySelector('.dont-btn');
const section = document.querySelector('.starting-page-active');
const main = document.querySelector('main');
const mainh2 = main.querySelector('h2');
const mainbtn = main.querySelector('button');

const mainLocation = 1000;
let currentScroll = 0;
startBtn.addEventListener('click', () => {
  main.classList.add('main-open');
  mainh2.classList.add('main-open-h2');
  mainbtn.classList.add('main-btn-active');
  mainbtn.classList.remove('main-btn');
  window.scrollTo({
    top: 1000,
    behavior: 'smooth',
  });
  setTimeout(() => {
    section.classList.remove('starting-page-active');
  }, 1000);
});
