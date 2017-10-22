// ajax加载头部页面
(function() {
    ajax("get", "header.html", "", "text").then(function(html) {
        document.getElementById("js-header").innerHTML = html;
        // 获取搜索按钮
        var btnSearch = document.getElementsByClassName("js-btn-search")[0];
        // EventUtil.addHander(btnSearch, 'click', function() {
        btnSearch.onclick = function(){
            console.log("按钮被点击了");
            //获取输入框输入的值
            var keywords = document.getElementById("js-search-txt").value;
            // console.log(keywords);
            // debugger;
            // 将输入的关键字传到product.html页面
            if (keywords.trim().length != 0) {
                var url = "http://localhost:8088/codeboy/html/product.html?keywords="
                 + keywords;
                location = url;
            }
        };
    });
})();
