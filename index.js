let highScore = document.getElementById("high-score")
// Determines where current points get displayed

let currentLevel = document.getElementById("current-level")
// Determines where current level gets displayed

let count = 0
// Count that is displayed

let countIncrease = 1
// Amount the count increases by. Default is 1.

let level = 1
// Current upgrade level

function increment() {
    count += countIncrease
    highScore.innerText = count
}
// Function that makes buttonpress increase your count

// TESTING CHANGING IMAGE.

let img = document.getElementById("cat-image")

let $cat0 = "url(images/cat1n.png)"
let $cat1 = "url(images/cat1.png)"
let $cat2 = "url(images/cat2.png)"
let $cat3 = "url(images/cat3.png)"

function catImageUpgrade() {
    if (level >= 100){
        img.style.backgroundImage=$cat3
    }
    else if (level >= 50){
        img.style.backgroundImage=$cat2
    }
    else if (level >= 10){
        img.style.backgroundImage=$cat1
    }
    else {
        img.style.backgroundImage=$cat0

    }
}

catImageUpgrade()

// FOR SOME REASON THIS DOESNT WORK??

let upgradeButton = document.getElementById("upgrade")

function upgrade() {
    if (count >= 100) {
        count = count - 100
        highScore.innerText = count
        countIncrease += 1
        level += 1
        currentLevel.innerText = level
        catImageUpgrade()
    }
    else { 
    }
}

// Basic upgrade.



console.log("If you hax u sux, dont hax plz")