class CUBIE {
  constructor(_size, x, y, z) {
    //this.loc = createVector(x * _size, y * _size, z * _size);
    this.pos = math.matrix([
      [1, 0, 0, x * _size],
      [0, 1, 0, y * _size],
      [0, 0, 1, z * _size],
      [0, 0, 0, 1],
    ]);
    this.init = this.pos;
    this.halfSize = _size / 2;
  }

  update(matrix) {
    let origin = math.inv(this.init);
    this.pos = math.inv(math.multiply(origin, matrix));
  }

  getIndex(axis) {
    let test = math.matrix([0, 0, 0, 1 / (this.halfSize * 2)]);
    return math.round(math.multiply(this.pos, test)._data)[axis];
  }

  endAnimation(matrix) {
    this.update(matrix);
    this.init = this.pos;
  }

  show() {
    push();
    applyMatrix(
      this.pos._data[0][0],
      this.pos._data[1][0],
      this.pos._data[2][0],
      this.pos._data[3][0],
      this.pos._data[0][1],
      this.pos._data[1][1],
      this.pos._data[2][1],
      this.pos._data[3][1],
      this.pos._data[0][2],
      this.pos._data[1][2],
      this.pos._data[2][2],
      this.pos._data[3][2],
      this.pos._data[0][3],
      this.pos._data[1][3],
      this.pos._data[2][3],
      this.pos._data[3][3]
    );
    //translate(this.loc);
    beginShape();
    fill('red');
    vertex(this.halfSize, this.halfSize, this.halfSize);
    vertex(this.halfSize, -this.halfSize, this.halfSize);
    vertex(-this.halfSize, -this.halfSize, this.halfSize);
    vertex(-this.halfSize, this.halfSize, this.halfSize);
    endShape();

    beginShape();
    fill('orange');
    vertex(this.halfSize, this.halfSize, -this.halfSize);
    vertex(this.halfSize, -this.halfSize, -this.halfSize);
    vertex(-this.halfSize, -this.halfSize, -this.halfSize);
    vertex(-this.halfSize, this.halfSize, -this.halfSize);
    endShape();

    beginShape();
    fill('green');
    vertex(this.halfSize, -this.halfSize, this.halfSize);
    vertex(this.halfSize, -this.halfSize, -this.halfSize);
    vertex(this.halfSize, this.halfSize, -this.halfSize);
    vertex(this.halfSize, this.halfSize, this.halfSize);
    endShape();

    beginShape();
    fill('blue');
    vertex(-this.halfSize, -this.halfSize, this.halfSize);
    vertex(-this.halfSize, -this.halfSize, -this.halfSize);
    vertex(-this.halfSize, this.halfSize, -this.halfSize);
    vertex(-this.halfSize, this.halfSize, this.halfSize);
    endShape();

    beginShape();
    fill('white');
    vertex(-this.halfSize, this.halfSize, this.halfSize);
    vertex(-this.halfSize, this.halfSize, -this.halfSize);
    vertex(this.halfSize, this.halfSize, -this.halfSize);
    vertex(this.halfSize, this.halfSize, this.halfSize);
    endShape();

    beginShape();
    fill('yellow');
    vertex(-this.halfSize, -this.halfSize, this.halfSize);
    vertex(-this.halfSize, -this.halfSize, -this.halfSize);
    vertex(this.halfSize, -this.halfSize, -this.halfSize);
    vertex(this.halfSize, -this.halfSize, this.halfSize);
    endShape();
    pop();
  }
}
