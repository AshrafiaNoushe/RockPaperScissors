let cmpscore =0;
let userscore =0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const compScorePara = document.querySelector("#comp_score");
const userScorePara = document.querySelector("#user_score");

const GencompChoice = () =>{
const options=["rock","paper","scissors"];
const ranIndx = Math.floor(Math.random()*3);
return options[ranIndx];
};

const DrawGame = () =>{
    msg.innerText = "It was draw. Play again! ";
    msg.style.backgroundColor = "#2f3e46";
};

const ShowWinner = (winUser,userClick,compClick) =>{
    if(winUser){
        userscore++;
        userScorePara.innerHTML=userscore;
        console.log("You win");
        msg.innerText  = `You Win! ${userClick} beats ${compClick}`;
        msg.style.backgroundColor = "green";
    }else{
        cmpscore++;
        compScorePara.innerHTML = cmpscore;
        console.log("You lose!");
         msg.innerText  = `You Lost! ${compClick} beats ${userClick}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame=(userClick)=>
{
    const compClick= GencompChoice ();
    if(userClick===compClick){
        DrawGame();
    }else{
        let winUser = true;
        if(userClick == "rock"){
            //paper,scissor
           winUser = compClick ==="paper" ?  false:true;
        }else if(userClick==="paper"){
            //rock,scissors
           winUser = compClick==="scissors" ? false:true;
        }else if(userClick==="scissors"){
            //rock,paper
            winUser = compClick ==="rock" ? false:true;
        }
        ShowWinner(winUser,userClick,compClick);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userClick = choice.getAttribute("id");
        playGame(userClick);
    });
});
