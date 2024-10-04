$(document).ready(function () {
	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['WE', '대시보드', 'WE의 강점', '주요기능', '부가기능'],
		anchors: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5'],
		menu: '.gnb',
		responsiveWidth: 1024,
		//options here
		autoScrolling: true,
		scrollHorizontally: true,

		onLeave: function (origin, destination, direction, trigger) {

			//구역 4를 떠난 후 5에 도달했을 때
			// if(destination == 5){
			// 	$("#fp-nav").fadeOut();
			// } else {
			// 	$("#fp-nav").fadeIn();
			// }

			if (destination == 1) {
				$("#header").css({ "border-bottom": "1px solid rgba(255, 255, 255, 0.3)" });
				$("#header a").css({ "color": "#fff" });
				$("#fp-nav ul li a span, .fp-slidesNav ul li a span").css({ "background": "#fff" })
				$("#fp-nav ul li .fp-tooltip").css({ "color": "#fff" })

			} else {
				$("#header").css({ "border-bottom": "1px solid #e3e3e3" });
				$("#header a").css({ "color": "#202124" });
				$("#fp-nav ul li a span, .fp-slidesNav ul li a span").css({ "background": "#202124" })
				$("#fp-nav ul li .fp-tooltip").css({ "color": "#202124" })
			}

			// 	else if(origin.index == 1 && direction == 'up'){
			// 		alert("Going to section 1!");
			// 	}
		}
	});

	//mgnb_wrap
	$(".mgnb_wrap").hide();
	$(".ham").click(function () {
		$(".mgnb_wrap").fadeIn();
	});
	$(".mgnb_close").click(function () {
		$(".mgnb_wrap").fadeOut();
	});

	// 왼쪽 슬라이드
	const txt_box = new Swiper('.txt_box', {
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		}, // 두 변수가 연결되어있으면 오토플레이옵션은 하나에만 주기
		speed: 1000,

		navigation: {
			prevEl: ".swiper-button-prev",
			nextEl: ".swiper-button-next",
		},
	});

	// 브랜드 오른쪽 슬라이드
	const img_box = new Swiper('.img_box', {
		loop: true,
		effect: "fade", //페이드 효과
		fadeEffect: {
			crossFade: true
		},

		pagination: {
			el: ".swiper-pagination",
			type: "bullets", // "bullets", "fraction", "progressbar" 슬라이드스타일
			clickable: true, // 클릭 가능 여부
		},
	});


	txt_box.controller.control = img_box;
	img_box.controller.control = txt_box;
});