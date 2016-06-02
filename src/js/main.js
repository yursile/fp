
var pointers = [];
	var pointer = {};
	var submited = false;
	var timer;
	var totalTime = 40;
window.onload = function(){
	
	


	

	$(".start").on("click",function(){
		swiper.slideNext();
	})



	$("#point").on("click",function(e){
		e.stopPropagation()
		e.preventDefault();

		if($(".comment_box").css("display")=="block"){
			$("#detail").trigger("touchstart");
		}

		$(this).addClass("active");
		$(".pointer_box").show();

		$("#detail,.wrapper").one("touchstart",function(){

			var num = $("#defen").html()
			pointer.num = num;
			
			if(typeof pointer.comment!="undefined" &&pointer.comment!=null && !submited){
				$(".submit").addClass("active");
				submited = true;
			}
			$(".pointer_box").hide();
			$("#point").html(num);
		})
	})

	$("#comment").on("touchstart",function(e){
		e.stopPropagation()
		e.preventDefault();
		if($(".pointer_box").css("display")=="block"){
			$("#detail").trigger("touchstart");
		}

		$(this).addClass("active");
		$(".comment_box").show();

		$("#detail,.wrapper").one("touchstart",function(){


			if(typeof pointer.num!="undefined" && comment!=null && !submited){
				$(".submit").addClass("active");
				submited = true;
			}
			$(".comment_box").hide();
			
		})
	})

	$(".comment_box").on("touchstart",function(e){
		e.stopPropagation();
		e.preventDefault();
		$(this).find(".active").removeClass("active");
		$(e.target).addClass("active");
		var comment = $(".comment_box div.active").html();
			var commentIndex = $(".comment_box div.active").data("index");
			pointer.comment = comment;
			pointer.commentIndex = commentIndex;
			$("#comment").html(comment);

	})


		
	var totalPoint = 60;
	$(".pointer_box").on("touchstart",function(e){
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


	/**
	 * submit
	 */
	
	$(".submit").on("click",function(){
		if(!submited){
			return ;
		}

		pointers.push(pointer);
		if(timer) clearInterval(timer);
		timer = null;
		$(".stu_grade").html(pointer.num+"分");
		$(".stu_comment").addClass("comment"+pointer.commentIndex);
		$(".stu_name").html(pointer.author);
		$(".stu_relation").html("("+pointer.relation+")");
		$(".timeout_box").hide();
		swiper.slideNext();
		handleShare();
	})

	/**
	 * cover name
	 */
	
	$(".name_cover").on("click",function(){
		$(this).addClass("fadeOut animated");
	})


	/**
	 * select paper
	 */

	 $("#papers").delegate(".city div","click",function(e){
	 	if($(this).hasClass("readed"))return;
	 	var index = parseInt($(this).data("index"));
	 	swiper.slideNext();
	 	pointer.index = index;

	 	openPaper(index);
	 })

	 function openPaper(index){
	    var singleData = papers[index];
	    var html = template('detailTPL', singleData);
	    pointer.author = singleData.author;
	    pointer.relation = singleData.relation;
	    pointer.city = singleData.city;
	    $(".article_box").html(html);
	   	setTimeout(function(){
			window.myScroll = new IScroll('.article_box',{
				scrollbars: "custom"
			});
		},300);

		$(".prompt").show();
		pointer.name = singleData.author;
		
	    
	   	// runTime();
	    
	}

	function runTime(){
		
		timer = setInterval(function(){
			if(totalTime>0){
				if(totalTime<11){
					$("#timer").html("0"+(--totalTime))
				}else{
					$("#timer").html(--totalTime)
				}
			}else{
				clearInterval(timer);
				timer = null;
				timeout();
			}
		},1000);
	}


	function timeout(){
		$(".timeout_box").show();
	}

	$(".timeout").on("click",function(e){
		e.stopPropagation();
		e.preventDefault();
		$(".timeout_box").hide();
	});



	$(".p_go").on("click",function(){
		$(".prompt").hide();
		runTime();
	});

	/**
	 * share page btn
	 */
	

	$(".share_btn").on("click",function(){
		$(".shareCover").show();
	});

	$(".shareCover").on("touchstart",function(e){
		e.stopPropagation();
		e.preventDefault();
		$(".shareCover").hide();
	})

	$(".goon").on("click",function(){
		swiper.slideTo(1);

		backup();
	})


	function backup(){
		var currentIndex = pointers[pointers.length-1].index;
		$(".city div[data-index='"+currentIndex+"']").addClass("readed");
		totalTime = 40;
		$("#timer").html(totalTime);
		$("#point,#comment").html("").removeClass("active");
		$(".submit").removeClass("active");
		$(".comment_box .active").removeClass("active");
		$(".circles").css("-webkit-transform","translateX(-175px)");
		$("#defen").html("30");
		submited = false;
		$(".name_cover").removeClass("fadeOut animated");
		pointer = {};
	}


	function handleShare(){
		console.log(pointer);
		var city = pointer.city;
		var name = pointer.author;
		
	}


}