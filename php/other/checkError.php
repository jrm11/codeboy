<?php
	//检查输入错误
	function checkError($str){
		if($str === null || $str ===""){
			die ("$str 某些字段不能为空<br>");
		}
	}

?>
