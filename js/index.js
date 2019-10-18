$(function () {
    var items = $("#carousel-example-generic").find(".item");

    $(window).on("resize", function () {
        var windowWidth = $(this).width();
        /* 重置样式 */
        // items.each(function (index,ele) {
        //     var item = $(ele);
        //    item.empty();
        //    console.log(item[0]);

        // });
        /* 由于 imgMobile存在高度，因此最好不同分辨率下插入a标签*/
        if (windowWidth >= 768) { //非移动端
            items.each(function (index, ele) {
                var item = $(ele);
                var imgSrc = item.data("largeImg");
                var aTag = "<a href='javascript:;' class='imgPC'/>"

                item.html($(aTag).css("background-image", "url('" + imgSrc + "')")[0]);
            })
        }
        if (windowWidth < 768) { //移动端
            items.each(function (index, ele) {
                var item = $(ele);
                var imgSrc = item.data("smallImg");
                console.log(imgSrc);

                //<img src="./images/slide_01_640x340.jpg" alt="...">
                var aTag = "<a href='javascript:;' class='imgMobile'>                <img src='" + imgSrc + "'>                </a>";
                item.html(aTag)
            })
        }

    });
    $(window).trigger("resize");

    /* 滑动操作 */
    var carouselDom = $(".carousel-inner")[0];
    var startX,endX;
    carouselDom.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
    });
    carouselDom.addEventListener("touchend",function(e){
        endX = e.changedTouches[0].clientX;
        var distance = endX - startX;
        // console.log(distance);
        
        if(distance>0) {//往右划
            $('.carousel').carousel("prev");
        }else{//往左划
            $('.carousel').carousel("next");
        }
    });

    //初始化ul块长度信息
    var wjs_product_url = $(".wjs_product ul");
    var ulWidth = 0;
    wjs_product_url.find("li").each(function(index,ele){
        // console.log($(ele).outerWidth(true));
        ulWidth = ulWidth+$(ele).outerWidth(true);
    });
    wjs_product_url.width(ulWidth);
    var myScroll = new IScroll('.wjs_product_wrapper',{
        scrollX: true, 
        scrollY: false
    });

    //初始化 工具提示 插件
    $('[data-toggle="tooltip"]').tooltip();
   
});