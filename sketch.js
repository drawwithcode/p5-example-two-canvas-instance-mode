// create the function for first sketch
let tracesSketch = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("red");
  };

  p.draw = function () {
    p.noStroke();
    p.fill("yellow");
    p.ellipse(p.mouseX, p.mouseY, 20);
  };
};
// make a p5 instace using the first sketch
let p1 = new p5(tracesSketch);

// create the function for first sketch
let cursorSketch = function (p) {
  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    // force the position to 0,0 so the two sketches
    // will be overlapped
    canvas.position(0, 0);
    // hide the cursor
    p.noCursor();
  };

  p.draw = function () {
    p.clear();
    p.fill("white");
    p.triangle(
      p.mouseX,
      p.mouseY,
      p.mouseX + 20,
      p.mouseY + 20,
      p.mouseX,
      p.mouseY + 28
    );
  };
};

let p2 = new p5(cursorSketch);
