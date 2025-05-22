// Menú Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Animar el icono
    hamburger.classList.toggle('toggle');
    // Mostrar/ocultar menú
    navLinks.classList.toggle('active');
    
    // Animar los enlaces
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Cerrar menú al hacer clic en un enlace
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('toggle');
        navLinks.classList.remove('active');
        links.forEach(item => {
            item.style.animation = '';
        });
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario
    alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
    contactForm.reset();
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Función para cargar más abogados (ejemplo)
document.querySelector('.view-more-btn')?.addEventListener('click', function() {
    // Aquí podrías cargar dinámicamente más abogados
    // desde una API o mostrar los que están ocultos
    
    // Ejemplo básico:
    const teamGrid = document.querySelector('.team-grid');
    const hiddenMembers = [
        // Aquí irían los objetos con la información de más abogados
    ];
    
    hiddenMembers.forEach(member => {
        const memberHTML = `
            <div class="team-member">
                <div class="team-img-container">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <h3>${member.name}</h3>
                <span class="title">${member.title}</span>
                <p>${member.description}</p>
            </div>
        `;
        teamGrid.insertAdjacentHTML('beforeend', memberHTML);
    });
    
    // Ocultar el botón después de cargar todo
    this.style.display = 'none';
});