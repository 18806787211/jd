
$(window).load(function(){
$('#img_load').hide();
	
var json={};
//头
$('.header_left').mouseenter(function(){
	$(this).find('b').removeClass('icon-angle-down');
	$(this).find('b').addClass(' icon-angle-up');
	$('.header_a').css({backgroundColor:"#fff",border:"solid #C0C0C0",borderWidth:"0 1px",paddingLeft:'3px'});
	$('.header_left_region').show();
});
$('.header_left').mouseleave(function(){
	$(this).find('b').removeClass('icon-angle-up');
	$(this).find('b').addClass('icon-angle-down');
	$('.header_a').css({backgroundColor:"#f1f1f1",border:'0 none',paddingLeft: '4px'});
	$('.header_left_region').hide();
});
$('.header_region_list li').click(function(){
	var aVal=$(this).children('a').text();
	$(this).children('a').addClass('header_a_red').parent('li').siblings().children('a').removeClass('header_a_red');
	$('.header_text').text(aVal);
	$('.header_left_region').hide();
});
//nav
$('.header_nav li').mouseenter(function(){
	$(this).find('i').addClass("icon-angle-up").removeClass('icon-angle-down');
	$(this).find(".nav_iphone").css({background:"url(images/icon_iphonered.png) no-repeat 0 0"});
	//backgroundImage:"url(images/icon_iphonered.png)",backgroundPositon:'0 0',backgroundRepeat:'no-repeat'
	if($(this).find('.boxJd').hasClass('boxJd'))
	{
		$(this).find('.boxJd').show();
		$(this).children('.header_nav_list1').css({background:'#fff',border:'#b1b1b1 solid',borderWidth:'0 1px'});
	}
	
	
	
});
$('.header_nav li').mouseleave(function(){
	$(this).find('i').addClass("icon-angle-down").removeClass('icon-angle-up');
	$(this).find(".nav_iphone").css({background:"url(images/icon_iphone.png) no-repeat 0 0"});
	$(this).find('.boxJd').hide();
	$(this).children('.header_nav_list1').css({background:'0 none',border:'#f1f1f1 solid',borderWidth:'0 1px'});
});

//我的购物车
$('.nav_shopping').mouseenter(function(){
	$(this).css({background:'#fff'});
	$('.nav_shopping_box').show();
});
$('.nav_shopping').mouseleave(function(){
	$(this).css({background:'#fbfbfb'});
	$('.nav_shopping_box').hide();
});

// 点击输入框文字消失离开又出现
$("textarea,input[focucmsg]").each(function() {
	if ($(this).val() == '') {
		$(this).val($(this).attr("focucmsg"));
	}
	$(this).focus(function() {
		if ($(this).val() == $(this).attr("focucmsg")) {
			$(this).val('').css("color","#000");;
			
		}
	});
	$(this).blur(function() {
		if (!$(this).val()) {
			$(this).val($(this).attr("focucmsg"));			
			$(this).css("color","#cfcfcf");
		}
	});
});


//主体
//flash
function flash(nowPos,oldPos){
	$(".main_btn span").eq(nowPos).addClass("main_red").siblings(".main_red").removeClass('main_red');
	$(".main_left1 li").eq(nowPos).stop().fadeIn();
	$(".main_left1 li").eq(oldPos).stop().fadeOut();
}

$('.main_btn span').mouseenter(function(){
	
	if($(this).hasClass('main_red'))
		return;
	var nowPos,oldPos,lastPos;
	oldPos=$('.main_red').index();
	nowPos=$(this).index();
	$(this).addClass('main_red').siblings().removeClass('main_red');
	$('.main_left1 li').eq(nowPos).stop().fadeIn();
	$('.main_left1 li').eq(oldPos).stop().fadeOut();
});


$(".main_right_arr").click(function(){
	var nowPos,oldPos,lastPos;
	oldPos=$(".main_red").index();
	lastPos=$(".main_left1 li").length-1;
	nowPos=oldPos==lastPos?0:oldPos+1;
	flash(nowPos,oldPos);
	
});
$(".main_left_arr").click(function(){
	var nowPos,oldPos,lastPos;
	oldPos=$(".main_red").index();
	lastPos=$(".main_left1 li").length-1;
	nowPos=oldPos==0?lastPos:oldPos-1;
	flash(nowPos,oldPos);
});
$('.main_left').mouseenter(function(){
	$(".main_left_arr,.main_right_arr").show();
	
	clearInterval(json.AutoDo);
});
$('.main_left').mouseleave(function(){
	$(".main_left_arr,.main_right_arr").hide();
	json.AutoDo=window.setInterval(function(){
 		$(".main_right_arr").click();
	 },5000);
});
 json.AutoDo=window.setInterval(function(){
 	$(".main_right_arr").click();
 },5000);
//主体左边导航
$('.mian_nav_list').mouseenter(function(){
	var pos=$(this).index()-1;	
	$('.mian_nav_box').show();
	$('.mian_nav_box dd').eq(pos).show().siblings().hide();
	
});



/*footer-flash*/
$('.main_flash_right').mouseenter(function(){
	$('.main_flash_arrL,.main_flash_arrR').show();
});
$('.main_flash_right').mouseleave(function(){
	$('.main_flash_arrL,.main_flash_arrR').hide();
});

$('.main_flash_arrR').click(function(){
	var ulwidth=$('.main_flash li:first').width();
	$('.main_flash li:last').prependTo(".main_flash").css({marginLeft:-ulwidth+"px"});
	$('.main_flash li:first').stop().animate({marginLeft:"0px"},500);
});
$('.main_flash_arrL').click(function(){
	var ulwidth=$('.main_flash li:first').width();
	$('.main_flash li:first').stop().animate({marginLeft:-ulwidth+"px"},500,function(){
		$(this).appendTo('.main_flash').css({marginLeft:"0px"});
	});
	
});

/*猜你喜欢*/
$('.like').mouseenter(function(){
	$('.like_arr').animate({'left':'0'},0,function(){				
		$(this).animate({'left':'848px'},1000,function(){});
	});
});

/*服装鞋包*/
//1F
$('.clothing .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .clothing').eq(pos).show().siblings().hide();
	
});
//2F
$('.nurse .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .nurse').eq(pos).show().siblings().hide();
});
//3F
$('.iphone .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .iphone').eq(pos).show().siblings().hide();
});
//4F
$('.household .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .household').eq(pos).show().siblings().hide();
});
//5F
$('.Computer .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .Computer').eq(pos).show().siblings().hide();
});
//6F
$('.motion .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .motion').eq(pos).show().siblings().hide();
});
//7F
$('.Home .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .Home').eq(pos).show().siblings().hide();
});
//8F
$('.Toys .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .Toys').eq(pos).show().siblings().hide();
});
//9F
$('.food .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .food').eq(pos).show().siblings().hide();
});
//10F
$('.books .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .books').eq(pos).show().siblings().hide();
});
//11F
$('.car .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .car').eq(pos).show().siblings().hide();
});
//12F
$('.severs .clothing01').mouseenter(function(){
	var pos=$(this).index();
	$(this).addClass('jd_clothing_right_arr').siblings().removeClass('jd_clothing_right_arr');
	$('.jd_clothing_mright .severs').eq(pos).show().siblings().hide();
});





/*服装鞋包-flash*/

 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3500,
        loop : true,
        autoplayDisableOnInteraction: false
});




$('.jd_cmd_flash').mouseenter(function(){
	$(this).children('.jd_cmd_arrL').show();
	$(this).children('.jd_cmd_arrR').show();
});
$('.jd_cmd_flash').mouseleave(function(){
	$(this).children('.jd_cmd_arrL').hide();
	$(this).children('.jd_cmd_arrR').hide();
});





/*左边导航（1F-12F）*/
$(window).scroll(function(){	
	var scrollH=$(this).scrollTop();
	var jdLifeH=$('.jd_life').offset().top;//获取品质生活到头部距离
	json.jdClothingH=$('#clothing').offset().top-200;//获取服装鞋包到头部距离
	json.jdNurseH=$('#nurse').offset().top-500;//获取服装鞋包到头部距离	
	json.jdIphoneH=$('#iphone').offset().top-500;//获取服装鞋包到头部距离
	json.jdHouseholdH=$('#household').offset().top-500;//获取服装鞋包到头部距离
	json.jdComputerH=$('#Computer').offset().top-500;//获取服装鞋包到头部距离
	json.jdMotionH=$('#motion').offset().top-500;//获取服装鞋包到头部距离
	json.jdHomeH=$('#Home').offset().top-500;//获取服装鞋包到头部距离
	json.jdToysH=$('#Toys').offset().top-500;//获取服装鞋包到头部距离
	json.jdFoodH=$('#food').offset().top-500;//获取服装鞋包到头部距离
	json.jdBooksH=$('#books').offset().top-500;//获取服装鞋包到头部距离
	json.jdCarH=$('#car').offset().top-500;//获取服装鞋包到头部距离
	json.jdSeversH=$('#severs').offset().top-500;//获取服装鞋包到头部距离
	
	
	if(scrollH>jdLifeH)
	{
		$('#clothing').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
		$('.Lnav').show();
		$('.Lnav a').eq(0).children('i').show().css({'color':'red'});	
		$('.Lnav a').eq(0).children('span').hide();		
		$('.Lnav a').eq(0).siblings().children('span').show();
		$('.Lnav a').eq(0).siblings().children('i').hide();
		$('#nurse').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
		if(scrollH>=json.jdNurseH)
		{
			
			$('#nurse').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
			$('.Lnav a').eq(1).children('i').show().css({'color':'red'});
			$('.Lnav a').eq(1).children('span').hide();
			$('.Lnav a').eq(1).siblings().children('span').show();
			$('.Lnav a').eq(1).siblings().children('i').hide();
			
			$('#iphone').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
			
			
			if(scrollH>=json.jdIphoneH)
			{
				
				
				$('#iphone').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
				$('.Lnav a').eq(2).children('i').show().css({'color':'red'});
				$('.Lnav a').eq(2).children('span').hide();
				$('.Lnav a').eq(2).siblings().children('span').show();
				$('.Lnav a').eq(2).siblings().children('i').hide();
				
				$('#household').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
				if(scrollH>=json.jdHouseholdH)
				{
					$('#household').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
					$('.Lnav a').eq(3).children('i').show().css({'color':'red'});
					$('.Lnav a').eq(3).children('span').hide();
					$('.Lnav a').eq(3).siblings().children('span').show();
					$('.Lnav a').eq(3).siblings().children('i').hide();
					$('#Computer').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
					if(scrollH>=json.jdComputerH)
					{
						$('#Computer').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
						$('.Lnav a').eq(4).children('i').show().css({'color':'red'});
						$('.Lnav a').eq(4).children('span').hide();
						$('.Lnav a').eq(4).siblings().children('span').show();
						$('.Lnav a').eq(4).siblings().children('i').hide();
						$('#motion').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
					}
					if(scrollH>=json.jdMotionH)
					{
						$('#motion').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
						$('.Lnav a').eq(5).children('i').show().css({'color':'red'});
						$('.Lnav a').eq(5).children('span').hide();
						$('.Lnav a').eq(5).siblings().children('span').show();
						$('.Lnav a').eq(5).siblings().children('i').hide();
						$('#Home').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
					}
					if(scrollH>=json.jdHomeH)
					{
						$('#Home').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
						$('.Lnav a').eq(6).children('i').show().css({'color':'red'});
						$('.Lnav a').eq(6).children('span').hide();
						$('.Lnav a').eq(6).siblings().children('span').show();
						$('.Lnav a').eq(6).siblings().children('i').hide();
						$('#Toys').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
					}
					if(scrollH>=json.jdToysH)
					{
						$('#Toys').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
						$('.Lnav a').eq(7).children('i').show().css({'color':'red'});
						$('.Lnav a').eq(7).children('span').hide();
						$('.Lnav a').eq(7).siblings().children('span').show();
						$('.Lnav a').eq(7).siblings().children('i').hide();
						$('#food').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
					}
					if(scrollH>=json.jdFoodH)
					{
						$('#food').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
						$('.Lnav a').eq(8).children('i').show().css({'color':'red'});
						$('.Lnav a').eq(8).children('span').hide();
						$('.Lnav a').eq(8).siblings().children('span').show();
						$('.Lnav a').eq(8).siblings().children('i').hide();
						$('#books').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
					}
					if(scrollH>=json.jdBooksH)
					{
						$('#books').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
						$('.Lnav a').eq(9).children('i').show().css({'color':'red'});
						$('.Lnav a').eq(9).children('span').hide();
						$('.Lnav a').eq(9).siblings().children('span').show();
						$('.Lnav a').eq(9).siblings().children('i').hide();
						$('#car').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
					}
					if(scrollH>=json.jdCarH)
					{
						$('#car').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
						$('.Lnav a').eq(10).children('i').show().css({'color':'red'});
						$('.Lnav a').eq(10).children('span').hide();
						$('.Lnav a').eq(10).siblings().children('span').show();
						$('.Lnav a').eq(10).siblings().children('i').hide();
						$('#severs').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
					}
					if(scrollH>=json.jdSeversH)
					{
						$('.Lnav a').eq(11).siblings().children('span').show();
						$('.Lnav a').eq(11).siblings().children('i').hide();
						$('#severs').children('.jd_clothing_left').children('i').css({'backgroundPosition':'0 0'});
						$('.Lnav a').eq(11).children('i').show().css({'color':'red'});
						$('.Lnav a').eq(11).children('span').hide();
						
					}
					
					
				}
				
				
			}
			
			
		}
		
		
	}
	else
	{
		$('.jd_clothing_left').children('i').css({'backgroundPosition':'0 -35px'});
		$('.Lnav').hide();
		$('.Lnav a').children('span').show();
		$('.Lnav a').children('i').hide();
	}
	
		

	
	
	
});
$('.Lnav a').click(function(){
	var pos=$(this).index();
	$(this).children('i').show();
	$(this).siblings('a').children('i').hide();
	$(this).siblings('a').children('span').show();
	$(this).children('span').hide();
	
	switch(pos)
	{
		case 0:
			$("body,html").animate({"scrollTop":json.jdClothingH},300);
			break;
		case 1:
			$("body,html").animate({"scrollTop":json.jdNurseH},300);
			break;
		case 2:
			$("body,html").animate({"scrollTop":json.jdIphoneH},300);
			break;
		case 3:
			$("body,html").animate({"scrollTop":json.jdHouseholdH},300);
			break;	
		case 4:
			$("body,html").animate({"scrollTop":json.jdComputerH},300);
			break;		
		case 5:
			$("body,html").animate({"scrollTop":json.jdMotionH},300);
			break;		
		case 6:
			$("body,html").animate({"scrollTop":json.jdHomeH},300);
			break;	
		case 7:
			$("body,html").animate({"scrollTop":json.jdToysH},300);	
			break;	
		case 8:
			$("body,html").animate({"scrollTop":json.jdFoodH},300);	
			break;	
		case 9:
			$("body,html").animate({"scrollTop":json.jdBooksH},300);	
			break;	
		case 10:
			$("body,html").animate({"scrollTop":json.jdCarH},300);	
			break;	
		case 11:
			$("body,html").animate({"scrollTop":json.jdSeversH},300);	
			break;	
	}
	
	
	
	/*if(pos==0)
	{
		$("body,html").animate({"scrollTop":json.jdClothingH},300);
	}
	if(pos==1)
	{
		$("body,html").animate({"scrollTop":json.jdNurseH},300);		
	}
	if(pos==2)
	{
		$("body,html").animate({"scrollTop":json.jdIphoneH},300);		
	}
	if(pos==3)
	{
		$("body,html").animate({"scrollTop":json.jdHouseholdH},300);		
	}
	if(pos==4)
	{
		$("body,html").animate({"scrollTop":json.jdComputerH},300);		
	}
	if(pos==5)
	{
		$("body,html").animate({"scrollTop":json.jdMotionH},300);		
	}
	if(pos==6)
	{
		$("body,html").animate({"scrollTop":json.jdHomeH},300);		
	}
	if(pos==7)
	{
		$("body,html").animate({"scrollTop":json.jdToysH},300);		
	}
	if(pos==8)
	{
		$("body,html").animate({"scrollTop":json.jdFoodH},300);		
	}
	if(pos==9)
	{
		$("body,html").animate({"scrollTop":json.jdBooksH},300);		
	}
	if(pos==10)
	{
		$("body,html").animate({"scrollTop":json.jdCarH},300);		
	}
	if(pos==11)
	{
		$("body,html").animate({"scrollTop":json.jdSeversH},300);		
	}
	*/
	
	
	
	
});



//底部幻灯片

 var swiper = new Swiper('.jd_dayday_03', {
    pagination: '.swiper-pagination1',     
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    loop : true,
    direction : 'vertical',    
    autoplayDisableOnInteraction: false//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
});
/*右边导航*/
$('.jd-nav a').mouseenter(function(){
	$(this).children('i').css({'left':'-60px'});
	$(this).children('b').hide();
});
$('.jd-nav a').mouseleave(function(){
	$(this).children('i').css({'left':'33px'});
	$(this).children('b').show();
});
$('.top a').mouseenter(function(){
	$(this).children('i').css({'left':'-60px'});
	
});
$('.top a').mouseleave(function(){
	$(this).children('i').css({'left':'33px'});
	
});

//渐变
$('.jd_clothing_01').mouseenter(function(){
	$(this).children('.jd_bg').stop().animate({'left':'350px'},500,function(){	
	});
	
});

$('.jd_clothing_01').mouseleave(function(){
	$(this).children('.jd_bg').stop().css({'left':'-150px'});
});

});

function leaver(){
	$('.mian_nav_box').hide();
	$('.mian_nav_box dd').hide();
}






