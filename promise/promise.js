var val=1;
// 我们假设step1, step2, step3都是ajax调用后端或者是
// 在Node.js上查询数据库的异步操作
// 每个步骤都有对应的失败和成功处理回调
// 需求是这样，step1、step2、step3必须按顺序执行
function step1(resolve, reject) {
    console.log('步骤一：执行');
    if (val >= 1) {
        resolve('Hello I am No.1');
    } else if (val === 0) {
        reject(val);
    }
}

function step2(resolve, reject) {
    console.log('步骤二：执行');
    if (val === 1) {
        resolve('Hello I am No.2');
    } else if (val === 0) {
        reject(val);
    }
}

function step3(resolve, reject) {
    console.log('步骤三：执行');
    if (val === 1) {
        resolve('Hello I am No.3');
    } else if (val === 0) {
        reject(val);
    }
}
var p=new Promise(step1)

var op=p
    .then(function(val) {
        console.info(val);
        return new Promise(step2);
    }).then(function(val) {
        console.info(val);
        return new Promise(step3);
    }).then(function(val) {
        console.info(val);
        return val;
    }).then(function(val) {
        console.info(val);
        return val;
    });

/*
function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };


    
get('story.json')
.then(function(response) {
    return JSON.parse(response);
}).then(function(response) {
    console.log("Yey JSON!", response);
});
*/
