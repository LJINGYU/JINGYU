$(function () {
    Loading();
});

function Loading() {
    var img = $("<img id=\"progressImgage\"  src=\"system/img/ajax-loading.gif\"/>"); //Loading小图标
    var mask = $("<div id=\"ajaxLoaded\"></div>").addClass("mask"); //Div遮罩
    var PositionStyle = "fixed";
    $("body").append(mask).append(img);
    img.css({
        "z-index": "2000",
        "display": "none"
    })
    mask.css({
        "position": PositionStyle,
        "top": "0",
        "right": "0",
        "bottom": "0",
        "left": "0",
        "z-index": "1000",
        "background-color": "#ffffff",
        "display": "none"
    });
    img.show().css({
        "position": PositionStyle,
        "width":"128px",
        "height":"128px",
        "top": "40%",
        "left": "50%",
        "margin-top": function () { return -1 * img.height() / 2; },
        "margin-left": function () { return -1 * img.width() / 2; }
    });
    mask.show().css("opacity", "0.4");
}
//清除加载进度
function closeLoading(){
    $("#progressImgage").hide();
    $("#ajaxLoaded").hide();
}

//显示加载进度
function openLoading(){
    $("#progressImgage").show();
    $("#ajaxLoaded").show();
}

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        closeLoading();
    }
}

