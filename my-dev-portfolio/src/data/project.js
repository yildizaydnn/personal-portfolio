export const projects = [
  {
    id: 1,
    title: {
      tr: "Hotel Management System",
      en: "Hotel Management System",
    },
    description: {
      tr: "Kullanicilarin oda rezervasyonu yapabildigi, yoneticilerin ise oda durumlarini ve personel hesaplarini kontrol edebildigi kapsamli bir yonetim platformudur. Proje, bir otelin gunluk operasyonel ihtiyaclarini dijitallestirmeyi hedefler.",
      en: "A comprehensive management platform where users can book rooms while administrators can monitor room status and staff accounts. The project digitizes the daily operational needs of a hotel.",
    },
    image: ["/images/IMG_4470.jpg", "/images/IMG_4472.jpg"],
    category: {
      tr: "Web Gelistirme",
      en: "Web Development",
    },
    categoryKey: "web",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    metrics: {
      tr: "Rol tabanli yetkilendirme sistemi",
      en: "Role-based authorization system",
    },
    githubUrl: "https://github.com/yildizaydnn/Hotel-Booking-Website",
  },

  {
    id: 2,
    title: {
      tr: "ATS Uyumlu & AI Destekli Ozgecmis Olusturucu",
      en: "ATS-Friendly & AI-Powered Resume Builder",
    },
    description: {
      tr: "Kullanicilarin modern ise alim sistemlerine (ATS) tam uyumlu ozgecmisler hazirlamasini saglayan, yapay zeka destegi ile profesyonel icerik onerileri sunan bir web platformudur.",
      en: "A web platform that helps users create resumes fully compatible with modern Applicant Tracking Systems (ATS), with AI-powered professional content suggestions.",
    },
    images: ["/images/resume1.png", "/images/resume2.png"],
    category: {
      tr: "Web Uygulamasi",
      en: "Web Application",
    },
    categoryKey: "web",
    technologies: ["React", "Node.js", "AI Integration", "Tailwind CSS"],
    metrics: {
      tr: "Yapay zeka ile optimize edilmis icerik yapisi",
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
      tr: "E-ticaret icin 3D modelleme ve AR cozumleri sunan platformun kullanici arayuzu ve on yuz mimarisini Next.js kullanarak gelistirdim. 3D modellerin tarayici uzerinde akici bir sekilde sergilenmesi icin performans odakli bir arayuz kurguladim.",
      en: "I developed the user interface and frontend architecture of a platform offering 3D modeling and AR solutions for e-commerce using Next.js. I designed a performance-focused interface to present 3D models smoothly in the browser.",
    },
    images: "/images/tritophia.png",

    category: {
      tr: "3D/AR Teknoloji Cozumu",
      en: "3D/AR Technology Solution",
    },
    categoryKey: "ar3d",
    technologies: ["Next.js", "AR Integration"],
    demoUrl: "https://tritophia.com",
  },

  {
    id: 4,
    title: {
      tr: "Ingilizce Kelime Flashcards",
      en: "English Vocabulary Flashcards",
    },
    description: {
      tr: "Swift ile gelistirilen, interaktif flip kartlar ve akilli ilerleme takibi ozellikleri sunan bir dil ogrenme uygulamasidir. 7 farkli kategoride 400'den fazla kelime ile kullanicilarin kelime haznesini gelistirmeyi hedefler.",
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
      tr: "App Store'da yayinda",
      en: "Live on the App Store",
    },
    demoUrl:
      "https://apps.apple.com/tr/app/i-ngilizce-kelime-flashcards/id6749082079",
  },
];

export const categories = ["All", "Web Apps", "Mobile", "Full Stack"];
