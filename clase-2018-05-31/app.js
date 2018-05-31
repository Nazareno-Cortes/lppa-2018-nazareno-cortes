console.log("Hello");

var changeColor= function (li) {
  li.style.backgroundColor = '#f00';
}
window.onload = function () {
  var btnPlay = document.getElementById('play');
  btnPlay.onclick = function () {
    var liAlives = document.getElementsByClassName('alive');
    for (var i = 0; i < liAlives.length; i++) {
     changeColor(liAlives[i]);
   }//fin for liAlives
  }
}//fin de la funcion window.onload
