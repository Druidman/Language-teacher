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
function  addWordElementHoverEffect(wordElement){
    wordElement.addEventListener("mouseover",(event)=>{
        let mode = document.getElementById("learnModeButton").getAttribute("data-mode")
        if (mode != "test"){
            return
        }
        event.currentTarget.style.color = "rgb(136, 136, 136)"
    })
    
    wordElement.addEventListener("mouseout",(event)=>{
        let mode = document.getElementById("learnModeButton").getAttribute("data-mode")
        if (mode != "test"){
            return
        }
        event.currentTarget.style.color = "#1e1e1e"
    })
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
    addWordElementHoverEffect(otherWordElement)
    

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
function learnMode(event){
    let words = document.getElementsByClassName("otherWord")
    let mode = event.currentTarget.getAttribute("data-mode")
    if (mode == "test"){
        event.currentTarget.setAttribute("data-mode","learn")
    }
    else if (mode == "learn"){
        event.currentTarget.setAttribute("data-mode","test")
    }
    for (let word of words){
        if (event.currentTarget.getAttribute("data-mode") == "test"){
            word.style.color = "#1e1e1e"
            continue
        }
        word.style.color = "#888"
        
             
        
    }
    

}

document.getElementById("swapButton").addEventListener("click",swap)
document.getElementById("fileInput").addEventListener('change', handleFile)
document.getElementById("learnModeButton").addEventListener("click",learnMode)



        


