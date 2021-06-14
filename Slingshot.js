//creating the class for the slingshot
class SlingShot{
    //adding the parameters in the constructor for our object
    constructor(bodyA, pointB){
        //defining the properties to be given to the object
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //defining that this.pointB is equal to the poinB mentioned in the parameters which is to be given to the object
        this.pointB = pointB
        //creating the constraint
        this.sling = Constraint.create(options);
        //adding the object tthe physics world
        World.add(world, this.sling);
    }
    
    //giving a function to the body and the sling which is to be followed when the body is released
    fly(){
        //null means empty
        this.sling.bodyA = null;
    }
    
    //giving the body the display function so that it can be displayed on the output screen
    display(){
        //applying the if condition between the bird body and the slingshot so that the line between them is visible
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //applying a border
            strokeWeight(4);
            //creating a line and connecting it from the birds x and y coordinates to the points x and y coordinates
            line(pointA.x,pointA.y, pointB.x, pointB.y);
        }
    }
    
}