$(function(){
    // 한페이지씩 스크롤
    var mHtml = $('html');
    var page = 1;

    mHtml.animate({scrollTop : 0}, 10);

    $(window).on('wheel', function(e){
        if(mHtml.is(':animated')) return;
        if(e.originalEvent.deltaY > 0){
            if(page == 4) return;
            page ++;
        } else if (e.originalEvent.deltaY < 0){
            if(page == 1) return;
            page --;
        }
        var posTop = (page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop});
    });

    // contents slide
    // 버튼 클릭 시 슬라이드
    var contentsSlides = document.querySelector('.contents > li'),
        contentsSlide = document.querySelector('.contents'),
        contents2Slides = document.querySelector('.contents_bottom > li'),
        contents2Slide = document.querySelector('.contents_bottom'),
        contentsCount = contentsSlides.length,
        contents2Count = contentsSlides.length,
        contentsDuration = 300,
        contents2Index = 0
        contentsIndex = 0;

    // 슬라이드 버튼 클릭 이벤트
    document.querySelector('#contents_next').addEventListener('click', contentsNextSlideImage);
    document.querySelector('#contents_prev').addEventListener('click', contentsPrevSlideImage);
    document.querySelector('#contents_next').addEventListener('click', contents2NextSlideImage);
    document.querySelector('#contents_prev').addEventListener('click', contents2PrevSlideImage);

    // 다음 슬라이드
    function contentsNextSlideImage() {
        contentsIndex++;
        contentsIndex %= contentsCount;
        // contentsSlide.style.left = '-400px';
        contentsSlide.style.left = '-17%';
        contentsSlide.style.transition = contentsDuration + 'ms';
        window.setTimeout(() => {
            contentsSlide.appendChild(contentsSlide.firstElementChild);
            contentsSlide.removeAttribute('style');
        }, contentsDuration);
    }
    // 이전 슬라이드
    function contentsPrevSlideImage() {
        contentsIndex--;
        contentsIndex %= contentsCount;
        contentsSlide.insertBefore(contentsSlide.lastElementChild, contentsSlide.firstChild);
        // contentsSlide.style.left = "-400px";
        contentsSlide.style.left = "-17%";
        contentsSlide.style.transition = "0ms";
        window.setTimeout(() => {
            contentsSlide.style.left = 0;
            contentsSlide.style.transition = contentsDuration + "ms";
        });
    }
        // 다음 슬라이드
        function contents2NextSlideImage() {
            contents2Index++;
            contents2Index %= contents2Count;
            // contents2Slide.style.left = '-400px';
            contents2Slide.style.left = '-17%';
            contents2Slide.style.transition = contentsDuration + 'ms';
            window.setTimeout(() => {
                contents2Slide.appendChild(contents2Slide.firstElementChild);
                contents2Slide.removeAttribute('style');
            }, contentsDuration);
        }
        // 이전 슬라이드
        function contents2PrevSlideImage() {
            contents2Index--;
            contents2Index %= contents2Count;
            contents2Slide.insertBefore(contents2Slide.lastElementChild, contents2Slide.firstChild);
            // contents2Slide.style.left = "-400px";
            contents2Slide.style.left = '-17%';
            contents2Slide.style.transition = "0ms";
            window.setTimeout(() => {
                contents2Slide.style.left = 0;
                contents2Slide.style.transition = contentsDuration + "ms";
            });
        }
})
