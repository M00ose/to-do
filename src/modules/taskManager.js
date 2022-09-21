let tasks = [];

const createTask = (Title, Client, Hours) => {
  console.log(Title, Client, Hours);
  let Status = "Not Started";
  let Timer = "";

  tasks.push({ Status, Title, Client, Hours, Timer });
  console.log(tasks);
  return { Title, Client, Hours };
};

export default createTask;
