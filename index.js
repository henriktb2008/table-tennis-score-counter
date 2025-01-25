let homeScoreEl = document.getElementById("home-score-el")
let awayScoreEl = document.getElementById("away-score-el")
let ballEl = document.getElementById("ball-el")

let homeScore = 0
let awayScore = 0
let serve = "home"
let serveCount = 1

function pointToHome() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
    served()
}

function pointToAway() {
    awayScore += 1
    awayScoreEl.innerText = awayScore
    served()
}

function setServer() {
    if (serve === "home") {
        ballEl.style.left = "25%"
    } else if (serve === "away") {
        ballEl.style.left = "75%"
    }
}

function changeServer() {
    if (serve === "home") {
        serve = "away"
    } else if (serve === "away") {
        serve = "home"
    }
    setServer()
}

function served() {
    
    if (serveCount <= 1) {
        serveCount += 1
    } else {
        serveCount = 1
        changeServer()
    }
    
}

setServer()