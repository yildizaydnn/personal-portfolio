export const projects = [
  {
    id: 1,
    title: {
      tr: "Hotel Management System",
      en: "Hotel Management System",
    },
    description: {
      tr: "Kullanıcıların oda rezervasyonu yapabildiği, yöneticilerin ise oda durumlarını ve personel hesaplarını kontrol edebildiği kapsamlı bir yönetim platformudur. Proje, bir otelin günlük operasyonel ihtiyaçlarını dijitalleştirmeyi hedefler.",
      en: "A comprehensive management platform where users can book rooms while administrators can monitor room status and staff accounts. The project digitizes the daily operational needs of a hotel.",
    },
    image: ["/images/IMG_4470.jpg", "/images/IMG_4472.jpg"],
    category: {
      tr: "Web Geliştirme",
      en: "Web Development",
    },
    categoryKey: "web",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    metrics: {
      tr: "Rol tabanlı yetkilendirme sistemi",
      en: "Role-based authorization system",
    },
    githubUrl: "https://github.com/yildizaydnn/Hotel-Booking-Website",
  },

  {
    id: 2,
    title: {
      tr: "ATS Uyumlu & AI Destekli Özgeçmiş Oluşturucu",
      en: "ATS-Friendly & AI-Powered Resume Builder",
    },
    description: {
      tr: "Kullanıcıların modern işe alım sistemlerine (ATS) tam uyumlu özgeçmişler hazırlamasını sağlayan, yapay zeka desteği ile profesyonel içerik önerileri sunan bir web platformudur.",
      en: "A web platform that helps users create resumes fully compatible with modern Applicant Tracking Systems (ATS), with AI-powered professional content suggestions.",
    },
    images: ["/images/resume1.png", "/images/resume2.png"],
    category: {
      tr: "Web Uygulaması",
      en: "Web Application",
    },
    categoryKey: "web",
    technologies: ["React", "Node.js", "AI Integration", "Tailwind CSS"],
    metrics: {
      tr: "Yapay zeka ile optimize edilmiş içerik yapısı",
      en: "AI-optimized content structure",
    },
  },
  {
    id: 3,
    title: {
      tr: "Tritophia: 3D & AR Teknolojileri",
      en: "Tritophia: 3D & AR Technologies",
    },
    description: {
      tr: "E-ticaret için 3D modelleme ve AR çözümleri sunan platformun kullanıcı arayüzü ve ön yüz mimarisini Next.js kullanarak geliştirdim. 3D modellerin tarayıcı üzerinde akıcı bir şekilde sergilenmesi için performans odaklı bir arayüz kurguladım.",
      en: "I developed the user interface and frontend architecture of a platform offering 3D modeling and AR solutions for e-commerce using Next.js. I designed a performance-focused interface to present 3D models smoothly in the browser.",
    },
    images: "/images/tritophia.png",

    category: {
      tr: "3D/AR Teknoloji Çözümü",
      en: "3D/AR Technology Solution",
    },
    categoryKey: "ar3d",
    technologies: ["Next.js", "AR Integration"],
    demoUrl: "https://tritophia.com",
  },

  {
    id: 4,
    title: {
      tr: "İngilizce Kelime Flashcards",
      en: "English Vocabulary Flashcards",
    },
    description: {
      tr: "Swift ile geliştirilen, interaktif flip kartlar ve akıllı ilerleme takibi özellikleri sunan bir dil öğrenme uygulamasıdır. 7 farklı kategoride 400'den fazla kelime ile kullanıcıların kelime haznesini geliştirmeyi hedefler.",
      en: "A language learning app built with Swift, featuring interactive flip cards and smart progress tracking. It helps users improve their vocabulary with more than 400 words across 7 categories.",
    },
    images: "/images/mobil.png",
    category: {
      tr: "Mobil Uygulama",
      en: "Mobile App",
    },
    categoryKey: "mobile",
    technologies: ["Swift", "SwiftUI", "Offline Data Management"],
    metrics: {
      tr: "App Store'da yayında",
      en: "Live on the App Store",
    },
    demoUrl:
      "https://apps.apple.com/tr/app/i-ngilizce-kelime-flashcards/id6749082079",
  },
];

export const categories = ["All", "Web Apps", "Mobile", "Full Stack"];
