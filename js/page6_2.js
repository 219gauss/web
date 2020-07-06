/**
 *
 */

//点击注册标签
$(document).ready(function(){
	$(".s6_2").click(function(){
		console.log("xx1");

		$(".s6_1")[0].style.background = "#c0c0c0";
		$(".s6_2")[0].style.background = "#fafafa";
		$(".s6_3")[0].style.background = "#c0c0c0";
		$(".s6_4")[0].style.background = "#c0c0c0";
		$(".s6_5")[0].style.background = "#c0c0c0";
		$(".s6_6")[0].style.background = "#c0c0c0";
		$(".s6_7")[0].style.background = "#c0c0c0";
		$(".s6_8")[0].style.background = "#c0c0c0";
		$(".s6_9")[0].style.background = "#c0c0c0";
		$(".s6_10")[0].style.background = "#c0c0c0";
		$(".s6_11")[0].style.background = "#c0c0c0";
		$(".s6_12")[0].style.background = "#c0c0c0";
		$(".s6_13")[0].style.background = "#c0c0c0";
		$(".s6_14")[0].style.background = "#c0c0c0";
		$(".s6_15")[0].style.background = "#c0c0c0";

		$("#page6_1")[0].style.display = "none";
		$("#page6_2")[0].style.display = "block";
		$("#page6_3")[0].style.display = "none";
		$("#page6_4")[0].style.display = "none";
		$("#page6_5")[0].style.display = "none";
		$("#page6_6")[0].style.display = "none";
		$("#page6_7")[0].style.display = "none";
		$("#page6_8")[0].style.display = "none";
		$("#page6_9")[0].style.display = "none";
		$("#page6_10")[0].style.display = "none";
		$("#page6_11")[0].style.display = "none";
		$("#page6_12")[0].style.display = "none";
		$("#page6_13")[0].style.display = "none";
		$("#page6_14")[0].style.display = "none";
		$("#page6_15")[0].style.display = "none";
	});
});


$(document).ready(function(){
	$("#page6_2_fixed_type_data").click(function(){
		console.log("xx1");

		$(".page6_2_fixed_type_1")[0].style.display = "none";
		$(".page6_2_fixed_type_1")[1].style.display = "none";

		$(".page6_2_fixed_type_2")[0].style.display = "block";
		$(".page6_2_fixed_type_2")[1].style.display = "block";
	});
});
$(document).ready(function(){
	$("#page6_2_fixed_type_week").click(function(){
		console.log("xx1");

		$(".page6_2_fixed_type_1")[0].style.display = "block";
		$(".page6_2_fixed_type_1")[1].style.display = "block";

		$(".page6_2_fixed_type_2")[0].style.display = "none";
		$(".page6_2_fixed_type_2")[1].style.display = "none";
	});
});


$(document).ready(function(){
	$("#page6_2_daylight_saving_time_auto").click(function(){
		console.log("xx1");

		$(".content_six_2 tr").eq(5).show();
		$(".content_six_2 tr").eq(6).show();
		$(".content_six_2 tr").eq(7).show();
		$(".content_six_2 tr").eq(8).show();
		$(".content_six_2 tr").eq(9).show();
	});
});
$(document).ready(function(){
	$("#page6_2_daylight_saving_time_enable").click(function(){
		console.log("xx1");

		$(".content_six_2 tr").eq(5).hide();
		$(".content_six_2 tr").eq(6).show();
		$(".content_six_2 tr").eq(7).show();
		$(".content_six_2 tr").eq(8).show();
		$(".content_six_2 tr").eq(9).show();
	});
});
$(document).ready(function(){
	$("#page6_2_daylight_saving_time_disable").click(function(){
		console.log("xx1");

		$(".content_six_2 tr").eq(5).hide();
		$(".content_six_2 tr").eq(6).hide();
		$(".content_six_2 tr").eq(7).hide();
		$(".content_six_2 tr").eq(8).hide();
		$(".content_six_2 tr").eq(9).hide();
	});
});

$(document).ready(function(){
	$("#page6_2_manual_time").change(function(){
		console.log($(this).val());
		if ($(this).val() == "1") {
			$(".content_six_2 tr").eq(3).hide();
			$(".content_six_2 tr").eq(4).hide();
			$(".content_six_2 tr").eq(5).hide();
			$(".content_six_2 tr").eq(6).hide();
			$(".content_six_2 tr").eq(7).hide();
			$(".content_six_2 tr").eq(8).hide();
			$(".content_six_2 tr").eq(9).hide();
			$(".content_six_2 tr").eq(10).hide();
			$(".content_six_2 tr").eq(11).hide();
			$(".content_six_2 tr").eq(12).hide();
			$(".content_six_2 tr").eq(13).hide();
			$(".content_six_2 tr").eq(14).show();
			$(".content_six_2 tr").eq(15).show();
		} else {
			$(".content_six_2 tr").eq(3).show();
			$(".content_six_2 tr").eq(4).show();
			$(".content_six_2 tr").eq(5).show();
			$(".content_six_2 tr").eq(6).show();
			$(".content_six_2 tr").eq(7).show();
			$(".content_six_2 tr").eq(8).show();
			$(".content_six_2 tr").eq(9).show();
			$(".content_six_2 tr").eq(10).show();
			$(".content_six_2 tr").eq(11).show();
			$(".content_six_2 tr").eq(12).show();
			$(".content_six_2 tr").eq(13).show();
			$(".content_six_2 tr").eq(14).hide();
			$(".content_six_2 tr").eq(15).hide();
		}

	});
});