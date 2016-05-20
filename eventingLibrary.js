var mixEvents = function(obj) {
  var events = {};

  obj.trigger = function (event) {
    var args = Array.prototype.slice.call(arguments, 1);
    if(events[event]){
      for(var i = 0; i < events[event].length; i++){
        events[event][i].apply(this, args);
      }
    }
  };

  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    if(!events[event]){
      events[event] = [];
    }

    events[event].push(callback);
  };

  return obj;
};
