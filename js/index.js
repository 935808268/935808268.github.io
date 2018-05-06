
$(function(){
//	名片动态
	$(".js").click(function(){
		$(".wx").stop(true,false).slideToggle(1000);
	});
  //	 联系方式	    
	   $(".div_r").click (function(){
	 	console.log(1);
	 	$('#bk').fadeOut(2000);
	 }); 	       
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
	

	});
	

	
	
	
	
	
});
