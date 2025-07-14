    // Hello this is the js don't be shock haha.

    // Container; 
    const container = document.querySelector('.container');
    const image = document.querySelector('.img');
    console.log(image);
    // calling the change border function; 
    changeBorder();

    // Main -- Button function;
    function changeBorder() {
        border_css();
        border_color();
        auto_call();
    }

    // Button css property; 
    function border_css(){
        let changeBorder = document.getElementById("borderColor");
        changeBorder.style.border = "none";
            changeBorder.style.padding = "20px";
            changeBorder.style.borderRadius = "5px";
            changeBorder.style.backgroundColor = "#C5B4E3";
            changeBorder.style.color = "black";
            changeBorder.style.fontSize = "16px";
            changeBorder.style.cursor = "pointer";
            changeBorder.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

            // setting the hover; 
            changeBorder.addEventListener('mouseover', () => {
                changeBorder.innerText = "Click me!";
                changeBorder.style.backdropFilter = "blur(5px)";
                changeBorder.style.backgroundColor = "#C68DF4";
                changeBorder.style.color = "white";
            });
    }

    // Border color change functions; 
    function border_color(){
    let changeBorder = document.getElementById("borderColor");
    changeBorder.innerText = "Clicked!";

    // Color change when the button is clicked; 
    changeBorder.addEventListener('click', () => {
        let randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        console.log(randomcolor);
        container.style.border = `5px solid ${randomcolor}`;
    })

    // Making it auto by using the set time out; 
}
    function auto_call(){
        let changeBorder = document.getElementById("borderColor");
        setInterval(() => {
            let randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            console.log(randomcolor);
            container.style.border = `5px solid ${randomcolor}`;
            changeBorder.style.backdropFilter = "blur(0px)";
            changeBorder.style.color = "black";

            // let's change the text; 
            changeBorder.innerText = randomcolor;

            // let's change the image also. 
            let randomImage = document.createElement('img');
            randomImage.src = `https://source.unsplash.com/random/200x200?sig=${Math.floor(Math.random() * 1000)}`;
            randomImage.alt = "Random Image";
            image.replaceWith(randomImage);
        }, 2000);
    }
