let homeScoreEl = document.getElementById("home-score-el")
let awayScoreEl = document.getElementById("away-score-el")
let ballEl = document.getElementById("ball-el")

let homeScore = 0
let awayScore = 0

let serve = "home"
let serveCount = 1

let homeSet = 0
let awaySet = 0

let firstToPoint = 11
let firstToSet = 3

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
    
    if (homeScore >= firstToPoint) {
        if (homeScore - awayScore >= 2){
            console.log("home wins")
            homeScore = 0
            homeScoreEl.innerText = homeScore
            awayScore = 0
            awayScoreEl.innerText = awayScore
            homeSet += 1
            serve = "away"
            serveCount = 1
            setServer()
        }
    }

    if (awayScore >= firstToPoint) {
        if (awayScore - homeScore >= 2){
            console.log("away wins")
            homeScore = 0
            homeScoreEl.innerText = homeScore
            awayScore = 0
            awayScoreEl.innerText = awayScore
            awaySet += 1
            serve = "home"
            serveCount = 1
            setServer()
        }
    }
}

setServer()