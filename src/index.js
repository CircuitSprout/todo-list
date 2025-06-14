import './styles.css';

document.addEventListener("DOMContentLoaded", () => {
  // Helper to save textarea content to localStorage
  function saveTextarea(id) {
    const textarea = document.getElementById(id);
    if (textarea) {
      textarea.addEventListener("input", () => {
        localStorage.setItem(id, textarea.value);
      });
      // Load saved content on page load
      const saved = localStorage.getItem(id);
      if (saved !== null) {
        textarea.value = saved;
      }
    }
  }

  // List all your textarea IDs here
  const textareaIds = [
    "leftRow1",
    "leftRow2",
    "leftRow3",
    "inspoThoughts",
    "smallMusings",
    "groceryListDetails",
    "workLoadDetails",
    "weekBlock1",
    "weekBlock2",
    "weekBlock3",
    "weekBlock4",
    "weekBlock5",
    "weekBlock6",
    "weekBlock7",
    "weekBlock8",
  ];

  textareaIds.forEach(saveTextarea);

  function setupBulletInput(textareaId, listId) {
    const textarea = document.getElementById(textareaId);
    const list = document.getElementById(listId);

    // Load saved items
    const saved = JSON.parse(localStorage.getItem(listId) || "[]");
    saved.forEach((item) => addBullet(list, item));

    textarea.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        const value = textarea.value.trim();
        if (value) {
          addBullet(list, value);
          textarea.value = "";
          // Save to localStorage
          const items = Array.from(list.children).map((li) => li.textContent);
          localStorage.setItem(listId, JSON.stringify(items));
        }
      }
    });
  }

  function addBullet(list, text) {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
  }

  // Setup for each left row
  setupBulletInput("leftRow1", "leftRow1-list");
  setupBulletInput("leftRow2", "leftRow2-list");
  setupBulletInput("leftRow3", "leftRow3-list");
});
localStorage.setItem("test", "hello");
alert(localStorage.getItem("test"));
