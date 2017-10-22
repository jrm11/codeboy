<?php
    header("Content-Type:application/json");
    require_once("../init.php");
    $output = [
        "count"=>0,//产品总数
        "pageSize"=>9,//一页需显示的数量
        "pageCount"=>0,//总页数
        "pageNo"=>0,//当前的页数
        "data"=>[]//数据
    ];
    //获取输入的关键词
    //'kw'必须与product.js中的ajax("get", "../php/product/product.php?kw=" 一致否则会查询出全部数据
    @$kw = $_REQUEST['kw'];
    //获取当前的页数
    @$pno = $_REQUEST['pno'];

    if(!$pno){$pno = 0;}

    //按输入的关键字查询
    /*
        1.判断是否存在关键字如果存在
        2.按空格拆分关键字
        3.遍历所有的关键字
        4.把拆分的关键字拼接到"title like "中
        5.与"where and"拼接
        6.在拼接到sql语句中
        7.实现包含关键字的查询
    */
    // 注意sql语句必须写对 sql写错不会报错
    $sql="SELECT lid, title, price, (select md from xz_laptop_pic where laptop_id=lid limit 1) as md FROM xz_laptop";
    if($kw){
      $kws=explode(" ",$kw);//js:split
      for($i=0;$i<count($kws);$i++){
        $kws[$i]=" title like '%".$kws[$i]."%'";
      }
      $where=" where ".implode(" and ",$kws);//js:join
      $sql=$sql.$where;
    }
    $output["count"]=count(sql_execute($sql));
    $sql=$sql." limit ".($pno*$output["pageSize"])." ,".$output["pageSize"];//limit 0,9
    $result=sql_execute($sql);
    $output["pageCount"]=
      ceil($output["count"]/$output["pageSize"]);
    $output["pageNo"]=$pno;
    $output["data"]=$result;
    echo json_encode($output);
 ?>
