/**
 *
 */

//点击注册标签
$(document).ready(function(){
	$(".s7_1").click(function(){
		console.log("xx1");

		$(".s7_1")[0].style.background = "#fafafa";
		$(".s7_2")[0].style.background = "#c0c0c0";
		$(".s7_3")[0].style.background = "#c0c0c0";
		$(".s7_4")[0].style.background = "#c0c0c0";
		$(".s7_5")[0].style.background = "#c0c0c0";
		$(".s7_6")[0].style.background = "#c0c0c0";

		$("#page7_1")[0].style.display = "block";
		$("#page7_2")[0].style.display = "none";
		$("#page7_3")[0].style.display = "none";
		$("#page7_4")[0].style.display = "none";
		$("#page7_5")[0].style.display = "none";
		$("#page7_6")[0].style.display = "none";
	});
});