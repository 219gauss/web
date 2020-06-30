/**
 *
 */

//点击注册标签
$(document).ready(function(){
	$(".s4_2").click(function(){
		console.log("xx1");

		$(".s4_1")[0].style.background = "#c0c0c0";
		$(".s4_2")[0].style.background = "#fafafa";
		$("#page4_1")[0].style.display = "none";
		$("#page4_2")[0].style.display = "block";
	});
});