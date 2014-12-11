/**
 *  通过Mustache来渲染一个模板
 */

//获取团单基本信息
$.get('getDealBasicInfoUrl', function(data1) {
    //do somthing ...

    //获取团单优惠价格
    $.get('getDealPriceUrl', function(data2) {
            //do somthing ...

            //获取团单标签（立减，免费领，秒杀）
            $.get('getDealTagUrl', function(data3) {
                    //合并3个数据
                    var data = mixAllData(data1, data2, data3);
                    //渲染
                    $('.deal').html(Mustache.render(template, data);
                    })
            })
    })
});

/**
 *   通过计数器实现并行执行
 */

var count = 0;
var result = {};

$.get('getDealBasicInfoUrl', function(data) {
    result.data1 = data;
    count++;
    handle();
});
$.get('getDealPriceUrl', function(data) {
    result.data2 = data;
    count++;
    handle();
});
$.get('getDealTagUrl', function(data) {
    result.data3 = data;
    count++;
    handle();
});

function handle() {
    if (count === 3) {
         $('.deal').html(Mustache.render(template, data);
    }
}


/**
 * 使用eventproxy
 */

var ep = new eventproxy();

//注册事件
ep.all('basicInfo_event', 'price_event', 'tags_event', function(data1, data2, data3) {
     $('.deal').html(Mustache.render(template, data);
});

$.get('getDealBasicInfoUrl', function(data) {
    ep.emit('basicInfo_event', data);
});

$.get('getDealPriceUrl', function(data) {
    ep.emit('price_event', data);
});

$.get('getDealTagUrl', function(data) {
    ep.emit('tag_event', data);
});
