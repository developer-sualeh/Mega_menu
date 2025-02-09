const barEl = document.querySelector(".hamburger");
const angleDownEl = document.querySelector(".fa-angle-down");
const navEl = document.querySelector(".navbar-container");
const dropDownLinkEl = document.getElementById("drop-down--link");
const megaDropDownEl = document.querySelector(".mega-drop--down");
const megaDropDownSubLinkEl = document.querySelector(
  ".mega-dropdown-sub--link"
);
const megaMenuSubDropDownSubLinkEl = document.querySelectorAll(".question");
const navContainerEl = document.querySelector(".navbar-container");

barEl.addEventListener("click", () => {
  navEl.classList.toggle("active");
  barEl.classList.toggle("active");
});

dropDownLinkEl.addEventListener("click", () => {
  megaDropDownEl.classList.toggle("show");
  angleDownEl.classList.toggle("rotate");
  navContainerEl.style.height = "auto";
});

megaMenuSubDropDownSubLinkEl.forEach((link) => {
  console.log(link);
  const btn = link.querySelector(".question-btn");
  console.log(btn);
  btn.addEventListener("click", () => {
    console.log("click");
    link.classList.toggle("show-text");
  });
});
