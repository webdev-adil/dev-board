document.addEventListener("DOMContentLoaded", function () {
    // Select the task assigned counter
    let taskAssignedCounter = document.getElementById("taskCounter");

    // Select the total tasks assigned counter
    let totalTasksAssignedCounter = document.getElementById("totalTasks")

    // Select all completed buttons
    let completedButtons = document.querySelectorAll(".btn-task");

    if (taskAssignedCounter && totalTasksAssignedCounter && completedButtons.length > 0) {
        completedButtons.forEach(button => {
            button.addEventListener("click", function () {
                // Get current count, increment and decrement, and update board and navbar
                let currentCount = parseInt(taskAssignedCounter.textContent.trim(), 10);
                taskAssignedCounter.textContent = (currentCount - 1).toString();
                let totalCount = parseInt(totalTasksAssignedCounter.textContent.trim(), 10)
                totalTasksAssignedCounter.textContent = (totalCount + 1).toString();
                alert("Board Updated Successfully!");

                // Disable the button after click
                button.disabled = true;
                button.style.backgroundColor = "gray";
                button.style.cursor = "not-allowed";
            });
        });
    } else {
        console.log("Error: taskCounter not found!");
    }
});
