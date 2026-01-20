document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const navIcons = document.querySelectorAll('.nav-icon');

navIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        navIcons.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const topic = contactForm.querySelector('input[name="topic"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        const btn = contactForm.querySelector('.submit-btn');
        const originalText = btn.textContent;
        
        const mailtoLink = `mailto:seu_email@dominio.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(message)}`;
        
        window.location.href = mailtoLink;
        
        btn.textContent = 'Redirecting...';
        
        setTimeout(() => {
            btn.textContent = originalText;
            contactForm.reset();
        }, 2000);
    });
}

const modalCertificates = document.getElementById('modal-certificates');
const btnCertModal = document.getElementById('btn-cert-modal');
const closeButtons = document.querySelectorAll('.close-btn');
const certificatesContainer = document.getElementById('certificates-container');

const certificates = [
    "Aplicações Web com NodeJs.pdf",
    "Banco de Dados SQL.pdf",
    "Bootstrap e Sass.pdf",
    "CSS 3.pdf",
    "CSS Moderno.pdf",
    "Formação Full Stack JavaScript.pdf",
    "Fundamentos do React.pdf",
    "Git e GitHub.pdf",
    "HTML 5.pdf",
    "Introdução ao NodeJS.pdf",
    "JavaScript I - Fundamentos.pdf",
    "JavaScript III - DOM.pdf",
    "JavaScript IV - Recursos Modernos.pdf",
    "JavaScript V - POO.pdf",
    "JavaScript VI - Tópicos Avançados.pdf",
    "Next.js.pdf",
    "Oracle.pdf",
    "React + TypeScript na Prática Projeto React Kanban.pdf",
    "SQL no Node.js e Prisma ORM.pdf",
    "Setup.pdf",
    "TypeScript.pdf"
];

function renderCertificates() {
    if(!certificatesContainer) return;
    certificatesContainer.innerHTML = '';
    
    certificates.forEach(cert => {
        const link = document.createElement('a');
        link.href = `certificados/${cert}`;
        link.target = "_blank";
        link.className = "cert-item";
        link.innerHTML = `
            <span>${cert.replace('.pdf', '')}</span>
            <i class="fas fa-external-link-alt"></i>
        `;
        certificatesContainer.appendChild(link);
    });
}

function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

if(btnCertModal) {
    btnCertModal.addEventListener('click', () => {
        renderCertificates();
        openModal(modalCertificates);
    });
}

closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        closeModal(this.closest('.modal'));
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

const btnWhatsapp = document.getElementById('btn-whatsapp');
if(btnWhatsapp) {
    btnWhatsapp.addEventListener('click', () => {
        const phone = '5592984615420';
        const text = encodeURIComponent('Olá, vi o seu portfólio e gostaria de falar com você.');
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
}

const btnCv = document.getElementById('btn-cv');
if(btnCv) {
    btnCv.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'Currículo - Leandro Klaus Santos Lima.pdf';
        link.download = 'Currículo - Leandro Klaus Santos Lima.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}