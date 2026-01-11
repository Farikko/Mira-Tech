// Project Data
const projects = [
    {
        id: 'portfolio-5',
        slug: 'giydir',
        title: 'Giydir',
        category: 'Sanal Deneme & Yapay Zeka',
        description: 'Giydir, moda tutkunları ve stilistler için devrim niteliğinde bir sanal deneme uygulamasıdır. Gelişmiş yapay zeka teknolojimiz, kullanıcıların kendi fotoğraflarını yükleyerek veya mevcut modellerimizden birini seçerek diledikleri kıyafeti saniyeler içinde dijital olarak denemelerine olanak tanır. Uygulama, kıyafetin vücuda tam oturmasını sağlayarak gerçekçi bir deneyim sunar ve kişiselleştirilmiş kombin önerileriyle stilinizi bir üst seviyeye taşımanıza yardımcı olur.',
        imageUrl: 'https://images.unsplash.com/photo-1632773004171-02bc1c4a726a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjbG90aGluZyUyMGFwcHxlbnwwfHx8fDE3NjcyNzAxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
        id: 'portfolio-6',
        slug: 'melodixor',
        title: 'Melodixor',
        category: 'Müzik Tanıma & Yapay Zeka',
        description: 'Melodixor, müziği keşfetmenin sınırlarını zorlayan akıllı bir uygulamadır. Gürültülü bir konser ortamında çalan şarkıyı veya sadece aklınıza takılan bir melodiyi mırıldanarak anında tespit edebilirsiniz. Bununla da kalmaz, yenilikçi "Mood AI" özelliğimiz, o anki ruh halinize en uygun şarkıları ve çalma listelerini sizin için özenle seçer. Melodixor, müziğin duygusal gücünü parmaklarınızın ucuna getirir.',
        imageUrl: 'https://images.unsplash.com/photo-1598965897529-f319a7725a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bXVzaWMlMjBhcHB8ZW58MHx8fHwxNzY3MjcwMTIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
        id: 'portfolio-7',
        slug: 'mira-weather',
        title: 'Mira Weather',
        category: 'Hava Durumu & Minimalist Tasarım',
        description: 'Mira Weather, hava durumu takibini bir sanat haline getiren, minimalist ve şık bir uygulamadır. Anlık ve doğru hava durumu tahminlerinin yanı sıra, kullanıcı dostu arayüzü ve sade tasarımıyla öne çıkar. Detaylı saatlik ve haftalık tahminler, kişiselleştirilebilir bildirimler ve zarif ana ekran widget\'ları ile gününüzü en doğru şekilde planlamanıza yardımcı olur. Karmaşadan uzak, sadece ihtiyacınız olan bilgi.',
        imageUrl: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8d2VhdGhlciUyMGFwcHxlbnwwfHx8fDE3NjcyNzAxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
];

// Technologies
const technologies = [
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Swift (iOS)', icon: '💻' },
    { name: 'Kotlin (Android)', icon: '💻' },
    { name: 'Node.js', icon: '🗄️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Genkit AI', icon: '🤖' },
    { name: 'Figma', icon: '🎨' }
];

// Team Members
const teamMembers = [
    {
        id: 'team-1',
        name: 'Şevval ATAŞ',
        titleKey: 'coFounder',
        roleKey: 'socialMediaManager',
        initials: 'ŞA'
    },
    {
        id: 'team-2',
        name: 'Mehmet Fahri EMER',
        titleKey: 'coFounder',
        roleKey: 'developer',
        initials: 'MFE'
    }
];

// Translations
const translations = {
    tr: {
        header: {
            portfolio: 'Portfolyo',
            techStack: 'Teknolojiler',
            ourTeam: 'Ekibimiz',
            projectGenerator: 'Proje Oluşturucu'
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
            title: 'Yapay Zeka Proje Açıklaması Oluşturucu',
            description: 'Mobil uygulama projeleriniz için anında etkileyici açıklamalar oluşturun.',
            formTitle: 'Proje Detaylarını Girin',
            projectNameLabel: 'Proje Adı',
            techStackLabel: 'Teknoloji Yığını',
            keywordsLabel: 'Anahtar Kelimeler',
            generateButton: 'Açıklama Oluştur',
            formTitle: 'Proje Detaylarını Girin',
            projectNameLabel: 'Proje Adı',
            techStackLabel: 'Teknoloji Yığını',
            keywordsLabel: 'Anahtar Kelimeler',
            generateButton: 'Açıklama Oluştur',
            generating: 'Oluşturuluyor...',
            outputTitle: 'Oluşturulan Açıklama',
            outputPlaceholder: 'Açıklamanız doğmayı bekliyor...'
        },
        vision: {
            title: 'İşinizi Büyütün',
            description: 'Modern yazılım çözümleriyle işletmenizi geleceğe taşıyın. Sizinle birlikte büyümeye hazırız.'
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
            projectGenerator: 'Project Generator'
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
            title: 'AI Project Description Generator',
            description: 'Generate compelling descriptions for your mobile app projects instantly.',
            formTitle: 'Enter Project Details',
            projectNameLabel: 'Project Name',
            techStackLabel: 'Tech Stack',
            keywordsLabel: 'Keywords',
            generateButton: 'Generate Description',
            generating: 'Generating...',
            outputTitle: 'Generated Description',
            outputPlaceholder: 'Your description is waiting to be born...'
        },
        vision: {
            title: 'Grow Your Business',
            description: 'Move your business forward with modern software solutions. We are ready to grow with you.'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    }
};
