const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".closemenu");
const mainMenu = document.querySelector(".menu");
const blur = document.querySelector(".blur");
const gamepic = document.querySelector("#gamepic");

// openMenu.addEventListener('click', show());
// closeMenu.addEventListener('click', close());
// function show() {
//     mainMenu.style.display = 'flex';
//     mainMenu.style.top = '55px';
//     openMenu.style.display = 'none';
// }
// function close() {
//     mainMenu.style.top = '-100%';
//     openMenu.style.display = 'block';
// }
window.addEventListener("load", function () {
  this.setTimeout(function () {
    blur.classList.remove("blur");
    console.log("loaded");
    gamepic.classList.remove("blur");
  }, 1500);
});
//slider

const container = document.querySelector(".project-container");
const slides = document.querySelectorAll(".project-box");
console.log(slides);
let count = 0;
slides.forEach((slide, i) => {
  let val = (slide.style.left = `${i * 101}%`);
  console.log(val);
});
const goPrev = () => {
  count--;
  console.log("yes");
  slideShow();
};
const goNext = () => {
  count++;
  console.log("yes");
  slideShow();
};
const slideShow = () => {
  console.log("yay");
  slides.forEach((slide) => {
    count = count === slides.length ? 0 : count < 0 ? slides.length - 1 : count;
    slide.style.transform = `translateX(-${count * 101}%)`;
  });
};
