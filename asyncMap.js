var asyncMap = function(tasks, cb) {
  var results = [];
  var finished = tasks.length;
  var count = 0;

  for (var i = 0; i < tasks.length; i++) {
    (function(index) {
      tasks[index](function(val) {
        results[index] = val;
        count++;
        if (count === tasks.length) {
          cb(results);
        }
      });
    })(i);
  }

  // tasks.forEach(function(task, i) {
  //   task(function(result) {
  //     results[i] = result;
  //     if (--finished === 0) {
  //       cb(results);
  //     }
  //   });
  // });

};

// These functions aren't really asynchronous, but for the purposes of testing it works.
function wait2For2(callback) {
  setTimeout(function() {
    callback(2);
  }, 200);
}

function wait5For4(callback) {
  setTimeout(function() {
    callback(4);
  }, 500);
}

function wait1For3(callback) {
  setTimeout(function() {
    callback(3);
  }, 100);
}

function wait3For1(callback) {
  setTimeout(function() {
    callback(1);
  }, 300);
}

function wait1For5(callback) {
  setTimeout(function() {
    callback(5);
  }, 100);
}

asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], function(arr) {
  console.log(arr);
});
