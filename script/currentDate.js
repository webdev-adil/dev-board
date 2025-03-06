document.addEventListener("DOMContentLoaded", function () {
    let currentDayElement = document.getElementById("currentDay");
    let currentDateElement = document.getElementById("currentDate");

    if (currentDayElement && currentDateElement) {
        let now = new Date();

        // Array of weekday names
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let dayName = days[now.getDay()];

        // Get the formatted date
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        let formattedDate = now.toLocaleDateString("en-US", options);

        // Set values in the UI
        currentDayElement.textContent = dayName;
        currentDateElement.textContent = formattedDate;
    } else {
        console.log("Error: Date elements not found!");
    }
});
