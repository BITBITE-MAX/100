// Create a counter in JavaScript (counts down from 30 to 0)
let counter=30;
const countdown= setInterval(()=>{
    console.log(counter);
    counter--;
    if(counter<0){
        clearInterval(countdown);
        console.log("Countdown completed!");
    }
},1000)

//Calculate the Time Between a setTimeout Call and the Inner Function Actually Running
const start = Date.now(); 

setTimeout(() => {
    const end = Date.now(); 
    const timeElapsed = end - start;
    console.log(`Time elapsed: ${timeElapsed} ms`); 
}, 1000);

// Create a Terminal Clock (HH:MM)
const displayTime = () => {
    const now = new Date(); 
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`); 
};

setInterval(displayTime, 1000); 
