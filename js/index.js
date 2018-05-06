
$(function(){
//	顶部动态
	var search =$('.search');	
	$(window).scroll(function(){
		var scrolltop = $(document).scrollTop();
		var seaheigth= search.height(); 
	    if(scrolltop>seaheigth){	    	
	    	search.fadeOut(1000);
	    }else{
	    	search.fadeIn();
	    };
	 $(".div_r").click (function(){
	 	console.log(1);
	 	$('#bk').fadeOut(2000);
	 });
//	 联系方式
	$(".js").click(function(){
		$(".wx").stop().slideToggle(1000);
	})
  
	    
	    
	    
	    
	    
	})
	

	
	
	
	
	
});
