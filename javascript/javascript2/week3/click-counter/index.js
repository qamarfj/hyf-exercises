let counter = 0;
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

const btn3 = document.querySelector("#btn3");
const counterChange = () => {
  counter++;
  h1.innerHTML = counter;
};
btn1.addEventListener("click", counterChange);
btn2.addEventListener("click", counterChange);

//Delay clicker
const threeSecLog = () => {
  let timer = setTimeout(clear, 3000);
  function clear() {
    clearTimeout(timer);
    h1.innerHTML = "This text was delayed by 3 seconds";
  }
};

const delayClicker = document.querySelector("#delay-clicker");
delayClicker.addEventListener("click", threeSecLog);
///DOMload
const pagleLoaded = () => {
  // h1.innerHTML = '"DOM fully loaded and parsed"';
  console.log('"DOM fully loaded and parsed"');
};
window.addEventListener("load", pagleLoaded);
document.addEventListener("mouseover", (event) => {
  h2.innerHTML = event.clientX;
  h3.innerHTML = event.clientY;
});
btn3.addEventListener("click", (event) => {
  h2.innerHTML = event.clientX;
  h3.innerHTML = event.clientY;
});
