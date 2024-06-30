function makeLine (size) {
    let str = " ";
    for (let i =0; i < size; i++) {
       str += "#";
    }
    return str;
}


function makeSquare (size) {
    let row = "";
    for (let i = 0; i < size; i++) {
        row += (makeLine(size) + '\n');

    }
    return row;
}
console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle;
  }
  console.log(makeRectangle(4,6));

function makeDownwardStairs(height) {
    let level = "";
    for (let i =0; i < height; i++) {
        level += (makeLine(i+1) + '\n');
    }
    return level
}
console.log(makeDownwardStairs(8));

function makeSpaceLine (numSpaces, numChars) {

}


function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }

  

