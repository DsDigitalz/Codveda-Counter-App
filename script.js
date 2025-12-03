// // Initialize the counter state
// let count = 0;

// // Get DOM elements
// const countValueElement = document.getElementById("count-value");
// const btnDecrease = document.getElementById("btn-decrease");
// const btnReset = document.getElementById("btn-reset");
// const btnIncrease = document.getElementById("btn-increase");

// // function to update the displayed count value
// function updateDisplay() {
//   countValueElement.textContent = count;
// }

// /* Counter */
// // --- Event Listeners for DOM Manipulation ---

// // 1. Decrement Button Listener
// btnDecrease.addEventListener("click", () => {
//   // Check to ensure the counter doesn't go below zero
//   if (count > 0) {
//     count--;
//     updateDisplay();
//   }
// });

// // 2. Increment Button Listener
// btnIncrease.addEventListener("click", () => {
//   count++;
//   updateDisplay();
// });

// // 3. Reset Button Listener
// btnReset.addEventListener("click", () => {
//   count = 0;
//   updateDisplay();
// });

// // Initialize the display state when the app loads
// updateDisplay();

//initialize counter state
let count = 0;

// get DOM Elements
const countValue = document.getElementById("count-value");
const btnIncrease = document.getElementById("btn-increase");
const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");

// function to update displayed count state
function updateDisplay() {
  countValue.textContent = count;
}

// event listener for DOM Manipulation
btnIncrease.addEventListener("click", () => {
  count++;
  updateDisplay();
});

btnDecrease.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});
btnReset.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

updateDisplay();
