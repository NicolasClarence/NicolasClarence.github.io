// JavaScript Document
$(function(){
	var nav_func=function(){
		$(".nav li").each(function(index, element) {
            $(this).hover(function(){
				$(this).find(".hideli").show();
				$(this).addClass("li_hover")
			},function(){
				$(this).find(".hideli").hide();
				$(this).removeClass("li_hover")
			})
        });
	}
	nav_func();
	var mySwiper = new Swiper('#swiper-container1',{
		autoplay : 5000,
		//loop : true,
		speed:300,
		effect : 'fade',
		onSlideChangeEnd: function(mySwiper){
		  $(".tabconttit span").eq(mySwiper.activeIndex).click();
		}
		
   })
   var tabimg_index=$("#swiper-container1")
   
   
  $(".tabconttit span").click(function(){
		 var index = $(this).index()
		$(this).addClass("tabcur").siblings().removeClass("tabcur");
		$(".tabcont .tabcont_tab").eq(index).show().siblings(".tabcont_tab").hide();
		//$("#swiper-container1 .swiper-slide").eq(index).show().siblings().hide();
		mySwiper.swipeTo(index);

	});
	$('.pre').on('click', function(e){
		e.preventDefault();
		mySwiper.swipePrev();
	});
	$('.next').on('click', function(e){
			e.preventDefault();
			mySwiper.swipeNext();
		});
		
	
})