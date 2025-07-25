// log the error in the paragraph;
const logElement = document.getElementById('log');
function log(text){
    logElement.innerText = `Error: ${text}`; 
}

// reload and clear the examples; 
const reload = document.getElementById('reload');
reload.addEventListener('click',()=>{
    window.location.reload(true);
})

const destinationImage = document.getElementById('destination');
destinationImage.addEventListener("click",pasteImage);

function pasteImage(){
    
}