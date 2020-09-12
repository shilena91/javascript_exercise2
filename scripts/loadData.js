import { renderGrid } from "./handleFilterChange.js";

export function loadData() {
  if (typeof window !== "undefined") {
    let entries = localStorage.getItem("entries");
    entries = JSON.parse(entries);
    if (entries) {
      entries.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      entries.forEach(renderGrid);
    } else {
      entries = [];
    }
    return entries;
  }
}
