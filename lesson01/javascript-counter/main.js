const button = document.querySelector("button");
const counterText = document.querySelector("p");

let currentCount = 0;

counterText.textContent = `Current count is: ${currentCount}`;

button.addEventListener("click", function (e) {
  currentCount++;
  counterText.textContent = `Current count is: ${currentCount}`;
});
