<?php
    header("Content-Type:application/json");
    require("../init.php");

    //查询广告区域
    $sql="SELECT * FROM xz_index_carousel";
    echo json_encode(sql_execute($sql));
 ?>
