const checkbox = document.querySelector(".task-checkbox");
const title = document.querySelector(".task-title");
const status = document.querySelector(".task-status");
const checkmark = document.querySelector(".checkmark");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    title.style.textDecoration = "line-through";
    title.style.opacity = "0.6";
    status.textContent = "Done";
    checkmark.style.display = "block";
  } else {
    title.style.textDecoration = "none";
    title.style.opacity = "1";
    status.textContent = "Pending";
    checkmark.style.display = "none";
  }
});