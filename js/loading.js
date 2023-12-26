$(function () {
  //預先載入
  var queue = new createjs.LoadQueue();
  var preloadImages = [
    "images/b01_open.jpg",
    "images/b02_open.jpg",
    "images/b03_open.jpg",
    "images/b04_open.jpg",
    "images/b05_open.jpg",
    "images/b06_open.jpg",
    "images/b07_open.jpg",
    "images/b08_open.jpg",
    "images/b09_open.jpg",
    "images/b10_open.jpg",
    "images/b11_open.jpg",
    "images/b12_open.jpg",
    "images/b13_open.jpg",
    "images/b14_open.jpg",
    "images/b15_open.jpg",
    "images/b16_open.jpg",
    "images/b17_open.jpg",
  ];

  queue.on("complete", function (event) {
    $(".loading").fadeOut(1000, function () {
      $("#cloud1").animate({ left: "0px", opacity: 1 }, 500);
      $("#cloud2").animate({ left: "1150px", opacity: 1 }, 800);
      $("#cloud3").animate({ left: "-100px", opacity: 1 }, 800);
      $("#cloud4").animate({ left: "980px", opacity: 1 }, 700);

      $(".hi").delay(500).animate({ top: 80, opacity: 1 }, 1000);
      $(".pic").delay(200).animate({ opacity: 1 }, 800);
      /*** 開場動畫 ***/
      firstAnimate();
    });
  });
  queue.on("progress", function (event) {
    $(".loading_img p").html(Math.round(event.progress * 100) + "%");
  });
  queue.on("error", function (event) {
    console.log("error");
  });
  queue.loadManifest(preloadImages);

  /*
    $(window).load(function() {
      firstAnimate();
    });
    */
  function firstAnimate() {}
});
