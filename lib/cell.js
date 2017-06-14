


class Cell {

  constructor(state) {
    this.state = state;
  }

  isDead() {
    return this.state === this.constructor.States.DEAD;
  }

  isAlive() {
    return this.state === this.constructor.States.ALIVE;
  }


  static get States() {
    return {
      DEAD: 0,
      ALIVE: 1,
    }
  }

  toString() {
    return this.isDead() ? 'dead' : 'alive';
  }

}
