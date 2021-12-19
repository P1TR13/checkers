let board = document.querySelector("#plansza")
let amountOfSquares = 64
let game = 1
let whoMoves = 0

let whiteCaptured = document.querySelector("#zbiteBiale")
let blackCaptured = document.querySelector("#zbiteCzarne")

let howManyWhite = 0
let howManyBlack = 0

var usedSquares = []

let info = [['1','1','1','1','1','1','1','1','1','1'],
            ['1','0','b','0','b','0','b','0','b','1'],
            ['1','b','0','b','0','b','0','b','0','1'],
            ['1','0','b','0','b','0','b','0','b','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','c','0','c','0','c','0','c','0','1'],
            ['1','0','c','0','c','0','c','0','c','1'],
            ['1','c','0','c','0','c','0','c','0','1'],
            ['1','1','1','1','1','1','1','1','1','1']]

let boxes = [['1','1','1','1','1','1','1','1','1','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','0','0','0','0','0','0','0','0','1'],
            ['1','1','1','1','1','1','1','1','1','1']]

function deletePawns() {
    let pawnsToDelete = document.querySelectorAll(".pion")
    pawnsToDelete.forEach(pawn => pawn.remove())
}

function gettingBoxes() {
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            boxes[i][j] = document.querySelector("#p" + i.toString() + j.toString())
        }
    }
}


function createBoard() {
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            let square = document.createElement("div")
            square.setAttribute("id", "p" + i.toString() + j.toString())
            if (i % 2 == 1) {
                if (j % 2 == 1) {
                    square.setAttribute("class", "pole biale")
                } else {
                    square.setAttribute("class", "pole czarne")
                }
            } else {
                if (j % 2 == 0) {
                    square.setAttribute("class", "pole biale")
                } else {
                    square.setAttribute("class", "pole czarne")
                }
            }
            
            if (info[i][j] == 'b'){
                square.classList.add("b")
            }
            else if (info[i][j] == 'c'){
                square.classList.add("c")
            }
            else {

            }

            board.appendChild(square)

        }
    }
}


function createPawns() {
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            if (info[i][j] == "b"){

                let pawnW = document.createElement("div")
                pawnW.setAttribute("class", "pion bialyPion")
                pawnW.setAttribute("id", "b" + i.toString() + j.toString())

                boxes[i][j].appendChild(pawnW)
            }
            if (info[i][j] == "c"){

                let pawnB = document.createElement("div");
                pawnB.setAttribute("class", "pion czarnyPion");
                pawnB.setAttribute("id", "c" + i.toString() + j.toString())

                boxes[i][j].appendChild(pawnB)
            }
        }
    }
}

let isMoving = 0
let isCapturing = 0
let capturingPawn
let whichColorIsCapturing

let lastTouchedPawn

function capture(opponentColor, pole) {
    pole1 = parseInt(pole[1])
    pole2 = parseInt(pole[2])
    if (info[pole1 - 1][pole2 - 1] === opponentColor) {
        if (info[pole1 - 2][pole2 - 2] === "0") {
            let poleBicie2 = document.querySelector("#p" + (pole1 - 2) + (pole2 - 2))
            poleBicie2.classList.add("fioletowePole")

            usedSquares.push("#p" + (pole1 - 2) + (pole2 - 2))
        }
    }
    if (info[pole1 - 1][pole2 + 1] === opponentColor) {
        if (info[pole1 - 2][pole2 + 2] === "0") {
            let poleBicie2 = document.querySelector("#p" + (pole1 - 2) + (pole2 + 2))
            poleBicie2.classList.add("fioletowePole")

            usedSquares.push("#p" + (pole1 - 2) + (pole2 + 2))
        }
    }
    if (info[pole1 + 1][pole2 - 1] === opponentColor) {
        if (info[pole1 + 2][pole2 - 2] === "0") {
            let poleBicie2 = document.querySelector("#p" + (pole1 + 2) + (pole2 - 2))
            poleBicie2.classList.add("fioletowePole")

            usedSquares.push("#p" + (pole1 + 2) + (pole2 - 2))
        }
    }
    if (info[pole1 + 1][pole2 + 1] === opponentColor) {
        if (info[pole1 + 2][pole2 + 2] === "0") {
            let poleBicie2 = document.querySelector("#p" + (pole1 + 2) + (pole2 + 2))
            poleBicie2.classList.add("fioletowePole")

            usedSquares.push("#p" + (pole1 + 2) + (pole2 + 2))
        }
    }

    
}

function move(color, square) {
    pole = square.id
    let opponentColor
    let y2
    if (color === "b"){
        opponentColor = "c"
    }
    if (color === "c") {
        opponentColor = "b"
    }
    
    if (isCapturing === 0) {
        if (info[pole[1]][pole[2]] === color) {
            lastTouchedPawn = color + pole[1].toString() + pole[2].toString()
    
            var isQueen = document.getElementById(lastTouchedPawn)

            let y
            if (color === "b"){
                y = parseInt(pole[1]) + 1
                y2 = y + 1
            }
            if (color === "c") {
                y = parseInt(pole[1]) - 1
                y2 = y - 1
            }
            let x = parseInt(pole[2])
    
            let pomocniczePole
            
            while (usedSquares.length !== 0) {
                pomocniczePole = document.querySelector(usedSquares.pop())
                pomocniczePole.classList.remove("fioletowePole")
            }
            
            if (info[y][x + 1] === "0") {
                let pole1 = document.querySelector("#p" + (y) + (x + 1))
                pole1.classList.add("fioletowePole")
    
                usedSquares.push("#p" + (y) + (x + 1))
            } 

            if (info[y][x - 1] === "0") {
                let pole2 = document.querySelector("#p" + (y) + (x - 1))
                pole2.classList.add("fioletowePole")
    
                usedSquares.push("#p" + (y) + (x - 1))
            }

            if (isQueen.classList.contains("bialaDama")) {
                if (info[y - 2][x + 1] === "0") {
                    let pole1 = document.querySelector("#p" + (y - 2) + (x + 1))
                    pole1.classList.add("fioletowePole")
        
                    usedSquares.push("#p" + (y - 2) + (x + 1))
                } 
    
                if (info[y - 2][x - 1] === "0") {
                    let pole2 = document.querySelector("#p" + (y - 2) + (x - 1))
                    pole2.classList.add("fioletowePole")
        
                    usedSquares.push("#p" + (y - 2) + (x - 1))
                }
            }
            if (isQueen.classList.contains("czarnaDama")) {
                if (info[y + 2][x + 1] === "0") {
                    let pole1 = document.querySelector("#p" + (y + 2) + (x + 1))
                    pole1.classList.add("fioletowePole")
        
                    usedSquares.push("#p" + (y + 2) + (x + 1))
                } 
    
                if (info[y + 2][x - 1] === "0") {
                    let pole2 = document.querySelector("#p" + (y + 2) + (x - 1))
                    pole2.classList.add("fioletowePole")
        
                    usedSquares.push("#p" + (y + 2) + (x - 1))
                }
            }
    
            let pole1 = parseInt(pole[1])
            let pole2 = parseInt(pole[2])
    
            capture(opponentColor, pole)
        }
    }
    

    if (square.classList.contains("fioletowePole")) {
        let pawn = document.createElement("div")

        if (whoMoves % 2 === 0) {
            pawn.setAttribute("class", "pion bialyPion")
            pawn.setAttribute("id", "b" + pole[1].toString() + pole[2].toString())
            info[square.id[1]][square.id[2]] = "b"
        } else {
            pawn.setAttribute("class", "pion czarnyPion")
            pawn.setAttribute("id", "c" + pole[1].toString() + pole[2].toString())
            info[square.id[1]][square.id[2]] = "c"
        }
        
        info[lastTouchedPawn[1]][lastTouchedPawn[2]] = "0"
        
        var pawnToRemove = document.getElementById(lastTouchedPawn)

        if (pawnToRemove.classList.contains("bialaDama")) {
            pawn.classList.add("bialaDama")
        }
        if (pawnToRemove.classList.contains("czarnaDama")) {
            pawn.classList.add("czarnaDama")
        }

        pawnToRemove.remove()

        square.appendChild(pawn)

        whoMoves++

        while (usedSquares.length !== 0) {
            pomocniczePole = document.querySelector(usedSquares.pop())
            pomocniczePole.classList.remove("fioletowePole")
        }
        
        isCapturing = 0

        if (parseInt(square.id[2]) + 2 === parseInt(lastTouchedPawn[2]) || parseInt(square.id[2]) - 2 === parseInt(lastTouchedPawn[2])) {
            let second = (parseInt(square.id[2]) + parseInt(lastTouchedPawn[2]))/2
            let first = (parseInt(square.id[1]) + parseInt(lastTouchedPawn[1]))/2
            var object = document.getElementById(opponentColor + first.toString() + second.toString())
            info[first][second] = "0"
            if (opponentColor === "b") {
                let whitePawnCaptured = document.createElement("div")
                whitePawnCaptured.classList.add("zbityBialyPion")
                whiteCaptured.appendChild(whitePawnCaptured)
                howManyWhite++
            }
            if (opponentColor === "c") {
                let blackPawnCaptured = document.createElement("div")
                blackPawnCaptured.classList.add("zbityCzarnyPion")
                blackCaptured.appendChild(blackPawnCaptured)
                howManyBlack++
            }
            object.remove()
            isCapturing = 1
            capturingPawn = square.id[1] + square.id[2]
            whichColorIsCapturing = color
        }        
    }

    if ((isCapturing === 1) && (info[pole[1]][pole[2]] === color) && (capturingPawn === square.id[1] + square.id[2])) {
        let pole1 = parseInt(square.id[1])
        let pole2 = parseInt(square.id[2])
        if (((info[pole1 - 1][pole2 - 1] === opponentColor) && (info[pole1 - 2][pole2 - 2] === "0")) || ((info[pole1 + 1][pole2 - 1] === opponentColor) && (info[pole1 + 2][pole2 - 2] === "0")) || ((info[pole1 - 1][pole2 + 1] === opponentColor) && (info[pole1 - 2][pole2 + 2] === "0")) || ((info[pole1 + 1][pole2 + 1] === opponentColor) && (info[pole1 + 2][pole2 + 2] === "0"))) {
            lastTouchedPawn = color + capturingPawn
            capture (opponentColor, square.id)
            if (whichColorIsCapturing === "b") {
                whoMoves = 0
            }
            if (whichColorIsCapturing === "c") {
                whoMoves = 1
            }
        } else {
            isCapturing = 0
        }
    }

    if (color === "b" && square.id[1] === "8" && isCapturing === 0) {
        let newPawn = document.querySelector("#b" + square.id[1] + square.id[2])
        newPawn.classList.add("bialaDama")
    }
    if (color === "c" && square.id[1] === "1" && isCapturing === 0) {
        let newPawn = document.querySelector("#c" + square.id[1] + square.id[2])
        newPawn.classList.add("czarnaDama")
    }
}

function movingPawns() {
    let squares = document.querySelectorAll(".czarne")
    let pawnColor;
    squares.forEach(square => square.addEventListener('click', function() {
        
        if (whoMoves % 2 === 0) {
            pawnColor = "b";
        } else {
            pawnColor = "c";
        }

        move(pawnColor, square)

        if (whoMoves % 2 === 0) {
            document.getElementById("ruch").innerHTML = "WHITE";
        } else {
            document.getElementById("ruch").innerHTML = "BLACK";
        }

        if (howManyWhite === 12) {
            document.getElementById("ruch").innerHTML = "BLACK WON!";
        }
        if (howManyBlack === 12) {
            document.getElementById("ruch").innerHTML = "WHITE WON!";
        }
    }))
}


createBoard()
gettingBoxes()
createPawns()
movingPawns()