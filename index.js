let highScore = document.getElementById("high-score")
// Determines where current points get displayed

let currentLevel = document.getElementById("current-level")
// Determines where current level gets displayed

let levelCost = document.getElementById("level-cost")
// Determines where level up cost gets displayed

let count = 0
// Count that is displayed

let countIncrease = 1
// Amount the count increases by. Default is 1.

let level = 1
// Current upgrade level

let upgradeButton = document.getElementById("upgrade")

function updateButton() {
    if (count >= levelUpCost) {
        upgradeButton.style.color="var(--secondary-color-light)"
        upgradeButton.style.border="3px outset var(--secondary-color)"
        upgradeButton.style.backgroundColor="var(--secondary-color)"
    }
    else {
        upgradeButton.style.color="var(--dark-gray)"
        upgradeButton.style.border="3px outset var(--dark-gray)"
        upgradeButton.style.backgroundColor="var(--light-gray)"
    }
}
// Change button color when ready to be used.

function increment() {
    count += countIncrease
    highScore.innerText = count
    updateButton()
}
// Function that makes buttonpress increase your count. Also changes the color of level up button.

// ------------------- IMAGE CHANGING CODE ------------------- //

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

// ------------------------ Cat image code ^ ---------------------- //

let levelUpCost = 100

function upgrade() {
    if (count >= levelUpCost) {
        count = count - levelUpCost
        highScore.innerText = count
        countIncrease += 1
        level += 1
        currentLevel.innerText = level
        levelUpCost = levelUpCost * 1.05
        levelUpCost = Math.round(levelUpCost)
        levelCost.innerText = levelUpCost
        catImageUpgrade()
        updateButton()
    }
    else { 
    }
}

// Basic upgrade.





console.log("If you hax u sux, dont hax plz")