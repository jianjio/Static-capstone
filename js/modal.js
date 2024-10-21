// Function to toggle the modal
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Get all elements that can toggle the modal
const toggleButtons = document.querySelectorAll("[data-modal-toggle]");

// Add click event listeners to toggle buttons
toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal-toggle");
    toggleModal(modalId);
  });
});

// Get all elements that can hide the modal
const hideButtons = document.querySelectorAll("[data-modal-hide]");

// Add click event listeners to hide buttons
hideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal-hide");
    toggleModal(modalId);
  });
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (
    event.target.hasAttribute("aria-hidden") &&
    event.target.getAttribute("aria-hidden") === "true"
  ) {
    toggleModal(event.target.id);
  }
});
