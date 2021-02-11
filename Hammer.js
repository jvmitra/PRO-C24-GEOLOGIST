class Hammer {
    constructor(x, y, width, height,angle) {
      var options = {
          'density':1,
          'friction':0.1,
          'restitution':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };