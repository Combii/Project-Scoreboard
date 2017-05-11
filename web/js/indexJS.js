/**
 * Created by Combii on 27/04/2017.
 */


var score1 = 0;
var score2 = 0;

window.onload = function start() {
    resetScore();
};

function setScore1(){
    score1 = score1 + 1;

    var canvas = document.getElementById("score1");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillText(score1, canvas.width/2, (canvas.height/2) + 40);
}

function setScore2(){
    score2 = score2 + 1;

    var canvas = document.getElementById("score2");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillText(score2, canvas.width/2, (canvas.height/2) + 40);
}


function resetScore() {
    var canvas1 = document.getElementById("score1");
    var canvas2 = document.getElementById("score2");

    var ctx1 = canvas1.getContext("2d");
    var ctx2 = canvas2.getContext("2d");

    ctx1.fillStyle = "white";
    ctx1.font = "100px Arial";
    ctx1.textAlign = "center";

    ctx2.fillStyle = "white";
    ctx2.font = "100px Arial";
    ctx2.textAlign = "center";

    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    ctx1.fillText("0", canvas1.width / 2, (canvas1.height/2) + 40);
    ctx2.fillText("0", canvas2.width / 2, (canvas2.height/2) + 40);
}

function timer(){
    var timer = new Timer();
    timer.start();
    timer.addEventListener('secondsUpdated', function (e) {
        $('#basicUsage').html(timer.getTimeValues().toString());
    });
}