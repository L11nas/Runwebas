// Pridėkite šias eilutes failo pradžioje
const { jsPDF } = window.jspdf;

// Funkcija JSON failo nuskaitymui
function nuskaitytiJSON(failoPavadinimas) {
  return fetch(failoPavadinimas)
    .then((response) => response.json())
    .catch((error) => console.error('Klaida nuskaitant JSON:', error));
}

// Pagrindinė funkcija plano generavimui
async function generuotiPlana() {
  const savaites = parseInt(document.getElementById('savaites').value);
  const lygis = document.getElementById('lygis').value;
  let rezultatas = document.getElementById('rezultatas');

  const failoPavadinimas = `${lygis}.json`;

  try {
    const planas = await nuskaitytiJSON(failoPavadinimas);

    let planasHTML = `<h2>${planas.planas} (${savaites} savaitės)</h2>`;
    planasHTML +=
      "<table border='1'><tr><th>Savaitė</th><th>Treniruotė</th></tr>";

    for (let i = 0; i < savaites; i++) {
      const savaite = planas.savaites[i % planas.savaites.length];
      planasHTML += `<tr><td>${i + 1}</td><td>`;
      savaite.treniruotes.forEach((treniruote) => {
        planasHTML += `${treniruote.diena}: ${treniruote.aprasymas}<br>`;
      });
      planasHTML += '</td></tr>';
    }

    planasHTML += '</table>';
    rezultatas.innerHTML = planasHTML;

    // Rodyti PDF mygtuką
    document.getElementById('pdfMygtukas').style.display = 'block';
  } catch (error) {
    console.error('Klaida generuojant planą:', error);
    rezultatas.innerHTML =
      '<p>Įvyko klaida generuojant planą. Prašome pabandyti vėliau.</p>';
    // Slėpti PDF mygtuką klaidos atveju
    document.getElementById('pdfMygtukas').style.display = 'none';
  }
}

// PDF eksportavimo funkcija
function eksportuotiIPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.addFont(
    'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    'Roboto',
    'normal'
  );
  doc.setFont('Roboto');

  // Nustatome lietuvių kalbos rašmenis
  doc.setLanguage('lt');

  // Pridedame antraštę
  doc.setFontSize(16);
  doc.text('Bėgimo planas', 105, 15, null, null, 'center');

  // Gauname sugeneruotą planą iš HTML
  const rezultatas = document.getElementById('rezultatas');
  const antraste = rezultatas.querySelector('h2').textContent;
  const lentele = rezultatas.querySelector('table');

  // Pridedame antraštę į PDF
  doc.setFontSize(14);
  doc.text(antraste, 14, 25);

  // Konvertuojame lentelę į PDF
  doc.autoTable({
    html: lentele,
    startY: 35,
    styles: { fontSize: 8 },
    columnStyles: { 0: { cellWidth: 20 } },
    headStyles: { fillColor: [200, 200, 200] },
  });

  // Išsaugome PDF
  doc.save('begimo_planas.pdf');
}
