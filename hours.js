// hours.js

// dostępność na konkretne dni (YYYY-MM-DD)
const availability = {
  "2025-04-09": ["10:00", "14:00", "18:00"],
  "2025-04-10": ["12:00", "16:00"],
  "2025-04-11": ["10:00", "12:00", "14:00", "16:00"],
  "2025-04-12": ["10:00", "12:00", "14:00"],
  "2025-04-13": ["12:00", "18:00"],
};

// domyślne wszystkie możliwe godziny
const allTimes = ["10:00", "12:00", "14:00", "16:00", "18:00"];

function updateTimeOptions(selectedDate) {
  const timeSelect = document.getElementById("time");
  timeSelect.innerHTML = '<option value="">Wybierz godzinę</option>';

  const availableTimes = availability[selectedDate] || [];

  if (availableTimes.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Brak dostępnych godzin";
    timeSelect.appendChild(option);
    return;
  }

  availableTimes.forEach(time => {
    const option = document.createElement("option");
    option.value = time;
    option.textContent = time;
    timeSelect.appendChild(option);
  });
}
