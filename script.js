const letterCover = document.getElementById('letterCover');
const letterContent = document.getElementById('letterContent');
const toggleBtn = document.getElementById('toggleBtn');
const paper = document.querySelector('.paper');

// İçerik kısmını güncelle
function updateLetterContent() {
    const content = document.querySelector('.letter-content p').innerHTML;
    paper.querySelector('p').innerHTML = content;
}

// Başlangıçta içeriği güncelle
updateLetterContent();

toggleBtn.addEventListener('click', function() {
    if (letterContent.style.transform === 'translateY(0%)' || letterContent.style.transform === '') {
        letterContent.style.transform = 'translateY(100%)'; // İçeriği gizle
        letterCover.style.transform = 'translateY(0%)'; // Kapağı kapat
        paper.style.opacity = '0'; // Kağıt gizlenir
        paper.style.transform = 'translateY(50%)'; // Kağıt aşağı iner
        toggleBtn.textContent = 'Aç';
    } else {
        letterContent.style.transform = 'translateY(0%)'; // İçeriği göster
        letterCover.style.transform = 'translateY(-100%)'; // Kapağı yukarı aç
        paper.style.opacity = '1'; // Kağıt görünür hale gelir
        paper.style.transform = 'translateY(0%)'; // Kağıt yukarı çıkar
        toggleBtn.textContent = 'Kapat';
    }
});
