/**
 *
 */

_page8_user_type = document.getElementById("page8_user_type");
_page8_old_password = document.getElementById("page8_old_password");
_page8_new_password = document.getElementById("page8_new_password");
_page8_confirm_password = document.getElementById("page8_confirm_password");

//点击标签八
function tabeight() {
	if(content_8.style.display == "none" || content_8.style.display == ""){
		content_1.style.display = "none";
		content_2.style.display = "none";
		content_3.style.display = "none";
		content_4.style.display = "none";
		content_5.style.display = "none";
		content_6.style.display = "none";
		content_7.style.display = "none";
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
		tab_7.style.background = "";
		tab_7.style.color = "";
		tab_8.style.background = "#fafafa";
		tab_8.style.color = "#000000";
	}
}

function clean_data() {
	_page8_old_password.value = "";
	_page8_new_password.value = "";
	_page8_confirm_password.value = "";
}

function page8_user_type_select(value){
	switch (value){
		case "admin":
			clean_data();
			_page8_old_password.disabled = false;
			break;
		case "user":
			clean_data();
			_page8_old_password.disabled = true
			break;
		default:
			break;
	}

}


/*点击确定，提交数据*/
page8_submit = document.getElementById('page8_submit');
page8_submit.onclick = function(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	if(json.flag == "1"){
        		alert("保存成功！");
        	}else if(json.flag == "0"){
        		alert("保存失败！");
        	}
        	//console.log(xhr.responseText);
        }
    }
    var data = 'flag='+"0"
    			+'&page8_user_type='+_page8_user_type.value
    			+'&page8_old_password='+_page8_old_password.value
    			+'&page8_new_password='+_page8_new_password.value
    			+'&page8_confirm_password='+_page8_confirm_password.value;
    var url = 'php/page8_submit.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}