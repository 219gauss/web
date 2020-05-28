/**
 *	导航栏功能
 */
	//标签页
	tab_1 = document.getElementById("tab_1");
	tab_2 = document.getElementById("tab_2");
	tab_3 = document.getElementById("tab_3");

	//主要内容
	content_1 = document.getElementById("one_1");
	content_2 = document.getElementById("two_2");
	content_3 = document.getElementById("three_3");




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

