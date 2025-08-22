let result = document.getElementById("res")
function TextManipution() {
    let TextArea = document.getElementById("TextA").value
    let wordcount = TextArea.split(" ").length
    let charcount = TextArea.split("").length
    
    result.innerHTML = ` <h1> Total count : ${wordcount} </h1> 
                         <h1> Total Charecter : ${charcount} </h1>`
}
document.addEventListener("keyup",TextManipution);