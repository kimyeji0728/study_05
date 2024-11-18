// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size
// list of particles.

// an array of ParticleSystems
let emitter;

function setup() {
  createCanvas(640, 240);
  let text = createP("Move the mouse to control the particle emitter");
  emitter = new Emitter(mouseX, mouseY); // 초기 위치 설정
}

function draw() {
  background(255);

  // 마우스 위치로 분출기 이동
  emitter.setPosition(mouseX, mouseY);

  emitter.run();
}
