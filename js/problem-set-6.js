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
  let height = prompt("Height:");
  height = Number(height);
  let width = prompt("Width:");
  width = Number(width);
  let x = prompt("X:");
  x = Number(x);
  let y = prompt("Y:");
  y = Number(y);
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
  colour = prompt("Color:");
  color.fillStyle = colour;
  if (colour == "black" || colour == "yellow" || colour == "purple" || colour == "orange" || colour == "blue" || colour == "green" || colour == "red") {
    color.fillRect(10, 10, 100, 50);
  } else {
    alert(colour + " is not a supported color.");
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
  let side1 = prompt("Side 1:");
  let side2 = prompt("Side 2:");
  let side3 = prompt("side 3:");
  side1 = Number(side1);
  side2 = Number(side2);
  side3 = Number(side3);

  if ( (isNaN(side1)) || (isNaN(side2)) || (isNaN(side3)) ) {
    alert("One of your inputs is not a number");
  } else if ( ((Math.pow(side1, 2)) + (Math.pow(side2, 2)) != (Math.pow(side3, 2))) ) {
    alert("This is not a valid right triangle.")
  } else {
    triangle.clearRect(0, 0, 1024, 512);
    let sides = [side1, side2, side3];
    sides.sort();
    triangle.beginPath(10, 10);
    triangle.lineTo(10, (side1 + 10));
    triangle.lineTo((side2 + 10), (side1 + 10));
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
  let radii = prompt("Radius: ");
  radii = Number(radii);
  let eyes = (radii/10);
  let mouth = (radii*0.7);

  if ( (isNaN(radii)) ) {
    alert("Your input is not a number.")
  } else if (radii < 1) {
    alert("Your radius is too small.")
  } else if (radii > 250.5) {
    alert("The smiley face will not fit on the canvas.");
  } else {
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
  star.clearRect(0, 0, 1024, 256);
  let outerRadius = prompt("Outer Radius: ");
  outterRadius = Number(outerRadius);
  let innerRadius = prompt("Inner Radius: ");
  innerRadius = Number(innerRadius);
  if ( (isNaN(outerRadius)) || (isNaN(innerRadius)) ) {
    alert("One of your inputs is not a number")
  } else if ( innerRadius >= outerRadius ) {
    alert("Your outer radius must be larger than your inner radius.")
  } else {
    star.beginPath();
    star.moveTo(50,50);
    star.lineTo(120,150);
    star.lineTo(0,180);
    star.lineTo(120,210);
    star.lineTo(50,310);
    star.lineTo(160,250);
    star.lineTo(190,370);
    star.lineTo(220,250);
    star.lineTo(330,310);
    star.lineTo(260,210);
    star.lineTo(380,180);
    star.closePath();
    star.stroke();
  }



}

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

}
