
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

        if (verificaGanhador()) {
            msg.innerHTML = `Jogador ${player} é o ganhador.`
            return
        }

        player = (player === 'X') ? 'O' : 'X'

        // verifica ganhador!!!!!!
        if (countClick == 9){
            msg.innerHTML = "deu Velha!!!"
        }
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
