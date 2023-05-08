const cardsContainer = document.querySelector("#board")
// const cards = ['dog', 'perro', 'cow', 'vaca', 'monkey', 'mono', 'chicken', 'pollo', 'rabbit', 'conejo', 'horse', 'cabello', 'bee', 'abeja', 'frog', 'rana', 'snail', 'caracol', 'snake', 'serpiente']

const cards = [
  {
  id: 0,
  name: 'Dog',
  img:'dog_1f415.png'
  },
  {
    id:1,
    name: 'Perro',
    img:'dog_1f415.png'
  },
  {
    id:2,
    name: 'cow',
    img:'cow_1f404.png'
  },
  {
    id:3,
    name: 'vaca',
    img:'cow_1f404.png'
  },
  {
    id:4,
    name:'Monkey',
    img:'monkey_1f412.png'
  },
  {
  id: 5,
  name: 'Mono',
  img:'monkey_1f412.png'
  },
  {
    id:6,
    name: 'Chicken',
    img:'chicken_1f414.png'
  },
  {
    id:7,
    name: 'Pollo',
    img:'chicken_1f414.png'
  },
  {
    id:8,
    name: 'Rabbit',
    img:'rabbit_1f407.png'
  },
  {
    id:9,
    name:'Conejo',
    img:'rabbit_1f407.png'
  },
  {
  id: 10,
  name: 'Horse',
  img:'horse_1f40e.png'
  },
  {
    id:11,
    name: 'Cabello',
    img:'horse_1f40e.png'
  },
  {
    id:12,
    name: 'Bee',
    img:'honeybee_1f41d.png'
  },
  {
    id:13,
    name: 'Abeja',
    img:'honeybee_1f41d.png'
  },
  {
    id:14,
    name:'Frog',
    img:'frog_1f438.png'
  },
  {
  id: 15,
  name: 'Rana',
  img:'frog_1f438.png'
  },
  {
    id:16,
    name: 'Snail',
    img:'snail_1f40c.png'
  },
  {
    id:17,
    name: 'Caracol',
    img:'snail_1f40c.png'
  },
  {
    id:18,
    name: 'Snake',
    img:'snake_1f40d.png'
  },
  {
    id:19,
    name:'Serpiente',
    img:'snake_1f40d.png'
  }]

const cardsPicklist = [...cards, ...cards]
const cardsCount = cardsPicklist.length


/*----- app's state (variables) -----*/
let revealedCount = 0
let activeCell = null
let endOfMove = false
/*----- cached element references -----*/

/*----- event listeners -----*/

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