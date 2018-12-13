// https://github.com/JamesWClark/Dummy/blob/master/main.js

var chrispbacon;
var feed = [];
var numBacon = 10;
var score = 0;

function setup() {
    createCanvas(1050, 600);
    chrispbacon = new Piggy();
    for (var i = 0; i < numBacon; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}
    
function draw() {
    background(255, 250, 237);
    chrispbacon.display();
    for (var i = 0; i < feed.length; i++) {
        feed[i].display();
    }

    fill(0);
    textSize(50);
    text("Piggy Paradise!", 0, 50);
    textSize(25);
    text("Score : " + score, 0, 100);
}

function mousePressed() {
    chrispbacon.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.foodSize = 100;
    
    this.display = function() {
        fill('#8B0000');
        rect(this.x, this.y, 100, 50);
        fill('#FBD16C');
        rect(this.x + 10, this.y + 10, 80, 5);
        rect(this.x + 10, this.y + 25, 80, 5);
        rect(this.x + 10, this.y + 40, 80, 5);
    }
}

function Piggy() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    
    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.eat = function() {
        for (var i = feed.length - 1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if (r1 + r2 > d) {
                scoreboard();
                diameter = 200;
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
            }
        }
    }
    
    this.display = function() {
        
        x = mouseX;
        y = mouseY;
        
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
    }
    
    function scoreboard() {
        score++;
    }
}