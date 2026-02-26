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
        
        const mailtoLink = `mailto:leklaussl@gmail.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(message)}`;
        
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

const certTranslations = {
    "Aplicações Web com NodeJs.pdf": "Web Applications with NodeJs",
    "Banco de Dados SQL.pdf": "SQL Databases",
    "Bootstrap e Sass.pdf": "Bootstrap and Sass",
    "CSS 3.pdf": "CSS 3",
    "CSS Moderno.pdf": "Modern CSS",
    "Formação Full Stack JavaScript.pdf": "Full Stack JavaScript Bootcamp",
    "Fundamentos do React.pdf": "React Fundamentals",
    "Git e GitHub.pdf": "Git and GitHub",
    "HTML 5.pdf": "HTML 5",
    "Introdução ao NodeJS.pdf": "Introduction to NodeJS",
    "JavaScript I - Fundamentos.pdf": "JavaScript I - Fundamentals",
    "JavaScript III - DOM.pdf": "JavaScript III - DOM",
    "JavaScript IV - Recursos Modernos.pdf": "JavaScript IV - Modern Features",
    "JavaScript V - POO.pdf": "JavaScript V - OOP",
    "JavaScript VI - Tópicos Avançados.pdf": "JavaScript VI - Advanced Topics",
    "Next.js.pdf": "Next.js",
    "Oracle.pdf": "Oracle Cloud Infrastructure",
    "React + TypeScript na Prática Projeto React Kanban.pdf": "React + TypeScript Practice: Kanban Project",
    "SQL no Node.js e Prisma ORM.pdf": "SQL in Node.js and Prisma ORM",
    "Setup.pdf": "Setup & Environment",
    "TypeScript.pdf": "TypeScript"
};

function renderCertificates() {
    if(!certificatesContainer) return;
    certificatesContainer.innerHTML = '';
    
    certificates.forEach(cert => {
        const link = document.createElement('a');
        link.href = `certificados/${cert}`;
        link.target = "_blank";
        link.className = "cert-item";
        
        const displayName = certTranslations[cert] || cert.replace('.pdf', '');

        link.innerHTML = `
            <span>${displayName}</span>
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
        const text = encodeURIComponent('Hello, I saw your portfolio and would like to speak with you.');
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