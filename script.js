let todoList = [];

function addTodo() {
  const taskInput = document.getElementById("todo-input");
  const dateInput = document.getElementById("todo-date");
  const timeInput = document.getElementById("todo-time");

  const task = taskInput.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;

  if (!task || !date || !time) {
    alert("Please fill all fields!");
    return;
  }

  const timeFormatted = formatTime12Hr(time);
  todoList.push({ task, date, time: timeFormatted });

  taskInput.value = '';
  dateInput.value = '';
  timeInput.value = '';

  displayTodos();
}

function displayTodos() {
  const container = document.getElementById("todo-container");
  container.innerHTML = '';

  todoList.forEach((todo, index) => {
    const div = document.createElement("div");
    div.className = "todo-item";

    div.innerHTML = `
      <div class="todo-text">
        <span><strong>Task:</strong> ${todo.task}</span>
        <span><strong>Date:</strong> ${todo.date}</span>
        <span><strong>Time:</strong> ${todo.time}</span>
      </div>
      <button class="btn-delete" onclick="deleteTodo(${index})">Delete</button>
    `;

    container.appendChild(div);
  });
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}

function formatTime12Hr(timeStr) {
  const [hour, minute] = timeStr.split(':');
  const h = parseInt(hour);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${minute} ${ampm}`;
}
