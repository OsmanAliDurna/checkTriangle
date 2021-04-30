/* 
JS-CC-006 : Check Triangle
Determine if a triangle is equilateral, isosceles, or scalene by using class structures.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length. (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides have to be of length > 0, and the sum of the lengths of any two sides must be greater than or equal to the length of the third side. See Triangle Inequality.

Dig Deeper: The case where the sum of the lengths of two sides equals that of the third is known as a degenerate triangle - it has zero area and looks like a single line.

Please write your own code block to improve your algorithm skills for technical interview.

Learning Outcomes
At the end of the this coding challenge, students will be able to;

Analyze a problem, identify and apply programming knowledge for appropriate solution.

Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

Problem Statement
Write a class and methods that take three number and return:
Equilateral
Isosceles
Scalene
Invalid Triangle. 
*/

// all sides have to be of length > 0

// the sum of the lengths of any two sides must be greater than or equal to the length of the third side

// const side1 = Number(prompt("Enter the 1st side of triangle : "));
// const side2 = Number(prompt("Enter the 2nd side of triangle : "));
// const side3 = Number(prompt("Enter the 3rd side of triangle : "));

let sideArray = [];

check(1);

function check(start) {
  for (let i = start; i <= 3; i++) {
    let validLength = 0;
    validLength = Number(prompt(`Enter the side ${i} of triangle : `));

    while (true) {
      if (validLength > 0) {
        break;
      }
      validLength = Number(prompt(`Please enter a valid length for side ${i}`));
    }

    sideArray.push(validLength);
    console.log(sideArray);
  }
}

// console.log(sideArray);

while (true) {
  if (
    sideArray[0] + sideArray[1] > sideArray[2] &&
    sideArray[0] + sideArray[2] > sideArray[1] &&
    sideArray[1] + sideArray[2] > sideArray[0]
  ) {
    console.log("OK!");
    break;
  }
  alert("Please try again from the beginning.");
  sideArray.pop();

  console.log(sideArray);
  check(3);
}
