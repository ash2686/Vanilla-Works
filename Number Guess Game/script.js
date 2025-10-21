let iNumber = document.getElementById("number");
let hint = document.getElementsByClassName("hint-text")[0];
let tryButton = document.getElementById("try");
let displayArea = document.getElementsByClassName("display-area")[0];
// let startButton = document.getElementById("try");
let revealButton = document.getElementById("reveal");
let startButton = document.getElementById("status");
let gHint = document.getElementById("game-hint");
let lGuess = document.getElementById("lguess");
let gCount = document.getElementById("count");
let randomNumber,gNumber=0,counter=0,tries=0;
let gNumbers = [];

window.onload = function(){
        iNumber.focus();
        revealButton.disabled = true;
        iNumber.disabled = true;
        tryButton.disabled = true;
        tryButton.style.backgroundColor="white";
}

// function newGame(){
//     window.location.reload();
//     startGame();
// }


function startGame(){
    
    randomNumber = Math.ceil(Math.random()*100);
    revealButton.disabled = false;
    iNumber.disabled = false;
    iNumber.focus();
    startButton.innerHTML = "Random Number from (1-100) loaded, Guess away!";
    startButton.style.color ="red";
    startButton.style.backgroundColor ="black";
    gHint.innerHTML = "Hint : Guess the NUMBER!";
    revealButton.style.backgroundColor = "black";
    revealButton.style.color = "cyan";
    tryButton.style.color="rgba(0, 0, 255, 0.8)";
    tryButton.style.backgroundColor="black";
    // iNumber.style.backgroundColor="black";
    iNumber.style.color="white";
    gNumbers=[];
    lGuess.textContent ='Last Guesses : ';
    revealButton.textContent="Reveal Number";
    revealButton.style.fontSize = "1rem";
    counter =0;
    gCount.innerHTML = `Number of tries : ${counter}`;
    iNumber.value ="";
    iNumber.style.backgroundColor="black";
    // startButton.style.backgroundColor="white";

    
}

function revealGame(){
    revealButton.style.fontSize = "2rem";
    revealButton.innerHTML  = randomNumber;
    // iNumber.value = randomNumber;
    // tryButton.disabled = true;
    iNumber.focus();
}

iNumber.addEventListener("input",(e)=>{
    gNumber = Number(e.target.value);
    if(!gNumber){
            console.log(gNumber)
    }else{
        tryButton.disabled = false;
    }
})

iNumber.addEventListener("keydown",(e)=>{

    if(e.key === "Enter"){
        // e.preventDefault();
         gNumber = Number(e.target.value);
        tryGame();
    }
})

function tryGame(){
        let span = document.createElement("span");
        gNumbers[counter] = gNumber;
        if(gNumber < randomNumber){
                gHint.innerHTML = "Hint : This number is SMALLER ( < ) then the TARGET, go high!";
                gHint.style.color = "blue";
                iNumber.value = "";
                iNumber.focus();
                span.style.color ="blue";
                span.innerHTML +=  ` ${gNumbers[counter]} |`; 
        } 

        else if(gNumber > randomNumber){
                gHint.innerHTML = "Hint : This number is GREATER ( > ) then the TARGET, go low!";
                gHint.style.color = "red";
                iNumber.value = "";
                iNumber.focus();
                span.style.color ="red"
                span.innerHTML +=  ` ${gNumbers[counter]} |`; 
        }

        
        
                
                // span.innerHTML +=  ` ${gNumbers[counter]} |`; 
                gCount.innerHTML = `Number of tries : ${counter+1}`;
                counter ++;

                lGuess.appendChild(span);

       

        if(gNumber === randomNumber){
            tryButton.disabled = true;
            iNumber.value = `Bingo!!, it is ${gNumber}`;
            gHint.innerHTML = "Bingo!"
            // gHint.style.backgroundColor = "rgba(181, 223, 242, 1)";
            iNumber.style.backgroundColor = "red";
            startButton.innerHTML = "New Game!?";
            // startButton.addEventListener("click",()=>{
            //     newGame();
            // })
        }

}

console.log(gNumbers);