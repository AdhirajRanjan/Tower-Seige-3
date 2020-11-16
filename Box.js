class Box
{
  constructor(x, y, width, height) {
      var options = {
          restitution:0.4,
          friction:0.0,
          density:1.0
      }
      this.image = loadImage("box.png")
      this.Visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      //console.log(this.body.speed)
      if (this.body.speed <2)
      {
        var angle = this.body.angle;
        var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image, 0,0, 30, 40);

      pop();
    }
    else 
    {
      World.remove(world, this.body)
      push();
      this.Visibility = this.Visibility -5;
      tint(255,this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, 30, 40);

      pop()
    }
  }

    score()
    {
      if(this.Visibility < 0 && this.Visibility >- 105)
      {
        score++;
      }
    }
}  
