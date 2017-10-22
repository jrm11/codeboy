<?php
    /*
        @author:jianrongming
        @data:
    */
    header("Content-Type:application/json;charset=utf-8");
    require('../init.php');
    $output =[];

    //查询首页推荐商品按seq_recommended 升序 一页显示六行
    $sql = "SELECT * FROM xz_index_product WHERE seq_recommended > 0 order by seq_recommended limit 6";
    $list["f1"] = sql_execute($sql);

    //查询最新上架商品按seq_new_arriva 升序 一页显示六行
    $sql = "SELECT * FROM xz_index_product WHERE seq_new_arrival > 0 order by seq_new_arrival limit 6";
    $list["f2"] = sql_execute($sql);

    //查询热销单品商品按 seq_top_sale 升序 一页显示六行
    $sql = "SELECT * FROM xz_index_product WHERE seq_top_sale > 0 order by seq_top_sale limit 6";
    $list["f3"] = sql_execute($sql);

    echo json_encode($list);

 ?>
