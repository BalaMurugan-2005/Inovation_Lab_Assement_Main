let arr = [];
function addTask(event){
    event.preventDefault();
    document.getElementById("res").innerHTML="";
    const task1 = document.getElementById("Task").value;
    arr.push(task1);
    console.log(arr);
    arr.map((val,index)=> {
        document.getElementById("res").innerHTML += "<li>" + val + "</li> <button class='btn-color>Delete'</button>";
    })
    document.getElementById("Task").value = "";
}
document.getElementById("res").addEventListener('click',(e)=>{
    e.target.classList.add("strike");
    console.log(e.target)
})