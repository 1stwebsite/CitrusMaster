// Функция для получения данных из Google Таблицы
function fetchDataFromGoogleSheet() {
  const sheetID = '1G-3wbvdkQGlO64QLMe5gMd4M2epPzF4ohohhYBrb-oM'; // Replace with your Google Sheet ID
  const apiKey = 'AIzaSyAoZ92_SYkSos0qZY7XXL6njvUVGkwCgFk'; // Replace with your API key
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Sheet1?key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const values = data.values;
      const table = document.getElementById('data-table');

      for (const entry of values) {
        const row = document.createElement('tr');
        for (const value of entry) {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
    })
    .catch((error) => console.log('Error fetching data:', error));
}

// Анимация появления таблицы
function animateTable() {
  const table = document.getElementById('data-table');
  table.style.opacity = 0;

  let opacity = 0;
  const animationInterval = setInterval(() => {
    opacity += 0.05;
    table.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(animationInterval);
    }
  }, 100);
}

// Получение данных и запуск анимации при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  fetchDataFromGoogleSheet();
  animateTable();
});
