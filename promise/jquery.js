$.ajax({
　　　　url: "test.html",
　　　　success: function(){
　　　　　　alert("哈哈，成功了！");
　　　　},
　　　　error:function(){
　　　　　　alert("出错啦！");
　　　　}
　　});

$.ajax("test.html")
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });


$.ajax("test.html")
　　.done(function(){ alert("哈哈，成功了！");} )
　　.fail(function(){ alert("出错啦！"); } )
　　.done(function(){ alert("第二个回调函数！");} );


//deferred对象的另一大好处，就是它允许你为多个事件指定一个回调函数，这是传统写法做不到的。
$.when($.ajax("test1.html"), $.ajax("test2.html"))
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });


var dtd = $.Deferred(); // 新建一个Deferred对象
　　var wait = function(dtd){
　　　　var tasks = function(){
　　　　　　alert("执行完毕！");
　　　　　　dtd.reject(); // 改变Deferred对象的执行状态
　　　　};
　　　　setTimeout(tasks,5000);
　　　　return dtd;
　　};
　　$.when(wait(dtd))
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); })


//与Promise A+规格的差异
//上面代码在回调函数中抛出一个错误，Promise A+规定此时Promise实例的状态变为reject，该错误被下一个catch方法指定的回调函数捕获。但是，jQuery的Deferred对象此时不会改变状态，亦不会触发回调函数，该错误一般情况下会被window.onerror捕获。换句话说，在Deferred对象中，总是必须使用reject方法来改变状态。
var promise2 = promise1.then(function () {
    throw new Error("boom!");
});
