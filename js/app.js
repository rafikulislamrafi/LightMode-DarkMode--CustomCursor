let menuToggle = document.querySelector('.toggleIcon');
let menu = document.querySelector('.menu');
let cross = document.querySelector('.cross');

menuToggle.addEventListener('click', function () {
  menu.classList.add(`menuActive`);
});

cross.addEventListener(`click`, function () {
  menu.classList.remove(`menuActive`);
});
// Menu End

//Curcor Start
let cursor = document.querySelector('.cursor');
let Smcursor = document.querySelector('.cursorSm');

window.addEventListener(`mousemove`, function (e) {
  let top = e.pageY;
  let left = e.pageX;

  cursor.style.top = `${top}px`;
  cursor.style.left = `${left}px`;

  Smcursor.style.top = `${top}px`;
  Smcursor.style.left = `${left}px`;
});
//Cursor End
// Dark Mode Start
let darkMode = document.querySelector('.darkModeBtn');
let body = document.querySelector('body');

darkMode.addEventListener(`click`, () => {
  body.classList.toggle(`darkMode`);
})
// Btn
function moveBg(e) {
  const rect = e.target.getBoundingClientRect();
  e.target.style.setProperty('--x', ((e.clientX - rect.x) / rect.width) * 100);
  e.target.style.setProperty('--y', ((e.clientY - rect.y) / rect.height) * 100);
}
document.querySelector('button').addEventListener('pointermove', moveBg);
