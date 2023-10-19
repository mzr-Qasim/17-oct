

const choiceArray = document.querySelectorAll(".choice")



let playButton = document.getElementById("play_button");
let pauseButton = document.getElementById("pause_button");




jQuery(document).ready(function($) {


    var $owl = $('.product-owl-carousel-about-page');
    
    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    
    $owl.owlCarousel({
      responsive:{
        0:{
            items:1,
            center:true,
            nav:true,
            loop:true,
            dots:false,
        },
        600:{
            items:2,
            nav:true,
            loop:true,
            dots:true,
            center:true,
            autoplay:true
        },
        831:{
            items:3,
            nav:true,
            loop:true,
            dots:true,
            center:true,
            autoplay:true
        },
        1464:{
            center:true,
            loop:true,
            items:5,
            nav:false,
            autoplay:true,
            dots:true,
        },
        1800:{
            center:true,
            loop:true,
            items:5,
            nav:false,
            autoplay:true,
            dots:true,
        },

    }
      
    });

    $(".testimonial-owl-carousel-about-page").owlCarousel({
        autoplay: true,
        slideSpeed:1000,
        items : 2,
        loop: true,
        nav:true,
        navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
        margin: 30,
        dots: true,
        responsive:{
            319:{
                items:1
            },
            767:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1,
                autoplay:true,
            },
            1199:{
                items:1,
                autoplay:true,
            },
            1200:{
                items:2,
                autoplay:true,
            },
        }
        
    });

    





    
});


