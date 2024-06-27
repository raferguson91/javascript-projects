function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
 
  function makeSquare(size) {
    let square = '';
    for (let i =0; i < size; i++) {
        square += (makeLine(size) + '\n');

    }
return square

  }

  function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }