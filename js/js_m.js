/*//------- 作品資訊 -------//*/



  //////////*進場*//////////////////////////////////////////////////

    $(".line01").fadeTo(200, 0).fadeTo(200, 1).animate(
      {
        opacity: 1,
        top: "0rem",
        left: "2.9rem",
      },
      500,
      "easeInCubic"
    );

    $(".line02").fadeTo(200, 0).delay(600).fadeTo(200, 1).animate(
      {
        opacity: 1,
        top: "0.11rem",
        left: "3.75rem",
      },
      500,
      "easeInCubic"
    );
    $(".line03").fadeTo(200, 0).delay(200).fadeTo(200, 1).animate(
      {
        opacity: 1,
        top: "5rem",
        left: "8.8rem",
      },
      500,
      "easeInCubic"
    );

    $(".line04").fadeTo(200, 0).delay(200).fadeTo(200, 1).animate(
      {
        opacity: 1,
        top: "6.6rem",
        left: "9.1rem",
      },
      300,
      "easeInCubic"
    );
    $(".line05").fadeTo(200, 0).delay(400).fadeTo(200, 1).animate(
      {
        opacity: 1,
        top: "10.54rem",
        left: "7.6rem",
      },
      500,
      "easeInCubic"
    );
    

  $(".text1").delay(200).animate(
    {
      opacity: 1,
    },
    700,
    "easeOutCubic"
  );

  $(".text2").delay(1000).animate(
    {
      opacity: 1,
    },
    700,
    "easeOutCubic"
  );

  $(".text3").delay(1500).animate(
    {
      opacity: 1,
    },
    700,
    "easeOutCubic"
  );

  $(".text4").delay(2500).animate(
    {
      opacity: 1,
    },
    700,
    "easeOutCubic"
  );

  $(".text5").delay(3500).animate(
    {
      opacity: 1,
    },
    700,
    "easeOutCubic"
  );

  $(".text6").delay(4500).animate(
    {
      opacity: 1,
    },
    700,
    "easeOutCubic"
  );

  $(".yellow").delay(200).animate(
    {
      left: "0px",
    },
    700,
    "easeOutCubic"
  );


/*//------跳窗-------//*/
$(
  ".intro_wrap1,.intro_wrap2,.intro_wrap3,.intro_wrap4,.intro_wrap5,.intro_wrap6,.intro_wrap7,.intro_wrap8,.intro_wrap9,.intro_wrap10,.intro_wrap11,.intro_wrap12,.intro_wrap13,.intro_wrap14,.intro_wrap15,.intro_wrap16,.intro_wrap17,.intro_wrap18,.intro_wrap19,.intro_wrap20,.intro_wrap21,.intro_wrap22,.intro_wrap23,.intro_wrap24,.intro_wrap25,.intro_wrap26,.intro_wrap27,.intro_b01,.intro_b02,.intro_b03,.intro_b04,.intro_b05,.intro_b06,.intro_b07,.intro_b08,.intro_b09,.intro_b10,.intro_b11,.intro_b12,.intro_b13,.intro_b14,.intro_b15,.intro_b16,.dimmed,.btn_intro_close"
).css({ display: "none" });

$(".dimmed,.btn_intro_close").click(function () {
  $(
    ".intro_wrap1,.intro_wrap2,.intro_wrap3,.intro_wrap4,.intro_wrap5,.intro_wrap6,.intro_wrap7,.intro_wrap8,.intro_wrap9,.intro_wrap10,.intro_wrap11,.intro_wrap12,.intro_wrap13,.intro_wrap14,.intro_wrap15,.intro_wrap16,.intro_wrap17,.intro_wrap18,.intro_wrap19,.intro_wrap20,.intro_wrap21,.intro_wrap22,.intro_wrap23,.intro_wrap24,.intro_wrap25,.intro_wrap26,.intro_wrap27,.intro_b01,.intro_b02,.intro_b03,.intro_b04,.intro_b05,.intro_b06,.intro_b07,.intro_b08,.intro_b09,.intro_b10,.intro_b11,.intro_b12,.intro_b13,.intro_b14,.intro_b15,.intro_b16,.dimmed,.btn_intro_close"
  ).css({ display: "none" });

  //$(".intro_wrap .introbox_movie").html('');

  return false;
});

$(".overlay,.web0").click(function () {
  $(".dimmed,.intro_wrap1,.btn_intro_close").css({ display: "block" });
  //window.open('https://tw.event.beanfun.com/mabinogi/E20170328_1/index_movie.aspx', '_blank');

  return false;
});

$(".web1").click(function () {
  $(".dimmed,.intro_wrap2,.btn_intro_close").css({ display: "block" });

  return false;
});

$(".web2").click(function () {
  $(".dimmed,.intro_wrap3,.btn_intro_close").css({ display: "block" });

  return false;
});

$(".web3").click(function () {
  $(".dimmed,.intro_wrap4,.btn_intro_close").show();

  return false;
});

$(".web4").click(function () {
  $(".dimmed,.intro_wrap5,.btn_intro_close").show();

  return false;
});

// $(".web5").click(function() {

//     window.open('https://tw.event.beanfun.com/mapleStory/E20170503_2/index.aspx', '_blank');

//     return false;
// })

$(".web5").click(function () {
  $(".dimmed,.intro_wrap6,.btn_intro_close").show();

  return false;
});

$(".web6").click(function () {
  $(".dimmed,.intro_wrap7,.btn_intro_close").show();

  return false;
});

$(".web7").click(function () {
  $(".dimmed,.intro_wrap8,.btn_intro_close").show();

  return false;
});

$(".web8").click(function () {
  $(".dimmed,.intro_wrap9,.btn_intro_close").show();

  return false;
});

$(".web9").click(function () {
  $(".dimmed,.intro_wrap10,.btn_intro_close").show();

  return false;
});

$(".web10").click(function () {
  $(".dimmed,.intro_wrap11,.btn_intro_close").show();

  return false;
});

$(".web11").click(function () {
  $(".dimmed,.intro_wrap12,.btn_intro_close").show();

  return false;
});

$(".web12").click(function () {
  $(".dimmed,.intro_wrap13,.btn_intro_close").show();

  return false;
});

$(".web13").click(function () {
  $(".dimmed,.intro_wrap14,.btn_intro_close").show();

  return false;
});

$(".web14").click(function () {
  $(".dimmed,.intro_wrap15,.btn_intro_close").show();

  return false;
});

$(".web15").click(function () {
  $(".dimmed,.intro_wrap16,.btn_intro_close").show();

  return false;
});

$(".web16").click(function () {
  $(".dimmed,.intro_wrap17,.btn_intro_close").show();

  return false;
});

$(".web17").click(function () {
  $(".dimmed,.intro_wrap18,.btn_intro_close").show();

  return false;
});

$(".web18").click(function () {
  $(".dimmed,.intro_wrap19,.btn_intro_close").show();

  return false;
});

$(".web19").click(function () {
  $(".dimmed,.intro_wrap20,.btn_intro_close").show();

  return false;
});

$(".web20").click(function () {
  $(".dimmed,.intro_wrap21,.btn_intro_close").show();

  return false;
});

$(".web21").click(function () {
  $(".dimmed,.intro_wrap22,.btn_intro_close").show();

  return false;
});

$(".web22").click(function () {
  $(".dimmed,.intro_wrap23,.btn_intro_close").show();

  return false;
});

$(".web23").click(function () {
  $(".dimmed,.intro_wrap24,.btn_intro_close").show();

  return false;
});

$(".web24").click(function () {
  $(".dimmed,.intro_wrap25,.btn_intro_close").show();

  return false;
});

$(".web25").click(function () {
  $(".dimmed,.intro_wrap25,.btn_intro_close").show();

  return false;
});

$(".web26").click(function () {
  $(".dimmed,.intro_wrap26,.btn_intro_close").show();

  return false;
});

$(".web27").click(function () {
  $(".dimmed,.intro_wrap27,.btn_intro_close").show();

  return false;
});

$(".banner1").click(function () {
  $(".dimmed,.intro_b01,.btn_intro_close").show();

  return false;
});

$(".banner2").click(function () {
  $(".dimmed,.intro_b02,.btn_intro_close").show();

  return false;
});

$(".banner3").click(function () {
  $(".dimmed,.intro_b03,.btn_intro_close").show();

  return false;
});

$(".banner4").click(function () {
  $(".dimmed,.intro_b04,.btn_intro_close").show();

  return false;
});

$(".banner5").click(function () {
  $(".dimmed,.intro_b05,.btn_intro_close").show();

  return false;
});

$(".banner6").click(function () {
  $(".dimmed,.intro_b06,.btn_intro_close").show();

  return false;
});

$(".banner7").click(function () {
  $(".dimmed,.intro_b07,.btn_intro_close").show();

  return false;
});

$(".banner8").click(function () {
  $(".dimmed,.intro_b08,.btn_intro_close").show();

  return false;
});

$(".banner9").click(function () {
  $(".dimmed,.intro_b09,.btn_intro_close").show();

  return false;
});

$(".banner10").click(function () {
  $(".dimmed,.intro_b10,.btn_intro_close").show();

  return false;
});

$(".banner11").click(function () {
  $(".dimmed,.intro_b11,.btn_intro_close").show();

  return false;
});

$(".banner12").click(function () {
  $(".dimmed,.intro_b12,.btn_intro_close").show();

  return false;
});

$(".banner13").click(function () {
  $(".dimmed,.intro_b13,.btn_intro_close").show();

  return false;
});

$(".banner14").click(function () {
  $(".dimmed,.intro_b14,.btn_intro_close").show();

  return false;
});

$(".banner15").click(function () {
  $(".dimmed,.intro_b15,.btn_intro_close").show();

  return false;
});

$(".banner16").click(function () {
  $(".dimmed,.intro_b16,.btn_intro_close").show();

  return false;
});

/*//------卷軸插件-----//*/
$("div.introbox").mCustomScrollbar();

for (var i = 1; i <= 46; i++) {
  $("#" + "iframe-container" + i).mCustomScrollbar({
    axis: "xy",
    theme: "light-thick",
  });
}
