

let update = document.getElementsByClassName('num');


let factorOne = '';
let factorTwo = '';



function mult() {
  factorOne = document.getElementById('myInput').value;

    for (let i = 0; i < update.length; i++) {
      update[i].innerHTML = factorOne;
          }
}

function digits() {
  let number = '';
for(let j = 1; j <= 10; j++){
  console.log(j);
}
}




function flip1(){
//document.getElementById('card1').innerHTML = factorOne * 1;
document.getElementById('cell1').style.backgroundColor = "lightblue";
document.getElementById('cell1').style.fontSize = "50px";
document.getElementById('cell1').innerHTML = factorOne * 1;
}

function flip2(){
  document.getElementById('cell2').style.backgroundColor = "lightblue";
  document.getElementById('cell2').style.fontSize = "50px";
  document.getElementById('cell2').innerHTML = factorOne * 2;
}

function flip3(){
  document.getElementById('cell3').style.backgroundColor = "lightblue";
  document.getElementById('cell3').style.fontSize = "50px";
  document.getElementById('cell3').innerHTML = factorOne * 3;
}

function flip4(){
  document.getElementById('cell4').style.backgroundColor = "lightblue";
  document.getElementById('cell4').style.fontSize = "50px";
  document.getElementById('cell4').innerHTML = factorOne * 4;
}

function flip5(){
  document.getElementById('cell5').style.backgroundColor = "lightblue";
  document.getElementById('cell5').style.fontSize = "50px";
  document.getElementById('cell5').innerHTML = factorOne * 5;
}

function flip6(){
  document.getElementById('cell6').style.backgroundColor = "lightblue";
  document.getElementById('cell6').style.fontSize = "50px";
  document.getElementById('cell6').innerHTML = factorOne * 6;
}

function flip7(){
  document.getElementById('cell7').style.backgroundColor = "lightblue";
  document.getElementById('cell7').style.fontSize = "50px";
  document.getElementById('cell7').innerHTML = factorOne * 7;
}

function flip8(){
  document.getElementById('cell8').style.backgroundColor = "lightblue";
  document.getElementById('cell8').style.fontSize = "50px";
  document.getElementById('cell8').innerHTML = factorOne * 8;
}

function flip9(){
  document.getElementById('cell9').style.backgroundColor = "lightblue";
  document.getElementById('cell9').style.fontSize = "50px";
  document.getElementById('cell9').innerHTML = factorOne * 9;
}

function flip10(){
  document.getElementById('cell10').style.backgroundColor = "lightblue";
  document.getElementById('cell10').style.fontSize = "50px";
  document.getElementById('cell10').innerHTML = factorOne * 10;
}
