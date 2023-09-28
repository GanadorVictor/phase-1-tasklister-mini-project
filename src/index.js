document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("task-list");

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from submitting and refreshing the page

      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
          // Create a new list item for the task
          const taskItem = document.createElement("li");
          taskItem.textContent = taskText;

          // Create a delete button for the task
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.addEventListener("click", function () {
              taskItem.remove(); // Remove the task when the delete button is clicked
          });

          // Append the delete button to the task item
          taskItem.appendChild(deleteButton);

          // Append the task item to the task list
          taskList.appendChild(taskItem);

          // Clear the input field
          taskInput.value = "";
      }
  });
});
