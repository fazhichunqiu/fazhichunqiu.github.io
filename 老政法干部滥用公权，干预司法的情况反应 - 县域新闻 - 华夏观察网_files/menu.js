$(".ListMainMenu dd").hide();
$(".ListMainMenu dl").hover(								  
	function(){
		$(this).children("dd").show(200);
		//$(this).children("dd").css({"opacity":"0.9","filter":"alpha(Opacity=90)"});
		$(this).addClass("over");	
		var cknums = $(this).index()+1;
		$(".ListMainMenu dl:eq("+cknums+")").addClass("no");
	},
	function(){
		$(this).children("dd").hide(200);
		$(this).removeClass("over");
		var cknums = $(this).index()+1;
		$(".ListMainMenu dl:eq("+cknums+")").removeClass("no");
	}
);
$(".ListMainMenu dl dd ul li").hover(
	function(){$(this).addClass("over1");	},
	function(){$(this).removeClass("over1");	}
);
$(".ListMainMenu dl:first").addClass("no");