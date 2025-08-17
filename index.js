let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

let homeScore = 0;
let guestScore = 0;

function homeAddOne() {
    homeScore += 1;
    checkLeader();
    homeScoreEl.textContent = homeScore;
}

function homeAddTwo() {
    homeScore += 2;
    checkLeader();
    homeScoreEl.textContent = homeScore;
}

function homeAddThree() {
    homeScore += 3;
    checkLeader();
    homeScoreEl.textContent = homeScore;
}

function guestAddOne() {
    guestScore += 1;
    checkLeader();
    guestScoreEl.textContent = guestScore;
}

function guestAddTwo() {
    guestScore += 2;
    checkLeader();
    guestScoreEl.textContent = guestScore;
}

function guestAddThree() {
    guestScore += 3;
    checkLeader();
    guestScoreEl.textContent = guestScore;
}

function newGame() {
    guestScore = 0;
    guestScoreEl.textContent = 0;
    homeScore = 0;
    homeScoreEl.textContent = 0;
    
    // Remove leader AND parity styling from home, if any
    if (homeScoreEl.classList.contains("score-leader-shadow")) {
        homeScoreEl.classList.remove("score-leader-shadow");
    }
    if (homeScoreEl.classList.contains("score-parity-shadow")) {
        homeScoreEl.classList.remove("score-parity-shadow");
    }
    
    // Remove leader AND parity styling from guest, if any
    if (guestScoreEl.classList.contains("score-leader-shadow")) {
        guestScoreEl.classList.remove("score-leader-shadow");
    }
    if (guestScoreEl.classList.contains("score-parity-shadow")) {
        guestScoreEl.classList.remove("score-parity-shadow");
    }
}

function checkLeader() {
    
    // Add leader styling to home, if leader AND remove from guest
    if (homeScore > guestScore) {
        if (guestScoreEl.classList.contains("score-leader-shadow")) {
            guestScoreEl.classList.remove("score-leader-shadow");
        }
        homeScoreEl.classList.add("score-leader-shadow");
    }
    
    // Add leader styling to guest, if leader AND remove from home
    if (homeScore < guestScore) {
        if (homeScoreEl.classList.contains("score-leader-shadow")) {
            homeScoreEl.classList.remove("score-leader-shadow");
        }
        guestScoreEl.classList.add("score-leader-shadow");
    }
    
    if (homeScore > 0 && guestScore > 0 && homeScore === guestScore) {
        // Remove leader styling from guest, if any
        if (guestScoreEl.classList.contains("score-leader-shadow")) {
            guestScoreEl.classList.remove("score-leader-shadow");
        }
        // Remove leader styling from home, if any
        if (homeScoreEl.classList.contains("score-leader-shadow")) {
            homeScoreEl.classList.remove("score-leader-shadow");
        }
        
        // Add parity styling to both
        guestScoreEl.classList.add("score-parity-shadow");
        homeScoreEl.classList.add("score-parity-shadow");
    } else {
        // Remove parity styling from both
        guestScoreEl.classList.remove("score-parity-shadow");
        homeScoreEl.classList.remove("score-parity-shadow");
    }
}
