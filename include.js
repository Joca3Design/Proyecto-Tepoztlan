document.addEventListener('DOMContentLoaded', function() {
    fetch('/layout.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // 1. Extraer los contenidos de header y footer
            const headerHTML = doc.querySelector('header').innerHTML;
            const footerHTML = doc.querySelector('footer').innerHTML;
            
            // 2. Extraer el div de créditos (el elemento completo con su clase)
            const desktopCredits = doc.querySelector('.desktop-credits');
            
            // 3. Inyectar en la página actual
            document.querySelector('header').innerHTML = headerHTML;
            document.querySelector('footer').innerHTML = footerHTML;

            // 4. Inyectar los créditos al final del body si existen en el layout
            if (desktopCredits && !document.querySelector('.desktop-credits')) {
                document.body.insertAdjacentHTML('beforeend', desktopCredits.outerHTML);
            }

            // Activar el menú
            initNavbar();
        })
        .catch(error => console.error('Error loading components:', error));
});

function initNavbar() {
    const openBtn = document.getElementById('openMenu');
    const closeBtn = document.getElementById('closeMenu');
    const nav = document.getElementById('navMenu');

    if (openBtn && closeBtn && nav) {
        openBtn.addEventListener('click', () => nav.classList.add('active'));
        closeBtn.addEventListener('click', () => nav.classList.remove('active'));
    }
}