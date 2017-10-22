/**
 * Created by Administrator on 2018/3/1.
 */
// ajax加载首页推荐、最新上架、热销单品页面内容
function getTotalTop(ele) {
    var sum = 0;
    do {
        sum += ele.offsetTop;
        ele = ele.offsetParent;
    } while (ele);
    return sum;
}
(() => {
    var doc = document;
    ajax("get", "../php/index/index.php", "").then(output => {
        //   console.log('output===='+output);
        //根据规定的模板,动态生成f1的HTML代码片段
        var html = "";
        var html2 = "";
        var html3 = "";
        var f1 = output.f1;
        var f2 = output.f2;
        var f3 = output.f3;
        for (var i = 0; i < f1.length; i++) {
            var p = f1[i];
            if (i == 0) {
                html += `<div class="mb10 fix">
                  <div class="one-content bgcf move-hover">
                      <div class="one-txt">
                          <h2>${p.title}</h2>
                          <p class="details">${p.details}</p>
                          <p class="price">￥<span class="one-price ">${p.price}</span></p>
                          <a href="product-details.html" class="check-details">查看详情</a>
                      </div>
                      <img class="change one-img" src="../${p.pic}" title="${p.title}">
                  </div>`;
            } else if (i == 1) {
                html += `
                <div class="two-content bgcf move-hover">
                    <div class="two-txt">
                        <h2>${p.title}</h2>
                        <p class="details">${p.details}</p>
                        <p class="price">￥<span class="two-price ">${p.price}</span></p>
                        <a href="product-details.html" class="check-details">查看详情</a>
                    </div>
                    <img class="change two-img" src="../${p.pic}" title="${p.title}">
                    </div>
            </div>`;
            } else if (i == 2) {
                html += `
          <div class="fix">
              <div class="three-content bgcf move-hover">
                  <div class="three-txt">
                      <h3>${p.title}</h3>
                      <p class="price">￥<span class="four-price">${p.price}</span></p>
                      <a href="product-details.html" class="check-details">查看详情</a>
                  </div>
                  <img class="change three-img" src="../${p.pic}" title="${p.title}">
              </div>`;
            } else if (i > 2 && i < f1.length) {
                html += `
            <div class="four-content bgcf tac move-hover">
                <img class="change four-img" src="../${p.pic}" title="${p.title}">
                <div class="four-txt ">
                    <h5 class="pb10">${p.title}</h5>
                    <p class="price f18">￥<span class="two-price ">${p.price}</span></p>
                    <a href="product-details.html" class="check-details">查看详情</a>
                </div>
            </div>`;
            } else {
                html += `</div>`;
            }
        }

        for (var i = 0; i < f2.length; i++) {
            var p = f2[i];
            if (i == 0) {
                html2 += `<div class="mb10 fix">
                  <div class="one-content bgcf move-hover">
                      <div class="one-txt">
                          <h2>${p.title}</h2>
                          <p class="details">${p.details}</p>
                          <p class="price">￥<span class="one-price ">${p.price}</span></p>
                          <a href="product-details.html" class="check-details">查看详情</a>
                      </div>
                      <img class="change one-img" src="../${p.pic}" title="${p.title}">
                  </div>`;
            } else if (i == 1) {
                html2 += `
        <div class="two-content bgcf move-hover">
                <div class="two-txt">
                    <h2>${p.title}</h2>
                    <p class="details">${p.details}</p>
                    <p class="price">￥<span class="two-price ">${p.price}</span></p>
                    <a href="product-details.html" class="check-details">查看详情</a>
                </div>
                <img class="change two-img" src="../${p.pic}" title="${p.title}">
            </div>
        </div>`;
            } else if (i == 2) {
                html2 += `
          <div class="fix">
              <div class="three-content bgcf move-hover">
                  <div class="three-txt">
                      <h3>${p.title}</h3>
                      <p class="price">￥<span class="four-price">${p.price}</span></p>
                      <a href="product-details.html" class="check-details">查看详情</a>
                  </div>
                  <img class="change three-img" src="../${p.pic}" title="${p.title}">
              </div>`;
            } else if (i > 2 && i < f1.length) {
                html2 += `
            <div class="four-content bgcf tac move-hover">
                <img class="change four-img" src="../${p.pic}" title="${p.title}">
                <div class="four-txt ">
                    <h5 class="pb10">${p.title}</h5>
                    <p class="price f18">￥<span class="two-price ">${p.price}</span></p>
                    <a href="product-details.html" class="check-details">查看详情</a>
                </div>
            </div>`;
            } else {
                html2 += `</div>`;
            }
        }

        for (var i = 0; i < f3.length; i++) {
            var p = f3[i];
            if (i == 0) {
                html3 += `<div class="mb10 fix">
                  <div class="one-content bgcf move-hover">
                      <div class="one-txt">
                          <h2>${p.title}</h2>
                          <p class="details">${p.details}</p>
                          <p class="price">￥<span class="one-price ">${p.price}</span></p>
                          <a href="product-details.html" class="check-details">查看详情</a>
                      </div>
                      <img class="change one-img" src="../${p.pic}" title="${p.title}">
                  </div>`;
            } else if (i == 1) {
                html3 += `
        <div class="two-content bgcf move-hover ">
                <div class="two-txt">
                    <h2>${p.title}</h2>
                    <p class="details">${p.details}</p>
                    <p class="price">￥<span class="two-price ">${p.price}</span></p>
                    <a href="product-details.html" class="check-details">查看详情</a>
                </div>
                <img class="change two-img" src="../${p.pic}" title="${p.title}" >
            </div>
        </div>`;
            } else if (i == 2) {
                html3 += `
          <div class="fix">
              <div class="three-content bgcf move-hover">
                  <div class="three-txt">
                      <h3>${p.title}</h3>
                      <p class="price">￥<span class="four-price">${p.price}</span></p>
                      <a href="product-details.html" class="check-details">查看详情</a>
                  </div>
                  <img class="change three-img" src="../${p.pic}" title="${p.title}">
              </div>`;
            } else if (i > 2 && i < f1.length) {
                html3 += `
            <div class="four-content bgcf tac move-hover">
                <img class="change four-img" src="../${p.pic}" title="${p.title}">
                <div class="four-txt ">
                    <h5 class="pb10">${p.title}</h5>
                    <p class="price f18">￥<span class="two-price ">${p.price}</span></p>
                    <a href="product-details.html" class="check-details">查看详情</a>
                </div>
            </div>`;
            } else {
                html3 += `</div>`;
            }
        }
        doc.getElementById("f1-content").innerHTML = html;
        doc.getElementById("f2-content").innerHTML = html2;
        doc.getElementById("f3-content").innerHTML = html3;
        console.log("===="+getTotalTop(doc.getElementById("f1-content")));
    });
})();
