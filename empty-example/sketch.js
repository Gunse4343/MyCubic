let cube = [];
let cubeSize = 60;
let deg = 0;
let animation;
let tx, ty, tz;

function setup() {
  // put setup code here
  createCanvas(600, 600, WEBGL);
  for (let x = -1; x < 2; x++) {
    cube[x] = [];
    for (let y = -1; y < 2; y++) {
      cube[x][y] = [];
      for (let z = -1; z < 2; z++) {
        cube[x][y][z] = new CUBIE(cubeSize, x, y, z);
      }
    }
  }
  tx = 1;
  ty = -1;
  tz = 1;
  cube[tx][ty][tz] = new CUBIE(cubeSize * 1.2, tx, ty, tz);
}

function keyPressed() {
  if (!animation) {
    deg = 0;
    if (keyCode === LEFT_ARROW) {
      animation = setInterval(yAxisRotation, 25, 1);
    } else if (keyCode === RIGHT_ARROW) {
      animation = setInterval(yAxisRotation, 25, -1);
    } else if (keyCode === UP_ARROW) {
      animation = setInterval(xAxisRotation, 25, 1);
    } else if (keyCode === DOWN_ARROW) {
      animation = setInterval(xAxisRotation, 25, -1);
    } else if (keyCode === SHIFT) {
      animation = setInterval(zAxisRotation, 25, -1);
    } else if (keyCode === ALT) {
      animation = setInterval(zAxisRotation, 25, 1);
    }
  }
}

function doTest() {
  test = math.matrix([0, 0, 0, 1 / cubeSize]);
  console.log(math.round(math.multiply(cube[tx][ty][tz].pos, test)._data));
}

function axisRotation(newPos, axis, layer) {
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      for (let z = -1; z < 2; z++) {
        if (cube[x][y][z].getIndex(axis) == layer) {
          if (abs(deg) < 90) {
            cube[x][y][z].update(newPos);
          } else {
            cube[x][y][z].endAnimation(newPos);
          }
        }
      }
    }
  }
  if (abs(deg) >= 90) {
    clearInterval(animation);
    animation = null;
  }
}

function xAxisRotation(direction) {
  deg = deg + direction * 5;

  let rad = radians(deg);
  newPos = math.matrix([
    [1, 0, 0, 0],
    [0, cos(rad), sin(rad), 0],
    [0, -sin(rad), cos(rad), 0],
    [0, 0, 0, 1],
  ]);
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      for (let z = -1; z < 2; z++) {
        if (cube[x][y][z].getIndex(0) == 1) {
          if (abs(deg) < 90) {
            cube[x][y][z].update(newPos);
          } else {
            cube[x][y][z].endAnimation(newPos);
          }
        }
      }
    }
  }
  if (abs(deg) >= 90) {
    console.log(cube[tx][ty][tz].getIndex());
    clearInterval(animation);
    animation = null;
  }
}

function zAxisRotation(direction) {
  deg = deg + direction * 5;

  let rad = radians(deg);
  // Z-Axis rotation
  newPos = math.matrix([
    [cos(rad), sin(rad), 0, 0],
    [-sin(rad), cos(rad), 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]);
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      for (let z = -1; z < 2; z++) {
        if (cube[x][y][z].getIndex(2) == 1) {
          if (abs(deg) < 90) {
            cube[x][y][z].update(newPos);
          } else {
            cube[x][y][z].endAnimation(newPos);
          }
        }
      }
    }
  }
  if (abs(deg) >= 90) {
    console.log(cube[tx][ty][tz].getIndex());
    clearInterval(animation);
    animation = null;
  }
}

function yAxisRotation(direction) {
  deg = deg + direction * 5;

  let rad = radians(deg);
  // Y-Axis rotation
  newPos = math.matrix([
    [cos(rad), 0, sin(rad), 0],
    [0, 1, 0, 0],
    [-sin(rad), 0, cos(rad), 0],
    [0, 0, 0, 1],
  ]);
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      for (let z = -1; z < 2; z++) {
        if (cube[x][y][z].getIndex(1) == 1) {
          if (abs(deg) < 90) {
            cube[x][y][z].update(newPos);
          } else {
            cube[x][y][z].endAnimation(newPos);
          }
        }
      }
    }
  }
  if (abs(deg) >= 90) {
    console.log(cube[tx][ty][tz].getIndex());
    clearInterval(animation);
    animation = null;
  }
}

function draw() {
  // put drawing code here
  background(52);
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      for (let z = -1; z < 2; z++) {
        cube[x][y][z].show();
      }
    }
  }
  //cube[-1][-1][-1].show();
  // cube[0][0][0].show();
  // cube[1][-1][1].show();
}
