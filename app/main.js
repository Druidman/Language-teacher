function insertElements(jsonData){
    if (!jsonData){
        return
    }
    
    var objects = jsonData["Words"]

    var wordContainer = document.getElementById("wordContainer")
    wordContainer.innerHTML = ""
    var i =0
    for (object of objects){
        var wordBox = constructWordBox(object["mainWord"],object["otherWord"],i)
        wordContainer.appendChild(wordBox)
        i+= 1
    }
}

function constructWordBox(mainWord,otherWord,id){
    var wordBox = document.createElement("div")
    wordBox.classList.add("wordBox")
    wordBox.setAttribute("id",id)

    var mainWordElement = document.createElement("div")
    mainWordElement.classList.add("word")
    mainWordElement.classList.add("mainWord")
    mainWordElement.innerHTML = mainWord

    var otherWordElement = document.createElement("div")
    otherWordElement.classList.add("word")
    otherWordElement.classList.add("otherWord")
    otherWordElement.innerHTML = otherWord

    wordBox.append(mainWordElement)
    wordBox.append(otherWordElement)

    return wordBox

}
function swap(){
    var wordBoxes = document.getElementsByClassName("wordBox")

    for (wordBox of wordBoxes){

        var mainWord = wordBox.getElementsByClassName("mainWord")[0]
        var otherWord = wordBox.getElementsByClassName("otherWord")[0]

        var mainContent = mainWord.innerHTML
        mainWord.innerHTML = otherWord.innerHTML
        otherWord.innerHTML = mainContent
    }
}
function handleFile(event){
    const file = event.target.files[0]

    const reader = new FileReader()
    reader.onload = (e) => {    

        const jsonData = JSON.parse(e.target.result)
        
        insertElements(jsonData)
        
        
    }
    reader.readAsText(file)

}

document.getElementById("swapButton").addEventListener("click",swap)
fileInput = document.getElementById("fileInput")

fileInput.addEventListener('change', handleFile)
        


