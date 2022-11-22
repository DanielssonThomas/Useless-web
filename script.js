const btn = document.querySelector('button');
const section = document.querySelector('section');
const main = document.querySelector('main');
const mainh2 = main.querySelector('h2');
// btn.addEventListener('click', () => {
//   section.classList.add('section-active');
//   btn.classList.add('button-active');
//   btn.textContent = 'WHY';
// });
const mainLocation = 1000;
let currentScroll = 0;
btn.addEventListener('click', () => {
  main.classList.add('main-open');
  mainh2.classList.add('main-open-h2');
  window.scrollTo({
    top: 1000,
    behavior: 'smooth',
  });
  setTimeout(() => {
    section.classList.remove('section-active');
  }, 1000);
});
