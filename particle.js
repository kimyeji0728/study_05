// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.lifespan = 255.0;
  }

  // 입자에 힘 적용
  applyForce(force) {
    this.acceleration.add(force);
  }

  // 입자 업데이트
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0); // 가속 초기화
  }

  // 입자 표시
  show() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    circle(this.position.x, this.position.y, 8);
  }

  // 수명 확인
  isDead() {
    return this.lifespan < 0.0;
  }

  // 실행 메서드
  run() {
    let gravity = createVector(0, 0.05); // 중력 추가
    this.applyForce(gravity);
    this.update();
    this.show();
  }
}

