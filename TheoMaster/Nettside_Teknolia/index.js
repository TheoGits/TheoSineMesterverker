document.getElementById('saveButton').addEventListener('click', function() {
    const tittel = document.getElementById('textbox1').value;
    const beskrivelse = document.getElementById('textbox2').value;
    const relevantInfo = document.getElementById('textbox3').value;
    const tid = document.getElementById('tid').value;

    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tittel, beskrivelse, relevantInfo, tid })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
  });