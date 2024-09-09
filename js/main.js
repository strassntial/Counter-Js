const counter = document.getElementById("counter");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");

var count = 0;

startBtn.addEventListener("click",function(){
     myInterval = setInterval(function(){
        count += 1;
        counter.textContent=count;
    },1000)
    startBtn.disabled=true;
    startBtn.style.color='brown';
    startBtn.style.borderColor='brown';
    startBtn.style.backgroundColor='transparent';
    
})

pauseBtn.addEventListener("click",function(){
    clearInterval(myInterval);
    startBtn.disabled=false;
    startBtn.style.color='black';
    startBtn.style.borderColor='wheat';
    startBtn.style.backgroundColor='blueviolet';
})


