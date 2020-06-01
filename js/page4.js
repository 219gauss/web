/**
 * 	页面四
 */

//点击标签三
function tabfour() {
	if(content_4.style.display == "none" || content_4.style.display == ""){
		content_1.style.display = "none";
		content_2.style.display = "none";
		content_3.style.display = "none";
		content_4.style.display = "block";
	}

	if(tab_4){
		tab_1.style.background = "";
		tab_1.style.color = "";
		tab_2.style.background = "";
		tab_2.style.color = "";
		tab_3.style.background = "";
		tab_3.style.color = "";
		tab_4.style.background = "#fafafa";
		tab_4.style.color = "#000000";
	}
}