let displayArea = document.querySelector(".ticket-display");
let ticket = {};
let response= true;


function loader(){
    displayArea.innerHTML = '';
    displayArea.textContent = 'loading'; 

    if(!response){         
    response = confirm("Do you want a new ticket?");
    }
    

    if(response){
    setTimeout(generateTicket,1000);     
    } 
}



function generateTicket(){
    

    displayArea.innerHTML = '';
    ticket = {};

    
let lottoNumber = ()=>{
    let LN = Math.ceil(Math.random()*40);
    return LN;
}

let powerBall = ()=>{
    let PB = Math.ceil(Math.random()*10);
    return PB;
}


function generateLine(){
   let lottoLine = [];
for(let i=0;i<6;i++){
    let number = lottoNumber();
    while(lottoLine.includes(number)){
        number = lottoNumber();        
    }
    lottoLine[i] = number;
}
 return lottoLine.sort((x,y)=>x-y);
}


for(let i=0;i<8;i++){
    ticket[`Line ${i+1}`] = generateLine();
}

 let lineDiv = document.createElement('div');
    lineDiv.classList.add("ticket-line-top","ticket-line");

    let lineNameDiv = document.createElement('p');
    lineNameDiv.classList.add("line-name");
    lineNameDiv.textContent = 'Line Name';

    let lottoLineDiv = document.createElement('p');
    lottoLineDiv.classList.add("lotto-line");    
    lottoLineDiv.textContent = 'Lotto Line'

    let powerBallDiv = document.createElement('p');
    powerBallDiv.classList.add("power-ball");
    powerBallDiv.textContent = 'PowerBall';

    lineDiv.append(lineNameDiv,lottoLineDiv,powerBallDiv);

    displayArea.appendChild(lineDiv);



for( let key in ticket){
    let eachP;

    let powerNumber = powerBall();
    console.log(`${key} - ${ticket[key]}`);

    let lineDiv = document.createElement('div');
    lineDiv.classList.add("ticket-line");

    let lineNameDiv = document.createElement('p');
    lineNameDiv.classList.add("line-name");
    lineNameDiv.textContent = key;

    let lottoLineDiv = document.createElement('div');
    lottoLineDiv.classList.add("lotto-line");    
    // lottoLineDiv.textContent = ticket[key].join("  -  ");

    for(k=0;k<ticket[key].length;k++){
        eachP = document.createElement('p');
        eachP.textContent += ticket[key][k];
        lottoLineDiv.appendChild(eachP);
    }
        console.log("Each Number Line", lottoLineDiv)
   


    let powerBallDiv = document.createElement('p');
    powerBallDiv.classList.add("power-ball");
    powerBallDiv.textContent = powerNumber;

    lineDiv.append(lineNameDiv,lottoLineDiv,powerBallDiv);

    displayArea.appendChild(lineDiv);
}
 
response = false;


   
}