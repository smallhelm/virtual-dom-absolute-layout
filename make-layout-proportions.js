var isNumber = require("lodash.isnumber");
var cloneArray = function(arr){
  return arr.slice(0);
};

var sumUntilNaN = function(sizes){
  var sum = 0;
  var nan_mode = false;
  return sizes.map(function(size){
    //FYI statement order matters
    var result = nan_mode ? null : sum;
    nan_mode = nan_mode || !isNumber(size);
    sum = sum + (nan_mode ? 0 : size);
    return result;
  });
};

module.exports = function(sizes){
  var befores = sumUntilNaN(sizes);
  var afters = sumUntilNaN(cloneArray(sizes).reverse()).reverse();
  return sizes.map(function(size, i){
    return [befores[i], size, afters[i]];
  });
};
