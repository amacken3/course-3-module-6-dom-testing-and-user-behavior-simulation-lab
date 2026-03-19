// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

//adds and element to the DOM
function addElementToDOM(containerId, text) {
    const container = document.getElementById(containerId);
    container.textContent = text;
}
//removes element from DOM
function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
        element.remove();
    }
}
//click simulating user interaction
function simulateClick(containerId, text) {
    addElementToDOM(containerId, text);
}
//handles form submission
function handleFormSubmit(formId, containerId) {
    const input = document.getElementById("user-input");
    const errorMessage = document.getElementById("error-message");

    if (!input.value.trim()) {
        errorMessage.textContent = "Input cannot be empty";
        errorMessage.classList.remove("hidden");
        return;
    }

    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
    addElementToDOM(containerId, input.value);
}

module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
};