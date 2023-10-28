let imgPlayer = document.querySelector("#img-p");
let imgCpu = document.querySelector("#img-c");
let button = document.querySelectorAll(".option");
const again = document.getElementById('again');
let playerscore = document.getElementById('playerscore');
let cpuscore = document.getElementById('cpuscore');
let result = document.querySelector('.result');
let score = 0;

//Images in array
let cpuImages = ["/rock-c.png", "/paper-c.png", "/scissor-c.png"];
let playerImages = ["/rock-p.png", "/paper-p.png", "/scissor-p.png"];


//Random
let random = () => {
  let number = Math.floor(Math.random() * 3);
//   console.log(number);
  return number;
};
let scoreCalc = (valueP, valueC) => {
    if (valueP === 'R' && valueC === 'P') {
        console.log('CPU 1')
        score = score + 1;
        result.innerHTML = 'CPU WINS';
    } else if (valueP === 'P' && valueC === 'S') {
        console.log('CPU 2')
        score = score + 1;
        result.innerHTML = 'CPU WINS';
    } else if (valueP === 'S' && valueC === 'R') {
        console.log('CPU 3')
        score = score + 1;
        result.innerHTML = 'CPU WINS';
    } else if (valueP === 'P' && valueC === 'R') {
        console.log('CPU 4')
        score = score + 1;
        result.innerHTML = 'PLAYER WINS';
    }
    else if (valueP === 'S' && valueC === 'P') {
        console.log('CPU 5')
        score = score + 1;
        result.innerHTML = 'PLAYER WINS';
    }
    else if (valueP === 'R' && valueC === 'S') {
        console.log('CPU 6')
        score = score + 1;
        result.innerHTML = 'PLAYER WINS';
    }
    else if (valueP === 'R' && valueC === 'R') {
        result.innerHTML = 'TIE';
    }
    else if (valueP === 'P' && valueC === 'P') {
        result.innerHTML = 'TIE';
    
    }
    else if (valueP === 'S' && valueC === 'S') {
        result.innerHTML = 'TIE';
    }

    
}
let playerValue,cpuValue;

//Player part
const game = () => {
button.forEach((btn, i) => {
  btn.addEventListener("click", () => {
      // console.log(playerImages[i]);\
      imgPlayer.src = `${playerImages[i]}`;
      playerValue = ['R', 'P', 'S'][i];
    //   scoreCalc();
  });
});

//Cpu part
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    let n = random();
      imgCpu.src = `${cpuImages[n]}`; 
      cpuValue = ['R', 'P', 'S'][n];
      console.log(playerValue, cpuValue);
      scoreCalc(playerValue, cpuValue);
    });
});
    
}

// Again
again.addEventListener('click', () => {
        result.innerHTML = 'LETS PLAY';
})
    
game();
//Scores

//////////////////////////////////////////////////////
// rockBtn.addEventListener('click', function() {
//     console.log('clicked')
//     imgPlayer.src = '/rock-p.png';
//     cpuPart();
// });
// paperBtn.addEventListener('click', function() {
//     console.log('clicked')
//     imgPlayer.src = '/paper-p.png';
//     cpuPart();
// });
// scissorBtn.addEventListener('click', function() {
//     console.log('clicked')
//     imgPlayer.src = '/scissor-p.png';
//     cpuPart();
// });
