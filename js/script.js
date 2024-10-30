let cell = document.querySelectorAll(".cell")
let msg = document.querySelector("#resultado")
let btnZerar = document.querySelector("#zerar")

let player = 'X'
let countClick = 0


const playGame= (evt)=>{
    target = evt.target
    if (target.innerHTML == ''){
        target.innerHTML = player
        countClick++

        if (verificaGanhador()) {
            msg.innerHTML = `Jogador ${player} é o ganhador.`
            return
        }


        player = (player === 'X') ? 'O' : 'X'

        // verifica ganhador!!!!!!
        if (countClick == 9) {
            msg.innerHTML = "deu Velha!!!"

        }
    }
}

const verificaGanhador = () => {
    const combinacoesWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]

    return combinacoesWin.some(combinacao => {
        const [a, b, c] = combinacao
        return (
            cell[a].innerHTML !== ''&&
            cell[a].innerHTML === cell[b].innerHTML &&
            cell[a].innerHTML === cell[c].innerHTML
        )
    })
}


cell.forEach(c => {
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