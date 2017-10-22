function pageLoad(pno = 0) {
    //获取header中的url中的关键词
    var kw = location.search.split("=")[1] || "";
    // console.log(decodeURI(kw));
    ajax("get", "../php/product/product.php?kw=" + kw + "&pno=" + pno, "").then(output => {
        var data = output.data;
        // console.log(data.length);
        var showList = document.getElementById("js-show-list");
        if (data.length == 0) {
            // var showList = document.getElementById("js-show-list");
            showList.innerHTML = `<div class="no-product">您搜索的商品不存在</div>`;
        } else {
            var html = "";
            for (var p of data) {
                html += `
            <li>
                <div class="item-product">
                    <a href="05-product-details.html?lid=${p.lid}" title="${p.title}">
                      <img src="../${p.md}">
                    </a>
                    <!--价格-->
                    <p class="product-price tal">¥${p.price}</p>
                    <!--产品描述-->
                    <p class="product-txt tal">
                        <a href="05-product-details.html?lid=${p.lid}">${p.title}</a>
                    </p>
                    <!--操作-->
                    <p class="tal fix">
                        <input type="button" class="price-minus" value="-">
                        <input type="text" class="price-num" value="1">
                        <input type="button" class="price-plus" value="+">
                        <button class="btn-join-buy-car">加入购物车</button>
                    </p>
                </div>
            </li>`;
            }
            showList.innerHTML = html;
        }
        showNum();
        showPages(output)
    });
}
pageLoad();
// 显示页码
function showPages(output) {
    /*
        @pageCount 总页数
        @pageNo    当前页
    */

    var pageCount = output.pageCount,
        pageNo = output.pageNo,
        pageSize = output.pageSize;

    var lis = "";
        for (var i = 0; i < pageCount; i++) {
            lis += (i != pageNo ?
                `<a type="button" href="javascript:;" class="page-num js-num">${i+1}</a>` :
                `<a type="button" href="javascript:;" class="page-num current js-num">${i+1}</a>`);
        }

    var html = `
        <a type="button" href="javascript:;" class="previous">上一页</a>
            ${lis}
        <a type="button" href="javascript:;" class="next">下一页</a>
        <a type="button" href="javascript:;">共${pageCount}页</a>
        `;

    var divPages = document.getElementById("js-pages");
    divPages.innerHTML = html;

    if (pageNo == 0) {
        // 如果当前为第一页那么上一页的按钮禁用
        divPages.firstElementChild.className = "previous disabled";
    } else if (pageNo == pageCount - 1) {
        //如果当前页为最后一页那么下一页按钮禁用
        divPages.lastElementChild.className = "next disabled";
    } else {
        //否则按钮可以点击
        divPages.firstElementChild.className = "previous";
        divPages.lastElementChild.className = "next";
    }

    //找到divPages下除.previous和.next之外的剩余as
    // var as = document.querySelectorAll(".js-num");
    // var prev = document.querySelector('.previous');
    // var next = document.querySelector('.next');
    // var next = divPages.lastElementChild;
    //遍历as中每个a
    // for (let i = 0, len = as.length; i < len; i++) {
    //     as[i].onclick = function() {
    //
    //         // 先把所有的按钮背景设置为原始颜色
    //         for (let i = 0, len = as.length; i < len; i++) {
    //             as[i].className = "";
    //         }
    //
    //         // 当前点击的按钮添加背景色
    //         as[i].className = "current";
    //         pageLoad(as[i].innerHTML - 1);
    //     }
    // }

    // var curr = divPages.querySelector(".current");
    // prev.addEventListener("click", function() {
    //     pageLoad(curr.innerHTML - 2);
    // });
    //
    // next.addEventListener("click", function() {
    //     pageLoad(curr.innerHTML);
    // });
    // 事件委托实现点击分页
    divPages.onclick = function(e){
        var tar  = e.target;
        if(!isNaN(tar.innerHTML)){
            pageLoad(tar.innerHTML-1);
        }
    }
    // prev.onclick = next.onclick = function(){
    //     // 如果当前点击的按钮没禁用
    //     if(this.className.indexOf("disabled")==-1){
    //         // 找到当前的按钮的类
    //         var curr = divPages.querySelector(".current");
    //         // 如果点击的是上一页
    //         if(this==divPages.children[0]){
    //             pageLoad(curr.innerHTML-2);
    //         }else{
    //             pageLoad(curr.innerHTML);
    //         }
    //     }
    // }

}

function showNum() {
    var spans = document.querySelectorAll(
        ".price-minus,.price-plus"
    );

    for (let i = 0; i < spans.length; i++) {
        spans[i].onclick = function() {
            //this->span
            var input = this.parentNode.children[1];
            if (this.className == "price-plus") {
                input.value++;
            } else if (n > 1) {
                input.value--;
                input.value = input.value;
            }
        }
    }
}
