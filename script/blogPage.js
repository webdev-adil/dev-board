document.addEventListener("DOMContentLoaded", function () {
    let discoverCard = document.getElementById("discoverCard");

    if (discoverCard) {
        discoverCard.addEventListener("click", function () {
            // Open the new page
            window.location.href = "blog.html"; // Change this to your actual page
        });
    } else {
        console.log("Error: Discover card element not found!");
    }
});
