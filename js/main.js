$(document).ready(function(){
    let $btns = $('.projectArea .buttonGroup button');

    $btns.click(function (e){

        $('.projectArea .buttonGroup button').removeClass('active');
        e.target.classList.add('active');

        let selecter = $(e.target).attr('data-filter');
        $('.projectArea .grid').isotope({
            filter:selecter
        });

        return false;
    })

    $('.projectArea .grid .testpopupLink').magnificPopup({
        type: 'image',
        gallery: { enabled:true} 
    });

    //sticky nav menu START//

    let nav_offset_top = $('.headerArea').height() + 50;

    function navbarFixed(){
        if($('.headerArea').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top){
                    $('.headerArea .mainMenu').addClass('navbar_fixed');
                }else{
                    $('.headerArea .mainMenu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});