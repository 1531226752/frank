$(document).ready(function() {
	//关于的显示隐藏
	$(".navg .aboutbox").parent().hover(function() {
		$(".navg .box").stop().show("slow");
	}, function() {
		$(".navg .box").stop().hide("slow");
	});
	//关于子集颜色变换
	$(".navg .box").children().hover(function() {
		$(this).addClass("trans3").css("background-color", '#333').css('color', "white");
	}, function() {
		$(this).addClass("trans3").css("background-color", '').css('color', "");

	});
	//线条变换
	$(".navg span").hover(function() {
		$(this).find(".line").stop().animate({
			width: "90px"
		}, "normal");
	}, function() {
		$(this).find(".line").stop().animate({
			width: "0px"
		}, "normal");
	});
	//第二页
	$(".foodkinds li").hover(function() {
		$(this).find(".adds").css("display", "inline-block").css("z-index", "2").stop().animate({
			top: 70,
			opacity: 1
		}, 500);
	}, function() {
		$(this).find(".adds").stop().animate({
			top: -40,
			opacity: 0
		}, 500);
	});
	$(".foodkinds li").hover(function() {
		$(this).find(".arrow_r_l").css("display", "inline-block").stop().animate({
			left: 210,
			opacity: 1
		}, 500);
	}, function() {
		$(this).find(".arrow_r_l").stop().animate({
			left: 240,
			opacity: 0
		}, 500);
	})
	//左右切换
	$(".page3 .arrow_r").click(function() {
		$(".page3 ul").eq(0).css("display", "none");
		$(".page3 ul").eq(1).css("display", "inline-block").addClass("animated fadeInRight");
	});
	$(".page3 .arrow_l").click(function() {
		$(".page3 ul").eq(1).css("display", "none");
		$(".page3 ul").eq(0).css("display", "inline-block").addClass("animated fadeInLeft");
	});
	//图片显示
	$(".news img").hover(function() {
		$(".news .pic .text .p3").css("background", "#fff").addClass("animated fadeInLeft");
	}, function() {
		$(".news .pic .text .p3").css("background", "").removeClass("fadeInLeft")
	});
	$(".news .pic .text .p3").click(function() {
		window.open("data.html")
	})
	//字体颜色变化
	$(".news .title").hover(function() {
		$(this).css("color", "white");
		$(this).parent().siblings(".text").find(".p1").css("color", "white");
	}, function() {
		$(this).css("color", "");
		$(this).parent().siblings(".text").find(".p1").css("color", "");
	});
	$(".news .right .text").hover(function() {
		$(this).find(".p1").stop().animate({
			paddingLeft: 20
		}, "slow");
		$(this).find(".p2").stop().animate({
			paddingLeft: 20
		}, "slow");
	}, function() {
		$(this).find(".p1").stop().animate({
			paddingLeft: 0
		}, "slow");
		$(this).find(".p2").stop().animate({
			paddingLeft: 0
		}, "slow");
	})
	$(".about .more").hover(function() {
		$(this).find("i").stop().animate({
			marginLeft: 15,
			opacity: 1,
		}, "slow")
	}, function() {
		$(this).find("i").stop().animate({
			marginLeft: -5,
			opacity: 0,
		}, "slow");
	})
	$(".team .person1").eq(0).click(function() {
		window.open("person.html");
	});
	$(".team .person1").eq(1).click(function() {
		window.open("person2.html");
	});
	$(".team .person1").eq(2).click(function() {
		window.open("person3.html");
	})
	$(".partner .content img").hover(function() {
		$(this).parent().find(".line").hide();
	}, function() {
		$(this).parent().find(".line").show();
	});
	$(".navg .box").children().eq(0).css("cursor", "pointer").click(function() {
		window.open("about.html");
	});
	$(".navg .box").children().eq(1).css("cursor", "pointer").click(function() {
		window.open("person.html");
	});
	$(".navg .box").children().eq(2).css("cursor", "pointer").click(function() {
		window.open("data.html");
	});
	var a = parseInt($(".footer").css("left")) - parseInt($(".footer").css("width")) / 2 + "px";
	$(".footer").css("left", a);
})