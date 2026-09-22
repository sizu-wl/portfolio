const translations = {
  en: {
    navWork: 'WORK', navAbout: 'SYSTEM', navContact: 'CONTACT',
    heroStatus: 'AVAILABLE FOR SELECTED WORK',
    heroEyebrow: 'DIGITAL PRODUCT DESIGNER × DEVELOPER',
    heroTitle: 'IDEAS INTO<br><span>SYSTEMS.</span>',
    heroNote: 'I turn product ideas into clear interfaces, working code, and real-world impact.',
    viewWork: 'VIEW SELECTED WORK', selectedWork: 'SELECTED WORK',
    workTitle: 'PRODUCTS WITH<br>REAL OUTPUT.',
    workIntro: 'Three systems designed beyond the mockup — built, connected, and tested in use.',
    jarvisType: 'VOICE SYSTEM / SMART HOME',
    jarvisText: 'A Russian-language smart home assistant with streaming speech recognition, remote processing, and verified device-state feedback.',
    liveType: 'CREATOR TOOL / STREAMING',
    liveText: 'An integrated live-production system for OBS, TikTok LIVE Studio, iPhone mirroring, and music-driven automation.',
    lampaType: 'TV UX / MEDIA SYSTEM',
    lampaText: 'Season and episode navigation for Apple TV with title parsing, result sorting, and a remote-first living-room interface.',
    filmTitle: 'FROM SIGNAL<br>TO OUTPUT.', principles: 'OPERATING SYSTEM',
    aboutTitle: 'LESS NOISE.<br>MORE IMPACT.',
    aboutText: 'AI accelerates the work; it does not replace judgment. I understand the problem, build the interface, connect the real system, and verify the result.',
    step1Title: 'UNDERSTAND', step1: 'Find the real constraint before touching the interface.',
    step2Title: 'BUILD', step2: 'Turn the idea into a working product, not a static promise.',
    step3Title: 'VERIFY', step3: 'Test the result on real devices and real workflows.',
    contactLabel: '03 / START A CONVERSATION', contactTitle: 'MAKE IT<br><i>REAL.</i>',
    contactNote: 'Open to full-time roles, startup teams, and selected product work.', backTop: 'BACK TO TOP ↑'
  },
  ru: {
    navWork: 'РАБОТЫ', navAbout: 'СИСТЕМА', navContact: 'КОНТАКТ',
    heroStatus: 'ОТКРЫТ К НОВЫМ ПРОЕКТАМ',
    heroEyebrow: 'ДИЗАЙНЕР ЦИФРОВЫХ ПРОДУКТОВ × РАЗРАБОТЧИК',
    heroTitle: 'ИДЕИ В<br><span>СИСТЕМЫ.</span>',
    heroNote: 'Превращаю продуктовые идеи в понятные интерфейсы, рабочий код и реальный результат.',
    viewWork: 'СМОТРЕТЬ ПРОЕКТЫ', selectedWork: 'ИЗБРАННЫЕ ПРОЕКТЫ',
    workTitle: 'ПРОДУКТЫ С<br>РЕЗУЛЬТАТОМ.',
    workIntro: 'Три системы, которые не закончились на макете: собраны, подключены и проверены в работе.',
    jarvisType: 'ГОЛОСОВАЯ СИСТЕМА / УМНЫЙ ДОМ',
    jarvisText: 'Русскоязычный ассистент умного дома с потоковым распознаванием речи, удалённой обработкой и проверкой реального состояния устройств.',
    liveType: 'ИНСТРУМЕНТ АВТОРА / СТРИМИНГ',
    liveText: 'Единая система для OBS, TikTok LIVE Studio, трансляции экрана iPhone и музыкальной автоматизации.',
    lampaType: 'TV UX / МЕДИАСИСТЕМА',
    lampaText: 'Навигация по сезонам и сериям для Apple TV: разбор названий, сортировка результатов и интерфейс под управление с пульта.',
    filmTitle: 'ОТ СИГНАЛА<br>К РЕЗУЛЬТАТУ.', principles: 'ПРИНЦИП РАБОТЫ',
    aboutTitle: 'МЕНЬШЕ ШУМА.<br>БОЛЬШЕ ПОЛЬЗЫ.',
    aboutText: 'ИИ ускоряет работу, но не заменяет мышление. Я разбираюсь в задаче, собираю интерфейс, подключаю реальную систему и проверяю результат.',
    step1Title: 'ПОНЯТЬ', step1: 'Найти настоящее ограничение до начала работы над интерфейсом.',
    step2Title: 'СОБРАТЬ', step2: 'Превратить идею в работающий продукт, а не статичное обещание.',
    step3Title: 'ПРОВЕРИТЬ', step3: 'Протестировать результат на реальных устройствах и сценариях.',
    contactLabel: '03 / НАЧАТЬ ДИАЛОГ', contactTitle: 'СДЕЛАЕМ<br><i>РЕАЛЬНЫМ.</i>',
    contactNote: 'Открыт к полной занятости, работе со стартапами и отдельным продуктовым задачам.', backTop: 'НАВЕРХ ↑'
  }
};

const toggle = document.querySelector('.lang-toggle');

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((node) => {
    const value = dictionary[node.dataset.i18nHtml];
    if (value) node.innerHTML = value;
  });
  toggle.textContent = lang === 'en' ? 'RU' : 'EN';
  toggle.setAttribute('aria-label', lang === 'en' ? 'Переключить на русский' : 'Switch to English');
  localStorage.setItem('swizex-language', lang);
}

toggle.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'ru' : 'en'));
setLanguage(localStorage.getItem('swizex-language') || 'en');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
} else {
  document.querySelectorAll('.reveal').forEach((node) => node.classList.add('is-visible'));
}
