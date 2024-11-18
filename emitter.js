// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  // 분출기 위치 갱신
  setPosition(x, y) {
    this.origin.set(x, y);
  }

  // 입자 생성
  addParticle() {
    this.particles.push(new Particle(this.origin.x, this.origin.y));
  }

  // 입자 업데이트 및 제거
  run() {
    this.addParticle(); // 매 프레임 입자 추가

    // 역순으로 루프를 돌며 입자 제거
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}


    // Run every particle
    // ES6 for..of loop
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    // https://www.youtube.com/watch?v=Y8sMnRQYr3c
    // for (let particle of this.particles) {
    //   particle.run();
    // }

    // Filter removes any elements of the array that do not pass the test
    // I am also using ES6 arrow snytax
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    // https://www.youtube.com/watch?v=mrYMzpbFz18
    // this.particles = this.particles.filter(particle => !particle.isDead());

    // Without ES6 arrow code would look like:
    // this.particles = this.particles.filter(function(particle) {
    //   return !particle.isDead();
    // });
  

