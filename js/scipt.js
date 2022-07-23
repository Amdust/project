$( function () {
$( ".stars__button, .hour__button" ).draggable();});


$(function () {
  $(".stars").rateYo({
    rating: 4.5
  });
  
});



$(".feedback__slider").slick({
  arrows:false,
  slidesToShow:2,
  infinity:true,
  appendArrows: (".container__arrows"),
  waitForAnimate:false,
});

$('.feedback__slider-prev').on('click', (e)=> {
  e.preventDefault()
    $('team__slider').slick('slickPrev')
  })
  
$('.feedback__slider-next').on('click', (e)=> {
  e.preventDefault()
    $('.feedback__slider').slick('slickNext')
})
