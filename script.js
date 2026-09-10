// Global State
let currentLang = 'tr';

// Security Helper: HTML Sanitization against DOM XSS
function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Initialize language & theme
    updateLanguage();
    initThemeSwitcher();

    // Render dynamic content
    renderPortfolio('all');
    renderTechStack();
    renderTeam();

    // Setup event listeners & interactive features
    setupEventListeners();
    initPortfolioFilter();
    initCodeRunner();

    // Setup smooth scrolling, progress & ambient glow
    setupSmoothScroll();
    initScrollProgress();
    initAmbientGlow();

    // Setup header scroll effect
    setupHeaderScroll();

    // Start Timeline Animation
    startTimelineAnimation();

    // Start Code Editor Animation
    startCodeTypewriter();

    // 🌟 Start Hero Particle Network
    initParticleCanvas();
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
                startPhraseRotator(element, value);
            } else {
                element.textContent = value;
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const value = getNestedValue(t, key);
        if (value) {
            element.placeholder = value;
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

    // Re-initialize 3D tilt
    init3DTilt();
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
            header.style.background = 'hsla(var(--background), 0.85)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.webkitBackdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        } else {
            header.style.background = 'hsla(var(--background), 0.6)';
            header.style.boxShadow = 'none';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }

        lastScroll = currentScroll;
    });
}

function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    const filtered = projects.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'ai') return project.category.toLowerCase().includes('yapay zeka') || project.category.toLowerCase().includes('ai');
        if (filter === 'mobile') return true; // all 3 are mobile apps
        return true;
    });

    grid.innerHTML = filtered.map(project => {
        let mediaContent = '';

        if (project.iconType === 'aguvi') {
            mediaContent = `
                <div class="project-icon-container project-icon-aguvi">
                    <div class="icon-aguvi">
                        <div class="baby-cradle">
                            <div class="cradle-arc"></div>
                            <div class="cradle-mattress"></div>
                            <div class="mobile-star s1">★</div>
                            <div class="mobile-star s2">✦</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (project.iconType === 'shoplive') {
            mediaContent = `
                <div class="project-icon-container project-icon-shoplive">
                    <div class="icon-shoplive">
                        <div class="live-stream-badge"><span class="live-dot"></span>LIVE</div>
                        <div class="bag-body">
                            <div class="bag-handle"></div>
                            <div class="bag-tag">⚡</div>
                        </div>
                        <div class="floating-heart h1">♥</div>
                        <div class="floating-heart h2">♥</div>
                    </div>
                </div>
            `;
        } else if (project.iconType === 'kent21') {
            mediaContent = `
                <div class="project-icon-container project-icon-kent21">
                    <div class="icon-kent21">
                        <div class="city-beacon">
                            <div class="beacon-wave w1"></div>
                            <div class="beacon-wave w2"></div>
                            <div class="city-pin">
                                <div class="pin-inner"></div>
                            </div>
                        </div>
                        <div class="city-skyline"></div>
                    </div>
                </div>
            `;
        } else if (project.iconType === 'kundir') {
            mediaContent = `
                <div class="project-icon-container project-icon-kundir">
                    <div class="icon-kundir">
                        <div class="ai-chat-bubble">
                            <div class="chat-dot cd1"></div>
                            <div class="chat-dot cd2"></div>
                            <div class="chat-dot cd3"></div>
                            <div class="chat-sparkle">✦</div>
                        </div>
                    </div>
                </div>
            `;
        } else if (project.iconType === 'nn') {
            mediaContent = `
                <div class="project-icon-container project-icon-nn">
                    <div class="icon-nn">
                        <div class="passcode-ring">
                            <div class="ring-lock"></div>
                            <div class="ring-pulse"></div>
                            <div class="ring-glow"></div>
                        </div>
                    </div>
                </div>
            `;
        } else if (project.iconType === 'giydir') {
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
            mediaContent = `
                <div class="portfolio-image-wrapper">
                    <img src="${project.imageUrl}" alt="${project.title}" loading="lazy">
                </div>
            `;
        }

        const shortDesc = escapeHTML(project.shortDescription || project.description.substring(0, 110) + '...');

        return `
        <div class="portfolio-card">
            ${mediaContent}
            <div class="portfolio-card-content">
                <span class="category">${escapeHTML(project.category)}</span>
                <h3>${escapeHTML(project.title)}</h3>
                <p class="project-summary">${shortDesc}</p>
            </div>
        </div>
    `}).join('');
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
            <h3>${escapeHTML(tech.name)}</h3>
        </div>
    `}).join('');
}

function renderTeam() {
    const grid = document.getElementById('team-grid');
    if (!grid) return;
    const t = translations[currentLang].team;

    // Elegant vector avatars tailored by gender & role
    const getAvatarIcon = (gender) => {
        if (gender === 'female') {
            // Sleek female tech/creative avatar icon with glowing holographic visor
            return `
                <svg viewBox="0 0 100 100" class="team-avatar-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="url(#female-glow-grad)" stroke="url(#female-border-grad)" stroke-width="2"/>
                    <!-- Hair Back/Flow -->
                    <path d="M30 42C30 25 40 18 50 18C60 18 70 25 70 42C70 54 68 62 67 66C63 56 61 54 61 54C61 54 39 54 39 54C39 54 37 56 33 66C32 62 30 54 30 42Z" fill="#F472B6" fill-opacity="0.3"/>
                    <!-- Head & Face -->
                    <ellipse cx="50" cy="42" rx="14" ry="17" fill="#FCE7F3"/>
                    <!-- Hair Front Styling -->
                    <path d="M34 38C34 26 41 20 50 20C59 20 66 26 66 38C66 32 62 25 50 25C38 25 34 32 34 38Z" fill="#EC4899"/>
                    <path d="M34 38C37 32 44 30 50 33C56 30 63 32 66 38C63 35 57 34 50 36C43 34 37 35 34 38Z" fill="#BE185D"/>
                    <!-- Tech Visor / Glasses Accent -->
                    <rect x="39" y="38" width="22" height="7" rx="3.5" fill="#38BDF8" fill-opacity="0.75"/>
                    <line x1="41" y1="41.5" x2="59" y2="41.5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/>
                    <!-- Neck -->
                    <rect x="46" y="56" width="8" height="9" rx="3" fill="#FBCFE8"/>
                    <!-- Shoulders / Cyber Suit -->
                    <path d="M25 84C25 71 36 63 50 63C64 63 75 71 75 84V86H25V84Z" fill="url(#suit-female-grad)"/>
                    <path d="M42 63L50 72L58 63" stroke="#F472B6" stroke-width="2" stroke-linecap="round"/>
                    <!-- Tech Neon Accents -->
                    <circle cx="50" cy="76" r="2.5" fill="#38BDF8"/>
                    <defs>
                        <radialGradient id="female-glow-grad" cx="50%" cy="40%" r="60%">
                            <stop offset="0%" stop-color="#831843" stop-opacity="0.6"/>
                            <stop offset="100%" stop-color="#0F172A" stop-opacity="0.95"/>
                        </radialGradient>
                        <linearGradient id="female-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#F472B6"/>
                            <stop offset="100%" stop-color="#6366F1"/>
                        </linearGradient>
                        <linearGradient id="suit-female-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#831843"/>
                            <stop offset="50%" stop-color="#4C1D95"/>
                            <stop offset="100%" stop-color="#1E1B4B"/>
                        </linearGradient>
                    </defs>
                </svg>
            `;
        } else {
            // Sleek male tech/developer avatar icon with cyber developer glasses
            return `
                <svg viewBox="0 0 100 100" class="team-avatar-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="url(#male-glow-grad)" stroke="url(#male-border-grad)" stroke-width="2"/>
                    <!-- Short Modern Tech Hair Cut -->
                    <path d="M33 38C33 24 41 18 50 18C59 18 67 24 67 38C67 33 65 24 50 24C35 24 33 33 33 38Z" fill="#38BDF8"/>
                    <path d="M32 37C32 23 40 17 50 17C60 17 68 23 68 37C64 26 56 22 50 22C44 22 36 26 32 37Z" fill="#0284C7"/>
                    <!-- Head & Face -->
                    <ellipse cx="50" cy="42" rx="14.5" ry="16.5" fill="#E0F2FE"/>
                    <!-- Tech Cyber Glasses -->
                    <rect x="37" y="37" width="26" height="8" rx="3" fill="#0369A1" fill-opacity="0.85"/>
                    <line x1="39" y1="41" x2="61" y2="41" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round"/>
                    <circle cx="43" cy="41" r="1.5" fill="#FFFFFF"/>
                    <circle cx="57" cy="41" r="1.5" fill="#FFFFFF"/>
                    <!-- Neck -->
                    <rect x="46" y="56" width="8" height="9" rx="3" fill="#BAE6FD"/>
                    <!-- Shoulders / Cyber Suit -->
                    <path d="M23 84C23 70 35 63 50 63C65 63 77 70 77 84V86H23V84Z" fill="url(#suit-male-grad)"/>
                    <path d="M40 63L50 74L60 63" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
                    <!-- Developer Console Code Mark < > -->
                    <path d="M46 79L43 81L46 83" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M54 79L57 81L54 83" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                        <radialGradient id="male-glow-grad" cx="50%" cy="40%" r="60%">
                            <stop offset="0%" stop-color="#0369A1" stop-opacity="0.6"/>
                            <stop offset="100%" stop-color="#020617" stop-opacity="0.95"/>
                        </radialGradient>
                        <linearGradient id="male-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#38BDF8"/>
                            <stop offset="100%" stop-color="#6366F1"/>
                        </linearGradient>
                        <linearGradient id="suit-male-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#0369A1"/>
                            <stop offset="50%" stop-color="#1E1B4B"/>
                            <stop offset="100%" stop-color="#090D16"/>
                        </linearGradient>
                    </defs>
                </svg>
            `;
        }
    };

    grid.innerHTML = teamMembers.map(member => {
        const safeName = escapeHTML(member.name);
        const initials = escapeHTML(member.initials || member.name.substring(0, 2).toUpperCase());
        const gender = member.gender || 'male';
        const genderIcon = getAvatarIcon(gender);
        const badgeLabel = member.badge ? `<span class="team-badge team-badge-${gender}">${escapeHTML(member.badge)}</span>` : '';

        return `
        <div class="team-card team-card-${gender}">
            <div class="team-avatar-wrapper">
                <div class="team-avatar-halo" aria-hidden="true"></div>
                <div class="team-avatar">
                    ${genderIcon}
                </div>
            </div>
            ${badgeLabel}
            <h3>${safeName}</h3>
            <p class="title">${t.titles[member.titleKey] || ''}</p>
            <p class="role">${t.roles[member.roleKey] || ''}</p>
        </div>
        `;
    }).join('');
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

// ============================================================
// 🌟 Hero Living Particle & Constellation Engine
// ============================================================
function initParticleCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const heroSection = document.getElementById('hero');

    const CONFIG = {
        count: 105,
        maxDist: 165,
        mouseRadius: 180,
        colors: [
            { r: 56,  g: 189, b: 248 }, // Sky Cyan
            { r: 99,  g: 102, b: 241 }, // Electric Indigo
            { r: 168, g: 85,  b: 247 }, // Violet Accent
            { r: 224, g: 242, b: 254 }  // Ice Glow White
        ]
    };

    let W = 0, H = 0, particles = [];
    let mouse = { x: -9999, y: -9999, active: false };

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = Math.max(window.innerHeight, heroSection ? heroSection.offsetHeight : 700);
    }
    resize();
    window.addEventListener('resize', () => {
        resize();
        build();
    });

    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        });

        heroSection.addEventListener('mouseleave', () => {
            mouse.x = -9999;
            mouse.y = -9999;
            mouse.active = false;
        });

        heroSection.addEventListener('touchmove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const t = e.touches[0];
            mouse.x = t.clientX - rect.left;
            mouse.y = t.clientY - rect.top;
            mouse.active = true;
        }, { passive: true });

        heroSection.addEventListener('touchend', () => {
            mouse.x = -9999;
            mouse.y = -9999;
            mouse.active = false;
        });
    }

    function build() {
        particles = [];
        for (let i = 0; i < CONFIG.count; i++) {
            const col = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
            const speed = 0.25 + Math.random() * 0.55;
            const angle = Math.random() * Math.PI * 2;
            particles.push({
                x: Math.random() * W,
                y: Math.random() * H,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                baseR: 1.8 + Math.random() * 2.4,
                color: col,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.03
            });
        }
    }
    build();

    function draw() {
        ctx.clearRect(0, 0, W, H);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            // Subtle mouse gravity/repulsion
            if (mouse.active) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const distM = Math.sqrt(dx * dx + dy * dy);
                if (distM < CONFIG.mouseRadius && distM > 0) {
                    const force = (CONFIG.mouseRadius - distM) / CONFIG.mouseRadius;
                    p.vx += (dx / distM) * force * 0.04;
                    p.vy += (dy / distM) * force * 0.04;

                    // Draw direct laser connection from particle to cursor
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${force * 0.45})`;
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                }
            }

            p.vx *= 0.992;
            p.vy *= 0.992;
            p.x += p.vx;
            p.y += p.vy;

            // Wrap edges
            if (p.x < -20) p.x = W + 20;
            if (p.x > W + 20) p.x = -20;
            if (p.y < -20) p.y = H + 20;
            if (p.y > H + 20) p.y = -20;

            // Pulse animation
            p.pulse += p.pulseSpeed;
            const alpha = 0.6 + 0.35 * Math.sin(p.pulse);
            const radius = p.baseR + 0.8 * Math.sin(p.pulse * 0.7);

            // Draw glowing node
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.7)`;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Draw constellation lines
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const ex = p.x - q.x;
                const ey = p.y - q.y;
                const dist = Math.sqrt(ex * ex + ey * ey);

                if (dist < CONFIG.maxDist) {
                    const lineAlpha = (1 - dist / CONFIG.maxDist) * 0.38;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${lineAlpha})`;
                    ctx.lineWidth = 0.9;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
}

// ============================================================
// 🌟 Smooth Phrase Rotator (Cross-Fade Transitions)
// ============================================================
let phraseRotatorInterval;

function startPhraseRotator(element, textOrArray) {
    if (phraseRotatorInterval) clearInterval(phraseRotatorInterval);

    element.classList.remove('typewriter-cursor');

    if (typeof textOrArray === 'string') {
        element.textContent = textOrArray;
        return;
    }

    if (Array.isArray(textOrArray) && textOrArray.length > 0) {
        let index = 0;
        element.textContent = textOrArray[0];

        if (textOrArray.length === 1) return;

        phraseRotatorInterval = setInterval(() => {
            element.classList.add('fade-out');

            setTimeout(() => {
                index = (index + 1) % textOrArray.length;
                element.textContent = textOrArray[index];
                element.classList.remove('fade-out');
                element.classList.add('fade-in');

                setTimeout(() => {
                    element.classList.remove('fade-in');
                }, 450);
            }, 400);
        }, 3600);
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
        { text: ') => {\r\n    ' },
        { text: 'const', class: 'keyword' },
        { text: ' ' },
        { text: 'result', class: 'variable' },
        { text: ' = ', class: 'operator' },
        { text: 'await', class: 'keyword' },
        { text: ' ' },
        { text: 'processAI', class: 'function' },
        { text: '(' },
        { text: 'data', class: 'param' },
        { text: ');\r\n    ' },
        { text: 'return', class: 'keyword' },
        { text: ' ' },
        { text: 'result', class: 'variable' },
        { text: '.' },
        { text: 'insights', class: 'property' },
        { text: ';\r\n};' }
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
    const safeName = escapeHTML(name);
    const t = translations[currentLang].aiTool.templates.ecommerce;
    return `
        <div class="preview-site" style="background:#f8f9fa;">
            <nav class="preview-nav" style="border-bottom: 2px solid #000;">
                <div style="font-weight:bold; font-size:1.2rem; letter-spacing:-1px;">🛍️ ${safeName.toUpperCase()}</div>
                <div style="display:flex; gap:15px; font-size:0.75rem;"><span>${t.nav[0]}</span><span>${t.nav[1]}</span><span>🛒 (0)</span></div>
            </nav>
            <div class="preview-hero" style="background: #000; color:white; padding:2rem 1rem;">
                <p style="text-transform:uppercase; font-size:0.6rem; color:#aaa; margin-bottom:5px;">${t.badge}</p>
                <h1 style="font-size:1.6rem; margin:0;">${t.hero}</h1>
                <button style="margin-top:15px; background:white; color:black; border:none; padding:8px 20px; font-weight:bold; font-size:0.75rem;">${t.button}</button>
            </div>
            <div class="preview-grid" style="padding:1rem;">
                ${[1, 2, 3, 4].map(i => `
                    <div class="preview-card" style="border:none; background:white; padding:0;">
                        <div class="preview-image-box" style="background:#eee; height:120px; position:relative;">
                            <span style="position:absolute; top:5px; left:5px; background:black; color:white; font-size:0.5rem; padding:2px 5px;">${t.badge}</span>
                        </div>
                        <div style="padding:8px;">
                            <p style="font-size:0.75rem; margin:0; color:#555;">${t.product} #${i}</p>
                            <p style="font-weight:bold; margin:0; font-size:0.85rem;">249.90 TL</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function getRestaurantTemplate(name) {
    const safeName = escapeHTML(name);
    const t = translations[currentLang].aiTool.templates.restaurant;
    return `
        <div class="preview-site" style="background:#fffaf5;">
            <nav class="preview-nav" style="background:transparent; position:absolute; width:100%; z-index:2; border:none;">
                <div style="font-weight:bold; color:white; font-family:'Playfair Display', serif;">🍽️ ${safeName}</div>
                <div style="color:white; font-size:0.75rem;">${t.nav}</div>
            </nav>
            <div class="preview-hero" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80') center/cover; height:250px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:white;">
                <h1 style="font-size:1.8rem; font-family:serif;">${t.hero}</h1>
                <p style="font-style:italic; font-size:0.8rem; margin-top:5px;">${t.subtitle}</p>
            </div>
            <div style="padding:1.5rem;">
                <h2 style="font-size:1rem; text-align:center; border-bottom:1px solid #ddd; padding-bottom:10px; margin-bottom:15px;">${t.title}</h2>
                <div style="display:grid; gap:10px;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                        <div>
                            <p style="font-weight:bold; margin:0; font-size:0.9rem;">${t.item1.name}</p>
                            <p style="font-size:0.7rem; color:#888; margin:0;">${t.item1.desc}</p>
                        </div>
                        <div style="font-weight:bold; color:#d4a373;">185TL</div>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                        <div>
                            <p style="font-weight:bold; margin:0; font-size:0.9rem;">${t.item2.name}</p>
                            <p style="font-size:0.7rem; color:#888; margin:0;">${t.item2.desc}</p>
                        </div>
                        <div style="font-weight:bold; color:#d4a373;">340TL</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getPortfolioTemplate(name) {
    const safeName = escapeHTML(name);
    const t = translations[currentLang].aiTool.templates.portfolio;
    return `
        <div class="preview-site" style="background:#fff;">
            <div style="padding:2rem; text-align:center;">
                <div style="width:80px; height:80px; background:#000; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem; font-size:1.5rem; font-weight:bold;">${safeName.charAt(0)}</div>
                <h1 style="font-size:1.5rem; font-weight:900; letter-spacing:-1px; margin:0;">${safeName.toUpperCase()}</h1>
                <p style="font-size:0.85rem; color:#666; margin-top:5px;">${t.role}</p>
                <div style="display:flex; justify-content:center; gap:10px; margin-top:15px;">
                    <span style="background:#eee; padding:3px 10px; border-radius:20px; font-size:0.6rem; font-weight:bold;">REACT</span>
                    <span style="background:#eee; padding:3px 10px; border-radius:20px; font-size:0.6rem; font-weight:bold;">FIGMA</span>
                    <span style="background:#eee; padding:3px 10px; border-radius:20px; font-size:0.6rem; font-weight:bold;">NODE.JS</span>
                </div>
            </div>
            <div style="background:#000; color:white; padding:1.5rem;">
                <h2 style="font-size:0.9rem; margin-bottom:1rem; opacity:0.7;">${t.projects}</h2>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <div style="background:#1a1a1a; height:100px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.7rem;">${t.projectA}</div>
                    <div style="background:#1a1a1a; height:100px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:0.7rem;">${t.projectB}</div>
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

// // 3D Tilt Effect Logic (Disabled: Cards are calm, stable and free from mouse movement)
function init3DTilt() {
    const cards = document.querySelectorAll('.bento-card, .portfolio-card, .tech-card, .team-card');
    cards.forEach(card => {
        card.style.transform = '';
    });
}

// Update Language Switcher to Re-bind Listeners
// Moved init3DTilt to updateLanguage() directly

// Final Initialization
init3DTilt();

// Ambient Cyber Glow Tracking
function initAmbientGlow() {
    const glow = document.getElementById('ambient-glow');
    if (!glow) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    }, { passive: true });

    function renderGlow() {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
        requestAnimationFrame(renderGlow);
    }

    renderGlow();
}

// --- Theme Switcher Logic ---
const themes = ['default', 'cyber-violet', 'emerald-matrix'];
const themeIcons = {
    'default': '🔮',
    'cyber-violet': '⚡',
    'emerald-matrix': '🌿'
};

function initThemeSwitcher() {
    const savedTheme = localStorage.getItem('miratech-theme') || 'default';
    applyTheme(savedTheme);

    const toggleDesktop = document.getElementById('theme-toggle');
    const toggleMobile = document.getElementById('theme-toggle-mobile');

    const cycleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'default';
        const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        applyTheme(nextTheme);
        localStorage.setItem('miratech-theme', nextTheme);
    };

    if (toggleDesktop) toggleDesktop.addEventListener('click', cycleTheme);
    if (toggleMobile) toggleMobile.addEventListener('click', cycleTheme);
}

function applyTheme(themeName) {
    if (themeName === 'default') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', themeName);
    }

    const icon = themeIcons[themeName] || '🔮';
    const iconDesktop = document.getElementById('theme-icon');
    const iconMobile = document.getElementById('theme-icon-mobile');
    if (iconDesktop) iconDesktop.textContent = icon;
    if (iconMobile) iconMobile.textContent = icon;
}

// --- Scroll Progress Bar ---
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress-bar');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        bar.style.width = scrolled + '%';
    }, { passive: true });
}

// --- Portfolio Category Tabs ---
function initPortfolioFilter() {
    const tabs = document.querySelectorAll('.portfolio-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter') || 'all';
            renderPortfolio(filter);
            init3DTilt();
        });
    });
}

// --- Interactive Code Runner ---
function initCodeRunner() {
    const btn = document.getElementById('run-code-btn');
    const terminal = document.getElementById('editor-terminal');
    if (!btn || !terminal) return;

    btn.addEventListener('click', async () => {
        btn.disabled = true;
        btn.style.opacity = '0.6';
        terminal.style.display = 'flex';
        terminal.innerHTML = '<div class="term-line">> Compiling app.js & executing AI pipeline...</div>';

        await new Promise(r => setTimeout(r, 600));
        terminal.innerHTML += '<div class="term-line">> Connecting to MiraTech Neural Cloud...</div>';

        await new Promise(r => setTimeout(r, 600));
        terminal.innerHTML += '<div class="term-line success">> [SUCCESS] Pipeline 100% | Latency: 32ms | Insights: Ready!</div>';

        btn.disabled = false;
        btn.style.opacity = '1';
    });
}
