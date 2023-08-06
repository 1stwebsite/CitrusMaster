// Функция для получения данных из Google Таблицы
function fetchDataFromGoogleSheet() {
  const sheetID = '1G-3wbvdkQGlO64QLMe5gMd4M2epPzF4ohohhYBrb-oM'; // Замените на ID вашей Google Таблицы
  const apiKey = 'AIzaSyAoZ92_SYkSos0qZY7XXL6njvUVGkwCgFk'; // Замените на ваш API ключ
  const range = 'ЦМ выполнение!A1:G11'; // Здесь замените на диапазон ячеек на нужном вам листе

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const values = data.values;
      const table = document.getElementById('data-table');

      for (const row of values) {
        const tr = document.createElement('tr');
        for (const cellValue of row) {
          const td = document.createElement('td');
          td.textContent = cellValue;
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
    })
    .catch((error) => console.log('Error fetching data:', error));
}

// Получение данных при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  fetchDataFromGoogleSheet();
});
// Функция для сортировки данных по столбцу
function sortByColumn(columnIndex) {
  const table = document.getElementById('data-table');
  const rows = Array.from(table.querySelectorAll('tr'));
  const headerRow = rows.shift(); // Удаляем заголовочную строку из массива

  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent;
    const bValue = b.cells[columnIndex].textContent;
    return aValue.localeCompare(bValue, undefined, { numeric: true });
  });

  table.innerHTML = ''; // Очищаем таблицу

  table.appendChild(headerRow); // Добавляем заголовочную строку обратно
  rows.forEach((row) => table.appendChild(row)); // Добавляем отсортированные строки
}

// Функция для получения данных из Google Таблицы
function fetchDataFromGoogleSheet() {
  // ... Ваш предыдущий код для получения данных
}

// Получение данных и запуск анимации при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  fetchDataFromGoogleSheet();
  animateTable();
});
