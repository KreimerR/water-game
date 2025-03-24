const playContainerEl = document.getElementById("play-container-el")
const resetEl = document.getElementById("reset-el")
const doneEl = document.getElementById("done-el")

const levelEasyEl = document.getElementById("level-easy-el")
const levelMediumEl = document.getElementById("level-medium-el")
const levelHardEl = document.getElementById("level-hard-el")

const resetEasyEl = document.getElementById("reset-easy-el")
const resetMediumEl = document.getElementById("reset-medium-el")
const resetHardEl = document.getElementById("reset-hard-el")

let savedLocalState = null
let localState = null

let savedMediumLocalState = null
let localMediumState = null

let savedHardLocalState = null
let localHardState = null

resetEl.addEventListener("click", function() {
    resetEasyEl.style.display = "block"
    resetMediumEl.style.display = "block"
    resetHardEl.style.display = "block"
    playContainerEl.style.gap = "10px"
    resetEl.style.display = "none"
    doneEl.style.display = "block"
    if(!savedLocalState) {
        resetEasyEl.textContent = 'Level "Easy" has already been reset'
        resetEasyEl.style.cursor = "default"
    }

    if(!savedMediumLocalState) {
        resetMediumEl.textContent = 'Level "Medium" has already been reset'
        resetMediumEl.style.cursor = "default"
    }

    if(!savedHardLocalState) {
        resetHardEl.textContent = 'Level "Hard" has already been reset'
        resetHardEl.style.cursor = "default"
    }
})

doneEl.addEventListener("click", function() {
    resetEasyEl.style.display = "none"
    resetMediumEl.style.display = "none"
    resetHardEl.style.display = "none"
    playContainerEl.style.gap = "15px"
    resetEl.style.display = "block"
    doneEl.style.display = "none"
})

resetEasyEl.addEventListener("click", function() {
    if(resetEasyEl.style.cursor === "default") {
        return
    }
    else {
        resetEasyEl.textContent = 'Level "Easy" has been reset'
        resetEasyEl.style.cursor = "default"
        localStorage.removeItem("localState")
        localLoading()
    }
})

resetMediumEl.addEventListener("click", function() {
    if(resetMediumEl.style.cursor === "default") {
        return
    }
    else {
        resetMediumEl.textContent = 'Level "Medium" has been reset'
        resetMediumEl.style.cursor = "default"
        localStorage.removeItem("localMediumState")
        localLoading()
    }
})

resetHardEl.addEventListener("click", function() {
    if(resetHardEl.style.cursor === "default") {
        return
    }
    else {
        resetHardEl.textContent = 'Level "Hard" has been reset'
        resetHardEl.style.cursor = "default"
        localStorage.removeItem("localHardState")
        localLoading()
    }
})

localLoading()

function localLoading() {
    savedLocalState = localStorage.getItem("localState")
    savedMediumLocalState = localStorage.getItem("localMediumState")
    savedHardLocalState = localStorage.getItem("localHardState")

    if(savedLocalState) {
        localState = JSON.parse(savedLocalState)
        levelEasyEl.textContent = localState.levelEasy
    }
    else {
        levelEasyEl.textContent = "1"
    }

    if(savedMediumLocalState) {
        localMediumState = JSON.parse(savedMediumLocalState)
        levelMediumEl.textContent = localMediumState.levelMedium
    }
    else {
        levelMediumEl.textContent = "1"
    }

    if(savedHardLocalState) {
        localHardState = JSON.parse(savedHardLocalState)
        levelHardEl.textContent = localHardState.levelHard
    }
    else {
        levelHardEl.textContent = "1"
    }
}