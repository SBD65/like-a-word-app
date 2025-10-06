/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


// Gerekli HTML elemanlarını seçiyoruz
const metin = document.getElementById('metinAlani');

const fontSelect = document.querySelector('select[name="form"]');
const m = window.getComputedStyle(metin);

// Her bir butona bir "tıklama" olayı (event listener) ekliyoruz.
// Butona tıklandığında, paragrafın sınıfını (className) değiştiriyoruz.

fontSelect.addEventListener('change', function() {
    const selectedValue = this.value;
    
    switch(selectedValue) {
        case 'Arial':
            metin.className = 'font-arial';
            break;
        case 'Verdana':
            metin.className = 'font-verdana';
            break;
        case 'Times New Roman':
            metin.className = 'font-times';
            break;
        case 'Courier New':
            metin.className = 'font-courier';
            break;
    }
    
    console.log('Seçilen font:', selectedValue);
    console.log('Metin genişliği:', m.getPropertyValue('width'));
});

