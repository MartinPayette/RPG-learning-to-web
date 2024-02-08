function mount() {
  // Get required html element reference
  const textInput = document.getElementById("input-text");
  const todoList = document.getElementById("todo-list");
  const formNode = document.getElementById("form");

  // Handle form submit event to add <li>
  formNode.addEventListener("submit", (ev) => {
    // Disable default <form> behaviour
    ev.preventDefault();
    // Get form submit data
    const formData = new FormData(ev.target);
    const text = formData.get("todo-text");

    // Generate <li> with text value from form
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <label class="todo-list-item">
          <span class="todo-list-counter"></span>
          <div class="todo-content">
              <h2 class="todo-item-title">${text}</h2>
              <input class="todo-item-checkbox" type="checkbox">
          </div>
      </label>
    `;
    todoList.appendChild(listItem);

    // Empty input post add item
    textInput.value = "";
  });
}

// Initialize to-do input functionality
mount();