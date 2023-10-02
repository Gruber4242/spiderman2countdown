// Define the target date for the countdown (replace with your desired date).
const targetDate = new Date('2023-10-20 00:00:00').getTime();

// Function to update the countdown timer.
function updateTimer() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        document.getElementById('timer').innerHTML = 'Countdown expired!';
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Update the timer every second.
setInterval(updateTimer, 1000);

// Initial update.
updateTimer();
