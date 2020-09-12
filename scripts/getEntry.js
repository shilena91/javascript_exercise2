import Entry from "./Entry.class.js";

export function getEntry(entries) {
  document.querySelector(".btn").addEventListener("click", (e) => {
    const question = document.getElementById("question").value;

    if (!question) {
      return;
    }
    document.getElementById("myForm").style.display = "none";

    const category = document.getElementById("options").value;
    const date = new Date();

    entries.push(new Entry(question, category, date));
    localStorage.setItem("entries", JSON.stringify(entries));
  });
}
