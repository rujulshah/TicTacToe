var board;
var playerType;
var winPlay = [[0,1,2],[3,4,5],[6,7,8],
				[0,3,6],[1,4,7],[2,5,8],
				[0,4,8],[2,4,6]];

function setCell(num){
	if (board[num] === " "){
		board[num] = playerType;
		diplayCell(num);
		var win = checkWin();
		alert(win);
		if (win){
			var player = document.getElementById("playerText");
  			player.innerHTML="Player: " + playerType + " WINS!!";
  			return;
		}
	}
	else{
		alert("use another square");
	}	
	//alert(board);
	changePlayer();
}

function changePlayer(){
	playerType = (playerType == "X"?"O":"X");
	playerText();
}

function checkWin(){
	//for (w in winPlay){
	//	alert(winPlay[w]);
	//}
	//alert(board);
	var isWin = false;
	winPlay.forEach(function(item, index, array) {
	  //alert(item + " : " +index);
	  var b1 = winPlay[index][0];
	  var b2 = winPlay[index][1];
	  var b3 = winPlay[index][2];
	  if (board[b1] == playerType && board[b1] == playerType && board[b3] == playerType){
	  	alert(board[b1] +","+board[b2]+","+board[b3]);
	  	isWin = true;
	  }
	});
	return isWin;
}

function diplayCell(num){
	var cellname = "cell" + num;
	var cell = document.getElementById(cellname);
	cell.innerHTML=playerType;
}

function playerText(){
 	var player = document.getElementById("playerText");
  	player.innerHTML="Player: " + playerType;
}

function start(){
	board = [" "," "," "," "," "," "," "," "," "];
  	playerType ="X";
  	gameOver = false;
  	playerText();
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
} else {
    //The DOMContentLoaded event has already fired.
    start();
}

///window.onload = start();


