/**
 * 	导航栏-->账号
 */

_page2_account = document.getElementById("page2_account");
_reg_status = document.getElementById("reg_status");
_path_activate = document.getElementById("path_activate");
_lable = document.getElementById("lable");
_show_name = document.getElementById("show_name");
_login_name = document.getElementById("login_name");
_user_name = document.getElementById("user_name");
_password = document.getElementById("password");
_server_address1 = document.getElementById("server_address1");
_port1 = document.getElementById("port1");
_transfer1 = document.getElementById("transfer1");
_heartbeat1 = document.getElementById("heartbeat1");
_repetition1 = document.getElementById("repetition1");
_server_address2 = document.getElementById("server_address2");
_port2 = document.getElementById("port2");
_transfer2 = document.getElementById("transfer2");
_heartbeat2 = document.getElementById("heartbeat2");
_repetition2 = document.getElementById("repetition2");
_Outbound = document.getElementById("Outbound");
_agency_server1 = document.getElementById("agency_server1");
_agency_server2 = document.getElementById("agency_server2");
_rollback = document.getElementById("rollback");
_nat = document.getElementById("nat");


//点击标签二
function tabtwo() {
	if(content_2.style.display == "none" || content_2.style.display == ""){
		content_1.style.display = "none";
		content_2.style.display = "block";
		content_3.style.display = "none";
		content_4.style.display = "none";
		content_5.style.display = "none";
        content_6.style.display = "none";
	}

	if(tab_2){
		tab_1.style.background = "";
		tab_1.style.color = "";
		tab_2.style.background = "#fafafa";
		tab_2.style.color = "#000000";
		tab_3.style.background = "";
		tab_3.style.color = "";
		tab_4.style.background = "";
		tab_4.style.color = "";
		tab_5.style.background = "";
		tab_5.style.color = "";
        tab_6.style.background = "";
        tab_6.style.color = "";
	}

	//显示数据
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	_page2_account.options[json.data.page2_account].selected = true;
        	_reg_status.innerHTML = json.data.reg_status;
        	_path_activate.options[json.data.path_activate].selected = true;
        	_lable.value = json.data.lable;
        	_show_name.value = json.data.show_name;
        	_login_name.value = json.data.login_name;
        	_user_name.value = json.data.user_name;
        	_password.value = json.data.password;
        	_server_address1.value = json.data.server_address1;
        	_port1.value = json.data.port1;
        	_transfer1.value = json.data.transfer1;
        	_heartbeat1.value = json.data.heartbeat1;
        	_repetition1.value = json.data.repetition1;
        	_server_address2.value = json.data.server_address2;
        	_port2.value = json.data.port2;
        	_transfer2.value = json.data.transfer2;
        	_heartbeat2.value = json.data.heartbeat2;
        	_repetition2.value = json.data.repetition2;
        	_Outbound.options[json.data.Outbound].selected = true;
        	_agency_server1.value = json.data.agency_server1;
        	_agency_server2.value = json.data.agency_server2;
        	_rollback.value = json.data.rollback;
        	_nat.value = json.data.nat;
        	/*console.log(xhr.responseText);
        	console.log(json.data);*/
        }
    }

    var data = 'data='+"";
    var url = 'php/page2.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
}

/*点击确定，提交数据*/
page2_submit = document.getElementById('page2_submit');
page2_submit.onclick = function(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	if(json.flag == "1"){
        		alert("保存成功！");
        	}else if(json.flag == "0"){
        		alert("保存失败！");
        	}
        	console.log(xhr.responseText);
        }
    }
    var data = 'flag='+"0"
    			+'&page2_account='+_page2_account.options[_page2_account.selectedIndex].value
    			+'&path_activate='+_path_activate.options[_path_activate.options["selectedIndex"]].value
    			+'&lable='+_lable.value
    			+'&show_name='+_show_name.value
    			+'&login_name='+_login_name.value
    			+'&user_name='+_user_name.value
    			+'&password='+_password.value
    			+'&server_address1='+_server_address1.value
    			+'&port1='+_port1.value
    			+'&transfer1='+_transfer1.value
    			+'&heartbeat1='+_heartbeat1.value
    			+'&repetition1='+_repetition1.value
    			+'&server_address2='+_server_address2.value
    			+'&port2='+_port2.value
    			+'&transfer2='+_transfer2.value
    			+'&heartbeat2='+_heartbeat2.value
    			+'&repetition2='+_repetition2.value
    			+'&Outbound='+_Outbound.options[_Outbound.options.selectedIndex].value
    			+'&agency_server1='+_agency_server1.value
    			+'&agency_server2='+_agency_server2.value
    			+'&rollback='+_rollback.value
    			+'&nat='+_nat.value;
    var url = 'php/page2_submit.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}

//账号点击事件
function account_select(value){
	//显示数据
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	/*_page2_account.options[json.data.page2_account].selected = true;*/
        	_reg_status.innerHTML = json.data.reg_status;
        	_path_activate.options[json.data.path_activate].selected = true;
        	_lable.value = json.data.lable;
        	_show_name.value = json.data.show_name;
        	_login_name.value = json.data.login_name;
        	_user_name.value = json.data.user_name;
        	_password.value = json.data.password;
        	_server_address1.value = json.data.server_address1;
        	_port1.value = json.data.port1;
        	_transfer1.value = json.data.transfer1;
        	_heartbeat1.value = json.data.heartbeat1;
        	_repetition1.value = json.data.repetition1;
        	_server_address2.value = json.data.server_address2;
        	_port2.value = json.data.port2;
        	_transfer2.value = json.data.transfer2;
        	_heartbeat2.value = json.data.heartbeat2;
        	_repetition2.value = json.data.repetition2;
        	_Outbound.options[json.data.Outbound].selected = true;
        	_agency_server1.value = json.data.agency_server1;
        	_agency_server2.value = json.data.agency_server2;
        	_rollback.value = json.data.rollback;
        	_nat.value = json.data.nat;
        	console.log(xhr.responseText);
        	console.log(json.data);
        }
    }

    var data = 'data='+""+'&account_id='+value;
    var url = 'php/page2_account_select.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
}


/*取消按键*/
page2_cancel = document.getElementById('page2_cancel');
page2_cancel.onclick = function(){
	location.reload();
}

