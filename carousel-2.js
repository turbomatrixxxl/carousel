// carousel infinite 2

const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");
const children = wrapper.querySelectorAll(".child");
const leftArr = document.querySelector(".left-arrow");
const rightArr = document.querySelector(".right-arrow");

let counter = 0;
let infiniteCounter = 0;

container.addEventListener("click", function (e) {
  wrapper.style.transition = ".5ms ease all";
  if (e.target.classList.contains("left-arrow")) {
    infiniteCounter = -1;
    counter += 20;
    wrapper.style.transform = `translateX(${counter}%)`;
  }

  if (e.target.classList.contains("right-arrow")) {
    infiniteCounter = 1;
    counter -= 20;
    wrapper.style.transform = `translateX(${counter}%)`;
  }
});

let infiniteCarousel = function () {
  wrapper.style.transition = "none";
  counter = 0;

  if (infiniteCounter === 1) {
    wrapper.appendChild(wrapper.firstElementChild);
    wrapper.style.transform = `translateX(0%)`;
  }

  if (infiniteCounter === -1) {
    wrapper.style.transform = `translateX(0%)`;
    wrapper.prepend(wrapper.lastElementChild);
  }
};

wrapper.addEventListener("transitionend", infiniteCarousel);
