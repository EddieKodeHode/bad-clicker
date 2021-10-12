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

let dupeNumber = 0.5
// Current duplicator increase number.

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

let buttonKibble = document.getElementById("button-kibble")
let buttonToy = document.getElementById("button-toy")
let buttonFriend = document.getElementById("button-friend")
// 

let $kibble0 = ""
let $kibble1 = "url(images/kibble1.png)"
let $kibble2 = "url(images/kibble2.png)"
let $kibble3 = "url(images/kibble3.png)"

let $toy0 = ""
let $toy1 = "url(images/toy1.png)"
let $toy2 = "url(images/toy2.png)"
let $toy3 = "url(images/toy3.png)"


let $friend0 = ""
let $friend1 = "url(images/friend1.png)"
let $friend2 = "url(images/friend2.png)"
let $friend3 = "url(images/friend3.png)"
// Set image source for upgrade graphics

let kibbleLevel = document.getElementById("kibble-level")
let toyLevel = document.getElementById("toy-level")
let friendLevel = document.getElementById("friend-level")

let kibbleCost = document.getElementById("kibble-cost")
let toyCost = document.getElementById("toy-cost")
let friendCost = document.getElementById("friend-cost")

let kibbleC = 1000
let toyC = 100000
let friendC = 1000000

let kibbleL = 0
let toyL = 0
let friendL = 0

function updateKibbleButton() {
    if (count >= kibbleC) {
        buttonKibble.style.color="var(--secondary-color-light)"
        buttonKibble.style.border="3px outset var(--secondary-color)"
        buttonKibble.style.backgroundColor="var(--secondary-color)"
    }
    else {
        buttonKibble.style.color="var(--dark-gray)"
        buttonKibble.style.border="3px outset var(--dark-gray)"
        buttonKibble.style.backgroundColor="var(--light-gray)"
    }
}

function updateToyButton() {
    if (count >= toyC) {
        buttonToy.style.color="var(--secondary-color-light)"
        buttonToy.style.border="3px outset var(--secondary-color)"
        buttonToy.style.backgroundColor="var(--secondary-color)"
    }
    else {
        buttonToy.style.color="var(--dark-gray)"
        buttonToy.style.border="3px outset var(--dark-gray)"
        buttonToy.style.backgroundColor="var(--light-gray)"
    }
}

function updateFriendButton() {
    if (count >= friendC) {
        buttonFriend.style.color="var(--secondary-color-light)"
        buttonFriend.style.border="3px outset var(--secondary-color)"
        buttonFriend.style.backgroundColor="var(--secondary-color)"
    }
    else {
        buttonFriend.style.color="var(--dark-gray)"
        buttonFriend.style.border="3px outset var(--dark-gray)"
        buttonFriend.style.backgroundColor="var(--light-gray)"
    }
}

function kibbleUp() {
    if ( count >= kibbleC ) {
        count = count - kibbleC
        kibbleL += 1
        kibbleLevel.innerText = kibbleL
        dupeNumber = 0.5
        duplicate()
        kibbleC = ( kibbleC * 1.5)
        kibbleC = Math.round(kibbleC)
        kibbleCost.innerText = kibbleC
        upgradeAll()
    }
}

function toyUp() {
    if ( count >= toyC ) {
        count = count - toyC
        toyL += 1
        toyLevel.innerText = toyL
        dupeNumber = 1
        duplicate()
        toyC = ( toyC * 1.5)
        toyC = Math.round(toyC)
        toyCost.innerText = toyC
        upgradeAll()
    }
}

function friendUp() {
    if ( count >= friendC ) {
        count = count - friendC
        friendL += 1
        friendLevel.innerText = friendL
        dupeNumber = 2
        duplicate()
        friendC = ( friendC * 1.5)
        friendC = Math.round(friendC)
        friendCost.innerText = friendC
        upgradeAll()
    }
}


function kibbleImage() {
    if (kibbleL >= 20) {
        kibbleImg.style.backgroundImage=$kibble3
    }
    else if (kibbleL >= 10) {
        kibbleImg.style.backgroundImage=$kibble2
    }
    else if (kibbleL >= 1) {
        kibbleImg.style.backgroundImage=$kibble1
    }
    else {
        kibbleImg.style.backgroundImage=$kibble0
    }
}

function toyImage() {
    if (toyL >= 20) {
        toyImg.style.backgroundImage=$toy3
    }
    else if (toyL >= 10) {
        toyImg.style.backgroundImage=$toy2
    }
    else if (toyL >= 1) {
        toyImg.style.backgroundImage=$toy1
    }
    else {
        toyImg.style.backgroundImage=$toy0
    }
}

function friendImage() {
    if (friendL >= 20) {
        friendImg.style.backgroundImage=$friend3
    }
    else if (friendL >= 10) {
        friendImg.style.backgroundImage=$friend2
    }
    else if (friendL >= 1) {
        friendImg.style.backgroundImage=$friend1
    }
    else {
        friendImg.style.backgroundImage=$friend0
    }
}

function updateScore() {
    highScore.innerText = count
}

function upgradeAll() {
    catImageUpgrade()
    updateButton()
    updateKibbleButton()
    updateToyButton()
    updateFriendButton()
    updateScore()
    kibbleImage()
    toyImage()
    friendImage()
}


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
    upgradeAll()
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
let $cat4 = "url(images/cat4.png)"
let $cat5 = "url(images/cat5.png)"
let $cat6 = "url(images/cat6.png)"
let $cat7 = "url(images/cat7.png)"

// Assigning the url(image path here) to a var so code becomes more readable

function catImageUpgrade() {
    if (level >= 1000){
        img.style.backgroundImage=$cat7
    }
    else if (level >= 750){
        img.style.backgroundImage=$cat6
    }
    else if (level >= 500){
        img.style.backgroundImage=$cat5
    }
    else if (level >= 250){
        img.style.backgroundImage=$cat4
    }
    else if (level >= 100){
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
        countIncrease += 1
        level += 1
        currentLevel.innerText = level
        levelUpCost = levelUpCost * 1.05
        levelUpCost = Math.round(levelUpCost) //Rounds the number so there's no decimals.
        levelCost.innerText = levelUpCost
        upgradeAll()
    }
    else { 
    }
}
// Basic level up.


//  ------------------- TO-DO LIST ----------------------
// 
//  -   ADD POINT DUPLICATORS
//  -   ADD IDLE POINTS?
//  -   ADD SOUND EFFECTS
//  -   LEADERBOARD (eventually...)
//  -   tba



console.log("If you hax u sux, dont hax plz")
// I was told this will discourage console cheaters :')