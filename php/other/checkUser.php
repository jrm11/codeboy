<?php
    header("Content-Type:application/json;charset=utf-8");

    require('init.php');

    $sql = "SELECT * FROM user";

    $result = mysqli_query($conn,$sql);
    $array = mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($array);
 ?>
