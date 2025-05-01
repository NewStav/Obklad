let counter = 1;

async function scanImage() {
  const imageInput = document.getElementById('imageInput');
  const file = imageInput.files[0];
  if (!file) return alert('Завантаж фото');

  const result = await extractDataFromImage(file);

  const now = new Date();
  const formattedDate = now.toLocaleDateString() + ' ' + now.toLocaleTimeString().slice(0, 5);

  // Додавання в таблицю
  const table = document.getElementById('resultsTable');
  const row = table.insertRow(0);
  row.insertCell(0).innerText = counter++;
  row.insertCell(1).innerText = result.cisloFormy;
  row.insertCell(2).innerText = result.koupelna;
  row.insertCell(3).innerText = result.typ;
  row.insertCell(4).innerText = formattedDate;

  // Збереження в Firebase
  db.collection("protocols").add({
    cisloFormy: result.cisloFormy,
    koupelna: result.koupelna,
    typ: result.typ,
    timestamp: formattedDate
  });
}
