
// 1) step 1 = any key press =>game start 
// 2) step 2 => bp flash + level 1 
// 3) step 3 => ek event banvu jo sangel user and game ch squence check PublicKeyCredential

let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let level = 0;
let started = false;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
});
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIndex = Math.floor(Math.random() * 3);
    // console.log(randIndex);
    let randcolor = btns[randIndex];
    // console.log(randcolor);
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(randBtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randBtn);


}

function checkAns(idx) {
   
    if (userSeq[idx] === gameSeq[idx]) {
        //console.log("right");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {
        h2.innerHTML = `game is over! your score is <b>${level}</b> <br>press any key to restart the game `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150);
        Hscore();
        reset();
        
    }
}
function btnPress() {
    // console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = 0;
    level = 0;
    gameSeq =[];
    userSeq =[];

}
function Hscore(){
   //privious best score here
}