document.addEventListener("DOMContentLoaded", (event) => {
  const btn = document.getElementById("slide-out");
  btn.addEventListener("click", () => {
    // slideOut(btn);
    btn.classList.add("animate-slide-out");
  });
});

function slideOut(el) {
  let offsetX = 0;
  const intervalId = setInterval(() => {
    offsetX = offsetX - 1;
    el.style.transform = `translateX(${offsetX}px)`;
    if (offsetX < -100) {
      clearInterval(intervalId);
    }
  }, 10);
}
