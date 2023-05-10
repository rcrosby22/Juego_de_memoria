
// const cards = ['dog', 'perro', 'cow', 'vaca', 'monkey', 'mono', 'chicken', 'pollo', 'rabbit', 'conejo', 'horse', 'cabello', 'bee', 'abeja', 'frog', 'rana', 'snail', 'caracol', 'snake', 'serpiente']

const cards = [
  {
  
  name: 'Dog',
  img:'images/emojis/dog_1f415.png'
  },
  {
    
    name: 'Perro',
    img:'images/emojis/dog_1f415.png'
  },
   {
    name: 'cow',
     img:'images/emojis/cow_1f404.png'
 },
   {
    
    name: 'vaca',
    img:'images/emojis/cow_1f404.png'
  },]
  // {
    
  //   name:'Monkey',
  //   img:'monkey_1f412.png'
  // },
  // {
  
  // name: 'Mono',
  // img:'monkey_1f412.png'
  // },
  // {
    
  //   name: 'Chicken',
  //   img:'chicken_1f414.png'
  // },
  // {
    
  //   name: 'Pollo',
  //   img:'chicken_1f414.png'
  // },
  // {
    
  //   name: 'Rabbit',
  //   img:'rabbit_1f407.png'
  // },
  // {
    
  //   name:'Conejo',
  //   img:'rabbit_1f407.png'
  // },
  // {
  
  // name: 'Horse',
  // img:'horse_1f40e.png'
  // },
  // {
    
  //   name: 'Cabello',
  //   img:'horse_1f40e.png'
  // },
  // {
    
  //   name: 'Bee',
  //   img:'honeybee_1f41d.png'
  // },
  // {
    
  //   name: 'Abeja',
  //   img:'honeybee_1f41d.png'
  // },
  // {
    
  //   name:'Frog',
  //   img:'frog_1f438.png'
  // },
  // {
  
  // name: 'Rana',
  // img:'frog_1f438.png'
  // },
  // {
    
  //   name: 'Snail',
  //   img:'snail_1f40c.png'
  // },
  // {
    
  //   name: 'Caracol',
  //   img:'snail_1f40c.png'
  // },
  // {
    
  //   name: 'Snake',
  //   img:'snake_1f40d.png'
  // },
  // {
    
  //   name:'Serpiente',
  //   img:'snake_1f40d.png'
  // }]

  let clicks = 0
  let cardFlipped = []
  
  function checkMatch(){
clicks = 0
if (cardFlipped [0] == cardFlipped[1]){
    alert('Good Match')
}
  cardFlipped = []
    }
  

  function flipCard ()  {
    let reveal = this.getAttribute('data-revealed')
    if (reveal == 'false')
    {
    clicks = clicks + 1
    let index = this.getAttribute('data-id')
    this.setAttribute('data-revealed', true)
    this.setAttribute('src', cards [index].img)
    let data = this.getAttribute('data-img')
    cardFlipped.push(data)
    if (clicks ==2)
    checkMatch()
  }
}

const cardsContainer = document.querySelector("#board")
const cardsCount = cards.length
function buildCard () {
  for (let I = 0; cardsCount; I++) {
    const element = document.createElement ('div');
    const imageEl = document.createElement('img')
      imageEl.setAttribute('src', 'images/emojis/black.avif')
          imageEl.classList.add('card') 
          imageEl.classList.add('back')
          imageEl.setAttribute('data-img',cards[I].img)
          imageEl.setAttribute('data-id', I)
        imageEl.setAttribute('data-name', cards[I].name)
        imageEl.setAttribute('data-revealed', false)
        element.appendChild(imageEl)
      element.classList.add('card') 
      imageEl.addEventListener('click', flipCard)
        cardsContainer.appendChild(element)

  }

}
buildCard()
console.log(buildCard)

/*----- app's state (variables) -----*/
// let revealedCount = 0
// let activeCard = null
// let loss = false
/*----- cached element references -----*/

/*----- event listeners -----*/
document.getElementById('restartButton').addEventListener('click', restart)
const restart = () => {
  location.reload()// TA question
}


/*----- functions -----*/
//9Fisher-Yates Algo//
function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }}
   console.log(shuffleCards)
  // for each with card and div, img

