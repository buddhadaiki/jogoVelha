
let cell = document.querySelectorAll(".cell")
let msg = document.querySelector("#resultado")
let btnZerar = document.querySelector("#zerar")

// console.log(cell)

let player = 'X'
let countClick = 0


const playGame= (evt)=>{
    target = evt.target
    if (target.innerHTML == ''){
        target.innerHTML = player
        player = (player == 'X')?'0':'X'
        countClick++
    }
    // verifica ganhador!!!!!!
    if (countClick == 9){
        msg.innerHTML = "deu Velha!!!"
       // alert("deu Velha!!!")
        // countClick = 0
        // zeraTabuleiro()
    }
}

cell.forEach( c =>{
    c.addEventListener("click", playGame)
})

const zeraTabuleiro = ()=>{
    countClick = 0
    msg.innerHTML = ""
    cell.forEach( c =>{
        c.innerHTML = ''
    }) 
}

btnZerar.addEventListener("click",zeraTabuleiro)

