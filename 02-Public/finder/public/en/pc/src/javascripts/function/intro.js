function intro(){
    var $introPlayer = document.querySelector('lottie-player'),
        $introAnimation = $("#introAnimation");
    $introPlayer.addEventListener('complete', function(e) {
        TweenMax.to($introAnimation, .3, {opacity:0, display:"none"});
    });

    var $finderIntro = $("#finderIntro"),
        $quickFinder = $("#quickFinder"),
        $introWrap = $finderIntro.find(".intro_wrap"),
        $introSelectBtn = $finderIntro.find(".intro_select_wrap button"),
        $selectAfterWrap = $finderIntro.find(".select_after_wrap"),
        $selectAfterDiscLi = $selectAfterWrap.find(".disc li"),
        $selectAfterTxtLi = $selectAfterWrap.find(".txt_box li"),
        $introEndBtn = $("#introEndBtn");

    $introSelectBtn.click(function(){
        var _thisIndex = $(this).parent().index();
        $introWrap.css({display:"none"});
        $selectAfterWrap.css({display:"block"});
        $selectAfterDiscLi.eq(_thisIndex).css({display:"block"});
        $selectAfterTxtLi.eq(_thisIndex).css({display:"block"});
    });

    $introEndBtn.click(function(){
        $finderIntro.css({display:"none"});
        $quickFinder.css({display:"block"});
    });

    var popupStep05swiper = new Swiper(".popup_step05_slide", {
        pagination: {
            el: ".popup_step05 .indicator",
        },
        observe: true,
        effect: "fade"
    });

    var popupStep07swiper = new Swiper(".popup_step07_slide", {
        pagination: {
            el: ".popup_step07 .indicator",
        },
        observe: true,
        effect: "fade"
    });

    var popupStep03swiperMulti = new Swiper(".popup_step03 .multi", {
        pagination: {
            el: ".popup_step03 .multi .indicator",
        },
        observe: true,
        effect: "fade"
    });

    var popupStep03swiperAmerican = new Swiper(".popup_step03 .american", {
        pagination: {
            el: ".popup_step03 .american .indicator",
        },
        observe: true,
        effect: "fade"
    });

    var popupStep03swiperTall = new Swiper(".popup_step03 .tall", {
        pagination: {
            el: ".popup_step03 .tall .indicator",
        },
        observe: true,
        effect: "fade"
    });
}