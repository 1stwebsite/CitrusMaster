// Функция для получения данных из Google Таблицы
function fetchDataFromGoogleSheet() {
  const sheetID = '1G-3wbvdkQGlO64QLMe5gMd4M2epPzF4ohohhYBrb-oM'; // Замените на ID вашей Google Таблицы
  const apiKey = 'YOUR_API_KEY'; // Замените на ваш API ключ
  const range = 'Sheet1!A1:G14'; // Диапазон ячеек, который вы хотите получить

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      if (data.values && data.values.length > 0) {
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
      } else {
        console.log('No data available.');
      }
    })
    .catch((error) => console.log('Error fetching data:', error));
}
