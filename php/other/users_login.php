<?php
	session_start();

	require('init.php');
	// $action = $_GET['action'];
	// if($action == 'login'){
	$name =$_REQUEST['uname'];
	$pwd =$_REQUEST['upwd'];
		// $name =stripslashes(trim($_POST['uname']));
		// $pwd =stripslashes(trim($_POST['upwd']));
		if(empty($name)){
			echo "用户名不能为空";
			exit;
		}
		if(empty($pwd)){
			echo "密码不能为空";
			exit;
		}
	// }
	$userSelectSql = "SELECT * FROM user WHERE uname='$name' and upwd = '$pwd'";
	$userSelectRsult = mysqli_query($conn,$userSelectSql);
	if($userSelectRsult){
		$row = mysqli_fetch_assoc($userSelectRsult);
		if($row=== null){
			exit('登录失败！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试');
			// echo "用户名或密码错误$conn->error";
		}else{
			$count = 0;
			$updateSql = "UPDATE user SET loginCount = (++$count) WHERE uname ='$name'";
			$updateSqlResult = mysqli_query($conn,$updateSql);
			if($updateSqlResult){
				//echo "登录成功<br>";
    			echo $name."欢迎你！<meta http-equiv='refresh' content='0;url=../html/index.html'/>";
			}else{
				//echo "登录失败$conn->error";
				exit('登录失败！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试');
			}
		}
	}else{
		echo "查询失败<br>$conn->error";
	}

	$conn->close();

?>
