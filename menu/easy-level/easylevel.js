const b1El = document.getElementById("b-1-el")
const b2El = document.getElementById("b-2-el")
const b3El = document.getElementById("b-3-el")
const b4El = document.getElementById("b-4-el")
const b5El = document.getElementById("b-5-el")
const b6El = document.getElementById("b-6-el")

const w4b1El = document.getElementById("w-4-b-1-el")
const w3b1El = document.getElementById("w-3-b-1-el")
const w2b1El = document.getElementById("w-2-b-1-el")
const w1b1El = document.getElementById("w-1-b-1-el")

const w4b2El = document.getElementById("w-4-b-2-el")
const w3b2El = document.getElementById("w-3-b-2-el")
const w2b2El = document.getElementById("w-2-b-2-el")
const w1b2El = document.getElementById("w-1-b-2-el")

const w4b3El = document.getElementById("w-4-b-3-el")
const w3b3El = document.getElementById("w-3-b-3-el")
const w2b3El = document.getElementById("w-2-b-3-el")
const w1b3El = document.getElementById("w-1-b-3-el")

const w4b4El = document.getElementById("w-4-b-4-el")
const w3b4El = document.getElementById("w-3-b-4-el")
const w2b4El = document.getElementById("w-2-b-4-el")
const w1b4El = document.getElementById("w-1-b-4-el")

const w4b5El = document.getElementById("w-4-b-5-el")
const w3b5El = document.getElementById("w-3-b-5-el")
const w2b5El = document.getElementById("w-2-b-5-el")
const w1b5El = document.getElementById("w-1-b-5-el")

const w4b6El = document.getElementById("w-4-b-6-el")
const w3b6El = document.getElementById("w-3-b-6-el")
const w2b6El = document.getElementById("w-2-b-6-el")
const w1b6El = document.getElementById("w-1-b-6-el")

const levelEl = document.getElementById("level-el")
const restartEl = document.getElementById("restart-btn-el")
const undoEl = document.getElementById("undo-btn-el")
const nextEl = document.getElementById("next-btn-el")

let clickedWater = null
let secondClickedWater = null
let thirdClickedWater = null
let clickedBottle = null
let fullBottles = []
let num = null
let levelEasy = "1"
let levelCompleted = false
let savedWater = []
let savedColor = []
let currentSavedWater = []
let currentSavedColor = []
let currentSavedFullBottle = []
let colors = []
let colors2 = []
let colors3 = []
let colors4 = []
let listOfColors = []
let listOfSavedLevels = []
let firstNum = 0
let secondNum = 0
let thirdNum = 0
let fourthNum = 0
let lastBottle = undefined
let savedFullBottles = []
let levelStart = true
let secondSavedWater = []
let secondSavedColor = []

let localState = null
let savedLocalState = null
let localB1 = "localB1"
let localB2 = "localB2"
let localB3 = "localB3"
let localB4 = "localB4"
let localB5 = "localB5"
let savedLocalFullBottles = []

levelEl.textContent = levelEasy

w1b6El.isEmpty = undefined
w2b6El.isEmpty = undefined
w3b6El.isEmpty = undefined
w4b6El.isEmpty = undefined

emptyWater(w1b4El)
emptyWater(w2b4El)
emptyWater(w3b4El)
emptyWater(w4b4El)

emptyWater(w1b5El)
emptyWater(w2b5El)
emptyWater(w3b5El)
emptyWater(w4b5El)

localLoading()

localFullBottlesLoading(0, b1El, localB1)
localFullBottlesLoading(0, b2El, localB2)
localFullBottlesLoading(0, b3El, localB3)
localFullBottlesLoading(0, b4El, localB4)
localFullBottlesLoading(0, b5El, localB5)

localFullBottlesLoading(1, b1El, localB1)
localFullBottlesLoading(1, b2El, localB2)
localFullBottlesLoading(1, b3El, localB3)
localFullBottlesLoading(1, b4El, localB4)
localFullBottlesLoading(1, b5El, localB5)

localFullBottlesLoading(2, b1El, localB1)
localFullBottlesLoading(2, b2El, localB2)
localFullBottlesLoading(2, b3El, localB3)
localFullBottlesLoading(2, b4El, localB4)
localFullBottlesLoading(2, b5El, localB5)

undoEl.addEventListener("click", function() {
    if(listOfSavedLevels.length !== 0) {
        if(listOfSavedLevels[listOfSavedLevels.length - firstNum] !== listOfSavedLevels[0]) {
            firstNum += 4
            secondNum += 3

            if(thirdNum === 1) {
                secondNum += 1
            }

            if(fourthNum >= 2) {
                secondNum += 1
            }

            if(
                firstNum > listOfSavedLevels.length || 
                secondNum > listOfSavedLevels.length
            ) {
                firstNum -= 4
                secondNum -= 3
                if(thirdNum === 1) {
                    secondNum -= 1
                }
                if(fourthNum >= 2) {
                    secondNum -= 1
                }
            }

            thirdNum++
            fourthNum++

            if(fullBottles.length > 0) {
                lastBottle = fullBottles[fullBottles.length - 1]
            }

            if(savedFullBottles.length > 0) {
                return
            }
            else {
                if(fullBottles.length === 1) {
                    savedFullBottles.push(fullBottles[0])
                }
                else if(fullBottles.length === 2) {
                    savedFullBottles.push(fullBottles[0])
                    savedFullBottles.push(fullBottles[1])
                }
                else if(fullBottles.length === 3) {
                    savedFullBottles.push(fullBottles[0])
                    savedFullBottles.push(fullBottles[1])
                    savedFullBottles.push(fullBottles[2])
                }
            }

            reset()
            currentWaterPlacer(w1b1El, 0, 1, 2, 3, 0)
            currentWaterPlacer(w2b1El, 4, 5, 6, 7, 1)
            currentWaterPlacer(w3b1El, 8, 9, 10, 11, 2)
            currentWaterPlacer(w4b1El, 12, 13, 14, 15, 3)
            currentWaterPlacer(w1b2El, 16, 17, 18, 19, 4)
            currentWaterPlacer(w2b2El, 20, 21, 22, 23, 5)
            currentWaterPlacer(w3b2El, 24, 25, 26, 27, 6)
            currentWaterPlacer(w4b2El, 28, 29, 30, 31, 7)
            currentWaterPlacer(w1b3El, 32, 33, 34, 35, 8)
            currentWaterPlacer(w2b3El, 36, 37, 38, 39, 9)
            currentWaterPlacer(w3b3El, 40, 41, 42, 43, 10)
            currentWaterPlacer(w4b3El, 44, 45, 46, 47, 11)
            currentWaterPlacer(w1b4El, 48, 49, 50, 51, 12)
            currentWaterPlacer(w2b4El, 52, 53, 54, 55, 13)
            currentWaterPlacer(w3b4El, 56, 57, 58, 59, 14)
            currentWaterPlacer(w4b4El, 60, 61, 62, 63, 15)
            currentWaterPlacer(w1b5El, 64, 65, 66, 67, 16)
            currentWaterPlacer(w2b5El, 68, 69, 70, 71, 17)
            currentWaterPlacer(w3b5El, 72, 73, 74, 75, 18)
            currentWaterPlacer(w4b5El, 76, 77, 78, 79, 19)

            currentSavedWater = []
            currentSavedColor = []
            currentSavedFullBottle = []
            levelCompleted = false
            nextEl.style.backgroundImage = "url('../media/next-gray.png')"
            nextEl.style.cursor = "default"

            isBottleFull(0, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(0, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(0, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(0, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(0, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
    
            isBottleFull(1, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(1, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(1, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(1, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(1, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
    
            isBottleFull(2, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(2, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(2, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(2, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(2, b5El, w4b5El, w3b5El, w2b5El, w1b5El)

            if(fullBottles.length < savedFullBottles.length) {
                savedLocalFullBottles.pop()
                lastBottle.style.borderColor = "#e5e7e9"
                lastBottle.style.cursor = "pointer"
                savedFullBottles.pop()
            }

            savedFullBottles = []

            localSaving()
            localSaving()
        }
        else {
            firstNum = 0
            secondNum = 0
            thirdNum = 0
            fourthNum = 0
            listOfSavedLevels = []
            localSaving()
            localSaving()
        }
    }
})

function currentWaterPlacer(w, number1, number2, number3, number4, number5) {
    w.isGreen = listOfSavedLevels[listOfSavedLevels.length - firstNum][number1]
    w.isRed = listOfSavedLevels[listOfSavedLevels.length - firstNum][number2]
    w.isBlue = listOfSavedLevels[listOfSavedLevels.length - firstNum][number3]
    w.isEmpty = listOfSavedLevels[listOfSavedLevels.length - firstNum][number4]
    w.style.backgroundColor = listOfSavedLevels[listOfSavedLevels.length - secondNum][number5]
}

function currentLevelPositionSaving() {
    currentSavedWater = []
    currentSavedColor = []
    currentWaterSaver(w1b1El)
    currentWaterSaver(w2b1El)
    currentWaterSaver(w3b1El)
    currentWaterSaver(w4b1El)
    currentWaterSaver(w1b2El)
    currentWaterSaver(w2b2El)
    currentWaterSaver(w3b2El)
    currentWaterSaver(w4b2El)
    currentWaterSaver(w1b3El)
    currentWaterSaver(w2b3El)
    currentWaterSaver(w3b3El)
    currentWaterSaver(w4b3El)
    currentWaterSaver(w1b4El)
    currentWaterSaver(w2b4El)
    currentWaterSaver(w3b4El)
    currentWaterSaver(w4b4El)
    currentWaterSaver(w1b5El)
    currentWaterSaver(w2b5El)
    currentWaterSaver(w3b5El)
    currentWaterSaver(w4b5El)
    if(fullBottles.length === 1) {
        currentSavedFullBottle.push(fullBottles[0])
    }
    else if(fullBottles.length === 2) {
        currentSavedFullBottle.push(fullBottles[0])
        currentSavedFullBottle.push(fullBottles[1])
    }
    else if(fullBottles.length === 3) {
        currentSavedFullBottle.push(fullBottles[0])
        currentSavedFullBottle.push(fullBottles[1])
        currentSavedFullBottle.push(fullBottles[2])
    }
    listOfSavedLevels.push(currentSavedWater, currentSavedColor, currentSavedFullBottle, levelStart)
    currentSavedFullBottle = []
    if(levelStart) {
        levelStart = false
    }
}

function currentWaterSaver(w) {
    currentSavedWater.push(w.isGreen)
    currentSavedWater.push(w.isRed)
    currentSavedWater.push(w.isBlue)
    currentSavedWater.push(w.isEmpty)
    currentSavedColor.push(w.style.backgroundColor)
}

function levelCompletion() {
    if(
        fullBottles.includes(fullBottles[0]) &&
        fullBottles.includes(fullBottles[1]) &&
        fullBottles.includes(fullBottles[2])
    ) {
        levelCompleted = true
        nextEl.style.backgroundImage = "url(../media/next.png)"
        nextEl.style.cursor = "pointer"
    }
}

nextEl.addEventListener("click", function() {
    if(levelCompleted) {
        levelEasy++
        levelEl.textContent = levelEasy
        if(fullBottles.length > 0) {
            fullBottles.forEach(bottle => {
                bottle.style.borderColor = "#e5e7e9"
                bottle.style.cursor = "pointer"
            })
        }
        fullBottles = []
        savedWater = []
        savedColor = []
        currentSavedWater = []
        currentSavedColor = []
        firstNum = 0
        secondNum = 0
        thirdNum = 0
        fourthNum = 0
        emptyWater(w1b4El)
        emptyWater(w2b4El)
        emptyWater(w3b4El)
        emptyWater(w4b4El)
        emptyWater(w1b5El)
        emptyWater(w2b5El)
        emptyWater(w3b5El)
        emptyWater(w4b5El)
        colors = []
        colors2 = []
        colors3 = []
        colors4 = []
        listOfColors = []
        listOfSavedLevels = []
        savedFullBottles = []
        savedLocalFullBottles = []
        levelCompleted = false
        nextEl.style.backgroundImage = "url(../media/next-gray.png)"
        nextEl.style.cursor = "default"
        levelGeneration(colors, colors2, colors3, colors4)
        levelSaving()

        b1El.style.borderColor = "#e5e7e9"
        b1El.style.cursor = "pointer"

        b2El.style.borderColor = "#e5e7e9"
        b2El.style.cursor = "pointer"

        b3El.style.borderColor = "#e5e7e9"
        b3El.style.cursor = "pointer"

        b4El.style.borderColor = "#e5e7e9"
        b4El.style.cursor = "pointer"

        b5El.style.borderColor = "#e5e7e9"
        b5El.style.cursor = "pointer"

        localSaving()
        localSaving()
    }
})

restartEl.addEventListener("click", function() {
    reset()
    allWaterPlacer(w1b1El, 0, 1, 2, 3, 0)
    allWaterPlacer(w2b1El, 4, 5, 6, 7, 1)
    allWaterPlacer(w3b1El, 8, 9, 10, 11, 2)
    allWaterPlacer(w4b1El, 12, 13, 14, 15, 3)
    allWaterPlacer(w1b2El, 16, 17, 18, 19, 4)
    allWaterPlacer(w2b2El, 20, 21, 22, 23, 5)
    allWaterPlacer(w3b2El, 24, 25, 26, 27, 6)
    allWaterPlacer(w4b2El, 28, 29, 30, 31, 7)
    allWaterPlacer(w1b3El, 32, 33, 34, 35, 8)
    allWaterPlacer(w2b3El, 36, 37, 38, 39, 9)
    allWaterPlacer(w3b3El, 40, 41, 42, 43, 10)
    allWaterPlacer(w4b3El, 44, 45, 46, 47, 11)
    allWaterPlacer(w1b4El, 48, 49, 50, 51, 12)
    allWaterPlacer(w2b4El, 52, 53, 54, 55, 13)
    allWaterPlacer(w3b4El, 56, 57, 58, 59, 14)
    allWaterPlacer(w4b4El, 60, 61, 62, 63, 15)
    allWaterPlacer(w1b5El, 64, 65, 66, 67, 16)
    allWaterPlacer(w2b5El, 68, 69, 70, 71, 17)
    allWaterPlacer(w3b5El, 72, 73, 74, 75, 18)
    allWaterPlacer(w4b5El, 76, 77, 78, 79, 19)
    if(fullBottles.length > 0) {
        fullBottles.forEach(bottle => {
            bottle.style.borderColor = "#e5e7e9"
            bottle.style.cursor = "pointer"
        })
    }
    fullBottles = []
    savedWater = []
    savedColor = []
    currentSavedWater = []
    currentSavedColor = []
    listOfSavedLevels = []
    savedFullBottles = []
    lastBottle = undefined
    localSavedLastBottle = undefined
    savedLocalFullBottles = []
    firstNum = 0
    secondNum = 0
    thirdNum = 0
    fourthNum = 0
    levelCompleted = false
    nextEl.style.backgroundImage = "url(../media/next-gray.png)"
    nextEl.style.cursor = "default"
    levelSaving()
    localSaving()
    localSaving()
})

function allLocalWaterPlacer(w, number1, number2, number3, number4, number5) {
    w.isGreen = secondSavedWater[number1]
    w.isRed = secondSavedWater[number2]
    w.isBlue = secondSavedWater[number3]
    w.isEmpty = secondSavedWater[number4]
    w.style.backgroundColor = secondSavedColor[number5]
}

function allLocalWaterSaver(w) {
    secondSavedWater.push(w.isGreen)
    secondSavedWater.push(w.isRed)
    secondSavedWater.push(w.isBlue)
    secondSavedWater.push(w.isEmpty)
    secondSavedColor.push(w.style.backgroundColor)
}

function allWaterPlacer(w, number1, number2, number3, number4, number5) {
    w.isGreen = savedWater[number1]
    w.isRed = savedWater[number2]
    w.isBlue = savedWater[number3]
    w.isEmpty = savedWater[number4]
    w.style.backgroundColor = savedColor[number5]
}

function allWaterSaver(w) {
    savedWater.push(w.isGreen)
    savedWater.push(w.isRed)
    savedWater.push(w.isBlue)
    savedWater.push(w.isEmpty)
    savedColor.push(w.style.backgroundColor)
}

function levelSaving() {
    allWaterSaver(w1b1El)
    allWaterSaver(w2b1El)
    allWaterSaver(w3b1El)
    allWaterSaver(w4b1El)
    allWaterSaver(w1b2El)
    allWaterSaver(w2b2El)
    allWaterSaver(w3b2El)
    allWaterSaver(w4b2El)
    allWaterSaver(w1b3El)
    allWaterSaver(w2b3El)
    allWaterSaver(w3b3El)
    allWaterSaver(w4b3El)
    allWaterSaver(w1b4El)
    allWaterSaver(w2b4El)
    allWaterSaver(w3b4El)
    allWaterSaver(w4b4El)
    allWaterSaver(w1b5El)
    allWaterSaver(w2b5El)
    allWaterSaver(w3b5El)
    allWaterSaver(w4b5El)
}

function localLoading() {
    savedLocalState = localStorage.getItem("localState")
    if(savedLocalState) {
        localState = JSON.parse(savedLocalState)

        savedWater = localState.savedWater
        savedColor = localState.savedColor
        secondSavedWater = localState.secondSavedWater
        secondSavedColor = localState.secondSavedColor
        firstNum = localState.firstNum
        secondNum = localState.secondNum
        thirdNum = localState.thirdNum
        fourthNum = localState.fourthNum
        levelStart = localState.levelStart
        levelEasy = localState.levelEasy
        levelCompleted = localState.levelCompleted
        savedLocalFullBottles = localState.savedLocalFullBottles
        listOfSavedLevels = localState.listOfSavedLevels

        levelEl.textContent = levelEasy

        localFullBottlesLoading(0, b1El, localB1)
        localFullBottlesLoading(0, b2El, localB2)
        localFullBottlesLoading(0, b3El, localB3)
        localFullBottlesLoading(0, b4El, localB4)
        localFullBottlesLoading(0, b5El, localB5)

        localFullBottlesLoading(1, b1El, localB1)
        localFullBottlesLoading(1, b2El, localB2)
        localFullBottlesLoading(1, b3El, localB3)
        localFullBottlesLoading(1, b4El, localB4)
        localFullBottlesLoading(1, b5El, localB5)

        localFullBottlesLoading(2, b1El, localB1)
        localFullBottlesLoading(2, b2El, localB2)
        localFullBottlesLoading(2, b3El, localB3)
        localFullBottlesLoading(2, b4El, localB4)
        localFullBottlesLoading(2, b5El, localB5)

        fullBottle(w4b1El, w3b1El, w2b1El, w1b1El, b1El)
        fullBottle(w4b2El, w3b2El, w2b2El, w1b2El, b2El)
        fullBottle(w4b3El, w3b3El, w2b3El, w1b3El, b3El)
        fullBottle(w4b4El, w3b4El, w2b4El, w1b4El, b4El)
        fullBottle(w4b5El, w3b5El, w2b5El, w1b5El, b5El)

        allLocalWaterPlacer(w1b1El, 0, 1, 2, 3, 0)
        allLocalWaterPlacer(w2b1El, 4, 5, 6, 7, 1)
        allLocalWaterPlacer(w3b1El, 8, 9, 10, 11, 2)
        allLocalWaterPlacer(w4b1El, 12, 13, 14, 15, 3)
        allLocalWaterPlacer(w1b2El, 16, 17, 18, 19, 4)
        allLocalWaterPlacer(w2b2El, 20, 21, 22, 23, 5)
        allLocalWaterPlacer(w3b2El, 24, 25, 26, 27, 6)
        allLocalWaterPlacer(w4b2El, 28, 29, 30, 31, 7)
        allLocalWaterPlacer(w1b3El, 32, 33, 34, 35, 8)
        allLocalWaterPlacer(w2b3El, 36, 37, 38, 39, 9)
        allLocalWaterPlacer(w3b3El, 40, 41, 42, 43, 10)
        allLocalWaterPlacer(w4b3El, 44, 45, 46, 47, 11)
        allLocalWaterPlacer(w1b4El, 48, 49, 50, 51, 12)
        allLocalWaterPlacer(w2b4El, 52, 53, 54, 55, 13)
        allLocalWaterPlacer(w3b4El, 56, 57, 58, 59, 14)
        allLocalWaterPlacer(w4b4El, 60, 61, 62, 63, 15)
        allLocalWaterPlacer(w1b5El, 64, 65, 66, 67, 16)
        allLocalWaterPlacer(w2b5El, 68, 69, 70, 71, 17)
        allLocalWaterPlacer(w3b5El, 72, 73, 74, 75, 18)
        allLocalWaterPlacer(w4b5El, 76, 77, 78, 79, 19)

        if(levelCompleted) {
            nextEl.style.backgroundImage = "url(../media/next.png)"
            nextEl.style.cursor = "pointer"
        }
    }
    else {
        levelGeneration(colors, colors2, colors3, colors4)
        levelSaving()
        localSaving()
        localSaving()
    }
}

function localSaving() {
    allLocalWaterSaver(w1b1El)
    allLocalWaterSaver(w2b1El)
    allLocalWaterSaver(w3b1El)
    allLocalWaterSaver(w4b1El)
    allLocalWaterSaver(w1b2El)
    allLocalWaterSaver(w2b2El)
    allLocalWaterSaver(w3b2El)
    allLocalWaterSaver(w4b2El)
    allLocalWaterSaver(w1b3El)
    allLocalWaterSaver(w2b3El)
    allLocalWaterSaver(w3b3El)
    allLocalWaterSaver(w4b3El)
    allLocalWaterSaver(w1b4El)
    allLocalWaterSaver(w2b4El)
    allLocalWaterSaver(w3b4El)
    allLocalWaterSaver(w4b4El)
    allLocalWaterSaver(w1b5El)
    allLocalWaterSaver(w2b5El)
    allLocalWaterSaver(w3b5El)
    allLocalWaterSaver(w4b5El)

    localFullBottles(0, b1El, localB1)
    localFullBottles(0, b2El, localB2)
    localFullBottles(0, b3El, localB3)
    localFullBottles(0, b4El, localB4)
    localFullBottles(0, b5El, localB5)

    localFullBottles(1, b1El, localB1)
    localFullBottles(1, b2El, localB2)
    localFullBottles(1, b3El, localB3)
    localFullBottles(1, b4El, localB4)
    localFullBottles(1, b5El, localB5)

    localFullBottles(2, b1El, localB1)
    localFullBottles(2, b2El, localB2)
    localFullBottles(2, b3El, localB3)
    localFullBottles(2, b4El, localB4)
    localFullBottles(2, b5El, localB5)

    localState = {
        savedWater: savedWater,
        savedColor: savedColor,
        secondSavedWater: secondSavedWater,
        secondSavedColor: secondSavedColor,
        firstNum: firstNum,
        secondNum: secondNum,
        thirdNum: thirdNum,
        fourthNum: fourthNum,
        levelStart: levelStart,
        levelEasy: levelEasy,
        levelCompleted: levelCompleted,
        savedLocalFullBottles: savedLocalFullBottles,
        listOfSavedLevels: listOfSavedLevels
    }

    secondSavedWater = []
    secondSavedColor = []

    localStorage.setItem("localState", JSON.stringify(localState))
}

function localFullBottles(number, bNum, localBNum) {
    if(fullBottles[number] === bNum) {
        if(!savedLocalFullBottles.includes(localBNum)) {
            savedLocalFullBottles.push(localBNum)
        }
    }
}

function localFullBottlesLoading(number, bNum, localBNum) {
    if(savedLocalFullBottles[number] === localBNum) {
        if(!fullBottles.includes(bNum)) {
            fullBottles.push(bNum)
        }
    }
}

function randomColors(color1, previousColor, secondPreviousColor, thirdPreviousColor) {
    num = Math.floor((Math.random() * 5) + 1)

    if(num === 1) {
        color1.push("red")
        color1.push("blue")
        color1.push("green")
    }
    else if(num === 2) {
        color1.push("blue")
        color1.push("red")
        color1.push("green")
    }
    else if(num === 3) {
        color1.push("green")
        color1.push("blue")
        color1.push("red")
    }
    else if(num === 4) {
        color1.push("green")
        color1.push("red")
        color1.push("blue")
    }
    else if(num === 5) {
        color1.push("red")
        color1.push("green")
        color1.push("blue")
    }
    else if(num === 6) {
        color1.push("blue")
        color1.push("green")
        color1.push("red")
    }
    
    if(
        previousColor !== undefined &&
        color1[0] === previousColor[0] &&
        color1[1] === previousColor[1] &&
        color1[2] === previousColor[2]
    ) {
        color1 = []
        randomColors(color1, previousColor, secondPreviousColor, thirdPreviousColor)
    }
    if(
        secondPreviousColor !== undefined &&
        color1[0] === secondPreviousColor[0] &&
        color1[1] === secondPreviousColor[1] &&
        color1[2] === secondPreviousColor[2]
    ) {
        color1 = []
        randomColors(color1, previousColor, secondPreviousColor, thirdPreviousColor)
    }
    if(
        thirdPreviousColor !== undefined &&
        color1[0] === thirdPreviousColor[0] &&
        color1[1] === thirdPreviousColor[1] &&
        color1[2] === thirdPreviousColor[2]
    ) {
        color1 = []
        randomColors(color1, previousColor, secondPreviousColor, thirdPreviousColor)
    }

    listOfColors.push(color1[0], color1[1], color1[2])
}

function colorUnroller(w, number) {
    if(listOfColors[number] === "green") {
        w.isGreen = true
        w.isRed = false
        w.isBlue = false
        w.isEmpty = false
        w.style.backgroundColor = "#27ae60"
    }
    else if(listOfColors[number] === "red") {
        w.isGreen = false
        w.isRed = true
        w.isBlue = false
        w.isEmpty = false
        w.style.backgroundColor = "#c0392b"
    }
    else if(listOfColors[number] === "blue") {
        w.isGreen = false
        w.isRed = false
        w.isBlue = true
        w.isEmpty = false
        w.style.backgroundColor = "#3498db"
    }
}

function emptyWater(w) {
    w.isGreen = false
    w.isRed = false
    w.isBlue = false
    w.isEmpty = true
    w.style.backgroundColor = ""
}

function waterAssigner() {
    colorUnroller(w1b1El, 0)
    colorUnroller(w2b1El, 1)
    colorUnroller(w3b1El, 2)
    colorUnroller(w4b1El, 3)
    colorUnroller(w1b2El, 4)
    colorUnroller(w2b2El, 5)
    colorUnroller(w3b2El, 6)
    colorUnroller(w4b2El, 7)
    colorUnroller(w1b3El, 8)
    colorUnroller(w2b3El, 9)
    colorUnroller(w3b3El, 10)
    colorUnroller(w4b3El, 11)
}

function levelGeneration(col1, col2, col3, col4) {
    randomColors(col1)
    randomColors(col2, col1)
    randomColors(col3, col2, col1)
    randomColors(col4, col3, col2, col1)
    waterAssigner()
}

function isBottleFull(number, bNum, w4, w3, w2, w1) {
    if(fullBottles[number] !== undefined) {
        if(fullBottles[number] === bNum) {
            if(
                w4.isGreen === true && w3.isGreen === true && w2.isGreen === true && w1.isGreen === true || 
                w4.isRed === true && w3.isRed === true && w2.isRed === true && w1.isRed === true || 
                w4.isBlue === true && w3.isBlue === true && w2.isBlue === true && w1.isBlue === true
            ) {
                return
            }
            else {
                fullBottles.splice(number, 1)
            }
        }
    }
}

function fullBottle(w4, w3, w2, w1, bNum) {
    if(
        w4.isGreen === true && w3.isGreen === true && w2.isGreen === true && w1.isGreen === true || 
        w4.isRed === true && w3.isRed === true && w2.isRed === true && w1.isRed === true || 
        w4.isBlue === true && w3.isBlue === true && w2.isBlue === true && w1.isBlue === true
    ) {
        if(!fullBottles.includes(bNum)) {
            fullBottles.push(bNum)
        }
    }
    if(fullBottles.length > 0) {
        fullBottles.forEach(bottle => {
            bottle.style.borderColor = "#f7dc6f"
            bottle.style.cursor = "default"
        })
    }
    isBottleFull(0, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(0, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(0, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(0, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(0, b5El, w4b5El, w3b5El, w2b5El, w1b5El)

    isBottleFull(1, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(1, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(1, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(1, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(1, b5El, w4b5El, w3b5El, w2b5El, w1b5El)

    isBottleFull(2, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(2, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(2, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(2, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(2, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
}

function waterSaver(w4, w3, w2, w1, bNum) {
    if(fullBottles.includes(bNum)) {
        return
    }
    else {
        if(w4.isEmpty) {
    
            if(w3.isEmpty) {
    
                if(w2.isEmpty) {
    
                    if(w1.isEmpty) {
                        return
                    }
                    else {
                        clickedWater = w1
                    }
                }
                else {
                    if(
                        w2.isGreen !== w1.isGreen || 
                        w2.isRed !== w1.isRed || 
                        w2.isBlue !== w1.isBlue
                    ) {
                        clickedWater = w2
                    }
                    else {
                        clickedWater = w2
                        secondClickedWater = w1
                    }
                }
            }
            else {
                if(
                    w3.isGreen !== w2.isGreen || 
                    w3.isRed !== w2.isRed || 
                    w3.isBlue !== w2.isBlue
                ) {
                    clickedWater = w3
                }
                else if(
                    w3.isGreen === w2.isGreen && w3.isGreen !== w1.isGreen || 
                    w3.isRed === w2.isRed && w3.isRed !== w1.isRed || 
                    w3.isBlue === w2.isBlue && w3.isBlue !== w1.isBlue
                ) {
                    clickedWater = w3
                    secondClickedWater = w2
                }
                else if(
                    w3.isGreen === w2.isGreen && 
                    w3.isGreen === w1.isGreen && 
                    w3.isRed === w2.isRed && 
                    w3.isRed === w1.isRed && 
                    w3.isBlue === w2.isBlue && 
                    w3.isBlue === w1.isBlue
                ) {
                    clickedWater = w3
                    secondClickedWater = w2
                    thirdClickedWater = w1
                }
            }
        }
        else {
            if(
                w4.isGreen !== w3.isGreen || 
                w4.isRed !== w3.isRed || 
                w4.isBlue !== w3.isBlue
            ) {
                clickedWater = w4
            }
            else if(
                w4.isGreen === w3.isGreen && w4.isGreen !== w2.isGreen || 
                w4.isRed === w3.isRed && w4.isRed !== w2.isRed || 
                w4.isBlue === w3.isBlue && w4.isBlue !== w2.isBlue
            ) {
                clickedWater = w4
                secondClickedWater = w3
            }
            else if(
                w4.isGreen === w3.isGreen && w4.isGreen === w2.isGreen && w4.isGreen !== w1.isGreen || 
                w4.isRed === w3.isRed && w4.isRed === w2.isRed && w4.isRed !== w1.isRed || 
                w4.isBlue === w3.isBlue && w4.isBlue === w2.isBlue && w4.isBlue !== w1.isBlue
            ) {
                clickedWater = w4
                secondClickedWater = w3
                thirdClickedWater = w2
            }
        }
        clickedBottle = bNum
        bNum.style.borderColor = "#979a9a"
    }
}

function reset() {
    if(clickedBottle !== null) {
        clickedBottle.style.borderColor = "#e5e7e9"
    }
    clickedWater = null
    secondClickedWater = null
    thirdClickedWater = null
    clickedBottle = null
}

function waterColor(w, waterClicked) {
    w.isGreen = waterClicked.isGreen
    w.isRed = waterClicked.isRed
    w.isBlue = waterClicked.isBlue
    w.isEmpty = false
    if(w.isGreen === true) {
        w.style.backgroundColor = "#27ae60"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
    }
    else if(w.isRed === true) {
        w.style.backgroundColor = "#c0392b"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
    }
    else if(w.isBlue === true) {
        w.style.backgroundColor = "#3498db"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
    }
}

function waterPlacer(w4, w3, w2, w1, bNum) {
    if(
        clickedBottle === bNum || 
        clickedBottle === bNum && 
        fullBottles.includes(bNum)
    ) {
        reset()
    }
    else {
        if(
            secondClickedWater !== null && 
            w3.isEmpty === false
        ) {
            return
        }
        else {
            if(
                secondClickedWater !== null && 
                thirdClickedWater !== null && 
                w2.isEmpty === false
            ) {
                return
            }
            else {
                firstNum = 0
                secondNum = 0
                thirdNum = 0
                fourthNum = 0
                currentLevelPositionSaving()
                if(w1.isEmpty === true) {
                    waterColor(w1, clickedWater)
        
                    if(secondClickedWater !== null) {
                        waterColor(w2, secondClickedWater)
        
                        if(thirdClickedWater !== null) {
                            waterColor(w3, thirdClickedWater)
                        }
                    }
                    else {
                        reset()
                    }
                }
                else {
                    if(
                        w2.isEmpty && 
                        clickedWater.isGreen === w1.isGreen && 
                        clickedWater.isRed === w1.isRed && 
                        clickedWater.isBlue === w1.isBlue
                    ) {
                        waterColor(w2, clickedWater)
        
                        if(secondClickedWater !== null) {
                            waterColor(w3, secondClickedWater)
        
                            if(thirdClickedWater !== null) {
                                waterColor(w4, thirdClickedWater)
                            }
                        }
                    }
                    else {
                        if(
                            w3.isEmpty && 
                            clickedWater.isGreen === w2.isGreen && 
                            clickedWater.isRed === w2.isRed && 
                            clickedWater.isBlue === w2.isBlue
                        ) {
                            waterColor(w3, clickedWater)
        
                            if(secondClickedWater !== null) {
                                waterColor(w4, secondClickedWater)
                            }
                        }
                        else {
                            if(
                                w4.isEmpty && 
                                clickedWater.isGreen === w3.isGreen && 
                                clickedWater.isRed === w3.isRed && 
                                clickedWater.isBlue === w3.isBlue
                            ) {
                                waterColor(w4, clickedWater)
                            }
                            else {
                                return
                            }
                        }
                    }
                }
                reset()
                fullBottle(w4, w3, w2, w1, bNum)
                levelCompletion()
                localSaving()
                localSaving()
            }
        }
    }
}

b1El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b1El, w3b1El, w2b1El, w1b1El, b1El)
    }
    else {
        waterPlacer(w4b1El, w3b1El, w2b1El, w1b1El, b1El)
    }
})

b2El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b2El, w3b2El, w2b2El, w1b2El, b2El)
    }
    else {
        waterPlacer(w4b2El, w3b2El, w2b2El, w1b2El, b2El)
    }
})

b3El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b3El, w3b3El, w2b3El, w1b3El, b3El)
    }
    else {
        waterPlacer(w4b3El, w3b3El, w2b3El, w1b3El, b3El)
    }
})

b4El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b4El, w3b4El, w2b4El, w1b4El, b4El)
    }
    else {
        waterPlacer(w4b4El, w3b4El, w2b4El, w1b4El, b4El)
    }
})

b5El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b5El, w3b5El, w2b5El, w1b5El, b5El)
    }
    else {
        waterPlacer(w4b5El, w3b5El, w2b5El, w1b5El, b5El)
    }
})