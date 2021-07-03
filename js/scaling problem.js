function setBodyWidth() {
    var barWidthHelper = document.createElement('div');
    barWidthHelper.style.cssText = "overflow:scroll; width:100px; height:100px;";
    document.body.appendChild(barWidthHelper);
    var barWidth = barWidthHelper.offsetWidth - barWidthHelper.clientWidth;
    document.body.removeChild(barWidthHelper);
    var bodyWidth = window.screen.availWidth - barWidth;
    return bodyWidth;
}

$(document).ready(
    function() {
        var bodyWidth = setBodyWidth() + "px";
        //document.body.style.width=bodyWidth;
        $("body").css("width", bodyWidth);
    }
);