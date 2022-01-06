document.addEventListener("DOMContentLoaded", (event) => {
  const btn = document.getElementById("slide-out");
  btn.addEventListener("click", () => {
    let offsetX = 0;
    const intervalId = setInterval(() => {
      offsetX = offsetX - 1;
      btn.style.transform = `translateX(${offsetX}px)`;
      if (offsetX < -100) {
        clearInterval(intervalId);
      }
    }, 10);
  });
});
