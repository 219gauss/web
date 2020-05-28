/**
 * 	导航栏-->网络配置
 */


//网络配置 page3
	_page3_internet = document.getElementById("page3_internet");

	//ipv4
	_page3_ipv4_dhcp_id = document.getElementById("page3_ipv4_dhcp_id");
	_page3_ipv4_staticip_id = document.getElementById("page3_ipv4_staticip_id");

	_page3_ipv4_ipaddress = document.getElementById("page3_ipv4_ipaddress");
	_page3_ipv4_mask = document.getElementById("page3_ipv4_mask");
	_page3_ipv4_gateway = document.getElementById("page3_ipv4_gateway");
	_page3_ipv4_staticdns_open_id = document.getElementById("page3_ipv4_staticdns_open_id");
	_page3_ipv4_staticdns_close_id = document.getElementById("page3_ipv4_staticdns_close_id");
	_page3_ipv4_firstDNS = document.getElementById("page3_ipv4_firstDNS");
	_page3_ipv4_secondDNS = document.getElementById("page3_ipv4_secondDNS");

	//ipv6
	_page3_ipv6_dhcp_id = document.getElementById("page3_ipv6_dhcp_id");
	_page3_ipv6_staticip_id = document.getElementById("page3_ipv6_staticip_id");

	_page3_ipv6_ipaddress = document.getElementById("page3_ipv6_ipaddress");
	_page3_ipv6_mask = document.getElementById("page3_ipv6_mask");
	_page3_ipv6_gateway = document.getElementById("page3_ipv6_gateway");
	_page3_ipv6_staticdns_open_id = document.getElementById("page3_ipv6_staticdns_open_id");
	_page3_ipv6_staticdns_close_id = document.getElementById("page3_ipv6_staticdns_close_id");
	_page3_ipv6_firstDNS = document.getElementById("page3_ipv6_firstDNS");
	_page3_ipv6_secondDNS = document.getElementById("page3_ipv6_secondDNS");


//ipv4 网络配置
//点击DHCP
function ipv4_dhcp(){
	_page3_ipv4_dhcp_id.checked = true;

	_page3_ipv4_ipaddress.disabled = true;
	_page3_ipv4_mask.disabled = true;
	_page3_ipv4_gateway.disabled = true;
	_page3_ipv4_staticdns_open_id.disabled = false;
	_page3_ipv4_staticdns_close_id.disabled = false;
}
//点击静态IP地址
function ipv4_staticip(){
	_page3_ipv4_staticip_id.checked = true;

	_page3_ipv4_ipaddress.disabled = false;
	_page3_ipv4_mask.disabled = false;
	_page3_ipv4_gateway.disabled = false;
	if(_page3_ipv4_staticdns_close_id.checked){
		_page3_ipv4_staticdns_close_id.checked = false;
		_page3_ipv4_staticdns_open_id.checked = true;
		_page3_ipv4_staticdns_open_id.disabled = true;
		_page3_ipv4_staticdns_close_id.disabled = true;
		_page3_ipv4_firstDNS.disabled = false;
		_page3_ipv4_secondDNS.disabled = false;
	}
}

//打开静态 DNS
function ipv4_staticdns_open(){
	_page3_ipv4_staticdns_open_id.checked = true;

	_page3_ipv4_firstDNS.disabled = false;
	_page3_ipv4_secondDNS.disabled = false;
}
//关闭静态 DNS
function ipv4_staticdns_close(){
	_page3_ipv4_staticdns_close_id.checked = true;

	_page3_ipv4_firstDNS.disabled = true;
	_page3_ipv4_secondDNS.disabled = true;
}



//ipv6 网络配置
//点击DHCP
function ipv6_dhcp(){
	_page3_ipv6_dhcp_id.checked = true;

	_page3_ipv6_ipaddress.disabled = true;
	_page3_ipv6_mask.disabled = true;
	_page3_ipv6_gateway.disabled = true;
	_page3_ipv6_staticdns_open_id.disabled = false;
	_page3_ipv6_staticdns_close_id.disabled = false;
}
//点击静态IP地址
function ipv6_staticip(){
	_page3_ipv6_staticip_id.checked = true;

	_page3_ipv6_ipaddress.disabled = false;
	_page3_ipv6_mask.disabled = false;
	_page3_ipv6_gateway.disabled = false;
	if(_page3_ipv6_staticdns_close_id.checked){
		_page3_ipv6_staticdns_close_id.checked = false;
		_page3_ipv6_staticdns_open_id.checked = true;
		_page3_ipv6_staticdns_open_id.disabled = true;
		_page3_ipv6_staticdns_close_id.disabled = true;
		_page3_ipv6_firstDNS.disabled = false;
		_page3_ipv6_secondDNS.disabled = false;
	}
}

//打开静态 DNS
function ipv6_staticdns_open(){
	_page3_ipv6_staticdns_open_id.checked = true;

	_page3_ipv6_firstDNS.disabled = false;
	_page3_ipv6_secondDNS.disabled = false;
}
//关闭静态 DNS
function ipv6_staticdns_close(){
	_page3_ipv6_staticdns_close_id.checked = true;

	_page3_ipv6_firstDNS.disabled = true;
	_page3_ipv6_secondDNS.disabled = true;
}

//(ipv4/ipv6)选择
function page3_internet_select(value) {
	if (value == "ipv4") {
		_page3_internet.options[0].selected = true
		//ipv4启用
		_page3_ipv4_dhcp_id.checked = true;
		_page3_ipv4_staticip_id.checked = false;
		_page3_ipv4_dhcp_id.disabled = false;
		_page3_ipv4_staticip_id.disabled = false;

		_page3_ipv4_ipaddress.disabled = true;
		_page3_ipv4_mask.disabled = true;
		_page3_ipv4_gateway.disabled = true;

		_page3_ipv4_staticdns_open_id.checked = false;
		_page3_ipv4_staticdns_close_id.checked = true;
		_page3_ipv4_staticdns_open_id.disabled = false;
		_page3_ipv4_staticdns_close_id.disabled = false;

		_page3_ipv4_firstDNS.disabled = true;
		_page3_ipv4_secondDNS.disabled = true;

		//ipv6禁用
		_page3_ipv6_dhcp_id.checked = true;
		_page3_ipv6_staticip_id.checked = false;
		_page3_ipv6_dhcp_id.disabled = true;
		_page3_ipv6_staticip_id.disabled = true;

		_page3_ipv6_ipaddress.disabled = true;
		_page3_ipv6_mask.disabled = true;
		_page3_ipv6_gateway.disabled = true;

		_page3_ipv6_staticdns_open_id.checked = false;
		_page3_ipv6_staticdns_close_id.checked = true;
		_page3_ipv6_staticdns_open_id.disabled = true;
		_page3_ipv6_staticdns_close_id.disabled = true;

		_page3_ipv6_firstDNS.disabled = true;
		_page3_ipv6_secondDNS.disabled = true;

	} else if (value == "ipv6") {
		_page3_internet.options[1].selected = true
		//ipv4禁用
		_page3_ipv4_dhcp_id.checked = true;
		_page3_ipv4_staticip_id.checked = false;
		_page3_ipv4_dhcp_id.disabled = true;
		_page3_ipv4_staticip_id.disabled = true;

		_page3_ipv4_ipaddress.disabled = true;
		_page3_ipv4_mask.disabled = true;
		_page3_ipv4_gateway.disabled = true;

		_page3_ipv4_staticdns_open_id.checked = false;
		_page3_ipv4_staticdns_close_id.checked = true;
		_page3_ipv4_staticdns_open_id.disabled = true;
		_page3_ipv4_staticdns_close_id.disabled = true;

		_page3_ipv4_firstDNS.disabled = true;
		_page3_ipv4_secondDNS.disabled = true;

		//ipv6启用
		_page3_ipv6_dhcp_id.checked = true;
		_page3_ipv6_staticip_id.checked = false;
		_page3_ipv6_dhcp_id.disabled = false;
		_page3_ipv6_staticip_id.disabled = false;

		_page3_ipv6_ipaddress.disabled = true;
		_page3_ipv6_mask.disabled = true;
		_page3_ipv6_gateway.disabled = true;

		_page3_ipv6_staticdns_open_id.checked = false;
		_page3_ipv6_staticdns_close_id.checked = true;
		_page3_ipv6_staticdns_open_id.disabled = false;
		_page3_ipv6_staticdns_close_id.disabled = false;

		_page3_ipv6_firstDNS.disabled = true;
		_page3_ipv6_secondDNS.disabled = true;
	}
}


//填充数据
function display(json) {
	if (json.data.page3_internet == "ipv4") {
		if (json.data.ipv4_type_set == "static") {
			ipv4_staticip();
			_page3_ipv4_ipaddress.value = json.data.page3_ipv4_ipaddress;
			_page3_ipv4_mask.value = json.data.page3_ipv4_mask;
			_page3_ipv4_gateway.value = json.data.page3_ipv4_gateway;
			if (json.data.ipv4_staticDNS == "open") {
				ipv4_staticdns_open();
				_page3_ipv4_firstDNS.value = json.data.page3_ipv4_firstDNS;
				_page3_ipv4_secondDNS.value = json.data.page3_ipv4_secondDNS;
			}
		}
	} else {
		if (json.data.ipv6_type_set == "static") {
			ipv6_staticip();
			_page3_ipv6_ipaddress.value = json.data.page3_ipv6_ipaddress;
			_page3_ipv6_mask.value = json.data.page3_ipv6_mask;
			_page3_ipv6_gateway.value = json.data.page3_ipv6_gateway;
			if (json.data.ipv6_staticDNS == "open") {
				ipv6_staticdns_open();
				_page3_ipv6_firstDNS.value = json.data.page3_ipv6_firstDNS;
				_page3_ipv6_secondDNS.value = json.data.page3_ipv6_secondDNS;
			}
		}
	}
}

function set_data() {
	//显示数据
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	page3_internet_select(json.data.page3_internet);
        	display(json);
        	console.log(json.data);
        }
    }

    var data = 'data='+"";
    var url = 'php/page3.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
}

//点击标签三
function tabthree() {
	if(content_3.style.display == "none" || content_3.style.display == ""){
		content_1.style.display = "none";
		content_2.style.display = "none";
		content_3.style.display = "block";
	}

	if(tab_3){
		tab_1.style.background = "";
		tab_1.style.color = "";
		tab_2.style.background = "";
		tab_2.style.color = "";
		tab_3.style.background = "#fafafa";
		tab_3.style.color = "#000000";
	}

	/*page3_internet_select("ipv4");*/
	set_data();
}

function datainit() {
	if (_page3_ipv4_dhcp_id.checked) {
		ipv4_type_set = "dhcp"
	} else {
		ipv4_type_set = "static"
	}

	if (_page3_ipv4_staticdns_open_id.checked) {
		ipv4_staticDNS = "open"
	} else {
		ipv4_staticDNS = "close"
	}

	if (_page3_ipv6_dhcp_id.checked) {
		ipv6_type_set = "dhcp"
	} else {
		ipv6_type_set = "static"
	}

	if (_page3_ipv6_staticdns_open_id.checked) {
		ipv6_staticDNS = "open"
	} else {
		ipv6_staticDNS = "close"
	}
}

/*点击确定，提交数据*/
page3_submit = document.getElementById('page3_submit');
page3_submit.onclick = function(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	if(json.flag == "1"){
        		alert("保存成功！");
        	}else if(json.flag == "0"){
        		alert("保存失败！");
        	}
        	/*console.log(xhr.responseText);*/
        }
    }

	datainit();
    var data = 'flag='+"0"
			    +'&page3_internet='+_page3_internet.value
				+'&ipv4_type_set='+ipv4_type_set
				+'&page3_ipv4_ipaddress='+_page3_ipv4_ipaddress.value
				+'&page3_ipv4_mask='+_page3_ipv4_mask.value
				+'&page3_ipv4_gateway='+_page3_ipv4_gateway.value
				+'&ipv4_staticDNS='+ipv4_staticDNS
				+'&page3_ipv4_firstDNS='+_page3_ipv4_firstDNS.value
				+'&page3_ipv4_secondDNS='+_page3_ipv4_secondDNS.value
				+'&ipv6_type_set='+ipv6_type_set
				+'&page3_ipv6_ipaddress='+_page3_ipv6_ipaddress.value
				+'&page3_ipv6_mask='+_page3_ipv6_mask.value
				+'&page3_ipv6_gateway='+_page3_ipv6_gateway.value
				+'&ipv6_staticDNS='+ipv6_staticDNS
				+'&page3_ipv6_firstDNS='+_page3_ipv6_firstDNS.value
				+'&page3_ipv6_secondDNS='+_page3_ipv6_secondDNS.value;
    var url = 'php/page3_submit.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}

/*取消按键*/
page3_cancel = document.getElementById('page3_cancel');
page3_cancel.onclick = function(){
	location.reload();
}

