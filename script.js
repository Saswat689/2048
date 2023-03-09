// code to generate a circle and draw it in Canvas

class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius
    Circle.circlesMade = Circle.circlesMade + 1
  }
  
  static draw(circle,canvas,color) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color
    ctx.fill();
  }
  
  get radius() {
    return this.#radius
  }
  
  set radius(radius) {
    if (!Number.isInteger(radius)) {
      throw new Error("Radius must be integer")
    } else {
      this.#radius = radius 
    }
  }
  
  static set circlesMade(val) {
    this._count = val
  }
  static get circlesMade() {
    return !this._count ? 0 : this._count
  }
}

// let canvas = document.getElementById("circleCanvas");

// const circle = new Circle(70)

// Circle.draw(circle,canvas,"blue")
