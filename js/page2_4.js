/**
 *
 */

//点击高级标签
$(document).ready(function(){
	$(".s4").click(function(){
		console.log("xx4");

		$(".s1")[0].style.background = "#c0c0c0";
		$(".s2")[0].style.background = "#c0c0c0";
		$(".s3")[0].style.background = "#c0c0c0";
		$(".s4")[0].style.background = "#fafafa";
		$("#page2_1")[0].style.display = "none";
		$("#page2_2")[0].style.display = "none";
		$("#page2_3")[0].style.display = "none";
		$("#page2_4")[0].style.display = "block";
	});
});