// log the error in the paragraph;
const logElement = document.getElementById('log');
function log(text) {
    logElement.innerText = `Error: ${text}`;
}

// reload and clear the examples; 
const reload = document.getElementById('reload');
reload.addEventListener('click', () => {
    window.location.reload(true);
})

const destinationImage = document.getElementById('destination');
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
    try {
        console.log("working");
        const clipboard = await navigator.clipboard.read();

        for (const item of clipboard) {
            if (!item.types.includes("image/png")) {
                console.log('inside the if');
                throw new Error("clipboard does not contain the png images.");
            }
            console.log('out side the if');
            const blob = await item.getType("image/png");
            destinationImage.src = URL.createObjectURL(blob);
        }
    } catch (error) {
        log(error.message);
    }
}