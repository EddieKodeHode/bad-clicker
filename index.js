let highScore = document.getElementById("high-score")
// Determines where current points get displayed

let currentLevel = document.getElementById("current-level")
// Determines where current level gets displayed

let levelCost = document.getElementById("level-cost")
// Determines where level up cost gets displayed

let upgradeButton = document.getElementById("upgrade")
// Determines where upgrade cost will be displayed.

let duplicateValue = document.getElementById("duplicator-value")
// Determines where duplicator value will be displayed

let count = 0
// Count that is displayed

let countIncrease = 1
// Amount the count increases by. Default is 1.

let level = 1
// Current upgrade level. Starts at 1. Matches default countIncrease value.

let duplicator = 1.0
// Current duplicator level. starts at 1.0.


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
// Function that updates the "Level up" button from gray to colored when you can purchase from it

function increment() {
    count += (countIncrease * duplicator)
    count = Math.round(count)
    highScore.innerText = count
    updateButton()
}
// Function that makes buttonpress increase your count
// It also checks if the "Level up" button needs to be updated.
// Rounds up count to exclude decimals

// ------------------- IMAGE CHANGING CODE ------------------- //

let img = document.getElementById("cat-image")
// Determines where the images will go

let $cat0 = "url(images/cat1n.png)"
let $cat1 = "url(images/cat1.png)"
let $cat2 = "url(images/cat2.png)"
let $cat3 = "url(images/cat3.png)"

// Assigning the url(image path here) to a var so code becomes more readable

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
// Else/If code that checks if the current level is high enough to switch to a new image.
// Call the function during the upgrade/level up function.

catImageUpgrade()
// Call the function once to make sure the correct image is displayed initially.


// ------------------------ Cat image code ^ ---------------------- //

let levelUpCost = 100
// Set a default level up cost. This will change

function upgrade() {
    if (count >= levelUpCost) {
        count = count - levelUpCost
        highScore.innerText = count
        countIncrease += 1
        level += 1
        currentLevel.innerText = level
        levelUpCost = levelUpCost * 1.05
        levelUpCost = Math.round(levelUpCost) //Rounds the number so there's no decimals.
        levelCost.innerText = levelUpCost
        catImageUpgrade()
        updateButton()
    }
    else { 
    }
}
// Basic level up.

let dupeNumber = 0.5

function duplicate() {
    duplicator += dupeNumber
    duplicateValue.innerText = duplicator
}
// Duplication function. Change dupeNumber to increase/decrease dupe value.
// Call this function inside another function.

let kibbleImg = document.getElementById("kibble-img")
let toyImg = document.getElementById("toy-img")
let friendImg = document.getElementById("friend-img")
// Set destination for upgrade purchase graphics

let $kibble0 = ""
let $kibble1 = "url(images/kibble1)"

let $toy0 = ""
let $toy1 = "url(images/toy1.png)"

let $friend0 = ""
let $friend1 = "url(images/friend1.png)"
// Set image source for upgrade graphics


//  ------------------- TO-DO LIST ----------------------
// 
//  -   ADD POINT DUPLICATORS
//  -   ADD IDLE POINTS?
//  -   ADD SOUND EFFECTS
//  -   LEADERBOARD (eventually...)
//  -   tba



console.log("If you hax u sux, dont hax plz")
// I was told this will discourage console cheaters :')