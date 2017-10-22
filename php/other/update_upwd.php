<?php
	$id = $_REQUEST['uid'];
	$oldPwd = $_REQUEST['upwd'];
	$newPwd = $_REQUEST['unewpwd'];
	
	require('init.php');
	//按照姓名查询用户信息
	$userSelectSql = "SELECT * FROM user WHERE uid='$id' and upwd = '$oldPwd'";
	$userSelectRsult = mysqli_query($conn,$userSelectSql);
	
	//按照姓名修改用户密码
	$updateUserPwdSql = "UPDATE user SET upwd = '$newPwd' WHERE uid = '$id'";
	$updateUserPwdRsult = mysqli_query($conn,$updateUserPwdSql);

	if($userSelectRsult){
		$row = mysqli_fetch_assoc($userSelectRsult);
		if($row===null){
			echo "原始密码错误<br>$conn->error";
		}else{
			if($updateUserPwdRsult){
				echo "update succ<br>";
			}else{
				echo "update failed<br> $conn->error";
			}
		}
	}else{
		echo "查询失败<br>$conn->error";
	}

	$conn->close();

?>