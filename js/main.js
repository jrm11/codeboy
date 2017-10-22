//图片轮播
$(function () {
    var container = $('.banner');
    var list = $('.rotation');
    var buttons = $('.pager span');
    var prev = $('.arrow-left');
    var next = $('.arrow-right');
    var index = 1;
    var len = 4;//图片轮播数量
    var interval = 3000;//轮播间隔
    var timer;
    var imgW =1000;//图片宽度

    function animate(offset) {
        var left = parseInt(list.css('left')) + offset;
        if (offset > 0) {
            offset = '+=' + offset;
        }
        else {
            offset = '-=' + Math.abs(offset);
        }
        list.animate({'left': offset}, 300, function () {
            if (left > -200) {
                list.css('left', -imgW * len);
            }
            if (left < (-imgW * len)) {
                list.css('left', -imgW);
            }
        });
    }

    function showButton() {
        buttons.eq(index - 1).addClass('on').siblings().removeClass('on');
    }

    function play() {
        timer = setTimeout(function () {
            next.trigger('click');
            play();
        }, interval);
    }

    function stop() {
        clearTimeout(timer);
    }

    next.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == len) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-imgW);
        showButton();
    });

    prev.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == 1) {
            index = len;
        }
        else {
            index -= 1;
        }
        animate(imgW);
        showButton();
    });

    buttons.each(function () {
        $(this).bind('click', function () {
            if (list.is(':animated') || $(this).attr('class') == 'on') {
                return;
            }
            var myIndex = parseInt($(this).attr('index'));
            var offset = -imgW * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        })
    });

    container.hover(stop, play);

    play();
});
