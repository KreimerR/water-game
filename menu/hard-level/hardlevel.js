const b1El = document.getElementById("b-1-el")
const b2El = document.getElementById("b-2-el")
const b3El = document.getElementById("b-3-el")
const b4El = document.getElementById("b-4-el")
const b5El = document.getElementById("b-5-el")
const b6El = document.getElementById("b-6-el")
const b7El = document.getElementById("b-7-el")
const b8El = document.getElementById("b-8-el")
const b9El = document.getElementById("b-9-el")
const b10El = document.getElementById("b-10-el")

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

const w4b7El = document.getElementById("w-4-b-7-el")
const w3b7El = document.getElementById("w-3-b-7-el")
const w2b7El = document.getElementById("w-2-b-7-el")
const w1b7El = document.getElementById("w-1-b-7-el")

const w4b8El = document.getElementById("w-4-b-8-el")
const w3b8El = document.getElementById("w-3-b-8-el")
const w2b8El = document.getElementById("w-2-b-8-el")
const w1b8El = document.getElementById("w-1-b-8-el")

const w4b9El = document.getElementById("w-4-b-9-el")
const w3b9El = document.getElementById("w-3-b-9-el")
const w2b9El = document.getElementById("w-2-b-9-el")
const w1b9El = document.getElementById("w-1-b-9-el")

const w4b10El = document.getElementById("w-4-b-10-el")
const w3b10El = document.getElementById("w-3-b-10-el")
const w2b10El = document.getElementById("w-2-b-10-el")
const w1b10El = document.getElementById("w-1-b-10-el")

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
let levelHard = "1"
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

let localHardState = null
let savedHardLocalState = null
let localB1 = "localB1"
let localB2 = "localB2"
let localB3 = "localB3"
let localB4 = "localB4"
let localB5 = "localB5"
let localB6 = "localB6"
let localB7 = "localB7"
let localB8 = "localB8"
let localB9 = "localB9"
let localB10 = "localB10"
let savedLocalFullBottles = []

levelEl.textContent = levelHard

emptyWater(w1b9El)
emptyWater(w2b9El)
emptyWater(w3b9El)
emptyWater(w4b9El)

emptyWater(w1b10El)
emptyWater(w2b10El)
emptyWater(w3b10El)
emptyWater(w4b10El)

localLoading()

localFullBottlesLoading(0, b1El, localB1)
localFullBottlesLoading(0, b2El, localB2)
localFullBottlesLoading(0, b3El, localB3)
localFullBottlesLoading(0, b4El, localB4)
localFullBottlesLoading(0, b5El, localB5)
localFullBottlesLoading(0, b6El, localB6)
localFullBottlesLoading(0, b7El, localB7)
localFullBottlesLoading(0, b8El, localB8)
localFullBottlesLoading(0, b9El, localB9)
localFullBottlesLoading(0, b10El, localB10)

localFullBottlesLoading(1, b1El, localB1)
localFullBottlesLoading(1, b2El, localB2)
localFullBottlesLoading(1, b3El, localB3)
localFullBottlesLoading(1, b4El, localB4)
localFullBottlesLoading(1, b5El, localB5)
localFullBottlesLoading(1, b6El, localB6)
localFullBottlesLoading(1, b7El, localB7)
localFullBottlesLoading(1, b8El, localB8)
localFullBottlesLoading(1, b9El, localB9)
localFullBottlesLoading(1, b10El, localB10)

localFullBottlesLoading(2, b1El, localB1)
localFullBottlesLoading(2, b2El, localB2)
localFullBottlesLoading(2, b3El, localB3)
localFullBottlesLoading(2, b4El, localB4)
localFullBottlesLoading(2, b5El, localB5)
localFullBottlesLoading(2, b6El, localB6)
localFullBottlesLoading(2, b7El, localB7)
localFullBottlesLoading(2, b8El, localB8)
localFullBottlesLoading(2, b9El, localB9)
localFullBottlesLoading(2, b10El, localB10)

localFullBottlesLoading(3, b1El, localB1)
localFullBottlesLoading(3, b2El, localB2)
localFullBottlesLoading(3, b3El, localB3)
localFullBottlesLoading(3, b4El, localB4)
localFullBottlesLoading(3, b5El, localB5)
localFullBottlesLoading(3, b6El, localB6)
localFullBottlesLoading(3, b7El, localB7)
localFullBottlesLoading(3, b8El, localB8)
localFullBottlesLoading(3, b9El, localB9)
localFullBottlesLoading(3, b10El, localB10)

localFullBottlesLoading(4, b1El, localB1)
localFullBottlesLoading(4, b2El, localB2)
localFullBottlesLoading(4, b3El, localB3)
localFullBottlesLoading(4, b4El, localB4)
localFullBottlesLoading(4, b5El, localB5)
localFullBottlesLoading(4, b6El, localB6)
localFullBottlesLoading(4, b7El, localB7)
localFullBottlesLoading(4, b8El, localB8)
localFullBottlesLoading(4, b9El, localB9)
localFullBottlesLoading(4, b10El, localB10)

localFullBottlesLoading(5, b1El, localB1)
localFullBottlesLoading(5, b2El, localB2)
localFullBottlesLoading(5, b3El, localB3)
localFullBottlesLoading(5, b4El, localB4)
localFullBottlesLoading(5, b5El, localB5)
localFullBottlesLoading(5, b6El, localB6)
localFullBottlesLoading(5, b7El, localB7)
localFullBottlesLoading(5, b8El, localB8)
localFullBottlesLoading(5, b9El, localB9)
localFullBottlesLoading(5, b10El, localB10)

localFullBottlesLoading(6, b1El, localB1)
localFullBottlesLoading(6, b2El, localB2)
localFullBottlesLoading(6, b3El, localB3)
localFullBottlesLoading(6, b4El, localB4)
localFullBottlesLoading(6, b5El, localB5)
localFullBottlesLoading(6, b6El, localB6)
localFullBottlesLoading(6, b7El, localB7)
localFullBottlesLoading(6, b8El, localB8)
localFullBottlesLoading(6, b9El, localB9)
localFullBottlesLoading(6, b10El, localB10)

localFullBottlesLoading(7, b1El, localB1)
localFullBottlesLoading(7, b2El, localB2)
localFullBottlesLoading(7, b3El, localB3)
localFullBottlesLoading(7, b4El, localB4)
localFullBottlesLoading(7, b5El, localB5)
localFullBottlesLoading(7, b6El, localB6)
localFullBottlesLoading(7, b7El, localB7)
localFullBottlesLoading(7, b8El, localB8)
localFullBottlesLoading(7, b9El, localB9)
localFullBottlesLoading(7, b10El, localB10)

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
                else if(fullBottles.length === 4) {
                    savedFullBottles.push(fullBottles[0])
                    savedFullBottles.push(fullBottles[1])
                    savedFullBottles.push(fullBottles[2])
                    savedFullBottles.push(fullBottles[3])
                }
                else if(fullBottles.length === 5) {
                    savedFullBottles.push(fullBottles[0])
                    savedFullBottles.push(fullBottles[1])
                    savedFullBottles.push(fullBottles[2])
                    savedFullBottles.push(fullBottles[3])
                    savedFullBottles.push(fullBottles[4])
                }
                else if(fullBottles.length === 6) {
                    savedFullBottles.push(fullBottles[0])
                    savedFullBottles.push(fullBottles[1])
                    savedFullBottles.push(fullBottles[2])
                    savedFullBottles.push(fullBottles[3])
                    savedFullBottles.push(fullBottles[4])
                    savedFullBottles.push(fullBottles[5])
                }
                else if(fullBottles.length === 7) {
                    savedFullBottles.push(fullBottles[0])
                    savedFullBottles.push(fullBottles[1])
                    savedFullBottles.push(fullBottles[2])
                    savedFullBottles.push(fullBottles[3])
                    savedFullBottles.push(fullBottles[4])
                    savedFullBottles.push(fullBottles[5])
                    savedFullBottles.push(fullBottles[6])
                }
                else if(fullBottles.length === 8) {
                    savedFullBottles.push(fullBottles[0])
                    savedFullBottles.push(fullBottles[1])
                    savedFullBottles.push(fullBottles[2])
                    savedFullBottles.push(fullBottles[3])
                    savedFullBottles.push(fullBottles[4])
                    savedFullBottles.push(fullBottles[5])
                    savedFullBottles.push(fullBottles[6])
                    savedFullBottles.push(fullBottles[7])
                }
            }

            reset()
            currentWaterPlacer(w1b1El, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0)
            currentWaterPlacer(w2b1El, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1)
            currentWaterPlacer(w3b1El, 18, 19, 20, 21, 22, 23, 24, 25, 26, 2)
            currentWaterPlacer(w4b1El, 27, 28, 29, 30, 31, 32, 33, 34, 35, 3)
            currentWaterPlacer(w1b2El, 36, 37, 38, 39, 40, 41, 42, 43, 44, 4)
            currentWaterPlacer(w2b2El, 45, 46, 47, 48, 49, 50, 51, 52, 53, 5)
            currentWaterPlacer(w3b2El, 54, 55, 56, 57, 58, 59, 60, 61, 62, 6)
            currentWaterPlacer(w4b2El, 63, 64, 65, 66, 67, 68, 69, 70, 71, 7)
            currentWaterPlacer(w1b3El, 72, 73, 74, 75, 76, 77, 78, 79, 80, 8)
            currentWaterPlacer(w2b3El, 81, 82, 83, 84, 85, 86, 87, 88, 89, 9)
            currentWaterPlacer(w3b3El, 90, 91, 92, 93, 94, 95, 96, 97, 98, 10)
            currentWaterPlacer(w4b3El, 99, 100, 101, 102, 103, 104, 105, 106, 107, 11)
            currentWaterPlacer(w1b4El, 108, 109, 110, 111, 112, 113, 114, 115, 116, 12)
            currentWaterPlacer(w2b4El, 117, 118, 119, 120, 121, 122, 123, 124, 125, 13)
            currentWaterPlacer(w3b4El, 126, 127, 128, 129, 130, 131, 132, 133, 134, 14)
            currentWaterPlacer(w4b4El, 135, 136, 137, 138, 139, 140, 141, 142, 143, 15)
            currentWaterPlacer(w1b5El, 144, 145, 146, 147, 148, 149, 150, 151, 152, 16)
            currentWaterPlacer(w2b5El, 153, 154, 155, 156, 157, 158, 159, 160, 161, 17)
            currentWaterPlacer(w3b5El, 162, 163, 164, 165, 166, 167, 168, 169, 170, 18)
            currentWaterPlacer(w4b5El, 171, 172, 173, 174, 175, 176, 177, 178, 179, 19)
            currentWaterPlacer(w1b6El, 180, 181, 182, 183, 184, 185, 186, 187, 188, 20)
            currentWaterPlacer(w2b6El, 189, 190, 191, 192, 193, 194, 195, 196, 197, 21)
            currentWaterPlacer(w3b6El, 198, 199, 200, 201, 202, 203, 204, 205, 206, 22)
            currentWaterPlacer(w4b6El, 207, 208, 209, 210, 211, 212, 213, 214, 215, 23)
            currentWaterPlacer(w1b7El, 216, 217, 218, 219, 220, 221, 222, 223, 224, 24)
            currentWaterPlacer(w2b7El, 225, 226, 227, 228, 229, 230, 231, 232, 233, 25)
            currentWaterPlacer(w3b7El, 234, 235, 236, 237, 238, 239, 240, 241, 242, 26)
            currentWaterPlacer(w4b7El, 243, 244, 245, 246, 247, 248, 249, 250, 251, 27)
            currentWaterPlacer(w1b8El, 252, 253, 254, 255, 256, 257, 258, 259, 260, 28)
            currentWaterPlacer(w2b8El, 261, 262, 263, 264, 265, 266, 267, 268, 269, 29)
            currentWaterPlacer(w3b8El, 270, 271, 272, 273, 274, 275, 276, 277, 278, 30)
            currentWaterPlacer(w4b8El, 279, 280, 281, 282, 283, 284, 285, 286, 287, 31)
            currentWaterPlacer(w1b9El, 288, 289, 290, 291, 292, 293, 294, 295, 296, 32)
            currentWaterPlacer(w2b9El, 297, 298, 299, 300, 301, 302, 303, 304, 305, 33)
            currentWaterPlacer(w3b9El, 306, 307, 308, 309, 310, 311, 312, 313, 314, 34)
            currentWaterPlacer(w4b9El, 315, 316, 317, 318, 319, 320, 321, 322, 323, 35)
            currentWaterPlacer(w1b10El, 324, 325, 326, 327, 328, 329, 330, 331, 332, 36)
            currentWaterPlacer(w2b10El, 333, 334, 335, 336, 337, 338, 339, 340, 341, 37)
            currentWaterPlacer(w3b10El, 342, 343, 344, 345, 346, 347, 348, 349, 350, 38)
            currentWaterPlacer(w4b10El, 351, 352, 353, 354, 355, 356, 357, 358, 359, 39)

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
            isBottleFull(0, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
            isBottleFull(0, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
            isBottleFull(0, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
            isBottleFull(0, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
            isBottleFull(0, b10El, w4b10El, w3b10El, w2b10El, w1b10El)
    
            isBottleFull(1, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(1, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(1, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(1, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(1, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
            isBottleFull(1, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
            isBottleFull(1, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
            isBottleFull(1, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
            isBottleFull(1, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
            isBottleFull(1, b10El, w4b10El, w3b10El, w2b10El, w1b10El)
    
            isBottleFull(2, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(2, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(2, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(2, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(2, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
            isBottleFull(2, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
            isBottleFull(2, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
            isBottleFull(2, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
            isBottleFull(2, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
            isBottleFull(2, b10El, w4b10El, w3b10El, w2b10El, w1b10El)

            isBottleFull(3, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(3, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(3, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(3, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(3, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
            isBottleFull(3, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
            isBottleFull(3, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
            isBottleFull(3, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
            isBottleFull(3, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
            isBottleFull(3, b10El, w4b10El, w3b10El, w2b10El, w1b10El)
    
            isBottleFull(4, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(4, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(4, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(4, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(4, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
            isBottleFull(4, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
            isBottleFull(4, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
            isBottleFull(4, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
            isBottleFull(4, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
            isBottleFull(4, b10El, w4b10El, w3b10El, w2b10El, w1b10El)
    
            isBottleFull(5, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(5, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(5, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(5, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(5, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
            isBottleFull(5, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
            isBottleFull(5, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
            isBottleFull(5, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
            isBottleFull(5, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
            isBottleFull(5, b10El, w4b10El, w3b10El, w2b10El, w1b10El)

            isBottleFull(6, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(6, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(6, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(6, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(6, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
            isBottleFull(6, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
            isBottleFull(6, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
            isBottleFull(6, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
            isBottleFull(6, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
            isBottleFull(6, b10El, w4b10El, w3b10El, w2b10El, w1b10El)
    
            isBottleFull(7, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
            isBottleFull(7, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
            isBottleFull(7, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
            isBottleFull(7, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
            isBottleFull(7, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
            isBottleFull(7, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
            isBottleFull(7, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
            isBottleFull(7, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
            isBottleFull(7, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
            isBottleFull(7, b10El, w4b10El, w3b10El, w2b10El, w1b10El)
            
            if(fullBottles.length < savedFullBottles.length) {
                lastBottle.style.borderColor = "#e5e7e9"
                lastBottle.style.cursor = "pointer"
                savedLocalFullBottles.pop()
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
        }
    }
})

function currentWaterPlacer(w, number1, number2, number3, number4, number5, number6, number7, number8, number9, number10) {
    w.isGreen = listOfSavedLevels[listOfSavedLevels.length - firstNum][number1]
    w.isRed = listOfSavedLevels[listOfSavedLevels.length - firstNum][number2]
    w.isBlue = listOfSavedLevels[listOfSavedLevels.length - firstNum][number3]
    w.isOrange = listOfSavedLevels[listOfSavedLevels.length - firstNum][number4]
    w.isYellow = listOfSavedLevels[listOfSavedLevels.length - firstNum][number5]
    w.isPurple = listOfSavedLevels[listOfSavedLevels.length - firstNum][number6]
    w.isPink = listOfSavedLevels[listOfSavedLevels.length - firstNum][number7]
    w.isLightBlue = listOfSavedLevels[listOfSavedLevels.length - firstNum][number8]
    w.isEmpty = listOfSavedLevels[listOfSavedLevels.length - firstNum][number9]
    w.style.backgroundColor = listOfSavedLevels[listOfSavedLevels.length - secondNum][number10]
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
    currentWaterSaver(w1b6El)
    currentWaterSaver(w2b6El)
    currentWaterSaver(w3b6El)
    currentWaterSaver(w4b6El)
    currentWaterSaver(w1b7El)
    currentWaterSaver(w2b7El)
    currentWaterSaver(w3b7El)
    currentWaterSaver(w4b7El)
    currentWaterSaver(w1b8El)
    currentWaterSaver(w2b8El)
    currentWaterSaver(w3b8El)
    currentWaterSaver(w4b8El)
    currentWaterSaver(w1b9El)
    currentWaterSaver(w2b9El)
    currentWaterSaver(w3b9El)
    currentWaterSaver(w4b9El)
    currentWaterSaver(w1b10El)
    currentWaterSaver(w2b10El)
    currentWaterSaver(w3b10El)
    currentWaterSaver(w4b10El)
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
    else if(fullBottles.length === 4) {
        currentSavedFullBottle.push(fullBottles[0])
        currentSavedFullBottle.push(fullBottles[1])
        currentSavedFullBottle.push(fullBottles[2])
        currentSavedFullBottle.push(fullBottles[3])
    }
    else if(fullBottles.length === 5) {
        currentSavedFullBottle.push(fullBottles[0])
        currentSavedFullBottle.push(fullBottles[1])
        currentSavedFullBottle.push(fullBottles[2])
        currentSavedFullBottle.push(fullBottles[3])
        currentSavedFullBottle.push(fullBottles[4])
    }
    else if(fullBottles.length === 6) {
        currentSavedFullBottle.push(fullBottles[0])
        currentSavedFullBottle.push(fullBottles[1])
        currentSavedFullBottle.push(fullBottles[2])
        currentSavedFullBottle.push(fullBottles[3])
        currentSavedFullBottle.push(fullBottles[4])
        currentSavedFullBottle.push(fullBottles[5])
    }
    else if(fullBottles.length === 7) {
        currentSavedFullBottle.push(fullBottles[0])
        currentSavedFullBottle.push(fullBottles[1])
        currentSavedFullBottle.push(fullBottles[2])
        currentSavedFullBottle.push(fullBottles[3])
        currentSavedFullBottle.push(fullBottles[4])
        currentSavedFullBottle.push(fullBottles[5])
        currentSavedFullBottle.push(fullBottles[6])
    }
    else if(fullBottles.length === 8) {
        currentSavedFullBottle.push(fullBottles[0])
        currentSavedFullBottle.push(fullBottles[1])
        currentSavedFullBottle.push(fullBottles[2])
        currentSavedFullBottle.push(fullBottles[3])
        currentSavedFullBottle.push(fullBottles[4])
        currentSavedFullBottle.push(fullBottles[5])
        currentSavedFullBottle.push(fullBottles[6])
        currentSavedFullBottle.push(fullBottles[7])
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
    currentSavedWater.push(w.isOrange)
    currentSavedWater.push(w.isYellow)
    currentSavedWater.push(w.isPurple)
    currentSavedWater.push(w.isPink)
    currentSavedWater.push(w.isLightBlue)
    currentSavedWater.push(w.isEmpty)
    currentSavedColor.push(w.style.backgroundColor)
}

function levelCompletion() {
    if(
        fullBottles.includes(fullBottles[0]) &&
        fullBottles.includes(fullBottles[1]) &&
        fullBottles.includes(fullBottles[2]) &&
        fullBottles.includes(fullBottles[3]) &&
        fullBottles.includes(fullBottles[4]) &&
        fullBottles.includes(fullBottles[5]) &&
        fullBottles.includes(fullBottles[6]) &&
        fullBottles.includes(fullBottles[7])
    ) {
        levelCompleted = true
        nextEl.style.backgroundImage = "url(../media/next.png)"
        nextEl.style.cursor = "pointer"
    }
}

nextEl.addEventListener("click", function() {
    if(levelCompleted) {
        levelHard++
        levelEl.textContent = levelHard
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
        emptyWater(w1b9El)
        emptyWater(w2b9El)
        emptyWater(w3b9El)
        emptyWater(w4b9El)
        emptyWater(w1b10El)
        emptyWater(w2b10El)
        emptyWater(w3b10El)
        emptyWater(w4b10El)
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

        b6El.style.borderColor = "#e5e7e9"
        b6El.style.cursor = "pointer"

        b7El.style.borderColor = "#e5e7e9"
        b7El.style.cursor = "pointer"

        b8El.style.borderColor = "#e5e7e9"
        b8El.style.cursor = "pointer"

        b9El.style.borderColor = "#e5e7e9"
        b9El.style.cursor = "pointer"

        b10El.style.borderColor = "#e5e7e9"
        b10El.style.cursor = "pointer"

        localSaving()
        localSaving()
    }
})

restartEl.addEventListener("click", function() {
    reset()
    allWaterPlacer(w1b1El, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0)
    allWaterPlacer(w2b1El, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1)
    allWaterPlacer(w3b1El, 18, 19, 20, 21, 22, 23, 24, 25, 26, 2)
    allWaterPlacer(w4b1El, 27, 28, 29, 30, 31, 32, 33, 34, 35, 3)
    allWaterPlacer(w1b2El, 36, 37, 38, 39, 40, 41, 42, 43, 44, 4)
    allWaterPlacer(w2b2El, 45, 46, 47, 48, 49, 50, 51, 52, 53, 5)
    allWaterPlacer(w3b2El, 54, 55, 56, 57, 58, 59, 60, 61, 62, 6)
    allWaterPlacer(w4b2El, 63, 64, 65, 66, 67, 68, 69, 70, 71, 7)
    allWaterPlacer(w1b3El, 72, 73, 74, 75, 76, 77, 78, 79, 80, 8)
    allWaterPlacer(w2b3El, 81, 82, 83, 84, 85, 86, 87, 88, 89, 9)
    allWaterPlacer(w3b3El, 90, 91, 92, 93, 94, 95, 96, 97, 98, 10)
    allWaterPlacer(w4b3El, 99, 100, 101, 102, 103, 104, 105, 106, 107, 11)
    allWaterPlacer(w1b4El, 108, 109, 110, 111, 112, 113, 114, 115, 116, 12)
    allWaterPlacer(w2b4El, 117, 118, 119, 120, 121, 122, 123, 124, 125, 13)
    allWaterPlacer(w3b4El, 126, 127, 128, 129, 130, 131, 132, 133, 134, 14)
    allWaterPlacer(w4b4El, 135, 136, 137, 138, 139, 140, 141, 142, 143, 15)
    allWaterPlacer(w1b5El, 144, 145, 146, 147, 148, 149, 150, 151, 152, 16)
    allWaterPlacer(w2b5El, 153, 154, 155, 156, 157, 158, 159, 160, 161, 17)
    allWaterPlacer(w3b5El, 162, 163, 164, 165, 166, 167, 168, 169, 170, 18)
    allWaterPlacer(w4b5El, 171, 172, 173, 174, 175, 176, 177, 178, 179, 19)
    allWaterPlacer(w1b6El, 180, 181, 182, 183, 184, 185, 186, 187, 188, 20)
    allWaterPlacer(w2b6El, 189, 190, 191, 192, 193, 194, 195, 196, 197, 21)
    allWaterPlacer(w3b6El, 198, 199, 200, 201, 202, 203, 204, 205, 206, 22)
    allWaterPlacer(w4b6El, 207, 208, 209, 210, 211, 212, 213, 214, 215, 23)
    allWaterPlacer(w1b7El, 216, 217, 218, 219, 220, 221, 222, 223, 224, 24)
    allWaterPlacer(w2b7El, 225, 226, 227, 228, 229, 230, 231, 232, 233, 25)
    allWaterPlacer(w3b7El, 234, 235, 236, 237, 238, 239, 240, 241, 242, 26)
    allWaterPlacer(w4b7El, 243, 244, 245, 246, 247, 248, 249, 250, 251, 27)
    allWaterPlacer(w1b8El, 252, 253, 254, 255, 256, 257, 258, 259, 260, 28)
    allWaterPlacer(w2b8El, 261, 262, 263, 264, 265, 266, 267, 268, 269, 29)
    allWaterPlacer(w3b8El, 270, 271, 272, 273, 274, 275, 276, 277, 278, 30)
    allWaterPlacer(w4b8El, 279, 280, 281, 282, 283, 284, 285, 286, 287, 31)
    allWaterPlacer(w1b9El, 288, 289, 290, 291, 292, 293, 294, 295, 296, 32)
    allWaterPlacer(w2b9El, 297, 298, 299, 300, 301, 302, 303, 304, 305, 33)
    allWaterPlacer(w3b9El, 306, 307, 308, 309, 310, 311, 312, 313, 314, 34)
    allWaterPlacer(w4b9El, 315, 316, 317, 318, 319, 320, 321, 322, 323, 35)
    allWaterPlacer(w1b10El, 324, 325, 326, 327, 328, 329, 330, 331, 332, 36)
    allWaterPlacer(w2b10El, 333, 334, 335, 336, 337, 338, 339, 340, 341, 37)
    allWaterPlacer(w3b10El, 342, 343, 344, 345, 346, 347, 348, 349, 350, 38)
    allWaterPlacer(w4b10El, 351, 352, 353, 354, 355, 356, 357, 358, 359, 39)

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

function allLocalWaterPlacer(w, number1, number2, number3, number4, number5, number6, number7, number8, number9, number10) {
    w.isGreen = secondSavedWater[number1]
    w.isRed = secondSavedWater[number2]
    w.isBlue = secondSavedWater[number3]
    w.isOrange = secondSavedWater[number4]
    w.isYellow = secondSavedWater[number5]
    w.isPurple = secondSavedWater[number6]
    w.isPink = secondSavedWater[number7]
    w.isLightBlue = secondSavedWater[number8]
    w.isEmpty = secondSavedWater[number9]
    w.style.backgroundColor = secondSavedColor[number10]
}

function allLocalWaterSaver(w) {
    secondSavedWater.push(w.isGreen)
    secondSavedWater.push(w.isRed)
    secondSavedWater.push(w.isBlue)
    secondSavedWater.push(w.isOrange)
    secondSavedWater.push(w.isYellow)
    secondSavedWater.push(w.isPurple)
    secondSavedWater.push(w.isPink)
    secondSavedWater.push(w.isLightBlue)
    secondSavedWater.push(w.isEmpty)
    secondSavedColor.push(w.style.backgroundColor)
}

function allWaterPlacer(w, number1, number2, number3, number4, number5, number6, number7, number8, number9, number10) {
    w.isGreen = savedWater[number1]
    w.isRed = savedWater[number2]
    w.isBlue = savedWater[number3]
    w.isOrange = savedWater[number4]
    w.isYellow = savedWater[number5]
    w.isPurple = savedWater[number6]
    w.isPink = savedWater[number7]
    w.isLightBlue = savedWater[number8]
    w.isEmpty = savedWater[number9]
    w.style.backgroundColor = savedColor[number10]
}

function allWaterSaver(w) {
    savedWater.push(w.isGreen)
    savedWater.push(w.isRed)
    savedWater.push(w.isBlue)
    savedWater.push(w.isOrange)
    savedWater.push(w.isYellow)
    savedWater.push(w.isPurple)
    savedWater.push(w.isPink)
    savedWater.push(w.isLightBlue)
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
    allWaterSaver(w1b6El)
    allWaterSaver(w2b6El)
    allWaterSaver(w3b6El)
    allWaterSaver(w4b6El)
    allWaterSaver(w1b7El)
    allWaterSaver(w2b7El)
    allWaterSaver(w3b7El)
    allWaterSaver(w4b7El)
    allWaterSaver(w1b8El)
    allWaterSaver(w2b8El)
    allWaterSaver(w3b8El)
    allWaterSaver(w4b8El)
    allWaterSaver(w1b9El)
    allWaterSaver(w2b9El)
    allWaterSaver(w3b9El)
    allWaterSaver(w4b9El)
    allWaterSaver(w1b10El)
    allWaterSaver(w2b10El)
    allWaterSaver(w3b10El)
    allWaterSaver(w4b10El)
}

function localLoading() {
    savedHardLocalState = localStorage.getItem("localHardState")
    if(savedHardLocalState) {
        localHardState = JSON.parse(savedHardLocalState)

        savedWater = localHardState.savedWater
        savedColor = localHardState.savedColor
        secondSavedWater = localHardState.secondSavedWater
        secondSavedColor = localHardState.secondSavedColor
        firstNum = localHardState.firstNum
        secondNum = localHardState.secondNum
        thirdNum = localHardState.thirdNum
        fourthNum = localHardState.fourthNum
        levelStart = localHardState.levelStart
        levelHard = localHardState.levelHard
        levelCompleted = localHardState.levelCompleted
        savedLocalFullBottles = localHardState.savedLocalFullBottles
        listOfSavedLevels = localHardState.listOfSavedLevels

        levelEl.textContent = levelHard

        localFullBottlesLoading(0, b1El, localB1)
        localFullBottlesLoading(0, b2El, localB2)
        localFullBottlesLoading(0, b3El, localB3)
        localFullBottlesLoading(0, b4El, localB4)
        localFullBottlesLoading(0, b5El, localB5)
        localFullBottlesLoading(0, b6El, localB6)
        localFullBottlesLoading(0, b7El, localB7)
        localFullBottlesLoading(0, b8El, localB8)
        localFullBottlesLoading(0, b9El, localB9)
        localFullBottlesLoading(0, b10El, localB10)

        localFullBottlesLoading(1, b1El, localB1)
        localFullBottlesLoading(1, b2El, localB2)
        localFullBottlesLoading(1, b3El, localB3)
        localFullBottlesLoading(1, b4El, localB4)
        localFullBottlesLoading(1, b5El, localB5)
        localFullBottlesLoading(1, b6El, localB6)
        localFullBottlesLoading(1, b7El, localB7)
        localFullBottlesLoading(1, b8El, localB8)
        localFullBottlesLoading(1, b9El, localB9)
        localFullBottlesLoading(1, b10El, localB10)

        localFullBottlesLoading(2, b1El, localB1)
        localFullBottlesLoading(2, b2El, localB2)
        localFullBottlesLoading(2, b3El, localB3)
        localFullBottlesLoading(2, b4El, localB4)
        localFullBottlesLoading(2, b5El, localB5)
        localFullBottlesLoading(2, b6El, localB6)
        localFullBottlesLoading(2, b7El, localB7)
        localFullBottlesLoading(2, b8El, localB8)
        localFullBottlesLoading(2, b9El, localB9)
        localFullBottlesLoading(2, b10El, localB10)

        localFullBottlesLoading(3, b1El, localB1)
        localFullBottlesLoading(3, b2El, localB2)
        localFullBottlesLoading(3, b3El, localB3)
        localFullBottlesLoading(3, b4El, localB4)
        localFullBottlesLoading(3, b5El, localB5)
        localFullBottlesLoading(3, b6El, localB6)
        localFullBottlesLoading(3, b7El, localB7)
        localFullBottlesLoading(3, b8El, localB8)
        localFullBottlesLoading(3, b9El, localB9)
        localFullBottlesLoading(3, b10El, localB10)

        localFullBottlesLoading(4, b1El, localB1)
        localFullBottlesLoading(4, b2El, localB2)
        localFullBottlesLoading(4, b3El, localB3)
        localFullBottlesLoading(4, b4El, localB4)
        localFullBottlesLoading(4, b5El, localB5)
        localFullBottlesLoading(4, b6El, localB6)
        localFullBottlesLoading(4, b7El, localB7)
        localFullBottlesLoading(4, b8El, localB8)
        localFullBottlesLoading(4, b9El, localB9)
        localFullBottlesLoading(4, b10El, localB10)

        localFullBottlesLoading(5, b1El, localB1)
        localFullBottlesLoading(5, b2El, localB2)
        localFullBottlesLoading(5, b3El, localB3)
        localFullBottlesLoading(5, b4El, localB4)
        localFullBottlesLoading(5, b5El, localB5)
        localFullBottlesLoading(5, b6El, localB6)
        localFullBottlesLoading(5, b7El, localB7)
        localFullBottlesLoading(5, b8El, localB8)
        localFullBottlesLoading(5, b9El, localB9)
        localFullBottlesLoading(5, b10El, localB10)

        localFullBottlesLoading(6, b1El, localB1)
        localFullBottlesLoading(6, b2El, localB2)
        localFullBottlesLoading(6, b3El, localB3)
        localFullBottlesLoading(6, b4El, localB4)
        localFullBottlesLoading(6, b5El, localB5)
        localFullBottlesLoading(6, b6El, localB6)
        localFullBottlesLoading(6, b7El, localB7)
        localFullBottlesLoading(6, b8El, localB8)
        localFullBottlesLoading(6, b9El, localB9)
        localFullBottlesLoading(6, b10El, localB10)

        localFullBottlesLoading(7, b1El, localB1)
        localFullBottlesLoading(7, b2El, localB2)
        localFullBottlesLoading(7, b3El, localB3)
        localFullBottlesLoading(7, b4El, localB4)
        localFullBottlesLoading(7, b5El, localB5)
        localFullBottlesLoading(7, b6El, localB6)
        localFullBottlesLoading(7, b7El, localB7)
        localFullBottlesLoading(7, b8El, localB8)
        localFullBottlesLoading(7, b9El, localB9)
        localFullBottlesLoading(7, b10El, localB10)

        fullBottle(w4b1El, w3b1El, w2b1El, w1b1El, b1El)
        fullBottle(w4b2El, w3b2El, w2b2El, w1b2El, b2El)
        fullBottle(w4b3El, w3b3El, w2b3El, w1b3El, b3El)
        fullBottle(w4b4El, w3b4El, w2b4El, w1b4El, b4El)
        fullBottle(w4b5El, w3b5El, w2b5El, w1b5El, b5El)
        fullBottle(w4b1El, w3b1El, w2b1El, w1b1El, b6El)
        fullBottle(w4b2El, w3b2El, w2b2El, w1b2El, b7El)
        fullBottle(w4b3El, w3b3El, w2b3El, w1b3El, b8El)
        fullBottle(w4b4El, w3b4El, w2b4El, w1b4El, b9El)
        fullBottle(w4b5El, w3b5El, w2b5El, w1b5El, b10El)

        allLocalWaterPlacer(w1b1El, 0, 1, 2, 3, 4, 5, 6, 7, 8, 0)
        allLocalWaterPlacer(w2b1El, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1)
        allLocalWaterPlacer(w3b1El, 18, 19, 20, 21, 22, 23, 24, 25, 26, 2)
        allLocalWaterPlacer(w4b1El, 27, 28, 29, 30, 31, 32, 33, 34, 35, 3)
        allLocalWaterPlacer(w1b2El, 36, 37, 38, 39, 40, 41, 42, 43, 44, 4)
        allLocalWaterPlacer(w2b2El, 45, 46, 47, 48, 49, 50, 51, 52, 53, 5)
        allLocalWaterPlacer(w3b2El, 54, 55, 56, 57, 58, 59, 60, 61, 62, 6)
        allLocalWaterPlacer(w4b2El, 63, 64, 65, 66, 67, 68, 69, 70, 71, 7)
        allLocalWaterPlacer(w1b3El, 72, 73, 74, 75, 76, 77, 78, 79, 80, 8)
        allLocalWaterPlacer(w2b3El, 81, 82, 83, 84, 85, 86, 87, 88, 89, 9)
        allLocalWaterPlacer(w3b3El, 90, 91, 92, 93, 94, 95, 96, 97, 98, 10)
        allLocalWaterPlacer(w4b3El, 99, 100, 101, 102, 103, 104, 105, 106, 107, 11)
        allLocalWaterPlacer(w1b4El, 108, 109, 110, 111, 112, 113, 114, 115, 116, 12)
        allLocalWaterPlacer(w2b4El, 117, 118, 119, 120, 121, 122, 123, 124, 125, 13)
        allLocalWaterPlacer(w3b4El, 126, 127, 128, 129, 130, 131, 132, 133, 134, 14)
        allLocalWaterPlacer(w4b4El, 135, 136, 137, 138, 139, 140, 141, 142, 143, 15)
        allLocalWaterPlacer(w1b5El, 144, 145, 146, 147, 148, 149, 150, 151, 152, 16)
        allLocalWaterPlacer(w2b5El, 153, 154, 155, 156, 157, 158, 159, 160, 161, 17)
        allLocalWaterPlacer(w3b5El, 162, 163, 164, 165, 166, 167, 168, 169, 170, 18)
        allLocalWaterPlacer(w4b5El, 171, 172, 173, 174, 175, 176, 177, 178, 179, 19)
        allLocalWaterPlacer(w1b6El, 180, 181, 182, 183, 184, 185, 186, 187, 188, 20)
        allLocalWaterPlacer(w2b6El, 189, 190, 191, 192, 193, 194, 195, 196, 197, 21)
        allLocalWaterPlacer(w3b6El, 198, 199, 200, 201, 202, 203, 204, 205, 206, 22)
        allLocalWaterPlacer(w4b6El, 207, 208, 209, 210, 211, 212, 213, 214, 215, 23)
        allLocalWaterPlacer(w1b7El, 216, 217, 218, 219, 220, 221, 222, 223, 224, 24)
        allLocalWaterPlacer(w2b7El, 225, 226, 227, 228, 229, 230, 231, 232, 233, 25)
        allLocalWaterPlacer(w3b7El, 234, 235, 236, 237, 238, 239, 240, 241, 242, 26)
        allLocalWaterPlacer(w4b7El, 243, 244, 245, 246, 247, 248, 249, 250, 251, 27)
        allLocalWaterPlacer(w1b8El, 252, 253, 254, 255, 256, 257, 258, 259, 260, 28)
        allLocalWaterPlacer(w2b8El, 261, 262, 263, 264, 265, 266, 267, 268, 269, 29)
        allLocalWaterPlacer(w3b8El, 270, 271, 272, 273, 274, 275, 276, 277, 278, 30)
        allLocalWaterPlacer(w4b8El, 279, 280, 281, 282, 283, 284, 285, 286, 287, 31)
        allLocalWaterPlacer(w1b9El, 288, 289, 290, 291, 292, 293, 294, 295, 296, 32)
        allLocalWaterPlacer(w2b9El, 297, 298, 299, 300, 301, 302, 303, 304, 305, 33)
        allLocalWaterPlacer(w3b9El, 306, 307, 308, 309, 310, 311, 312, 313, 314, 34)
        allLocalWaterPlacer(w4b9El, 315, 316, 317, 318, 319, 320, 321, 322, 323, 35)
        allLocalWaterPlacer(w1b10El, 324, 325, 326, 327, 328, 329, 330, 331, 332, 36)
        allLocalWaterPlacer(w2b10El, 333, 334, 335, 336, 337, 338, 339, 340, 341, 37)
        allLocalWaterPlacer(w3b10El, 342, 343, 344, 345, 346, 347, 348, 349, 350, 38)
        allLocalWaterPlacer(w4b10El, 351, 352, 353, 354, 355, 356, 357, 358, 359, 39)

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
    allLocalWaterSaver(w1b6El)
    allLocalWaterSaver(w2b6El)
    allLocalWaterSaver(w3b6El)
    allLocalWaterSaver(w4b6El)
    allLocalWaterSaver(w1b7El)
    allLocalWaterSaver(w2b7El)
    allLocalWaterSaver(w3b7El)
    allLocalWaterSaver(w4b7El)
    allLocalWaterSaver(w1b8El)
    allLocalWaterSaver(w2b8El)
    allLocalWaterSaver(w3b8El)
    allLocalWaterSaver(w4b8El)
    allLocalWaterSaver(w1b9El)
    allLocalWaterSaver(w2b9El)
    allLocalWaterSaver(w3b9El)
    allLocalWaterSaver(w4b9El)
    allLocalWaterSaver(w1b10El)
    allLocalWaterSaver(w2b10El)
    allLocalWaterSaver(w3b10El)
    allLocalWaterSaver(w4b10El)

    localFullBottles(0, b1El, localB1)
    localFullBottles(0, b2El, localB2)
    localFullBottles(0, b3El, localB3)
    localFullBottles(0, b4El, localB4)
    localFullBottles(0, b5El, localB5)
    localFullBottles(0, b6El, localB6)
    localFullBottles(0, b7El, localB7)
    localFullBottles(0, b8El, localB8)
    localFullBottles(0, b9El, localB9)
    localFullBottles(0, b10El, localB10)

    localFullBottles(1, b1El, localB1)
    localFullBottles(1, b2El, localB2)
    localFullBottles(1, b3El, localB3)
    localFullBottles(1, b4El, localB4)
    localFullBottles(1, b5El, localB5)
    localFullBottles(1, b6El, localB6)
    localFullBottles(1, b7El, localB7)
    localFullBottles(1, b8El, localB8)
    localFullBottles(1, b9El, localB9)
    localFullBottles(1, b10El, localB10)

    localFullBottles(2, b1El, localB1)
    localFullBottles(2, b2El, localB2)
    localFullBottles(2, b3El, localB3)
    localFullBottles(2, b4El, localB4)
    localFullBottles(2, b5El, localB5)
    localFullBottles(2, b6El, localB6)
    localFullBottles(2, b7El, localB7)
    localFullBottles(2, b8El, localB8)
    localFullBottles(2, b9El, localB9)
    localFullBottles(2, b10El, localB10)

    localFullBottles(3, b1El, localB1)
    localFullBottles(3, b2El, localB2)
    localFullBottles(3, b3El, localB3)
    localFullBottles(3, b4El, localB4)
    localFullBottles(3, b5El, localB5)
    localFullBottles(3, b6El, localB6)
    localFullBottles(3, b7El, localB7)
    localFullBottles(3, b8El, localB8)
    localFullBottles(3, b9El, localB9)
    localFullBottles(3, b10El, localB10)

    localFullBottles(4, b1El, localB1)
    localFullBottles(4, b2El, localB2)
    localFullBottles(4, b3El, localB3)
    localFullBottles(4, b4El, localB4)
    localFullBottles(4, b5El, localB5)
    localFullBottles(4, b6El, localB6)
    localFullBottles(4, b7El, localB7)
    localFullBottles(4, b8El, localB8)
    localFullBottles(4, b9El, localB9)
    localFullBottles(4, b10El, localB10)

    localFullBottles(5, b1El, localB1)
    localFullBottles(5, b2El, localB2)
    localFullBottles(5, b3El, localB3)
    localFullBottles(5, b4El, localB4)
    localFullBottles(5, b5El, localB5)
    localFullBottles(5, b6El, localB6)
    localFullBottles(5, b7El, localB7)
    localFullBottles(5, b8El, localB8)
    localFullBottles(5, b9El, localB9)
    localFullBottles(5, b10El, localB10)

    localFullBottles(6, b1El, localB1)
    localFullBottles(6, b2El, localB2)
    localFullBottles(6, b3El, localB3)
    localFullBottles(6, b4El, localB4)
    localFullBottles(6, b5El, localB5)
    localFullBottles(6, b6El, localB6)
    localFullBottles(6, b7El, localB7)
    localFullBottles(6, b8El, localB8)
    localFullBottles(6, b9El, localB9)
    localFullBottles(6, b10El, localB10)

    localFullBottles(7, b1El, localB1)
    localFullBottles(7, b2El, localB2)
    localFullBottles(7, b3El, localB3)
    localFullBottles(7, b4El, localB4)
    localFullBottles(7, b5El, localB5)
    localFullBottles(7, b6El, localB6)
    localFullBottles(7, b7El, localB7)
    localFullBottles(7, b8El, localB8)
    localFullBottles(7, b9El, localB9)
    localFullBottles(7, b10El, localB10)

    localHardState = {
        savedWater: savedWater,
        savedColor: savedColor,
        secondSavedWater: secondSavedWater,
        secondSavedColor: secondSavedColor,
        firstNum: firstNum,
        secondNum: secondNum,
        thirdNum: thirdNum,
        fourthNum: fourthNum,
        levelStart: levelStart,
        levelHard: levelHard,
        levelCompleted: levelCompleted,
        savedLocalFullBottles: savedLocalFullBottles,
        listOfSavedLevels: listOfSavedLevels
    }

    secondSavedWater = []
    secondSavedColor = []

    localStorage.setItem("localHardState", JSON.stringify(localHardState))
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
        color1.push("orange")
        color1.push("pink")
        color1.push("green")
        color1.push("red")
        color1.push("yellow")
        color1.push("purple")
        color1.push("blue")
        color1.push("lightblue")
    }
    else if(num === 2) {
        color1.push("lightblue")
        color1.push("red")
        color1.push("purple")
        color1.push("yellow")
        color1.push("orange")
        color1.push("pink")
        color1.push("green")
        color1.push("blue")
    }
    else if(num === 3) {
        color1.push("pink")
        color1.push("blue")
        color1.push("red")
        color1.push("green")
        color1.push("purple")
        color1.push("yellow")
        color1.push("lightblue")
        color1.push("orange")
    }
    else if(num === 4) {
        color1.push("green")
        color1.push("purple")
        color1.push("blue")
        color1.push("lightblue")
        color1.push("yellow")
        color1.push("pink")
        color1.push("orange")
        color1.push("red")
    }
    else if(num === 5) {
        color1.push("red")
        color1.push("yellow")
        color1.push("blue")
        color1.push("purple")
        color1.push("pink")
        color1.push("lightblue")
        color1.push("green")
        color1.push("orange")
    }
    else if(num === 6) {
        color1.push("blue")
        color1.push("green")
        color1.push("red")
        color1.push("orange")
        color1.push("yellow")
        color1.push("pink")
        color1.push("lightblue")
        color1.push("purple")
    }

    if(
        previousColor !== undefined &&
        color1[0] === previousColor[0] &&
        color1[1] === previousColor[1] &&
        color1[2] === previousColor[2] &&
        color1[3] === previousColor[3] &&
        color1[4] === previousColor[4] &&
        color1[5] === previousColor[5] &&
        color1[6] === previousColor[6] &&
        color1[7] === previousColor[7]
    ) {
        color1 = []
        randomColors(color1, previousColor, secondPreviousColor, thirdPreviousColor)
    }
    if(
        secondPreviousColor !== undefined &&
        color1[0] === secondPreviousColor[0] &&
        color1[1] === secondPreviousColor[1] &&
        color1[2] === secondPreviousColor[2] &&
        color1[3] === secondPreviousColor[3] &&
        color1[4] === secondPreviousColor[4] &&
        color1[5] === secondPreviousColor[5] &&
        color1[6] === secondPreviousColor[6] &&
        color1[7] === secondPreviousColor[7]
    ) {
        color1 = []
        randomColors(color1, previousColor, secondPreviousColor, thirdPreviousColor)
    }
    if(
        thirdPreviousColor !== undefined &&
        color1[0] === thirdPreviousColor[0] &&
        color1[1] === thirdPreviousColor[1] &&
        color1[2] === thirdPreviousColor[2] &&
        color1[3] === thirdPreviousColor[3] &&
        color1[4] === thirdPreviousColor[4] &&
        color1[5] === thirdPreviousColor[5] &&
        color1[6] === thirdPreviousColor[6] &&
        color1[7] === thirdPreviousColor[7]
    ) {
        color1 = []
        randomColors(color1, previousColor, secondPreviousColor, thirdPreviousColor)
    }

    listOfColors.push(color1[0], color1[1], color1[2], color1[3], color1[4], color1[5], color1[6], color1[7])
}

function colorUnroller(w, number) {
    if(listOfColors[number] === "green") {
        w.isGreen = true
        w.isRed = false
        w.isBlue = false
        w.isOrange = false
        w.isYellow = false
        w.isPurple = false
        w.isPink = false
        w.isLightBlue = false
        w.isEmpty = false
        w.style.backgroundColor = "#27ae60"
    }
    else if(listOfColors[number] === "red") {
        w.isGreen = false
        w.isRed = true
        w.isBlue = false
        w.isOrange = false
        w.isYellow = false
        w.isPurple = false
        w.isPink = false
        w.isLightBlue = false
        w.isEmpty = false
        w.style.backgroundColor = "#c0392b"
    }
    else if(listOfColors[number] === "blue") {
        w.isGreen = false
        w.isRed = false
        w.isBlue = true
        w.isOrange = false
        w.isYellow = false
        w.isPurple = false
        w.isPink = false
        w.isLightBlue = false
        w.isEmpty = false
        w.style.backgroundColor = "#3498db"
    }
    else if(listOfColors[number] === "orange") {
        w.isGreen = false
        w.isRed = false
        w.isBlue = false
        w.isOrange = true
        w.isYellow = false
        w.isPurple = false
        w.isPink = false
        w.isLightBlue = false
        w.isEmpty = false
        w.style.backgroundColor = "#FF7518"
    }
    else if(listOfColors[number] === "yellow") {
        w.isGreen = false
        w.isRed = false
        w.isBlue = false
        w.isOrange = false
        w.isYellow = true
        w.isPurple = false
        w.isPink = false
        w.isLightBlue = false
        w.isEmpty = false
        w.style.backgroundColor = "#FFC000"
    }
    else if(listOfColors[number] === "purple") {
        w.isGreen = false
        w.isRed = false
        w.isBlue = false
        w.isOrange = false
        w.isYellow = false
        w.isPurple = true
        w.isPink = false
        w.isLightBlue = false
        w.isEmpty = false
        w.style.backgroundColor = "#BF40BF"
    }
    else if(listOfColors[number] === "pink") {
        w.isGreen = false
        w.isRed = false
        w.isBlue = false
        w.isOrange = false
        w.isYellow = false
        w.isPurple = false
        w.isPink = true
        w.isLightBlue = false
        w.isEmpty = false
        w.style.backgroundColor = "#FFB6C1"
    }
    else if(listOfColors[number] === "lightblue") {
        w.isGreen = false
        w.isRed = false
        w.isBlue = false
        w.isOrange = false
        w.isYellow = false
        w.isPurple = false
        w.isPink = false
        w.isLightBlue = true
        w.isEmpty = false
        w.style.backgroundColor = "#ADD8E6"
    }
}

function emptyWater(w) {
    w.isGreen = false
    w.isRed = false
    w.isBlue = false
    w.isOrange = false
    w.isYellow = false
    w.isPurple = false
    w.isPink = false
    w.isLightBlue = false
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
    colorUnroller(w1b4El, 12)
    colorUnroller(w2b4El, 13)
    colorUnroller(w3b4El, 14)
    colorUnroller(w4b4El, 15)
    colorUnroller(w1b5El, 16)
    colorUnroller(w2b5El, 17)
    colorUnroller(w3b5El, 18)
    colorUnroller(w4b5El, 19)
    colorUnroller(w1b6El, 20)
    colorUnroller(w2b6El, 21)
    colorUnroller(w3b6El, 22)
    colorUnroller(w4b6El, 23)
    colorUnroller(w1b7El, 24)
    colorUnroller(w2b7El, 25)
    colorUnroller(w3b7El, 26)
    colorUnroller(w4b7El, 27)
    colorUnroller(w1b8El, 28)
    colorUnroller(w2b8El, 29)
    colorUnroller(w3b8El, 30)
    colorUnroller(w4b8El, 31)
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
                w4.isBlue === true && w3.isBlue === true && w2.isBlue === true && w1.isBlue === true ||
                w4.isOrange === true && w3.isOrange === true && w2.isOrange === true && w1.isOrange === true || 
                w4.isYellow === true && w3.isYellow === true && w2.isYellow === true && w1.isYellow === true || 
                w4.isPurple === true && w3.isPurple === true && w2.isPurple === true && w1.isPurple === true ||
                w4.isPink === true && w3.isPink === true && w2.isPink === true && w1.isPink === true || 
                w4.isLightBlue === true && w3.isLightBlue === true && w2.isLightBlue === true && w1.isLightBlue === true
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
        w4.isBlue === true && w3.isBlue === true && w2.isBlue === true && w1.isBlue === true ||
        w4.isOrange === true && w3.isOrange === true && w2.isOrange === true && w1.isOrange === true || 
        w4.isYellow === true && w3.isYellow === true && w2.isYellow === true && w1.isYellow === true || 
        w4.isPurple === true && w3.isPurple === true && w2.isPurple === true && w1.isPurple === true ||
        w4.isPink === true && w3.isPink === true && w2.isPink === true && w1.isPink === true || 
        w4.isLightBlue === true && w3.isLightBlue === true && w2.isLightBlue === true && w1.isLightBlue === true
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
    isBottleFull(0, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
    isBottleFull(0, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
    isBottleFull(0, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
    isBottleFull(0, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
    isBottleFull(0, b10El, w4b10El, w3b10El, w2b10El, w1b10El)

    isBottleFull(1, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(1, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(1, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(1, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(1, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
    isBottleFull(1, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
    isBottleFull(1, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
    isBottleFull(1, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
    isBottleFull(1, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
    isBottleFull(1, b10El, w4b10El, w3b10El, w2b10El, w1b10El)

    isBottleFull(2, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(2, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(2, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(2, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(2, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
    isBottleFull(2, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
    isBottleFull(2, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
    isBottleFull(2, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
    isBottleFull(2, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
    isBottleFull(2, b10El, w4b10El, w3b10El, w2b10El, w1b10El)

    isBottleFull(3, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(3, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(3, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(3, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(3, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
    isBottleFull(3, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
    isBottleFull(3, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
    isBottleFull(3, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
    isBottleFull(3, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
    isBottleFull(3, b10El, w4b10El, w3b10El, w2b10El, w1b10El)

    isBottleFull(4, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(4, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(4, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(4, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(4, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
    isBottleFull(4, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
    isBottleFull(4, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
    isBottleFull(4, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
    isBottleFull(4, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
    isBottleFull(4, b10El, w4b10El, w3b10El, w2b10El, w1b10El)

    isBottleFull(5, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(5, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(5, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(5, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(5, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
    isBottleFull(5, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
    isBottleFull(5, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
    isBottleFull(5, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
    isBottleFull(5, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
    isBottleFull(5, b10El, w4b10El, w3b10El, w2b10El, w1b10El)

    isBottleFull(6, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(6, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(6, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(6, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(6, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
    isBottleFull(6, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
    isBottleFull(6, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
    isBottleFull(6, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
    isBottleFull(6, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
    isBottleFull(6, b10El, w4b10El, w3b10El, w2b10El, w1b10El)

    isBottleFull(7, b1El, w4b1El, w3b1El, w2b1El, w1b1El)
    isBottleFull(7, b2El, w4b2El, w3b2El, w2b2El, w1b2El)
    isBottleFull(7, b3El, w4b3El, w3b3El, w2b3El, w1b3El)
    isBottleFull(7, b4El, w4b4El, w3b4El, w2b4El, w1b4El)
    isBottleFull(7, b5El, w4b5El, w3b5El, w2b5El, w1b5El)
    isBottleFull(7, b6El, w4b6El, w3b6El, w2b6El, w1b6El)
    isBottleFull(7, b7El, w4b7El, w3b7El, w2b7El, w1b7El)
    isBottleFull(7, b8El, w4b8El, w3b8El, w2b8El, w1b8El)
    isBottleFull(7, b9El, w4b9El, w3b9El, w2b9El, w1b9El)
    isBottleFull(7, b10El, w4b10El, w3b10El, w2b10El, w1b10El)
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
                        w2.isBlue !== w1.isBlue ||
                        w2.isOrange !== w1.isOrange || 
                        w2.isYellow !== w1.isYellow || 
                        w2.isPurple !== w1.isPurple ||
                        w2.isPink !== w1.isPink || 
                        w2.isLightBlue !== w1.isLightBlue
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
                    w3.isBlue !== w2.isBlue ||
                    w3.isOrange !== w2.isOrange || 
                    w3.isYellow !== w2.isYellow || 
                    w3.isPurple !== w2.isPurple ||
                    w3.isPink !== w2.isPink || 
                    w3.isLightBlue !== w2.isLightBlue
                ) {
                    clickedWater = w3
                }
                else if(
                    w3.isGreen === w2.isGreen && w3.isGreen !== w1.isGreen || 
                    w3.isRed === w2.isRed && w3.isRed !== w1.isRed || 
                    w3.isBlue === w2.isBlue && w3.isBlue !== w1.isBlue ||
                    w3.isOrange === w2.isOrange && w3.isOrange !== w1.isOrange || 
                    w3.isYellow === w2.isYellow && w3.isYellow !== w1.isYellow || 
                    w3.isPurple === w2.isPurple && w3.isPurple !== w1.isPurple ||
                    w3.isPink === w2.isPink && w3.isPink !== w1.isPink || 
                    w3.isLightBlue === w2.isLightBlue && w3.isLightBlue !== w1.isLightBlue
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
                    w3.isBlue === w1.isBlue &&
                    w3.isOrange === w2.isOrange && 
                    w3.isOrange === w1.isOrange && 
                    w3.isYellow === w2.isYellow && 
                    w3.isYellow === w1.isYellow && 
                    w3.isPurple === w2.isPurple && 
                    w3.isPurple === w1.isPurple &&
                    w3.isPink === w2.isPink && 
                    w3.isPink === w1.isPink && 
                    w3.isLightBlue === w2.isLightBlue && 
                    w3.isLightBlue === w1.isLightBlue
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
                w4.isBlue !== w3.isBlue ||
                w4.isOrange !== w3.isOrange || 
                w4.isYellow !== w3.isYellow || 
                w4.isPurple !== w3.isPurple ||
                w4.isPink !== w3.isPink || 
                w4.isLightBlue !== w3.isLightBlue
            ) {
                clickedWater = w4
            }
            else if(
                w4.isGreen === w3.isGreen && w4.isGreen !== w2.isGreen || 
                w4.isRed === w3.isRed && w4.isRed !== w2.isRed || 
                w4.isBlue === w3.isBlue && w4.isBlue !== w2.isBlue ||
                w4.isOrange === w3.isOrange && w4.isOrange !== w2.isOrange || 
                w4.isYellow === w3.isYellow && w4.isYellow !== w2.isYellow || 
                w4.isPurple === w3.isPurple && w4.isPurple !== w2.isPurple ||
                w4.isPink === w3.isPink && w4.isPink !== w2.isPink || 
                w4.isLightBlue === w3.isLightBlue && w4.isLightBlue !== w2.isLightBlue
            ) {
                clickedWater = w4
                secondClickedWater = w3
            }
            else if(
                w4.isGreen === w3.isGreen && w4.isGreen === w2.isGreen && w4.isGreen !== w1.isGreen || 
                w4.isRed === w3.isRed && w4.isRed === w2.isRed && w4.isRed !== w1.isRed || 
                w4.isBlue === w3.isBlue && w4.isBlue === w2.isBlue && w4.isBlue !== w1.isBlue ||
                w4.isOrange === w3.isOrange && w4.isOrange === w2.isOrange && w4.isOrange !== w1.isOrange || 
                w4.isYellow === w3.isYellow && w4.isYellow === w2.isYellow && w4.isYellow !== w1.isYellow || 
                w4.isPurple === w3.isPurple && w4.isPurple === w2.isPurple && w4.isPurple !== w1.isPurple ||
                w4.isPink === w3.isPink && w4.isPink === w2.isPink && w4.isPink !== w1.isPink || 
                w4.isLightBlue === w3.isLightBlue && w4.isLightBlue === w2.isLightBlue && w4.isLightBlue !== w1.isLightBlue
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
    w.isOrange = waterClicked.isOrange
    w.isYellow = waterClicked.isYellow
    w.isPurple = waterClicked.isPurple
    w.isPink = waterClicked.isPink
    w.isLightBlue = waterClicked.isLightBlue
    w.isEmpty = false
    if(w.isGreen === true) {
        w.style.backgroundColor = "#27ae60"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
        waterClicked.isOrange = false
        waterClicked.isYellow = false
        waterClicked.isPurple = false
        waterClicked.isPink = false
        waterClicked.isLightBlue = false
    }
    else if(w.isRed === true) {
        w.style.backgroundColor = "#c0392b"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
        waterClicked.isOrange = false
        waterClicked.isYellow = false
        waterClicked.isPurple = false
        waterClicked.isPink = false
        waterClicked.isLightBlue = false
    }
    else if(w.isBlue === true) {
        w.style.backgroundColor = "#3498db"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
        waterClicked.isOrange = false
        waterClicked.isYellow = false
        waterClicked.isPurple = false
        waterClicked.isPink = false
        waterClicked.isLightBlue = false
    }
    else if(w.isOrange === true) {
        w.style.backgroundColor = "#FF7518"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
        waterClicked.isOrange = false
        waterClicked.isYellow = false
        waterClicked.isPurple = false
        waterClicked.isPink = false
        waterClicked.isLightBlue = false
    }
    else if(w.isYellow === true) {
        w.style.backgroundColor = "#FFC000"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
        waterClicked.isOrange = false
        waterClicked.isYellow = false
        waterClicked.isPurple = false
        waterClicked.isPink = false
        waterClicked.isLightBlue = false
    }
    else if(w.isPurple === true) {
        w.style.backgroundColor = "#BF40BF"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
        waterClicked.isOrange = false
        waterClicked.isYellow = false
        waterClicked.isPurple = false
        waterClicked.isPink = false
        waterClicked.isLightBlue = false
    }
    else if(w.isPink === true) {
        w.style.backgroundColor = "#FFB6C1"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
        waterClicked.isOrange = false
        waterClicked.isYellow = false
        waterClicked.isPurple = false
        waterClicked.isPink = false
        waterClicked.isLightBlue = false
    }
    else if(w.isLightBlue === true) {
        w.style.backgroundColor = "#ADD8E6"
        waterClicked.style.backgroundColor = ""
        waterClicked.isEmpty = true
        waterClicked.isRed = false
        waterClicked.isGreen = false
        waterClicked.isBlue = false
        waterClicked.isOrange = false
        waterClicked.isYellow = false
        waterClicked.isPurple = false
        waterClicked.isPink = false
        waterClicked.isLightBlue = false
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
                        clickedWater.isBlue === w1.isBlue &&
                        clickedWater.isOrange === w1.isOrange && 
                        clickedWater.isYellow === w1.isYellow && 
                        clickedWater.isPurple === w1.isPurple &&
                        clickedWater.isPink === w1.isPink && 
                        clickedWater.isLightBlue === w1.isLightBlue
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
                            clickedWater.isBlue === w2.isBlue &&
                            clickedWater.isOrange === w2.isOrange && 
                            clickedWater.isYellow === w2.isYellow && 
                            clickedWater.isPurple === w2.isPurple &&
                            clickedWater.isPink === w2.isPink && 
                            clickedWater.isLightBlue === w2.isLightBlue
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
                                clickedWater.isBlue === w3.isBlue &&
                                clickedWater.isOrange === w3.isOrange && 
                                clickedWater.isYellow === w3.isYellow && 
                                clickedWater.isPurple === w3.isPurple &&
                                clickedWater.isPink === w3.isPink && 
                                clickedWater.isLightBlue === w3.isLightBlue
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

b6El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b6El, w3b6El, w2b6El, w1b6El, b6El)
    }
    else {
        waterPlacer(w4b6El, w3b6El, w2b6El, w1b6El, b6El)
    }
})

b7El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b7El, w3b7El, w2b7El, w1b7El, b7El)
    }
    else {
        waterPlacer(w4b7El, w3b7El, w2b7El, w1b7El, b7El)
    }
})

b8El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b8El, w3b8El, w2b8El, w1b8El, b8El)
    }
    else {
        waterPlacer(w4b8El, w3b8El, w2b8El, w1b8El, b8El)
    }
})

b9El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b9El, w3b9El, w2b9El, w1b9El, b9El)
    }
    else {
        waterPlacer(w4b9El, w3b9El, w2b9El, w1b9El, b9El)
    }
})

b10El.addEventListener("click", function() {
    if(clickedWater === null) {
        waterSaver(w4b10El, w3b10El, w2b10El, w1b10El, b10El)
    }
    else {
        waterPlacer(w4b10El, w3b10El, w2b10El, w1b10El, b10El)
    }
})