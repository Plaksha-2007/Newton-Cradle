class Bob{
	constructor(x,y,r){
		var options ={
			friction:0.4,
			//density:0.12,
		   restitution:1.3,
		 }
		this.x=x;
		this.y=y;
		this.r=r;
		this.image = loadImage("balls.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2,options);
		World.add(world, this.body);
  }

  display(){
    var pos=this.body.position;		
    push()
	translate(pos.x, pos.y);
    fill(128, 0, 0);
	ellipseMode(CENTER);
	//ellipse(0,0,this.r, this.r);
	imageMode(CENTER);
	image(this.image,0,0,105,105);
	pop()		
	}

}