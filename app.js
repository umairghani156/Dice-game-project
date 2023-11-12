let player1 = document.querySelector('#player1');
console.log(player1);
let player2 = document.getElementById('player2');
const imgHey = document.getElementById('imgHey')
const number1 = document.getElementById('total')
const number2 = document.getElementById('total2')
const playNum = document.querySelector('.playNum1')
const playNum2 = document.querySelector('.playNum2')
const hold = document.getElementById('hold')
const container = document.querySelector('.container');
const middleCol = document.querySelector('.middleCol');
player1 = true
let number = 0;
let num1 = 0;
let num2 = 0;
const zeroNum = document.getElementById('zeroNum')
const zeroNum2 = document.getElementById('zeroNum2')
const nGame2 = document.getElementById('nGame2');
const imgSrc = document.querySelector('img')
function myNum(){
    const randomNum = Math.floor(Math.random() * 6)+ 1;
    imgHey.src = `./Assets/${randomNum}.PNG`
    imgSrc.style.transform = 'rotate(30deg)'
    if(randomNum == 1){
        alert('Turn for ' + player2.textContent)
        nGame2.setAttribute('onclick', "myHandle()")
        playNum.textContent = 0
        number = 0
    }else{
    number += randomNum
    playNum.textContent = number
    imgHey.style.transform = `rotate(360deg)`
    console.log(randomNum);
    console.log(number);
    hold.setAttribute('onclick', `myhold('${randomNum}')`)
    }
    
}
function myHandle(){
    const randomNum = Math.floor(Math.random() * 6)+ 1;
    imgHey.src = `./Assets/${randomNum}.PNG`
    imgSrc.style.transform = 'rotate(360deg)'
    if(randomNum == 1){
        alert('Turn for Umair')
        nGame2.setAttribute('onclick', 'myNum()')
        playNum2.textContent = 0
        number = 0
    }else{
    number += randomNum
    playNum2.textContent = number
    console.log(randomNum);
    console.log(number);
    hold.setAttribute('onclick',`hold2('${randomNum}')`)
    }
}
function myhold(randomNum){
    console.log(randomNum);
   number1.textContent =Number(playNum.textContent) + Number(number1.textContent)
   playNum.textContent = 0
   number = 0
   nGame2.setAttribute('onclick','myHandle()')
   hold.setAttribute('onclick','hold2()')
}
function hold2(){
    number2.textContent =Number(playNum2.textContent) + Number(number2.textContent);
    playNum2.textContent = 0;
    number = 0
    nGame2.setAttribute('onclick','myNum()')
    hold.setAttribute('onclick','myhold()')

 }

 const row = document.querySelector('.row')
 row.id= 'popup';

 function playGame(){
    const firstplayer = document.getElementById('firstplayer')
    const secondplayer = document.getElementById('secondplayer')
    player1.textContent = firstplayer.value;
    player2.innerText = secondplayer.value;
    row.id ='checkBar'
    document.body.style.background ='linear-gradient(120deg, rgba(236,33,78,1) 74%, rgba(178,127,242,1) 100%)';
    container.style.visibility = 'visible';
    middleCol.style.visibility = 'visible'
}
 
const newGame = document.getElementById('nGame');
const playBtn = document.getElementById('playBtn')
newGame.addEventListener('click', function(){
    number1.textContent = 0;
    number2.textContent = 0;
    row.id = 'popup'
    playBtn.textContent = 'New Game'
    document.body.style.background = 'transparent'
    nGame2.setAttribute('onclick','myNum()')
})