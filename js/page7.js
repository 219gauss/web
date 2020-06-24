/**
 *
 */
_page7_page = document.getElementById('page7_page');
_page7_group1 = document.getElementById('page7_group1');
_page7_group2 = document.getElementById('page7_group2');


_page7_name = document.getElementById('page7_name');
_page7_office_numbe = document.getElementById('page7_office_numbe');
_page7_mobile_number = document.getElementById('page7_mobile_number');
_page7_other_numbe = document.getElementById('page7_other_numbe');
_page7_ring_tone = document.getElementById('page7_ring_tone');
_page7_add_group = document.getElementById('page7_add_group');
_page7_account = document.getElementById('page7_account');
_page7_auto_divert = document.getElementById('page7_auto_divert');

_page7_group = document.getElementById('page7_group');
_page7_group_ring_tone = document.getElementById('page7_group_ring_tone');
_page7_group_edit = document.getElementById('page7_group_edit');
_page7_group_delete = document.getElementById('page7_group_delete');
_page7_name_index = "";

/*--------导入联系人部分---------*/
_page7_xml_show = document.getElementById('page7_xml_show');
_page7_xml_select = document.getElementById('page7_xml_select');
_page7_import_xml = document.getElementById('page7_import_xml');

//点击标签七
function tabseven() {
	if(content_7.style.display == "none" || content_7.style.display == ""){
		content_1.style.display = "none";
		content_2.style.display = "none";
		content_3.style.display = "none";
		content_4.style.display = "none";
		content_5.style.display = "none";
		content_6.style.display = "none";
		content_7.style.display = "block";
		content_8.style.display = "none";
	}

	if(tab_7){
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
		tab_7.style.background = "#fafafa";
		tab_7.style.color = "#000000";
		tab_8.style.background = "";
		tab_8.style.color = "";
	}
	//最右端多选框默认不可选中
	for (var i = 1; i <= 10; i++) {
		$("#data_"+i+"_7")[0].disabled  = true;
	}

	$.get("php/page7.php",function(data,status){
		if (status == "success") {
			var json = JSON.parse(data);
			page7_display_initdata(json);

		}
	});
}

function page7_display_initdata(json){

	//显示联系人数据
	for (var i = 1; i <= Math.min(json.length,10); i++) {
		//console.log(json.contact[i]);
		$("#data_"+i+"_1")[0].innerText = i;
		$("#data_"+i+"_2")[0].innerText = json.contact[i].page7_name;
		$("#data_"+i+"_3")[0].innerText = json.contact[i].page7_office_numbe;
		$("#data_"+i+"_4")[0].innerText = json.contact[i].page7_mobile_number;
		$("#data_"+i+"_5")[0].innerText = json.contact[i].page7_other_numbe;
		if (json.contact[i].page7_add_group == "1") {
			$("#data_"+i+"_6")[0].innerText = "本地联系人";
		} else if (json.contact[i].page7_add_group == "0") {
			$("#data_"+i+"_6")[0].innerText = "黑名单";
		} else{
			$("#data_"+i+"_6")[0].innerText = json.contact[i].page7_add_group;
		}
		$("#data_"+i+"_7")[0].disabled  = false;
	}

	//页数更新
	if (json.length == 0) {
		var page = document.createElement("OPTION");
		page.value=1;
		page.innerHTML=1;
		_page7_page.add(page);
	}else{
		for(var i = 1; i <= Math.ceil(json.length/10); i++) {
			var page = document.createElement("OPTION");
			page.value=i;
			page.innerHTML=i;
			_page7_page.add(page);
		}
	}

	//群组更新
	for ( var iterable_element in json.group) {
		//console.log(json.group[iterable_element]);
		var page1 = document.createElement("OPTION");
		page1.value=json.group[iterable_element];
		page1.innerHTML=json.group[iterable_element];
		_page7_group1.add(page1);

		var page2 = document.createElement("OPTION");
		page2.value=json.group[iterable_element];
		page2.innerHTML=json.group[iterable_element];
		_page7_group2.add(page2);

		var page3 = document.createElement("OPTION");
		page3.value=json.group[iterable_element];
		page3.innerHTML=json.group[iterable_element];
		_page7_add_group.add(page3);
	}
	//群组设置编辑和删除button样式
	_page7_group_edit.disabled = true;
	_page7_group_delete.disabled = true;
}

//通过组名筛选联系人
function page7_group1_onchange(value) {

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	page7_group1_data(json);
        }
    }
    var data = 'data='+value;
    var url = 'php/page7_group1_filter.php';
    xhr.open('post',url,true);
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhr.send(data);
    return false;
}

function page7_group1_data(json) {
	console.log(json);
	//清空表格
	for (var i = 1; i <= 10; i++) {
		//console.log(json.contact[i]);
		$("#data_"+i+"_1")[0].innerText = "";
		$("#data_"+i+"_2")[0].innerText = "";
		$("#data_"+i+"_3")[0].innerText = "";
		$("#data_"+i+"_4")[0].innerText = "";
		$("#data_"+i+"_5")[0].innerText = "";
		$("#data_"+i+"_6")[0].innerText = "";
		$("#data_"+i+"_7").checked = false;
		$("#data_"+i+"_7")[0].disabled  = true;
	}
	//清空每一行样式
	$("#page7_contacts_show tr:nth-child(odd):not(:first-child)").css('background-color','#f2f2f2');
	$("#page7_contacts_show tr:nth-child(even):not(:last-child)").css('background-color','#cccccc');
	//更新页数
	$("#page7_page").empty();
	if (json.length == 0) {
		var page = document.createElement("OPTION");
		page.value=1;
		page.innerHTML=1;
		_page7_page.add(page);
	}else{
		for(var i = 1; i <= Math.ceil(json.length/10); i++) {
			var page = document.createElement("OPTION");
			page.value=i;
			page.innerHTML=i;
			_page7_page.add(page);
		}
	}

	//填充数据
	for (var i = 1; i <= Math.min(json.length,10); i++) {
		$("#data_"+i+"_1")[0].innerText = i;
		$("#data_"+i+"_2")[0].innerText = json.contact[i].page7_name;
		$("#data_"+i+"_3")[0].innerText = json.contact[i].page7_office_numbe;
		$("#data_"+i+"_4")[0].innerText = json.contact[i].page7_mobile_number;
		$("#data_"+i+"_5")[0].innerText = json.contact[i].page7_other_numbe;
		if (json.contact[i].page7_add_group == "1") {
			$("#data_"+i+"_6")[0].innerText = "本地联系人";
		} else if (json.contact[i].page7_add_group == "0") {
			$("#data_"+i+"_6")[0].innerText = "黑名单";
		} else{
			$("#data_"+i+"_6")[0].innerText = json.contact[i].page7_add_group;
		}
		$("#data_"+i+"_7")[0].disabled  = false;
	}
	//添加群组到群组设置
	if (json.group['page7_group'] && json.group['page7_group_ring_tone']) {
		_page7_group.value = json.group['page7_group'];
		_page7_group_ring_tone.value = json.group['page7_group_ring_tone'];
	} else {
		_page7_group.value = "";
		_page7_group_ring_tone.value = "1";
	}
	//群组设置编辑和删除button样式
	if(json['data'] == "0" || json['data'] == "1"){
		_page7_group_edit.disabled = true;
		_page7_group_delete.disabled = true;
	}else{
		_page7_group_edit.disabled = false;
		_page7_group_delete.disabled = false;
	}
}

//点击顶层多选框全选联系人
$(document).ready(function(){
	$("#page7_contacts_show tr:first td:last input:checkbox").click(function(){
		if($(this).is(':checked')) {
			$("#page7_contacts_show input:checkbox:not(:first):enabled").attr("checked",true);
		}else {
			$("#page7_contacts_show input:checkbox:not(:first):enabled").attr("checked",false);
		}
	});
});

//点击添加联系人
page7_add = document.getElementById('page7_add');
page7_add.onclick = function(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	if(json.flag == "1"){
        		alert("保存成功！");
        		window.location.reload();
        	}else if(json.flag == "0"){
        		alert("保存失败！");
        	}else if(json.flag == "-1"){
        		alert("联系人姓名为空！");
        	}else if(json.flag == "-2"){
        		alert("联系人存在！");
        	}
        	//console.log(xhr.responseText);
        }
    }
    var data = 'flag='+"0"
    			+'&page7_name='+_page7_name.value
    			+'&page7_office_numbe='+_page7_office_numbe.value
    			+'&page7_mobile_number='+_page7_mobile_number.value
    			+'&page7_other_numbe='+_page7_other_numbe.value
    			+'&page7_ring_tone='+_page7_ring_tone.value
    			+'&page7_add_group='+_page7_add_group.value
    			+'&page7_account='+_page7_account.value
    			+'&page7_auto_divert='+_page7_auto_divert.value;
    var url = 'php/page7_contact_add.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}

//点击编辑联系人
$(document).ready(function(){
	$("#page7_edit").click(function(){
		$.post("php/page7_contact_edit.php",
		{
			page7_old_name:_page7_name_index,
			page7_name : page7_name.value,
			page7_office_numbe : page7_office_numbe.value,
			page7_mobile_number : page7_mobile_number.value,
			page7_other_numbe : page7_other_numbe.value,
			page7_ring_tone : page7_ring_tone.value,
			page7_add_group : page7_add_group.value,
			page7_account : page7_account.value,
			page7_auto_divert : page7_auto_divert.value
		},
		function(data,status){
			var json = JSON.parse(data);
			if(json.flag == "1"){
        		alert("编辑成功！");
        		window.location.reload();
        	}else if(json.flag == "0"){
        		alert("编辑失败！");
        	}else if(json.flag == "-1"){
        		alert("请选择要编辑的联系人！");
        	}else if(json.flag == "-2"){
        		alert("联系人姓名不能为空！");
        	}else if(json.flag == "-3"){
        		alert("联系人已存在！");
        	}
		});
	});
});

//点击联系人信息
$(document).ready(function(){
	$("#page7_contacts_show tr:not(:first-child):not(:last-child)").click(function(){
		//如果该行存在联系人信息
		if ($("#"+$(this).attr("id")).find("td:eq(1)")[0].innerText) {
			//改变行样式
			$("#page7_contacts_show tr:nth-child(odd):not(:first-child)").css('background-color','#f2f2f2');
			$("#page7_contacts_show tr:nth-child(even):not(:last-child)").css('background-color','#cccccc');
			$("#"+$(this).attr("id")).css('background-color','#62b9ce');
			//缓存联系人姓名
			 _page7_name_index = $("#"+$(this).attr("id")).find("td:eq(1)")[0].innerText;

			$.post("php/page7_contact_click.php",
			{
				page7_contact_name:$("#"+$(this).attr("id")).find("td:eq(1)")[0].innerText
			},
			function(data,status){
				var json = JSON.parse(data);
				console.log(json.contact);
				//显示联系人信息到编辑处
				_page7_name.value = json.contact.page7_name
				_page7_office_numbe.value = json.contact.page7_office_numbe
				_page7_mobile_number.value = json.contact.page7_mobile_number
				_page7_other_numbe.value = json.contact.page7_other_numbe
				_page7_ring_tone.value = json.contact.page7_ring_tone
				_page7_add_group.value = json.contact.page7_add_group
				_page7_account.value = json.contact.page7_account
				_page7_auto_divert.value = json.contact.page7_auto_divert
			});
		}
	});
});

//点击页数选择
$(document).ready(function(){
	$("#page7_page").click(function(){
		//如果该行存在联系人信息
		$.post("php/page7_page_select.php",
		{
			page7_group:_page7_group1.value
		},
		function(data,status){
			var json = JSON.parse(data);

			//清空表格
			for (var i = 1; i <= 10; i++) {
				//console.log(json.contact[i]);
				$("#data_"+i+"_1")[0].innerText = "";
				$("#data_"+i+"_2")[0].innerText = "";
				$("#data_"+i+"_3")[0].innerText = "";
				$("#data_"+i+"_4")[0].innerText = "";
				$("#data_"+i+"_5")[0].innerText = "";
				$("#data_"+i+"_6")[0].innerText = "";
				$("#data_"+i+"_7").checked = false;
				$("#data_"+i+"_7")[0].disabled  = true;
			}
			//清空每一行样式
			$("#page7_contacts_show tr:nth-child(odd):not(:first-child)").css('background-color','#f2f2f2');
			$("#page7_contacts_show tr:nth-child(even):not(:last-child)").css('background-color','#cccccc');
			console.log(json.contact);
			for (var i = 1; i <= Math.min(json.length,10*(_page7_page.value))-10*(_page7_page.value-1); i++) {
				$("#data_"+i+"_1")[0].innerText = i;
				$("#data_"+i+"_2")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_name;
				$("#data_"+i+"_3")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_office_numbe;
				$("#data_"+i+"_4")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_mobile_number;
				$("#data_"+i+"_5")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_other_numbe;
				if (json.contact[i+10*(_page7_page.value-1)].page7_add_group == "1") {
					$("#data_"+i+"_6")[0].innerText = "本地联系人";
				} else if (json.contact[i+10*(_page7_page.value-1)].page7_add_group == "0") {
					$("#data_"+i+"_6")[0].innerText = "黑名单";
				} else{
					$("#data_"+i+"_6")[0].innerText = json.contact[i].page7_add_group;
				}
				$("#data_"+i+"_7")[0].disabled  = false;
			}
		});
	});
});

//点击后页
$(document).ready(function(){
	$("#page7_next_page").click(function(){
		//如果该行存在联系人信息
		$.post("php/page7_page_select.php",
		{
			page7_group:_page7_group1.value
		},
		function(data,status){
			var json = JSON.parse(data);
			var min_index = $("#page7_page :first")[0].value;
			var max_index = $("#page7_page :last")[0].value;
			var rst_index = $("#page7_page")[0].value;
			if (rst_index == max_index) {
				alert("这是最后一页！");
			} else {
				$("#page7_page")[0].value++;
				//清空表格
				for (var i = 1; i <= 10; i++) {
					//console.log(json.contact[i]);
					$("#data_"+i+"_1")[0].innerText = "";
					$("#data_"+i+"_2")[0].innerText = "";
					$("#data_"+i+"_3")[0].innerText = "";
					$("#data_"+i+"_4")[0].innerText = "";
					$("#data_"+i+"_5")[0].innerText = "";
					$("#data_"+i+"_6")[0].innerText = "";
					$("#data_"+i+"_7").checked = false;
					$("#data_"+i+"_7")[0].disabled  = true;
				}
				//清空每一行样式
				$("#page7_contacts_show tr:nth-child(odd):not(:first-child)").css('background-color','#f2f2f2');
				$("#page7_contacts_show tr:nth-child(even):not(:last-child)").css('background-color','#cccccc');
				console.log(json.contact);
				for (var i = 1; i <= Math.min(json.length,10*(_page7_page.value))-10*(_page7_page.value-1); i++) {
					$("#data_"+i+"_1")[0].innerText = i;
					$("#data_"+i+"_2")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_name;
					$("#data_"+i+"_3")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_office_numbe;
					$("#data_"+i+"_4")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_mobile_number;
					$("#data_"+i+"_5")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_other_numbe;
					if (json.contact[i+10*(_page7_page.value-1)].page7_add_group == "1") {
						$("#data_"+i+"_6")[0].innerText = "本地联系人";
					} else if (json.contact[i+10*(_page7_page.value-1)].page7_add_group == "0") {
						$("#data_"+i+"_6")[0].innerText = "黑名单";
					} else{
						$("#data_"+i+"_6")[0].innerText = json.contact[i].page7_add_group;
					}
					$("#data_"+i+"_7")[0].disabled  = false;
				}
			}
		});
	});
});

//点击前页
$(document).ready(function(){
	$("#page7_prev_page").click(function(){
		//如果该行存在联系人信息
		$.post("php/page7_page_select.php",
		{
			page7_group:_page7_group1.value
		},
		function(data,status){
			var json = JSON.parse(data);
			var min_index = $("#page7_page :first")[0].value;
			var max_index = $("#page7_page :last")[0].value;
			var rst_index = $("#page7_page")[0].value;
			if (rst_index == min_index) {
				alert("这是第一页！");
			} else {
				$("#page7_page")[0].value--;
				//清空表格
				for (var i = 1; i <= 10; i++) {
					//console.log(json.contact[i]);
					$("#data_"+i+"_1")[0].innerText = "";
					$("#data_"+i+"_2")[0].innerText = "";
					$("#data_"+i+"_3")[0].innerText = "";
					$("#data_"+i+"_4")[0].innerText = "";
					$("#data_"+i+"_5")[0].innerText = "";
					$("#data_"+i+"_6")[0].innerText = "";
					$("#data_"+i+"_7").checked = false;
					$("#data_"+i+"_7")[0].disabled  = true;
				}
				//清空每一行样式
				$("#page7_contacts_show tr:nth-child(odd):not(:first-child)").css('background-color','#f2f2f2');
				$("#page7_contacts_show tr:nth-child(even):not(:last-child)").css('background-color','#cccccc');
				console.log(json.contact);
				for (var i = 1; i <= Math.min(json.length,10*(_page7_page.value))-10*(_page7_page.value-1); i++) {
					$("#data_"+i+"_1")[0].innerText = i;
					$("#data_"+i+"_2")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_name;
					$("#data_"+i+"_3")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_office_numbe;
					$("#data_"+i+"_4")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_mobile_number;
					$("#data_"+i+"_5")[0].innerText = json.contact[i+10*(_page7_page.value-1)].page7_other_numbe;
					if (json.contact[i+10*(_page7_page.value-1)].page7_add_group == "1") {
						$("#data_"+i+"_6")[0].innerText = "本地联系人";
					} else if (json.contact[i+10*(_page7_page.value-1)].page7_add_group == "0") {
						$("#data_"+i+"_6")[0].innerText = "黑名单";
					} else{
						$("#data_"+i+"_6")[0].innerText = json.contact[i].page7_add_group;
					}
					$("#data_"+i+"_7")[0].disabled  = false;
				}
			}
		});
	});
});

//点击全部删除联系人
page7_delete_all = document.getElementById('page7_delete_all');
page7_delete_all.onclick = function(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	if(json.flag == "1"){
        		alert("删除成功！");
        	}else if(json.flag == "0"){
        		alert("删除失败！");
        	}
        	//console.log(xhr.responseText);
        }
    }
    var data = 'flag='+"0";
    var url = 'php/page7_delete_all.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}

//点击删除联系人
$(document).ready(function(){
	$("#page7_delete").click(function(){
		//确定选中的联系人
		if($("#page7_contacts_show input:checkbox:not(:first):checked").length == 0){
			alert("请选择要删除的联系人！");
		}else{
			//获取选择的联系人姓名
			var length = $("#page7_contacts_show input:checkbox:not(:first):checked").parent().parent().length;
			var name = Array();
			for (var i = 0; i < length; i++) {
				name[i] = $("#page7_contacts_show input:checkbox:not(:first):checked").parent().parent()[i].children[1].innerText;
			}

			$.post("php/page7_contact_delete.php",
			{
				page7_name:name
			},
			function(data,status){
				var json = JSON.parse(data);
				if(json.flag == "1"){
	        		alert("删除成功！");
	        	}else if(json.flag == "0"){
	        		alert("删除失败！");
	        	}
			});
		}
	});
});

//点击移动联系人
$(document).ready(function(){
	$("#page7_move_to").click(function(){
		//确定选中的联系人
		if($("#page7_contacts_show input:checkbox:not(:first):checked").length == 0){
			alert("请选择要移动的联系人！");
		}else {
			//获取选择的联系人姓名
			var length = $("#page7_contacts_show input:checkbox:not(:first):checked").parent().parent().length;
			var name = Array();
			for (var i = 0; i < length; i++) {
				name[i] = $("#page7_contacts_show input:checkbox:not(:first):checked").parent().parent()[i].children[1].innerText;
				console.log(name[i]);
			}
			$.post("php/page7_contact_move.php",
			{
				page7_group_move:_page7_group2.value,
				page7_name:name
			},
			function(data,status){
				var json = JSON.parse(data);
				if(json.flag == "1"){
	        		alert("移动成功！");
	        		window.location.reload();
	        	}else if(json.flag == "0"){
	        		alert("移动失败！");
	        	}
			});
		}
	});
});


//点击添加群组
page7_group_add = document.getElementById('page7_group_add');
page7_group_add.onclick = function(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	if(json.flag == "1"){
        		alert("保存成功！");
        	}else if(json.flag == "0"){
        		alert("保存失败！");
        	}else if(json.flag == "-1"){
        		alert("组名为空！");
        	}else if(json.flag == "-2"){
        		alert("组名存在！");
        	}
        	//console.log(xhr.responseText);
        }
    }
    var data = 'flag='+"0"
    			+'&page7_group='+_page7_group.value
    			+'&page7_group_ring_tone='+_page7_group_ring_tone.value;
    var url = 'php/page7_group_add.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}

//点击编辑群组
$(document).ready(function(){
	$("#page7_group_edit").click(function(){
		$.post("php/page7_group_edit.php",
		{
			page7_group_old:_page7_group1.value,
			page7_group_new:_page7_group.value,
			page7_group_ring_tone:_page7_group_ring_tone.value
		},
		function(data,status){
			var json = JSON.parse(data);
			if(json.flag == "1"){
        		alert("编辑成功！");
        	}else if(json.flag == "0"){
        		alert("编辑失败！");
        	}else if(json.flag == "-2"){
        		alert("新组名为空！");
        	}
		});
	});
});

//点击删除群组
$(document).ready(function(){
	$("#page7_group_delete").click(function(){
		$.post("php/page7_group_delete.php",
		{
			page7_group:_page7_group.value
		},
		function(data,status){
			var json = JSON.parse(data);
			if(json.flag == "1"){
        		alert("删除成功！");
        	}else if(json.flag == "0"){
        		alert("删除失败！");
        	}else if(json.flag == "-2"){
        		alert("要删除的组名为空！");
        	}else if(json.flag == "-3"){
        		alert("要删除的组名不存在！");
        	}
		});
	});
});

//点击全部删除群组
page7_group_delete_all = document.getElementById('page7_group_delete_all');
page7_group_delete_all.onclick = function(){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status == 200){
        	var json = JSON.parse(xhr.responseText);
        	if(json.flag == "1"){
        		alert("删除成功！");
        	}else if(json.flag == "0"){
        		alert("删除失败！");
        	}
        	//console.log(xhr.responseText);
        }
    }
    var data = 'flag='+"0";
    var url = 'php/page7_group_delete_all.php';
    xhr.open('post',url,true);

    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');

    xhr.send(data);
    return false;
}

/*------联系人导入部分----------*/

function page7_xml_select(){
	_page7_xml_select.click();
}

//点击确定选择文件
function page7_xml_select_change(file){
	if (_page7_xml_select.value) {
		_page7_xml_show.value = _page7_xml_select.value;
		file_1 = file.files[0];
	}else{
		_page7_xml_show.value = "";
	}
}

//点击导入xml
_page7_import_xml.onclick = function(){
	if(_page7_xml_select.files[0] && _page7_xml_show.value){
		var form = new FormData();
		form.append('page7_xml_select',_page7_xml_select.files[0]);

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
	    var url = 'php/page7_import_xml.php';
	    xhr.open('post',url,true);
	    xhr.send(form);
	    return false;
	}else{
		alert("未选择文件！");
	}
}

//点击删除群组
$(document).ready(function(){
	$("#page7_export_xml").click(function(){
		$.post("php/page7_export_xml.php",
		{
		},
		function(data,status){
			var json = JSON.parse(data);

		});
	});
});

