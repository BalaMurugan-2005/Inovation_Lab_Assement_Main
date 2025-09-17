let sec = 0;
let min = 0;
let interval;
function start(){
    if(!interval){
    interval=setInterval(function(){
        ++sec;
        if(sec==60){
            ++min;
            sec = 0;
        }
        if(min==60){
            min=0;
            
        }
        document.querySelector("#timer").innerHTML = `${min}`.padStart(2,"0")+':'+`${sec}`.padStart(2,"0");
    },1000)
}
}

function stop(){

}

function reset(){

}