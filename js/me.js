$(document).ready(function(){
	// 1楼选项卡
	var ClientPhoto=$(".client-photo")
	function xuanxiang(obj1,obj2){
		obj1.each(function(index){
			$(this).on("click",function(){
				obj2.each(function(){
					$(this).css('display','none')
					obj1.css({'border':'1px solid rgba(0, 0, 0, 0.1)','color':'#85939B'})
				})
				obj2.eq(index).css('display','block');
				obj1.eq(index).css({'border':'1px solid #9B59B6','color':'#DDAD02'})
            })
		})

	}
	xuanxiang($('.client-photo'),$('.bxslider li'))
	$('.client-photo').each(function(index){
		$(this).hover(function(){
			$(this).css({'color':'#DDAD02'})
		},function(){
			$(this).css({'color':'#232a2f'})
		})
	})
	// 1楼轮播图
	function luobo(obj3,obj4,obj5,obj6){
  var $box=obj3
  var $div_li=obj4
  var n2=0;
  var next2=0;
  var flag=true;
  var t=setInterval(move,1800);
  function move(){
    next2=n2+1;
    if(flag==false){
      return;
    }
    flag=false;
    if(next2>=$box.length){
      next2=0;
    }
    $div_li.eq(n2).addClass("slider-selected").siblings().removeClass("slider-selected");
    $box.eq(n2).animate({opacity:0},600).end().eq(next2).animate({opacity:1},600,function(){
      flag=true;
    })
    n2=next2;
  obj5.eq(0).click(function(){
      next2=n2-1;
      if(flag==false){
        return;
      }
      flag=false;
      if(next2<0){
        next2=$box.length-1;
      }
        $div_li.eq(n2).addClass("slider-selected").siblings().removeClass("slider-selected");
      $box.eq(n2).animate({opacity:0},600).end().eq(next2).animate({opacity:1},600,function(){
        flag=true;
      })
      n2=next2;
    })
      }
        obj6.eq(0).click(function(){
          move();
        })
       $div_li.mouseover(function(){
      var index=jQuery(this).index();
      if(flag==false){
        return;
      }
      flag=false;
          $div_li.eq(n2).addClass("slider-selected").siblings().removeClass("slider-selected");
          $box.eq(n2).animate({opacity:0},600).end().eq(index).animate({opacity:1},600,function(){
        flag=true;
      })
          n2=index;
        next2=index;
      })

}
    luobo($('.toum'),$(''),$('.slides-navigation .prev'),$('.slides-navigation .next'))
    console.log($('.toum').length)

    // 楼层跳转
function floor(floor,tiaoz,anniu,topt,bottomt,te){
var s;
var flag_0=true;
var flag_1=true;
var flag_2=true;
var floor=floor;
var tiaoz=tiaoz;
var anniu=anniu;
var topt=topt;
var bottomt=bottomt;
var te=te;
// te.css({"fontSize":"20px","marginTop":"0"});
floor.each(function(index,val){
   floor.eq(index).data("h",floor.eq(index).position().top);
})
$(window).on("scroll",function(){
 if (flag_2) {
   var obj=document.body.scrollTop?document.body:document.documentElement;
   var Top=$(obj).scrollTop();
   if (Top>=floor.eq(0).data("h")-300) {
       tiaoz.css("display","block");
 }
  else{
       tiaoz.css("display","none");
       
  }
   floor.each(function(index,val){
     if (Top>=floor.eq(index).data("h")-300) {
       floor.each(function(index1,val1){
               anniu.find(".zdhn1").eq(index1).css("color","#5e5e5e");
               anniu.find("span").eq(index1).css("color","#5e5e5e");
       })
               anniu.find(".zdhn1").eq(index).css("color","#c00");
               anniu.find("span").eq(index).css("color","#c00");
               s=index;
     }
   })
}
})
        anniu.each(function(index,val){
         anniu.eq(index).click(function(){
             flag_2=false;
             $(document.body).animate({scrollTop:floor.eq(index).data("h")},function(){
                 flag_2=true;
             })
             $(document.documentElement).animate({scrollTop:floor.eq(index).data("h")},function(){
                 flag_2=true;
             })
             s=anniu.eq(index).data("x");
         })
     anniu.eq(index).hover(function(){
               anniu.find(".zdhn1").eq(index).css("color","#c00");
               anniu.find("span").eq(index).css("color","#c00");
     },function(){
       if (index==s) {
         return;
      }
               anniu.find(".zdhn1").eq(index).css("color","#5e5e5e");
               anniu.find("span").eq(index).css("color","#5e5e5e");
               
     })
   })
     topt.hover(function(){
         topt.find("a").css("backgroundPosition","0 -222px");
     },function(){
         topt.find("a").css("backgroundPosition","-18px -222px");

     })
     // jQuery.backTop(topt,1000);
     // jQuery.backBottom(bottomt,1000);
     // bottomt.hover(function(){
     //     bottomt.find("a").css("backgroundPosition","0 -214px");
     // },function(){
     //     bottomt.find("a").css("backgroundPosition","-18px -214px");

     // })
 }
floor($(".floor"),$("#menu"),$(".menudetail .homepage li"),$(".back"))
	$(".mh").on("click",function(){
    $(".homepage").toggleClass("active")
  })
		
})