var firstRandomNumber=Math.random()*6+1;
var secondRandomNumber=Math.random()*6+1;

firstRandomNumber=Math.floor(firstRandomNumber);
secondRandomNumber=Math.floor(secondRandomNumber);


if(firstRandomNumber===5){
    document.querySelector("#circle1").hidden=true;
}
if(firstRandomNumber===4){
    document.querySelector("#circle1").hidden=true;
    document.querySelector("#circle2").hidden=true;

}
if(firstRandomNumber===3){
    document.querySelector("#circle1").hidden=true;
    document.querySelector("#circle2").hidden=true;
    document.querySelector("#circle3").hidden=true;
}  
if(firstRandomNumber===2){
    document.querySelector("#circle1").hidden=true;
    document.querySelector("#circle2").hidden=true;
    document.querySelector("#circle3").hidden=true;
    document.querySelector("#circle4").hidden=true;

}  
if(firstRandomNumber===1){
    document.querySelector("#circle1").hidden=true;
    document.querySelector("#circle2").hidden=true;
    document.querySelector("#circle3").hidden=true;
    document.querySelector("#circle4").hidden=true;
    document.querySelector("#circle5").hidden=true;
}

//this is the second dice

if(secondRandomNumber===5){
    document.querySelector("#circle7").hidden=true;
}
if(secondRandomNumber===4){
    document.querySelector("#circle7").hidden=true;
    document.querySelector("#circle8").hidden=true;

}  
if(secondRandomNumber===3){
    document.querySelector("#circle7").hidden=true;
    document.querySelector("#circle8").hidden=true;
    document.querySelector("#circle9").hidden=true;
}  
if(secondRandomNumber===2){
    document.querySelector("#circle7").hidden=true;
    document.querySelector("#circle8").hidden=true;
    document.querySelector("#circle9").hidden=true;
    document.querySelector("#circle10").hidden=true;

}  
if(secondRandomNumber===1){
    document.querySelector("#circle7").hidden=true;
    document.querySelector("#circle8").hidden=true;
    document.querySelector("#circle9").hidden=true;
    document.querySelector("#circle10").hidden=true;
    document.querySelector("#circle11").hidden=true;
}

if(firstRandomNumber>secondRandomNumber){
    document.querySelector(".winner").textContent="🚩Player 1 Won"
}
else if (firstRandomNumber===secondRandomNumber){
    document.querySelector(".winner").textContent="Draw"
}
else{
    document.querySelector(".winner").textContent="Player 2 Won🚩"

}


