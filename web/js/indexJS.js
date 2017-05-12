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

function setFoulTeamOne(){
    setFoul("fouls1");
}

function setFoulTeamTwo() {
    setFoul("fouls2");
}


function setFoul(team) {
    var canvas = document.getElementById(team);

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(team === "fouls1") {
        team1.fouls  += 1;
        ctx.fillText(team1.fouls + "", canvas.width / 2, (canvas.height / 2) + 40);
    }
    else if(team === "fouls2") {
        team2.fouls  += 1;
        ctx.fillText(team2.fouls + "", canvas.width / 2, (canvas.height / 2) + 40);
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
    team1.score = -1;
    team2.score = -1;
    team1.fouls = -1;
    team2.fouls = -1;

    var canvas1 = document.getElementById("score1");
    var canvas2 = document.getElementById("score2");
    var canvas3 = document.getElementById("fouls1");
    var canvas4 = document.getElementById("fouls2");

    var ctx1 = canvas1.getContext("2d");
    var ctx2 = canvas2.getContext("2d");
    var ctx3 = canvas3.getContext("2d");
    var ctx4 = canvas4.getContext("2d");

    ctx1.fillStyle = "white";
    ctx1.font = "100px Arial";
    ctx1.textAlign = "center";

    ctx2.fillStyle = "white";
    ctx2.font = "100px Arial";
    ctx2.textAlign = "center";


    ctx3.fillStyle = "white";
    ctx3.font = "100px Arial";
    ctx3.textAlign = "center";

    ctx4.fillStyle = "white";
    ctx4.font = "100px Arial";
    ctx4.textAlign = "center";

    setFoulTeamOne();
    setFoulTeamTwo();

    setScoreTeamOne();
    setScoreTeamTwo();

    stop();
}