class Game {

  constructor(field) {
    this.previousField = null;
    this.field = field;
  }

  renderField(renderTarget) {
    this.renderer = new Renderer(this.field);

    return this.renderer.render();
  }

  processField() {
    this.previousField = JSON.stringify(this.field);
    var newField = new Field(this.field.width, this.field.height, this.field.scale);
    var promises = [];

    for (var idx = 0; idx < this.field.length; idx++) {

      var promise = new Promise(function(resolve, reject) {
        var numNeighbors = this.field.getNumNeighbors(idx);
        if ((numNeighbors < 2) || (numNeighbors > 3)) {
          resolve(new Cell(Cell.States.DEAD));
        } else {
          resolve(new Cell(Cell.States.ALIVE));
        }

      }.bind(this));

      promises.push(promise);
    }

    this.field = newField;
    return Promise.all(promises);
  }

  fieldWasUpdated() {
    return !this.previousField || this.previousField === JSON.stringify(this.field);
  }

}
