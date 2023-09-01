window.promises = [];

// Function to generate a random delay between 1 and 5 seconds (in milliseconds)
function getRandomDelay() {
    return Math.floor(Math.random() * 5000) + 1000; // Random time between 1000ms (1 second) and 6000ms (6 seconds)
}

// Create an array of promises
const promises = Array.from({ length: 5 }, (_, index) => {
    return new Promise((resolve) => {
        const delay = getRandomDelay();
        setTimeout(() => {
            resolve(`Promise ${index + 1} resolved after ${delay / 1000} seconds`);
        }, delay);
    });
});

// Use Promise.any to wait for the first promise to resolve
Promise.any(promises)
    .then((result) => {
        // Print the result to the "output" div
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = result;
    })
    .catch((error) => {
        console.error(error);
    });


// Do not change the code above this
// add your promises to the array `promises`
