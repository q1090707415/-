$(function() {
    $(".mjd,.customer-service,.navigation").hover(function() {
        $(this).find("ul").stop().slideDown(20);
    }, function() {
        $(this).find("ul").stop().slideUp(20);
    })
})
$(function() {
    $(".place").hover(function() {
        $(this).find("div").stop().slideDown(100);
    }, function() {
        $(this).find("div").stop().slideUp(100);
    })
})
$(function() {
    $(".ewm").hover(function() {
        $(this).find("img").stop().slideDown(100);
    }, function() {
        $(this).find("img").stop().slideUp(100);
    })
})

$(function() {
    $(".appliance").hover(function() {
        $(this).find("dl").stop().slideDown(10);
    }, function() {
        $(this).find("dl").stop().slideUp(10);
    })
})

// 广告关闭按钮

$(function() {
    $("#a").click(function() {
        var buttonclose = $(".top_parts").parent();
        $(buttonclose).remove();
    })
})