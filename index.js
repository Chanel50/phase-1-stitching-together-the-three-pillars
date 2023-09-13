document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Uncomment this code to select like buttons
    const likeButtons = document.querySelectorAll(".like-button");

    // Step 2: Uncomment this code to simulate server communication
    function mockServerCall() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: "success" });
            }, 1000);
        });
    }

    // Step 3: Uncomment this code to add event listeners
    likeButtons.forEach((button) => {
        button.addEventListener("click", async () => {
            // Simulate server communication
            const response = await mockServerCall();

            if (response.status === "success") {
                // Toggle the like button
                button.classList.toggle("liked");
            }
        });
    });
});

const testVar = {}
