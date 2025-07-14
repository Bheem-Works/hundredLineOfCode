    // Hello this is the js don't be shock haha.

    window.onload = function() {
        changeBorder();
    }

    // Main -- Button function;
    function changeBorder() {
        border_css();
        border_color();
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
            changeBorder.addEventListener('mouseleave', () => {
                changeBorder.innerText = "Click me!";
                changeBorder.style.backdropFilter = "blur(5px)";
                changeBorder.style.backgroundColor = "#C68DF4";
                changeBorder.style.color = "white";
            });
    }

    // Border color change functions; 
    function border_color(){
          let changeBorder = document.getElementById("borderColor");
            
    changeBorder.addEventListener('click', () => {
        changeBorder.innerHTML = "Clicked!";
    })
    }