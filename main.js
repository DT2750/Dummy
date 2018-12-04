var sq;

function setup() {
    createCanvas(640, 480);
    sq = new ChrisPBacon();
}

function draw() {
    background(0, 255, 0);
    sq.display();
    
}

function ChrisPBacon() {
    
    var x = mouseX;
    var y = mouseY;
    
    this.display = function() {
    
        //face
        noStroke();
        fill('#FFB6C1');
        ellipse(x, y, 300, 200);
    
        //nose
        fill('#FBD16C');
        ellipse(x, y+30, 64, 64);
        fill("#000000");
        ellipse(x-15, y+20, 20, 20);
        ellipse(x+15, y+20, 20, 20);
    
        //eyeLeft
        fill('#FFFFFF');
        ellipse(x+42, y-26, 64, 64);
    
        //pupilLeft
        fill('#5ACDFE');
        rect(x+27.5, y-37.5, 35, 35);
    
        //eyeRight
        fill('#FFFFFF');
        ellipse(x-42, y-26, 64, 64);
    
        //pupilRight
        fill('#5ACDFE');
        rect(x-47.5, y-37.5, 35, 35);
    
        //earLeft
        fill('#FFB6C1');
        push();
        translate(x-150, y-80);
        rotate(Math.PI / 4);
        ellipse(0, 0, 150, 100);
        fill('#FBD16C');
        ellipse(0, 0, 90, 75);
        pop();
    
        //earRight
        fill('#FFB6C1');
        push();
        translate(x+150, y-80);
        rotate(-Math.PI / 4);
        ellipse(0, 0, 150, 100);
        fill('#FBD16C');
        ellipse(0, 0, 90, 75);
        pop();
    
        //tongue
        fill('#EE3E36');
        arc(x-10, y+80, 40, 70, 0, PI+QUARTER_PI, CHORD);
    
        //bacon
        fill('#8B0000');
        rect(400, 400, 200, 50);
        fill('#FBD16C');
        rect(410, 410, 180, 5);
        rect(410, 425, 180, 5);
        rect(410, 440, 180, 5);
    }
}