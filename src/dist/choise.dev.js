"use strict";

var defaultSelect = function defaultSelect() {
  var element = document.querySelector('.default');
  var choices = new Choices(element, {
    searchEnabled: false,
    resetScrollPosition: true,
    itemSelectText: ''
  });
};

defaultSelect();