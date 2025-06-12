// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// DOM Elements
const sections = document.querySelectorAll('section');

// Cyberpunk glitch effect for titles
const glitchTexts = document.querySelectorAll('.cyber-glitch');
glitchTexts.forEach(text => {
    setInterval(() => {
        text.style.textShadow = `
            ${Math.random() * 10}px ${Math.random() * 10}px var(--secondary-color),
            ${-Math.random() * 10}px ${-Math.random() * 10}px var(--accent-color)
        `;
        setTimeout(() => {
            text.style.textShadow = '';
        }, 50);
    }, 3000);
});

// Dynamic grid animation
const cyberGrid = document.querySelector('.cyber-grid');
let gridSize = 30;
setInterval(() => {
    gridSize = Math.random() * 20 + 20;
    cyberGrid.style.backgroundSize = `${gridSize}px ${gridSize}px`;
}, 5000);

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'var(--card-bg)';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.backgroundColor = 'var(--card-bg)';
        navbar.style.boxShadow = 'none';
    }
});

// Add active class to nav links on scroll
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing animation for the hero section
const heroTitle = document.querySelector('.hero h1');
const text = heroTitle.innerHTML;
heroTitle.innerHTML = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Terminal-like text animation
const terminalTexts = document.querySelectorAll('.terminal-body p, .terminal-body li');
terminalTexts.forEach((text, index) => {
    const content = text.textContent;
    text.textContent = '';
    let j = 0;
    
    setTimeout(() => {
        const typeTerminal = () => {
            if (j < content.length) {
                text.textContent += content.charAt(j);
                j++;
                setTimeout(typeTerminal, 30);
            }
        };
        typeTerminal();
    }, index * 1000);
});

// Skill badges hover effect
const skillBadges = document.querySelectorAll('.skill-items span');
skillBadges.forEach(badge => {
    badge.addEventListener('mouseover', () => {
        badge.style.transform = `translateY(-5px) rotate(${Math.random() * 5 - 2.5}deg)`;
    });
    
    badge.addEventListener('mouseout', () => {
        badge.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Project cards hover effect with glitch
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 0 20px var(--primary-color)';
        
        // Add glitch effect to project title
        const title = card.querySelector('h3');
        title.style.animation = 'glitch 0.3s infinite';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '';
        
        const title = card.querySelector('h3');
        title.style.animation = '';
    });
});

// Cyber scanner effect
const scanner = document.querySelector('.cyber-scanner');
setInterval(() => {
    scanner.style.opacity = Math.random() * 0.5 + 0.1;
}, 1000);

// Initialize animations on page load
window.addEventListener('load', () => {
    typeWriter();
    
    // Add fade-in animation to sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
    });
    
    // Animate sections on scroll
    const observerOptions = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.8s ease-out';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Section animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize section animations
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// Contact Form Submission
function sendEmail(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Create the email body
    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;
    
    // Create the mailto link with pre-filled content
    const mailtoLink = `mailto:rajatlearner2904@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open the user's default email client
    window.location.href = mailtoLink;
    
    // Clear the form
    document.getElementById('contact-form').reset();
    
    return false;
}

// 3D Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg-canvas'),
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Create geometric shapes
const shapes = [];
for (let i = 0; i < 20; i++) {
    const geometry = Math.random() > 0.5 
        ? new THREE.BoxGeometry(1, 1, 1)
        : new THREE.SphereGeometry(0.5, 24, 24);
    
    const material = new THREE.MeshBasicMaterial({
        color: 0x66b3ff,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });
    
    const shape = new THREE.Mesh(geometry, material);
    
    // Random position
    shape.position.x = Math.random() * 40 - 20;
    shape.position.y = Math.random() * 40 - 20;
    shape.position.z = Math.random() * 40 - 20;
    
    // Random rotation
    shape.rotation.x = Math.random() * Math.PI;
    shape.rotation.y = Math.random() * Math.PI;
    
    shapes.push(shape);
    scene.add(shape);
}

camera.position.z = 30;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    shapes.forEach(shape => {
        shape.rotation.x += 0.001;
        shape.rotation.y += 0.001;
    });
    
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start animation
animate(); 