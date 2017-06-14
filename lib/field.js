


class Field extends Array {

  constructor(width, height) {
    super(width * height);

    this.width = width;
    this.height = height;

    this.clear();
  }

  clear() {
    this.fill(undefined);

    for (var idx = 0; idx < this.length; idx++) {
      this[idx] = new Cell(Cell.States.DEAD);
    }
  }


  digestRawData(rawData) {
    Object.assign(this, rawData);
  }

  randomize(numCells) {
    var cellCount = 0;

    do {
      var idx = Math.floor(Math.random() * this.length);
      if (this[idx].isDead()) {
        this[idx] = new Cell(Cell.States.ALIVE);
        cellCount++;
      }

    } while(cellCount < numCells);

  }

  getNumNeighbors(idx) {
    // TODO: Optimize!!!
    var count = 0;

    for (var horzModifier = -1; horzModifier <= 1; horzModifier++) {
      for (var vertModifier = -1; vertModifier <= 1; vertModifier++) {
        var neighborPosX = ((idx % this.width) + horzModifier) % this.width;
        var neighborPosY = (Math.floor(idx / this.width) + vertModifier) % this.height;
        var neighborIdx = (Math.abs(neighborPosY) * this.width) + Math.abs(neighborPosX);

        if (this[neighborIdx].isAlive() && neighborIdx != idx) {
          count++;
        }

      }

    }

    return count;

  }

}
