/**
 *
 */

//点击注册标签
$(document).ready(function(){
	$(".s1").click(function(){
		console.log("xx1");

		$(".s1")[0].style.background = "#fafafa";
		$(".s2")[0].style.background = "#c0c0c0";
		$(".s3")[0].style.background = "#c0c0c0";
		$(".s4")[0].style.background = "#c0c0c0";
		$("#page2_1")[0].style.display = "block";
		$("#page2_2")[0].style.display = "none";
		$("#page2_3")[0].style.display = "none";
		$("#page2_4")[0].style.display = "none";
	});
});