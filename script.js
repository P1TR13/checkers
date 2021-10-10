let board = document.querySelector("#plansza")
let amountOfSquares = 64
let game = 1


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

                boxes[i][j].appendChild(pawnW)
            }
            if (info[i][j] == "c"){

                let pawnB = document.createElement("div");
                pawnB.setAttribute("class", "pion czarnyPion");
                boxes[i][j].appendChild(pawnB)
            }
        }
    }
}

let moving = 0

function movingPawns() {

}


createBoard()
gettingBoxes()
createPawns()
movingPawns()