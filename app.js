(function () {
  const screen = document.querySelector(".screen");
  const hamburger = document.querySelector(".icon_hamburger");
  const nav = document.querySelector(".nav");
  const ref = document.querySelector(".icon_ref");
  const refDiv = document.querySelector(".refDiv");
  if (hamburger !== null) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
      } else {
        nav.classList.add("active");
      }
    });
  }
  if (ref !== null) {
    ref.addEventListener("click", function (e) {
      e.stopPropagation();
      refDiv.classList.toggle("show");
    });
    screen.addEventListener("click", function () {
      refDiv.classList.remove("show");
    });
  }
})();
