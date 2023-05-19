"use strict";

var navItem = document.querySelector('.nav-item a');
navItem.addEventListener('click', function (e) {
  console.log(e.target.closest(".nav-item").classList.contains('active'));
});