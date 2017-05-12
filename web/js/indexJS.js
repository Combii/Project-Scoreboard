/**
 * Created by Combii on 27/04/2017.
 */

match = {
    "teamOneScore":0,
    "teamOneFouls":0,

    "teamTwoScore":0,
    "teamTwoFouls":0,
    "half":0
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

function setHalf(){
    setScore("halfCanvas");
}

function setScore(team) {
    var canvas = document.getElementById(team);

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(team === "score1") {
        match.teamOneScore  += 1;
        ctx.fillText(match.teamOneScore + "", canvas.width / 2, (canvas.height / 2) + 40);
    }
    else if(team === "score2") {
        match.teamTwoScore  += 1;
        ctx.fillText(match.teamTwoScore + "", canvas.width / 2, (canvas.height / 2) + 40);
    }
    else if(team === "halfCanvas") {
        match.half  += 1;
        ctx.fillText(match.half + "", canvas.width / 2, (canvas.height / 2) + 40);
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
        match.teamOneFouls  += 1;
        ctx.fillText(match.teamOneFouls + "", canvas.width / 2, (canvas.height / 2) + 40);
    }
    else if(team === "fouls2") {
        match.teamTwoFouls  += 1;
        ctx.fillText(match.teamTwoFouls + "", canvas.width / 2, (canvas.height / 2) + 40);
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
    match.teamOneScore = -1;
    match.teamTwoScore = -1;
    match.teamOneFouls = -1;
    match.teamTwoFouls = -1;
    match.half = -1;


    setUpCanvas("score1");
    setUpCanvas("score2");
    setUpCanvas("fouls1");
    setUpCanvas("fouls2");
    setUpCanvas("halfCanvas");


    setFoulTeamOne();
    setFoulTeamTwo();

    setScoreTeamOne();
    setScoreTeamTwo();

    setHalf();

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