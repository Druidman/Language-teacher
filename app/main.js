function insertElements(jsonData){
    if (!jsonData){
        return
    }
    
    var elements = jsonData["Words"]
    if (!elements){
        return
    }

    var wordContainer = document.getElementById("wordContainer")
    wordContainer.innerHTML = ""

    var i = 0
    for (element of elements){
        var wordBox = constructWordBox(element["mainWord"],element["otherWord"],i)
        wordContainer.appendChild(wordBox)
        i+= 1
    }
}

function constructWordBox(mainWord,otherWord,id){
    var wordBox = document.createElement("div")
    wordBox.classList.add("wordBox")
    wordBox.setAttribute("id",id)

    var mainWordElement = document.createElement("div")
    mainWordElement.classList.add("word","mainWord")
    mainWordElement.innerHTML = mainWord

    var otherWordElement = document.createElement("div")
    otherWordElement.classList.add("word","otherWord")
    otherWordElement.innerHTML = otherWord

    wordBox.append(mainWordElement,otherWordElement)

    return wordBox

}
function swap(){
    var wordBoxes = document.getElementsByClassName("wordBox")

    for (wordBox of wordBoxes){

        var mainWord = wordBox.getElementsByClassName("mainWord")[0]
        var otherWord = wordBox.getElementsByClassName("otherWord")[0]

        var mainWordContent = mainWord.innerHTML
        mainWord.innerHTML = otherWord.innerHTML
        otherWord.innerHTML = mainWordContent
    }
}
function handleFile(event){
    const file = event.currentTarget.files[0]

    const reader = new FileReader()
    reader.addEventListener("load",(event)=>{
        const jsonData = JSON.parse(event.currentTarget.result)
        
        insertElements(jsonData)
    })
    
    reader.readAsText(file)

}

document.getElementById("swapButton").addEventListener("click",swap)
document.getElementById("fileInput").addEventListener('change', handleFile)


        


