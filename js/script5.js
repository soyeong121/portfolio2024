$(function () {
    // 한페이지씩 스크롤
    var mHtml = $('html');
    var page = 1;

    mHtml.animate({ scrollTop: 0 }, 10);

    $(window).on('wheel', function (e) {
        if (mHtml.is(':animated')) return;
        if (e.originalEvent.deltaY > 0) {
            if (page == 28) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        var posTop = (page - 1) * $(window).height();
        mHtml.animate({ scrollTop: posTop });
    });
})