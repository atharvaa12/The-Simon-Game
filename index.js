var levelNum = 0;
var gameover = 0;
var iter = 0;
for (var i = 0; i < 4; i++) {
  
    document.querySelectorAll(".btn")[i].addEventListener("click", function (event) {
      //var color = event.classList[1];
        checker(event.target.classList[1]); 
    
     
    });
}
document.addEventListener("keydown", function () {
  if (levelNum == 0) {
    levelNum = levelNum + 1;

    playnewlevel();
  }
});

var commands = new Array();
// function start(){
//     while(gameover==0){
//         var tile=Math.floor(Math.random()*4);
//         commands.push(tile);
//         clicked(tile);
//         iter=0;
//         if(gameover==1){
//             levelNum=0;
//             document.querySelector("h1").innerHTML="Game Over. Press any key to restart";
//             break;
//         }
//         else{
//             levelNum=levelNum+1;
//             document.querySelector("h1").innerHTML="Level"+levelNum;
//         }

//     }
// }
function playnewlevel() {
    iter=0;
  document.querySelector("h1").innerHTML = "Level " + levelNum;
  addCommand();
}
function addCommand() {
  var tile = Math.floor(Math.random() * 4);
  commands.push(tile);
  clicked(tile);
}
function checker(event) {
  var colorNum = 0;
  switch (event) {
    case "green":
      colorNum = 0;
      break;
    case "red":
      colorNum = 1;
      break;
    case "yellow":
      colorNum = 2;
      break;
    case "blue":
      colorNum = 3;
      break;
    default:
        alert(event);
  }
  clicked(colorNum);
  // if(iter==commands.length()){
  //     // document.querySelector("body").classList.add("game-over");
  //     // var gameover=new Audio("sounds/wrong.mp3");
  //     // setTimeout(function(){
  //     //     document.querySelector("body").classList.remove("game-over");
  //     // },300);
  // }
  if (commands[iter] != colorNum) {
    document.querySelector("body").classList.add("game-over");
    var gameover = new Audio("sounds/wrong.mp3");
    gameover.play();
    setTimeout(function () {
      document.querySelector("body").classList.remove("game-over");
    }, 300);
    levelNum=0;
    document.querySelector("h1").innerHTML="Game Over. Press any key to restart";
    commands.length=0;
    
  } else {
    iter = iter + 1;
    if(iter==commands.length){

        //console.log("here");
        levelNum=levelNum+1;
        setTimeout(function(){
            playnewlevel();
        },400);
    }
  }
}
function clicked(tile) {
  switch (tile) {
    case 0:
      var green = new Audio("sounds/green.mp3");
      green.play();
      document.querySelector(".green").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".green").classList.remove("pressed");
      }, 300);

      break;
    case 1:
      var red = new Audio("sounds/red.mp3");
      red.play();
      document.querySelector(".red").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".red").classList.remove("pressed");
      }, 300);
      break;
    case 2:
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      document.querySelector(".yellow").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".yellow").classList.remove("pressed");
      }, 300);
      break;
    case 3:
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      document.querySelector(".blue").classList.add("pressed");
      setTimeout(function () {
        document.querySelector(".blue").classList.remove("pressed");
      }, 300);
      break;
    default:
      break;
  }
}
