tabs();
function swipers(){
    var lens=$('.banner').find('.swiper-slide').length;
    var lens2=$('.base').find('.swiper-slide').length;
    if(lens>1){
        var swiper = new Swiper('.banner.swiper-container', {
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction : false,
            loop: true,
            autoplay: 5000
        });
    } 
    if(lens2>1){
         var swiper = new Swiper('.base.swiper-container', {
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction : false,
            loop: true
         });
    }      

     var swiper = new Swiper('.nav.swiper-container', {
        slidesPerView: 4,
        paginationClickable: true
    });




}
function tabs(){
    var Lisall=$('.main_list_ol li');
    Lisall.on(tapClick(),function(){
        var index=$(this).index();
        $(this).addClass('Borders').siblings().removeClass('Borders');
        Lisall.find('img').attr('src','images/hou_icon.png');
        $(this).find('img').attr('src','images/hou_icon2.png');
    })


    var $Menulis=$('.pub-cart_menu li'),
        atrr=['a','b','c','d','e'];
        var flag=true;
        $Menulis.on(tapClick(),function(){
            var index=$(this).index();
            $('.pub-cart_menu li p').removeClass('positions');
             $(this).find('p').addClass('positions cos');
              $Menulis.eq(index).addClass('cos').siblings().removeClass('cos');
            /*$('.Return-top').hide();
             $('.pub-header>div').eq(index).show().siblings().hide();
            $('.list-main>div').eq(index).show().siblings().hide();
            $('.pub-cart_menu li p').removeClass('positions');
            $(this).find('p').addClass('positions cos');
            $Menulis.eq(index).addClass('cos').siblings().removeClass('cos');
            if(index == 0){
                $Menulis.eq(0).find('img').attr('src','images/tj.png');
            }else{
                $Menulis.eq(0).find('img').attr('src','images/a1.png');
            }
            if(index == 1){
                location.href="index.html"
                $Menulis.eq(1).find('img').attr('src','images/a4.png');
            }else{
                $Menulis.eq(1).find('img').attr('src','images/fx.png');
            }
            if(index == 2){
                $Menulis.eq(2).find('img').attr('src','images/a5.png');
            }else{
                $Menulis.eq(2).find('img').attr('src','images/sj.png');
            }
             if(index == 3){
                $Menulis.eq(3).find('img').attr('src','images/a3.png');
            }else{
                $Menulis.eq(3).find('img').attr('src','images/dp.png');
            }
            if(index == 4){
                $Menulis.eq(4).find('img').attr('src','images/a6.png');
            }else{
                $Menulis.eq(4).find('img').attr('src','images/w.png');
            }*/

           
            /*if(index == 0){
                $Menulis.eq(0).find('img').attr('src','images/tj.png');
            }else{
                $Menulis.eq(0).find('img').attr('src','images/a1.png');
            }
            if(index == 1){
               
                $Menulis.eq(1).find('img').attr('src','images/a4.png');
            }else{
                $Menulis.eq(1).find('img').attr('src','images/fx.png');
            }
            if(index == 2){
                $Menulis.eq(2).find('img').attr('src','images/a5.png');
            }else{
                $Menulis.eq(2).find('img').attr('src','images/sj.png');
            }
             if(index == 3){
                $Menulis.eq(3).find('img').attr('src','images/a3.png');
            }else{
                $Menulis.eq(3).find('img').attr('src','images/dp.png');
            }
            if(index == 4){
                $Menulis.eq(4).find('img').attr('src','images/a6.png');
            }else{
                $Menulis.eq(4).find('img').attr('src','images/w.png');
            }*/
            function sk(){
                $("body").unbind('touchmove');
                $('#mask').addClass('mark');
                $('.indexs_menu').css({
                    "-webkit-transform": "translate3d(0px,150%,0px)"
                })
                flag=true;
            }
            if(index == 0){
                $('.list-main-one').show().siblings().hide();
                $('html,body').animate({scrollTop:0},0);
                $Menulis.eq(0).find('img').attr('src','images/tj.png');
                $Menulis.eq(4).find('span').css('color','#212121'); 
                sk();
            }else{
                $Menulis.eq(0).find('img').attr('src','images/a1.png');
            }
            if(index == 1){
               location.href="http://www.liding.me";
               $Menulis.eq(4).find('span').css('color','#212121'); 
            }
           if(index == 2){
                location.href="http://www.liding.me/index/all_chips";
                $Menulis.eq(4).find('span').css('color','#212121'); 
            }
            if(index == 3){
                $('.list-main-four').show().siblings().hide();
                $('html,body').animate({scrollTop:0},0);
                sk();
                $Menulis.eq(3).find('img').attr('src','images/a3.png');
                $Menulis.eq(4).find('span').css('color','#212121'); 
            }else{
                $Menulis.eq(3).find('img').attr('src','images/dp.png');
            }
            if(index == 4){
                if(flag==true){
                    $Menulis.eq(4).find('img').attr('src','images/a6.png'); 
                    $Menulis.eq(4).find('span').css('color','#fa4a50');  
                    $("body").bind("touchmove", function (e) {e.preventDefault();});
                    $('#mask').removeClass('mark');
                    $('.indexs_menu').css({
                        "-webkit-transform": "translate3d(0px,0px,0px)"
                    })
                    flag=false;
                }else if(flag==false){
                    sk();
                     $Menulis.eq(4).find('img').attr('src','images/w.png'); 
                     $Menulis.eq(4).find('span').css('color','#212121'); 
                    flag=true;
                }
                $('#mask').on(tapClick(),function(){
                    sk();
                    $Menulis.eq(4).find('img').attr('src','images/w.png'); 
                     $Menulis.eq(4).find('span').css('color','#212121'); 
                })
            }else{
                $Menulis.eq(4).find('img').attr('src','images/w.png');
            }
/* */

            


            // if(index==1){
            //     $Menulis.eq(1).css({'color':'#F7735F'})
            // }else{
            //     $Menulis.eq(1).css({'color':'#666666'})
                 
            // }
            // if(index==3){
            //     $Menulis.eq(3).css({'color':'#F7735F'})
            // }else{
            //     $Menulis.eq(3).css({'color':'#666666'})
            // }
        })
}