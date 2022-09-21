import { loadPage } from "./loadPage";

const main = () => {
  const content = document.querySelector(".content");
  const header = document.createElement("h1");
  header.textContent = "Workplan";
  content.appendChild(header);
};

export default main;
