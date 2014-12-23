// 嵌套回调
http.get(url.parse("http://example.org/"), function (res) {
    console.log(res.statusCode);  // maybe 302
    http.get(url.parse(res.headers["location"]), function (res) {
        console.log(res.statusCode);  // maybe 200
    });
});

// using-promise.js
httpGet(url.parse("http://example.org/")).then(function (res) {
    console.log(res.statusCode);  // maybe 302
    return httpGet(url.parse(res.headers["location"]));
}).then(function (res) {
    console.log(res.statusCode);  // maybe 200
});


// using-promise.js
var httpGet = function (opts) {
     var deferred = Q.defer();
     http.get(opts, deferred.resolve);
     return deferred.promise;
};


