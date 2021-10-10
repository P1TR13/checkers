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
    


    // moving = 0
    // let pawns = document.querySelectorAll(".pole")
    // pawns.forEach(pawn => pawn.addEventListener('click', function move() {
    //     if ((info[pawn.id[1]][pawn.id[2]] === 'b') || (info [pawn.id[1]][pawn.id[2]] === 'c')){
    //         let op1 = parseInt(pawn.id[1])-1
    //         let op2 = parseInt(pawn.id[2])-1
    //         let op3 = parseInt(pawn.id[1])+1
    //         let op4 = parseInt(pawn.id[2])+1
    //         if ((info[op3][op2] === '0') || (info[op3][op4] === '0')){
    //             if (moving === 0) {
    //                 moving = 1


    //                 if (info[pawn.id[1]][pawn.id[2]] === 'b') {
    //                     //nowClicked = pawn.id[1] + pawn.id[2]
    //                     console.log("Biały pion!")
                        
    //                     /*if (info[op1][op2] === '0') {
    //                         console.log("Można zagrać na pole " + op1 + op2)
    //                         //info[op1][op2] = 'b'
    //                         //info[pawn.id[1]][pawn.id[2]] = '0'
    //                     }
    //                     if (info[op1][op4] === '0') {
    //                         console.log("Można zagrać na pole " + op1 + op4)
    //                         //info[op1][op4] = 'b'
    //                         //info[pawn.id[1]][pawn.id[2]] = '0'
    //                     }*/
    //                     if ((info[op3][op2] === '0') && (info[op3][op4] === '0')) {
    //                         if (info[op3][op2] === '0') {
    //                             console.log("Można zagrać na pole " + op3 + op2)
    //                             boxes[op3][op2].classList.add("fioletowePole")
    //                             boxes[op3][op2].addEventListener('click', function click(){
    //                                 if (boxes[op3][op2].classList.contains("fioletowePole")){
    //                                     info[op3][op2] = 'b'
    //                                     info[pawn.id[1]][pawn.id[2]] = '0'
                                        
    //                                     boxes[op3][op2].classList.remove("fioletowePole")
    //                                     boxes[op3][op4].classList.remove("fioletowePole")
    //                                     //deleteBoard()
    //                                     //createBoard()
    //                                     //gettingBoxes()
    //                                     deletePawns()
    //                                     createPawns()
    //                                     movingPawns()
    //                                     //boxes[op3][op4].removeEventListener('click', click)
    //                                     //boxes[op3][op2].removeEventListener('click', click)
    //                                     moving = 0
    //                                     //pawns.forEach(pawn => pawn.removeEventListener('click', click))
    //                                 }
                                    
    //                             })
    //                             //info[op3][op2] = 'b'
    //                             //info[pawn.id[1]][pawn.id[2]] = '0'
    //                         }
    //                         if (info[op3][op4] === '0') {
    //                             console.log("Można zagrać na pole " + op3 + op4)
    //                             boxes[op3][op4].classList.add("fioletowePole")
    //                             boxes[op3][op4].addEventListener('click', function click(){
    //                                 if (boxes[op3][op2].classList.contains("fioletowePole")){
    //                                     info[op3][op4] = 'b'
    //                                     info[pawn.id[1]][pawn.id[2]] = '0'
                                        
    //                                     boxes[op3][op2].classList.remove("fioletowePole")
    //                                     boxes[op3][op4].classList.remove("fioletowePole")
    //                                     //deleteBoard()
    //                                     //createBoard()
    //                                     //gettingBoxes()
    //                                     deletePawns()
    //                                     createPawns()
    //                                     movingPawns()
    //                                     //boxes[op3][op4].removeEventListener('click', click)
    //                                     //boxes[op3][op2].removeEventListener('click', click)
    //                                     moving = 0
    //                                 }
    //                             })
    //                             //info[op3][op4] = 'b'
    //                             //info[pawn.id[1]][pawn.id[2]] = '0'
    //                         }
    //                     }

    //                     else if (info[op3][op2] === '0') {
    //                         console.log("Można zagrać na pole " + op3 + op2)
    //                         boxes[op3][op2].classList.add("fioletowePole")
    //                         boxes[op3][op2].addEventListener('click', function click(){
    //                             if (boxes[op3][op2].classList.contains("fioletowePole")){
    //                                 info[op3][op2] = 'b'
    //                                 info[pawn.id[1]][pawn.id[2]] = '0'
                                    
    //                                 boxes[op3][op2].classList.remove("fioletowePole")
    //                                 boxes[op3][op4].classList.remove("fioletowePole")
    //                                 //deleteBoard()
    //                                 //createBoard()
    //                                 //gettingBoxes()
    //                                 deletePawns()
    //                                 createPawns()
    //                                 movingPawns()
    //                                 boxes[op3][op4].removeEventListener('click', click)
    //                                 boxes[op3][op2].removeEventListener('click', click)
    //                                 moving = 0
    //                                 //pawns.forEach(pawn => pawn.removeEventListener('click', click))
    //                             }
                                
    //                         })
    //                         //info[op3][op2] = 'b'
    //                         //info[pawn.id[1]][pawn.id[2]] = '0'
    //                     }

    //                     else if (info[op3][op4] === '0') {
    //                         console.log("Można zagrać na pole " + op3 + op4)
    //                         boxes[op3][op4].classList.add("fioletowePole")
    //                         boxes[op3][op4].addEventListener('click', function click(){
    //                             if (boxes[op3][op2].classList.contains("fioletowePole")){
    //                                 info[op3][op4] = 'b'
    //                                 info[pawn.id[1]][pawn.id[2]] = '0'
                                    
    //                                 boxes[op3][op2].classList.remove("fioletowePole")
    //                                 boxes[op3][op4].classList.remove("fioletowePole")
    //                                 //deleteBoard()
    //                                 //createBoard()
    //                                 //gettingBoxes()
    //                                 deletePawns()
    //                                 createPawns()
    //                                 movingPawns()
    //                                 boxes[op3][op4].removeEventListener('click', click)
    //                                 boxes[op3][op2].removeEventListener('click', click)
    //                                 moving = 0
    //                             }
    //                         })
    //                         //info[op3][op4] = 'b'
    //                         //info[pawn.id[1]][pawn.id[2]] = '0'
    //                     }
    //                 }
    //                 if (info [pawn.id[1]][pawn.id[2]] === 'c') {
    //                     console.log("Czarny pion!")
    //                 }
    //                 console.log(info)
    //             }
    //         }

    //     }
    // }))
}


createBoard()
gettingBoxes()
createPawns()
movingPawns()