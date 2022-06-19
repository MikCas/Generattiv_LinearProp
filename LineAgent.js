class lineAgent{

    constructor(direction, start, magnitude, colour){
        
        //A position of a vector is the direction of the vector multiplied by the magnitude
        this.magnitude = magnitude;
        this.direction = direction.mult(this.magnitude);
        
        //The initial position of the vector is set as start
        this.position = start;

        //The colour of the pixels which this lineAgent produces
        this.colour = colour;

        //Determines when a line finished execution
        //FINISH CONDITION HAS NOT YET BEEN IMPLEMENTED
        this.finished = false;
    }

    update(){

        //Initially check if the lineAgent object is finished
        if(this.finished == false){

            //update position by adding the value of the direction to it
            this.position.add(this.direction);
            
            //If line goes beyond inner boundary, change to a random direction
            this.ifInsideBound()

            //If line goes beyond outer boundary, change to opposite direction

            //If line goes to right boundary, change direction by having x negative
            if(this.position.x >= width/4){
                this.changeDirection(-1, floor(random(-1, 2)));
            }

            //If line goes to left boundary, change direction by having x positive
            if(this.position.x <= -width/4){
                this.changeDirection(1, floor(random(-1, 2)));
            }

            //If line goes to lower boundary, change direction by having y negative
            else if(this.position.y >= height/4){
                this.changeDirection(floor(random(-1, 2)), -1);
            }

            //If line goes to upper boundary, change direction by having y positive
            else if(this.position.y <= -height/4){
                this.changeDirection(floor(random(-1, 2)), 1);
            }

            // console.log(this.direction.x, this.direction.y);

        }
    }

    //Changes the direction vector of the line upong given new diretion as input
    changeDirection(xDir, yDir){
        //The following are the possible directions which a line can have
        //(1, 1) (1, 0) (0, 1) (-1, 0) (0, -1) (-1, -1) (-1, 1) (1, -1)

        //direction vector is updated
        this.direction.x = xDir;
        this.direction.y = yDir;

        //update magnitude
        this.direction.mult(this.magnitude);
    }

    //Change direction of the line if the line is beyond a square boundary
    ifInsideSquareBound(){
        //The square size here is set as innerBound variable
        let innerBound = width/8;

        if(this.position.x >= innerBound || this.position.x <= -innerBound || this.position.y >= innerBound || this.position.y <= -innerBound){

            //Direction changed to random values
            this.changeDirection(floor(random(-1, 2)), floor(random(-1, 2)));

            return true;
        }
        return false;
    }

    //Change direction of the line if the line is beyond a function boundary 
    ifInsideBound(){
        
        //The function here is going to be y = x^3
        //We will be checking if the y position is greater or equal to x^3 and if so there will be a bundary constraint
        if(this.position.y >= 20*cos(0.1*this.position.x)){
            this.changeDirection(floor(random(-1, 2)), floor(random(-1, 2)));
            return true;
        }

        //Function boundary for y = x^2
        // if(this.position.y >= pow(this.position.x, 2)){
        //     this.changeDirection(floor(random(-1, 2)), floor(random(-1, 2)));
        // }

        return false;
    }

    
    show(xoff){

        //Get perlin noise colour values 
        let colour = map(noise(xoff), 0, 1, 0, 100);
        let colour2 = map(noise(xoff + 10), 0, 1, 0, 150);


        // stroke(colour, 100, colour2, 150);
        // stroke(this.colour);

        //colour and colour2 variables are used to change the colour depending on if the line is inside the inner bound or the outerbound
        if(this.ifInsideBound()){
            stroke(20, 20, colour2, 50);
            // fill(20, 20, colour2, 10);
        }

        else{
            stroke(colour, colour, 100, 50);
            // fill(colour, colour, 100, 10);
        }

        point(this.position.x, this.position.y);
        // ellipse(this.position.x, this.position.y, 5);
        // line(, , this.position.x, this.position.y);
    }
}
