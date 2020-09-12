import { loadData } from "./loadData.js";
import { getEntry } from "./getEntry.js";
import { handleFilterChange } from "./handleFilterChange.js";

function App() {
  let entries = loadData();

  getEntry(entries);
  handleFilterChange(entries);

  openForm();
  closeForm();
}

function openForm() {
  document.querySelector(".open-button").addEventListener("click", () => {
    document.getElementById("myForm").style.display = "block";
  });
}

function closeForm() {
  document.getElementById("cancel").addEventListener("click", () => {
    document.getElementById("myForm").style.display = "none";
  });
}

App();
