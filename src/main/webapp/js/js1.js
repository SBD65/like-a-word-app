/* * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

// Gerekli HTML elemanlarını seçiyoruz
const metin = document.getElementById('metinAlani');
const fontSelect = document.querySelector('select[name="form"]');
const fontSize = document.getElementById('font-size');

// YENİ: Stil ve Hizalama Butonları
const btnBold = document.getElementById('btn-bold');
const btnItalic = document.getElementById('btn-italic');
const btnUnderline = document.getElementById('btn-underline');
const btnAlignLeft = document.getElementById('btn-align-left');
const btnAlignCenter = document.getElementById('btn-align-center');
const btnAlignRight = document.getElementById('btn-align-right');
const textColorPicker = document.getElementById('text-color-picker');
const btnClear = document.getElementById('btn-clear');

// YENİ: Gizli Form Alanları
const isBoldInput = document.getElementById('isBold');
const isItalicInput = document.getElementById('isItalic');
const isUnderlineInput = document.getElementById('isUnderline');
const alignmentInput = document.getElementById('alignment');
const textColorInput = document.getElementById('textColor');


// Orijinal Font Boyutu Ayarlayıcı
fontSize.addEventListener('input', function() {
    metin.style.fontSize = this.value*13/10 + 'px';
});

// Orijinal Font Ailesi Ayarlayıcı
fontSelect.addEventListener('change', function() {
    // Bu yöntem (className atamak) diğer stilleri (bold, italic) SİLEBİLİR.
    // Daha iyi bir yöntem classList kullanmaktır, ancak orijinal kodunuzu koruyorum.
    const selectedValue = this.value;
    
    // Önceki font sınıflarını temizle (basit bir yöntem)
    metin.className = ''; 
    
    // Yeni sınıfı ekle
    switch(selectedValue) {
        case 'Arial': metin.classList.add('font-arial'); break;
        case 'Verdana': metin.classList.add('font-verdana'); break;
        case 'Tahoma': metin.classList.add('font-tahoma'); break;
        case 'Trebuchet MS': metin.classList.add('font-trebuchet'); break;
        case 'Century Gothic': metin.classList.add('font-century'); break;
        case 'Times New Roman': metin.classList.add('font-times'); break;
        case 'Georgia': metin.classList.add('font-georgia'); break;
        case 'Palatino Linotype': metin.classList.add('font-palatino'); break;
        case 'Courier New': metin.classList.add('font-courier'); break;
        case 'Consolas': metin.classList.add('font-consolas'); break;
        default: break;
    }
});


// --- YENİ EKLENEN ÖZELLİKLER ---

// Kalın (Bold)
btnBold.addEventListener('click', function() {
    const isBold = isBoldInput.value === 'true';
    if (isBold) {
        metin.style.fontWeight = 'normal';
        isBoldInput.value = 'false';
        this.classList.remove('active'); // Butonun aktif görünümünü kaldır
    } else {
        metin.style.fontWeight = 'bold';
        isBoldInput.value = 'true';
        this.classList.add('active'); // Butonu aktif yap
    }
});

// Eğik (Italic)
btnItalic.addEventListener('click', function() {
    const isItalic = isItalicInput.value === 'true';
    if (isItalic) {
        metin.style.fontStyle = 'normal';
        isItalicInput.value = 'false';
        this.classList.remove('active');
    } else {
        metin.style.fontStyle = 'italic';
        isItalicInput.value = 'true';
        this.classList.add('active');
    }
});

// Altı Çizili (Underline)
btnUnderline.addEventListener('click', function() {
    const isUnderline = isUnderlineInput.value === 'true';
    if (isUnderline) {
        metin.style.textDecoration = 'none';
        isUnderlineInput.value = 'false';
        this.classList.remove('active');
    } else {
        metin.style.textDecoration = 'underline';
        isUnderlineInput.value = 'true';
        this.classList.add('active');
    }
});

// --- Hizalama ---
btnAlignLeft.addEventListener('click', function() {
    metin.style.textAlign = 'left';
    alignmentInput.value = 'left';
});

btnAlignCenter.addEventListener('click', function() {
    metin.style.textAlign = 'center';
    alignmentInput.value = 'center';
});

btnAlignRight.addEventListener('click', function() {
    metin.style.textAlign = 'right';
    alignmentInput.value = 'right';
});

// --- Renk Seçici ---
textColorPicker.addEventListener('input', function() {
    const newColor = this.value;
    metin.style.color = newColor;
    textColorInput.value = newColor; // Gizli alana #FF0000 formatında kaydet
});

// --- Temizle Butonu ---
btnClear.addEventListener('click', function() {
    metin.value = ''; // Metni sil
    
    // Tüm stilleri sıfırla
    metin.style.fontWeight = 'normal';
    metin.style.fontStyle = 'normal';
    metin.style.textDecoration = 'none';
    metin.style.textAlign = 'left';
    metin.style.color = '#000000';
    
    // Gizli alanları sıfırla
    isBoldInput.value = 'false';
    isItalicInput.value = 'false';
    isUnderlineInput.value = 'false';
    alignmentInput.value = 'left';
    textColorInput.value = '#000000';
    textColorPicker.value = '#000000';
    
    // Aktif buton görünümlerini kaldır
    btnBold.classList.remove('active');
    btnItalic.classList.remove('active');
    btnUnderline.classList.remove('active');
});

// CSS'inize şunu eklerseniz butonlar basılı gibi görünür:
/*
.style-grup button.active, .align-grup button.active {
    background-color: #007BFF;
    color: #fff;
}
*/