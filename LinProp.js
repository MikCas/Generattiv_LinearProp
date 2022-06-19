
//PN variable
let xoff = 0;

let agents = [];
let agentNum = 100;

//Variable used to save the canas 
let c;

function setup(){
    //Setting up the canvas
    c = createCanvas(1000, 1000);
    background(0);
    translate(width/2, height/2);

    //Generate a number of agents
    for(let i = 0; i < agentNum; i++){

        //lineAgents all starting from (0, 0)
        xStart = 0;
        yStart = 0;
        // xStart = random(-width/4, width/4)
        // yStart = random(-height/4, height/4)
        // xStart = map(i, 0, agentNum, -width/4, width/4)
        // yStart = map(i, 0, agentNum, -height/4, height/4)

        //Create vector
        //  Direction - vector with x and y values -1, 0 or 1
        //  Start - start a vector depending on the xStart and yStart values
        //  Magnitude - Determines the "speed" of the line (how many pixels will be skipped per iteration), 1 gives a solid line
        //  Colour - An initial white value of 255 is given
        agents[i] = new lineAgent(createVector(floor(random(-1, 2)), floor(random(-1, 2))), createVector(xStart, yStart), 1, 255);
    }
}

function draw(){
    translate(width/2, height/2);

    //Update and show each line agent
    for(let i = 0; i < agentNum; i++){
        agents[i].update();
        agents[i].show(xoff*i);
    }
    
    //Update perlin noise value
    xoff += 0.001;
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        // la.update();
        // la.show();
    }

    if (keyCode === RIGHT_ARROW) {
        // la.changeDirection();
        saveCanvas(c, 'LineProp', 'png');
      }
}