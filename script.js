/* ═══════════════════════════════════════════════════════════════
   PORTFOLIOVERSE — MAIN SCRIPT
   Starfield · Moons · Slider · Modal · Form · Portfolio Generator
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── TRANSLATIONS ───────────────────────────────────────────── */
const LANG = {
  en: {
    // Navbar
    navHome: 'Home', navFeatures: 'Features', navTemplates: 'Templates',
    navHowItWorks: 'How It Works', navPricing: 'Pricing', navCta: 'Get Started Free',
    // Hero
    heroBadge: '✨ 100+ Stunning Templates',
    heroTitle: 'Build Your <span class="gradient-text">Dream Portfolio</span><br/>In Minutes',
    heroSubtitle: 'Choose from 100 breathtaking templates. Fill in your details.<br/>Get an instant shareable link to your professional portfolio.',
    heroBtn1: 'Explore Templates', heroBtn2: 'Watch Demo',
    heroStat1: 'Templates', heroStat2: 'Portfolios Made', heroStat3: 'Rating',
    // Features
    featureTag: 'Why PortfolioVerse?',
    featureTitle: 'Everything You Need to <span class="gradient-text">Shine Online</span>',
    f1Front: '100 Unique Templates', f1FrontSub: 'From galaxy to vintage, every style covered',
    f1Back: 'Dark cosmic, neon tech, ocean marine, retro vintage, artistic creative — no two look alike. Every template is handcrafted.',
    f2Front: 'Instant Portfolio Link', f2FrontSub: 'Fill in your info, click save, get your link',
    f2Back: 'No coding needed. Your portfolio is live in under 2 minutes. Share it on LinkedIn, your CV, or anywhere you want.',
    f3Front: 'Mobile Responsive', f3FrontSub: 'Looks great on every device, every screen',
    f3Back: 'All 100 templates are fully responsive. Hiring managers on their phones will love your portfolio just as much.',
    f4Front: 'Social Integration', f4FrontSub: 'WhatsApp, Instagram, LinkedIn, GitHub — one click',
    f4Back: 'Add your social links once. Visitors tap WA → opens WhatsApp. Tap IG → opens Instagram. Fully connected.',
    f5Front: 'Animated & Interactive', f5FrontSub: '3D flips, parallax, particles — never boring',
    f5Back: 'Every template comes loaded with smooth animations that make recruiters stop scrolling and pay attention to YOU.',
    f6Front: 'Free to Start', f6FrontSub: 'Create your first portfolio completely free',
    f6Back: 'No credit card. No hidden fees. Create your portfolio now, upgrade only when you need more templates or custom domains.',
    // Templates
    templateTag: 'Template Catalog',
    templateTitle: 'Pick Your <span class="gradient-text">Perfect Style</span>',
    templateSub: '100 templates across 10 categories. Use ← → arrows to browse.',
    catAll: '✨ All', catCosmic: '🌌 Cosmic', catNature: '🌿 Nature', catTech: '⚡ Tech/Neon',
    catMinimal: '🎯 Minimal', catVintage: '📷 Vintage', catArtistic: '🎨 Artistic',
    catCorporate: '💼 Corporate', catPlayful: '🎉 Playful', catOcean: '🌊 Ocean', catScifi: '🚀 Sci-Fi',
    useTemplate: 'Use This Template →',
    // How It Works
    howTag: 'Simple Process',
    howTitle: 'Ready in <span class="gradient-text">3 Easy Steps</span>',
    step1Title: 'Choose a Template', step1Sub: 'Browse 100 stunning templates. Pick the one that matches your vibe — from neon tech to galaxy cosmic.',
    step2Title: 'Fill Your Details', step2Sub: 'Add your name, role, experience, skills, photo, and social links. Takes less than 5 minutes.',
    step3Title: 'Share Your Link', step3Sub: 'Hit save and instantly get a shareable portfolio link. Send it to recruiters, add to your CV, done!',
    // Pricing
    pricingTag: 'Pricing',
    pricingTitle: 'Simple & <span class="gradient-text">Transparent</span> Pricing',
    priceFree: 'Free', pricePro: 'Popular', priceTeams: 'Teams',
    pFeature1a: '10 Templates Access', pFeature1b: '1 Portfolio Link', pFeature1c: 'All Social Links', pFeature1d: 'Mobile Responsive',
    pFeature1e: 'Custom Domain', pFeature1f: 'Analytics',
    pFeature2a: 'All 100 Templates', pFeature2b: 'Unlimited Portfolios', pFeature2c: 'All Social Links', pFeature2d: 'Mobile Responsive',
    pFeature2e: 'Custom Domain', pFeature2f: 'Analytics Dashboard',
    pFeature3a: 'Everything in Pro', pFeature3b: 'Up to 10 Team Members', pFeature3c: 'Brand Kit', pFeature3d: 'Priority Support',
    pFeature3e: 'White Label', pFeature3f: 'API Access',
    btnFree: 'Start Free', btnPro: 'Get Pro', btnTeams: 'Get Teams',
    // Footer
    footerDesc: 'Build your professional portfolio in minutes. Stand out from the crowd with stunning templates.',
    footerTemplates: 'Templates', footerCompany: 'Company',
    footerAbout: 'About', footerBlog: 'Blog', footerCareers: 'Careers', footerContact: 'Contact', footerPrivacy: 'Privacy Policy',
    footerFollow: 'Follow Us', footerCopy: '© 2026 PortfolioVerse. Made with 💜 for creative professionals.',
    // Modal
    modalTitle: 'Fill Your Portfolio Details',
    modalSub: 'Only fill what you want — empty fields will be hidden automatically.',
    secPhoto: '📷 Profile Photo', photoClick: 'Click to upload your photo',
    secPersonal: '🪪 Personal Information',
    lblName: 'Full Name', lblRole: 'Job Title / Role', lblLocation: 'Location', lblAbout: 'About Me',
    phName: 'e.g. Alexandra Rivera', phRole: 'e.g. UI/UX Designer', phLocation: 'e.g. Jakarta, Indonesia',
    phAbout: 'Tell the world about yourself — your passion, what drives you, what makes you unique...',
    secExp: '💼 Experience',
    lblCompany: 'Company / Organization', lblPosition: 'Position', lblPeriod: 'Period', lblDesc: 'Description',
    phCompany: 'e.g. Google', phPosition: 'e.g. Senior Designer', phPeriod: 'e.g. 2022 – Present', phDesc: 'Brief description of your role',
    btnAddExp: '+ Add Another Experience',
    secEdu: '🎓 Education',
    lblInstitution: 'Institution', lblDegree: 'Degree / Major', lblYear: 'Year',
    phInstitution: 'e.g. Universitas Indonesia', phDegree: 'e.g. S1 Informatika', phYear: 'e.g. 2018 – 2022',
    btnAddEdu: '+ Add Another Education',
    secSkills: '⭐ Skills', lblSkills: 'Skills (comma separated)', phSkills: 'e.g. Figma, React, Python, Photoshop, Leadership',
    secProjects: '🚀 Projects / Portfolio Work',
    lblProjName: 'Project Name', lblProjDesc: 'Description', lblProjTech: 'Tech Stack / Tools', lblProjLink: 'Project Link (optional)',
    phProjName: 'e.g. E-Commerce App', phProjDesc: 'Brief project description', phProjTech: 'e.g. React, Node.js, MongoDB', phProjLink: 'https://...',
    btnAddProj: '+ Add Another Project',
    secSocial: '🔗 Social & Contact Links',
    socialHint: 'Only fill what you have — empty ones won\'t appear on your portfolio.',
    lblWA: '📱 WhatsApp Number', lblIG: '📸 Instagram Username', lblLinkedIn: '💼 LinkedIn Profile URL',
    lblGitHub: '🐙 GitHub Username', lblEmail: '✉️ Email Address', lblWebsite: '🌐 Personal Website',
    phWA: 'e.g. 6281234567890 (with country code)', phIG: 'e.g. yourhandle (no @)',
    phLinkedIn: 'e.g. linkedin.com/in/yourname', phGitHub: 'e.g. yourusername',
    phEmail: 'e.g. you@email.com', phWebsite: 'e.g. https://yoursite.com',
    templateLabel: 'Template:', btnGenerate: '✨ Generate My Portfolio & Get Link',
    // Success Modal
    successTitle: 'Your Portfolio is Live!',
    successShare: 'Share this link with the world:',
    btnCopy: 'Copy', btnOpen: 'Open Portfolio', btnBack: '← Back to Templates',
    successNote: '💡 Bookmark this link — it\'s your permanent portfolio URL!',
    // Demo Modal
    demoTitle: '🎬 How PortfolioVerse Works',
    demoStep1: 'Browse 100 templates using ← → arrows',
    demoStep2: 'Click "Use This Template" on your favorite',
    demoStep3: 'Fill in your name, role, experience, skills & social links',
    demoStep4: 'Click "Generate My Portfolio"',
    demoStep5: 'Get your instant shareable link! 🚀',
    demoBtn: '🚀 Start Now — It\'s Free!',
    toastCopied: '🔗 Link copied to clipboard!',
    sliderOf: 'of',
  },
  id: {
    // Navbar
    navHome: 'Beranda', navFeatures: 'Fitur', navTemplates: 'Template',
    navHowItWorks: 'Cara Kerja', navPricing: 'Harga', navCta: 'Mulai Gratis',
    // Hero
    heroBadge: '✨ 100+ Template Menakjubkan',
    heroTitle: 'Buat <span class="gradient-text">Portofolio Impian</span><br/>dalam Hitungan Menit',
    heroSubtitle: 'Pilih dari 100 template memukau. Isi data kamu.<br/>Dapatkan tautan portofolio profesional yang bisa langsung dibagikan.',
    heroBtn1: 'Jelajahi Template', heroBtn2: 'Lihat Demo',
    heroStat1: 'Template', heroStat2: 'Portofolio Dibuat', heroStat3: 'Rating',
    // Features
    featureTag: 'Kenapa PortfolioVerse?',
    featureTitle: 'Semua yang Kamu Butuhkan untuk <span class="gradient-text">Bersinar Online</span>',
    f1Front: '100 Template Unik', f1FrontSub: 'Dari galaksi hingga vintage, semua gaya tersedia',
    f1Back: 'Cosmic gelap, neon tech, marine ocean, retro vintage, artistik kreatif — tidak ada yang sama. Setiap template dibuat dengan teliti.',
    f2Front: 'Tautan Portofolio Instan', f2FrontSub: 'Isi info kamu, klik simpan, dapatkan tautanmu',
    f2Back: 'Tanpa coding. Portofolio kamu tayang dalam 2 menit. Bagikan ke LinkedIn, CV, atau di mana saja.',
    f3Front: 'Responsif di Semua Perangkat', f3FrontSub: 'Tampak bagus di setiap perangkat dan layar',
    f3Back: 'Semua 100 template sepenuhnya responsif. HRD yang membukanya dari HP pun akan terkesan dengan portofoliomu.',
    f4Front: 'Integrasi Sosial Media', f4FrontSub: 'WhatsApp, Instagram, LinkedIn, GitHub — satu klik',
    f4Back: 'Tambahkan tautan sosial sekali. Pengunjung ketuk WA → buka WhatsApp. Ketuk IG → buka Instagram. Sepenuhnya terhubung.',
    f5Front: 'Animasi & Interaktif', f5FrontSub: 'Flip 3D, parallax, partikel — tidak pernah membosankan',
    f5Back: 'Setiap template dilengkapi animasi halus yang membuat rekruter berhenti scroll dan memperhatikan KAMU.',
    f6Front: 'Gratis untuk Memulai', f6FrontSub: 'Buat portofolio pertama kamu sepenuhnya gratis',
    f6Back: 'Tanpa kartu kredit. Tanpa biaya tersembunyi. Buat portofolio sekarang, upgrade hanya jika butuh lebih banyak template atau domain kustom.',
    // Templates
    templateTag: 'Katalog Template',
    templateTitle: 'Pilih <span class="gradient-text">Gaya Sempurna</span> Kamu',
    templateSub: '100 template dalam 10 kategori. Gunakan tombol ← → untuk menelusuri.',
    catAll: '✨ Semua', catCosmic: '🌌 Kosmik', catNature: '🌿 Alam', catTech: '⚡ Tech/Neon',
    catMinimal: '🎯 Minimal', catVintage: '📷 Vintage', catArtistic: '🎨 Artistik',
    catCorporate: '💼 Korporat', catPlayful: '🎉 Ceria', catOcean: '🌊 Samudra', catScifi: '🚀 Sci-Fi',
    useTemplate: 'Gunakan Template Ini →',
    // How It Works
    howTag: 'Proses Mudah',
    howTitle: 'Siap dalam <span class="gradient-text">3 Langkah Mudah</span>',
    step1Title: 'Pilih Template', step1Sub: 'Jelajahi 100 template menakjubkan. Pilih yang sesuai seleramu — dari neon tech hingga galaksi kosmik.',
    step2Title: 'Isi Data Kamu', step2Sub: 'Tambahkan nama, peran, pengalaman, keahlian, foto, dan tautan sosial. Kurang dari 5 menit.',
    step3Title: 'Bagikan Tautanmu', step3Sub: 'Klik simpan dan dapatkan tautan portofolio yang bisa dibagikan secara instan. Kirim ke rekruter, tambahkan ke CV, selesai!',
    // Pricing
    pricingTag: 'Harga',
    pricingTitle: 'Harga yang <span class="gradient-text">Sederhana & Transparan</span>',
    priceFree: 'Gratis', pricePro: 'Populer', priceTeams: 'Tim',
    pFeature1a: 'Akses 10 Template', pFeature1b: '1 Tautan Portofolio', pFeature1c: 'Semua Tautan Sosial', pFeature1d: 'Responsif di HP',
    pFeature1e: 'Domain Kustom', pFeature1f: 'Analitik',
    pFeature2a: 'Semua 100 Template', pFeature2b: 'Portofolio Tak Terbatas', pFeature2c: 'Semua Tautan Sosial', pFeature2d: 'Responsif di HP',
    pFeature2e: 'Domain Kustom', pFeature2f: 'Dasbor Analitik',
    pFeature3a: 'Semua Fitur Pro', pFeature3b: 'Hingga 10 Anggota Tim', pFeature3c: 'Brand Kit', pFeature3d: 'Dukungan Prioritas',
    pFeature3e: 'White Label', pFeature3f: 'Akses API',
    btnFree: 'Mulai Gratis', btnPro: 'Dapatkan Pro', btnTeams: 'Dapatkan Tim',
    // Footer
    footerDesc: 'Buat portofolio profesional dalam hitungan menit. Tampil beda dengan template memukau.',
    footerTemplates: 'Template', footerCompany: 'Perusahaan',
    footerAbout: 'Tentang', footerBlog: 'Blog', footerCareers: 'Karir', footerContact: 'Kontak', footerPrivacy: 'Kebijakan Privasi',
    footerFollow: 'Ikuti Kami', footerCopy: '© 2026 PortfolioVerse. Dibuat dengan 💜 untuk para profesional kreatif.',
    // Modal
    modalTitle: 'Isi Detail Portofolio Kamu',
    modalSub: 'Isi hanya yang kamu mau — bidang kosong akan disembunyikan secara otomatis.',
    secPhoto: '📷 Foto Profil', photoClick: 'Klik untuk unggah foto kamu',
    secPersonal: '🪪 Informasi Pribadi',
    lblName: 'Nama Lengkap', lblRole: 'Jabatan / Peran', lblLocation: 'Lokasi', lblAbout: 'Tentang Saya',
    phName: 'mis. Alexandra Rivera', phRole: 'mis. Desainer UI/UX', phLocation: 'mis. Jakarta, Indonesia',
    phAbout: 'Ceritakan tentang dirimu — passion, apa yang mendorongmu, apa yang membuatmu unik...',
    secExp: '💼 Pengalaman',
    lblCompany: 'Perusahaan / Organisasi', lblPosition: 'Posisi', lblPeriod: 'Periode', lblDesc: 'Deskripsi',
    phCompany: 'mis. Google', phPosition: 'mis. Senior Designer', phPeriod: 'mis. 2022 – Sekarang', phDesc: 'Deskripsi singkat peranmu',
    btnAddExp: '+ Tambah Pengalaman Lain',
    secEdu: '🎓 Pendidikan',
    lblInstitution: 'Institusi', lblDegree: 'Gelar / Jurusan', lblYear: 'Tahun',
    phInstitution: 'mis. Universitas Indonesia', phDegree: 'mis. S1 Informatika', phYear: 'mis. 2018 – 2022',
    btnAddEdu: '+ Tambah Pendidikan Lain',
    secSkills: '⭐ Keahlian', lblSkills: 'Keahlian (pisahkan dengan koma)', phSkills: 'mis. Figma, React, Python, Photoshop, Kepemimpinan',
    secProjects: '🚀 Proyek / Karya Portofolio',
    lblProjName: 'Nama Proyek', lblProjDesc: 'Deskripsi', lblProjTech: 'Tech Stack / Alat', lblProjLink: 'Tautan Proyek (opsional)',
    phProjName: 'mis. Aplikasi E-Commerce', phProjDesc: 'Deskripsi singkat proyek', phProjTech: 'mis. React, Node.js, MongoDB', phProjLink: 'https://...',
    btnAddProj: '+ Tambah Proyek Lain',
    secSocial: '🔗 Tautan Sosial & Kontak',
    socialHint: 'Isi hanya yang kamu punya — yang kosong tidak akan muncul di portofoliomu.',
    lblWA: '📱 Nomor WhatsApp', lblIG: '📸 Username Instagram', lblLinkedIn: '💼 URL Profil LinkedIn',
    lblGitHub: '🐙 Username GitHub', lblEmail: '✉️ Alamat Email', lblWebsite: '🌐 Website Pribadi',
    phWA: 'mis. 6281234567890 (dengan kode negara)', phIG: 'mis. usernamekamu (tanpa @)',
    phLinkedIn: 'mis. linkedin.com/in/namakamu', phGitHub: 'mis. usernamekamu',
    phEmail: 'mis. kamu@email.com', phWebsite: 'mis. https://situskamu.com',
    templateLabel: 'Template:', btnGenerate: '✨ Buat Portofolioku & Dapatkan Tautan',
    // Success Modal
    successTitle: 'Portofoliomu Sudah Tayang!',
    successShare: 'Bagikan tautan ini ke dunia:',
    btnCopy: 'Salin', btnOpen: 'Buka Portofolio', btnBack: '← Kembali ke Template',
    successNote: '💡 Simpan tautan ini — ini adalah URL portofolio permanen kamu!',
    // Demo Modal
    demoTitle: '🎬 Cara Kerja PortfolioVerse',
    demoStep1: 'Jelajahi 100 template menggunakan tombol ← →',
    demoStep2: 'Klik "Gunakan Template Ini" pada favoritmu',
    demoStep3: 'Isi nama, peran, pengalaman, keahlian & tautan sosial',
    demoStep4: 'Klik "Buat Portofoliomu"',
    demoStep5: 'Dapatkan tautan yang bisa dibagikan secara instan! 🚀',
    demoBtn: '🚀 Mulai Sekarang — Gratis!',
    toastCopied: '🔗 Tautan disalin ke clipboard!',
    sliderOf: 'dari',
  }
};

let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  document.getElementById('langToggle').textContent = `🌐 ${currentLang.toUpperCase()}`;
  applyTranslations();
}

function t(key) {
  return LANG[currentLang][key] || LANG['en'][key] || key;
}

function applyTranslations() {
  const L = LANG[currentLang];
  // Navbar
  const navLinks = document.querySelectorAll('.nav-link');
  const navKeys  = ['navHome','navFeatures','navTemplates','navHowItWorks','navPricing'];
  navLinks.forEach((el, i) => { if (navKeys[i]) el.textContent = L[navKeys[i]]; });
  document.getElementById('navCta').textContent = L.navCta;
  // Hero
  document.querySelector('.hero-badge').textContent = L.heroBadge;
  document.querySelector('.hero-title').innerHTML = L.heroTitle;
  document.querySelector('.hero-subtitle').innerHTML = L.heroSubtitle;
  const herobtns = document.querySelectorAll('.hero-actions button');
  if (herobtns[0]) herobtns[0].innerHTML = `<i class="fas fa-rocket"></i> ${L.heroBtn1}`;
  if (herobtns[1]) herobtns[1].innerHTML = `<i class="fas fa-play-circle"></i> ${L.heroBtn2}`;
  const statLabels = document.querySelectorAll('.stat-label');
  const statLabelKeys = ['heroStat1','heroStat2','heroStat3'];
  statLabels.forEach((el, i) => { if (statLabelKeys[i]) el.textContent = L[statLabelKeys[i]]; });
  // Features section tag/title
  const featureSection = document.querySelector('.features');
  if (featureSection) {
    featureSection.querySelector('.section-tag').textContent = L.featureTag;
    featureSection.querySelector('.section-title').innerHTML = L.featureTitle;
  }
  // Feature cards
  const fronts = document.querySelectorAll('.flip-front');
  const backs  = document.querySelectorAll('.flip-back');
  const fKeys = [
    ['f1Front','f1FrontSub','f1Back'],['f2Front','f2FrontSub','f2Back'],
    ['f3Front','f3FrontSub','f3Back'],['f4Front','f4FrontSub','f4Back'],
    ['f5Front','f5FrontSub','f5Back'],['f6Front','f6FrontSub','f6Back'],
  ];
  fronts.forEach((f, i) => {
    if (!fKeys[i]) return;
    const h3 = f.querySelector('h3'); const p = f.querySelector('p');
    if (h3) h3.textContent = L[fKeys[i][0]];
    if (p)  p.textContent  = L[fKeys[i][1]];
  });
  backs.forEach((b, i) => {
    if (!fKeys[i]) return;
    const h3 = b.querySelector('h3'); const p = b.querySelector('p');
    if (h3) h3.textContent = L[fKeys[i][0]];
    if (p)  p.textContent  = L[fKeys[i][2]];
  });
  // Templates section
  const tmplSection = document.querySelector('.templates-section');
  if (tmplSection) {
    tmplSection.querySelector('.section-tag').textContent = L.templateTag;
    tmplSection.querySelector('.section-title').innerHTML = L.templateTitle;
    tmplSection.querySelector('.section-sub').innerHTML = L.templateSub;
  }
  // Category tabs
  const catTabs = document.querySelectorAll('.cat-tab');
  const catKeys = ['catAll','catCosmic','catNature','catTech','catMinimal','catVintage','catArtistic','catCorporate','catPlayful','catOcean','catScifi'];
  catTabs.forEach((el, i) => { if (catKeys[i]) el.textContent = L[catKeys[i]]; });
  // "Use This Template" buttons
  document.querySelectorAll('.btn-use-template').forEach(el => { el.textContent = L.useTemplate; });
  // Slider counter
  updateSlider();
  // How It Works
  const hiw = document.querySelector('.how-it-works');
  if (hiw) {
    hiw.querySelector('.section-tag').textContent = L.howTag;
    hiw.querySelector('.section-title').innerHTML = L.howTitle;
    const stepCards = hiw.querySelectorAll('.step-card');
    const stepKeys = [['step1Title','step1Sub'],['step2Title','step2Sub'],['step3Title','step3Sub']];
    stepCards.forEach((s, i) => {
      if (!stepKeys[i]) return;
      const h3 = s.querySelector('h3'); const p = s.querySelector('p');
      if (h3) h3.textContent = L[stepKeys[i][0]];
      if (p)  p.textContent  = L[stepKeys[i][1]];
    });
  }
  // Pricing
  const pricing = document.querySelector('.pricing');
  if (pricing) {
    pricing.querySelector('.section-tag').textContent = L.pricingTag;
    pricing.querySelector('.section-title').innerHTML = L.pricingTitle;
    const cards = pricing.querySelectorAll('.pricing-card');
    // Card 1
    if (cards[0]) {
      const lis = cards[0].querySelectorAll('.pricing-features li');
      const keys1 = ['pFeature1a','pFeature1b','pFeature1c','pFeature1d','pFeature1e','pFeature1f'];
      lis.forEach((li, i) => {
        const icon = li.querySelector('i');
        li.textContent = ''; if (icon) li.appendChild(icon);
        li.append(' ' + L[keys1[i]]);
      });
      const btn = cards[0].querySelector('.btn-pricing'); if (btn) btn.textContent = L.btnFree;
    }
    // Card 2
    if (cards[1]) {
      const lis = cards[1].querySelectorAll('.pricing-features li');
      const keys2 = ['pFeature2a','pFeature2b','pFeature2c','pFeature2d','pFeature2e','pFeature2f'];
      lis.forEach((li, i) => {
        const icon = li.querySelector('i');
        li.textContent = ''; if (icon) li.appendChild(icon);
        li.append(' ' + L[keys2[i]]);
      });
      const btn = cards[1].querySelector('.btn-pricing'); if (btn) btn.textContent = L.btnPro;
    }
    // Card 3
    if (cards[2]) {
      const lis = cards[2].querySelectorAll('.pricing-features li');
      const keys3 = ['pFeature3a','pFeature3b','pFeature3c','pFeature3d','pFeature3e','pFeature3f'];
      lis.forEach((li, i) => {
        const icon = li.querySelector('i');
        li.textContent = ''; if (icon) li.appendChild(icon);
        li.append(' ' + L[keys3[i]]);
      });
      const btn = cards[2].querySelector('.btn-pricing'); if (btn) btn.textContent = L.btnTeams;
    }
  }
  // Footer
  const footer = document.querySelector('.footer');
  if (footer) {
    const p = footer.querySelector('.footer-brand p'); if (p) p.textContent = L.footerDesc;
    const cols = footer.querySelectorAll('.footer-links');
    if (cols[0]) cols[0].querySelector('h4').textContent = L.footerTemplates;
    if (cols[1]) {
      cols[1].querySelector('h4').textContent = L.footerCompany;
      const anchors = cols[1].querySelectorAll('a');
      const companyKeys = ['footerAbout','footerBlog','footerCareers','footerContact','footerPrivacy'];
      anchors.forEach((a, i) => { if (companyKeys[i]) a.textContent = L[companyKeys[i]]; });
    }
    if (cols[2]) cols[2].querySelector('h4').textContent = L.footerFollow;
    const copy = footer.querySelector('.footer-bottom p'); if (copy) copy.textContent = L.footerCopy;
  }
  // Modal form
  const modal = document.getElementById('modal');
  if (modal) {
    const mtitle = modal.querySelector('.modal-title'); if (mtitle) mtitle.textContent = L.modalTitle;
    const msub   = modal.querySelector('.modal-sub');   if (msub)   msub.textContent   = L.modalSub;
    const secTitles = modal.querySelectorAll('.form-section-title');
    const secTextKeys = ['secPhoto','secPersonal','secExp','secEdu','secSkills','secProjects','secSocial'];
    secTitles.forEach((el, i) => { if (secTextKeys[i]) { const ic = el.querySelector('i'); el.textContent = ''; if (ic) el.appendChild(ic); el.append(' ' + L[secTextKeys[i]].replace(/^[^\s]+\s/,'') ); } });
    // Photo
    const photoSpan = modal.querySelector('#photoPreview span'); if (photoSpan) photoSpan.textContent = L.photoClick;
    // Personal fields
    const setField = (id, lbl, ph) => {
      const el = document.getElementById(id); if (!el) return;
      const label = el.previousElementSibling || el.parentElement.querySelector('label');
      if (label) {
        const req = label.querySelector('.required');
        label.textContent = L[lbl];
        if (req) label.appendChild(req);
      }
      el.placeholder = L[ph];
    };
    const setLabel = (id, lbl) => {
      const el = document.getElementById(id); if (!el) return;
      const label = el.previousElementSibling || el.parentElement.querySelector('label');
      if (label) {
        const req = label.querySelector('.required');
        label.textContent = L[lbl];
        if (req) label.appendChild(req);
      }
    };
    document.getElementById('inputName').placeholder = L.phName;
    document.getElementById('inputRole').placeholder = L.phRole;
    document.getElementById('inputLocation').placeholder = L.phLocation;
    document.getElementById('inputAbout').placeholder = L.phAbout;
    // Update visible labels
    const formGroups = modal.querySelectorAll('.form-group');
    // Skills
    const skillsInput = document.getElementById('inputSkills');
    if (skillsInput) skillsInput.placeholder = L.phSkills;
    // Socials
    const socInputs = [
      { id:'inputWA', lbl:'lblWA', ph:'phWA' }, { id:'inputIG', lbl:'lblIG', ph:'phIG' },
      { id:'inputLinkedIn', lbl:'lblLinkedIn', ph:'phLinkedIn' }, { id:'inputGitHub', lbl:'lblGitHub', ph:'phGitHub' },
      { id:'inputEmail', lbl:'lblEmail', ph:'phEmail' }, { id:'inputWebsite', lbl:'lblWebsite', ph:'phWebsite' },
    ];
    socInputs.forEach(s => {
      const inp = document.getElementById(s.id); if (!inp) return;
      inp.placeholder = L[s.ph];
      const lbl = inp.closest('.form-group')?.querySelector('label'); if (lbl) lbl.innerHTML = L[s.lbl];
    });
    // Add buttons
    const addBtns = modal.querySelectorAll('.btn-add-item');
    const addKeys = ['btnAddExp','btnAddEdu','btnAddProj'];
    addBtns.forEach((b, i) => { if (addKeys[i]) b.innerHTML = `<i class="fas fa-plus"></i> ${L[addKeys[i]]}`; });
    // Generate btn
    const genBtn = modal.querySelector('.btn-generate'); if (genBtn) genBtn.innerHTML = `<i class="fas fa-magic"></i> ${L.btnGenerate}`;
    const tmplLabel = modal.querySelector('.template-preview-badge');
    if (tmplLabel) {
      const strong = tmplLabel.querySelector('strong');
      tmplLabel.textContent = L.templateLabel + ' ';
      if (strong) tmplLabel.appendChild(strong);
    }
    // Social hint
    const hint = modal.querySelector('.form-hint'); if (hint) hint.textContent = L.socialHint;
  }
  // Success modal
  const successModal = document.querySelector('.success-modal');
  if (successModal) {
    const h2 = successModal.querySelector('h2'); if (h2) h2.textContent = L.successTitle;
    const ps = successModal.querySelectorAll('p');
    if (ps[0]) ps[0].textContent = L.successShare;
    const btnCopy = successModal.querySelector('.btn-copy'); if (btnCopy) btnCopy.innerHTML = `<i class="fas fa-copy"></i> ${L.btnCopy}`;
    const actBtns = successModal.querySelectorAll('.success-actions button');
    if (actBtns[0]) actBtns[0].innerHTML = `<i class="fas fa-external-link-alt"></i> ${L.btnOpen}`;
    if (actBtns[1]) actBtns[1].innerHTML = `<i class="fas fa-arrow-left"></i> ${L.btnBack}`;
    const note = successModal.querySelector('.success-note'); if (note) note.textContent = L.successNote;
  }
  // Demo modal
  const demoModal = document.querySelector('.demo-modal');
  if (demoModal) {
    const h2 = demoModal.querySelector('h2'); if (h2) h2.textContent = L.demoTitle;
    const steps = demoModal.querySelectorAll('.demo-step');
    const demoStepKeys = ['demoStep1','demoStep2','demoStep3','demoStep4','demoStep5'];
    steps.forEach((s, i) => {
      const sp = s.querySelector('span');
      s.textContent = '';
      if (sp) s.appendChild(sp);
      s.append(' ' + L[demoStepKeys[i]]);
    });
    const demoBtn = demoModal.querySelector('.btn-primary'); if (demoBtn) demoBtn.textContent = L.demoBtn;
  }
}

/* ─── STATE ──────────────────────────────────────────────────── */
let currentCategory   = 'all';
let filteredTemplates = [...TEMPLATES];
let currentIndex      = 0;        // first visible card index
let CARDS_VISIBLE     = 5;        // how many cards shown at once
let selectedTemplate  = null;
let photoDataURL      = null;
let expCount          = 1;
let eduCount          = 1;
let projCount         = 1;

/* ─── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildStarfield();
  buildTemplateCards();
  buildSliderDots();
  updateSlider();
  initScrollEffects();
  initNavScroll();
  calcCardsVisible();
  window.addEventListener('resize', () => { calcCardsVisible(); updateSlider(); });
  // keyboard arrows
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  slideLeft();
    if (e.key === 'ArrowRight') slideRight();
    if (e.key === 'Escape')     { closeModal(); closeSuccess(); closeDemo(); }
  });
});

/* ─── STARFIELD ──────────────────────────────────────────────── */
function buildStarfield() {
  const field = document.getElementById('starfield');
  const count = 220;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      --dur:${(Math.random()*4+2).toFixed(1)}s;
      --delay:-${(Math.random()*6).toFixed(1)}s;
      --min-op:${(Math.random()*0.3+0.05).toFixed(2)};
    `;
    field.appendChild(s);
  }
}

/* ─── NAVBAR SCROLL ──────────────────────────────────────────── */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ─── HAMBURGER ──────────────────────────────────────────────── */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

/* ─── SCROLL ANIMATIONS ──────────────────────────────────────── */
function initScrollEffects() {
  const els = document.querySelectorAll(
    '.feature-card, .step-card, .pricing-card, .section-header'
  );
  els.forEach(el => el.classList.add('reveal'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/* ─── TEMPLATE CARDS ─────────────────────────────────────────── */
function buildTemplateCards() {
  const track = document.getElementById('templatesTrack');
  track.innerHTML = '';
  filteredTemplates.forEach(t => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.dataset.id = t.id;
    card.dataset.cat = t.category;

    // build dynamic preview background
    let previewStyle = `background: ${t.previewGrad};`;
    if (t.pattern && t.pattern !== 'none') {
      previewStyle += ` position:relative;`;
    }

    card.innerHTML = `
      <div class="template-preview" style="${previewStyle}">
        ${t.pattern && t.pattern !== 'none'
          ? `<div style="position:absolute;inset:0;background:${t.pattern};${t.patternSize ? `background-size:${t.patternSize};` : ''}opacity:1;border-radius:inherit;"></div>`
          : ''}
        <div class="template-number">#${String(t.id).padStart(2,'0')}</div>
        <div class="template-preview-inner" style="position:relative;z-index:1;">
          <div class="preview-avatar">${t.emoji}</div>
          <div class="preview-name" style="color:${t.accent};">Your Name</div>
          <div class="preview-role" style="color:rgba(255,255,255,0.65);">Your Role</div>
          <div class="preview-dots">
            <div class="preview-dot" style="background:${t.accent};"></div>
            <div class="preview-dot"></div>
            <div class="preview-dot"></div>
          </div>
        </div>
        <!-- hover glow -->
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%, ${t.accent}22 0%, transparent 70%);pointer-events:none;border-radius:inherit;opacity:0;transition:opacity 0.3s;" class="card-glow"></div>
      </div>
      <div class="template-info">
        <div class="template-name">${t.emoji} ${t.name}</div>
        <div class="template-tags">
          ${t.tags.map(tag => `<span class="template-tag">${tag}</span>`).join('')}
        </div>
        <button class="btn-use-template" onclick="openModal(${t.id})">
          Use This Template →
        </button>
      </div>
    `;

    // glow on hover
    card.addEventListener('mouseenter', () => {
      card.querySelector('.card-glow').style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.card-glow').style.opacity = '0';
    });

    track.appendChild(card);
  });
}

/* ─── CATEGORY FILTER ────────────────────────────────────────── */
function filterCategory(cat, btn) {
  currentCategory = cat;
  currentIndex = 0;
  filteredTemplates = cat === 'all' ? [...TEMPLATES] : TEMPLATES.filter(t => t.category === cat);

  // update tab active state
  if (btn) {
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  buildTemplateCards();
  buildSliderDots();
  updateSlider();

  // scroll to templates
  document.getElementById('templates').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── SLIDER ─────────────────────────────────────────────────── */
function calcCardsVisible() {
  const w = window.innerWidth;
  if (w < 480)       CARDS_VISIBLE = 1;
  else if (w < 640)  CARDS_VISIBLE = 2;
  else if (w < 900)  CARDS_VISIBLE = 3;
  else if (w < 1200) CARDS_VISIBLE = 4;
  else               CARDS_VISIBLE = 5;
}

function updateSlider() {
  const track = document.getElementById('templatesTrack');
  const CARD_WIDTH = 240 + 24; // card width + gap
  const maxIndex = Math.max(0, filteredTemplates.length - CARDS_VISIBLE);
  currentIndex = Math.min(currentIndex, maxIndex);

  // offset
  const offset = currentIndex * CARD_WIDTH;
  track.style.transform = `translateX(-${offset}px)`;

  // arrows
  document.getElementById('arrowLeft').disabled  = currentIndex === 0;
  document.getElementById('arrowRight').disabled = currentIndex >= maxIndex;

  // counter
  const start = currentIndex + 1;
  const end   = Math.min(currentIndex + CARDS_VISIBLE, filteredTemplates.length);
  document.getElementById('sliderCounter').textContent =
    `${start} – ${end} ${t('sliderOf')} ${filteredTemplates.length}`;

  // dots
  updateDots();
}

function slideLeft() {
  if (currentIndex > 0) { currentIndex--; updateSlider(); }
}

function slideRight() {
  const maxIndex = Math.max(0, filteredTemplates.length - CARDS_VISIBLE);
  if (currentIndex < maxIndex) { currentIndex++; updateSlider(); }
}

/* ─── SLIDER DOTS ────────────────────────────────────────────── */
function buildSliderDots() {
  const container = document.getElementById('sliderDots');
  container.innerHTML = '';
  const pages = Math.ceil(filteredTemplates.length / CARDS_VISIBLE);
  const maxDots = Math.min(pages, 12); // cap dots
  for (let i = 0; i < maxDots; i++) {
    const dot = document.createElement('div');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => { currentIndex = i * CARDS_VISIBLE; updateSlider(); };
    container.appendChild(dot);
  }
}

function updateDots() {
  const dots = document.querySelectorAll('.slider-dot');
  const page = Math.floor(currentIndex / CARDS_VISIBLE);
  dots.forEach((d, i) => d.classList.toggle('active', i === page));
}

/* ─── SCROLL TO TEMPLATES ────────────────────────────────────── */
function scrollToTemplates() {
  document.getElementById('templates').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── MODAL — OPEN / CLOSE ───────────────────────────────────── */
function openModal(templateId) {
  selectedTemplate = getTemplateById(templateId);

  document.getElementById('modalBadge').textContent =
    `${selectedTemplate.emoji} ${selectedTemplate.name}`;
  document.getElementById('selectedTemplateName').textContent =
    `${selectedTemplate.emoji} ${selectedTemplate.name}`;

  const overlay = document.getElementById('modalOverlay');
  overlay.style.display = 'flex';
  requestAnimationFrame(() => overlay.classList.add('active'));

  // reset form
  document.getElementById('portfolioForm').reset();
  resetPhotoPreview();
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  setTimeout(() => { overlay.style.display = 'none'; }, 400);
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

/* ─── PHOTO PREVIEW ──────────────────────────────────────────── */
function previewPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    photoDataURL = e.target.result;
    const preview = document.getElementById('photoPreview');
    preview.innerHTML = `<img src="${photoDataURL}" alt="Your photo" style="width:100px;height:100px;border-radius:50%;object-fit:cover;border:3px solid var(--accent-purple);" /><span style="font-size:0.75rem;color:var(--accent-violet);margin-top:0.4rem;">Photo uploaded ✓</span>`;
  };
  reader.readAsDataURL(file);
}

function resetPhotoPreview() {
  photoDataURL = null;
  const preview = document.getElementById('photoPreview');
  preview.innerHTML = `<i class="fas fa-camera"></i><span>Click to upload your photo</span>`;
}

/* ─── ADD / REMOVE EXPERIENCE ────────────────────────────────── */
function addExperience() {
  const list = document.getElementById('experienceList');
  const id = expCount++;
  const div = document.createElement('div');
  div.className = 'experience-item';
  div.id = `exp-${id}`;
  div.innerHTML = `
    <button type="button" class="btn-remove-item" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
    <div class="form-grid">
      <div class="form-group"><label>Company / Organization</label><input type="text" class="exp-company" placeholder="e.g. Google"/></div>
      <div class="form-group"><label>Position</label><input type="text" class="exp-position" placeholder="e.g. Senior Designer"/></div>
      <div class="form-group"><label>Period</label><input type="text" class="exp-period" placeholder="e.g. 2022 – Present"/></div>
      <div class="form-group"><label>Description</label><input type="text" class="exp-desc" placeholder="Brief description"/></div>
    </div>`;
  list.appendChild(div);
}

/* ─── ADD / REMOVE EDUCATION ─────────────────────────────────── */
function addEducation() {
  const list = document.getElementById('educationList');
  const id = eduCount++;
  const div = document.createElement('div');
  div.className = 'education-item';
  div.id = `edu-${id}`;
  div.innerHTML = `
    <button type="button" class="btn-remove-item" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
    <div class="form-grid">
      <div class="form-group"><label>Institution</label><input type="text" class="edu-institution" placeholder="e.g. Universitas Indonesia"/></div>
      <div class="form-group"><label>Degree / Major</label><input type="text" class="edu-degree" placeholder="e.g. S1 Informatika"/></div>
      <div class="form-group"><label>Year</label><input type="text" class="edu-year" placeholder="e.g. 2018 – 2022"/></div>
    </div>`;
  list.appendChild(div);
}

/* ─── ADD / REMOVE PROJECT ───────────────────────────────────── */
function addProject() {
  const list = document.getElementById('projectList');
  const id = projCount++;
  const div = document.createElement('div');
  div.className = 'project-item';
  div.id = `proj-${id}`;
  div.innerHTML = `
    <button type="button" class="btn-remove-item" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
    <div class="form-grid">
      <div class="form-group"><label>Project Name</label><input type="text" class="proj-name" placeholder="e.g. E-Commerce App"/></div>
      <div class="form-group"><label>Description</label><input type="text" class="proj-desc" placeholder="Brief project description"/></div>
      <div class="form-group"><label>Tech Stack / Tools</label><input type="text" class="proj-tech" placeholder="e.g. React, Node.js"/></div>
      <div class="form-group"><label>Project Link (optional)</label><input type="text" class="proj-link" placeholder="https://..."/></div>
    </div>`;
  list.appendChild(div);
}

/* ─── COLLECT FORM DATA ──────────────────────────────────────── */
function collectFormData() {
  // Personal
  const name     = document.getElementById('inputName').value.trim();
  const role     = document.getElementById('inputRole').value.trim();
  const location = document.getElementById('inputLocation').value.trim();
  const about    = document.getElementById('inputAbout').value.trim();
  const skillsRaw= document.getElementById('inputSkills').value.trim();
  const skills   = skillsRaw ? skillsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

  // Social
  const wa       = document.getElementById('inputWA').value.trim();
  const ig       = document.getElementById('inputIG').value.trim();
  const linkedin = document.getElementById('inputLinkedIn').value.trim();
  const github   = document.getElementById('inputGitHub').value.trim();
  const email    = document.getElementById('inputEmail').value.trim();
  const website  = document.getElementById('inputWebsite').value.trim();

  // Experience
  const experiences = [];
  document.querySelectorAll('.experience-item').forEach(item => {
    const company  = item.querySelector('.exp-company')?.value.trim();
    const position = item.querySelector('.exp-position')?.value.trim();
    const period   = item.querySelector('.exp-period')?.value.trim();
    const desc     = item.querySelector('.exp-desc')?.value.trim();
    if (company || position) {
      experiences.push({ company, position, period, desc });
    }
  });

  // Education
  const educations = [];
  document.querySelectorAll('.education-item').forEach(item => {
    const institution = item.querySelector('.edu-institution')?.value.trim();
    const degree      = item.querySelector('.edu-degree')?.value.trim();
    const year        = item.querySelector('.edu-year')?.value.trim();
    if (institution || degree) {
      educations.push({ institution, degree, year });
    }
  });

  // Projects
  const projects = [];
  document.querySelectorAll('.project-item').forEach(item => {
    const pname = item.querySelector('.proj-name')?.value.trim();
    const pdesc = item.querySelector('.proj-desc')?.value.trim();
    const tech  = item.querySelector('.proj-tech')?.value.trim();
    const link  = item.querySelector('.proj-link')?.value.trim();
    if (pname || pdesc) {
      projects.push({ name: pname, desc: pdesc, tech, link });
    }
  });

  return { name, role, location, about, skills, wa, ig, linkedin, github, email, website, experiences, educations, projects };
}

/* ─── GENERATE PORTFOLIO HTML ────────────────────────────────── */
function generatePortfolioHTML(data, template) {
  const t = template;

  // Social buttons — only render if filled
  const socials = [];
  if (data.wa)       socials.push({ icon: 'fa-whatsapp', label: 'WhatsApp', href: `https://wa.me/${data.wa.replace(/\D/g,'')}`, color: '#25D366' });
  if (data.ig)       socials.push({ icon: 'fa-instagram', label: 'Instagram', href: `https://instagram.com/${data.ig}`, color: '#E1306C' });
  if (data.linkedin) socials.push({ icon: 'fa-linkedin', label: 'LinkedIn', href: data.linkedin.startsWith('http') ? data.linkedin : `https://${data.linkedin}`, color: '#0A66C2' });
  if (data.github)   socials.push({ icon: 'fa-github', label: 'GitHub', href: `https://github.com/${data.github}`, color: '#333' });
  if (data.email)    socials.push({ icon: 'fa-envelope', label: 'Email', href: `mailto:${data.email}`, color: '#EA4335', fab: false });
  if (data.website)  socials.push({ icon: 'fa-globe', label: 'Website', href: data.website.startsWith('http') ? data.website : `https://${data.website}`, color: '#6366f1', fab: false });

  // Initials for avatar fallback
  const initials = data.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();

  // Pattern layer
  const patternLayer = (t.pattern && t.pattern !== 'none')
    ? `<div style="position:fixed;inset:0;background:${t.pattern};${t.patternSize ? `background-size:${t.patternSize};` : ''}pointer-events:none;z-index:0;"></div>`
    : '';

  // Skills HTML
  const skillsHTML = data.skills.length
    ? `<div class="section-block">
        <h2 class="section-heading"><span class="heading-icon">⭐</span> Skills</h2>
        <div class="skills-grid">
          ${data.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
        </div>
      </div>` : '';

  // Experience HTML
  const expHTML = data.experiences.length
    ? `<div class="section-block">
        <h2 class="section-heading"><span class="heading-icon">💼</span> Experience</h2>
        ${data.experiences.map(e => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <strong>${e.company || '—'}</strong>
                ${e.period ? `<span class="timeline-period">${e.period}</span>` : ''}
              </div>
              ${e.position ? `<div class="timeline-role">${e.position}</div>` : ''}
              ${e.desc ? `<p class="timeline-desc">${e.desc}</p>` : ''}
            </div>
          </div>`).join('')}
      </div>` : '';

  // Education HTML
  const eduHTML = data.educations.length
    ? `<div class="section-block">
        <h2 class="section-heading"><span class="heading-icon">🎓</span> Education</h2>
        ${data.educations.map(e => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <strong>${e.institution || '—'}</strong>
                ${e.year ? `<span class="timeline-period">${e.year}</span>` : ''}
              </div>
              ${e.degree ? `<div class="timeline-role">${e.degree}</div>` : ''}
            </div>
          </div>`).join('')}
      </div>` : '';

  // Projects HTML
  const projHTML = data.projects.length
    ? `<div class="section-block">
        <h2 class="section-heading"><span class="heading-icon">🚀</span> Projects</h2>
        <div class="projects-grid">
          ${data.projects.map(p => `
            <div class="project-card">
              <div class="project-name">${p.name || 'Untitled Project'}</div>
              ${p.desc ? `<p class="project-desc">${p.desc}</p>` : ''}
              ${p.tech ? `<div class="project-tech">${p.tech.split(',').map(t2 => `<span>${t2.trim()}</span>`).join('')}</div>` : ''}
              ${p.link ? `<a href="${p.link}" target="_blank" class="project-link-btn">View Project →</a>` : ''}
            </div>`).join('')}
        </div>
      </div>` : '';

  // Contact section
  const contactHTML = socials.length
    ? `<div class="section-block" id="contact">
        <h2 class="section-heading"><span class="heading-icon">📞</span> Contact & Socials</h2>
        <div class="social-buttons">
          ${socials.map(s => `
            <a href="${s.href}" target="${s.href.startsWith('mailto') ? '_self' : '_blank'}" class="social-btn" style="--sbg:${s.color}20;--sborder:${s.color}60;--scolor:${s.color};">
              <i class="fab ${s.fab === false ? '' : ''}${s.fab === false ? 'fas' : 'fab'} ${s.icon}"></i>
              ${s.label}
            </a>`).join('')}
        </div>
      </div>` : '';

  // Avatar
  const avatarHTML = photoDataURL
    ? `<img src="${photoDataURL}" alt="${data.name}" class="hero-photo"/>`
    : `<div class="hero-avatar-placeholder">${initials}</div>`;

  // Nav links (only sections that have content)
  const navItems = [
    { id: 'about', label: 'About Me', show: true },
    { id: 'skills', label: 'Skills', show: data.skills.length > 0 },
    { id: 'experience', label: 'Experience', show: data.experiences.length > 0 },
    { id: 'education', label: 'Education', show: data.educations.length > 0 },
    { id: 'projects', label: 'Projects', show: data.projects.length > 0 },
    { id: 'contact', label: 'Contact', show: socials.length > 0 },
  ].filter(n => n.show);

  const navHTML = navItems.map(n =>
    `<a href="#${n.id}" class="port-nav-link">${n.label}</a>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${data.name} — Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --accent:   ${t.accent};
      --accent2:  ${t.accent2};
      --text:     ${t.text};
      --card-bg:  ${t.cardBg};
      --border:   ${t.border};
      --bg:       ${t.bg};
      --font:     ${t.font};
      --body-font:${t.bodyFont};
    }
    html { scroll-behavior: smooth; }
    body {
      font-family: var(--body-font);
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }
    /* Stars */
    .starfield { position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden; }
    .star { position:absolute;border-radius:50%;background:#fff;animation:twinkle var(--dur,3s) ease-in-out infinite var(--delay,0s); }
    @keyframes twinkle { 0%,100%{opacity:var(--min-op,0.15);transform:scale(1)}50%{opacity:1;transform:scale(1.5)} }
    /* Nav */
    .port-nav {
      position:fixed;top:0;left:0;right:0;z-index:100;
      display:flex;align-items:center;justify-content:space-between;
      padding:1rem 3rem;
      background:rgba(0,0,0,0.6);backdrop-filter:blur(20px);
      border-bottom:1px solid var(--border);
    }
    .port-nav-brand { font-family:var(--font);font-size:1rem;font-weight:700;color:var(--accent); }
    .port-nav-links { display:flex;gap:1.5rem;flex-wrap:wrap; }
    .port-nav-link { text-decoration:none;color:var(--text);opacity:0.7;font-size:0.85rem;font-weight:500;transition:all 0.3s; }
    .port-nav-link:hover { opacity:1;color:var(--accent); }
    /* Hero */
    .port-hero {
      position:relative;z-index:10;
      min-height:100vh;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      text-align:center;padding:8rem 2rem 4rem;gap:1.5rem;
    }
    /* 3D flip on photo */
    .photo-flip-wrap { perspective:800px;width:160px;height:160px;margin:0 auto;cursor:pointer; }
    .photo-flip-inner { width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.8s cubic-bezier(0.23,1,0.32,1); }
    .photo-flip-wrap:hover .photo-flip-inner { transform:rotateY(360deg); }
    .hero-photo {
      width:160px;height:160px;border-radius:50%;object-fit:cover;
      border:4px solid var(--accent);
      box-shadow:0 0 30px ${t.accent}66,0 0 60px ${t.accent}33;
      animation:float-hero 4s ease-in-out infinite;
    }
    .hero-avatar-placeholder {
      width:160px;height:160px;border-radius:50%;
      background:var(--card-bg);border:4px solid var(--accent);
      display:flex;align-items:center;justify-content:center;
      font-family:var(--font);font-size:3rem;font-weight:700;color:var(--accent);
      box-shadow:0 0 30px ${t.accent}66;
      animation:float-hero 4s ease-in-out infinite;
    }
    @keyframes float-hero { 0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)} }
    .hero-name {
      font-family:var(--font);font-size:clamp(2rem,6vw,3.5rem);font-weight:900;
      background:linear-gradient(135deg,var(--accent),var(--accent2));
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      background-size:200% auto;animation:grad-flow 4s ease infinite;line-height:1.1;
    }
    @keyframes grad-flow{0%{background-position:0%}50%{background-position:100%}100%{background-position:0%}}
    .hero-role { font-size:1.2rem;opacity:0.75;font-weight:500;letter-spacing:1px; }
    .hero-location { font-size:0.9rem;opacity:0.5;display:flex;align-items:center;gap:0.4rem;justify-content:center; }
    .hero-divider { width:60px;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:2px;margin:0 auto; }
    .hero-scroll-cta { opacity:0.4;font-size:0.8rem;animation:bounce-hint 2s ease-in-out infinite; }
    @keyframes bounce-hint{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
    /* Main Content */
    .port-main {
      position:relative;z-index:10;
      max-width:900px;margin:0 auto;padding:2rem 2rem 6rem;
      display:flex;flex-direction:column;gap:3rem;
    }
    /* Sections */
    .section-block {
      background:var(--card-bg);
      border-radius:20px;padding:2rem;
      backdrop-filter:blur(10px);
      animation:fade-in-up 0.7s ease both;
    }
    @keyframes fade-in-up{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
    .section-heading {
      font-family:var(--font);font-size:1.3rem;font-weight:700;
      color:var(--accent);margin-bottom:1.5rem;
      display:flex;align-items:center;gap:0.6rem;
    }
    .heading-icon { font-family:sans-serif; }
    /* About */
    .about-text { font-size:1rem;line-height:1.8;opacity:0.85; }
    /* Skills */
    .skills-grid { display:flex;flex-wrap:wrap;gap:0.6rem; }
    .skill-pill {
      background:var(--card-bg);border:1px solid var(--border);
      color:var(--accent);padding:0.4rem 1rem;border-radius:50px;
      font-size:0.85rem;font-weight:600;
      transition:all 0.3s;cursor:default;
    }
    .skill-pill:hover { background:var(--accent);color:#000;border-color:var(--accent);transform:translateY(-2px); }
    /* Timeline */
    .timeline-item { display:flex;gap:1rem;padding-bottom:1.5rem;position:relative; }
    .timeline-item:last-child { padding-bottom:0; }
    .timeline-dot {
      width:14px;height:14px;border-radius:50%;background:var(--accent);
      flex-shrink:0;margin-top:0.3rem;
      box-shadow:0 0 10px var(--accent);
    }
    .timeline-content { flex:1; }
    .timeline-header { display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.3rem; }
    .timeline-header strong { font-size:1rem;color:var(--text); }
    .timeline-period { font-size:0.8rem;opacity:0.6;background:var(--card-bg);border:1px solid var(--border);padding:0.2rem 0.6rem;border-radius:20px; }
    .timeline-role { font-size:0.9rem;color:var(--accent);font-weight:600;margin-bottom:0.3rem; }
    .timeline-desc { font-size:0.85rem;opacity:0.7;line-height:1.6; }
    /* Projects */
    .projects-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem; }
    .project-card {
      background:rgba(0,0,0,0.2);border:1px solid var(--border);
      border-radius:12px;padding:1.2rem;
      transition:all 0.3s;
    }
    .project-card:hover { transform:translateY(-4px);border-color:var(--accent);box-shadow:0 8px 24px ${t.accent}33; }
    .project-name { font-size:1rem;font-weight:700;color:var(--accent);margin-bottom:0.5rem; }
    .project-desc { font-size:0.85rem;opacity:0.75;line-height:1.6;margin-bottom:0.7rem; }
    .project-tech { display:flex;flex-wrap:wrap;gap:4px;margin-bottom:0.7rem; }
    .project-tech span { background:var(--card-bg);border:1px solid var(--border);color:var(--text);padding:0.15rem 0.5rem;border-radius:6px;font-size:0.72rem; }
    .project-link-btn {
      display:inline-block;text-decoration:none;
      color:var(--accent);font-size:0.8rem;font-weight:600;
      border:1px solid var(--accent);padding:0.3rem 0.8rem;border-radius:6px;
      transition:all 0.3s;
    }
    .project-link-btn:hover { background:var(--accent);color:#000; }
    /* Social Buttons */
    .social-buttons { display:flex;flex-wrap:wrap;gap:0.8rem; }
    .social-btn {
      display:inline-flex;align-items:center;gap:0.5rem;
      text-decoration:none;color:var(--scolor);
      background:var(--sbg);border:1px solid var(--sborder);
      padding:0.7rem 1.4rem;border-radius:50px;
      font-size:0.9rem;font-weight:600;
      transition:all 0.3s;
    }
    .social-btn:hover { transform:translateY(-3px);box-shadow:0 8px 20px var(--sborder); }
    /* Back button */
    .back-btn {
      position:fixed;bottom:2rem;right:2rem;z-index:200;
      background:linear-gradient(135deg,${t.accent},${t.accent2});
      border:none;color:#fff;padding:0.8rem 1.4rem;border-radius:50px;
      font-size:0.9rem;font-weight:700;cursor:pointer;
      box-shadow:0 8px 24px ${t.accent}66;
      transition:all 0.3s;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;
    }
    .back-btn:hover { transform:translateY(-3px); }
    /* Footer */
    .port-footer {
      text-align:center;padding:2rem;
      opacity:0.4;font-size:0.8rem;
      position:relative;z-index:10;
    }
    /* Responsive */
    @media(max-width:768px){
      .port-nav{padding:0.8rem 1rem;}
      .port-nav-links{gap:0.6rem;flex-wrap:wrap;justify-content:flex-end;max-width:60%;}
      .port-nav-link{font-size:0.7rem;}
      .port-main{padding:1rem 1rem 5rem;}
      .port-hero{padding:6rem 1.2rem 3rem;}
      .hero-name{font-size:clamp(1.6rem,8vw,3rem);}
      .projects-grid{grid-template-columns:1fr;}
      .social-buttons{justify-content:center;}
      .section-block{padding:1.2rem;}
    }
    @media(max-width:480px){
      .port-nav-links{display:none;}
      .port-hero{padding:5.5rem 1rem 2.5rem;gap:1rem;}
      .photo-flip-wrap{width:120px;height:120px;}
      .hero-photo,.hero-avatar-placeholder{width:120px;height:120px;font-size:2.2rem;}
      .hero-name{font-size:clamp(1.4rem,7vw,2.5rem);}
      .hero-role{font-size:1rem;}
      .section-heading{font-size:1.1rem;}
      .social-btn{font-size:0.82rem;padding:0.55rem 1rem;}
      .back-btn{bottom:1rem;right:1rem;font-size:0.8rem;padding:0.6rem 1rem;}
    }
  </style>
</head>
<body>
  <!-- Stars -->
  <div class="starfield" id="pStarfield"></div>
  ${patternLayer}

  <!-- Nav -->
  <nav class="port-nav">
    <div class="port-nav-brand">${data.name.split(' ')[0]}</div>
    <div class="port-nav-links">${navHTML}</div>
  </nav>

  <!-- Hero -->
  <section class="port-hero" id="about">
    <div class="photo-flip-wrap">
      <div class="photo-flip-inner">${avatarHTML}</div>
    </div>
    <h1 class="hero-name">${data.name}</h1>
    <p class="hero-role">${data.role}</p>
    ${data.location ? `<p class="hero-location"><i class="fas fa-map-marker-alt"></i> ${data.location}</p>` : ''}
    <div class="hero-divider"></div>
    <p class="hero-scroll-cta">↓ scroll to explore ↓</p>
  </section>

  <!-- Main Content -->
  <main class="port-main">

    <!-- About -->
    <div class="section-block" id="about-block">
      <h2 class="section-heading"><span class="heading-icon">👋</span> About Me</h2>
      <p class="about-text">${data.about}</p>
    </div>

    <!-- Skills -->
    ${data.skills.length ? `<div class="section-block" id="skills">${skillsHTML.replace('<div class="section-block">','').replace('</div>','')}</div>` : ''}

    <!-- Experience -->
    ${data.experiences.length ? `<div class="section-block" id="experience">${expHTML.replace('<div class="section-block">','').replace('</div>','')}</div>` : ''}

    <!-- Education -->
    ${data.educations.length ? `<div class="section-block" id="education">${eduHTML.replace('<div class="section-block">','').replace('</div>','')}</div>` : ''}

    <!-- Projects -->
    ${data.projects.length ? `<div class="section-block" id="projects">${projHTML.replace('<div class="section-block">','').replace('</div>','')}</div>` : ''}

    <!-- Contact -->
    ${socials.length ? `<div class="section-block" id="contact">
      <h2 class="section-heading"><span class="heading-icon">📞</span> Contact & Socials</h2>
      <div class="social-buttons">
        ${socials.map(s => `
          <a href="${s.href}" target="${s.href.startsWith('mailto') ? '_self' : '_blank'}" class="social-btn"
             style="--sbg:${s.color}20;--sborder:${s.color}60;--scolor:${s.color};">
            <i class="${s.fab === false ? 'fas' : 'fab'} ${s.icon}"></i>
            ${s.label}
          </a>`).join('')}
      </div>
    </div>` : ''}

  </main>

  <!-- Back to PortfolioVerse -->
  <a href="index.html" class="back-btn">
    <i class="fas fa-home"></i> PortfolioVerse
  </a>

  <footer class="port-footer">
    Made with 💜 on <a href="index.html" style="color:inherit;">PortfolioVerse</a>
    &nbsp;·&nbsp; Template: ${t.emoji} ${t.name}
  </footer>

  <script>
    // Starfield
    const sf = document.getElementById('pStarfield');
    for(let i=0;i<150;i++){
      const s=document.createElement('div');
      s.className='star';
      const sz=Math.random()*2+0.5;
      s.style.cssText='width:'+sz+'px;height:'+sz+'px;left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;--dur:'+(Math.random()*4+2).toFixed(1)+'s;--delay:-'+(Math.random()*5).toFixed(1)+'s;--min-op:'+(Math.random()*0.25+0.05).toFixed(2)+';';
      sf.appendChild(s);
    }
    // Intersection Observer for section animations
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting)e.target.style.animationDelay='0s';});
    },{threshold:0.1});
    document.querySelectorAll('.section-block').forEach((el,i)=>{
      el.style.animationDelay=(i*0.1)+'s';
      obs.observe(el);
    });
  </script>
</body>
</html>`;
}

/* ─── GENERATE PORTFOLIO (FORM SUBMIT) ───────────────────────── */
function generatePortfolio(event) {
  event.preventDefault();
  if (!selectedTemplate) return;

  const data = collectFormData();
  const html  = generatePortfolioHTML(data, selectedTemplate);

  // Store in localStorage
  const key = 'portfolio_' + Date.now();
  try {
    localStorage.setItem(key, html);
  } catch(e) {
    console.warn('localStorage full, using blob URL');
  }

  // Create blob URL as the "link"
  const blob = new Blob([html], { type: 'text/html' });
  const url  = URL.createObjectURL(blob);

  // Also open a new window with the portfolio
  window._portfolioURL = url;
  window._portfolioHTML = html;

  closeModal();
  showSuccessModal(url, data.name);
}

/* ─── SUCCESS MODAL ──────────────────────────────────────────── */
function showSuccessModal(url, name) {
  const overlay = document.getElementById('successOverlay');
  const linkInput = document.getElementById('portfolioLink');

  // Display the blob URL (functional link for this session)
  linkInput.value = url;

  overlay.style.display = 'flex';
  requestAnimationFrame(() => overlay.classList.add('active'));
  document.body.style.overflow = 'hidden';
}

function closeSuccess() {
  const overlay = document.getElementById('successOverlay');
  overlay.classList.remove('active');
  setTimeout(() => { overlay.style.display = 'none'; }, 400);
  document.body.style.overflow = '';
}

function closeSuccessOutside(e) {
  if (e.target === document.getElementById('successOverlay')) closeSuccess();
}

function openPortfolio() {
  if (window._portfolioURL) {
    window.open(window._portfolioURL, '_blank');
  }
}

function copyLink() {
  const input = document.getElementById('portfolioLink');
  input.select();
  try {
    document.execCommand('copy');
  } catch(e) {
    navigator.clipboard.writeText(input.value).catch(() => {});
  }
  showToast('🔗 Link copied to clipboard!');
}

/* ─── DEMO MODAL ─────────────────────────────────────────────── */
function openDemo() {
  const overlay = document.getElementById('demoOverlay');
  overlay.style.display = 'flex';
  requestAnimationFrame(() => overlay.classList.add('active'));
  document.body.style.overflow = 'hidden';
}

function closeDemo() {
  const overlay = document.getElementById('demoOverlay');
  overlay.classList.remove('active');
  setTimeout(() => { overlay.style.display = 'none'; }, 400);
  document.body.style.overflow = '';
}

function closeDemoOutside(e) {
  if (e.target === document.getElementById('demoOverlay')) closeDemo();
}

/* ─── TOAST ──────────────────────────────────────────────────── */
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
