const info = document.getElementById("info");
let last = 0;
let count = 10;
function frame(time) {
  if (--count) requestAnimationFrame(frame);
  info.textContent += ` ${(time - last).toFixed(0)}`;
  last = time;
}
requestAnimationFrame(frame);
