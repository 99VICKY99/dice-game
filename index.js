var ran=Math.floor(Math.random()*6)+1;
var b="./images/dice"+ran+".png";
document.querySelectorAll("img")[0].setAttribute("src",b);



var ran1=Math.floor(Math.random()*6)+1;
var c="./images/dice"+ran1+".png";
document.querySelectorAll("img")[1].setAttribute("src",c);



if(ran>ran1){

    document.querySelector("h1").innerHTML="player 1 wins";
}else if(ran<ran1){
    document.querySelector("h1").innerHTML="player 2 wins";
}else{
     document.querySelector("h1").innerHTML="DRAW";
}

