
var bannerArray = new Array(
    '.banner1',
    '.banner2',
    '.banner3',
    '.banner4',
    '.banner5',
    '.banner6',
    '.banner7',
    '.banner8',
    '.banner9',
    '.banner10',
    '.banner11',
    '.banner12',
    '.banner13',
    '.banner14',
    '.banner15',
    '.banner16'
);

function rollover2(banner) {
    $(bannerArray[banner] + ' img').css({ borderRadius: "115px" });
    $(bannerArray[banner] + ' img').stop().animate({
        width: '229px',
        height: '229px',
        left: '15px',
        top: '15px',
        borderRadius: '229px' 
    }, 'fast');

    $(bannerArray[banner] + ' .tip').stop().animate({
        opacity: '1',
        width: '146px',
        height: '146px',
        left: '44px',
        top: '44px',
        borderRadius: '140px' 
    }, 'fast');


};

function rollout2(banner) {
    $(bannerArray[banner] + ' img').stop().animate({
        width: '229px',
        height: '229px',
        left: '0px',
        top: '0px',
        borderRadius: '0px'
    }, 'fast');

    $(bannerArray[banner] + ' .tip').stop().animate({
        opacity: '0',
        width: '0px',
        height: '0px',
        left: '116px',
        top: '116px'
    }, 'fast');

};





/*//------跳窗-------//*/
$(".intro_wrap1,.intro_wrap2,.intro_wrap3,.intro_wrap4,.intro_wrap5,.intro_wrap6,.intro_wrap7,.intro_wrap8,.intro_wrap9,.intro_wrap10,.intro_wrap11,.intro_wrap12,.intro_wrap13,.intro_wrap14,.intro_wrap15,.intro_wrap16,.intro_wrap17,.intro_wrap18,.intro_wrap19,.intro_wrap20,.intro_wrap21,.intro_wrap22,.intro_wrap23,.intro_wrap24,.intro_wrap25,.intro_wrap26,.intro_wrap27,.intro_b01,.intro_b02,.intro_b03,.intro_b04,.intro_b05,.intro_b06,.intro_b07,.intro_b08,.intro_b09,.intro_b10,.intro_b11,.intro_b12,.dimmed,.btn_intro_close").css({display:"none"});

$(".dimmed,.btn_intro_close").click(function() {

    $(".intro_wrap1,.intro_wrap2,.intro_wrap3,.intro_wrap4,.intro_wrap5,.intro_wrap6,.intro_wrap7,.intro_wrap8,.intro_wrap9,.intro_wrap10,.intro_wrap11,.intro_wrap12,.intro_wrap13,.intro_wrap14,.intro_wrap15,.intro_wrap16,.intro_wrap17,.intro_wrap18,.intro_wrap19,.intro_wrap20,.intro_wrap21,.intro_wrap22,.intro_wrap23,.intro_wrap24,.intro_wrap25,.intro_wrap26,.intro_wrap27,.intro_b01,.intro_b02,.intro_b03,.intro_b04,.intro_b05,.intro_b06,.intro_b07,.intro_b08,.intro_b09,.intro_b10,.intro_b11,.intro_b12,.dimmed,.btn_intro_close").css({display:"none"});

    //$(".intro_wrap .introbox_movie").html('');

    return false;
});



$(".banner1").click(function() {

    $(".dimmed,.intro_wrap1,.btn_intro_close").show();


    return false;
})

$(".banner2").click(function() {

    $(".dimmed,.intro_wrap2,.btn_intro_close").show();


    return false;
})


$(".banner3").click(function() {

    $(".dimmed,.intro_wrap3,.btn_intro_close").show();


    return false;
})


$(".banner4").click(function() {

    $(".dimmed,.intro_wrap4,.btn_intro_close").show();


    return false;
})


$(".banner5").click(function() {

    $(".dimmed,.intro_wrap5,.btn_intro_close").show();


    return false;
})


$(".banner6").click(function() {

    $(".dimmed,.intro_wrap6,.btn_intro_close").show();


    return false;
})


$(".banner7").click(function() {

    $(".dimmed,.intro_wrap7,.btn_intro_close").show();


    return false;
})


$(".banner8").click(function() {

    $(".dimmed,.intro_wrap8,.btn_intro_close").show();


    return false;
})


$(".banner9").click(function() {

    $(".dimmed,.intro_wrap9,.btn_intro_close").show();


    return false;
})


$(".banner10").click(function() {

    $(".dimmed,.intro_wrap10,.btn_intro_close").show();


    return false;
})


$(".banner11").click(function() {

    $(".dimmed,.intro_wrap11,.btn_intro_close").show();


    return false;
})


$(".banner12").click(function() {

    $(".dimmed,.intro_wrap12,.btn_intro_close").show();


    return false;
})


$(".banner13").click(function() {

    $(".dimmed,.intro_wrap13,.btn_intro_close").show();


    return false;
})


$(".banner14").click(function() {

    $(".dimmed,.intro_wrap14,.btn_intro_close").show();


    return false;
})


$(".banner15").click(function() {

    $(".dimmed,.intro_wrap15,.btn_intro_close").show();


    return false;
})


$(".banner16").click(function() {

    $(".dimmed,.intro_wrap16,.btn_intro_close").show();


    return false;
})

/*//------卷軸插件-----//*/
$("div.introbox").mCustomScrollbar();

for (var i = 1; i <= 45; i++) {

    $("#" + "iframe-container" + i).mCustomScrollbar({
        axis: "xy",
        theme: "light-thick"
    });
}


/*//------手機版換版頭-----//*/

var PageWidth;

var WIN = $(window);

function goResize() {


    //抓取視窗寬高
    PageWidth = WIN.innerWidth();

    if (PageWidth <= 960) {
        location.href="https://silviacheng.github.io/works/mobile.html";

    } else if (PageWidth >= 960) {

    }

}


//拉動視窗時,執行goResize
$(window).resize(function() {
    goResize();
    //$('#viewportsize').html('Height: '+height+'<br>Width: '+width);
});

goResize();


/*

$(function(){
	
	$(window).scroll(function(){
		
		var HEIGHT = $(window).scrollTop() + $(window).innerHeight()-200;
		
        if( $(window).scrollTop() > 350 ){
			
            $("#hi").stop(true,false).animate({opacity:0,top:80},500);
            $("#pic").stop(true,false).animate({opacity:0,top:165},500);
            
        }else{
            
            $("#hi").stop(true,false).animate({opacity:1,top:80},900);
            $("#pic").stop(true,false).animate({opacity:1,top:165},500);
            
        }
		
	});
	
		 
 });
*/
 




$("#works").click(function goworks(){
    /*$("#hi,#pic").stop(true,false).animate({opacity:0},200);*/
		
    $("html,body").stop(true,false).animate({scrollTop:960},1200);
    
});

$("#about").click(function goworks(){
		
    $("html,body").stop(true,false).animate({scrollTop:0},1200);


    
});

