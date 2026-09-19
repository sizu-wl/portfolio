const seen = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      seen.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.case, .about-text').forEach((element) => {
  element.classList.add('reveal');
  seen.observe(element);
});

const translations = {
  en: {
    navWork: 'PROJECTS', navAbout: 'ABOUT', navContact: 'CONTACT',
    heroIndex: 'PORTFOLIO<br>2026 / 01', heroStamp: 'BASED IN ASIA<br>OPEN TO RELOCATION',
    heroTitle: '<span>DESIGN.</span><br>CODE.<br><i>SHIP.</i>', selectedCount: 'SELECTED WORK / 03',
    heroNote: 'I design and build digital products — from the first screen to a working integration on a real device.',
    scrollWork: 'SCROLL TO WORK', workTitle: 'SELECTED<br>WORK',
    workIntro: 'Three projects where design does not stop at a mockup — it ends in a working system.',
    jarvisType: 'VOICE SYSTEM / SMART HOME',
    jarvisText: 'A Russian-language smart home assistant with streaming speech recognition, a remote processing layer, and verified device-state feedback.',
    liveType: 'CREATOR TOOL / STREAMING',
    liveText: 'An integrated setup for OBS, TikTok LIVE Studio, iPhone mirroring, and the music-driven LiveDeck. Tested load optimization, track requests, and a production-ready streaming workflow.',
    lampaType: 'TV UX / MEDIA SYSTEM',
    lampaText: 'Season and episode navigation for Apple TV, including title parsing, result sorting, and a remote-friendly interface built for the living room.',
    principles: '02 / PRINCIPLES', aboutTitle: 'NO MAGIC.<br><span>JUST</span> GOOD<br>WORK.',
    aboutText: 'I use AI as an accelerator, not as a substitute for thinking. I understand the problem, build a prototype, connect the real system, and verify the result.',
    step1: 'Find what the product actually needs', step2: 'Build a working solution quickly', step3: 'Test it in a real-world scenario',
    letsTalk: "03 / LET'S TALK", contactTitle: 'HAVE A<br>PROJECT?',
    contactNote: 'Open to full-time roles, startup teams, and selected freelance projects.',
    footerLine: 'DESIGN → CODE → RESULT', backTop: 'BACK TO TOP ↑'
  },
  ru: {
    navWork: 'ПРОЕКТЫ', navAbout: 'ОБО МНЕ', navContact: 'КОНТАКТ',
    heroIndex: 'ПОРТФОЛИО<br>2026 / 01', heroStamp: 'ЖИВУ В АЗИИ<br>ГОТОВ К ПЕРЕЕЗДУ',
    heroTitle: '<span>ДИЗАЙН.</span><br>КОД.<br><i>ЗАПУСК.</i>', selectedCount: 'ИЗБРАННЫЕ РАБОТЫ / 03',
    heroNote: 'Проектирую и собираю цифровые продукты — от первого экрана до работающей интеграции на реальном устройстве.',
    scrollWork: 'СМОТРЕТЬ ПРОЕКТЫ', workTitle: 'ИЗБРАННЫЕ<br>РАБОТЫ',
    workIntro: 'Три проекта, где дизайн не заканчивается макетом, а превращается в работающую систему.',
    jarvisType: 'ГОЛОСОВАЯ СИСТЕМА / УМНЫЙ ДОМ',
    jarvisText: 'Русскоязычный ассистент для умного дома: потоковое распознавание речи, удалённая обработка и проверка реального состояния устройств.',
    liveType: 'ИНСТРУМЕНТ ДЛЯ ЭФИРОВ / СТРИМИНГ',
    liveText: 'Единая связка OBS, TikTok LIVE Studio, трансляции экрана iPhone и музыкального LiveDeck. Оптимизация нагрузки, заявки на треки и рабочий эфирный процесс.',
    lampaType: 'ТВ-ИНТЕРФЕЙС / МЕДИАСИСТЕМА',
    lampaText: 'Навигация по сезонам и сериям для Apple TV: разбор названий, сортировка результатов и интерфейс, которым удобно пользоваться с пульта.',
    principles: '02 / ПРИНЦИПЫ', aboutTitle: 'БЕЗ МАГИИ.<br><span>ПРОСТО</span><br>ХОРОШАЯ РАБОТА.',
    aboutText: 'Использую нейросети как ускоритель, а не как замену мышлению. Разбираюсь в задаче, собираю прототип, подключаю реальную систему и проверяю результат.',
    step1: 'Понять, что действительно нужно продукту', step2: 'Быстро собрать рабочее решение', step3: 'Проверить его в реальном сценарии',
    letsTalk: '03 / СВЯЗАТЬСЯ', contactTitle: 'ЕСТЬ<br>ПРОЕКТ?',
    contactNote: 'Открыт к полной занятости, стартап-командам и отдельным проектам.',
    footerLine: 'ДИЗАЙН → КОД → РЕЗУЛЬТАТ', backTop: 'НАВЕРХ ↑'
  }
};

const languageButton = document.querySelector('.lang-toggle');

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  languageButton.textContent = language === 'en' ? 'RU' : 'EN';
  languageButton.setAttribute('aria-label', language === 'en' ? 'Переключить на русский' : 'Switch to English');
  localStorage.setItem('portfolio-language', language);
}

const savedLanguage = localStorage.getItem('portfolio-language');
setLanguage(savedLanguage === 'ru' ? 'ru' : 'en');

languageButton.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'en' ? 'ru' : 'en');
});
