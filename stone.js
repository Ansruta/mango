class stone{
    constructor(x,y,r){
        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2,

        }
        
        this.x=x
        this.y=y
        this.r=this.r
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        this.image=loadImage("images/stone.png")
        World.add(world,this.body)

    }
    display(){
        var p=this.body.position
        push();
        translate(p.x,p.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
    }
}