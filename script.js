// Global State
let currentLang = 'tr';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initialize language
    updateLanguage();

    // Render dynamic content
    renderPortfolio();
    renderTechStack();
    renderTeam();

    // Setup event listeners
    setupEventListeners();

    // Setup smooth scrolling
    setupSmoothScroll();

    // Setup header scroll effect
    setupHeaderScroll();

    // Start Timeline Animation
    startTimelineAnimation();

    // Start Code Editor Animation
    startCodeTypewriter();
}

function setupEventListeners() {
    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    document.getElementById('lang-toggle-mobile').addEventListener('click', toggleLanguage);

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    mobileMenuBtn.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.remove('active');
            document.getElementById('mobile-menu-btn').classList.remove('active');
        });
    });

    // AI Form
    document.getElementById('ai-form').addEventListener('submit', handleAIFormSubmit);
}

function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getNestedValue(t, key);
        if (value) {
            if (key === 'hero.title') {
                typeWriter(element, value);
            } else {
                element.textContent = value;
            }
        }
    });

    // Update language icons
    const icon = currentLang === 'tr' ? '🇬🇧' : '🇹🇷';
    document.getElementById('lang-icon').textContent = icon;
    document.getElementById('lang-icon-mobile').textContent = icon;

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;

    // Re-render team to update roles
    renderTeam();
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('active');
}

function setupSmoothScroll() {
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
}

function setupHeaderScroll() {
    let lastScroll = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 10) {
            header.style.background = 'hsla(222.2, 84%, 4.9%, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'hsla(222.2, 84%, 4.9%, 0.8)';
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = projects.map(project => `
        <div class="portfolio-card" onclick="showProjectDetail('${project.slug}')">
            <img src="${project.imageUrl}" alt="${project.title}" loading="lazy">
            <div class="portfolio-card-content">
                <h3>${project.title}</h3>
                <p class="category">${project.category}</p>
            </div>
        </div>
    `).join('');
}

function showProjectDetail(slug) {
    const project = projects.find(p => p.slug === slug);
    if (!project) return;

    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.9);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        overflow-y: auto;
    `;

    modal.innerHTML = `
        <div style="max-width: 1000px; width: 100%; background: hsl(var(--card)); border-radius: var(--radius); padding: 2rem; position: relative;">
            <button onclick="this.closest('[style*=fixed]').remove()" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; color: hsl(var(--foreground)); font-size: 2rem; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-center; border-radius: 50%; transition: background 0.3s;" onmouseover="this.style.background='hsl(var(--muted))'" onmouseout="this.style.background='none'">×</button>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
                <div>
                    <h1 style="font-size: 2.5rem; color: hsl(var(--primary)); margin-bottom: 1rem; font-family: 'Space Grotesk', sans-serif;">${project.title}</h1>
                    <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">${project.category}</p>
                    <p style="line-height: 1.8; color: hsla(var(--foreground), 0.9);">${project.description}</p>
                </div>
                <div>
                    <img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; border-radius: var(--radius); aspect-ratio: 9/16; object-fit: cover;">
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function renderTechStack() {
    const grid = document.getElementById('tech-grid');
    grid.innerHTML = technologies.map(tech => `
        <div class="tech-card">
            <span class="icon">${tech.icon}</span>
            <h3>${tech.name}</h3>
        </div>
    `).join('');
}

function renderTeam() {
    const grid = document.getElementById('team-grid');
    const t = translations[currentLang].team;

    grid.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <div class="team-avatar">${member.initials}</div>
            <h3>${member.name}</h3>
            <p class="title">${t.titles[member.titleKey]}</p>
            <p class="role">${t.roles[member.roleKey]}</p>
        </div>
    `).join('');
}

async function handleAIFormSubmit(e) {
    e.preventDefault();

    const projectName = document.getElementById('project-name').value;
    const techStack = document.getElementById('tech-stack-input').value;
    const keywords = document.getElementById('keywords').value;

    const output = document.getElementById('ai-output');
    const btnText = document.getElementById('generate-btn-text');
    const t = translations[currentLang].aiTool;

    // Show loading state
    btnText.textContent = t.generating;
    output.innerHTML = '<div class="spinner"></div>';
    output.classList.add('loading');

    // Simulate AI generation (2 seconds delay)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate description
    const description = generateDescription(projectName, techStack, keywords);

    // Show result
    output.classList.remove('loading');
    output.innerHTML = `<p>${description}</p>`;
    btnText.textContent = t.generateButton;
}

function generateDescription(projectName, techStack, keywords) {
    const templates = [
        `${projectName}, kullanıcıların ihtiyaçlarını karşılamak için tasarlanmış yenilikçi bir mobil uygulamadır. ${techStack} teknolojileri kullanılarak geliştirilmiş olan uygulama, ${keywords} özellikleriyle öne çıkar. Modern ve kullanıcı dostu arayüzü sayesinde, kullanıcılar sorunsuz bir deneyim yaşar. Uygulama, yüksek performans ve güvenilirlik sunarak, kullanıcıların günlük hayatlarını kolaylaştırmayı amaçlar.`,

        `${projectName} is an innovative mobile application designed to meet users' needs. Developed using ${techStack} technologies, the app stands out with its ${keywords} features. Thanks to its modern and user-friendly interface, users experience a seamless journey. The application aims to simplify users' daily lives by offering high performance and reliability.`,

        `${projectName} represents the future of mobile applications. Built with cutting-edge ${techStack} technologies, it delivers ${keywords} experiences that users love. Our team has crafted every detail to ensure maximum user satisfaction and engagement. The app combines powerful functionality with elegant design, making it a must-have tool for modern users.`
    ];

    // Select random template
    return templates[Math.floor(Math.random() * templates.length)];
}

// Add fade-in animation to sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Typewriter Effect
// Rotating Typewriter Effect
let typewriterTimeout;

function typeWriter(element, textOrArray) {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);

    // Handle simple string
    if (typeof textOrArray === 'string') {
        element.textContent = '';
        element.classList.add('typewriter-cursor');
        let i = 0;
        function type() {
            if (i < textOrArray.length) {
                element.textContent += textOrArray.charAt(i);
                i++;
                typewriterTimeout = setTimeout(type, 100);
            }
        }
        type();
        return;
    }

    // Handle array of strings (Rotation)
    if (Array.isArray(textOrArray)) {
        element.classList.add('typewriter-cursor');
        let arrayIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let txt = '';

        function typeLoop() {
            const currentFullText = textOrArray[arrayIndex];

            if (isDeleting) {
                txt = currentFullText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                txt = currentFullText.substring(0, charIndex + 1);
                charIndex++;
            }

            element.textContent = txt;

            let typeSpeed = 100;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && charIndex === currentFullText.length) {
                // Completed typing
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Completed deleting
                isDeleting = false;
                arrayIndex = (arrayIndex + 1) % textOrArray.length;
                typeSpeed = 500;
            }

            typewriterTimeout = setTimeout(typeLoop, typeSpeed);
        }

        typeLoop();
    }
}

// Timeline Animation
function startTimelineAnimation() {
    const steps = document.querySelectorAll('.timeline-step');
    let activeIndex = 0;

    // Initialize: remove active from all first (optional, but good for reset)
    steps.forEach(step => step.classList.remove('active'));
    steps[0].classList.add('active');

    setInterval(() => {
        // Remove active from all
        steps.forEach(step => step.classList.remove('active'));

        // Add active to current
        activeIndex = (activeIndex + 1) % steps.length;
        steps[activeIndex].classList.add('active');

    }, 2000); // Change every 2 seconds
}

// Code Editor Typewriter
function startCodeTypewriter() {
    const codeContainer = document.getElementById('code-editor');
    if (!codeContainer) return;

    const tokens = [
        { text: 'const', class: 'keyword' },
        { text: ' ' },
        { text: 'analyzeData', class: 'function' },
        { text: ' = ', class: 'operator' }, // Added operator class if needed, or just text
        { text: 'async', class: 'keyword' },
        { text: ' (' },
        { text: 'data', class: 'param' },
        { text: ') => {\n    ' },
        { text: 'const', class: 'keyword' },
        { text: ' ' },
        { text: 'result', class: 'variable' },
        { text: ' = ', class: 'operator' },
        { text: 'await', class: 'keyword' },
        { text: ' ' },
        { text: 'processAI', class: 'function' },
        { text: '(' },
        { text: 'data', class: 'param' },
        { text: ');\n    ' },
        { text: 'return', class: 'keyword' },
        { text: ' ' },
        { text: 'result', class: 'variable' },
        { text: '.' },
        { text: 'insights', class: 'property' },
        { text: ';\n};' }
    ];

    let tokenIndex = 0;
    let charIndex = 0;

    // Create cursor
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    codeContainer.appendChild(cursor);

    function typeToken() {
        if (tokenIndex >= tokens.length) {
            // Loop animation after delay
            setTimeout(() => {
                codeContainer.innerHTML = '';
                codeContainer.appendChild(cursor);
                tokenIndex = 0;
                charIndex = 0;
                typeToken();
            }, 5000);
            return;
        }

        const currentToken = tokens[tokenIndex];

        // Put text directly into container or wrapped in span
        // But we want to preserve the span for the WHOLE token while typing chars? 
        // Better: Create the span for the current token if not exists, then append chars.

        let currentSpan = codeContainer.querySelector(`span[data-token-index="${tokenIndex}"]`);

        if (!currentSpan) {
            if (currentToken.class) {
                currentSpan = document.createElement('span');
                currentSpan.className = currentToken.class;
            } else {
                currentSpan = document.createTextNode('');
                // TextNodes don't have attributes, so we need a wrapper if we want to track it easily,
                // or just keep reference in a variable.
                // Simpler: perform the lookahead or just stick to a "current element" variable.
            }

            // If it's a styled span, enclose it. If it's plain text, we can use a span without class or text node.
            // Let's use spans for everything to make it uniform, or text nodes.
            // Actually, inserting before the cursor.

            if (currentToken.class) {
                currentSpan.setAttribute('data-token-index', tokenIndex);
                codeContainer.insertBefore(currentSpan, cursor);
            } else {
                // For plain text, we can just append text to a "plain" span or directly.
                // Let's use a span for plain text too for simplicity of reference.
                currentSpan = document.createElement('span');
                currentSpan.setAttribute('data-token-index', tokenIndex);
                codeContainer.insertBefore(currentSpan, cursor);
            }
        }

        // Now append one char
        const char = currentToken.text[charIndex];
        currentSpan.textContent += char;
        charIndex++;

        if (charIndex < currentToken.text.length) {
            setTimeout(typeToken, 30 + Math.random() * 50); // Random typing speed
        } else {
            // Token finished
            charIndex = 0;
            tokenIndex++;
            setTimeout(typeToken, 30 + Math.random() * 50);
        }
    }

    typeToken();
}
