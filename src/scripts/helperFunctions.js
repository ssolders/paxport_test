$(document).ready(function(){
	
	
});

function toggleActive(obj){
	
	if($(obj).hasClass("airPlaneSeat_active")){
		$(obj).removeClass("airPlaneSeat_active");
	}
	else{
		$(obj).addClass("airPlaneSeat_active");
	}
	
	
}

function displayCart(){
	var cartElement = $("#topPane_basket");
	if($(cartElement).hasClass("visible")){
		$(cartElement).removeClass("visible");
	}
	else{
		$(cartElement).addClass("visible");
	}
}

function resetStuff(){
	$("#sucessAlert").fadeIn(100);
	
	$("#sucessAlert").animate({
		top: "10px"
	});
	
	var cartElement = $("#topPane_basket");
	$(cartElement).removeClass("visible");
	$(".topPane_basket_item").remove();
	
	$(".airPlaneSeat_active").removeClass("airPlaneSeat_active");
	
	setTimeout(function(){
		$("#sucessAlert").fadeOut(100);
	}, 5000);
}