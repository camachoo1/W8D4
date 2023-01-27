import Level from './level.js';
export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
    this.play();
  }
  animate(context) {
    this.level.animate(context);
    this.bird.animate(context);
    if (this.running) requestAnimationFrame(animate);
  }
  restart() {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate(this.ctx);
    this.running = false;
  }

  play() {
    this.running = true;
    this.animate(this.ctx);
  }
}

const CONSTANTS = {
  GRAVITY: 0.3,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30,
};

class Bird {
  constructor(dimensions) {
    console.log(dimensions);
    this.posX = dimensions.width / 3;
    this.posY = dimensions.height / 2;
    this.position = this.posY;
    this.velocity = 0;
  }

  drawBird(ctx) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.posX, this.position, 40, 30);
  }

  animate(context) {
    this.move();
    this.drawBird(context);
  }

  move() {
    this.position += this.velocity;
    this.velocity += CONSTANTS.GRAVITY;
  }

  flap() {
    this.velocity += CONSTANTS.FLAP_SPEED;
  }
}
