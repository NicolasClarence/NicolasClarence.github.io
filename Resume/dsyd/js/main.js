
var tabs_Swiper = new Swiper('.swiper-container', {
    speed: 500,
    onSlideChangeStart: function () {
        $(".tabs .active").removeClass('active');
        $(".tabs a").eq(tabs_Swiper.activeIndex).addClass('active');
    }
});
$(".tabs a").on('touchstart mousedown', function (e) {
    e.preventDefault();
    $(".tabs .active").removeClass('active');
    $(this).addClass('active');
    tabs_Swiper.swipeTo($(this).index());
});
$(".tabs a").click(function (e) {
    e.preventDefault();
});