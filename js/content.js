/**
 *	导航栏功能
 */
	//标签页
	tab_1 = document.getElementById("tab_1");
	tab_2 = document.getElementById("tab_2");
	tab_3 = document.getElementById("tab_3");
	tab_4 = document.getElementById("tab_4");
	tab_5 = document.getElementById("tab_5");
	tab_6 = document.getElementById("tab_6");
	tab_7 = document.getElementById("tab_7");
	tab_8 = document.getElementById("tab_8");

	//主要内容
	content_1 = document.getElementById("one_1");
	content_2 = document.getElementById("two_2");
	content_3 = document.getElementById("three_3");
	content_4 = document.getElementById("four_4");
	content_5 = document.getElementById("five_5");
	content_6 = document.getElementById("six_6");
	content_7 = document.getElementById("seven_7");
	content_8 = document.getElementById("eight_8");




	//超时处理
	/*lastTime = new Date().getTime();
    currentTime = new Date().getTime();
    timeOut = 10 * 1000; //设置超时时间： 10秒

    function mouseover(){
    	lastTime = new Date().getTime(); //更新操作时间
    }

    //定时器  间隔1秒检测是否长时间未操作页面
    time = window.setInterval(testTime, 1000);

    function testTime(){
        currentTime = new Date().getTime(); //更新当前时间
        if(currentTime - lastTime > timeOut){ //判断是否超时
        	window.clearInterval(time);
        	alert("登录超时，请重新登录！");
        	window.location.href='index.html';
            }
    }*/

	function logout() {
		window.location.href='index.html';
	}

