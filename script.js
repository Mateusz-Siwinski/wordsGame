import index from './wordList.js'
const para1 = document.querySelector(".pkt");
const para2 = document.querySelector(".slw");
const  loadedPoints = localStorage.getItem('points') || 0;
const  loadedWords = localStorage.getItem('words') || 0;
let points =+ loadedPoints
let words =+ loadedWords
const previousWords = []


const input = document.querySelector('#textInput')
input.addEventListener('keypress', event => {
  if (event.key === "Enter") {
    if (input.value.length > 1 && input.value.length < 15) {
      if (index.includes(input.value.toString().toLowerCase()) === true) {
        if (!previousWords.includes(input.value.toString().toLowerCase())) {
          previousWords.push(input.value.toString().toLowerCase().replace(/[^a-zA-Z]/g, ''))
          points+= 300 * input.value.length
          words++
          input.style.backgroundColor = "green"
          input.value = ""
          writeOut()
          para1.textContent = `points: ${points}`
          para2.textContent = `words: ${words}`

          localStorage.setItem('words', words)
          localStorage.setItem('points', points)
          localStorage.setItem('tabledata', JSON.stringify(previousWords));

        }else{
          input.style.backgroundColor = "red"
          input.value = ""
        }
       }else{
        input.style.backgroundColor = "red"
        input.value = ""
       }
      }else{
        input.style.backgroundColor = "red"
        input.value = ""
      }
    }
  }
) 





function writeOut(){
  const box = document.querySelector('.box')
  const para = document.createElement("p");

  previousWords.forEach(word => {
  para1.textContent = `points: ${points}`
  para2.textContent = `words: ${words}`
  para.innerHTML = `${word}<br>`
  box.appendChild(para)
});
}

const storedData = localStorage.getItem('tabledata');
const loadedTable = JSON.parse(storedData);

for(let word of loadedTable){
  previousWords.push(word)
  writeOut()
}





