// Project Data
const projects = [
    {
        id: 'portfolio-1',
        slug: 'aguvi',
        title: 'AGUVI',
        category: 'Mobil & Sağlık Teknolojisi',
        shortDescription: 'Ebeveynler için beslenme, uyku ve büyüme evrelerini interaktif grafikler ve akıllı anımsatıcılarla takip eden yeni nesil bebek gelişim platformu.',
        description: 'AGUVI, bebek bakımını ve gelişim takibini kolaylaştıran modern bir Flutter uygulamasıdır. Hive yerel veritabanı, Lottie animasyonları ve fl_chart grafik altyapısıyla donatılan uygulama; aşı takviminden beslenme rutinine kadar her adımı güvenle kayıt altına alır.',
        imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        iconType: 'aguvi'
    },
    {
        id: 'portfolio-2',
        slug: 'shoplive',
        title: 'ShopLive',
        category: 'Canlı Alışveriş & Sosyal Ticaret',
        shortDescription: 'TikTok tarzı kesintisiz canlı yayın akışı üzerinden anlık ürün sabitleme, flash indirimler ve tek dokunuşla ödeme sunan sosyal ticaret uygulaması.',
        description: 'ShopLive, canlı yayın heyecanını e-ticaret dinamikleriyle birleştiren React Native ve Expo SDK 51 tabanlı bir alışveriş platformudur. Reanimated v3 ile 60fps akıcı swipe hareketleri, canlı yayın içi sepet yönetimi ve satıcı kontrol paneli sağlar.',
        imageUrl: '',
        iconType: 'shoplive'
    },
    {
        id: 'portfolio-3',
        slug: 'kent21',
        title: 'Kent21',
        category: 'Akıllı Şehir & Şehir Rehberi',
        shortDescription: 'İnteraktif şehir haritası, yerel kültürel rota rehberi, nöbetçi eczaneler ve akıllı belediye servislerini bir araya getiren kapsamlı kent platformu.',
        description: 'Kent21, Diyarbakır için geliştirilmiş akıllı şehir ve yaşam rehberidir. Flutter ve Riverpod mimarisiyle inşa edilen uygulama; konum bazlı anlık bildirimler, ezan vakitleri ve zengin kültürel miras verileriyle vatandaşların ve turistlerin günlük rehberidir.',
        imageUrl: '',
        iconType: 'kent21'
    },
    {
        id: 'portfolio-4',
        slug: 'kundir',
        title: 'Kundır 21',
        category: 'Yapay Zeka & Yerel Asistan',
        shortDescription: 'OLED Dark Mode estetiğiyle kentin dilini, tarihini ve sokak kültürünü anlayan, doğal dilde anlık sohbet eden yerelleştirilmiş yapay zeka asistanı.',
        description: 'Kundır 21, Diyarbakır kültürüne ve yerel terminolojisine derinlemesine adapte edilmiş ilk yerel AI asistanıdır. Flutter ile geliştirilen OLED optimize karanlık teması ve hızlı yapay zeka yanıt motoruyla benzersiz bir etkileşim sunar.',
        imageUrl: '',
        iconType: 'kundir'
    },
    {
        id: 'portfolio-5',
        slug: 'nn',
        title: 'NN',
        category: 'Premium Yaşam & Çift Deneyimi',
        shortDescription: 'Sinematik Ken-Burns geçişleri, güvenli PIN koruması ve lüks karanlık estetiğiyle çiftlere özel tasarlanmış seçkin ve gizli mobil deneyim.',
        description: 'NN, çiftler arasındaki özel anları ve paylaşımları güvenle koruyan, şifrelenmiş depolama ve üst düzey tasarım estetiği sunan özel bir mobil uygulamadır. Kan kırmızısı ve derin siyah tonlarındaki sanatsal arayüzüyle premium bir dokunuş sağlar.',
        imageUrl: '',
        iconType: 'nn'
    },
    {
        id: 'portfolio-6',
        slug: 'giydir',
        title: 'Giydir',
        category: 'Sanal Deneme & Yapay Zeka',
        shortDescription: 'Gelişmiş AI destekli sanal kabin ile kıyafetleri fotoğraflarınız üzerinde gerçekçi şekilde deneyin ve kişisel stil önerileri alın.',
        description: 'Giydir, moda tutkunları ve stilistler için devrim niteliğinde bir sanal deneme uygulamasıdır. Gelişmiş yapay zeka teknolojimiz, kullanıcıların diledikleri kıyafeti saniyeler içinde dijital olarak denemelerine olanak tanır.',
        imageUrl: 'https://images.unsplash.com/photo-1632773004171-02bc1c4a726a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        iconType: 'giydir'
    },
    {
        id: 'portfolio-7',
        slug: 'melodixor',
        title: 'Melodixor',
        category: 'Müzik Tanıma & Yapay Zeka',
        shortDescription: 'Mırıldanarak veya ortam sesinden anında şarkı tespiti yapın; Mood AI ile ruh halinize en uygun çalma listelerini keşfedin.',
        description: 'Melodixor, müziği keşfetmenin sınırlarını zorlayan akıllı bir uygulamadır. Ortamdaki şarkıyı veya aklınıza takılan bir melodiyi anında tespit eder ve o anki ruh halinize en uygun parçaları seçer.',
        imageUrl: 'https://images.unsplash.com/photo-1598965897529-f319a7725a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        iconType: 'melodixor'
    },
    {
        id: 'portfolio-8',
        slug: 'mira-weather',
        title: 'Mira Weather',
        category: 'Hava Durumu & Minimalist Tasarım',
        shortDescription: 'Minimalist ve zarif arayüzle anlık hava durumu, saatlik tahminler ve kişiselleştirilmiş ana ekran widget deneyimi.',
        description: 'Mira Weather, hava durumu takibini bir sanat haline getiren, minimalist ve şık bir uygulamadır. Anlık ve doğru tahminlerle gününüzü en doğru şekilde planlamanıza yardımcı olur.',
        imageUrl: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
        gender: 'female',
        titleKey: 'coFounder',
        roleKey: 'socialMediaManager',
        initials: 'ŞA',
        badge: 'Operations & Management'
    },
    {
        id: 'team-2',
        name: 'Mehmet Fahri EMER',
        gender: 'male',
        titleKey: 'coFounder',
        roleKey: 'developer',
        initials: 'MFE',
        badge: 'Lead Tech & AI'
    }
];

// Translations
const translations = {
    tr: {
        header: {
            portfolio: 'Portfolyo',
            techStack: 'Teknolojiler',
            ourTeam: 'Ekibimiz'
        },
        hero: {
            badge: 'YAPAY ZEKA & MOBİL İNOVASYON LABİ',
            title: ['GELECEĞİ KODLUYORUZ', 'YAPAY ZEKA ÇÖZÜMLERİ', 'YENİLİKÇİ MOBİL DÜNYA'],
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
                socialMediaManager: 'Operasyon, Sosyal Medya, İletişim, Pazarlama ve İdari Yönetim',
                developer: 'Yazılım Geliştirici & Sistem Mimarisi'
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
            copyCode: 'Kodu Kopyala',
            copied: 'Kopyalandı!',
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
            ourTeam: 'Our Team'
        },
        hero: {
            badge: 'AI & MOBILE INNOVATION LAB',
            title: ['CODING THE FUTURE', 'AI-POWERED SOLUTIONS', 'INNOVATIVE MOBILE APPS'],
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
                socialMediaManager: 'Operations, Social Media, PR, Marketing & Administrative Management',
                developer: 'Lead Software Engineer & System Architect'
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
            copyCode: 'Copy Code',
            copied: 'Copied!',
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
