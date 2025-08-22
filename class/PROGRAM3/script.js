function analyze(){
    var Input = document.getElementById("Input").value
    var text = Input.length
    let wordcount = Input.split(" ").length
    var noSpace = text - (wordcount -1)
    let unique_words = [...new Set(Input.split(" "))]
    let free = {}
    Input.split(" ").map((word) => {
        free[word] = (free[word] || 0)+1
    }) 
    for(let x in free){
        console.log(x+" : "+free[x])
    }
    console.log("Space " + noSpace)
    console.log("Total Number Of  text " + text)
    console.log("Total Numner OF word " + wordcount)
    let sent = Input.match(/[.!?]/g)
    console.log("total No of sentencs "+ sent)
    console.log(unique_words)
    document.getElementById("res").innerHTML = `
    Total chrecters Count :  ${wordcount}
    Total no of text count : ${text}
    Total no of sentence : ${sent}
    total no of unique words : ${unique_words}
    total no of Freequent words : ${free}
    
    `
}