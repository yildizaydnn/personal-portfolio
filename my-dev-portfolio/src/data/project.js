export const projects = [
  {
    id: 1,
    title: "Hotel Management System",
    description:
      "Kullanıcıların oda rezervasyonu yapabildiği, yöneticilerin ise oda durumlarını ve personel hesaplarını kontrol edebildiği kapsamlı bir yönetim platformudur. Proje, bir otelin günlük operasyonel ihtiyaçlarını dijitalleştirmeyi hedefler.",
    image: ["/images/IMG_4470.jpg", "/images/IMG_4472.jpg"],
    category: "Web Development",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    metrics: "Rol tabanlı yetkilendirme sistemi",
    githubUrl: "https://github.com/yildizaydnn/Hotel-Booking-Website",
  },

  {
    id: 2,
    title: "ATS Uyumlu & AI Destekli Özgeçmiş Oluşturucu",
    description:
      "Kullanıcıların modern işe alım sistemlerine (ATS) tam uyumlu özgeçmişler hazırlamasını sağlayan, yapay zeka desteği ile profesyonel içerik önerileri sunan bir web platformudur.",
    images: ["/images/resume1.png", "/images/resume2.png"],
    category: "Web Uygulaması",
    technologies: ["React", "Node.js", "AI Integration", "Tailwind CSS"],
    metrics: "Yapay zeka ile optimize edilmiş içerik yapısı",
  },
  {
    id: 3,
    title: "Tritophia: 3D & AR Teknolojileri",
    description:
      "E-ticaret için 3D modelleme ve AR çözümleri sunan platformun kullanıcı arayüzü ve ön yüz mimarisini Next.js kullanarak geliştirdim. 3D modellerin tarayıcı üzerinde akıcı bir şekilde sergilenmesi için performans odaklı bir arayüz kurguladım.",
    images: "/images/tritophia.png",

    category: "3D/AR Teknoloji Çözümü",
    technologies: ["Next.js", "AR Integration"],
    demoUrl: "https://tritophia.com",
  },

  {
    id: 4,
    title: "İngilizce Kelime Flashcards",
    description:
      "Swift ile geliştirilen, interaktif flip kartlar ve akıllı ilerleme takibi özellikleri sunan bir dil öğrenme uygulamasıdır. 7 farklı kategoride 400'den fazla seçkin kelime ile kullanıcıların kelime haznesini geliştirmeyi hedefler.",
    images: "/images/mobil.png",
    category: "Mobil Uygulama",
    technologies: ["Swift", "SwiftUI", "Offline Data Management"],
    metrics: "App Store'da Yayında",
    demoUrl:
      "https://apps.apple.com/tr/app/i-ngilizce-kelime-flashcards/id6749082079",
  },
];

export const categories = ["All", "Web Apps", "Mobile", "Full Stack"];
