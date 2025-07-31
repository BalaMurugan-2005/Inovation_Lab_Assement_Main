var rand = Math.floor(Math.random()*10 + 1)
var rand1 = Math.floor(rand)
var count =0
function guessgame(){
    var input = document.getElementById("input-box").value;
    if (input == rand1){
        document.writeln("Booyah!!!  \n Your attempt is "+count);
    }
    else if(rand1>input){
        document.getElementById("res").innerText = "To low"
        count ++
    }
    else if(rand1<input){
        document.getElementById("res").innerText = "To High"
        count ++
    }
}