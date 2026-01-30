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
    grid.innerHTML = projects.map(project => {
        let mediaContent = '';

        if (project.iconType === 'giydir') {
            mediaContent = `
                <div class="project-icon-container">
                    <div class="icon-giydir">
                        <div class="t-shirt-shape"><div class="t-shirt-fill"></div></div>
                        <div class="scanner-line"></div>
                    </div>
                </div>
            `;
        } else if (project.iconType === 'melodixor') {
            mediaContent = `
                <div class="project-icon-container">
                    <div class="icon-melodixor">
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                    </div>
                </div>
            `;
        } else if (project.iconType === 'weather') {
            mediaContent = `
                <div class="project-icon-container">
                    <div class="icon-weather">
                        <div class="sun"></div>
                        <div class="cloud"></div>
                        <div class="rain-drop"></div>
                        <div class="rain-drop"></div>
                        <div class="rain-drop"></div>
                    </div>
                </div>
            `;
        } else {
            mediaContent = `<img src="${project.imageUrl}" alt="${project.title}" loading="lazy">`;
        }

        return `
        <div class="portfolio-card" onclick="showProjectDetail('${project.slug}')">
            ${mediaContent}
            <div class="portfolio-card-content">
                <h3>${project.title}</h3>
                <p class="category">${project.category}</p>
            </div>
        </div>
    `}).join('');
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
    grid.innerHTML = technologies.map(tech => {
        let iconHtml = '';

        switch (tech.iconType) {
            case 'react-atom':
                iconHtml = `
                    <div class="tech-icon-container">
                        <div class="tech-react">
                            <div class="react-core"></div>
                            <div class="react-orbit o1"></div>
                            <div class="react-orbit o2"></div>
                            <div class="react-orbit o3"></div>
                        </div>
                    </div>`;
                break;
            case 'flutter-layers':
                iconHtml = `
                    <div class="tech-icon-container">
                        <div class="tech-flutter">
                            <div class="layer l1"></div>
                            <div class="layer l2"></div>
                            <div class="layer l3"></div>
                        </div>
                    </div>`;
                break;
            case 'swift-bird':
                iconHtml = `
                    <div class="tech-icon-container">
                        <div class="tech-swift">
                            <div class="swift-wing"></div>
                            <div class="swift-body"></div>
                        </div>
                    </div>`;
                break;
            case 'kotlin-gear':
                iconHtml = `
                    <div class="tech-icon-container">
                        <div class="tech-kotlin">
                            <div class="gear-tooth"></div>
                            <div class="gear-tooth"></div>
                            <div class="gear-tooth"></div>
                            <div class="gear-tooth"></div>
                            <div class="gear-core"></div>
                        </div>
                    </div>`;
                break;
            case 'node-cluster':
                iconHtml = `
                    <div class="tech-icon-container">
                        <div class="tech-node">
                            <div class="node-center"></div>
                            <div class="node-sat s1"></div>
                            <div class="node-sat s2"></div>
                            <div class="node-sat s3"></div>
                            <div class="node-track"></div>
                        </div>
                    </div>`;
                break;
            case 'firebase-cloud':
                iconHtml = `
                    <div class="tech-icon-container">
                        <div class="tech-firebase">
                            <div class="cloud-base"></div>
                            <div class="sync-dot d1"></div>
                            <div class="sync-dot d2"></div>
                            <div class="sync-arrow"></div>
                        </div>
                    </div>`;
                break;
            case 'ai-brain':
                iconHtml = `
                    <div class="tech-icon-container">
                        <div class="tech-brain">
                            <div class="brain-lobe l1"></div>
                            <div class="brain-lobe l2"></div>
                            <div class="synapse s1"></div>
                            <div class="synapse s2"></div>
                        </div>
                    </div>`;
                break;
            case 'figma-cursor':
                iconHtml = `
                    <div class="tech-icon-container">
                        <div class="tech-figma">
                            <div class="figma-shape"></div>
                            <div class="cursor-pointer"></div>
                        </div>
                    </div>`;
                break;
            default:
                iconHtml = `<span class="icon">💻</span>`;
        }

        return `
        <div class="tech-card">
            ${iconHtml}
            <h3>${tech.name}</h3>
        </div>
    `}).join('');
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
    const keywords = document.getElementById('keywords').value.toLowerCase();

    const output = document.getElementById('ai-output');
    const btn = document.querySelector('.btn-accent');
    const btnText = document.getElementById('generate-btn-text');
    const loader = document.getElementById('ai-loader');
    const logsContainer = document.getElementById('status-logs');
    const addressBar = document.querySelector('.browser-address');
    const t = translations[currentLang].aiTool;

    // Show loading state
    btn.disabled = true;
    btn.classList.add('generating');
    btnText.textContent = t.generating || 'Tasarım Yapılıyor...';
    loader.style.display = 'flex';
    logsContainer.innerHTML = '';

    // Initial address bar reset
    addressBar.textContent = '...';

    const logs = [
        "Analiz ediliyor: " + keywords,
        "Sektör belirlendi, uygun şablon seçiliyor...",
        "Adres doğrulanıyor: www." + projectName.toLowerCase().replace(/\s/g, '-') + ".com",
        "Renk paleti ve tipografi optimize ediliyor...",
        "Dinamik içerikler enjekte ediliyor...",
        "Tasarım final haline getiriliyor..."
    ];

    // Multi-tasking: Address typing + Logs
    const typeAddressPromise = typeAddress(addressBar, `www.${projectName.toLowerCase().replace(/\s/g, '-')}.com/preview`);

    // Status log simulation
    for (let log of logs) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.textContent = '> ' + log;
        logsContainer.appendChild(entry);
        await new Promise(r => setTimeout(r, 600 + Math.random() * 400));
        logsContainer.scrollTop = logsContainer.scrollHeight;
    }

    await typeAddressPromise;
    await new Promise(resolve => setTimeout(resolve, 800));

    // Generate Mockup Structure
    let template = "";
    if (keywords.includes('emlak') || keywords.includes('real estate')) {
        template = getRealEstateTemplate(projectName);
    } else if (keywords.includes('kahve') || keywords.includes('coffee') || keywords.includes('kafe')) {
        template = getCoffeeTemplate(projectName);
    } else if (keywords.includes('spor') || keywords.includes('gym') || keywords.includes('antrenman')) {
        template = getGymTemplate(projectName);
    } else if (keywords.includes('market') || keywords.includes('ticaret') || keywords.includes('shop')) {
        template = getEcommerceTemplate(projectName);
    } else if (keywords.includes('yemek') || keywords.includes('restoran') || keywords.includes('restaurant')) {
        template = getRestaurantTemplate(projectName);
    } else if (keywords.includes('portfolyo') || keywords.includes('portfolio') || keywords.includes('kişisel')) {
        template = getPortfolioTemplate(projectName);
    } else {
        template = getDefaultTemplate(projectName);
    }

    // Show result
    loader.style.display = 'none';
    output.innerHTML = template;
    btn.disabled = false;
    btn.classList.remove('generating');
    btnText.textContent = t.generateButton;

    // Smooth scroll to output
    output.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function typeAddress(element, text) {
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        await new Promise(r => setTimeout(r, 50));
    }
}

function getRealEstateTemplate(name) {
    return `
        <div class="preview-site">
            <nav class="preview-nav">
                <div style="font-weight:bold; color:#2c3e50;">🏡 ${name} Real Estate</div>
                <div style="font-size:0.8rem; display:flex; gap:10px;"><span>İlanlar</span><span>Hakkımızda</span><span>İletişim</span></div>
            </nav>
            <div class="preview-hero" style="background: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80') center/cover;">
                <h1 style="color:white; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size:1.5rem;">Hayalinizdeki Evi Bulun</h1>
                <div style="background:white; padding:10px; margin-top:20px; border-radius:4px; font-size:0.8rem; color:#999; display:inline-block; width:80%;">Şehir, mahalle veya ilan no ile ara...</div>
            </div>
            <div class="preview-grid">
                ${[1, 2, 3].map(i => `
                    <div class="preview-card">
                        <div class="preview-image-box" style="background:#ddd;">🏠 İlan #${i}</div>
                        <p style="font-weight:bold; margin:0;">Modern Villa</p>
                        <p style="font-size:0.75rem; color:#27ae60;">4.500.000 TL</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function getCoffeeTemplate(name) {
    return `
        <div class="preview-site" style="background:#fdfcf0;">
            <nav class="preview-nav" style="background:#3e2723; color:white;">
                <div style="font-weight:bold;">☕ ${name}</div>
                <div style="font-size:0.8rem; display:flex; gap:10px;"><span>Menü</span><span>Hikayemiz</span></div>
            </nav>
            <div class="preview-hero" style="background:#5d4037; color:white; padding:3rem 1rem;">
                <h1 style="font-size:1.4rem;">Günün İlk Kahvesi Mira AI İle</h1>
                <button style="background:#d7ccc8; border:none; padding:8px 15px; margin-top:15px; border-radius:20px; font-size:0.8rem;">Şimdi Sipariş Ver</button>
            </div>
            <div style="padding:1.5rem; display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
                <div class="preview-card" style="text-align:center;">
                    <div style="font-size:2rem;">☕</div>
                    <p style="font-weight:bold;">Espresso</p>
                    <p style="font-size:0.7rem;">Zengin ve yoğun aroma</p>
                </div>
                <div class="preview-card" style="text-align:center;">
                    <div style="font-size:2rem;">🥛</div>
                    <p style="font-weight:bold;">Latte</p>
                    <p style="font-size:0.7rem;">Yumuşak süt köpüğü</p>
                </div>
            </div>
        </div>
    `;
}

function getGymTemplate(name) {
    return `
        <div class="preview-site" style="background:#111; color:white;">
            <div style="padding:1.5rem; text-align:center; background:#ff4444;">
                <h1 style="font-size:1.5rem; font-weight:900;">🔥 ${name.toUpperCase()} CORE</h1>
            </div>
            <div class="preview-hero" style="background: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80') center/cover; height:200px; display:flex; align-items:center; justify-content:center;">
                <div style="background:rgba(0,0,0,0.7); padding:1rem; border-left:4px solid #ff4444;">
                    <p style="margin:0; font-weight:bold;">SINIRLARINI ZORLA</p>
                </div>
            </div>
            <div style="padding:1.5rem;">
                <div style="background:#222; padding:1rem; border-radius:8px; margin-bottom:1rem;">
                    <p style="margin:0; font-size:0.8rem; color:#ff4444;">Popüler Program</p>
                    <p style="margin:5px 0; font-weight:bold;">CrossFit Elite</p>
                    <button style="background:#ff4444; color:white; border:none; width:100%; padding:8px; border-radius:4px; margin-top:10px; font-weight:bold;">KATIL</button>
                </div>
            </div>
        </div>
    `;
}

function getDefaultTemplate(name) {
    return `
        <div class="preview-site">
            <nav class="preview-nav">
                <div style="font-weight:bold;">✨ ${name}</div>
            </nav>
            <div class="preview-hero">
                <h1>Sizin İçin Tasarlandı</h1>
                <p>Modern ve profesyonel arayüz çözümleri.</p>
            </div>
            <div class="preview-grid">
                <div class="preview-card">Özellik 1</div>
                <div class="preview-card">Özellik 2</div>
                <div class="preview-card">Özellik 3</div>
            </div>
        </div>
    `;
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

function getEcommerceTemplate(name) {
    return `
        <div class="preview-site" style="background:#f8f9fa;">
            <nav class="preview-nav" style="border-bottom: 2px solid #000;">
                <div style="font-weight:bold; font-size:1.2rem; letter-spacing:-1px;">🛍️ ${name.toUpperCase()}</div>
                <div style="display:flex; gap:15px; font-size:0.75rem;"><span>Mağaza</span><span>İndirimdekiler</span><span>🛒 (0)</span></div>
            </nav>
            <div class="preview-hero" style="background: #000; color:white; padding:2rem 1rem;">
                <p style="text-transform:uppercase; font-size:0.6rem; color:#aaa; margin-bottom:5px;">Yeni Sezon Geldi</p>
                <h1 style="font-size:1.6rem; margin:0;">STİLİNİZİ KEŞFEDİN</h1>
                <button style="margin-top:15px; background:white; color:black; border:none; padding:8px 20px; font-weight:bold; font-size:0.75rem;">SATIN AL</button>
            </div>
            <div class="preview-grid" style="padding:1rem;">
                ${[1, 2, 3, 4].map(i => `
                    <div class="preview-card" style="border:none; background:white; padding:0;">
                        <div class="preview-image-box" style="background:#eee; height:120px; position:relative;">
                            <span style="position:absolute; top:5px; left:5px; background:black; color:white; font-size:0.5rem; padding:2px 5px;">YENİ</span>
                        </div>
                        <div style="padding:8px;">
                            <p style="font-size:0.75rem; margin:0; color:#555;">Ürün #${i}</p>
                            <p style="font-weight:bold; margin:0; font-size:0.85rem;">249.90 TL</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function getRestaurantTemplate(name) {
    return `
        <div class="preview-site" style="background:#fffaf5;">
            <nav class="preview-nav" style="background:transparent; position:absolute; width:100%; z-index:2; border:none;">
                <div style="font-weight:bold; color:white; font-family:'Playfair Display', serif;">🍴 ${name}</div>
                <div style="color:white; font-size:0.75rem;">Rezervasyon</div>
            </nav>
            <div class="preview-hero" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80') center/cover; height:250px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:white;">
                <h1 style="font-size:1.8rem; font-family:serif;">Eşsiz Lezzet Durağı</h1>
                <p style="font-style:italic; font-size:0.8rem; margin-top:5px;">Geleneksel tatlar, modern dokunuşlar</p>
            </div>
            <div style="padding:1.5rem;">
                <h2 style="font-size:1rem; text-align:center; border-bottom:1px solid #ddd; padding-bottom:10px; margin-bottom:15px;">Şefin Seçimleri</h2>
                <div style="display:grid; gap:10px;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                        <div>
                            <p style="font-weight:bold; margin:0; font-size:0.9rem;">Özel Soslu Makarna</p>
                            <p style="font-size:0.7rem; color:#888; margin:0;">Taze fesleğen ve parmesan ile</p>
                        </div>
                        <div style="font-weight:bold; color:#d4a373;">185TL</div>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                        <div>
                            <p style="font-weight:bold; margin:0; font-size:0.9rem;">Kuzu Tandır</p>
                            <p style="font-size:0.7rem; color:#888; margin:0;">Ağır ateşte 12 saat pişmiş</p>
                        </div>
                        <div style="font-weight:bold; color:#d4a373;">340TL</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getPortfolioTemplate(name) {
    return `
        <div class="preview-site" style="background:#fff;">
            <div style="padding:2rem; text-align:center;">
                <div style="width:80px; height:80px; background:#000; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem; font-size:1.5rem; font-weight:bold;">${name.charAt(0)}</div>
                <h1 style="font-size:1.5rem; font-weight:900; letter-spacing:-1px; margin:0;">${name.toUpperCase()}</h1>
                <p style="font-size:0.85rem; color:#666; margin-top:5px;">UI/UX Tasarımcı & Geliştirici</p>
                <div style="display:flex; justify-content:center; gap:10px; margin-top:15px;">
                    <span style="background:#eee; padding:3px 10px; border-radius:20px; font-size:0.6rem; font-weight:bold;">REACT</span>
                    <span style="background:#eee; padding:3px 10px; border-radius:20px; font-size:0.6rem; font-weight:bold;">FIGMA</span>
                    <span style="background:#eee; padding:3px 10px; border-radius:20px; font-size:0.6rem; font-weight:bold;">NODE.JS</span>
                </div>
            </div>
            <div style="background:#000; color:white; padding:1.5rem;">
                <h2 style="font-size:0.9rem; margin-bottom:1rem; opacity:0.7;">PROJELER</h2>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <div style="background:#1a1a1a; height:100px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.7rem;">Proje A</div>
                    <div style="background:#1a1a1a; height:100px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.7rem;">Proje B</div>
                </div>
            </div>
        </div>
    `;
}

// Background Code Snippets Spawning Logic
function createCodeSnippet() {
    if (!codeSnippets || codeSnippets.length === 0) return;

    const snippet = document.createElement('div');
    snippet.className = 'code-snippet';

    // Pick random snippet
    const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    snippet.innerText = text;

    // Random position
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight + (window.innerHeight * 0.5); // Start slightly lower

    snippet.style.left = `${posX}px`;
    snippet.style.top = `${posY}px`;

    // Random font size and opacity variation
    const size = 0.6 + Math.random() * 0.5;
    snippet.style.fontSize = `${size}rem`;

    // Random animation duration for variety
    const duration = 10 + Math.random() * 10;
    snippet.style.animationDuration = `4s, ${duration}s`;

    document.body.appendChild(snippet);

    // Clean up after animation finishes
    setTimeout(() => {
        snippet.remove();
    }, duration * 1000);
}

// 3D Tilt Effect Logic
function init3DTilt() {
    const cards = document.querySelectorAll('.bento-card, .portfolio-card, .tech-card, .team-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });
}

// Update Language Switcher to Re-bind Listeners
const originalSwitchLanguage = switchLanguage;
switchLanguage = function (lang) {
    originalSwitchLanguage(lang);
    setTimeout(() => {
        init3DTilt();
    }, 100);
};

// Final Initialization
initCodeSnippets();
init3DTilt();
document.getElementById('ai-form').addEventListener('submit', (e) => {
    // Re-bind Tilt after AI generation rendering
    setTimeout(init3DTilt, 3500);
});
