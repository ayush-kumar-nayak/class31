class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.sling = Constraint.create(options)
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position
            var pointB=this.sling.pointB
            push()
            strokeWeight(5)
        stroke("#301608")
        if(pointA.x<220){
            line(pointA.x-25,pointA.y+5,pointB.x-15,pointB.y)
            line(pointA.x-25,pointA.y+5,pointB.x+30,pointB.y)
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
        }
        else{
            line(pointA.x+25,pointA.y+5,pointB.x-15,pointB.y)
            line(pointA.x+25,pointA.y+5,pointB.x+30,pointB.y)
            image(this.sling3,pointA.x+25,pointA.y-10,15,30)
        }
            
            pop()
        }
        
    }
}