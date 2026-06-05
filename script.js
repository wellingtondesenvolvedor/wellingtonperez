document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.slide-up');
    hiddenElements.forEach((el) => observer.observe(el));
});

// --- Lógica do Menu Hambúrguer (Mobile) ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('menu-overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

const previewImageWrapper = document.querySelector('.image-preview-wrapper');
const previewImage = document.querySelector('.content-image-preview');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (previewImageWrapper && previewImage && lightbox && lightboxImg) {
    previewImageWrapper.addEventListener('click', () => {
        lightboxImg.src = previewImage.src;
        lightbox.classList.add('active');
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}