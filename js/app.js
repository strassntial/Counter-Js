const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const container = document.querySelector('body');
const description = document.getElementById('description');

var count = 0;

// Listenner For Click On Start Btn
startBtn.addEventListener("click",function(){
    // if its first time to start counter
    if(count == 0){
        setTimeout(function(){
            counter1.textContent = Number(counter1.textContent) - 1;
        },1000)
        setTimeout(function(){
            counter2.textContent = Number(counter2.textContent) + 60;
        },1000)
    
         myInterval = setInterval(function(){
            counter2.textContent=Number(counter2.textContent) - 1;
            if(counter2.textContent == -1 && counter1.textContent != 0 ){
                counter1.textContent = Number(counter1.textContent) - 1;
                counter2.textContent = 60 ;
            }
            else if(counter2.textContent == 0 && counter1.textContent == 0 ){
                clearInterval(myInterval);
                startBtn.disabled=false;
                startBtn.style.color='black';
                startBtn.style.borderColor='wheat';
                startBtn.style.backgroundColor='blueviolet';

                container.style.background='red';
                description.style.color='green';

            }
        },1000)
    
        startBtn.disabled=true;
        startBtn.style.color='brown';
        startBtn.style.borderColor='brown';
        startBtn.style.backgroundColor='transparent';
    } 
    // if after one pause user want to continue counter
    else {
         myInterval = setInterval(function(){
            counter2.textContent=Number(counter2.textContent) - 1;
            if(counter2.textContent == -1 && counter1.textContent != 0 ){
                counter1.textContent = Number(counter1.textContent) - 1;
                counter2.textContent = 59 ;
            }
            else if(counter2.textContent == 0 && counter1.textContent == 0 ){
                clearInterval(myInterval);
                // change start btn style to normal mode
                startBtn.disabled=false;
                startBtn.style.color='black';
                startBtn.style.borderColor='wheat';
                startBtn.style.backgroundColor='blueviolet';

            }
        },1000)
    
        // with start the counter the Start Btn will be disables mode
        startBtn.disabled=true;
        startBtn.style.color='brown';
        startBtn.style.borderColor='brown';
        startBtn.style.backgroundColor='transparent';
    }
    count+=1;
    
})

// Listenner For Click On Pause Btn
pauseBtn.addEventListener("click",function(){
    clearInterval(myInterval);
    startBtn.disabled=false;
    startBtn.style.color='black';
    startBtn.style.borderColor='wheat';
    startBtn.style.backgroundColor='blueviolet';
})


