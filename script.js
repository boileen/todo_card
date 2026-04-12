const checkbox = document.querySelector(".task-checkbox");
const title = document.querySelector(".task-title");
const status = document.querySelector(".task-status");
const checkmark = document.querySelector(".checkmark");
const deleteButton = document.getElementById("deleteButton");
const deleteDialog = document.getElementById("deleteDialog");

deleteButton.addEventListener("click", () => {
  deleteDialog.classList.remove("hidden");
  deleteDialog.classList.add("opacity-100");

  setTimeout(() => {
    deleteDialog.classList.add("hidden");
    deleteDialog.classList.remove("opacity-100");
  }, 1400);
});

checkbox.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event("change"));
  }
});

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