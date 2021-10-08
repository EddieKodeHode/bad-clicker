let highScore = document.getElementById("high-score")

let count = 0

let countIncrease = 1

function increment() {
    count += countIncrease
    highScore.innerText = count
}

let upgradeButton = document.getElementById("upgrade")

function upgrade() {
    if (count >= 100) {
        count = count - 100
        highScore.innerText = count
        countIncrease += 1
    }
    else { 
    }
}