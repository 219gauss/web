/**
 *
 */

//点击编解码标签
$(document).ready(function(){
	$(".s3").click(function(){
		console.log("xx3");

		$(".s1")[0].style.background = "#c0c0c0";
		$(".s2")[0].style.background = "#c0c0c0";
		$(".s3")[0].style.background = "#fafafa";
		$(".s4")[0].style.background = "#c0c0c0";
		$(".s5")[0].style.background = "#c0c0c0";
		$("#page2_1")[0].style.display = "none";
		$("#page2_2")[0].style.display = "none";
		$("#page2_3")[0].style.display = "block";
		$("#page2_4")[0].style.display = "none";
		$("#page2_5")[0].style.display = "none";
	});
});