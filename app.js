let h1=document.querySelector("h1")
let p=document.querySelector("p")
let startDisplay=document.querySelector(".start-display")
let gameBox=document.querySelector(".game-box")
let player01=document.querySelector(".player-01")
let player02=document.querySelector(".player-02")
let startBtn=document.querySelector(".startBtn")
let newBtn=document.querySelector(".newBtn")
let resetBtn=document.querySelector(".resetbtn")
let boxes=document.querySelectorAll(".box button")
let name01="";
let name02="";

startBtn.addEventListener("click",()=>{
    if(player01.value=="" || player02.value==""){
        p.innerHTML="Please provide Two Players Name";
        p.style.color="red"
        p.style.fontStyle="italic"

      setTimeout(()=>{
       p.innerHTML=""
      },2000)
      
    }
    else{
        showGame()
        name01=player01.value
        name02=player02.value
        player01.value=""
        player02.value=""
        gameDisplay();
    }

})

let winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,5,8],
    [2,4,6]
]

let trunX=true;
let count=0;

function gameDisplay(){
   boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        if(trunX){
            box.innerHTML="X";
            trunX=false
        }
        else{
            box.innerHTML="O";
            trunX=true
        }
        box.disabled=true;
        count++;
        if(count==9){
           drawMatch()
        }
        checkWinner()
})
   })
}

function showGame(){
    startDisplay.style.display="none"
    gameBox.style.display="block"
}


function drawMatch(){
    gameBox.style.display="none"
p.innerHTML="Match was Draw !"
newBtn.style.display="block"
}

function checkWinner(){
    for(let pattern of winnerPattern){
        let val1=boxes[pattern[0]].innerText
        let val2=boxes[pattern[1]].innerText
        let val3=boxes[pattern[2]].innerText

        if(val1!=="" && val2!=="" && val3!==""){
            if(val1==val2 & val1==val3){
                showWinner(val1)
            }
        }

    }
}

function showWinner(winner){
    if(winner=="X"){
        gameBox.style.display="none"
        newBtn.style.display="block"
        p.innerHTML=`${name01} is winner!`
        p.style.color="#7bed9f"
    }
    else{
        p.innerHTML=`${name02} is winner!`
        p.style.color="#7bed9f"
         gameBox.style.display="none"
        newBtn.style.display="block"
    }
}

newBtn.addEventListener("click",()=>{
    p.innerHTML=""
    gameBox.style.display="block"
    newBtn.style.display="none";
    againStart()
})

function againStart(){
    trunX=true;
     count=0;
for(let box of boxes){
    box.disabled=false
    box.innerText=""
}
}
resetBtn.addEventListener("click",againStart)