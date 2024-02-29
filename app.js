 $(document).ready(function(){
     $(window).scroll(function(){
       if(this.scrollY > 20){
         $('.navbar').addClass('sticky');
       }
       else{
        $('.navbar').removeClass('sticky');
       }
       if(this.scrollY > 500){
        $('.scroll-up-btn').addClass('show'); 
       }
       else{
        $('.scroll-up-btn').removeClass('show'); 
       }
     });

     //slide up script
     $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0});
     }); 


     /*navbar toggleclass*/
     $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass('show');
         $('.menu-btn i').toggleClass('show'); 
     });
    

      //type animation

      var typed = new Typed(".typing",{
        strings: ["Facebook ads Expert","Google ads Expert", "Youtube SEO Expert", "Freelancher"],
        typeSpeed: 100,
        backSpeed:60,
        loop: true
      })
      var typed = new Typed(".typing-2",{
        strings: ["Facebook ads Expert","Google ads Expert", "Youtube SEO Expert", "Freelancher"],
        typeSpeed: 100,
        backSpeed:60,
        loop: true
      })

     //owl carousel script
     $('.carousel').owlCarousel({
      margin: 10,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false
        },
        600:{
          items: 2,
          nav: false
        },
        1000:{
          items: 3,
          nav: false
        } 
      }

     });
 });
 
 var swiper = new Swiper(".food-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     0: {
       slidesPerView: 1,
     },
     700: {
       slidesPerView: 3,
     },
     1000: {
       slidesPerView: 2,
     },
  },
});