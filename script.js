// const cards = ['dog', 'perro', 'cow', 'vaca', 'monkey', 'mono', 'chicken', 'pollo', 'rabbit', 'conejo', 'horse', 'cabello', 'bee', 'abeja', 'frog', 'rana', 'snail', 'caracol', 'snake', 'serpiente']

const cards = [
  {
    name: 'Dog',
    img: 'images/emojis/dog_1f415.png'
  },
  {
    name: 'Perro',
    img: 'images/emojis/dog_1f415.png'
  },
  {
    name: 'cow',
    img: 'images/emojis/cow_1f404.png'
  },
  {
    name: 'vaca',
    img: 'images/emojis/cow_1f404.png'
  },

 {
   name:'Monkey',
   img:'images/emojis/monkey_1f412.png'
 },
  {

name: 'Mono',
img:'images/emojis/monkey_1f412.png'
},
{

  name: 'Chicken',
  img:'images/emojis/chicken_1f414.png'
},
{

  name: 'Pollo',
  img:'images/emojis/chicken_1f414.png'
},
{

  name: 'Rabbit',
  img:'images/emojis/rabbit_1f407.png'
},
{

  name:'Conejo',
  img:'images/emojis/rabbit_1f407.png'
},
{

name: 'Horse',
img:'images/emojis/horse_1f40e.png'
},
{

  name: 'Cabello',
  img:'images/emojis/horse_1f40e.png'
},
{

  name: 'Bee',
  img:'images/emojis/honeybee_1f41d.png'
},
{

  name: 'Abeja',
  img:'images/emojis/honeybee_1f41d.png'
},
{

  name:'Frog',
  img:'images/emojis/frog_1f438.png'
},
{

name: 'Rana',
img:'images/emojis/frog_1f438.png'
},
{

  name: 'Snail',
  img:'images/emojis/snail_1f40c.png'
},
{

  name: 'Caracol',
  img:'images/emojis/snail_1f40c.png'
},
{

  name: 'Snake',
  img:'images/emojis/snake_1f40d.png'
},
{

  name:'Serpiente',
  img:'images/emojis/snake_1f40d.png'
}]

let clicks = 1
let cardFlipped = []
let isMatched = false
let moves = 0
let clickedContainers = []


const revertBack = () =>{
 // imageEl.setAttribute('src', 'images/emojis/black.avif')
  for (let i = 0; i<clickedContainers.length; i++) {
    clickedContainers[i].setAttribute('src', 'images/emojis/black.avif')
  }
  clickedContainers = []


}

function checkMatch() {
  clicks = 1
  if (cardFlipped[0] === cardFlipped[1]) {
    cardFlipped = []
    
    clickedContainers = []
    isMatched = true
    console.log(isMatched)
  } else {revertBack()}
}

function flipCard(evt) {
  //update clicked container
  clickedContainers.push(evt.target)
 // console.log(clickedContainers)
 let index = this.getAttribute('data-id')
  
  let reveal = this.getAttribute('data-revealed')
  let imageName = document.createElement('p')
  imageName.classList.add('imageName')
  imageName.innerHTML= cards[index].name

  if (reveal === 'false' && clicks ===1) {
    clicks = clicks + 1
    
    this.setAttribute('data-revealed', true)
    this.setAttribute('src', cards[index].img)
    this.parentElement.appendChild(imageName)
    let data = this.getAttribute('data-img')
    cardFlipped.push(data)
    console.log(cardFlipped)
  } else if (clicks === 2) {
    moves++
  // index = this.getAttribute('data-id')
    //imageName.innerHTML= cards[index].name

      this.setAttribute('data-revealed', true)
      this.setAttribute('src', cards[index].img)
      this.parentElement.appendChild(imageName)
      data = this.getAttribute('data-img')
      clicks = 1
      cardFlipped.push(data)
    console.log(cardFlipped)
    setTimeout(
checkMatch, 1000
    )
     // checkMatch()
      //if(isMatched){
       // if(this.getAttribute('src') == cards[index].img){
       // alert('hurray!')
       // }
     // }
    }
    updateMove()
  
  }
function updateMove(){
  document.querySelector('.moves').innerHTML = moves;
}

const cardsContainer = document.querySelector('#board')
const cardsCount = cards.length
function buildCard() {
  for (let I = 0; I < cardsCount; I++) {
    console.log(cards[I]['img'])
    const element = document.createElement('div')
    const imageEl = document.createElement('img')
    imageEl.setAttribute('src', 'images/emojis/black.avif')
    imageEl.classList.add('card')
    imageEl.classList.add('back')
    imageEl.setAttribute('data-img', cards[I]['img'])
    imageEl.setAttribute('data-id', I)
    imageEl.setAttribute('data-name', cards[I].name)
    imageEl.setAttribute('data-revealed', false)
    element.appendChild(imageEl)
    element.classList.add('card-wrapper')
    imageEl.addEventListener('click', flipCard)
    cardsContainer.appendChild(element)
    console.log('got here')
    console.log(isMatched)
    if(isMatched){
      alert('Good Match!')
      isMatched = false;
    }
    updateMove()
  }
}
shuffleCards()
buildCard()
console.log(buildCard)

/*----- app's state (variables) -----*/
// let revealedCount = 0
// let activeCard = null
// let loss = false
/*----- cached element references -----*/

/*----- event listeners -----*/
const restart = () => {
  location.reload()
}
document.getElementById('restartButton').addEventListener('click', restart)

/*----- functions -----*/
//9Fisher-Yates Algo//
function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = cards[currentIndex]
    cards[currentIndex] = cards[randomIndex]
    cards[randomIndex] = temporaryValue
  }
}
console.log(shuffleCards)
// for each with card and div, img
