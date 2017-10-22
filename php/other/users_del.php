<?php
	$id = $_REQUEST['uid'];
	//检查输入错误
	
	require('checkError.php');
	checkError($id);

	require('init.php');
	//删除数据
	$delUserSql = "DELETE FROM user WHERE uid = $id";
	//执行sql
	$delUserResult = mysqli_query($conn,$delUserSql);

	//结果处理
	if($delUserResult){
		echo "删除成功<br>";
	}else{
		echo "删除失败<br>$conn->error";
	}

	//关闭数据库
	$conn->close();
?>