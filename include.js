document.addEventListener('DOMContentLoaded', function() {
    // Eliminamos el "/" inicial para que busque en la carpeta actual
    fetch('layout.html') 
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar layout.html');
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // ... resto de tu código de inyección ...
            const headerHTML = doc.querySelector('header').innerHTML;
            const footerHTML = doc.querySelector('footer').innerHTML;
            
            document.querySelector('header').innerHTML = headerHTML;
            document.querySelector('footer').innerHTML = footerHTML;

            // Inyectar créditos si existen
            const desktopCredits = doc.querySelector('.desktop-credits');
            if (desktopCredits && !document.querySelector('.desktop-credits')) {
                document.body.insertAdjacentHTML('beforeend', desktopCredits.outerHTML);
            }

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
