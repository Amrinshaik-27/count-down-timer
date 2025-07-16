let countdown;
const countdownDisplay=document.getElementById("countdown");
const timeInput= document.getElementById("timeInput");
const startBtn=document.getElementById("startBtn");
const resetBtn=document.getElementById("resetBtn");

startBtn.addEventListener("click",()=>{
    let timeLeft=parseInt(timeInput.value);

    if (isNaN(timeLeft)|| timeLeft <=0){
        alert(" please enter a valid number of seconds!");
        return;
    }
    clearInterval(countdown);
    updateDisplay(timeLeft);

    countdown=setInterval(() => {
        timeLeft--;
        updateDisplay(timeLeft);

        if (timeLeft<=0){
            clearInterval(countdown);
            countdownDisplay.innerText="Time's Up!";
        }
        
    }, 1000);
});
resetBtn.addEventListener("click",()=>{
    clearInterval(countdown);
    countdownDisplay.innerText="00:00";
    timeInput.value="";
});
function updateDisplay(seconds){
    let minutes=Math.floor(seconds/60);
    let secs=seconds%60;
    countdownDisplay.innerText=`${String(minutes).padStart(2,'0')}:${String(secs).padStart(2,'0')}`
}