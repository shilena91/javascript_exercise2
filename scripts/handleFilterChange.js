export function handleFilterChange(entries) {
  document.getElementById("filter").addEventListener("change", (event) => {
    const value = event.target.value;

    if (value !== "all") {
      const filteredEntries = entries.filter((e) => {
        return e.category == event.target.value;
      });

      removeGridElements();
      if (filteredEntries.length > 0) {
        filteredEntries.forEach(renderGrid);
      }
    } else {
      location.reload();
    }
  });
}

export function renderGrid(e) {
  const newEntry = document.createElement("DIV");
  newEntry.setAttribute("class", "entry");

  const newQuestion = document.createElement("P");
  newQuestion.innerText = e.question;

  const newCategory = document.createElement("DIV");
  newCategory.setAttribute("class", "category");
  newCategory.innerText = e.category;

  newEntry.appendChild(newQuestion);
  newEntry.appendChild(newCategory);
  document.getElementById("wrapper").appendChild(newEntry);
}

function removeGridElements() {
  const wrapper = document.getElementById("wrapper");

  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }
}
