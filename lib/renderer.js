class Renderer {

  constructor(field) {
    this.data = field;
  }

  render(targetBuf) {
    var ctx = targetBuf.getContext('2d');
    ctx.beginPath();

    for (var idx = 0; idx < this.data.length; idx++) {
      if (this.data[idx].isDead()) {
        ctx.fillStyle = '#ffffff';
      } else {
        ctx.fillStyle = '#000000';
      }

      var yPos = Math.floor(idx / this.data.width);
      var xPos = (idx % this.data.width);
      ctx.fillRect(xPos, yPos, xPos, yPos);
    }

    ctx.stroke();

  }

}
