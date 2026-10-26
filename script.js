// === 1. FITUR TOGGLE TEMA ===
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function() {
    bodyHalaman.classList.toggle('light-mode');
    
    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
    } else {
        btnTema.textContent = '☀️ Mode Terang';
    }
});

const btnSkill = document.querySelector('#btnSkill');
const progressSection = document.querySelector('.progress-section');
const progressFills = document.querySelectorAll('.progress-fill');

btnSkill.addEventListener('click', function() {
    progressSection.classList.toggle('show-skill');

    if (progressSection.classList.contains('show-skill')) {
        progressFills.forEach(function(bar) {
            const targetWidth = bar.getAttribute('data-progress');
            bar.style.width = '0%';
            setTimeout(function() {
                bar.style.width = targetWidth;
            }, 100);
        });
    }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function(event) {
    event.preventDefault();
    elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function() {
    elemenModal.classList.remove('show');
});