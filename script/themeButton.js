document.getElementById("btn-theme").addEventListener("click", function (event) {

    event.preventDefault();
    
    // Generate a random color
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Apply the random color to the background
    document.body.style.backgroundColor = randomColor;
});