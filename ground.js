class Ground {
  constructor(x, y, w, h) {
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
  }

  show() {
    var position = this.body.position;
    push();
    rectMode(CENTER);
    rect(position.x, position.y, this.w, this.h);
    pop();
  }
  
}
