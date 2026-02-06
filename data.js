// Project Data
const projects = [
    {
        id: 'portfolio-5',
        slug: 'giydir',
        title: 'Giydir',
        category: 'Sanal Deneme & Yapay Zeka',
        description: 'Giydir, moda tutkunları ve stilistler için devrim niteliğinde bir sanal deneme uygulamasıdır. Gelişmiş yapay zeka teknolojimiz, kullanıcıların kendi fotoğraflarını yükleyerek veya mevcut modellerimizden birini seçerek diledikleri kıyafeti saniyeler içinde dijital olarak denemelerine olanak tanır. Uygulama, kıyafetin vücuda tam oturmasını sağlayarak gerçekçi bir deneyim sunar ve kişiselleştirilmiş kombin önerileriyle stilinizi bir üst seviyeye taşımanıza yardımcı olur.',
        imageUrl: 'https://images.unsplash.com/photo-1632773004171-02bc1c4a726a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjbG90aGluZyUyMGFwcHxlbnwwfHx8fDE3NjcyNzAxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        iconType: 'giydir'
    },
    {
        id: 'portfolio-6',
        slug: 'melodixor',
        title: 'Melodixor',
        category: 'Müzik Tanıma & Yapay Zeka',
        description: 'Melodixor, müziği keşfetmenin sınırlarını zorlayan akıllı bir uygulamadır. Gürültülü bir konser ortamında çalan şarkıyı veya sadece aklınıza takılan bir melodiyi mırıldanarak anında tespit edebilirsiniz. Bununla da kalmaz, yenilikçi "Mood AI" özelliğimiz, o anki ruh halinize en uygun şarkıları ve çalma listelerini sizin için özenle seçer. Melodixor, müziğin duygusal gücünü parmaklarınızın ucuna getirir.',
        imageUrl: 'https://images.unsplash.com/photo-1598965897529-f319a7725a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bXVzaWMlMjBhcHB8ZW58MHx8fHwxNzY3MjcwMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        iconType: 'melodixor'
    },
    {
        id: 'portfolio-7',
        slug: 'mira-weather',
        title: 'Mira Weather',
        category: 'Hava Durumu & Minimalist Tasarım',
        description: 'Mira Weather, hava durumu takibini bir sanat haline getiren, minimalist ve şık bir uygulamadır. Anlık ve doğru hava durumu tahminlerinin yanı sıra, kullanıcı dostu arayüzü ve sade tasarımıyla öne çıkar. Detaylı saatlik ve haftalık tahminler, kişiselleştirilebilir bildirimler ve zarif ana ekran widget\'ları ile gününüzü en doğru şekilde planlamanıza yardımcı olur. Karmaşadan uzak, sadece ihtiyacınız olan bilgi.',
        imageUrl: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8d2VhdGhlciUyMGFwcHxlbnwwfHx8fDE3NjcyNzAxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        iconType: 'weather'
    }
];

// Technologies
const technologies = [
    { name: 'React Native', iconType: 'react-atom' },
    { name: 'Flutter', iconType: 'flutter-layers' },
    { name: 'Swift (iOS)', iconType: 'swift-bird' },
    { name: 'Kotlin (Android)', iconType: 'kotlin-gear' },
    { name: 'Node.js', iconType: 'node-cluster' },
    { name: 'Firebase', iconType: 'firebase-cloud' },
    { name: 'Genkit AI', iconType: 'ai-brain' },
    { name: 'Figma', iconType: 'figma-cursor' }
];

// Team Members
const teamMembers = [
    {
        id: 'team-1',
        name: 'Şevval ATAŞ',
        titleKey: 'coFounder',
        roleKey: 'socialMediaManager',
        initials: 'ŞA',
        image: 'images/sevval.png'
    },
    {
        id: 'team-2',
        name: 'Mehmet Fahri EMER',
        titleKey: 'coFounder',
        roleKey: 'developer',
        initials: 'MFE',
        image: 'images/fahri.png'
    }
];

// Translations
const translations = {
    tr: {
        header: {
            portfolio: 'Portfolyo',
            techStack: 'Teknolojiler',
            ourTeam: 'Ekibimiz',
            projectGenerator: 'AI Tasarımcı'
        },
        hero: {
            title: ['GELECEĞİ KODLUYORUZ', 'console.log("MiraTech")'],
            subtitle: 'Geleceğin Mobil Deneyimlerini Şekillendiriyoruz.',
            description: 'Kullanıcıların sevdiği, güzel ve yüksek performanslı mobil uygulamalar geliştiren, ileri görüşlü bir yazılım firmasıyız.',
            button: 'Çalışmalarımızı Görün'
        },
        portfolio: {
            title: 'Çalışmalarımız',
            description: 'Tasarladığımız ve geliştirdiğimiz mobil uygulamalardan bir seçki.'
        },
        techStack: {
            title: 'Teknoloji Yığınımız',
            description: 'Ölçeklenebilir ve sürdürülebilir uygulamalar oluşturmak için modern ve sağlam teknolojiler kullanıyoruz.'
        },
        team: {
            title: 'Ekiple Tanışın',
            description: 'Yenilikçi mobil çözümlerimizin arkasındaki tutkulu beyinler.',
            titles: { coFounder: 'Kurucu Ortak' },
            roles: {
                socialMediaManager: 'Sosyal Medya Uzmanı, İçerik Üreticisi ve İdari Yönetici',
                developer: 'Geliştirici'
            }
        },
        aiTool: {
            title: 'Yapay Zeka Web Tasarım Simülatörü',
            description: 'Hayalinizdeki web sitesini tarif edin, MiraTech AI anında görselleştirsin.',
            formTitle: 'Web Sitenizi Tarif Edin',
            projectNameLabel: 'İşletme Adı veya Proje',
            projectNamePlaceholder: 'Örn: Mira Restoran',
            keywordsLabel: 'Ne Tür Bir Site İstiyorsunuz?',
            keywordsPlaceholder: 'Örn: Emlak sitesi, Kahve dükkanı...',
            generateButton: 'Tasarımı Oluştur',
            generating: 'Tasarım Yapılıyor...',
            outputPlaceholder: 'Bilgileri girin ve yapay zekanın sihrini izleyin...',
            logs: [
                "Analiz ediliyor: {keywords}",
                "Sektör belirlendi, uygun şablon seçiliyor...",
                "Adres doğrulanıyor: www.{url}.com",
                "Renk paleti ve tipografi optimize ediliyor...",
                "Dinamik içerikler enjekte ediliyor...",
                "Tasarım final haline getiriliyor..."
            ],
            templates: {
                realEstate: {
                    nav: ['İlanlar', 'Hakkımızda', 'İletişim'],
                    hero: 'Hayalinizdeki Evi Bulun',
                    search: 'Şehir, mahalle veya ilan no ile ara...',
                    cardLabel: 'İlan'
                },
                coffee: {
                    nav: ['Menü', 'Hikayemiz'],
                    hero: 'Günün İlk Kahvesi Mira AI İle',
                    button: 'Şimdi Sipariş Ver',
                    espresso: 'Zengin ve yoğun aroma',
                    latte: 'Yumuşak süt köpüğü'
                },
                gym: {
                    hero: 'SINIRLARINI ZORLA',
                    badge: 'Popüler Program',
                    program: 'CrossFit Elite',
                    button: 'KATIL'
                },
                ecommerce: {
                    nav: ['Mağaza', 'İndirimdekiler'],
                    badge: 'YENİ',
                    hero: 'STİLİNİZİ KEŞFEDİN',
                    button: 'SATIN AL',
                    product: 'Ürün'
                },
                restaurant: {
                    nav: 'Rezervasyon',
                    hero: 'Eşsiz Lezzet Durağı',
                    subtitle: 'Geleneksel tatlar, modern dokunuşlar',
                    title: 'Şefin Seçimleri',
                    item1: { name: 'Özel Soslu Makarna', desc: 'Taze fesleğen ve parmesan ile' },
                    item2: { name: 'Kuzu Tandır', desc: 'Ağır ateşte 12 saat pişmiş' }
                },
                portfolio: {
                    role: 'UI/UX Tasarımcı & Geliştirici',
                    projects: 'PROJELER',
                    projectA: 'Proje A',
                    projectB: 'Proje B'
                },
                default: {
                    hero: 'Sizin İçin Tasarlandı',
                    subtitle: 'Modern ve profesyonel arayüz çözümleri.',
                    feature: 'Özellik'
                }
            }
        },
        vision: {
            title: 'İşinizi Büyütün',
            description: 'Modern yazılım çözümleriyle işletmenizi geleceğe taşıyın. Sizinle birlikte büyümeye hazırız.'
        },
        application: {
            badge: 'Başvuru',
            title: 'Geleceği Birlikte İnşa Edelim',
            description: 'Hayalinizdeki projeyi hayata geçirmek için ilk adımı atın. Ekibimiz en kısa sürede sizinle iletişime geçecektir.',
            nameLabel: 'Adınız Soyadınız',
            emailLabel: 'E-posta Adresiniz',
            phoneLabel: 'Telefon Numaranız (Opsiyonel)',
            companyLabel: 'Şirket/Organizasyon (Opsiyonel)',
            servicePlaceholder: 'Hizmet Seçin',
            serviceWeb: 'Web Tasarım & Geliştirme',
            serviceMobile: 'Mobil Uygulama',
            serviceAI: 'Yapay Zeka Çözümleri',
            serviceUIUX: 'UI/UX Tasarım',
            serviceConsulting: 'Danışmanlık',
            budgetPlaceholder: 'Bütçe Aralığı',
            budget1: '5.000₺ - 15.000₺',
            budget2: '15.000₺ - 30.000₺',
            budget3: '30.000₺ - 50.000₺',
            budget4: '50.000₺+',
            timelinePlaceholder: 'Proje Başlangıç Zamanı',
            timeline1: 'En Kısa Sürede',
            timeline2: '1 Ay İçinde',
            timeline3: '2-3 Ay İçinde',
            timeline4: 'Esnek',
            messageLabel: 'Proje Detayları',
            submitButton: 'Başvuruyu Gönder',
            statusSending: 'Başvurunuz gönderiliyor...',
            statusSuccess: 'Başvurunuz başarıyla alındı! En kısa sürede dönüş yapacağız.',
            statusError: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
        },
        footer: {
            rights: 'Tüm hakları saklıdır.'
        }
    },
    en: {
        header: {
            portfolio: 'Portfolio',
            techStack: 'Tech Stack',
            ourTeam: 'Our Team',
            projectGenerator: 'AI Designer'
        },
        hero: {
            title: ['CODING THE FUTURE', 'console.log("MiraTech")'],
            subtitle: "Crafting Tomorrow's Mobile Experiences.",
            description: 'We are a forward-thinking software firm specializing in building beautiful, high-performance mobile applications that users love.',
            button: 'View Our Work'
        },
        portfolio: {
            title: 'Our Work',
            description: "A selection of mobile applications we've designed and developed."
        },
        techStack: {
            title: 'Our Technology Stack',
            description: 'We use modern, robust technologies to build scalable and maintainable applications.'
        },
        team: {
            title: 'Meet the Team',
            description: 'The passionate minds behind our innovative mobile solutions.',
            titles: { coFounder: 'Co-founder' },
            roles: {
                socialMediaManager: 'Social Media Specialist, Content Creator and Administrative Manager',
                developer: 'Developer'
            }
        },
        aiTool: {
            title: 'AI Web Design Simulator',
            description: 'Describe your dream website, MiraTech AI will visualize it instantly.',
            formTitle: 'Describe Your Website',
            projectNameLabel: 'Business Name or Project',
            projectNamePlaceholder: 'e.g. Mira Restaurant',
            keywordsLabel: 'What Kind of Site Do You Want?',
            keywordsPlaceholder: 'e.g. Real estate site, Coffee shop...',
            generateButton: 'Generate Design',
            generating: 'Designing...',
            outputPlaceholder: 'Enter details and watch the AI magic...',
            logs: [
                "Analyzing: {keywords}",
                "Sector identified, selecting appropriate template...",
                "Verifying address: www.{url}.com",
                "Optimizing color palette and typography...",
                "Injecting dynamic content...",
                "Finalizing design..."
            ],
            templates: {
                realEstate: {
                    nav: ['Listings', 'About Us', 'Contact'],
                    hero: 'Find Your Dream Home',
                    search: 'Search by city, neighborhood or listing ID...',
                    cardLabel: 'Listing'
                },
                coffee: {
                    nav: ['Menu', 'Our Story'],
                    hero: 'First Coffee of the Day with Mira AI',
                    button: 'Order Now',
                    espresso: 'Rich and intense aroma',
                    latte: 'Smooth milk foam'
                },
                gym: {
                    hero: 'PUSH YOUR LIMITS',
                    badge: 'Popular Program',
                    program: 'CrossFit Elite',
                    button: 'JOIN'
                },
                ecommerce: {
                    nav: ['Shop', 'Deals'],
                    badge: 'NEW',
                    hero: 'DISCOVER YOUR STYLE',
                    button: 'BUY NOW',
                    product: 'Product'
                },
                restaurant: {
                    nav: 'Reservation',
                    hero: 'Unique Taste Stop',
                    subtitle: 'Traditional flavors, modern touches',
                    title: "Chef's Choices",
                    item1: { name: 'Pasta with Special Sauce', desc: 'With fresh basil and parmesan' },
                    item2: { name: 'Lamb Tandir', desc: 'Slow-cooked for 12 hours' }
                },
                portfolio: {
                    role: 'UI/UX Designer & Developer',
                    projects: 'PROJECTS',
                    projectA: 'Project A',
                    projectB: 'Project B'
                },
                default: {
                    hero: 'Designed for You',
                    subtitle: 'Modern and professional interface solutions.',
                    feature: 'Feature'
                }
            }
        },
        vision: {
            title: 'Grow Your Business',
            description: 'Move your business forward with modern software solutions. We are ready to grow with you.'
        },
        application: {
            badge: 'Application',
            title: 'Let’s Build the Future Together',
            description: 'Take the first step to realize your dream project. Our team will contact you as soon as possible.',
            nameLabel: 'Your Full Name',
            emailLabel: 'Your Email Address',
            phoneLabel: 'Your Phone Number (Optional)',
            companyLabel: 'Company/Organization (Optional)',
            servicePlaceholder: 'Select Service',
            serviceWeb: 'Web Design & Development',
            serviceMobile: 'Mobile Application',
            serviceAI: 'AI Solutions',
            serviceUIUX: 'UI/UX Design',
            serviceConsulting: 'Consulting',
            budgetPlaceholder: 'Budget Range',
            budget1: '$500 - $1,500',
            budget2: '$1,500 - $3,000',
            budget3: '$3,000 - $5,000',
            budget4: '$5,000+',
            timelinePlaceholder: 'Project Start Time',
            timeline1: 'As Soon As Possible',
            timeline2: 'Within 1 Month',
            timeline3: 'Within 2-3 Months',
            timeline4: 'Flexible',
            messageLabel: 'Project Details',
            submitButton: 'Submit Application',
            statusSending: 'Sending your application...',
            statusSuccess: 'Application received successfully! We will contact you soon.',
            statusError: 'An error occurred. Please try again later.'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    }
};
// Background Code Snippets
const codeSnippets = [
    'git push origin main',
    'npm start',
    'while(true) { build(); }',
    'const miratech = new Vision();',
    'if (success) { celebrate(); }',
    '<body>',
    'console.log("Hello MiraTech");',
    'chmod +x script.sh',
    'import { future } from "miratech";',
    'docker-compose up -d',
    'api.fetch("/data").then(render);',
    'export default App;',
    'await db.sync();',
    'for(let i=0; i<10; i++) { innovate(); }',
    'git commit -m "Future is here"',
    'const brain = AI.initialize();',
    '<div>',
    'npm install @miratech/core',
    'ssh root@future'
];
