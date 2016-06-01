
window.onload = function(){
	
	var pointers = [];
	var pointer = {
		name:"",
		num:0
	}


	function initDetail(index){
	    var singleData = dongjian[index-1];
	    var html = template('detailTPL', singleData);
	    // document.getElementsByClassName('Response')[0].innerHTML = html;
	    $(".detailContainer").html(html);
	    $(".detailContainer").show();
	}

	$(".start").on("click",function(){
		swiper.slideNext();
	})

	$("#papers").on("click",function(){
		swiper.slideNext();
	});


	$("#point").on("click",function(e){
		e.stopPropagation()
		e.preventDefault();

		$(this).addClass("active");
		$(".pointer_box").show();

		$("#detail").one("click",function(){
			var num = $("#defen").html()
			pointer.name = "a",
			pointer.num = num;
			// pointers.push(pointer);
			$(".pointer_box").hide();
			$("#point").html(num);
		})
	})

	$("#comment").on("click",function(e){
		e.stopPropagation()
		e.preventDefault();

		$(this).addClass("active");
		$(".comment_box").show();

		$("#detail").one("click",function(){
			var comment = $(".comment_box div.active").html();
			pointer.name = "a",
			pointer.comment = comment;
			// pointers.push(pointer);
			$(".comment_box").hide();
			$("#comment").html(comment);
		})
	})

	$(".comment_box").on("click",function(e){
		e.stopPropagation();
		e.preventDefault();
		$(this).find(".active").removeClass("active");
		$(e.target).addClass("active");

	})


		
	var totalPoint = 60;
	$(".pointer_box").on("click",function(e){
		e.preventDefault();
		e.stopPropagation();
	})

	$(".circle").on("touchmove",function(e){
		e.preventDefault();
		e.stopPropagation();
		var endX = e.touches[0].clientX/pas.scaleNum-130;
		endX = Math.max(0,Math.min(endX,350));

		$("#defen").html(Math.ceil(endX/350*totalPoint));

		$(".circles").css("-webkit-transform","translateX(-"+(350-endX)+"px)");
	})






	// var myScroll;
	setTimeout(function(){

		window.myScroll = new yScroll('.article_box',pas.scaleNum);
	},2000)

}