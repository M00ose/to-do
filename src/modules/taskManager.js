const task = function () {
  let tasks = ["Research Management", "Prospect Research"];

  //Cache DOM
  const container = document.querySelector(".tasks");

  //Add task DOM
  let newTask = document.querySelector(".add-item");
  let addItemBtn = document.querySelector(".add");

  //Bind events
  addItemBtn.addEventListener("click", addItem);

  function render(item) {
    container.insertBefore(item, newTask);
    document.querySelector(".add-task").value = "";
  }

  function addItem() {
    let taskName = document.querySelector(".add-task").value;
    tasks.push(taskName);
    createNewItem(taskName);

    return taskName;
  }

  function createNewItem(value) {
    //Create elements
    let item = document.createElement("div");
    item.className = "item";
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    let input = document.createElement("input");
    input.className = "item-input";

    //Build element
    input.value = value;
    item.appendChild(checkbox);
    item.appendChild(input);
    render(item);
  }
};

export default task;
