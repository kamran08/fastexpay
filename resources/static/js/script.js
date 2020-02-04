// // Mobile Menu iteam select
// $(document).ready(function () {
//     $("._left_menu_name").click(function () {
//         $(this).toggleClass("_left_menu_text_open").siblings().slideToggle(300);
//     })
// });

// //SCROLL MENU ONE
// $(document).ready(function(){
//   var scrollTop = 0;
//   $(window).scroll(function(){
//     scrollTop = $(window).scrollTop();
//     if (scrollTop >= 80) {
//       $('#_1menu').addClass( "_menu_bg" );
//     } else  {
//       $('#_1menu').removeClass("_menu_bg");
//     } 
//   });
// });

// function copyToClipboard(element) {
//   var $temp = $("<input>");
//   $("body").append($temp);
//   $temp.val($(element).text()).select();
//   document.execCommand("copy");
//   $temp.remove();
// }


//Banner slider
jQuery(document).ready(function($) {
  $('.owl-carousel, ._1banner_slider').owlCarousel({
      items: 1,
      lazyLoad: true,
      lazyLoadEager: 1,
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoHeight: true,
      autoplay:false,
      autoplayTimeout:5000
  });
  $('.owl-carousel, ._new_owl_cat_section').owlCarousel({
      items: 2,
      lazyLoad: true,
      lazyLoadEager: 1,
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoHeight: true,
      autoplay:false,
      autoplayTimeout:5000,
      stagePadding: 50

  });
});




