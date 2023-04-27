const slider = document.querySelector(".slider");
const controls = document.querySelectorAll(".control");

controls.forEach((control, i) => {
  control.addEventListener("click", () => {
    slider.style.top = `${-100 * i}%`;

    document.querySelector(".active.control").classList.remove("active");
    control.classList.add("active");
  });
});
