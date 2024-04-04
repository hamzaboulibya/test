function generatePDF() {
    var inputData = document.getElementById('inputData').value;
    
    // Utiliser jsPDF pour générer le PDF
    var doc = new jsPDF();
    doc.text(20, 20, 'Entrée de l\'utilisateur : ' + inputData);
    
    // Générer le fichier PDF et déclencher le téléchargement automatique
    doc.save('output.pdf');
  }
  