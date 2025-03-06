document.addEventListener("DOMContentLoaded", function () {
    // Select the task assigned counter
    let taskAssignedCounter = document.getElementById("taskCounter");

    // Select the total tasks assigned counter
    let totalTasksAssignedCounter = document.getElementById("totalTasks");

    // Select the activity log container using the correct class
    let activityLogContainer = document.querySelector(".activityLog");

    // Select all completed buttons
    let completedButtons = document.querySelectorAll(".btn-task");

    if (taskAssignedCounter && totalTasksAssignedCounter && activityLogContainer && completedButtons.length > 0) {
        completedButtons.forEach(button => {
            button.addEventListener("click", function () {
                // Get current counts, increment/decrement, and update UI
                let currentCount = parseInt(taskAssignedCounter.textContent.trim(), 10);
                let totalCount = parseInt(totalTasksAssignedCounter.textContent.trim(), 10);
                
                if (currentCount > 0) {
                    taskAssignedCounter.textContent = (currentCount - 1).toString();
                }
                totalTasksAssignedCounter.textContent = (totalCount + 1).toString();
                
                // Get task name from the button's parent container
                let taskName = button.closest(".p-6").querySelector("h2").textContent.trim();
                
                // Get current time
                let now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                let ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12 || 12;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
                
                // Create log entry
                let logEntry = document.createElement("div");
                logEntry.classList.add("bg-[#F3F6FF]", "p-4", "rounded-lg", "mb-4");
                logEntry.innerHTML = `<h4 class="text-gray-600">You have completed the task "${taskName}" at ${formattedTime}</h4>`;
                
                // Add log entry to activity log
                activityLogContainer.prepend(logEntry);
                
                alert("Board Updated Successfully!");

                // Disable the button after click
                button.disabled = true;
                button.style.backgroundColor = "gray";
                button.style.cursor = "not-allowed";
                
                // Check if all buttons are disabled
                let allDisabled = Array.from(completedButtons).every(btn => btn.disabled);
                if (allDisabled) {
                    alert("Congratulations! All tasks are completed.");
                }
            });
        });
    } else {
        console.log("Error: taskCounter, totalTasks, activity log container, or btn-task elements not found!");
    }
    
});
