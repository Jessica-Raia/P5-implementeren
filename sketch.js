function setup() {
    createCanvas(1000, 1000);
    
  }
  
  function draw() {
    background('rgb(199,102,102)')
    fill('rgb(122,150,120)')
    stroke('rgb(105,131,103)')
    circle(mouseX, mouseY, 200)
    
    fill('rgb(3,3,3)')
    
    ellipse(mouseX, mouseY, 80, 160)
  }