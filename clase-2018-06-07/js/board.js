var Board = {
  rows:5,
  columns:5,
  getPlayButton: function () {
    return document.getElementById('play');
  },//fin function getPlayButton
  getCells: function () {
    return  document.getElementsByClassName('alive');

  },
  updateCells: function (cells) {
    for (var i = 0; i <cells.length; i++) {
      Cell.changeColor(cells[i]);
    }//fin del for liAlives
  }

}// fin del board
