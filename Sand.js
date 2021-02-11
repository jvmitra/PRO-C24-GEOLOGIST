class Sand {
    constructor(x, y, radius ,angle) {
      var options = {
        'restitution':1.3,
        'friction':5,
        'density':1
      }
      this.body = Bodies.circle(x, y, radius , options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4)
      fill("brown");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };