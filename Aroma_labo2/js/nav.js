$(".open_btn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panel_active');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circle_active');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".open_btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panel_active');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circle_active');//丸背景のcircleactiveクラスを除去
});