/**
 *
 */

_page8_old_password = document.getElementById("page8_old_password");

//点击标签八
function tabeight() {
	if(content_8.style.display == "none" || content_8.style.display == ""){
		content_1.style.display = "none";
		content_2.style.display = "none";
		content_3.style.display = "none";
		content_4.style.display = "none";
		content_5.style.display = "none";
		content_6.style.display = "none";
		content_8.style.display = "block";
	}

	if(tab_8){
		tab_1.style.background = "";
		tab_1.style.color = "";
		tab_2.style.background = "";
		tab_2.style.color = "";
		tab_3.style.background = "";
		tab_3.style.color = "";
		tab_4.style.background = "";
		tab_4.style.color = "";
		tab_5.style.background = "";
		tab_5.style.color = "";
		tab_6.style.background = "";
		tab_6.style.color = "";
		tab_8.style.background = "#fafafa";
		tab_8.style.color = "#000000";
	}
}

function page8_user_type_select(value){
	switch (value){
		case "admin":
			_page8_old_password.disabled = false;
			break;
		case "user":
			_page8_old_password.disabled = true
			break;
		default:
			break;
	}

}