$(function() {
    //获取要定位元素距离浏览器顶部的距离
    var boxTop = $(".search-wrap").offset().top;
    console.log(boxTop);
    var fs = true;
    $(window).scroll(function() {
        //获取滚动条的滑动距离
        var sc = $(this).scrollTop();
        console.log(sc);
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if (sc >= boxTop) {
            $(".app").hide("fast");
            $(".search-wrap").css("top", 0);
            fs = false;
        } else {
            $(".app").show("fast");
            $(".search-wrap").css("top", "45px");
            fs = true;
        }

    })
})