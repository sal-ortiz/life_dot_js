class Renderer {

  constructor(field) {
    this.data = field;
  }

  render() {
    return new Promise(function(resolve, reject) {
      var buffer = document.createElement("canvas");
      var ctx = buffer.getContext('2d');

      ctx.beginPath();

      for (var idx = 0; idx < this.data.length; idx++) {
        if (this.data[idx].isDead()) {
          ctx.fillStyle = '#ffffff';
        } else {
          ctx.fillStyle = '#000000';
        }

        var xPos = Math.floor((idx % this.data.width) * this.data.scale);
        var yPos = Math.floor((idx / this.data.width) * this.data.scale);

        ctx.fillRect(xPos, yPos, this.data.scale, this.data.scale);
      }

      ctx.stroke();

      resolve(buffer);
    }.bind(this));

  }

}
