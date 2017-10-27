$(function() {
	$('#deliciousfood').fullpage({
		paddingTop: "60px",
		scrollingSpeed: 700,
		showActiveTooltip: true,
		css3: true,
		verticalCentered: false, //不居中
		navigation: true,
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		navigationTooltips: ["Top", "菜品", "服务", "关于", "新闻", "团队", "合作伙伴", "联系我们"],
		afterRender: function() {

			$("#fp-nav").hide();
		},
		onLeave: function(a, b, c) {
			if(a == 1 && b == 2 && c == "down") {
				$("#fp-nav").show();
				$(".foodkinds .content ul li").eq(0).addClass('wow fadeInUpBig animated').css("animation-delay", "0s");
				$(".foodkinds .content ul li").eq(1).addClass('wow fadeInUpBig animated').css("animation-delay", "0.1s");
				$(".foodkinds .content ul li").eq(2).addClass('wow fadeInUpBig animated').css("animation-delay", "0.2s");
				$(".foodkinds .content ul li").eq(3).addClass('wow fadeInUpBig animated').css("animation-delay", "0.3s");
			};
			if(a == 2 && b == 3 && c == "down") {
				$(".service li").eq(0).addClass('wow fadeInDownBig animated').css("animation-delay", "0s");
				$(".service li").eq(1).addClass('wow fadeInDownBig animated').css("animation-delay", "0.1s");
				$(".service li").eq(2).addClass('wow fadeInDownBig animated').css("animation-delay", "0.2s");
			};

			if(a == 3 && b == 4 && c == "down") {
				$(".page4  .bg").addClass("animated fadeInLeftBig");
				$(".about  .more").addClass("animated fadeInLeft").css("animation-delay", "0.1s");
				$(".about .content p").addClass("animated fadeInRightBig").css("border-bottom", "1px solid #eee");
			}
			if(a == 4 && b == 5 && c == "down") {
				$(".page5 .left").addClass("animated bounceInDown");
				//				$(".page5 .right").addClass("animated bounceInUp");
			}
			if(a == 5 && b == 6 && c == "down") {
				$(".team .person1").find(".img").addClass("animated slideInLeft");
				$(".team .person1").find(".text").addClass("animated slideInLeft");
				$(".team .person1").find(".p").addClass("animated slideInRight");
			}
			if(a == 6 && b == 7 && c == "down") {
				$(".page7 .content").css("display", "block").eq(0).addClass("animated fadeInDownBig");
				$(".page7 .content").css("display", "block").eq(1).addClass("animated fadeInUpBig");
			}
			if(a == 7 && b == 8 && c == "down") {
				$(".contact_bg .way").addClass("animated fadeInLeftBig");
				$(".contact_bg .form").addClass("animated fadeInRightBig");

			}
			if(a == 2 && b == 1 && c == "up") {
				$("#fp-nav").hide();
			}

		},
	});
	var timer = '';
	timer = setInterval(function() {
		$.fn.fullpage.moveSlideRight();
	}, 2000);
	$(".page1").hover(function() {
		clearInterval(timer)
	}, function() {
		timer = setInterval(function() {
			$.fn.fullpage.moveSlideRight();
		}, 2000);
	});
});