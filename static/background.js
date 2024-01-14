// Function to set the initial mode based on the time of day
function setInitialMode() {
    const body = document.body;
    const now = new Date();
    const hour = now.getHours();

    // Set dark mode if it's nighttime (adjust the hours as needed)
    if (hour >= 15 || hour < 3) {
        body.classList.add("dark-mode");
    }
}

// Call the function to set the initial mode
setInitialMode();