"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.header__nav-icon').addEventListener('click', function () {
    document.body.classList.toggle('menu_shown');
  });
});