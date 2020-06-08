/**
 *	导航栏-->状态
 */

_firmware_version = document.getElementById("firmware_version");
_hardware_version = document.getElementById("hardware_version");
_certificate = document.getElementById("certificate");
_internet_port = document.getElementById("internet_port");
_wan_port = document.getElementById("wan_port");
_ip_address = document.getElementById("ip_address");
_mask = document.getElementById("mask");
_gateway = document.getElementById("gateway");
_first_dns = document.getElementById("first_dns");
_second_dns = document.getElementById("second_dns");
_physical_address = document.getElementById("physical_address");
_run_time = document.getElementById("run_time");
_now_time = document.getElementById("now_time");
_account_1 = document.getElementById("account_1");
_account_2 = document.getElementById("account_2");
_account_3 = document.getElementById("account_3");

_internet_port_title = document.getElementById("internet_port_title");

//页面加载初始化
function data_init() {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	console.log(json.data);
        	_firmware_version.innerHTML = json.data.firmware_version;
        	_hardware_version.innerHTML = json.data.hardware_version;
        	_certificate.innerHTML = json.data.certificate;
        	_internet_port.innerHTML = json.data.internet_port;
        	_wan_port.innerHTML = json.data.wan_port;
        	_ip_address.innerHTML = json.data.ip_address;
        	_mask.innerHTML = json.data.mask;
        	_gateway.innerHTML = json.data.gateway;
        	_first_dns.innerHTML = json.data.first_dns;
        	_second_dns.innerHTML = json.data.second_dns;
        	_physical_address.innerHTML = json.data.physical_address;
        	_run_time.innerHTML = json.data.run_time;
        	_now_time.innerHTML = json.data.now_time;
        	_account_1.innerHTML = json.data.account_1;
        	_account_2.innerHTML = json.data.account_2;
        	_account_3.innerHTML = json.data.account_3;

        	_internet_port_title.innerHTML = "    "+json.data.internet_port;
        }
    }

    var data = 'data='+"";
    var url = 'php/info.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
}


//点击标签一
function tabone() {
	if(content_1.style.display == "none" || content_1.style.display == ""){
		content_1.style.display = "block";	//可见
		content_2.style.display = "none";	//不可见
		content_3.style.display = "none";
		content_4.style.display = "none";
		content_5.style.display = "none";
        content_6.style.display = "none";
	}

	if(tab_1){
		tab_1.style.background = "#fafafa";
		tab_1.style.color = "#000000";
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
	}
	data_init();
}
