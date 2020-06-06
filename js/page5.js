/**
 *
 */


//点击标签五
function tabfive() {
	if(content_5.style.display == "none" || content_5.style.display == ""){
		content_1.style.display = "none";
		content_2.style.display = "none";
		content_3.style.display = "none";
		content_4.style.display = "none";
		content_5.style.display = "block";
	}

	if(tab_5){
		tab_1.style.background = "";
		tab_1.style.color = "";
		tab_2.style.background = "";
		tab_2.style.color = "";
		tab_3.style.background = "";
		tab_3.style.color = "";
		tab_4.style.background = "";
		tab_4.style.color = "";
		tab_5.style.background = "#fafafa";
		tab_5.style.color = "#000000";
	}
}