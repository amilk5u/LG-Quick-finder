$(function () {
    // 라벨 클릭 효과
    $("input[type=checkbox]").change(function (){
        var $inputId = $(this).attr("id");
        if ($(this).is(":checked")) {
            $("label[for="+$inputId+"]").addClass("on");
        } else {
            $("label[for="+$inputId+"]").removeClass("on");
        }
    });
    $("input[type=radio]").change(function (){
        var $inputId = $(this).attr("id");
        if ($(this).is(":checked")) {
            $(this).siblings("label").removeClass("on");
            $("label[for="+$inputId+"]").addClass("on");
        }
    });

    // 슬라이드
    var $slideWrap = $(".slide_wrap"),
        $slideList = $slideWrap.find(">div"),
        $leftBtn = $(".prev_btn"),
        $rightBtn = $(".next_btn"),
        $indicator = $(".indicator li button"),
        _current = 0;
    // 버튼 활성화
    if(_current === 0) {
        $leftBtn.attr("disabled", true);
    }
    if (_current === $slideList.length-1) {
        $rightBtn.attr("disabled", true);
    }
    // 좌, 우 버튼
    function move(tg, start, end) {
        tg.css("left", start).stop().animate({left:end}, 500);
    }
    $leftBtn.click(function () {
        if (_current !== 0) {
            $rightBtn.attr("disabled", false);
            var $prev = $slideList.eq(_current);
            var $prevBtn = $indicator.eq(_current);
            $prevBtn.removeClass("on");
            move($prev, 0, '100%');
            _current--;
            var $next = $slideList.eq(_current);
            var $nextBtn = $indicator.eq(_current);
            $nextBtn.addClass("on");
            move($next, '-100%', 0);
        }
        if (_current === 0) {
            $(this).attr("disabled", true);
        }
    });
    $rightBtn.click(function () {
        if (_current !== $slideList.length-1) {
            $leftBtn.attr("disabled", false);
            var $prev = $slideList.eq(_current);
            var $prevBtn = $indicator.eq(_current);
            $prevBtn.removeClass("on");
            move($prev, 0, '-100%');
            _current++;
            var $next = $slideList.eq(_current);
            var $nextBtn = $indicator.eq(_current);
            $nextBtn.addClass("on");
            move($next, '100%', 0);
        }
        if (_current === $slideList.length-1) {
            $(this).attr("disabled", true);
        }
    });
    // 인디케이터
    function moveRight(_idx) {
        if (_current === _idx) return;
        var $currentEl = $slideList.eq(_current);
        var $nextEl = $slideList.eq(_idx);
        $currentEl.css("left", "0").stop().animate({left:"-100%"}, 500);
        $nextEl.css("left", "100%").stop().animate({left:"0"}, 500);
        _current = _idx;
    }
    function moveLeft(_idx) {
        if (_current === _idx) return;
        var $currentEl = $slideList.eq(_current);
        var $nextEl = $slideList.eq(_idx);
        $currentEl.css("left", "0").stop().animate({left:"100%"}, 500);
        $nextEl.css("left", "-100%").stop().animate({left:"0"}, 500);
        _current = _idx;
    }
    $indicator.each(function (_idx){
        var _this = $(this);
        _this.click(function () {
            $indicator.removeClass("on");
            _this.addClass("on");
            if (_current > _idx) {
                moveLeft(_idx);
            } else {
                moveRight(_idx);
            }
        });
    });

    // 전송 버튼 활성화
    $(".features_btn").click(function (){
        $indicator.removeClass("on");
        $indicator.eq(6).addClass("on");
        moveRight(6);
        $(".features_submit_btn").css("display","block");
    });
});