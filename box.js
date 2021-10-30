class box{
    //properties 
    constructor(x,y,w,h){
 this.body=Bodies.rectangle(x,y,w,h,{restitution:0.5}) ;
 World.add(myWorld, this.body);
 this.w=w;
 this.h=h;

    }


    //function name can be anything 

    display(){
        rectMode(CENTER);
        fill("red");
        rect  (this.body.position.x,this.body.position.y,50,50);
    }

}