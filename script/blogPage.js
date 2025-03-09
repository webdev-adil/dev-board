document.addEventListener("DOMContentLoaded", function () {
    let discoverCard = document.getElementById("discoverCard");

    if (discoverCard) {
        discoverCard.addEventListener("click", function () {
            
            window.location.href = "blog.html"; 
        });
    } else {
        console.log("Error: Discover card element not found!");
    }
});
