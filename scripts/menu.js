function MenuFocusElement(){
	var id_el;
	$(".ul_menu li").mouseover(function(){
		$("#"+$(this).attr("id")+" a img").attr("src", "images/arrow1.png");
		$("#"+$(this).attr("id")+" > a").css({color:"#ee602a"});
		id_el = $(this).attr("id");
	});
	
	$(".ul_menu li").mouseout(function(){
		$("#"+$(this).attr("id")+" a img").attr("src", "images/arrow2.png");
		$("#"+$(this).attr("id")+" > a").css({color:"#ffffff"});
	});
	
	$("#"+id_el).mouseout(function(){
		$("#"+id_el+" a img").attr("src", "images/arrow2.png");			
	});
}

function OnOffSmallMenu(){
	$(".btn_menu img").click(function(event){
		switch($(this).attr("src")){
			case "images/menu_off.png":
				$(this).attr("src","images/menu_on.png");
				$(".vertical_menu").css({display:"block"}).addClass("AnimationMenu");
				break;
			case "images/menu_on.png":
				$(this).attr("src","images/menu_off.png");
				$(".vertical_menu").css({display:"none"});
				break;
		}
	});
}

function SmallMenuFocusElement(){
	var id_el;
	$(".v_ul_menu li").mouseover(function(){
		$("#"+$(this).attr("id")+" a img").attr("src", "images/arrow2.png");
		$("#"+$(this).attr("id")+" > a").css({color:"#ee602a"});
		id_el = $(this).attr("id");
	});
	
	$(".v_ul_menu li").mouseout(function(){
		$("#"+$(this).attr("id")+" a img").attr("src", "images/arrow1.png");
		$("#"+$(this).attr("id")+" > a").css({color:"#ffffff"});		
	});
	
	$("#"+id_el).mouseout(function(){
		$("#"+id_el+" a img").attr("src", "images/arrow1.png");			
	});
}

function FocusSocialNetwork(){
	$("#social_footer img").hover(
		function(event){
			switch($(this).attr("id")){
				case "facebook":
					$(event.target).attr("src", "images/facebook-logo.png");
					break;
				case "instagram":
					$(event.target).attr("src", "images/instagram-logo.png");
					break;
				case "youtube":
					$(event.target).attr("src", "images/youtube-logo.png");
					break;
			}	
		},
		function(){
			switch($(this).attr("id")){
				case "facebook":
					$(event.target).attr("src", "images/facebook-logo_f.png");
					break;
				case "instagram":
					$(event.target).attr("src", "images/instagram-logo_f.png");
					break;
				case "youtube":
					$(event.target).attr("src", "images/youtube-logo_f.png");
					break;
			}
		}
	);
}


