// ajax加载页脚页面
(function(){
    ajax("get","footer.html","","text").then(function (html) {
        document.getElementById("js-footer").innerHTML = html;
    });
})();
