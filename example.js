var h = require("virtual-dom/h");
var createElement = require("virtual-dom/create-element");
var AbsoluteLayout = require("./");

var Fill = function(color, text){
  return h("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      fontSize: "30px",
      lineHeight: "50px",
      textAlign: "center",
      background: color
    }
  }, text);
};
 
var render = function(){
  return AbsoluteLayout(h, [
    [Fill("lightgreen", "-- Header --"), 50],

    [Fill("yellow", "-- Sub-header --"), 50],

    [AbsoluteLayout(h, [

      [Fill("lightblue", "-- Left --"), 150],

      [Fill("white", "-- Main Body --")],

      [Fill("red", "-- Right --"), 150]

    ], true)],

    [Fill("pink", "-- Footer --"), 50]
  ]);
};
document.body.appendChild(createElement(render()));
