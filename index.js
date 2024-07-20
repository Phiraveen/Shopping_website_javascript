var navbaricon = document.querySelector(".navbar-icon");
var sidenavbar = document.querySelector(".side-navbar");
var iconclose = document.querySelector(".icon-close");

navbaricon.addEventListener("click", function () {
  sidenavbar.style.left = 0;
});

iconclose.addEventListener("click", function () {
  sidenavbar.style.left = "-60%";
});