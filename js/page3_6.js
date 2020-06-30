/**
 *
 */

//点击注册标签
$(document).ready(function(){
	$(".s3_6").click(function(){
		console.log("xx1");

		$(".s3_1")[0].style.background = "#c0c0c0";
		$(".s3_2")[0].style.background = "#c0c0c0";
		$(".s3_3")[0].style.background = "#c0c0c0";
		$(".s3_4")[0].style.background = "#c0c0c0";
		$(".s3_5")[0].style.background = "#c0c0c0";
		$(".s3_6")[0].style.background = "#fafafa";
		$("#page3_1")[0].style.display = "none";
		$("#page3_2")[0].style.display = "none";
		$("#page3_3")[0].style.display = "none";
		$("#page3_4")[0].style.display = "none";
		$("#page3_5")[0].style.display = "none";
		$("#page3_6")[0].style.display = "block";
	});
});