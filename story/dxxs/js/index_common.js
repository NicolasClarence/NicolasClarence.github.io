$(function(){
	lisClick();
	    function lisClick(){
        var H=$('.indexs_menu').find('li:first').height()*2+30,
            len=$('.indexs_menu').find('li').size(),
            scale=H*len+20,
            flag=0;
        $('.click_as').on('click',function(){
            if(flag==0){
                $('.indexs_menu').css({'height':H+'px','-webkit-transition':'height 0.3s ease-in-out','-moz-transition':'height 0.3s ease-in-out','-ms-transition':'height 0.3s ease-in-out','-o-transition':'height 0.3s ease-in-out','transition':'height 0.3s ease-in-out'});
                $('#mask').removeClass('mark');
                // $('.click_as').find('img').attr('src','../images/index/errors.png');
                flag=1;
            }else if(flag==1){
                Height_sq();
                $('#mask').addClass('mark');
                getSrc();
                flag=0;
            }
            $('section').on('touchstart',function(){
                Height_sq();
                $('#mask').addClass('mark');
                getSrc();     
                flag=0;
            }) 
            $('#mask').on('click',function(){
              Height_sq();
              $('#mask').addClass('mark');
                getSrc();
                flag=0;
            })
            function Height_sq(){
                $('.indexs_menu').css({'height':'0px','-webkit-transition':'height 0.3s ease-in-out','-moz-transition':'height 0.3s ease-in-out','-ms-transition':'height 0.3s ease-in-out','-o-transition':'height 0.3s ease-in-out','transition':'height 0.3s ease-in-out'});
            } 
            function getSrc(){
                // $('.click_as').find('img').attr('src','../images/index/san_icon.png');
            }
        })
    }
})