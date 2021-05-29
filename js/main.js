

// Изменение цвете при нажатии jQuery


$(document).ready(function(){

   $("#btn1").click(function(){
    $("#mtext").css("color","green")
  });
   });


$(document).ready(function(){

   $("#btn2").click(function(){$("#mtext").css("color","white")});
   });

// ********************************************************************



// Мод окно JS

let modal = document.getElementById('myModal'); //Получить модальное окно по ID.
let btn = document.getElementById("myBtn"); //Получить кнопку, которая открывает модальное окно по ID.
let span = document.getElementsByClassName("close")[0]; //Получить тег span с классом close, который закрывает модальное окно.

btn.onclick = function() {
  modal.style.display = "block"; //Когда пользователь кликает по кнопке, модальное окно открывается – переходит из скрытного состояния в видимое.
}

span.onclick = function() {
  modal.style.display = "none"; //Когда пользователь кликает на крестик в теге span, модальное окно закрывается, наоборот переходит из видимого состояния в скрытное.
}

 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// *******************************************************

// document.querySelector("#id-1").classList.add("animate__animated","animate__bounce");

$(document).ready(function() {
    $('h2.animated').hover(
     function() {
      $(this).addClass('bounce'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('bounce'); // Убираем класс
     }
    )})

// **************************************************

// /*Выпадающее меню*/



let flag = false;
  $('#menu_down').click(function () {
    if(!flag){
     $('.menu-element_home').slideDown();
    }else{
     $('.menu-element_home').slideUp();
    }
    flag = !flag;
  });

// **************************Карусель*************************

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// **************************Карусель*************************