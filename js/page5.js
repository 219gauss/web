/**
 *
 */

_page5_forward_emergency = document.getElementById("page5_forward_emergency");
_page5_forward_authorized_numbers = document.getElementById("page5_forward_authorized_numbers");
_page5_forward_mode_phone = document.getElementById("page5_forward_mode_phone");
_page5_forward_mode_custom = document.getElementById("page5_forward_mode_custom");
_page5_forward_account = document.getElementById("page5_forward_account");
_page5_always_forward_on = document.getElementById("page5_always_forward_on");
_page5_always_forward_off = document.getElementById("page5_always_forward_off");
_page5_always_forward_target = document.getElementById("page5_always_forward_target");
_page5_always_forward_on_code = document.getElementById("page5_always_forward_on_code");
_page5_always_forward_off_code = document.getElementById("page5_always_forward_off_code");
_page5_busy_forward_on = document.getElementById("page5_busy_forward_on");
_page5_busy_forward_off = document.getElementById("page5_busy_forward_off");
_page5_busy_forward_target = document.getElementById("page5_busy_forward_target");
_page5_busy_forward_on_code = document.getElementById("page5_busy_forward_on_code");
_page5_busy_forward_off_code = document.getElementById("page5_busy_forward_off_code");
_page5_no_answer_forward_on = document.getElementById("page5_no_answer_forward_on");
_page5_no_answer_forward_off = document.getElementById("page5_no_answer_forward_off");
_page5_ring_time = document.getElementById("page5_ring_time");
_page5_no_answer_forward_target = document.getElementById("page5_no_answer_forward_target");
_page5_no_answer_forward_on_code = document.getElementById("page5_no_answer_forward_on_code");
_page5_no_answer_forward_off_code = document.getElementById("page5_no_answer_forward_off_code");
_page5_dnd_emergency = document.getElementById("page5_dnd_emergency");
_page5_dnd_authorized_numbers = document.getElementById("page5_dnd_authorized_numbers");
_page5_dnd_mode_phone = document.getElementById("page5_dnd_mode_phone");
_page5_dnd_mode_custom = document.getElementById("page5_dnd_mode_custom");
_page5_dnd_account = document.getElementById("page5_dnd_account");
_page5_dnd_status_on = document.getElementById("page5_dnd_status_on");
_page5_dnd_status_off = document.getElementById("page5_dnd_status_off");
_page5_dnd_on_code = document.getElementById("page5_dnd_on_code");
_page5_dnd_off_code = document.getElementById("page5_dnd_off_code");



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

	$.get("php/page5.php",function(data,status){
		if (status == "success") {
			var json = JSON.parse(data);
			console.log(json.data);
			page5_display_data(json.data);
		}
	});
}

function page5_display_data(data) {
	console.log(data);
	_page5_forward_emergency.options[data.forward_emergency].selected = true;
	_page5_forward_authorized_numbers.value = data.forward_authorized_numbers;
	data.forward_mode == "phone"?forward_mode_phone_click():forward_mode_custom_click();
	$("#page5_forward_account").empty();
	for (var i = data.forward_account.length - 1; i >= 0; i--) {
		$("#page5_forward_account").append("<option value='"+data.forward_account[i]+"'>"+data.forward_account[i]+"</option>");
	}
	data.always_forward == "on"?_page5_always_forward_on.checked = true:_page5_always_forward_off.checked = true;
	_page5_always_forward_target.value = data.always_forward_target;
	_page5_always_forward_on_code.value = data.always_forward_on_code;
	_page5_always_forward_off_code.value = data.always_forward_off_code;
	data.busy_forward == "on"?_page5_busy_forward_on.checked = true:_page5_busy_forward_off.checked = true;
	_page5_busy_forward_target.value = data.busy_forward_target;
	_page5_busy_forward_on_code.value = data.busy_forward_on_code;
	_page5_busy_forward_off_code.value = data.busy_forward_off_code;
	data.no_answer_forward = "on"?_page5_no_answer_forward_on.checked = true:_page5_no_answer_forward_off.checked = true;
	$(" select option[value='"+data.ring_time+"']").attr("selected","selected");
	_page5_no_answer_forward_target.value = data.no_answer_forward_target;
	_page5_no_answer_forward_on_code.value = data.no_answer_forward_on_code;
	_page5_no_answer_forward_off_code.value = data.no_answer_forward_off_code;
	_page5_dnd_emergency.options[data.dnd_emergency].selected = true;
	_page5_dnd_authorized_numbers.value = data.dnd_authorized_numbers;
	data.dnd_mode == "phone"?dnd_mode_phone_click():dnd_mode_custom_click();
	$("#page5_dnd_account").empty();
	for (var i = data.dnd_account.length - 1; i >= 0; i--) {
		$("#page5_dnd_account").append("<option value='"+data.dnd_account[i]+"'>"+data.dnd_account[i]+"</option>");
	}
	data.dnd_status == "on"?_page5_dnd_status_on.checked = true:_page5_dnd_status_off.checked = true;
	_page5_dnd_on_code.value = data.dnd_on_code;
	_page5_dnd_off_code.value = data.dnd_off_code;
}


//模式选择
function forward_mode_phone_click(){
	_page5_forward_mode_phone.checked = true;
	_page5_forward_account.disabled = true;
}
function forward_mode_custom_click(){
	_page5_forward_mode_custom.checked = true;
	_page5_forward_account.disabled = false;
}
function dnd_mode_phone_click(){
	_page5_dnd_mode_phone.checked = true;
	_page5_dnd_account.disabled = true;
}
function dnd_mode_custom_click(){
	_page5_dnd_mode_custom.checked = true;
	_page5_dnd_account.disabled = false;
}


/*点击确定，提交数据*/
page5_submit = document.getElementById('page5_submit');
page5_submit.onclick = function(){
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
	var page5_forward_mode = (_page5_forward_mode_phone.checked)?"phone":"custom";
	var page5_always_forward = (_page5_always_forward_on.checked)?"on":"off";
	var page5_busy_forward = (_page5_busy_forward_on.checked)?"on":"off";
	var page5_no_answer_forward = (_page5_no_answer_forward_on.checked)?"on":"off";
	var page5_dnd_mode = (_page5_dnd_mode_phone.checked)?"phone":"custom";
	var page5_dnd_status = (_page5_dnd_status_on.checked)?"on":"off";
    var data = 'flag='+"0"
			    +'&page5_forward_emergency='+			_page5_forward_emergency.value
				+'&page5_forward_authorized_numbers='+	_page5_forward_authorized_numbers.value
				+'&page5_forward_mode='+				page5_forward_mode
				+'&page5_forward_account='+				_page5_forward_account.value		//账号
				+'&page5_always_forward='+				page5_always_forward
				+'&page5_always_forward_target='+		_page5_always_forward_target.value
				+'&page5_always_forward_on_code='+		_page5_always_forward_on_code.value
				+'&page5_always_forward_off_code='+		_page5_always_forward_off_code.value
				+'&page5_busy_forward='+				page5_busy_forward
				+'&page5_busy_forward_target='+			_page5_busy_forward_target.value
				+'&page5_busy_forward_on_code='+		_page5_busy_forward_on_code.value
				+'&page5_busy_forward_off_code='+		_page5_busy_forward_off_code.value
				+'&page5_no_answer_forward='+			page5_no_answer_forward
				+'&page5_ring_time='+					_page5_ring_time.value	//响铃
				+'&page5_no_answer_forward_target='+	_page5_no_answer_forward_target.value
				+'&page5_no_answer_forward_on_code='+	_page5_no_answer_forward_on_code.value
				+'&page5_no_answer_forward_off_code='+	_page5_no_answer_forward_off_code.value
				+'&page5_dnd_emergency='+				_page5_dnd_emergency.value
				+'&page5_dnd_authorized_numbers='+		_page5_dnd_authorized_numbers.value
				+'&page5_dnd_mode='+					page5_dnd_mode
				+'&page5_dnd_account='+					_page5_dnd_account.value	//账号
				+'&page5_dnd_status='+					page5_dnd_status
				+'&page5_dnd_on_code='+					_page5_dnd_on_code.value
				+'&page5_dnd_off_code='+				_page5_dnd_off_code.value;
    var url = 'php/page5_submit.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}

