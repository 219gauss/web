
_page6_filename_show = document.getElementById('page6_filename_show');
_page6_file_select = document.getElementById('page6_file_select');
_page6_ring_upload = document.getElementById('page6_ring_upload');
_page6_ring_cancel = document.getElementById('page6_ring_cancel');
_page6_live_dialpad = document.getElementById('page6_live_dialpad');
_page6_inter_digit_time = document.getElementById('page6_inter_digit_time');
_page6_backlight_time = document.getElementById('page6_backlight_time');
_page6_contrast = document.getElementById('page6_contrast');
_page6_watch_dog = document.getElementById('page6_watch_dog');
_page6_ring_type = document.getElementById('page6_ring_type');
_page6_screensaver_wait_time = document.getElementById('page6_screensaver_wait_time');
_page6_xml_browser_url = document.getElementById('page6_xml_browser_url');

//点击标签六
function tabsix() {
	if(content_6.style.display == "none" || content_6.style.display == ""){
		content_1.style.display = "none";
		content_2.style.display = "none";
		content_3.style.display = "none";
		content_4.style.display = "none";
		content_5.style.display = "none";
		content_6.style.display = "block";
		content_7.style.display = "none";
		content_8.style.display = "none";
	}

	if(tab_6){
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
		tab_6.style.background = "#fafafa";
		tab_6.style.color = "#000000";
		tab_7.style.background = "";
		tab_7.style.color = "";
		tab_8.style.background = "";
		tab_8.style.color = "";
	}
	$.get("php/page6.php",function(data,status){
		if (status == "success") {
			var json = JSON.parse(data);
			//console.log(json.data);
			page6_display_data(json.data);
		}
	});
}

function page6_display_data(data){
	console.log(data);
	$(" select[id='page6_live_dialpad'] option[value='"+data.page6_live_dialpad+"']").attr("selected","selected");
	_page6_inter_digit_time.value = data.page6_inter_digit_time;
	$(" select[id='page6_backlight_time'] option[value='"+data.page6_backlight_time+"']").attr("selected","selected");
	$(" select[id='page6_contrast'] option[value='"+data.page6_contrast+"']").attr("selected","selected");
	$(" select[id='page6_watch_dog'] option[value='"+data.page6_watch_dog+"']").attr("selected","selected");
	$(" select[id='page6_ring_type'] option[value='"+data.page6_ring_type+"']").attr("selected","selected");
	$(" select[id='page6_screensaver_wait_time'] option[value='"+data.page6_screensaver_wait_time+"']").attr("selected","selected");
	_page6_xml_browser_url.value = data.page6_xml_browser_url;
}


//点击浏览按键
function page6_ring_select(){
	_page6_file_select.click();
}

//点击确定选择文件
function page6_file_select_change(file){
	if (_page6_file_select.value) {
		_page6_filename_show.value = _page6_file_select.value;
		file_1 = file.files[0];
	}else{
		_page6_filename_show.value = "";
	}
}

_page6_ring_upload.onclick = function(){
	if(_page6_file_select.files[0] && _page6_filename_show.value){
		var form = new FormData();
		form.append('page6_file_select',_page6_file_select.files[0]);

		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
	        if(xhr.readyState==4 && xhr.status == 200){
	        	if (xhr.responseText == "1") {
	        		alert("文件上传成功！");
				} else {
					alert("文件上传失败！");
				}
	        }
	    }
	    var url = 'php/page6_upload.php';
	    xhr.open('post',url,true);
	    xhr.send(form);
	    return false;
	}else{
		alert("未选择文件！");
	}
}

_page6_ring_cancel.onclick = function(){
	_page6_filename_show.value = "";
	_page6_file_select.value = "";
}

/*点击确定，提交数据*/
page6_submit = document.getElementById('page6_submit');
page6_submit.onclick = function(){
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
	var page6_upload_ringtone = (_page6_file_select.files[0] && _page6_filename_show.value != "")?"1":"0";
    var data = 'flag='+"0"
    			+'&page6_live_dialpad='+_page6_live_dialpad.value
    			+'&page6_inter_digit_time='+_page6_inter_digit_time.value
    			+'&page6_backlight_time='+_page6_backlight_time.value
    			+'&page6_contrast='+_page6_contrast.value
    			+'&page6_watch_dog='+_page6_watch_dog.value
    			+'&page6_ring_type='+_page6_ring_type.value
    			+'&page6_upload_ringtone='+page6_upload_ringtone		//加载铃声
    			+'&page6_screensaver_wait_time='+_page6_screensaver_wait_time.value
    			+'&page6_xml_browser_url='+_page6_xml_browser_url.value;
    var url = 'php/page6_submit.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}




