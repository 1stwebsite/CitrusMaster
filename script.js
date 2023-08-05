// Функция для получения данных из Google Таблицы
function fetchDataFromGoogleSheet() {
  const sheetID = '1G-3wbvdkQGlO64QLMe5gMd4M2epPzF4ohohhYBrb-oM'; // Замените на ID вашей Google Таблицы
  const apiKey = 'AIzaSyAoZ92_SYkSos0qZY7XXL6njvUVGkwCgFk'; // Замените на ваш API ключ
  const range = 'Sheet1!A1:G14'; // Диапазон ячеек, которые вы хотите получить

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

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
