let dvd = document.getElementById("dvd");

let xInc = 1;
let yInc = 1;

function init() {
  updateColor();
  dvd.style.position = "absolute";
  document.body.style.background = "gray";
  setInterval(frame, 5);
}
function updateColor() {
  let color = Math.round(Math.random() * 100);
  dvd.style.fill = `hsl(${color},100%,50%)`;
}
function hittingWall() {
  let dvd_height = dvd.offsetHeight;
  let dvd_width = dvd.offsetWidth;
  let dvd_left = dvd.offsetLeft;
  let dvd_top = dvd.offsetTop;
  let win_height = window.innerHeight;
  let win_width = window.innerWidth;

  if (dvd_left <= 0 || dvd_left + dvd_width >= win_width) {
    xInc = ~xInc + 1;
    updateColor();
  }
  if (dvd_top <= 0 || dvd_top + dvd_height >= win_height) {
    yInc = ~yInc + 1;
    updateColor();
  }
}
function frame() {
  hittingWall();
  dvd.style.top = dvd.offsetTop + yInc + "px";
  dvd.style.left = dvd.offsetLeft + xInc + "px";
}

init();
