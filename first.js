const eventList = document.getElementById("eventList");

/* ADD EVENT */
function addEvent() {
  const title = document.getElementById("title").value.trim();
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("description").value.trim();

  if (!title || !date) {
    alert("Please enter title and date");
    return;
  }

  createEvent(title, date, category, desc);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

/* CREATE EVENT CARD */
function createEvent(title, date, category, desc) {
  const div = document.createElement("div");
  div.className = "event";

  div.innerHTML = `
    <button class="delete" onclick="this.parentElement.remove()">×</button>
    <h3>${title}</h3>
    <p>📅 ${date}</p>
    <span class="badge">${category}</span>
    <p>${desc || "No description provided."}</p>
  `;

  eventList.appendChild(div);
}

/* CLEAR EVENTS */
function clearEvents() {
  eventList.innerHTML = "";
}

/* SAMPLE EVENTS */
function addSample() {
  createEvent("Tech Fest 2026", "2026-01-14", "Conference", "Annual technical event.");
  createEvent("Football Match", "2026-02-10", "Sports", "Intercollege tournament.");
}

/* KEYBOARD EVENT DETECTION */
document.addEventListener("keydown", function(event) {
  const output = document.getElementById("keyOutput");
  output.innerText = "You pressed: " + event.key;
});
