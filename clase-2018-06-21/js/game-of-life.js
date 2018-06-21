var GameOfLife = {
  createEmptyBoard: function(rows, cols) {
    var newBoard = [];
    for (var i = 0; i < rows; i++) {
      var row = [];
      for (var j = 0; j < cols; j++) {
        row.push(false);
      }
      newBoard.push(row); // El push te agrega un elemento a la ultima posicion del array
    }
    return newBoard;
  }, // fin createEmptyBoard

  getBoardFromHTML: function(cells, cols) {
    var board = [];
    var row = [];
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var isAlive = cell.className === 'alive';
      row.push(isAlive);
      if (i % cols === (cols - 1)) {
        board.push(row);
        row = [];

      } // fin del if de cols (columnas)
    }
    return board;
  }, // fin getBoardFromHTMAL

  getNextStep: function(a, b) {
    for (var i = 0; i < a.length; i++) {
      var row = a[i];
      for (var j = 0; j < row.length; j++) {
        var cell = row[j];
        var willBeAlive = GameOfLife.applyRule(a, i, j);
      }
    } // fin for currentBoard
  }, // fin getNextStep
  applyRule: function(board, posX, posY) {
    console.log(board, posX, posY);
    return true;
  }

}; // fin GameOfLife
