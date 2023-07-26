document.querySelector("html").classList.add('js');

const fileInput  = document.querySelector( ".section__form-input-file" ),  
    button     = document.querySelector( ".section__form-input-trigger" ),
    the_return = document.querySelector(".file-return");
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
// fileInput.addEventListener( "change", function( event ) {  
//     the_return.innerHTML = this.value;  
// }); 
let progress = document.querySelector(".section__form-percent")
let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
         elem.style.width = width + "%";
         progress.innerHTML = width*1 + '%';
      }
    }
   
  }
}
function showFile(input) {
    let file = input.files[0];
    move()
  }
   
