
document.querySelector('.section__form-wrapper').addEventListener('click', function() {
    this.querySelector('.section__form-select').classList.toggle('open');
    this.querySelector('.section__form-trigger').classList.toggle('open__color');
})
for (const option of document.querySelectorAll(".section__form-custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.section__form-custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.section__form-select').querySelector('.section__form-trigger').textContent = this.textContent;
        }
    })
}
window.addEventListener('click', function(e) {
    const select = document.querySelector('.section__form-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.getElementById("myScrollableDiv"), {
        autoUpdate: true,
        normalizeRTL: true,
        paddingAbsolute: true,
        scrollbars: 'overlay',
        scrollbars: {
            visibility: 'auto',
            autoHide: 'never',
            autoHideDelay: 1300,
          }, 
    });
  });
 