document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline-slider");

  const events = [
    { year: "2020", text: "Planning" },
    { year: "2021", text: "Design Phase" },
    { year: "2022", text: "Development" },
    { year: "2023", text: "Testing" },
    { year: "2024", text: "Launch" }
  ];

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "timeline-card";
    card.innerHTML = `<strong>${event.year}</strong><p>${event.text}</p>`;
    timeline.appendChild(card);
  });
});
