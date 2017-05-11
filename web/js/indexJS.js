/**
 * Created by Combii on 27/04/2017.
 */


var score = 0;

function setScore(){
    score = score + 1;
    var canvas = document.getElementById("score1");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(10, 10, canvas.width, canvas.height);

    ctx.font = "30px Arial";
    ctx.fillText(score,10,50);
}

