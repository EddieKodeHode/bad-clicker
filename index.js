let highScore = document.getElementById("high-score")

let count = 0

function increment() {
    count = count + 1
    highScore.innerText = count
}

// let upgradeButton = document.getElementById("upgrade")

// function upgrade() {
//     if count >= 100 {
//         count = count - 100
//         highScore.innerText = count
//     }
//     else {
//     }
// }