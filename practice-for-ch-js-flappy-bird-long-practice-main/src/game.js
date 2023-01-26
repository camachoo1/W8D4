import Level from './level.js';
export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }
  animate(context) {
    this.level.animate(context);
    this.bird.animate(context);
  }
  restart() {
    this.level = new Level(this.dimensions);
    // this.bird = new Bird(this.canvas);
    this.animate(this.ctx);
  }
}

class Bird {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = {
      width: canvas.width / 3,
      height: canvas.height / 2,
    };
    this.velocity = 0;
  }

  drawBird(ctx) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, 0, 40, 30);
  }

  animate(context) {
    this.drawBird(context);
  }
}
