document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engelle
    
    // Formdaki verileri al
    var name = document.getElementById('name').value;
    var studentID = document.getElementById('studentID').value;
    var department = document.getElementById('department').value;
    
    // Verileri göstermek için bir mesaj oluştur
    var message = document.getElementById('message');
    message.innerHTML = `
      <p>Adı Soyadı: ${name}</p>
      <p>Öğrenci Numarası: ${studentID}</p>
      <p>Bölümü: ${department}</p>
    `;
    
    // Formu temizle
    document.getElementById('studentForm').reset();
  });
  