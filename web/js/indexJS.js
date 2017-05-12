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

    setUpCanvas("score1");
    setUpCanvas("score2");
    setUpCanvas("fouls1");
    setUpCanvas("fouls2");

    setFoulTeamOne();
    setFoulTeamTwo();

    setScoreTeamOne();
    setScoreTeamTwo();

    reset();

    function setUpCanvas(canvasID)   // Only visible inside resetScore()
    {
        var canvas = document.getElementById(canvasID);
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "white";
        ctx.font = "100px Arial";
        ctx.textAlign = "center";
    }
}