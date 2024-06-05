// 動きのきっかけの起点となるアニメーションの名前を定義


//グローバル変数
var sX_syncerModal = 0;
var sY_syncerModal = 0;

function scrollposition() {
	//スクロール位置を記録する
	var dElm = document.documentElement, dBody = document.body;
	sX_syncerModal = dElm.scrollLeft || dBody.scrollLeft;	//現在位置のX座標
	sY_syncerModal = dElm.scrollTop || dBody.scrollTop;	//現在位置のY座標
}


function BgFadeAnime() {

	// 背景色が伸びて出現（左から右）
	$('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
		} else {
			$(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
		}
	});

	// 文字列を囲う子要素
	$('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
		} else {
			$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
		}
	});

	// 背景色が伸びて出現（右から左）
	$('.bgRLextendTrigger').each(function () { //bgRLextendTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('bgRLextend');// 画面内に入ったらbgRLextendというクラス名を追記
		} else {
			$(this).removeClass('bgRLextend');// 画面外に出たらbgRLextendというクラス名を外す
		}
	});
	// 文字列を囲う子要素
	$('.bgappearTrigger2').each(function () { //bgappearTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
		} else {
			$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
		}
	});
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//3. 画像のモーダル
$(".gallery").modaal({
	type: 'image',
	overlay_close: true,//モーダル背景クリック時に閉じるか
	before_open: function () {// モーダルが開く前に行う動作
		$('html').css('overflow-y', 'hidden');/*縦スクロールバーを出さない*/
	},

	after_close: function () {// モーダルが閉じた後に行う動作
		$('html').css('overflow-y', 'scroll');/*縦スクロールバーを出す*/
	}
});

//scroll_effect
$(window).scroll(function () {
	var scrollAnimationElm = document.querySelectorAll('section');
	var scrollAnimationFunc = function () {
		for (var i = 0; i < scrollAnimationElm.length; i++) {
			var triggerMargin = 100;
			if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
				scrollAnimationElm[i].classList.add('on');
			}
		}
	}
	window.addEventListener('load', scrollAnimationFunc);
	window.addEventListener('scroll', scrollAnimationFunc);
});


$('#link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top - 99;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({ scrollTop: pos }, 1000); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

$(function () {
	$('.imageList__thumbnail').on('click', function () {
		var selectedImgSrc = $(this).children('img').attr('src');
		$('.imageList__view').children('img').attr('src', selectedImgSrc);
	});
})