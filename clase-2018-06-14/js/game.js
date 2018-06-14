var Game = {
  next: null,
  board: null,
  cells: null,
  init: function() {
    Board.createCells();
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
  },
  start: function() {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
      //toggle es un swidch de dos componentes (un interruptor)
    }
    Game.next.onclick = Board.nextSteap;
  },
  update: function() {}
} //fin var game
