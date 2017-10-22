<?php
    header("Content-Type:text/plain;charset=utf-8");
    $name = $_REQUEST['uname'] or die("uname");
    @$salary =  $_REQUEST['salary'] or die("salary");
    @$birthday =  $_REQUEST['birthday'] or die("birthday");
    @$sex = $_REQUEST['sex'] or die("sex");
    require('init.php');

    $addUserSql = "INSERT INTO user VALUES(null,'$name','$salary','$birthday','$sex',null)";
    $addUserResult = mysqli_query($conn,$addUserSql);

	//结果处理
	if($addUserResult){
		echo "succ";
	}else{
		echo "err$conn->error";
	}

	//关闭数据库
	$conn->close();
 ?>
