window.addEventListener('load', function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    /*倒计时*/
    downTime();
})
let downTime = function() {
    /*
     * 1.模拟倒计时的时间  是11个小时
     * 2.利用定时器  1  秒一次   重新展示时间
     * */

    let time = 60 * 60 * 11;

    let skTime = document.querySelector('.time');
    let spans = skTime.querySelectorAll('span');

    let timer = setInterval(function() {

        time--;

        /*格式化时间*/
        let h = Math.floor(time / 3600);
        let m = Math.floor(time % 3600 / 60);
        let s = time % 60;

        /*设置时间*/
        spans[0].innerHTML = Math.floor(h / 10);
        spans[1].innerHTML = h % 10;

        spans[3].innerHTML = Math.floor(m / 10);
        spans[4].innerHTML = m % 10;

        spans[6].innerHTML = Math.floor(s / 10);
        spans[7].innerHTML = s % 10;

        if (time <= 0) {
            clearInterval(timer);
        }

    }, 1000);


}