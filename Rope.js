class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }
    display(){
        var posA= this.Rope.bodyA.position;
        var posB= this.Rope.bodyB.position;
        var point1X = posA.x;
        var point1Y = posA.y;

        var point2X = posB.x+this.offsetX;
        var point2Y = posB.y+this.offsetY;
        fill(0);
        stroke(5);
        strokeWeight(5);
        line(point1X, point1Y, point2X, point2Y);
    }
}