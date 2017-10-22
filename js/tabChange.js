/**
 * Created by Administrator on 2018/3/2.
 */

// 主页tab切换
var list = null;
var tabList = null;

window.onload = function () {
    list = document.querySelectorAll('.list');
    tabList = document.querySelectorAll('.tab');
    init();
};
//初始化方法
function init() {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].index = i;
        list[i].addEventListener('click', tabChange);
    }
}
// tab切换方法
function tabChange(){
    for (var i = 0, len = list.length; i < len; i++) {
        tabList[i].style.display = "none";
    }
    tabList[this.index].style.display = "block";

}
