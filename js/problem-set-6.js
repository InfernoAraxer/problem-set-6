/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

  let canvas = document.getElementById("canvas1");
  let font = canvas.getContext("2d");
  font.clearRect(0, 0, 1024, 128);
  font.font = "48px sans-serif";
  font.strokeText("Hello, World!", 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

  let canvas = document.getElementById("canvas2");
  let rect = canvas.getContext("2d");
  rect.clearRect(0, 0, 1024, 512);

  //Prompts everything and changes the data type into numbers
  let height = prompt("Height:");
  height = Number(height);
  let width = prompt("Width:");
  width = Number(width);
  let x = prompt("X:");
  x = Number(x);
  let y = prompt("Y:");
  y = Number(y);

  // Tests if inputs were valid
  if ( (isNaN(x)) || (isNaN(y)) || (isNaN(height)) || (isNaN(width))) {
    alert("One of your inputs is not a number.");
  } else if ( (x + width >= 1024) || (y + height >= 512) ) {
    alert("The rectangle will not fit on the canvas.");
  } else if (width < 1) {
    alert("Your width is too small.");
  } else if (height < 1) {
    alert("Your height is too small.");
  } else if (x < 5) {
    alert("Your x-coordinate is too small.");
  } else if (y < 5) {
    alert("Your y-coordinate is too small.");
  } else {

  //Draws Rectangle
    rect.beginPath();
    rect.rect(x, y, width, height);
    rect.stroke();
  }

}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

  let canvas = document.getElementById("canvas3");
  let color = canvas.getContext("2d");
  color.clearRect(0, 0, 1024, 128);

  // Prompt to get color
  rectColor = prompt("Color:");
  color.fillStyle = rectColor;

  // Gets Color and if possible makes the rectangle
  switch (rectColor) {
    case "black":
    case "yellow":
    case "purple":
    case "orange":
    case "blue":
    case "green":
    case "red":
      color.fillRect(10, 10, 100, 50);
      break;
    default:
      alert(rectColor + " is not a supported color.");
  }

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

  let canvas = document.getElementById("canvas4");
  let triangle = canvas.getContext("2d");
  triangle.clearRect(0, 0, 1024, 512);

  //Prompts to get sides and changes them all into numbers
  let side1 = prompt("Side 1:");
  let side2 = prompt("Side 2:");
  let side3 = prompt("side 3:");
  side1 = Number(side1);
  side2 = Number(side2);
  side3 = Number(side3);

  // Check is they're numbes first
  if ( (isNaN(side1)) || (isNaN(side2)) || (isNaN(side3)) ) {
    alert("One of your inputs is not a number");
  }

  // Organizes the sides so the first is the smallest the second is the second smallest and the third is the hypotenuse
  let sides = [];
  sides.push(Math.min(side1, side2, side3));
  let total = side1 + side2 + side3;
  sides.push(total - (sides[0] + Math.max(side1, side2, side3)));
  sides.push(Math.max(side1, side2, side3));
  console.log(sides[0], sides[1], sides[2]);

  // Checks if it is a valid right triangle
  if ( (sides[0]**2) + (sides[1]**2) != (sides[2]**2)) {
    alert("This is not a valid right triangle.")
  } else {

  // Draws right Triangle
    triangle.beginPath(10, 10);
    triangle.lineTo(10, (sides[0] + 10));
    triangle.lineTo((sides[1] + 10), (sides[0] + 10));
    triangle.lineTo(10, 10);
    triangle.closePath();
    triangle.stroke();
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let canvas = document.getElementById("canvas5");
  let radius = canvas.getContext("2d");
  radius.clearRect(0, 0, 1024, 512);

  //Prompts and sets sizes for the faces, eyes, and mouth
  let radii = prompt("Radius: ");
  radii = Number(radii);
  let eyes = (radii/10);
  let mouth = (radii*0.7);

  // Checks whether it is possible to draw the face on the canvas
  if ( (isNaN(radii)) ) {
    alert("Your input is not a number.")
  } else if (radii < 1) {
    alert("Your radius is too small.")
  } else if (radii > 250.5) {
    alert("The smiley face will not fit on the canvas.");
  } else {

    // Draws the Smiley Face
    radius.beginPath();
    radius.arc((radii + 10), (radii + 10), radii, 0, 2 * Math.PI, false);
    radius.stroke();
    radius.beginPath();
    radius.arc( ((radii+10)-(eyes*3.5)), ((radii+10)-(eyes*5.25)), eyes, 0, 2 * Math.PI, false);
    radius.stroke();
    radius.beginPath();
    radius.arc( ((radii+10)+(eyes*3.5)), ((radii+10)-(eyes*5.25)), eyes, 0, 2 * Math.PI, false);
    radius.stroke();
    radius.beginPath();
    radius.arc((radii + 10), ((radii+10)-(mouth*0.05)), mouth, 0, Math.PI, false);
    radius.stroke();
  }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

  let canvas = document.getElementById("canvas6");
  let star = canvas.getContext("2d");
  const PI = Math.PI;
  star.clearRect(0, 0, 1024, 256);

  // Gets the radii and change them into numbers
  let outerRadius = prompt("Outer Radius: ");
  outerRadius = Number(outerRadius);
  let innerRadius = prompt("Inner Radius: ");
  innerRadius = Number(innerRadius);

  // Checks if it's possible to make the star
  if ( (isNaN(outerRadius)) || (isNaN(innerRadius)) ) {
    alert("One of your inputs is not a number")
  } else if ( innerRadius >= outerRadius ) {
    alert("Your outer radius must be larger than your inner radius.")
  } else {

    //Starts to draw the star
    star.beginPath();
    star.moveTo(125, 125 - outerRadius);
    let x = 1.5;

    for (let i = 0 ; i < 5; i++) {
      x += 0.2;
      star.lineTo((innerRadius * Math.cos(x * PI)) + 125, (innerRadius * Math.sin(x * PI)) + 125);
      x += 0.2;
      star.lineTo((outerRadius * Math.cos(x * PI)) + 125, (outerRadius * Math.sin(x * PI)) + 125);
    }

    star.stroke();

  }
}

//https://www.w3schools.com/tags/canvas_arc.asp

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

  let canvas = document.getElementById("canvas7");
  let sign = canvas.getContext("2d");
  sign.clearRect(0, 0, 1024, 256);

  //Sets constants and varibles
  const PI = Math.PI;
  let length = 80;
  let x = 10 + (length * Math.cos(1.75 * PI));
  let y = 10;

  // Starts to draw Octogon
  sign.beginPath();
  sign.moveTo(x, y);
  let r = 0;
  for (let i = 0 ; i < 8; i++) {
    x += length * Math.cos(r * PI);
    y += length * Math.sin(r * PI);
    r += .25
    sign.lineTo(x, y);
  }

  // Styles the sign
  sign.lineWidth = 5;
  sign.stroke();
  sign.fillStyle = "red";
  sign.fill();

  sign.font = "65px sans-serif";
  sign.fillStyle = "white";
  sign.fillText("STOP", 19, 132.5);

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

  let canvas = document.getElementById("canvas8");
  let block = canvas.getContext("2d");
  block.clearRect(0, 0, 1024, 512);

  // Prompts for side length
  let length = prompt("Side Length: ");
  length = Number(length);

  // Varibles
  let v = 1; // Used to indicate a new level
  let w = .5; // Indicates that when moved to a new level move tot he right a bit
  let x = 10; // Starting x Coordinate
  let y = 502; // Starting y coordinate
  let blocksInRow = 5; // Starting number of blocks in level 1

  // Function to create one block given a side length
  function createBlock() {
    block.beginPath();
    block.moveTo(x, y);
    block.lineTo(x, y - length);
    block.lineTo(x + length, y - length);
    block.lineTo(x + length, y);
    block.lineTo(x, y);
    block.stroke();
  }

  //Checks if the pyramis is possible
  if ( (isNaN(length)) ) {
    alert("Your input is not a number.")
  } else if (length <= 0) {
    //alert("Your side length is too small.");
  } else if (length > 100.2) {
    alert("The pyramid will not fit on the canvas.");
  } else {

    //Loops to repeatedly draw x number of blocks given a level in the pyramid
    for (let i = 0; i < 5; i++) {
      for (let i = 0; i < blocksInRow; i++) {
        createBlock();
        x += length;
      }

      // Indicates where to draw blocks on a new level
      x = 10 + (w * length);
      y = 502 - (v * length);
      blocksInRow--;
      v++;
      w += .5;
    }
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let canvas = document.getElementById("canvas9");
  let house = canvas.getContext("2d");
  let windows = canvas.getContext("2d");
  let roof = canvas.getContext("2d");
  let door = canvas.getContext("2d");
  let knob = canvas.getContext("2d");
  house.clearRect(0, 0, 1024, 760);

  // Gets volor and sets an x coordinate
  let houseColor = prompt("House Color: ");
  let doorColor = prompt("Front Door Color");
  let x = 270;

  // Builds the 4 windows
  function buildWindows () {
    for (let a = 0; a < 2; a++) {
      let y = 712;
      for (let i = 0; i < 2; i++){
        windows.lineWidth = 3;
        windows.beginPath();
        windows.moveTo(x, y);
        windows.lineTo(x + 75, y);
        windows.lineTo(x + 75, y - 75);
        windows.lineTo(x, y - 75);
        windows.lineTo(x, y);
        windows.stroke();
        windows.fillStyle = "lightblue";
        windows.fill();
        y -= 225;
      }
    x += 404;
    }
  }

  // Builds the base of the house
  function buildHouse () {
    house.lineWidth = 3;
    house.beginPath();
    house.moveTo(150, 750);
    house.lineTo(874, 750);
    house.lineTo(874, 300);
    house.lineTo(150, 300);
    house.lineTo(150, 750);
    house.stroke();
    house.fillStyle = houseColor;
    house.fill();
  }

  // Builds the door of the house
  function buildDoor () {
    door.lineWidth = 3;
    door.beginPath();
    door.moveTo(462, 750);
    door.lineTo(562, 750);
    door.lineTo(562, 600);
    door.lineTo(462, 600);
    door.lineTo(462, 750);
    door.stroke();
    door.fillStyle = doorColor;
    door.fill();
  }

  // Builds the knob of the house
  function buildKnob () {
    knob.lineWidth = 3;
    knob.beginPath();
    knob.arc(545, 674, 7.5, 0, 2 * Math.PI);
    knob.stroke();
    knob.fillStyle = "black";
    knob.fill();
  }

  // Builds the roof of the house
  function buildRoof () {
    roof.lineWidth = 3;
    roof.beginPath();
    roof.moveTo(150, 300);
    roof.lineTo(512, 8);
    roof.lineTo(872, 298);
    roof.lineTo(150, 298);
    roof.stroke();
    roof.fillStyle = "gray";
    roof.fill();
  }

  // Checks if the colors are possible
  switch (houseColor) {
    case "brown":
    case "yellow":
    case "purple":
    case "orange":
    case "blue":
    case "green":
    case "red":
      switch (doorColor) {
        case "brown":
        case "yellow":
        case "purple":
        case "orange":
        case "blue":
        case "green":
        case "red":
          //Draws the house
          buildHouse();
          buildDoor();
          buildKnob();
          buildRoof();
          buildWindows();
          break;
        default:
          alert("One of your colors is not supported.");
      }
      break;
    default:
      alert("One of your colors is not supported.");
  }
}
