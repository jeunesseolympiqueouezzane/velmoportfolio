// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Initialize portfolio functionality
    initializePortfolio();
});

// Portfolio Project Data with actual image filenames
const projectImages = {
    'websites-developed': [], // No images, just links
    'luna-memecoin': [
        'WhatsApp Image 2025-08-21 à 05.39.01_186f7215.jpg',
        'WhatsApp Image 2025-08-21 à 05.39.01_30646f1e.jpg',
        'WhatsApp Image 2025-08-21 à 05.39.01_be6a0d3f.jpg',
        'WhatsApp Image 2025-08-21 à 05.39.02_28665183.jpg',
        'WhatsApp Image 2025-08-21 à 05.39.02_771d2c6f.jpg',
        'WhatsApp Image 2025-08-21 à 05.39.02_a13ed0af.jpg',
        'WhatsApp Image 2025-08-21 à 05.39.03_10cc72c0.jpg',
        'WhatsApp Image 2025-08-21 à 05.39.03_259a2199.jpg',
        'WhatsApp Image 2025-08-21 à 05.39.03_9891c2ed.jpg'
    ],
    'hypnotic-chameleons': [
        'WhatsApp Image 2025-08-21 à 05.40.57_00f14e32.jpg',
        'WhatsApp Image 2025-08-21 à 05.40.57_01f55f9d.jpg',
        'WhatsApp Image 2025-08-21 à 05.40.57_1eb3d67c.jpg',
        'WhatsApp Image 2025-08-21 à 05.40.57_4a8cc946.jpg',
        'WhatsApp Image 2025-08-21 à 05.40.57_6628fce5.jpg',
        'WhatsApp Image 2025-08-21 à 05.40.57_8d5f6050.jpg',
        'WhatsApp Image 2025-08-21 à 05.40.57_dcea6b1a.jpg'
    ],
    'trumpio-ladio': [
        'WhatsApp Image 2025-08-21 à 06.36.55_7f23e124.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.55_8a675499.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.56_086a64f8.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.56_1e68daa4.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.56_3cb51517.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.56_ad5b9ca0.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.56_b0ab3da7.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.56_e8589a3a.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.56_ffadd926.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.57_7870f06f.jpg',
        'WhatsApp Image 2025-08-21 à 06.36.57_7b4ab2d5.jpg'
    ],
    'sugarcane-memecoin': [
        'WhatsApp Image 2025-08-21 à 07.06.37_bfb94736.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.38_391ed3fc.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.38_3ddd4851.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.38_3fac0ea7.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.38_ad94cffa.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.38_dc2993c6.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.39_02eb6100.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.39_05a7cab9.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.39_12ed34f7.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.39_8191f42c.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.39_c84fcab5.jpg',
        'WhatsApp Image 2025-08-21 à 07.06.39_d5286205.jpg'
    ],
    'tilly-memecoin': [
        'WhatsApp Image 2025-08-21 à 07.07.14_306a7626.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.14_3578df61.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.14_75ef8e87.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.14_b0ff54c5.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.14_fe387a03.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.15_08d7cdd5.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.15_16cec7e0.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.15_436c3aad.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.15_4e425b8b.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.15_8443f204.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.15_ad05ed95.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.15_bad23db4.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.15_c5169a1e.jpg',
        'WhatsApp Image 2025-08-21 à 07.07.15_ff2f1b8c.jpg'
    ],
    'random-arts': [
        'WhatsApp Image 2025-08-21 à 07.21.04_00538c71.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.04_2656a916.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.04_7ceab4f3.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.04_a088abaf.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.05_16c1d5e3.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.05_519a12d5.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.05_5a062a17.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.05_7ae53e75.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.05_9802340b.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.05_a3766aee.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.05_db33450a.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.05_fc4a72c8.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.06_16a0750e.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.06_1f0e6ef3.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.06_2e5be975.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.06_39f9bd7e.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.06_43da8732.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.06_bb13d884.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.06_ddfe436c.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.06_e838ec9c.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.07_0526e763.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.07_27689e24.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.07_27c70ab1.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.07_2eb1bfc2.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.07_6958e732.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.07_7c592885.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.07_f7105835.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.08_23bec1e5.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.08_bf96c6ce.jpg',
        'WhatsApp Image 2025-08-21 à 07.21.08_e867f3f6.jpg'
    ]
};

// Portfolio Project Data
const projectData = {
    'websites-developed': {
        title: 'Websites Developed',
        items: [
            {
                name: 'Meobet',
                url: 'http://www.meobet.xyz',
                description: 'Crypto Betting Platform'
            },
            {
                name: 'Meowbet',
                url: 'https://meowbet.vercel.app/',
                description: 'Web3 Casino Platform'
            },
            {
                name: 'ByenanceCZ',
                url: 'https://www.byenancecz.xyz/',
                description: 'Crypto Exchange Landing Page'
            }
        ]
    },
    'luna-memecoin': {
        title: 'Luna Memecoin Collection',
        items: []
    },
    'hypnotic-chameleons': {
        title: 'Hypnotic Chameleons NFT Collection',
        items: []
    },
    'trumpio-ladio': {
        title: 'Trumpio Ladio Memecoin',
        items: []
    },
    'sugarcane-memecoin': {
        title: 'SugarCane Memecoin',
        items: []
    },
    'tilly-memecoin': {
        title: 'Tilly Memecoin',
        items: []
    },
    'random-arts': {
        title: 'Random NFTs + Memecoins Arts',
        items: []
    }
};

function initializePortfolio() {
    const projectFolders = document.querySelectorAll('.project-folder');
    const portfolioFolders = document.getElementById('portfolio-folders');
    const projectGallery = document.getElementById('project-gallery');
    const backBtn = document.getElementById('back-btn');
    const projectTitle = document.getElementById('project-title');
    const galleryGrid = document.getElementById('gallery-grid');

    // Add click handlers to project folders
    projectFolders.forEach(folder => {
        folder.addEventListener('click', function() {
            const projectId = this.dataset.project;
            showProjectGallery(projectId);
        });
    });

    // Back button handler
    backBtn.addEventListener('click', function() {
        showPortfolioFolders();
    });

    function showProjectGallery(projectId) {
        const project = projectData[projectId];
        if (!project) return;

        // Hide folders, show gallery
        portfolioFolders.style.display = 'none';
        projectGallery.style.display = 'block';

        // Update title
        projectTitle.textContent = project.title;


        // Special handling for websites-developed
        if (projectId === 'websites-developed') {
            galleryGrid.innerHTML = '';
            const websites = projectData['websites-developed'].items;
            websites.forEach(site => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.innerHTML = `
                    <div class="website-example">
                        <h4 style="margin-bottom: 0.5rem;">${site.name}</h4>
                        <a href="${site.url}" target="_blank" style="color:#3b82f6;word-break:break-all;">${site.url}</a>
                        <p style="color:#94a3b8; margin-top:0.5rem;">${site.description}</p>
                    </div>
                `;
                galleryGrid.appendChild(div);
            });
        } else {
            // Generate gallery items - only show items that have actual images
            galleryGrid.innerHTML = '';
            const projectImageList = projectImages[projectId];
            if (projectImageList && projectImageList.length > 0) {
                projectImageList.forEach((imageName, index) => {
                    const galleryItem = createImageGalleryItem(imageName, index, projectId);
                    galleryGrid.appendChild(galleryItem);
                });
            } else {
                // Fallback: show placeholder message if no images
                galleryGrid.innerHTML = '<p style="color: #94a3b8; text-align: center; grid-column: 1 / -1;">No images available for this project yet.</p>';
            }
        }

        // Scroll to gallery
        projectGallery.scrollIntoView({ behavior: 'smooth' });
    }

    function showPortfolioFolders() {
        portfolioFolders.style.display = 'grid';
        projectGallery.style.display = 'none';
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }

    function createImageGalleryItem(imageName, index, projectId) {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.style.animationDelay = `${index * 0.1}s`;
        


    // Use new folder names with dashes
    let folderName = projectId;
    if (projectId === 'luna-memecoin') folderName = 'luna-memecoin';
    if (projectId === 'hypnotic-chameleons') folderName = 'hypnotic-chameleons';
    if (projectId === 'trumpio-ladio') folderName = 'trumpio-ladio';
    if (projectId === 'sugarcane-memecoin') folderName = 'sugarcane-memecoin';
    if (projectId === 'tilly-memecoin') folderName = 'tilly-memecoin';
    if (projectId === 'random-arts') folderName = 'random-nfts-memecoins-arts';

    const imagePath = `img/${folderName}/${imageName}`;

        div.innerHTML = `
            <div class="gallery-image">
                <img src="${imagePath}" alt="Project Image ${index + 1}" class="gallery-img" 
                     onerror="this.parentElement.parentElement.style.display='none';">
            </div>
        `;

        // Add click handler to view full image
        const img = div.querySelector('.gallery-img');
        img.addEventListener('click', function() {
            openImageModal(this.src, `Project Image ${index + 1}`);
        });

        return div;
    }

    function createGalleryItem(item, index, projectId) {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.style.animationDelay = `${index * 0.1}s`;
        
        // Check if we have actual images for this project
        const projectImageList = projectImages[projectId];
        let imagePath = null;
        
        if (projectImageList && projectImageList[index]) {
            imagePath = `img/${projectId}/${projectImageList[index]}`;
        }
        
        div.innerHTML = `
            <div class="gallery-image">
                ${imagePath ? 
                    `<img src="${imagePath}" alt="${item.name}" class="gallery-img" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" 
                         onload="this.nextElementSibling.style.display='none';">` : ''}
                <div class="gallery-placeholder" style="${imagePath ? 'display: none;' : 'display: flex;'}">
                    <i class="${item.icon}"></i>
                </div>
            </div>
            <div class="gallery-info">
                <h4>${item.name}</h4>
                <p>${item.type}</p>
            </div>
        `;

        // Add click handler to view full image
        if (imagePath) {
            const img = div.querySelector('.gallery-img');
            if (img) {
                img.addEventListener('click', function() {
                    if (this.style.display !== 'none') {
                        openImageModal(this.src, item.name);
                    }
                });
            }
        }

        return div;
    }

    // Image modal functionality
    function openImageModal(imageSrc, imageName) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('image-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'image-modal';
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <img class="modal-image" alt="">
                    <div class="modal-caption"></div>
                </div>
            `;
            document.body.appendChild(modal);

            // Close modal handlers
            const closeBtn = modal.querySelector('.modal-close');
            closeBtn.addEventListener('click', () => modal.style.display = 'none');
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.style.display = 'none';
            });
        }

        // Show modal with image
        const modalImg = modal.querySelector('.modal-image');
        const modalCaption = modal.querySelector('.modal-caption');
        modalImg.src = imageSrc;
        modalCaption.textContent = imageName;
        modal.style.display = 'block';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 20, 25, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 20, 25, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.nft-card, .memecoin-card');
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.8s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nft-card, .memecoin-card {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease-out;
    }
    
    .nft-card.animate-in, .memecoin-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Parallax effect for floating elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.floating-card');
    
    parallax.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    this.reset();
});

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 20);
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector('.about');
const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counterObserver.observe(aboutSection);

// Add hover effects for NFT cards
document.querySelectorAll('.nft-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Add glitch effect to logo on hover
document.querySelector('.logo-text').addEventListener('mouseenter', function() {
    this.style.animation = 'glitch 0.5s ease-in-out';
});

document.querySelector('.logo-text').addEventListener('animationend', function() {
    this.style.animation = '';
});

// Add glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(glitchStyle);
