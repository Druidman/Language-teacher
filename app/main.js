
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

document.getElementById("swapButton").addEventListener("click",swap)