async function extractDataFromImage(imageFile) {
  const result = await Tesseract.recognize(imageFile, 'eng');
  const text = result.data.text;

  // Попереднє очищення
  const cleanedText = text.replace(/\s+/g, ' ').trim();

  // Пошук Číslo formy
  const formMatch = cleanedText.match(/F[\s\/\-]*\d{2,3}[\s\/\-]*\d{3}[\s\/\-]*\d{3}/i);
  let form = formMatch ? formMatch[0].replace(/[^0-9F]/g, '') : '';

  // Витяг номеру koupelny — остання цифра
  const koupelnaMatch = cleanedText.match(/\/\s?(\d{1,2})/);
  const koupelna = koupelnaMatch ? koupelnaMatch[1] : '';

  // Пошук типу
  const typMatch = cleanedText.match(/\b\d[\.,]?\d?[Kk][Ll]\b/);
  const typ = typMatch ? typMatch[0].replace(',', '.').toUpperCase() : '';

  return {
    cisloFormy: form.replace(koupelna, '').trim(),
    koupelna: koupelna,
    typ: typ
  };
}
