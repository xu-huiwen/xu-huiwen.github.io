$(document).ready(function(){
	// 楼层跳转

	var cheight=document.documentElement.clientHeight;
	var nheight;
	var now;
	for (var i = 0; i < $(".floor").length; i++) {
		var juli=$(".floor").eq(i).position();
		$(".floor").eq(i).prop("h",juli.top);
	}
	$(window).on("scroll",function(){
		var top=$(window).scrollTop()
		if(top>=$(".floor").first().prop("h")){
		}
})

$(".lo").on("click",function(){
			var index=$(this).index();
			var hh=$(".floor").eq(index).prop("h")
			var top=$(window).scrollTop()
			var src={aa:top}
			$(src).animate({aa:hh},{
				duration:300,
				step:function(){
					$(window).scrollTop(src.aa)
				}
			})
			now=index;
		})

})