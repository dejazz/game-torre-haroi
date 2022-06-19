
const torre1 = document.createElement('ul')
const cliques = document.querySelector('#contador')
const content = document.querySelector('#hanoi-content')
const resetButton = document.querySelector('#reload')
const body = document.querySelector('body')
const infoVitoria = document.querySelector('#box-vitoria')

const modoJogoFacil = document.querySelector('#facil')
const modoJogoMedio = document.querySelector('#medio')
const modoJogoDificil = document.querySelector('#dificil')

let verificadorDeClique = false
let torreSelecionada = 0
let ultimoItem = 0
let contador = 0 

let jogo = 0




modoJogoFacil.addEventListener('click', function(){
    jogo = 3
    torre1.innerText = ''
    
    criarHaroi(3)
})
modoJogoMedio.addEventListener('click',function(){
    torre1.innerText = ''
    jogo = 4
    criarHaroi(4)
})
modoJogoDificil.addEventListener('click', function(){
    torre1.innerText = ''
    jogo = 5
    criarHaroi(5)
})


function criarTorre(){
    torre1.className = 'torre torreStart'
    const torre2 = document.createElement('ul')
    torre2.className = 'torre torreMiddle'
    const torre3 = document.createElement('ul')
    torre3.className = 'torre torreEnd'
    content.appendChild(torre1)
    content.appendChild(torre2)
    content.appendChild(torre3)
    
}
criarTorre()

function criarHaroi(valor){
    
    for ( let i = 1; i <= valor;i++){
        let discoTorre = document.createElement('li')
        discoTorre.className = `discos disco${(valor+1)-i}`
        torre1.appendChild(discoTorre)
        
    }
    body.appendChild(content)
    
}



const localStart = document.querySelector(".torreStart")
const localMiddle = document.querySelector('.torreMiddle')
const localEnd = document.querySelector('.torreEnd')


resetButton.addEventListener('click',reload)
localStart.addEventListener('click', (event)=>{
    controlador(event)
    
})
localMiddle.addEventListener('click', (event)=>{
    controlador(event)
    
})
localEnd.addEventListener('click', (event)=>{
    controlador(event)
    
})

function contadordeJogadas(){
    contador++
    return cliques.innerText = `Número de jogadas: ${contador}`
    }
    
function reload(){
        torre1.innerText = ''
        localMiddle.innerText = ''
        localEnd.innerText = ''
        cliques.innerText = ''
        contador = 0
        infoVitoria.classList.add('escondido')
    }


function controlador(event){
    
    if (verificadorDeClique == false && event.currentTarget.childElementCount !== 0){
        torreSelecionada = event.currentTarget
        verificadorDeClique = true
    }else if (verificadorDeClique == true && event.currentTarget === localStart && event.currentTarget !== torreSelecionada  ){
        const elementoMudar = torreSelecionada.lastElementChild
        ultimoItem = localStart.lastElementChild
        contadordeJogadas(event)
        if(localStart.childElementCount == 0 || elementoMudar.clientWidth < ultimoItem.clientWidth ){
           
            localStart.appendChild(elementoMudar)
        }
        
        verificadorDeClique = false
        winnerEnd()
        
        
        
    }else if (verificadorDeClique == true && event.currentTarget === localMiddle && event.currentTarget !== torreSelecionada ){
        const elementoMudar = torreSelecionada.lastElementChild
        ultimoItem = localMiddle.lastElementChild
        contadordeJogadas(event)
        if(localMiddle.childElementCount == 0 || elementoMudar.clientWidth < ultimoItem.clientWidth){
            localMiddle.appendChild(elementoMudar)
        }
        verificadorDeClique = false
        winnerEnd()
        
        
    }else if (verificadorDeClique == true && event.currentTarget === localEnd && event.currentTarget !== torreSelecionada  ){
        const elementoMudar = torreSelecionada.lastElementChild
        ultimoItem = localEnd.lastElementChild
        contadordeJogadas(event)
        if (localEnd.childElementCount == 0 || elementoMudar.clientWidth < ultimoItem.clientWidth){
            localEnd.appendChild(elementoMudar)
        }
        verificadorDeClique = false
        winnerEnd()
    }
  
    
}



function winnerEnd(){
    
    if(localEnd.childElementCount == jogo ){
        infoVitoria.classList.remove('escondido')
        
    }        

}



