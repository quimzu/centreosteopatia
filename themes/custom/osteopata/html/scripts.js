$(function(){

	$('.loop').on('initialized.owl.carousel translate.owl.carousel', function(e){
        idx = e.item.index;
        $('.owl-item.big').removeClass('big');
        $('.owl-item.medium').removeClass('medium');
        $('.owl-item').eq(idx).addClass('big');
        $('.owl-item').eq(idx-1).addClass('medium');
        $('.owl-item').eq(idx+1).addClass('medium');
    });


    $('.loop').owlCarousel({
        center: true,
        items:3,
        loop:true,
        // margin:10,
        // autoplay: true,
        autoPlay: 3000,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
    })
}); 