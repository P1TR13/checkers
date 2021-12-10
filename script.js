let board = document.querySelector("#plansza")
let amountOfSquares = 64
let game = 1
let whoMoves = 0

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

function gettingBoxes(){
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


function createPawns(){
    for (i = 1; i <= 8; i++) {
        for (j = 1; j <= 8; j++) {
            if (info[i][j] == "b"){

                let pawnW = document.createElement("div")
                pawnW.setAttribute("class", "pion bialyPion")
                pawnW.setAttribute("id", "w" + i.toString() + j.toString())

                boxes[i][j].appendChild(pawnW)
            }
            if (info[i][j] == "c"){

                let pawnB = document.createElement("div");
                pawnB.setAttribute("class", "pion czarnyPion");
                pawnB.setAttribute("id", "b" + i.toString() + j.toString())

                boxes[i][j].appendChild(pawnB)
            }
        }
    }
}

let moving = 0

function square() {
    console.log("ruch")
}

function move(color, pion) {
    console.log(pion.id)
    let y
    if (color === "b"){
        y = parseInt(pion.id[1]) + 1
    }
    if (color === "c") {
        y = parseInt(pion.id[1]) - 1
    }
    let x = parseInt(pion.id[2])

    console.log("Gdzie moze ruszyc")

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

}

function whiteToMove() {
    let whitePawns = document.querySelectorAll(".bialyPion")
    whitePawns.forEach(pawn => pawn.addEventListener('click', function() {
        move("b", pawn)
    
    }))
}

function blackToMove() {
    let blackPawns = document.querySelectorAll(".czarnyPion")
    blackPawns.forEach(pawn => pawn.addEventListener('click', function(){
        move("c", pawn)
    }))
}

function movingPawns() {
    console.log("czyj ruch " + whoMoves)
    if (whoMoves % 2 === 0) {
        whiteToMove()
        console.log("biale")
    }
    else if (whoMoves % 2 === 1) {
        blackToMove()
        console.log("czarne")
    }

    whoMoves++
    console.log("czyj ruch " + whoMoves)
}


createBoard()
gettingBoxes()
createPawns()
movingPawns()