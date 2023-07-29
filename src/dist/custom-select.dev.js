"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.querySelector('.section__form-wrapper').addEventListener('click', function () {
  this.querySelector('.section__form-select').classList.toggle('open');
  this.querySelector('.section__form-trigger').classList.toggle('open__color');
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = document.querySelectorAll(".section__form-custom-option")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var option = _step.value;
    option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.section__form-custom-option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.section__form-select').querySelector('.section__form-trigger').textContent = this.textContent;
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

window.addEventListener('click', function (e) {
  var select = document.querySelector('.section__form-select');

  if (!select.contains(e.target)) {
    select.classList.remove('open');
  }
});
document.addEventListener("DOMContentLoaded", function () {
  OverlayScrollbars(document.getElementById("myScrollableDiv"), _defineProperty({
    autoUpdate: true,
    normalizeRTL: true,
    paddingAbsolute: true,
    scrollbars: 'native'
  }, "scrollbars", {
    visibility: 'auto',
    autoHide: 'never',
    autoHideDelay: 1300
  }));
});