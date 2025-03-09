document.addEventListener("DOMContentLoaded", function () {
    let activityLogContainer = document.querySelector(".activityLog");
    let clearHistoryButton = document.getElementById("activityLogClear");

    if (clearHistoryButton && activityLogContainer) {
        clearHistoryButton.addEventListener("click", function () {
            activityLogContainer.innerHTML = "";
            alert("Activity log cleared successfully!");
        });
    } else {
        console.log("Error!");
    }
});