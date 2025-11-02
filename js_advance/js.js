let a = document.querySelector(".child");
let button = document.querySelector(".button");
let b = 10;
let c = false;
let s = null;

button.addEventListener("click", () => {
  if (!c) {
    s = setInterval(() => {
      a.style.width = b + "%";
      b = b + 0.1;
    }, 5);
    c = !c;
  } else {
    clearInterval(s);
    c = !c;
  }
});
