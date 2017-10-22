<?php
	$name = $_REQUEST['uname'];
	$pwd = $_REQUEST['upwd'];
	
	require('init.php');
	
	// $userSelectSql = "SELECT uname as 姓名,upwd as 密码, headePic as 头像, regTime as 登录时间, loginCount as 登录次数 FROM user";
	$userSelectSql = "SELECT * FROM user";
	$userSelectRsult = mysqli_query($conn,$userSelectSql);
	if($userSelectRsult){
		$rowList = mysqli_fetch_all($userSelectRsult,MYSQLI_ASSOC);
		foreach ($rowList as $key => $value) {
				echo $key."<hr>";
				echo "用户名：$value[uname]<br>";
				echo "密码：$value[upwd]<br>";
				echo "头像：$value[headePic]<br>";
				echo "注册时间：$value[regTime]<br>";
		}
		// foreach($rowList as $val){
		// 	foreach($val as $k=>$v){
		// 		echo "$k::$v";
		// 		echo "<br>";
		// 	}
		// 	echo "<hr>";
		// }
	}else{
		echo "查询失败<br>$conn->error";
	}
	$conn->close();

?>