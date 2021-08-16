
$(document).ready(function(){

    

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer","Autodidact","Freelancer","Blogger"],
        typeSpeed: 20,
        backSpeed:40,
        startdelay:200,
        loop:true,
        cursorChar:'|',
        showCursor: true,
        loopCount: false,
    });   

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 1500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 1,
                nav:false
            },
            700:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

     //animated scroll

     //animated scroll nav

       //animated scroll home

       window.sr = ScrollReveal();
       sr.reveal('.scroll__img', {
       duration: 2000,
       origin: 'left',
       distance: '100px'
      });

      window.sr = ScrollReveal();
      sr.reveal('.scroll__abaut', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px'
     });

     window.sr = ScrollReveal();
     sr.reveal('.resume__abaut', {
     duration: 2000,
     origin: 'right',
     distance: '100px'
    });


    window.sr = ScrollReveal();
     sr.reveal('.scroll__title', {
     duration: 2000,
     origin: 'bottom',
     distance: '100px'
    });

    window.sr = ScrollReveal();
    sr.reveal('.left', {
    duration: 2000,
    origin: 'left',
    distance: '400px'
   });

   window.sr = ScrollReveal();
   sr.reveal('.right', {
   duration: 2000,
   origin: 'right',
   distance: '100px'
  });

  //skills

  
  window.sr = ScrollReveal();
   sr.reveal('.centrar-bloque', {
   duration: 2000,
   origin: 'top',
   distance: '100px'
  });

  window.sr = ScrollReveal();
  sr.reveal('.habilidad-contenedor', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px'
 });
  //portfolio

  sr.reveal('.port__title', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px'
 });

 window.sr = ScrollReveal();
  sr.reveal('.carousel', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px'
 });

   window.sr = ScrollReveal();
   sr.reveal('.titulo__contacto', {
   duration: 2000,
   origin: 'bottom',
   distance: '200px'
   });

   window.sr = ScrollReveal();
   sr.reveal('.contenedor__contacto', {
   duration: 2000,
   origin: 'top',
   distance: '100px'
   });

   window.sr = ScrollReveal();
   sr.reveal('.form', {
   duration: 2000,
   origin: 'bottom',
   distance: '100px'
   });

});

