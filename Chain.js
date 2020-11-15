class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display()
    {
        if (this.chain.bodyA!=null)
        {
            var pointA = this.chain.bodyA.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.chain.pointB.x, this.chain.pointB.y);
        }
    }
    fly()
    {
        this.chain.bodyA=null
    }

    attach(b)
    {
        this.chain.bodyA = b;
    }
    
}