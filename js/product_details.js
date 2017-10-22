(() => {
    let lid = location.search.split("=")[1];
    if (lid !== undefined) {
        ajax("get", "../php/products_details/details.php?lid=" + lid, "").then(data => {
            let doc = document,
                laptop = data.laptop,
                family = data.family,
                picList = laptop.pic;
            // console.log(family.laptop_list);
            loadImg(doc, picList);
            loadDetailsMsg(doc, laptop);
            loadSpec(family, laptop, doc);
            magnifier(doc, picList);

        });
    }

    // 加载大、中、小图片
    function loadImg(doc, picList) {
        // console.log("==="+picList.length);
        let picListLen = picList.length;
        let html = "";
        // 小图id
        let smallImg = doc.querySelector("#js-small-img");
        // 中图id
        let mdImg = doc.querySelector("#js-md-img");
        // 大图id
        let lgImg = doc.querySelector("#js-lg-img");
        // console.log(laptop.pic[0].md);
        // 加载中图
        mdImg.src = `../${picList[0].md}`;
        // 加载大图
        lgImg.style.backgroundImage = `url(../${picList[0].lg})`;
        // console.log(picList.length);
        // 加载小图列表
        for (let list of picList) {
            html += `<li class="i1">
                        <img src="../${list.sm}" data-md="${list.md}" data-lg="${list.lg}">
                    </li>`;
        }
        smallImg.innerHTML = html;

        smallImg.style.width = picListLen * 80 + "px";
    }


    /*加载右上角商品基本信息*/
    function loadDetailsMsg(doc, laptop) {
        let detailsTitle = doc.querySelector(".product-details-title");
        let detailsSubTitle = doc.querySelector(".product-details-sub-title");
        let buyPrice = doc.querySelector(".buy-price");
        let promise = doc.querySelector(".promise");

        detailsTitle.innerHTML = laptop.title;
        detailsSubTitle.innerHTML = laptop.subtitle;
        buyPrice.innerHTML = "￥" + laptop.price;
        promise.innerHTML = laptop.promise;
    }


    // 加载产品规格信息
    function loadSpec(family, laptop, doc) {
        let html = '';
        let specLis = doc.querySelector(".specList");
        //遍历当前系列下的商品列表
        for (let specList of family.laptop_list) {
            if (specList.lid != laptop.lid) {
                html += `<a href="../html/product-details.html?lid=${specList.lid}" class="product-details-spec">${specList.spec}</a>`;
            } else {
                html += `<a href="../html/product-details.html?lid=${specList.lid}" class="product-details-spec active">${specList.spec}</a>`;
            }
        }
        specLis.innerHTML = html;
    }

    // 放大镜效果
    function magnifier(doc, picList) {
        // 上一页
        let smallImg = doc.querySelector("#js-small-img");
        let btnPrev = doc.querySelector(".prev");
        // 下一页
        let btnNext = doc.querySelector(".next");
        let moved = 0;
        const LIWIDTH = 80; //定义变量
        btnPrev.addEventListener("click", function() {
            // console.log(picList.length);
            moved--;
            move(picList);
            // console.log(smallImg.style.left);
        });

        btnNext.addEventListener("click", function() {
            // console.log("下一页");
            moved++;
            move(picList);
            // console.log(smallImg.style.left);
        });

        function move(picList) {

            smallImg.style.left = -moved * LIWIDTH + "px";
            // console.log(picList.length);
            if (picList.length - moved == 5) {
                console.log(moved);
                btnNext.disabled = true;
                btnNext.style.background = "#e0e0e0";
            } else if (moved == 0) {
                console.log(moved);
                btnPrev.disabled = true;
                btnPrev.style.background = "#e0e0e0";
            } else {
                btnNext.disabled = false;
                btnPrev.disabled = false;
                btnNext.style.background = "#0099ff";
                btnPrev.style.background = "#0099ff";
            }
        }
    }

})();
