function startCountdown(minutes) {
    const targetTime = Date.now() + minutes * 60 * 1000;
    const timerInterval = setInterval(() => {
        const timeDifference = targetTime - Date.now();
        if (timeDifference <= 0) {
            clearInterval(timerInterval);
            console.log("Time's up!");
        }
        else {
            const seconds = Math.floor((timeDifference / 1000) % 60);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            console.log(`Time left: ${hours}h ${minutes}m ${seconds}s`);
        }
    }, 1000);
}
// Example: Set the countdown timer for 5 minutes
startCountdown(5);
export {};
