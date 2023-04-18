// skillsbar for process page

let execute = false;
window.addEventListener(
  "scroll",
  function (event) {
    var top = this.scrollY;
    if (top > 1600) {
      move("myBar", "precentage", 10, 78);
      move("myBar2", "precentage2", 10, 95);
      move("myBar3", "precentage3", 10, 40);
      execute = true;
    }
  },
  false
);

function move(ProgressBarId, PercentSpanId, FrameInterval, PercentNum) {
  if (execute) return;
  var elem = document.getElementById(ProgressBarId);
  var elem2 = document.getElementById(PercentSpanId);
  var width = 0;
  var id = setInterval(frame, FrameInterval);
  function frame() {
    if (width >= PercentNum) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem2.innerHTML = width * 1 + "%";
    }
  }
}
