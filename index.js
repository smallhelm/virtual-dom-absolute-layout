var isNumber = require("lodash.isnumber");
var makeLayoutProportions = require("./make-layout-proportions");

var layoutBeforeSizeAfter = function(before_size_after, attrs){
  var style = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "auto",
    height: "auto"
  };
  before_size_after.forEach(function(proportion, i){
    style[attrs[i]] = isNumber(proportion) ? proportion + "px" : "auto";
  });
  return style;
};

module.exports = function(h, blocks, is_horizontal){

  var layout_proportions = makeLayoutProportions(blocks.map(function(block){
    return isNumber(block[1]) ? block[1] : null;
  }));

  return h("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: "hidden"
    }
  }, blocks.map(function(block, i){
    return h("div", {
      style: layoutBeforeSizeAfter(layout_proportions[i], is_horizontal ? ["left", "width", "right"] : ["top", "height", "bottom"])
    }, block[0]);
  }));
};
