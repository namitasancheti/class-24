class Ground{
    //properties 200=x,200=y,90=w,40=h
    constructor(x,y,w,h){
        this.ground = Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(myWorld, this.ground);
        this.w=w;
        this.h=h;
    }

    //function names can be anything

    display(){
        rectMode(CENTER);
        rect (this.ground.position.x,this.ground.position.y,400,20);

    }
}