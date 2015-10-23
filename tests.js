var test = require("tape");
var makeLayoutProportions = require("./make-layout-proportions");

test("makeLayoutProportions", function(t){

  t.deepEquals(makeLayoutProportions([null]), [
    [   0, null,    0]
  ]);

  t.deepEquals(makeLayoutProportions([50, 100, 200, null]), [
    [   0,   50, null],
    [  50,  100, null],
    [ 150,  200, null],
    [ 350, null,    0]
  ]);

  t.deepEquals(makeLayoutProportions([null, 400, 800, 1600]), [
    [   0, null, 2800],
    [null,  400, 2400],
    [null,  800, 1600],
    [null, 1600,    0]
  ]);

  t.deepEquals(makeLayoutProportions([50, 100, 200, null, 400, 800, 1600]), [
    [   0,   50, null],
    [  50,  100, null],
    [ 150,  200, null],
    [ 350, null, 2800],
    [null,  400, 2400],
    [null,  800, 1600],
    [null, 1600,    0]
  ]);

  t.end();
});
