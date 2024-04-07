$(function () {
    // 한페이지씩 스크롤
    var mHtml = $('html');
    var page = 1;

    mHtml.animate({ scrollTop: 0 }, 10);

    $(window).on('wheel', function (e) {
        if (mHtml.is(':animated')) return;
        if (e.originalEvent.deltaY > 0) {
            if (page == 10) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        var posTop = (page - 1) * $(window).height();
        mHtml.animate({ scrollTop: posTop });
    });

    // homepage 첫번째 화면 이미지 애니메이션
    var animateHTML = function () {
        var elems,
            windowHeight

        var init = function () {
            elems = document.getElementsByClassName("hidden");
            windowHeight = window.innerHeight;
            _addEventHandlers();
        }

        var _addEventHandlers = function () {
            window.addEventListener("scroll", _checkPosition);
            window.addEventListener("resize", init)
        }
        var _checkPosition = function () {
            for (var i = 0; i < elems.length; i++) {
                var posFromTop = elems[i].getBoundingClientRect().top;
                if (posFromTop - windowHeight <= 0) {
                    elems[i].className = elems[i].className.replace("hidden", "fade-in");
                }
            }
        }

        return {
            init: init
        }
    }

    animateHTML().init();

    // 1번째 이미지 애니메이션
    var animateUpHTML = function () {
        var elemsUp,
            windowHeight

        var initUp = function () {
            elemsUp = document.getElementsByClassName("hiddenUp");
            windowHeight = window.innerHeight;
            _addEventHandlersUp();
        }

        var _addEventHandlersUp = function () {
            window.addEventListener("scroll", _checkPositionUp);
            window.addEventListener("resize", initUp)
        }
        var _checkPositionUp = function () {
            for (var e = 0; e < elemsUp.length; e++) {
                var posFromTopUp = elemsUp[e].getBoundingClientRect().top;
                if (posFromTopUp - windowHeight <= 0) {
                    elemsUp[e].className = elemsUp[e].className.replace("hiddenUp", "fadeInUp");
                }
            }
        }

        return {
            initUp: initUp
        }
    }

    animateUpHTML().initUp();

    // 2번째 이미지 애니메이션
    var animateDownHTML = function () {
        var elemsDown,
            windowHeight

        var initDown = function () {
            elemsDown = document.getElementsByClassName("hiddenDown");
            windowHeight = window.innerHeight;
            _addEventHandlersDown();
        }

        var _addEventHandlersDown = function () {
            window.addEventListener("scroll", _checkPositionDown);
            window.addEventListener("resize", initDown)
        }
        var _checkPositionDown = function () {
            for (var d = 0; d < elemsDown.length; d++) {
                var posFromTopDown = elemsDown[d].getBoundingClientRect().top;
                if (posFromTopDown - windowHeight <= 0) {
                    elemsDown[d].className = elemsDown[d].className.replace("hiddenDown", "fadeInDown");
                }
            }
        }

        return {
            initDown: initDown
        }
    }

    animateDownHTML().initDown();
})