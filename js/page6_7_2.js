/**
 *
 */

//点击注册标签
$(document).ready(function(){
	$(".s6_7_2").click(function(){
		console.log("xx1");

		$(".s6_7_1")[0].style.background = "#999999";
		$(".s6_7_2")[0].style.background = "#fafafa";
		$(".s6_7_3")[0].style.background = "#999999";
		$(".s6_7_4")[0].style.background = "#999999";

		$("#page6_7_1")[0].style.display = "none";
		$("#page6_7_2")[0].style.display = "block";
		$("#page6_7_3")[0].style.display = "none";
		$("#page6_7_4")[0].style.display = "none";

	});
});