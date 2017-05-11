/**
 * Created by Combii on 27/04/2017.
 */

team1 = {
    "score":0,
    "fouls":0
};

team2 = {
    "score":0,
    "fouls":0
};

window.onload = function start() {
    setTimer("00:00:00");
    resetScore();
};

function setScoreTeamOne(){
    setScore("score1");
}

function setScoreTeamTwo(){
    setScore("score2");
}


function setScore(team) {
    var canvas = document.getElementById(team);

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(team === "score1") {
        team1.score  += 1;
        ctx.fillText(team1.score + "", canvas.width / 2, (canvas.height / 2) + 40);
    }
    else if(team === "score2") {
        team2.score  += 1;
        ctx.fillText(team2.score + "", canvas.width / 2, (canvas.height / 2) + 40);
    }
}


function setTimer(time){
    var canvas = document.getElementById("timerCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.font = "75px Arial";
    ctx.textAlign = "center";


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillText(time, canvas.width/2, (canvas.height/2) + 30);
}


function resetScore() {
    team1.score = 0;
    team2.score = 0;

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

    stop();
}