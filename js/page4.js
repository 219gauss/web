/**
 * 	页面四
 */
_page4_account1_type = document.getElementById("page4_account1_type");
_page4_account1_value = document.getElementById("page4_account1_value");
_page4_account1_lable = document.getElementById("page4_account1_lable");
_page4_account1_line_select = document.getElementById("page4_account1_line_select");
_page4_account1_extension = document.getElementById("page4_account1_extension");

_page4_account2_type = document.getElementById("page4_account2_type");
_page4_account2_value = document.getElementById("page4_account2_value");
_page4_account2_lable = document.getElementById("page4_account2_lable");
_page4_account2_line_select = document.getElementById("page4_account2_line_select");
_page4_account2_extension = document.getElementById("page4_account2_extension");

_page4_account3_type = document.getElementById("page4_account3_type");
_page4_account3_value = document.getElementById("page4_account3_value");
_page4_account3_lable = document.getElementById("page4_account3_lable");
_page4_account3_line_select = document.getElementById("page4_account3_line_select");
_page4_account3_extension = document.getElementById("page4_account3_extension");


//账号一路线选项定义
page4_account1_line1 = document.createElement("OPTION");
page4_account1_line1.value="line1";
page4_account1_line2 = document.createElement("OPTION");
page4_account1_line2.value="line2";
page4_account1_line3 = document.createElement("OPTION");
page4_account1_line3.value="line3";
page4_account1_empty = document.createElement("OPTION");
page4_account1_empty.value="empty";
page4_account1_all_contacts = document.createElement("OPTION");
page4_account1_all_contacts.value="all_contacts";

if (document.cookie.split("=")[1] == "en") {
	page4_account1_line1.innerHTML="line1";
	page4_account1_line2.innerHTML="line2";
	page4_account1_line3.innerHTML="line3";
	page4_account1_empty.innerHTML="N/A";
	page4_account1_all_contacts.innerHTML="all contacts ";
} else {
	page4_account1_line1.innerHTML="线路1";
	page4_account1_line2.innerHTML="线路2";
	page4_account1_line3.innerHTML="线路3";
	page4_account1_empty.innerHTML="空";
	page4_account1_all_contacts.innerHTML="所有联系人";
}

//账号二路线选项定义
page4_account2_line1 = document.createElement("OPTION");
page4_account2_line1.value="line1";
page4_account2_line2 = document.createElement("OPTION");
page4_account2_line2.value="line2";
page4_account2_line3 = document.createElement("OPTION");
page4_account2_line3.value="line3";
page4_account2_empty = document.createElement("OPTION");
page4_account2_empty.value="empty";
page4_account2_all_contacts = document.createElement("OPTION");
page4_account2_all_contacts.value="all_contacts";

if (document.cookie.split("=")[1] == "en") {
	page4_account2_line1.innerHTML="line1";
	page4_account2_line2.innerHTML="line2";
	page4_account2_line3.innerHTML="line3";
	page4_account2_empty.innerHTML="N/A";
	page4_account2_all_contacts.innerHTML="all contacts ";
} else {
	page4_account2_line1.innerHTML="线路1";
	page4_account2_line2.innerHTML="线路2";
	page4_account2_line3.innerHTML="线路3";
	page4_account2_empty.innerHTML="空";
	page4_account2_all_contacts.innerHTML="所有联系人";
}

//账号三路线选项定义
page4_account3_line1 = document.createElement("OPTION");
page4_account3_line1.value="line1";
page4_account3_line2 = document.createElement("OPTION");
page4_account3_line2.value="line2";
page4_account3_line3 = document.createElement("OPTION");
page4_account3_line3.value="line3";
page4_account3_empty = document.createElement("OPTION");
page4_account3_empty.value="empty";
page4_account3_all_contacts = document.createElement("OPTION");
page4_account3_all_contacts.value="all_contacts";

if (document.cookie.split("=")[1] == "en") {
	page4_account3_line1.innerHTML="line1";
	page4_account3_line2.innerHTML="line2";
	page4_account3_line3.innerHTML="line3";
	page4_account3_empty.innerHTML="N/A";
	page4_account3_all_contacts.innerHTML="all contacts ";
} else {
	page4_account3_line1.innerHTML="线路1";
	page4_account3_line2.innerHTML="线路2";
	page4_account3_line3.innerHTML="线路3";
	page4_account3_empty.innerHTML="空";
	page4_account3_all_contacts.innerHTML="所有联系人";
}

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
	page4_account_type_select();
}


function page4_account_type_select(name,value) {
	switch (name) {
	case "page4_account1_type":
		account1_value_select(value);
		break;
	case "page4_account2_type":
		console.log(name);
		account2_value_select(value);
		break;
	case "page4_account3_type":
		console.log(name);
		account3_value_select(value);
		break;
	default:
		account1_value_select("line");
		account2_value_select("line");
		account3_value_select("line");
		break;
	}
}

function account1_value_select(value) {
	switch (value) {
	case "empty"://xxxx na
		_page4_account1_value.disabled = true;
		_page4_account1_lable.disabled = true;
		_page4_account1_line_select.disabled = true;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_empty);
		_page4_account1_extension.disabled = true;
		break;
	case "line"://xvvx line
		_page4_account1_value.disabled = true;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = false;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_line1);
		_page4_account1_line_select.add(page4_account1_line2);
		_page4_account1_line_select.add(page4_account1_line3);
		page4_account1_line1.selected= true
		_page4_account1_extension.disabled = true;
		break;
	case "speed_dial"://vvvx line
	case "retrieve_park"://vvvx line
		_page4_account1_value.disabled = false;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = false;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_line1);
		_page4_account1_line_select.add(page4_account1_line2);
		_page4_account1_line_select.add(page4_account1_line3);
		page4_account1_line1.selected= true
		_page4_account1_extension.disabled = true;
		break;
	case "blf"://vvvv line
		_page4_account1_value.disabled = false;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = false;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_line1);
		_page4_account1_line_select.add(page4_account1_line2);
		_page4_account1_line_select.add(page4_account1_line3);
		page4_account1_line1.selected= true
		_page4_account1_extension.disabled = false;
		break;
	case "blf_list"://xxxx line
		_page4_account1_value.disabled = true;
		_page4_account1_lable.disabled = true;
		_page4_account1_line_select.disabled = true;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_line1);
		_page4_account1_line_select.add(page4_account1_line2);
		_page4_account1_line_select.add(page4_account1_line3);
		page4_account1_line1.selected= true
		_page4_account1_extension.disabled = true;
		break;
	case "voice_mail"://vvvx line
	case "pickup"://vvvx line
	case "group_pickup"://vvvx line
	case "call_park"://vvvx line
	case "intercom"://vvvx line
		_page4_account1_value.disabled = false;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = false;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_line1);
		_page4_account1_line_select.add(page4_account1_line2);
		_page4_account1_line_select.add(page4_account1_line3);
		page4_account1_line1.selected= true
		_page4_account1_extension.disabled = true;
		break;
	case "dtmf"://vvxx na
	case "prefix"://vvxx na
	case "xml_browser"://vvxx na
	case "conference"://vvxx na
	case "forward"://vvxx na
	case "transfer"://vvxx na
	case "url_record"://vvxx na
	case "url"://vvxx na
		_page4_account1_value.disabled = false;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = true;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_empty);
		_page4_account1_extension.disabled = true;
		break;
	case "local_group"://xvvx	all contacts
		_page4_account1_value.disabled = true;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = false;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_all_contacts);
		_page4_account1_extension.disabled = true;
		break;
	case "xml_group"://xvvx na
		_page4_account1_value.disabled = true;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = false;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_empty);
		_page4_account1_extension.disabled = true;
		break;
	case "hold"://xvxx na
	case "dnd"://xvxx na
	case "recall"://xvxx na
	case "sms"://xvxx na
	case "record"://xvxx na
		_page4_account1_value.disabled = true;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = true;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_empty);
		_page4_account1_extension.disabled = true;
		break;
	case "paging"://vvxv na
		_page4_account1_value.disabled = false;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = true;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_empty);
		_page4_account1_extension.disabled = false;
		break;
	case "group_listening"://xvxx na
	case "private_hold"://xvxx na
	case "hot_desking"://xvxx na
	case "acd"://xvxx na
	case "zero_touch"://xvxx na
	case "phone_lock"://xvxx na
	case "directory"://xvxx na
	case "paging_list"://xvxx na
		_page4_account1_value.disabled = true;
		_page4_account1_lable.disabled = false;
		_page4_account1_line_select.disabled = true;
		$("#page4_account1_line_select").empty();
		_page4_account1_line_select.add(page4_account1_empty);
		_page4_account1_extension.disabled = true;
		break;

	default:
		break;
	}
}


function account2_value_select(value) {
	switch (value) {
	case "empty"://xxxx na
		_page4_account2_value.disabled = true;
		_page4_account2_lable.disabled = true;
		_page4_account2_line_select.disabled = true;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_empty);
		_page4_account2_extension.disabled = true;
		break;
	case "line"://xvvx line
		_page4_account2_value.disabled = true;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = false;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_line1);
		_page4_account2_line_select.add(page4_account2_line2);
		_page4_account2_line_select.add(page4_account2_line3);
		page4_account2_line1.selected= true
		_page4_account2_extension.disabled = true;
		break;
	case "speed_dial"://vvvx line
	case "retrieve_park"://vvvx line
		_page4_account2_value.disabled = false;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = false;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_line1);
		_page4_account2_line_select.add(page4_account2_line2);
		_page4_account2_line_select.add(page4_account2_line3);
		page4_account2_line1.selected= true
		_page4_account2_extension.disabled = true;
		break;
	case "blf"://vvvv line
		_page4_account2_value.disabled = false;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = false;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_line1);
		_page4_account2_line_select.add(page4_account2_line2);
		_page4_account2_line_select.add(page4_account2_line3);
		page4_account2_line1.selected= true
		_page4_account2_extension.disabled = false;
		break;
	case "blf_list"://xxxx line
		_page4_account2_value.disabled = true;
		_page4_account2_lable.disabled = true;
		_page4_account2_line_select.disabled = true;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_line1);
		_page4_account2_line_select.add(page4_account2_line2);
		_page4_account2_line_select.add(page4_account2_line3);
		page4_account2_line1.selected= true
		_page4_account2_extension.disabled = true;
		break;
	case "voice_mail"://vvvx line
	case "pickup"://vvvx line
	case "group_pickup"://vvvx line
	case "call_park"://vvvx line
	case "intercom"://vvvx line
		_page4_account2_value.disabled = false;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = false;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_line1);
		_page4_account2_line_select.add(page4_account2_line2);
		_page4_account2_line_select.add(page4_account2_line3);
		page4_account2_line1.selected= true
		_page4_account2_extension.disabled = true;
		break;
	case "dtmf"://vvxx na
	case "prefix"://vvxx na
	case "xml_browser"://vvxx na
	case "conference"://vvxx na
	case "forward"://vvxx na
	case "transfer"://vvxx na
	case "url_record"://vvxx na
	case "url"://vvxx na
		_page4_account2_value.disabled = false;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = true;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_empty);
		_page4_account2_extension.disabled = true;
		break;
	case "local_group"://xvvx	all contacts
		_page4_account2_value.disabled = true;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = false;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_all_contacts);
		_page4_account2_extension.disabled = true;
		break;
	case "xml_group"://xvvx na
		_page4_account2_value.disabled = true;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = false;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_empty);
		_page4_account2_extension.disabled = true;
		break;
	case "hold"://xvxx na
	case "dnd"://xvxx na
	case "recall"://xvxx na
	case "sms"://xvxx na
	case "record"://xvxx na
		_page4_account2_value.disabled = true;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = true;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_empty);
		_page4_account2_extension.disabled = true;
		break;
	case "paging"://vvxv na
		_page4_account2_value.disabled = false;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = true;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_empty);
		_page4_account2_extension.disabled = false;
		break;
	case "group_listening"://xvxx na
	case "private_hold"://xvxx na
	case "hot_desking"://xvxx na
	case "acd"://xvxx na
	case "zero_touch"://xvxx na
	case "phone_lock"://xvxx na
	case "directory"://xvxx na
	case "paging_list"://xvxx na
		_page4_account2_value.disabled = true;
		_page4_account2_lable.disabled = false;
		_page4_account2_line_select.disabled = true;
		$("#page4_account2_line_select").empty();
		_page4_account2_line_select.add(page4_account2_empty);
		_page4_account2_extension.disabled = true;
		break;

	default:
		break;
	}
}


function account3_value_select(value) {
	switch (value) {
	case "empty"://xxxx na
		_page4_account3_value.disabled = true;
		_page4_account3_lable.disabled = true;
		_page4_account3_line_select.disabled = true;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_empty);
		_page4_account3_extension.disabled = true;
		break;
	case "line"://xvvx line
		_page4_account3_value.disabled = true;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = false;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_line1);
		_page4_account3_line_select.add(page4_account3_line2);
		_page4_account3_line_select.add(page4_account3_line3);
		page4_account3_line1.selected= true
		_page4_account3_extension.disabled = true;
		break;
	case "speed_dial"://vvvx line
	case "retrieve_park"://vvvx line
		_page4_account3_value.disabled = false;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = false;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_line1);
		_page4_account3_line_select.add(page4_account3_line2);
		_page4_account3_line_select.add(page4_account3_line3);
		page4_account3_line1.selected= true
		_page4_account3_extension.disabled = true;
		break;
	case "blf"://vvvv line
		_page4_account3_value.disabled = false;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = false;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_line1);
		_page4_account3_line_select.add(page4_account3_line2);
		_page4_account3_line_select.add(page4_account3_line3);
		page4_account3_line1.selected= true
		_page4_account3_extension.disabled = false;
		break;
	case "blf_list"://xxxx line
		_page4_account3_value.disabled = true;
		_page4_account3_lable.disabled = true;
		_page4_account3_line_select.disabled = true;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_line1);
		_page4_account3_line_select.add(page4_account3_line2);
		_page4_account3_line_select.add(page4_account3_line3);
		page4_account3_line1.selected= true
		_page4_account3_extension.disabled = true;
		break;
	case "voice_mail"://vvvx line
	case "pickup"://vvvx line
	case "group_pickup"://vvvx line
	case "call_park"://vvvx line
	case "intercom"://vvvx line
		_page4_account3_value.disabled = false;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = false;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_line1);
		_page4_account3_line_select.add(page4_account3_line2);
		_page4_account3_line_select.add(page4_account3_line3);
		page4_account3_line1.selected= true
		_page4_account3_extension.disabled = true;
		break;
	case "dtmf"://vvxx na
	case "prefix"://vvxx na
	case "xml_browser"://vvxx na
	case "conference"://vvxx na
	case "forward"://vvxx na
	case "transfer"://vvxx na
	case "url_record"://vvxx na
	case "url"://vvxx na
		_page4_account3_value.disabled = false;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = true;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_empty);
		_page4_account3_extension.disabled = true;
		break;
	case "local_group"://xvvx	all contacts
		_page4_account3_value.disabled = true;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = false;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_all_contacts);
		_page4_account3_extension.disabled = true;
		break;
	case "xml_group"://xvvx na
		_page4_account3_value.disabled = true;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = false;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_empty);
		_page4_account3_extension.disabled = true;
		break;
	case "hold"://xvxx na
	case "dnd"://xvxx na
	case "recall"://xvxx na
	case "sms"://xvxx na
	case "record"://xvxx na
		_page4_account3_value.disabled = true;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = true;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_empty);
		_page4_account3_extension.disabled = true;
		break;
	case "paging"://vvxv na
		_page4_account3_value.disabled = false;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = true;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_empty);
		_page4_account3_extension.disabled = false;
		break;
	case "group_listening"://xvxx na
	case "private_hold"://xvxx na
	case "hot_desking"://xvxx na
	case "acd"://xvxx na
	case "zero_touch"://xvxx na
	case "phone_lock"://xvxx na
	case "directory"://xvxx na
	case "paging_list"://xvxx na
		_page4_account3_value.disabled = true;
		_page4_account3_lable.disabled = false;
		_page4_account3_line_select.disabled = true;
		$("#page4_account3_line_select").empty();
		_page4_account3_line_select.add(page4_account3_empty);
		_page4_account3_extension.disabled = true;
		break;

	default:
		break;
	}
}



/*点击确定，提交数据*/
page4_submit = document.getElementById('page4_submit');
page4_submit.onclick = function(){
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

	datainit();
    var data = 'flag='+"0"
			    +'&page4_account1_type='+		_page4_account1_type.value
				+'&page4_account1_value='+		_page4_account1_value.value
				+'&page4_account1_lable='+		_page4_account1_lable.value
				+'&page4_account1_line_select='+_page4_account1_line_select.value
				+'&page4_account1_extension='+	_page4_account1_extension.value
				+'&page4_account2_type='+		_page4_account2_type.value
				+'&page4_account2_value='+		_page4_account2_value.value
				+'&page4_account2_lable='+		_page4_account2_lable.value
				+'&page4_account2_line_select='+_page4_account2_line_select.value
				+'&page4_account2_extension='+	_page4_account2_extension.value
				+'&page4_account3_type='+		_page4_account3_type.value
				+'&page4_account3_value='+		_page4_account3_value.value
				+'&page4_account3_lable='+		_page4_account3_lable.value
				+'&page4_account3_line_select='+_page4_account3_line_select.value
				+'&page4_account3_extension='+	_page4_account3_extension.value;
    var url = 'php/page4_submit.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}

