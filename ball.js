class Ball{
//properties

    constructor(){
      this.ball= Bodies.circle(200,200,30,{restitution:0.5});
        World.add(myWorld,this.ball );
    }
    
    
    // function namce can be anything
    
   
     display() {
        ellipseMode(RADIUS);
        ellipse(this.ball.position.x,this.ball.position.y,30,30);
}
     
}