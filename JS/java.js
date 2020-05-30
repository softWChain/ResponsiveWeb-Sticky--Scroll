

$(()=>{


$(".owl-carousel").owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:300,
    smartSpeed:200,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        320:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});


});