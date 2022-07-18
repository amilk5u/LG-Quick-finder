function intro(){
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
}