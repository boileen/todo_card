const checkbox = document.querySelector(".task-checkbox");
const title = document.querySelector(".task-title");
const status = document.querySelector(".task-status");
const statusControl = document.querySelector("[data-testid='test-todo-status-control']");
const checkmark = document.querySelector(".checkmark");
const deleteBtn = document.querySelector("[data-testid='test-todo-delete-button']");
const deleteDialog = document.getElementById("deleteDialog");
const dismissDelete = document.getElementById("dismissDelete");

const expandBtn = document.getElementById("expandBtn");
const descText = document.getElementById("descText");

const timeRemaining = document.querySelector("[data-testid='test-todo-time-remaining']");
const overdueIndicator = document.getElementById("overdueIndicator");

const editBtn = document.querySelector("[data-testid='test-todo-edit-button']");
const editForm = document.getElementById("editForm");
const cancelBtn = document.getElementById("cancelEdit");
const saveBtn = document.getElementById("saveEdit");

const editTitle = document.getElementById("editTitle");
const editDesc = document.getElementById("editDescription");
const editPriority = document.getElementById("editPriority");
const editDate = document.getElementById("editDate");

const priorityEl = document.querySelector("[data-testid='test-todo-priority']");
const priorityIndicator = document.getElementById("priorityIndicator");
const dueDateEl = document.querySelector("[data-testid='test-todo-due-date']");

let dueDate = new Date("2026-03-01T18:00:00");
let expanded = false;

function updateStatusUI(value) {
  status.textContent = value;
  statusControl.value = value;

  if (value === "Done") {
    checkbox.checked = true;
    title.style.textDecoration = "line-through";
    title.style.opacity = "0.6";
    checkmark.style.display = "block";
  } else {
    checkbox.checked = false;
    title.style.textDecoration = "none";
    title.style.opacity = "1";
    checkmark.style.display = "none";
  }

  if (value === "In Progress") {
    title.style.color = "blue";
  } else {
    title.style.color = "";
  }
}

checkbox.addEventListener("change", () => {
  updateStatusUI(checkbox.checked ? "Done" : "Pending");
});

deleteBtn.addEventListener("click", () => {
  deleteDialog.classList.remove("hidden");
});

dismissDelete.addEventListener("click", () => {
  deleteDialog.classList.add("hidden");
});

statusControl.addEventListener("change", () => {
  updateStatusUI(statusControl.value);
});

expandBtn.addEventListener("click", () => {
  expanded = !expanded;

  if (expanded) {
    descText.classList.remove("line-clamp-2");
    expandBtn.textContent = "Show less";
    expandBtn.setAttribute("aria-expanded", "true");
  } else {
    descText.classList.add("line-clamp-2");
    expandBtn.textContent = "Show more";
    expandBtn.setAttribute("aria-expanded", "false");
  }
});

function updatePriorityUI(value) {
  priorityEl.textContent = value;

  if (value === "High") {
    priorityIndicator.className = "w-3 h-3 rounded-full bg-red-500";
  } else if (value === "Medium") {
    priorityIndicator.className = "w-3 h-3 rounded-full bg-yellow-400";
  } else {
    priorityIndicator.className = "w-3 h-3 rounded-full bg-green-500";
  }
}

function updateTime() {
  const now = new Date();

  if (checkbox.checked) {
    timeRemaining.textContent = "Completed";
    overdueIndicator.classList.add("hidden");
    return;
  }

  const diff = dueDate - now;

  if (diff <= 0) {
    const minutes = Math.floor(Math.abs(diff) / 60000);
    const hours = Math.floor(minutes / 60);

    timeRemaining.textContent = hours > 0
      ? `Overdue by ${hours} hour(s)`
      : `Overdue by ${minutes} minute(s)`;

    overdueIndicator.classList.remove("hidden");
    title.style.color = "red";
  } else {
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      timeRemaining.textContent = `Due in ${days} day(s)`;
    } else if (hours > 0) {
      timeRemaining.textContent = `Due in ${hours} hour(s)`;
    } else {
      timeRemaining.textContent = `Due in ${minutes} minute(s)`;
    }

    overdueIndicator.classList.add("hidden");
  }
}

setInterval(updateTime, 60000);
updateTime();

editBtn.addEventListener("click", () => {
  editForm.classList.remove("hidden");
  editTitle.value = title.textContent;
  editDesc.value = descText.textContent;
  editPriority.value = priorityEl.textContent;
  editTitle.focus();
});

cancelBtn.addEventListener("click", () => {
  editForm.classList.add("hidden");
  editBtn.focus();
});

saveBtn.addEventListener("click", () => {
  title.textContent = editTitle.value;
  descText.textContent = editDesc.value;

  updatePriorityUI(editPriority.value);

  if (editDate.value) {
    dueDate = new Date(editDate.value);
    dueDateEl.textContent = "Due " + dueDate.toDateString();
  }

  editForm.classList.add("hidden");
});