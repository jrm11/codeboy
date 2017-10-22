<?php
	$name = $_REQUEST['uname'];
	// $pwd = md5($_REQUEST['upwd']);
	// $pwd=$_REQUEST;
	// $pwd['upwd']=md5($_REQUEST['upwd']);
	$pwd=$_REQUEST['upwd'];
	$headPic = $_REQUEST['headePic'];
	//检查输入错误

	require('checkError.php');
	checkError($name);
	checkError($pwd);
	checkError($headPic);

	require('init.php');
	//插入数据
	$addUserSql = "INSERT INTO user VALUES(null,'$name','$pwd','$headPic',null,null)";
	//执行sql
	$addUserResult = mysqli_query($conn,$addUserSql);

	//结果处理
	if($addUserResult){
		echo "注册成功<br>";
	}else{
		echo "注册失败<br>$conn->error";
	}

	//关闭数据库
	$conn->close();
?>
