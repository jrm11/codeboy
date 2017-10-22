<?php
    header("Content-Type:application/json; CHARSET = UTF8");
    @$lid = $_REQUEST['lid'];
    $output = [];
    require_once("../init.php");
    if($lid){
        // 查询所有笔记本电脑
        $sql = "select * from xz_laptop where lid = $lid";
        $output["laptop"] = sql_execute($sql)[0];
        // 根据笔记本的Id 查询笔记本的图片
        $sql = "select * from xz_laptop_pic where laptop_id = $lid";

        $output['laptop']['pic'] = sql_execute($sql);
        // var_dump($output);
        $fid = $output["laptop"]["family_id"];
        // 根据笔记本电脑型号的id查询笔记本电脑型号
        $sql = "select  fid,fname from xz_laptop_family where fid = $fid";
        $output["family"] = sql_execute($sql)[0];
        // 根据笔记本电脑型号的id查询笔记本电脑规格
        $sql = "select lid,spec from xz_laptop where family_id = $fid";
        $output["family"]["laptop_list"] = sql_execute($sql);
        // var_dump($output);
        echo json_encode($output);
    }else{
        echo "[]";
    }
