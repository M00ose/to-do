import loadPage from "./modules/loadPage";
import main from "./modules/webPage";
import createTask from "./modules/taskManager";

main();
loadPage();

//add events to create tasks

//sample
const cm = createTask("Client Management", "LWC", "4");
const pr = createTask("Prospect Research", "AVG", "2");

console.log(cm);
console.log(pr);
