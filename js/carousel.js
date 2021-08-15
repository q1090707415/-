$(function() {

    //fadeIn和fadeOut图片显示方式淡入淡出，siblings表示排除其他图片
    function changImg(a) {
        $('.grid-col2-t li').eq(a).fadeIn().siblings().fadeOut();
        $('.circle li').eq(a).addClass('current').siblings().removeClass('current');
    };

    function changImg_f(a) {
        $('.grid-col2-t li').eq(a).fadeIn(100).siblings().fadeOut(100);
        $('.circle li').eq(a).addClass('current').siblings().removeClass('current');
    };
    var step = 0;
    changImg(step);
    //轮播图片
    var timer = null;

    function autoplay() {
        timer = setInterval(function() {
            step++;
            if (step === 8) {
                step = 0;
            }
            changImg(step); //执行切换图片函数
        }, 3000);
    };
    autoplay();
    //左箭头
    $('.arrow-l').click(function() {
        clearInterval(timer); //清除定时
        step--;
        if (step === -1) {
            step = 7;
        }
        changImg(step);
        autoplay();
    });
    //右箭头
    $('.arrow-r').click(function() {
        clearInterval(timer);
        step++;
        if (step === 8) {
            step = 0;
        }
        changImg(step);
        autoplay();
    });
    $('.circle li').mouseover(function() {
        clearInterval(timer);
        step = $(this).index();
        changImg_f(step);
        setTimeout(timer);
        autoplay();
    });
});

//鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮
window.addEventListener('load', function() {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var grid_col2 = document.querySelector('.grid-col2-t');
    //鼠标经过grid-col2就显示隐藏左右按钮
    grid_col2.addEventListener('mouseenter', function() {
            arrow_l.style.display = 'block';
            arrow_r.style.display = 'block';
        })
        // grid_col2.addEventListener('mouseleave', function() {
        //     arrow_l.style.display = 'none';
        //     arrow_r.style.display = 'none';
        // })
})