/**
 * BaZi Metaphysics Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Comprehensive Global Regions and Cities Dataset
  const GLOBAL_REGIONS = [
    {
      group: '中国主要省市 (China)',
      cities: [
        { name: '北京 (Beijing)', lon: 116.40, tz: 8 },
        { name: '上海 (Shanghai)', lon: 121.47, tz: 8 },
        { name: '广州 (Guangzhou)', lon: 113.26, tz: 8 },
        { name: '深圳 (Shenzhen)', lon: 114.05, tz: 8 },
        { name: '成都 (Chengdu)', lon: 104.06, tz: 8 },
        { name: '重庆 (Chongqing)', lon: 106.55, tz: 8 },
        { name: '西安 (Xi\'an)', lon: 108.93, tz: 8 },
        { name: '武汉 (Wuhan)', lon: 114.30, tz: 8 },
        { name: '杭州 (Hangzhou)', lon: 120.15, tz: 8 },
        { name: '南京 (Nanjing)', lon: 118.78, tz: 8 },
        { name: '沈阳 (Shenyang)', lon: 123.43, tz: 8 },
        { name: '哈尔滨 (Harbin)', lon: 126.63, tz: 8 },
        { name: '昆明 (Kunming)', lon: 102.71, tz: 8 },
        { name: '兰州 (Lanzhou)', lon: 103.82, tz: 8 },
        { name: '乌鲁木齐 (Urumqi)', lon: 87.62, tz: 8 },
        { name: '拉萨 (Lhasa)', lon: 91.11, tz: 8 },
        { name: '台北 (Taipei)', lon: 121.50, tz: 8 },
        { name: '香港 (Hong Kong)', lon: 114.17, tz: 8 },
        { name: '澳门 (Macau)', lon: 113.54, tz: 8 }
      ]
    },
    {
      group: '东亚与东南亚 (East & SE Asia)',
      cities: [
        { name: '东京 (Tokyo, 日本)', lon: 139.69, tz: 9 },
        { name: '大阪 (Osaka, 日本)', lon: 135.50, tz: 9 },
        { name: '首尔 (Seoul, 韩国)', lon: 126.98, tz: 9 },
        { name: '新加坡 (Singapore)', lon: 103.82, tz: 8 },
        { name: '吉隆坡 (Kuala Lumpur, 马来西亚)', lon: 101.69, tz: 8 },
        { name: '曼谷 (Bangkok, 泰国)', lon: 100.50, tz: 7 },
        { name: '雅加达 (Jakarta, 印尼)', lon: 106.85, tz: 7 },
        { name: '马尼拉 (Manila, 菲律宾)', lon: 120.98, tz: 8 },
        { name: '胡志明市 / 河内 (Vietnam)', lon: 106.63, tz: 7 }
      ]
    },
    {
      group: '北美洲 (North America)',
      cities: [
        { name: '纽约 (New York, 美东)', lon: -73.93, tz: -5 },
        { name: '洛杉矶 (Los Angeles, 美西)', lon: -118.24, tz: -8 },
        { name: '旧金山 (San Francisco, 美西)', lon: -122.42, tz: -8 },
        { name: '西雅图 (Seattle, 美西)', lon: -122.33, tz: -8 },
        { name: '芝加哥 (Chicago, 美中)', lon: -87.63, tz: -6 },
        { name: '休斯敦 (Houston, 美中)', lon: -95.37, tz: -6 },
        { name: '波士顿 (Boston, 美东)', lon: -71.06, tz: -5 },
        { name: '华盛顿 (Washington D.C., 美东)', lon: -77.04, tz: -5 },
        { name: '多伦多 (Toronto, 加拿大)', lon: -79.38, tz: -5 },
        { name: '温哥华 (Vancouver, 加拿大)', lon: -123.12, tz: -8 },
        { name: '蒙特利尔 (Montreal, 加拿大)', lon: -73.57, tz: -5 },
        { name: '墨西哥城 (Mexico City, 墨西哥)', lon: -99.13, tz: -6 }
      ]
    },
    {
      group: '欧洲 (Europe)',
      cities: [
        { name: '伦敦 (London, 英国)', lon: -0.13, tz: 0 },
        { name: '巴黎 (Paris, 法国)', lon: 2.35, tz: 1 },
        { name: '柏林 (Berlin, 德国)', lon: 13.40, tz: 1 },
        { name: '法兰克福 (Frankfurt, 德国)', lon: 8.68, tz: 1 },
        { name: '罗马 (Rome, 意大利)', lon: 12.50, tz: 1 },
        { name: '马德里 (Madrid, 西班牙)', lon: -3.70, tz: 1 },
        { name: '阿姆斯特丹 (Amsterdam, 荷兰)', lon: 4.90, tz: 1 },
        { name: '苏黎世 (Zurich, 瑞士)', lon: 8.54, tz: 1 },
        { name: '莫斯科 (Moscow, 俄罗斯)', lon: 37.62, tz: 3 }
      ]
    },
    {
      group: '大洋洲 (Oceania)',
      cities: [
        { name: '悉尼 (Sydney, 澳大利亚)', lon: 151.21, tz: 10 },
        { name: '墨尔本 (Melbourne, 澳大利亚)', lon: 144.96, tz: 10 },
        { name: '布里斯班 (Brisbane, 澳大利亚)', lon: 153.03, tz: 10 },
        { name: '珀斯 (Perth, 澳大利亚)', lon: 115.86, tz: 8 },
        { name: '奥克兰 (Auckland, 新西兰)', lon: 174.76, tz: 12 }
      ]
    },
    {
      group: '南美、中东与非洲 (Other Global)',
      cities: [
        { name: '迪拜 (Dubai, 阿联酋)', lon: 55.27, tz: 4 },
        { name: '开罗 (Cairo, 埃及)', lon: 31.24, tz: 2 },
        { name: '约翰内斯堡 (Johannesburg, 南非)', lon: 28.05, tz: 2 },
        { name: '圣保罗 (Sao Paulo, 巴西)', lon: -46.63, tz: -3 },
        { name: '布宜诺斯艾利斯 (Buenos Aires, 阿根廷)', lon: -58.38, tz: -3 }
      ]
    }
  ];

  // State
  let currentBaziResult = null;
  let currentLuckResult = null;
  let selectedDecadeIdx = 0;
  let selectedAnnualYear = new Date().getFullYear();
  let selectedMonthBranch = '寅';
  let selectedDailyDate = new Date().toISOString().split('T')[0];
  let selectedFortuneCycle = 'decade';
  let selectedPlaybookTab = 'mainline'; // 'mainline' | 'seasons' | 'safeguards'
  let selectedResonanceTab = 'directions'; // 'directions' | 'ecosystems'
  let selectedManualTab = 'canons'; // 'specs' | 'canons' | 'triggers' | 'protocols' | 'habits' | 'zen'
  let currentPortraitData = null;
  let currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem('bazi_lang')) ? localStorage.getItem('bazi_lang') : 'zh';
  let activePrimaryView = 'view-home';
  let lastDivinationResult = null;
  let currentCoinStep = 1;
  let currentCoinLines = [];
  let activeChronoAge = 30;
  let isChronoPlaying = false;
  let chronoPlayTimer = null;
  let chronoTimelineData = [];
  let currentSynastryMode = 'romantic';
  let currentSynastryResult = null;
  let cachedChartA = null;
  let cachedChartB = null;
  let deferredPwaPrompt = null;
  let fourPillarsActiveAge = 35;
  let activeIChingCycleTab = 'timeline'; // 'timeline' | 'yaoStages' | 'cosmic'
  let isIChingCyclePlaying = false;
  let ichingCyclePlayTimer = null;
  let cachedIChingCycleData = null;
  let currentResidenceCountry = (typeof localStorage !== 'undefined' && localStorage.getItem('current_residence_country')) ? localStorage.getItem('current_residence_country') : 'China';
  let currentResidenceCity = (typeof localStorage !== 'undefined' && localStorage.getItem('current_residence_city')) ? localStorage.getItem('current_residence_city') : 'beijing';
  let currentResidenceCustomName = (typeof localStorage !== 'undefined' && localStorage.getItem('current_residence_custom')) ? localStorage.getItem('current_residence_custom') : '';
  let activeTenGodsCategory = 'all';

  // DOM Elements
  const birthDatePicker = document.getElementById('birthDate');
  const birthTimePicker = document.getElementById('birthTime');
  const genderSelect = document.getElementById('gender');
  const citySelect = document.getElementById('citySelect');
  const currentCountrySelect = document.getElementById('currentCountrySelect');
  const currentCitySelect = document.getElementById('currentCitySelect');
  const currentCustomCityInput = document.getElementById('currentCustomCityInput');
  const timezoneSelect = document.getElementById('timezoneSelect');
  const customLonInput = document.getElementById('customLongitude');
  const useSolarTimeCheck = document.getElementById('useTrueSolarTime');
  const lateRatCheck = document.getElementById('lateRatNextDay');
  const calcBtn = document.getElementById('calcBtn');
  const nowBtn = document.getElementById('nowBtn');
  const themeToggle = document.getElementById('themeToggle');
  const langZhBtn = document.getElementById('langZhBtn');
  const langEnBtn = document.getElementById('langEnBtn');

  // Two-Stage Page Architecture Elements
  const landingPortalView = document.getElementById('landingPortalView');
  const dashboardView = document.getElementById('dashboardView');
  const dashboardTopSummaryBar = document.getElementById('dashboardTopSummaryBar');
  const dashboardSummaryBadges = document.getElementById('dashboardSummaryBadges');
  const btnReturnToPortal = document.getElementById('btnReturnToPortal');
  const btnPortalTopNav = document.getElementById('btnPortalTopNav');
  const landingQuickPreviewBox = document.getElementById('landingQuickPreviewBox');
  const landingPreviewMeta = document.getElementById('landingPreviewMeta');
  const landingPreviewStatusBadge = document.getElementById('landingPreviewStatusBadge');
  const btnToggleAdvSolar = document.getElementById('btnToggleAdvSolar');
  const advSolarTimeContainer = document.getElementById('advSolarTimeContainer');
  const portalPresetsContainer = document.getElementById('portalPresetsContainer');
  const portalFeaturesGrid = document.getElementById('portalFeaturesGrid');
  let activeMainPage = 'landing'; // 'landing' | 'dashboard'

  function setLanguage(lang) {
    currentLang = lang;
    if (typeof window !== 'undefined') {
      window.currentLang = lang;
      window.setLanguage = setLanguage;
    }
    if (typeof I18N !== 'undefined') {
      I18N.currentLang = lang;
    }
    if (typeof globalThis !== 'undefined') {
      globalThis.currentLang = lang;
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('bazi_lang', lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = (lang === 'en' ? 'en' : 'zh-CN');
      document.title = (lang === 'en')
        ? 'BaZi Charting & Classical Canons System · Di Tian Sui & San Ming Tong Hui'
        : '八字排盘与典籍研索系统 · 滴天髓 & 三命通会';

      if (langZhBtn && langEnBtn) {
        if (lang === 'zh') {
          langZhBtn.className = 'px-2.5 py-1 text-xs rounded-md font-medium transition bg-amber-600 text-white shadow';
          langEnBtn.className = 'px-2.5 py-1 text-xs rounded-md font-medium transition text-gray-400 hover:text-gray-200';
        } else {
          langEnBtn.className = 'px-2.5 py-1 text-xs rounded-md font-medium transition bg-amber-600 text-white shadow';
          langZhBtn.className = 'px-2.5 py-1 text-xs rounded-md font-medium transition text-gray-400 hover:text-gray-200';
        }
      }

      // Update static text elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && typeof I18N !== 'undefined') {
          el.textContent = I18N.t(key, lang);
        }
      });

      // Update placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key && typeof I18N !== 'undefined') {
          el.placeholder = I18N.t(key, lang);
        }
      });

      // Update titles
      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (key && typeof I18N !== 'undefined') {
          el.title = I18N.t(key, lang);
        }
      });

      // Update gender select options
      if (genderSelect && typeof I18N !== 'undefined') {
        if (genderSelect.options[0]) genderSelect.options[0].textContent = I18N.t('opt_qian', lang);
        if (genderSelect.options[1]) genderSelect.options[1].textContent = I18N.t('opt_kun', lang);
      }

      // Update current residence city options
      if (typeof populateCurrentCityOptions === 'function') {
        populateCurrentCityOptions(currentResidenceCountry, currentResidenceCity);
      }
    }

    // Re-calculate & re-render if chart exists
    if (currentBaziResult) {
      triggerCalculate();
    }

    if (typeof renderYuanHaiChapters === 'function') {
      renderYuanHaiChapters();
    }
    if (typeof renderShenFengTreatises === 'function') {
      renderShenFengTreatises();
    }
    if (typeof renderYuZhaoAphorisms === 'function') {
      renderYuZhaoAphorisms();
    }
    if (typeof renderLiXuZhongChapters === 'function') {
      renderLiXuZhongChapters();
    }
    if (typeof window !== 'undefined' && typeof window.refreshIChingOnLangChange === 'function') {
      window.refreshIChingOnLangChange();
    }
    const inpA = document.getElementById('synastryLabelA');
    const inpB = document.getElementById('synastryLabelB');
    if (inpA) {
      if (lang === 'en' && inpA.value === '甲造') inpA.value = 'Person A';
      else if (lang === 'zh' && inpA.value === 'Person A') inpA.value = '甲造';
    }
    if (inpB) {
      if (lang === 'en' && inpB.value === '乙造') inpB.value = 'Person B';
      else if (lang === 'zh' && inpB.value === 'Person B') inpB.value = '乙造';
    }
    if (typeof refreshSynastryOnLangChange === 'function') {
      refreshSynastryOnLangChange();
    }
    if (typeof updateChronoDisplay === 'function' && typeof chronoTimelineData !== 'undefined' && chronoTimelineData.length) {
      updateChronoDisplay(activeChronoAge, lang === 'en');
    }

    if (btnToggleAdvSolar && advSolarTimeContainer && !advSolarTimeContainer.classList.contains('hidden') && typeof I18N !== 'undefined') {
      btnToggleAdvSolar.textContent = I18N.t('portal_adv_toggle_hide', lang);
    }

    if (typeof updateLandingPreview === 'function') {
      updateLandingPreview();
    }
    if (typeof updateDashboardSummaryBar === 'function') {
      updateDashboardSummaryBar();
    }
    if (typeof updateSolarDetailDisplay === 'function' && currentBaziResult) {
      updateSolarDetailDisplay(currentBaziResult);
    }
    if (typeof renderHexagramCycle === 'function' && currentBaziResult) {
      renderHexagramCycle(currentBaziResult, fourPillarsActiveAge);
    }
    if (typeof renderZipingPatterns === 'function') {
      renderZipingPatterns(lang === 'en');
    }
    if (typeof renderTenGodsDefinitions === 'function') {
      renderTenGodsDefinitions(lang === 'en');
    }
    if (typeof renderCareerWealth === 'function' && currentBaziResult) {
      renderCareerWealth(currentBaziResult, currentLuckResult);
    }

    const playText = document.getElementById('ichingCyclePlayText');
    if (playText) {
      playText.textContent = isIChingCyclePlaying
        ? (lang === 'en' ? 'Pause' : '暂停推演')
        : (lang === 'en' ? 'Auto Play' : '连续推演');
    }
  }

  if (langZhBtn) {
    langZhBtn.addEventListener('click', () => setLanguage('zh'));
  }
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => setLanguage('en'));
  }

  // Initialize UI language state
  setLanguage(currentLang);

  // Initialize Timezone Dropdown (UTC-12 to UTC+14)
  for (let tz = -12; tz <= 14; tz++) {
    const opt = document.createElement('option');
    opt.value = tz;
    opt.textContent = `UTC${tz >= 0 ? '+' : ''}${tz}:00`;
    if (tz === 8) opt.selected = true; // Default Beijing UTC+8
    timezoneSelect.appendChild(opt);
  }

  // Initialize Global City Dropdown with Optgroups
  GLOBAL_REGIONS.forEach(reg => {
    const group = document.createElement('optgroup');
    group.label = reg.group;
    reg.cities.forEach(c => {
      const opt = document.createElement('option');
      opt.value = JSON.stringify({ lon: c.lon, tz: c.tz });
      const lonStr = c.lon >= 0 ? `${c.lon}°E` : `${Math.abs(c.lon)}°W`;
      opt.textContent = `${c.name} (${lonStr}, UTC${c.tz >= 0 ? '+' : ''}${c.tz})`;
      group.appendChild(opt);
    });
    citySelect.appendChild(group);
  });

  // Default selection: Beijing
  citySelect.selectedIndex = 0;
  customLonInput.value = '116.40';
  timezoneSelect.value = '8';

  citySelect.addEventListener('change', () => {
    try {
      const val = JSON.parse(citySelect.value);
      customLonInput.value = val.lon;
      timezoneSelect.value = val.tz;
      if (activeMainPage === 'landing') {
        updateLandingPreview();
      } else {
        triggerCalculate();
      }
    } catch (e) {
      // Custom or unparsed
    }
  });

  timezoneSelect.addEventListener('change', () => {
    if (activeMainPage === 'landing') {
      updateLandingPreview();
    } else {
      triggerCalculate();
    }
  });

  // Current Residence City Controls
  function populateCurrentCityOptions(countryKey, selectedCityId) {
    if (!currentCitySelect) return;
    currentCitySelect.innerHTML = '';
    const isEn = (currentLang === 'en');
    const db = (typeof SpatialFengShuiEngine !== 'undefined') ? SpatialFengShuiEngine.GEO_CITIES_DATABASE : null;
    const countryData = (db && db[countryKey]) ? db[countryKey] : (db ? db.China : null);
    if (!countryData) return;

    Object.keys(countryData.regions).forEach(regKey => {
      const reg = countryData.regions[regKey];
      const optgroup = document.createElement('optgroup');
      optgroup.label = isEn ? `${reg.directionEn} (${reg.elementHeavenlyEn})` : `${reg.directionZh} (${reg.elementHeavenlyZh})`;
      reg.cities.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        const cDir = isEn ? (c.directionEn || reg.directionEn) : (c.directionZh || reg.directionZh);
        const cElem = isEn ? (c.elementEn || reg.elementEn) : (c.elementHeavenlyZh || reg.elementHeavenlyZh);
        opt.textContent = isEn ? `${c.nameEn} · ${cDir} (${cElem})` : `${c.nameZh} · ${cElem}`;
        if (c.id === selectedCityId) {
          opt.selected = true;
        }
        optgroup.appendChild(opt);
      });
      currentCitySelect.appendChild(optgroup);
    });

    const customOpt = document.createElement('option');
    customOpt.value = 'custom';
    customOpt.textContent = isEn ? 'Other / Custom City...' : '其他 / 自定义城市...';
    if (selectedCityId === 'custom') customOpt.selected = true;
    currentCitySelect.appendChild(customOpt);

    currentCitySelect.value = selectedCityId;

    if (currentCustomCityInput) {
      if (currentCitySelect.value === 'custom') {
        currentCustomCityInput.classList.remove('hidden');
      } else {
        currentCustomCityInput.classList.add('hidden');
      }
    }
  }

  if (currentCountrySelect) {
    currentCountrySelect.value = currentResidenceCountry;
    currentCountrySelect.addEventListener('change', () => {
      currentResidenceCountry = currentCountrySelect.value;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('current_residence_country', currentResidenceCountry);
      }
      const db = (typeof SpatialFengShuiEngine !== 'undefined') ? SpatialFengShuiEngine.GEO_CITIES_DATABASE : null;
      const countryData = db ? db[currentResidenceCountry] : null;
      const firstReg = countryData ? Object.values(countryData.regions)[0] : null;
      currentResidenceCity = (firstReg && firstReg.cities[0]) ? firstReg.cities[0].id : 'custom';
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('current_residence_city', currentResidenceCity);
      }
      populateCurrentCityOptions(currentResidenceCountry, currentResidenceCity);
      if (currentBaziResult && typeof renderSpatialFengShui === 'function') {
        renderSpatialFengShui(currentBaziResult, currentLuckResult);
      }
    });
  }

  if (currentCitySelect) {
    currentCitySelect.addEventListener('change', () => {
      currentResidenceCity = currentCitySelect.value;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('current_residence_city', currentResidenceCity);
      }
      if (currentCustomCityInput) {
        if (currentCitySelect.value === 'custom') {
          currentCustomCityInput.classList.remove('hidden');
          if (typeof currentCustomCityInput.focus === 'function') {
            currentCustomCityInput.focus();
          }
        } else {
          currentCustomCityInput.classList.add('hidden');
        }
      }
      if (currentBaziResult && typeof renderSpatialFengShui === 'function') {
        renderSpatialFengShui(currentBaziResult, currentLuckResult);
      }
    });
  }

  if (currentCustomCityInput) {
    currentCustomCityInput.value = currentResidenceCustomName;
    currentCustomCityInput.addEventListener('input', () => {
      currentResidenceCustomName = currentCustomCityInput.value.trim();
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('current_residence_custom', currentResidenceCustomName);
      }
      if (currentBaziResult && typeof renderSpatialFengShui === 'function') {
        renderSpatialFengShui(currentBaziResult, currentLuckResult);
      }
    });
  }

  // Initialize City Dropdown Options
  populateCurrentCityOptions(currentResidenceCountry, currentResidenceCity);

  customLonInput.addEventListener('input', () => {
    if (activeMainPage === 'landing') {
      updateLandingPreview();
    } else {
      debouncedCalculate(60);
    }
  });

  // Theme Toggle
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '🌙 暗夜' : '☀️ 浅昼';
    if (currentBaziResult) {
      ElementChart.renderRadar('elementRadarCanvas', currentBaziResult.elements.percentages);
    }
  });

  // Set Default Time to Current Local Time
  function setCurrentTime() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    birthDatePicker.value = `${y}-${m}-${d}`;

    const h = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    birthTimePicker.value = `${h}:${min}`;
  }
  setCurrentTime();

  nowBtn.addEventListener('click', () => {
    setCurrentTime();
    if (portalPresetsContainer) {
      const presetBtns = portalPresetsContainer.querySelectorAll('.archetype-preset-card');
      presetBtns.forEach(b => {
        if (b.getAttribute('data-preset') === 'now') b.classList.add('active');
        else b.classList.remove('active');
      });
    }
    if (activeMainPage === 'landing') {
      updateLandingPreview();
    } else {
      triggerCalculate();
      updateDashboardSummaryBar();
    }
  });

  // Element Color Class Helper
  function getElementClass(element) {
    switch (element) {
      case '木': return 'el-wood';
      case '火': return 'el-fire';
      case '土': return 'el-earth';
      case '金': return 'el-metal';
      case '水': return 'el-water';
      default: return '';
    }
  }

  function getElementBgClass(element) {
    switch (element) {
      case '木': return 'bg-el-wood';
      case '火': return 'bg-el-fire';
      case '土': return 'bg-el-earth';
      case '金': return 'bg-el-metal';
      case '水': return 'bg-el-water';
      default: return '';
    }
  }

  // Archetype Presets Database
  const ARCHETYPE_PRESETS = {
    leader: {
      date: '1990-06-20',
      time: '14:30',
      gender: '乾造',
      lon: 116.40,
      tz: 8
    },
    business: {
      date: '1988-11-18',
      time: '09:40',
      gender: '坤造',
      lon: 121.50,
      tz: 8
    },
    artist: {
      date: '1995-10-24',
      time: '16:15',
      gender: '乾造',
      lon: 120.20,
      tz: 8
    },
    strategist: {
      date: '1984-03-15',
      time: '08:20',
      gender: '坤造',
      lon: 116.40,
      tz: 8
    }
  };

  function getStemElement(stem) {
    const map = { '甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土','庚':'金','辛':'金','壬':'水','癸':'水' };
    return map[stem] || '木';
  }

  function getBranchElement(branch) {
    const map = { '子':'水','丑':'土','寅':'木','卯':'木','辰':'土','巳':'火','午':'火','未':'土','申':'金','酉':'金','戌':'土','亥':'水' };
    return map[branch] || '木';
  }

  function getStemShortEn(stem) {
    if (typeof I18N !== 'undefined' && I18N.STEMS && I18N.STEMS[stem]) {
      return I18N.STEMS[stem].pinyin;
    }
    const map = { '甲':'Jia','乙':'Yi','丙':'Bing','丁':'Ding','戊':'Wu','己':'Ji','庚':'Geng','辛':'Xin','壬':'Ren','癸':'Gui' };
    return map[stem] || stem;
  }

  function getBranchShortEn(branch) {
    if (typeof I18N !== 'undefined' && I18N.BRANCHES && I18N.BRANCHES[branch]) {
      return I18N.BRANCHES[branch].pinyin || I18N.BRANCHES[branch].en.split(' ')[0];
    }
    const map = { '子':'Zi','丑':'Chou','寅':'Yin','卯':'Mao','辰':'Chen','巳':'Si','午':'Wu','未':'Wei','申':'Shen','酉':'You','戌':'Xu','亥':'Hai' };
    return map[branch] || branch;
  }

  // Real-Time Solar Correction Detail Display (100% Bilingual & Reactive)
  function updateSolarDetailDisplay(res) {
    const detailEl = document.getElementById('solarCalcDetail');
    if (!detailEl) return;
    const isEn = (currentLang === 'en');
    const useTrueSolarTime = useSolarTimeCheck ? useSolarTimeCheck.checked : false;
    const timezone = (timezoneSelect && parseFloat(timezoneSelect.value) !== undefined) ? parseFloat(timezoneSelect.value) : 8.0;
    const tzSign = timezone >= 0 ? '+' : '';

    if (!useTrueSolarTime) {
      detailEl.innerHTML = isEn
        ? `<span class="text-gray-400">True Solar Time correction disabled. Calculation utilizes local standard clock time (Timezone UTC${tzSign}${timezone}:00).</span>`
        : `<span class="text-gray-400">当前未启用真太阳时校正，直接采用当地标准钟表时间（时区 UTC${tzSign}${timezone}:00）排盘。</span>`;
      return;
    }

    if (!res || !res.input) return;

    const longitude = customLonInput ? (parseFloat(customLonInput.value) || 116.4) : 116.4;
    const stdMeridian = (timezone * 15.0).toFixed(1);
    const lonDiff = (res.input.lonOffsetMinutes !== undefined) ? res.input.lonOffsetMinutes.toFixed(1) : '0.0';
    const lonSign = (res.input.lonOffsetMinutes >= 0) ? '+' : '';
    const eotVal = (res.input.eot !== undefined) ? res.input.eot.toFixed(1) : '0.0';
    const eotSign = (res.input.eot >= 0) ? '+' : '';
    const totVal = (res.input.totalSolarOffset !== undefined) ? res.input.totalSolarOffset.toFixed(1) : '0.0';
    const totSign = (res.input.totalSolarOffset >= 0) ? '+' : '';

    const adjH = String(res.input.adjustedHour !== undefined ? res.input.adjustedHour : 0).padStart(2, '0');
    const adjM = String(res.input.adjustedMinute !== undefined ? res.input.adjustedMinute : 0).padStart(2, '0');
    const lonDisplay = longitude >= 0 ? `${longitude}°E` : `${Math.abs(longitude)}°W`;

    if (isEn) {
      detailEl.innerHTML = `
        <span><b>Timezone:</b> UTC${tzSign}${timezone}:00 (${stdMeridian}°)</span>
        <span><b>Longitude:</b> ${lonDisplay}</span>
        <span><b>Lon Offset:</b> ${lonSign}${lonDiff}m</span>
        <span><b>EoT:</b> ${eotSign}${eotVal}m</span>
        <span class="text-amber-300 font-bold"><b>Total Offset:</b> ${totSign}${totVal}m ➔ <b>True Solar Time:</b> ${res.input.adjustedYear}-${String(res.input.adjustedMonth).padStart(2,'0')}-${String(res.input.adjustedDay).padStart(2,'0')} ${adjH}:${adjM}</span>
      `;
    } else {
      detailEl.innerHTML = `
        <span><b>标准时区:</b> UTC${tzSign}${timezone}:00 (${stdMeridian}°)</span>
        <span><b>出生经度:</b> ${lonDisplay}</span>
        <span><b>经度偏离:</b> ${lonSign}${lonDiff}分</span>
        <span><b>均时差:</b> ${eotSign}${eotVal}分</span>
        <span class="text-amber-300 font-bold"><b>总校正:</b> ${totSign}${totVal}分 ➔ <b>真太阳时:</b> ${res.input.adjustedYear}-${String(res.input.adjustedMonth).padStart(2,'0')}-${String(res.input.adjustedDay).padStart(2,'0')} ${adjH}:${adjM}</span>
      `;
    }
  }

  // ==========================================================================
  // Two-Stage Page Navigation (Page 1: Landing Portal / Page 2: Dashboard)
  // ==========================================================================
  function switchToDashboardView(targetView = null) {
    activeMainPage = 'dashboard';
    if (landingPortalView) {
      landingPortalView.classList.add('hidden');
    }
    if (dashboardView) {
      dashboardView.classList.remove('hidden');
    }
    if (btnPortalTopNav) {
      btnPortalTopNav.classList.remove('hidden');
    }
    updateDashboardSummaryBar();
    if (targetView && typeof switchPrimaryView === 'function') {
      switchPrimaryView(targetView);
    } else if (typeof switchPrimaryView === 'function') {
      switchPrimaryView(activePrimaryView || 'view-home');
    }
    if (currentBaziResult && typeof ElementChart !== 'undefined') {
      ElementChart.renderRadar('elementRadarCanvas', currentBaziResult.elements.percentages);
    }
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function switchToLandingView() {
    activeMainPage = 'landing';
    if (dashboardView) {
      dashboardView.classList.add('hidden');
    }
    if (landingPortalView) {
      landingPortalView.classList.remove('hidden');
    }
    if (btnPortalTopNav) {
      btnPortalTopNav.classList.add('hidden');
    }
    updateLandingPreview();
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Live Natal Preview on Landing Page
  function updateLandingPreview() {
    if (!landingQuickPreviewBox) return;
    try {
      const dateVal = birthDatePicker ? birthDatePicker.value : '';
      const timeVal = birthTimePicker ? birthTimePicker.value : '';
      if (!dateVal || !timeVal) return;

      const [year, month, day] = dateVal.split('-').map(Number);
      const [hour, minute] = timeVal.split(':').map(Number);
      const gender = genderSelect ? genderSelect.value : '乾造';
      const useTrueSolarTime = useSolarTimeCheck ? useSolarTimeCheck.checked : false;
      const isLateRatNextDay = lateRatCheck ? lateRatCheck.checked : false;
      const longitude = customLonInput ? (parseFloat(customLonInput.value) || 116.4) : 116.4;
      const timezone = (timezoneSelect && parseFloat(timezoneSelect.value) !== undefined) ? parseFloat(timezoneSelect.value) : 8.0;

      if (typeof BaZiEngine === 'undefined' || typeof BaZiEngine.calculate !== 'function') return;

      const res = BaZiEngine.calculate({
        year, month, day, hour, minute, gender,
        useTrueSolarTime, isLateRatNextDay, longitude, timezone
      });

      if (!res || !res.pillars || !res.pillars.year) return;

      // Update Real-Time Solar Display synchronously
      updateSolarDetailDisplay(res);

      // Update Visual Alchemy Elemental Harmony in real-time on the landing page
      if (typeof VisualAlchemy !== 'undefined' && res.dayMasterElement) {
        VisualAlchemy.setActiveElement(res.dayMasterElement);
      }

      // Update landing preview status badge
      if (landingPreviewStatusBadge && typeof I18N !== 'undefined') {
        landingPreviewStatusBadge.textContent = I18N.t('portal_preview_ready', currentLang);
      }

      const isEn = (currentLang === 'en');
      const pillars = [
        { labelZh: '年柱', labelEn: 'Year', p: res.pillars.year },
        { labelZh: '月柱', labelEn: 'Month', p: res.pillars.month },
        { labelZh: '日柱 (元神)', labelEn: 'Day (Self)', p: res.pillars.day, isDay: true },
        { labelZh: '时柱', labelEn: 'Hour', p: res.pillars.hour }
      ];

      const htmlPillars = pillars.map(item => {
        const p = item.p;
        if (!p) return '';
        const stemEl = getStemElement(p.stem);
        const branchEl = getBranchElement(p.branch);
        const stemClass = getElementClass(stemEl);
        const branchClass = getElementClass(branchEl);
        const stemName = isEn ? getStemShortEn(p.stem) : p.stem;
        const branchName = isEn ? getBranchShortEn(p.branch) : p.branch;
        const pNaYin = p.naYin || p.nayin || '';
        const nayin = isEn ? (typeof I18N !== 'undefined' ? I18N.getNaYin(pNaYin, 'en') : pNaYin) : pNaYin;

        const isYear = (item.labelZh === '年柱');
        const zodiacSuffix = (isYear && typeof I18N !== 'undefined') ? ` · ${I18N.getZodiac(p.branch, currentLang)}` : '';

        return `
          <div class="mini-pillar-card ${item.isDay ? 'border-amber-500/60 bg-amber-950/30 ring-1 ring-amber-500/30' : ''}">
            <div class="text-[10px] text-gray-400 font-medium pb-1">${isEn ? item.labelEn : item.labelZh}${zodiacSuffix}</div>
            <div class="text-base sm:text-lg font-bold font-serif-sc py-0.5 flex justify-center items-center gap-1">
              <span class="${stemClass}">${stemName}</span>
              <span class="${branchClass}">${branchName}</span>
            </div>
            <div class="text-[10px] text-gray-400 font-mono scale-90 truncate" title="${nayin}">${nayin}</div>
          </div>
        `;
      }).join('');

      landingQuickPreviewBox.innerHTML = htmlPillars;

      if (landingPreviewMeta && res.pillars.day) {
        const dmStem = res.pillars.day.stem;
        const dmEl = getStemElement(dmStem);
        const dmElName = isEn ? (typeof I18N !== 'undefined' ? I18N.getElement(dmEl, 'en') : dmEl) : dmEl;
        const dmEn = getStemShortEn(dmStem);
        const offsetMin = res.input && res.input.totalSolarOffset ? res.input.totalSolarOffset.toFixed(1) : '0.0';
        const offsetSign = (res.input && res.input.totalSolarOffset >= 0) ? '+' : '';

        const metaTextZh = `
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-amber-400 font-bold font-serif-sc">本命元神：${dmStem} (${dmEl})</span>
              <span class="text-gray-400 ml-2">【${res.gender}】</span>
            </div>
            <div class="text-[10px] text-gray-400">
              <span>${useTrueSolarTime ? `真太阳时偏差: <b class="text-amber-300 font-mono">${offsetSign}${offsetMin}分</b>` : '采用钟表当地时'}</span>
            </div>
          </div>
        `;

        const metaTextEn = `
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="text-amber-400 font-bold font-serif-sc">Day Master: ${dmEn} (${dmElName})</span>
              <span class="text-gray-400 ml-2">[${res.gender === '乾造' ? 'Qian (Male)' : 'Kun (Female)'}]</span>
            </div>
            <div class="text-[10px] text-gray-400">
              <span>${useTrueSolarTime ? `Solar Offset: <b class="text-amber-300 font-mono">${offsetSign}${offsetMin}m</b>` : 'Local Standard Time'}</span>
            </div>
          </div>
        `;

        landingPreviewMeta.innerHTML = isEn ? metaTextEn : metaTextZh;
      }
    } catch (e) {
      // ignore
    }
  }

  // Dashboard Top Summary Bar
  function updateDashboardSummaryBar() {
    if (!dashboardSummaryBadges || !currentBaziResult || !currentBaziResult.pillars || !currentBaziResult.pillars.day) return;
    const res = currentBaziResult;
    const isEn = (currentLang === 'en');

    const genderBadge = res.gender === '乾造'
      ? `<span class="px-2 py-0.5 rounded-md bg-blue-950/80 text-blue-300 border border-blue-800/40 font-bold">${isEn ? 'Qian (Male)' : '乾造 (男命)'}</span>`
      : `<span class="px-2 py-0.5 rounded-md bg-rose-950/80 text-rose-300 border border-rose-800/40 font-bold">${isEn ? 'Kun (Female)' : '坤造 (女命)'}</span>`;

    const dateStr = `${res.input.year}-${String(res.input.month).padStart(2, '0')}-${String(res.input.day).padStart(2, '0')} ${String(res.input.hour).padStart(2, '0')}:${String(res.input.minute).padStart(2, '0')}`;
    const solarStr = res.input.useTrueSolarTime
      ? `<span class="text-amber-300/90 font-mono text-[11px]">${isEn ? 'Solar: ' : '太阳时: '}${String(res.input.adjustedHour).padStart(2, '0')}:${String(res.input.adjustedMinute).padStart(2, '0')}</span>`
      : '';

    const formatPillar = (lblZh, lblEn, p) => {
      if (!p) return '';
      const stemEl = getStemElement(p.stem);
      const branchEl = getBranchElement(p.branch);
      const sCls = getElementClass(stemEl);
      const bCls = getElementClass(branchEl);
      const sName = isEn ? getStemShortEn(p.stem) : p.stem;
      const bName = isEn ? getBranchShortEn(p.branch) : p.branch;
      const sep = isEn ? '<span class="text-gray-500 font-normal">-</span>' : '';
      return `<span class="px-2 py-0.5 rounded bg-black/40 border border-gray-700 font-serif-sc font-bold"><span class="text-gray-400 text-[10px] mr-1">${isEn ? lblEn : lblZh}:</span><span class="${sCls}">${sName}</span>${sep}<span class="${bCls}">${bName}</span></span>`;
    };

    const yStr = formatPillar('年', 'Y', res.pillars.year);
    const mStr = formatPillar('月', 'M', res.pillars.month);
    const dStr = formatPillar('日', 'D', res.pillars.day);
    const hStr = formatPillar('时', 'H', res.pillars.hour);

    const dmStem = res.pillars.day.stem;
    const dmEl = getStemElement(dmStem);
    const dmElName = isEn ? (typeof I18N !== 'undefined' ? I18N.getElement(dmEl, 'en') : dmEl) : dmEl;
    const dmName = isEn ? getStemShortEn(dmStem) : dmStem;
    const dmBadge = `<span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">${isEn ? 'Day Master: ' : '元神: '}${dmName} (${dmElName})</span>`;

    const yBranch = res.pillars.year ? res.pillars.year.branch : '';
    const zodiacAnimal = yBranch && typeof I18N !== 'undefined' ? I18N.getZodiac(yBranch, currentLang) : '';
    const zodiacBadge = zodiacAnimal ? `<span class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 font-bold">${isEn ? `Zodiac: ${zodiacAnimal}` : `生肖: 属${zodiacAnimal}`}</span>` : '';

    dashboardSummaryBadges.innerHTML = `
      ${genderBadge}
      <span class="text-gray-300 font-mono text-[11px]">${dateStr}</span>
      ${solarStr ? `<span class="text-gray-500">·</span>${solarStr}` : ''}
      <span class="hidden sm:inline text-gray-500">|</span>
      <div class="flex items-center gap-1.5 flex-wrap">
        ${yStr}
        ${mStr}
        ${dStr}
        ${hStr}
      </div>
      <span class="hidden md:inline text-gray-500">|</span>
      ${dmBadge}
      ${zodiacBadge}
    `;
  }

  // Presets Controller
  function initPortalPresets() {
    if (!portalPresetsContainer) return;
    const presetBtns = portalPresetsContainer.querySelectorAll('.archetype-preset-card');
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const presetKey = btn.getAttribute('data-preset');
        if (presetKey === 'now') {
          setCurrentTime();
        } else if (ARCHETYPE_PRESETS[presetKey]) {
          const cfg = ARCHETYPE_PRESETS[presetKey];
          if (birthDatePicker) birthDatePicker.value = cfg.date;
          if (birthTimePicker) birthTimePicker.value = cfg.time;
          if (genderSelect) genderSelect.value = cfg.gender;
          if (customLonInput) customLonInput.value = cfg.lon.toFixed(2);
          if (timezoneSelect) timezoneSelect.value = String(cfg.tz);
        }
        updateLandingPreview();
      });
    });
  }

  // Features Showcase Click on Landing Page
  function initPortalFeaturesShowcase() {
    if (!portalFeaturesGrid) return;
    portalFeaturesGrid.querySelectorAll('[data-jump-view]').forEach(card => {
      card.addEventListener('click', () => {
        const targetView = card.getAttribute('data-jump-view');
        const mode = (targetView === 'view-synastry') ? 'synastry' : (targetView === 'view-luck') ? 'chrono' : 'natal';
        triggerCalculate();
        showDynamicCalculationProgress(mode, () => {
          switchToDashboardView(targetView);
        });
      });
    });
  }

  // Advanced Solar Time Options Toggle
  function initAdvSolarToggle() {
    if (!btnToggleAdvSolar || !advSolarTimeContainer) return;
    btnToggleAdvSolar.addEventListener('click', () => {
      const isHidden = advSolarTimeContainer.classList.contains('hidden');
      if (isHidden) {
        advSolarTimeContainer.classList.remove('hidden');
        btnToggleAdvSolar.setAttribute('data-i18n', 'portal_adv_toggle_hide');
        btnToggleAdvSolar.textContent = (typeof I18N !== 'undefined') ? I18N.t('portal_adv_toggle_hide', currentLang) : (currentLang === 'en' ? '⚙️ Hide Solar Options' : '⚙️ 收起天文高级选项');
      } else {
        advSolarTimeContainer.classList.add('hidden');
        btnToggleAdvSolar.setAttribute('data-i18n', 'portal_adv_toggle_show');
        btnToggleAdvSolar.textContent = (typeof I18N !== 'undefined') ? I18N.t('portal_adv_toggle_show', currentLang) : (currentLang === 'en' ? '⚙️ Show Solar Options' : '⚙️ 展开天文高级选项');
      }
    });
  }

  // Debounce helper for high-frequency input changes
  let calcDebounceTimer = null;
  function debouncedCalculate(delay = 60) {
    if (calcDebounceTimer) clearTimeout(calcDebounceTimer);
    calcDebounceTimer = setTimeout(() => {
      triggerCalculate();
    }, delay);
  }

  // Core Calculation & UI Render (Ultra-fast synchronous execution)
  function triggerCalculate() {
    const tStart = (typeof performance !== 'undefined') ? performance.now() : Date.now();
    try {
      const dateVal = birthDatePicker.value;
      const timeVal = birthTimePicker.value;
      if (!dateVal || !timeVal) return;

      const [year, month, day] = dateVal.split('-').map(Number);
      const [hour, minute] = timeVal.split(':').map(Number);
      const gender = genderSelect.value;
      const useTrueSolarTime = useSolarTimeCheck.checked;
      const isLateRatNextDay = lateRatCheck.checked;
      const longitude = parseFloat(customLonInput.value) || 116.4;
      const timezone = parseFloat(timezoneSelect.value) !== undefined ? parseFloat(timezoneSelect.value) : 8.0;

      const result = BaZiEngine.calculate({
        year, month, day, hour, minute, gender,
        useTrueSolarTime, isLateRatNextDay, longitude, timezone
      });

      // Update Real-Time Solar Correction Detail Display (100% Bilingual & Reactive)
      updateSolarDetailDisplay(result);

      currentBaziResult = result;

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lastBaziParams', JSON.stringify({
          year, month, day, hour, minute, gender,
          useTrueSolarTime, isLateRatNextDay, longitude, timezone,
          country: currentResidenceCountry,
          city: currentResidenceCity,
          customCity: currentResidenceCustomName
        }));
      }

      // Calculate Fortune & Luck Cycles (大运、流年、流月、流日)
      if (typeof LuckEngine !== 'undefined') {
        const now = new Date();
        const currentCalYear = now.getFullYear();
        selectedAnnualYear = currentCalYear;
        if (!selectedDailyDate) selectedDailyDate = now.toISOString().split('T')[0];

        const userBYear = (result.input && result.input.year) || result.birthYear || result.year || 1990;
        const realCurrentAge = Math.max(1, Math.abs(currentCalYear - userBYear));
        const curChronItem = (result._timelineCache && result._timelineCache.length > 0)
          ? result._timelineCache.find(d => d.year === currentCalYear)
          : null;
        activeChronoAge = curChronItem ? curChronItem.age : Math.max(1, Math.min(100, currentCalYear - userBYear + 1));
        if (!fourPillarsActiveAge || fourPillarsActiveAge < 1 || fourPillarsActiveAge > 100) {
          fourPillarsActiveAge = realCurrentAge;
        }

        currentLuckResult = LuckEngine.calculateLuck(result, selectedAnnualYear, selectedMonthBranch, selectedDailyDate);
        if (currentLuckResult && currentLuckResult.decades && currentLuckResult.decades.length > 0) {
          const matchedDecadeIdx = currentLuckResult.decades.findIndex(d => 
            selectedAnnualYear >= d.yearStart && selectedAnnualYear <= d.yearEnd
          );
          if (matchedDecadeIdx >= 0) {
            selectedDecadeIdx = matchedDecadeIdx;
          } else if (selectedDecadeIdx >= currentLuckResult.decades.length) {
            selectedDecadeIdx = 0;
          }
        }
      }

      renderChart(result);
      renderPortrait(result);
      renderLiterature(result);
      renderLuckCycles(result);
      renderZiping100Score(result);
      renderSpatialFengShui(result, currentLuckResult);
      renderFourPillarsHexagrams(result);
      if (typeof renderCareerWealth === 'function') {
        renderCareerWealth(result, currentLuckResult);
      }
      updateDashboardSummaryBar();
      updateLandingPreview();

      // Measure calculation duration
      const tEnd = (typeof performance !== 'undefined') ? performance.now() : Date.now();
      const duration = (tEnd - tStart).toFixed(2);
      const perfBadge = document.getElementById('calcPerfBadge');
      if (perfBadge) {
        perfBadge.textContent = (currentLang === 'en') ? `⚡ Instant Calculation (${duration}ms)` : `⚡ 瞬时计算完成 (${duration}ms)`;
      }
    } catch (err) {
      console.error('排盘计算发生异常:', err);
    }
  }

  // Render Four Pillars & Statistics
  function renderChart(res) {
    const isEn = (currentLang === 'en');
    const pillars = ['year', 'month', 'day', 'hour'];
    const titles = [0, 1, 2, 3].map(i => (typeof I18N !== 'undefined' ? I18N.getPillarTitle(i, currentLang) : ['年柱 (根基/祖业)', '月柱 (提纲/事业)', '日柱 (日元/自身)', '时柱 (归宿/子女)'][i]));

    const container = document.getElementById('pillarsContainer');
    container.innerHTML = '';

    pillars.forEach((pKey, idx) => {
      const p = res.pillars[pKey];
      const isDayMaster = (pKey === 'day');

      const card = document.createElement('div');
      card.className = `pillar-card p-4 flex flex-col items-center justify-between ${isDayMaster ? 'border-amber-500/60 shadow-amber-900/20' : ''}`;

      // Hidden stems HTML
      const hiddenHtml = p.hidden.map(h => `
        <div class="flex items-center justify-between text-xs py-0.5 border-b border-gray-700/30">
          <span class="font-bold ${getElementClass(h.element)}">${h.stem} (${typeof I18N !== 'undefined' ? I18N.getElement(h.element, currentLang) : h.element})</span>
          <span class="text-gray-400 text-[11px]">${typeof I18N !== 'undefined' ? I18N.getGod(h.god, currentLang) : h.god}</span>
          <span class="text-gray-500 text-[10px]">${Math.round(h.weight * 100)}%</span>
        </div>
      `).join('');

      const godDisplay = isDayMaster 
        ? (isEn ? 'Day Master (Self)' : '日主') 
        : (typeof I18N !== 'undefined' ? I18N.getGod(p.stemGod, currentLang) : p.stemGod);

      const isYearPillar = (pKey === 'year');
      const zodiacText = isYearPillar && typeof I18N !== 'undefined'
        ? ` <span class="text-[10px] text-amber-300 font-mono">(${isEn ? `Zodiac: ${I18N.getZodiac(p.branch, 'en')}` : `属${I18N.getZodiac(p.branch, 'zh')}`})</span>`
        : '';

      card.innerHTML = `
        <div class="w-full flex justify-between items-center mb-2 pb-1 border-b border-gray-700/40">
          <span class="text-xs text-gray-400 font-medium">${titles[idx]}${zodiacText}</span>
          <span class="pillar-badge ${isDayMaster ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-gray-300'}">
            ${godDisplay}
          </span>
        </div>

        <div class="my-3 flex flex-col items-center">
          <!-- Heavenly Stem -->
          <div class="flex items-center space-x-2 my-1">
            <span class="text-4xl font-bold font-serif-sc ${getElementClass(p.stemElement)}">
              ${p.stem}
            </span>
            <span class="text-[10px] px-1.5 py-0.5 rounded ${getElementBgClass(p.stemElement)} ${getElementClass(p.stemElement)}">
              ${typeof I18N !== 'undefined' ? I18N.getElement(p.stemElement, currentLang) : p.stemElement}
            </span>
          </div>

          <!-- Earthly Branch -->
          <div class="flex items-center space-x-2 my-1">
            <span class="text-4xl font-bold font-serif-sc ${getElementClass(p.branchElement)}">
              ${p.branch}
            </span>
            <span class="text-[10px] px-1.5 py-0.5 rounded ${getElementBgClass(p.branchElement)} ${getElementClass(p.branchElement)}">
              ${typeof I18N !== 'undefined' ? I18N.getElement(p.branchElement, currentLang) : p.branchElement}
            </span>
          </div>
        </div>

        <!-- Hidden Stems -->
        <div class="w-full bg-black/20 rounded-lg p-2.5 my-2">
          <div class="text-[11px] text-gray-400 mb-1 font-medium flex justify-between">
            <span>${typeof I18N !== 'undefined' ? I18N.t('hidden_stems_title', currentLang) : '地支藏干'}</span>
            <span>${typeof I18N !== 'undefined' ? I18N.t('hidden_stems_god', currentLang) : '十神分气'}</span>
          </div>
          ${hiddenHtml}
        </div>

        <!-- Na Yin -->
        <div class="w-full text-center mt-2 pt-2 border-t border-gray-700/30">
          <span class="text-xs text-gray-400">${typeof I18N !== 'undefined' ? I18N.t('nayin_prefix', currentLang) : '纳音：'}</span>
          <span class="text-xs font-semibold text-amber-200/90">${typeof I18N !== 'undefined' ? I18N.getNaYin(p.naYin, currentLang) : p.naYin}</span>
        </div>
      `;

      container.appendChild(card);
    });

    // Update Solar Info Tag
    const solarTag = document.getElementById('solarTermTag');
    if (solarTag) {
      solarTag.textContent = isEn
        ? `Solar Term: Month ${res.solarInfo.jieName} (${res.solarInfo.monthBranch}) · Solar Year: ${res.solarInfo.solarYear}`
        : `节气令星：${res.solarInfo.jieName}月建（${res.solarInfo.monthBranch}月）· 太阳公历年：${res.solarInfo.solarYear}`;
    }

    // Update Day Master Overview
    const dmStemName = typeof I18N !== 'undefined' ? I18N.getStem(res.dayMaster, currentLang) : `${res.dayMasterYinYang}${res.dayMasterElement}`;
    document.getElementById('dmTitle').textContent = isEn
      ? `${res.dayMaster} - ${dmStemName}`
      : `${res.dayMaster} (${res.dayMasterYinYang}${res.dayMasterElement})`;
    document.getElementById('dmTitle').className = `text-2xl font-bold font-serif-sc ${getElementClass(res.dayMasterElement)}`;

    // Render Five Elements Breakdown
    const elContainer = document.getElementById('elementsBarContainer');
    elContainer.innerHTML = '';
    const elList = ['木', '火', '土', '金', '水'];
    elList.forEach(el => {
      const pct = res.elements.percentages[el] || 0;
      const score = res.elements.scores[el] ? res.elements.scores[el].toFixed(1) : '0';
      const elLabel = typeof I18N !== 'undefined' ? I18N.getElement(el, currentLang) : el;
      const row = document.createElement('div');
      row.className = 'flex items-center space-x-2 text-sm';
      row.innerHTML = `
        <span class="w-14 font-bold ${getElementClass(el)}">${elLabel}</span>
        <div class="flex-1 bg-gray-700/40 rounded-full h-2.5 overflow-hidden">
          <div class="h-full rounded-full ${getElementBgClass(el)}" style="width: ${Math.min(pct * 2, 100)}%; background-color: var(--color-${el === '木' ? 'wood' : el === '火' ? 'fire' : el === '土' ? 'earth' : el === '金' ? 'metal' : 'water'});"></div>
        </div>
        <span class="w-16 text-right text-xs text-gray-300 font-mono">${pct}% (${score})</span>
      `;
      elContainer.appendChild(row);
    });

    // Render Canvas Radar Chart
    ElementChart.renderRadar('elementRadarCanvas', res.elements.percentages);
    if (typeof VisualAlchemy !== 'undefined') {
      VisualAlchemy.setActiveElement(res.dayMasterElement || '木');
    }
    if (typeof renderImperialDossierPages === 'function') {
      renderImperialDossierPages(currentLang);
    }
  }

  // Render Grand Holistic Persona Portrait & Pattern Blueprint (Five Canons Integration)
  function renderPortrait(res) {
    if (typeof PortraitEngine === 'undefined') return;
    const isEn = (currentLang === 'en');
    let pData = PortraitEngine.analyze(res, currentLang);
    if (isEn && typeof I18N !== 'undefined' && typeof I18N.translatePortrait === 'function') {
      pData = I18N.translatePortrait(pData, 'en');
    }

    // 1. Header Badges
    const headerBadgesEl = document.getElementById('portraitHeaderBadges');
    if (headerBadgesEl) {
      headerBadgesEl.innerHTML = `
        <span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
          ${isEn ? 'Day Master: ' : '日主：'}${pData.dayMasterDesc}
        </span>
        <span class="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
          ${isEn ? 'Vigor: ' : '旺衰：'}${pData.vigor.status}
        </span>
        <span class="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">
          ${isEn ? 'Main: ' : '主格：'}${pData.patterns[0] ? pData.patterns[0].name.split(' ')[0] : (isEn ? 'Direct Officer' : '正官格')}
        </span>
        ${pData.patterns.length > 1 ? `
          <span class="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold">
            ${isEn ? 'Special: ' : '特格：'}${pData.patterns[1].name}
          </span>
        ` : ''}
        <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
          ${isEn ? 'Primary Regulator: ' : '首用：'}${pData.climate.primary}
        </span>
      `;
    }

    // 2. Vigor Evaluation
    const vigorStatusEl = document.getElementById('vigorStatusBadge');
    if (vigorStatusEl) {
      vigorStatusEl.textContent = `${pData.vigor.status} (${pData.vigor.totalScore}${isEn ? ' pts / 100' : '分 / 满分100'})`;
    }
    const vigorSummaryEl = document.getElementById('vigorSummaryText');
    if (vigorSummaryEl) {
      vigorSummaryEl.textContent = pData.vigor.summary;
    }
    const vigorBarsEl = document.getElementById('vigorMetricsBars');
    if (vigorBarsEl) {
      const ling = pData.vigor.metrics.ling;
      const di = pData.vigor.metrics.di;
      const shi = pData.vigor.metrics.shi;

      const lingPct = Math.round((ling.score / ling.max) * 100);
      const diPct = Math.round((di.score / di.max) * 100);
      const shiPct = Math.round((shi.score / shi.max) * 100);
      const ptsLabel = isEn ? ' pts' : '分';

      vigorBarsEl.innerHTML = `
        <div>
          <div class="flex justify-between text-[11px] mb-1">
            <span class="text-amber-300 font-medium">${ling.name}：${ling.status}</span>
            <span class="font-mono text-gray-400">${ling.score} / ${ling.max}${ptsLabel}</span>
          </div>
          <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div class="bg-amber-500 h-full rounded-full transition-all duration-500" style="width: ${lingPct}%"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-[11px] mb-1">
            <span class="text-emerald-300 font-medium">${di.name}：${di.roots.length > 0 ? di.roots.slice(0, 2).join('；') : (isEn ? 'No strong branch root' : '支无强根')}</span>
            <span class="font-mono text-gray-400">${di.score} / ${di.max}${ptsLabel}</span>
          </div>
          <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div class="bg-emerald-500 h-full rounded-full transition-all duration-500" style="width: ${diPct}%"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-[11px] mb-1">
            <span class="text-blue-300 font-medium">${shi.name}：${shi.assists.length > 0 ? shi.assists.join('；') : (isEn ? 'Little stem support' : '天干少同气帮扶')}</span>
            <span class="font-mono text-gray-400">${shi.score} / ${shi.max}${ptsLabel}</span>
          </div>
          <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div class="bg-blue-500 h-full rounded-full transition-all duration-500" style="width: ${shiPct}%"></div>
          </div>
        </div>
      `;
    }

    // 3. Climate Summary Box
    const climateBoxEl = document.getElementById('climateSummaryBox');
    if (climateBoxEl) {
      const favHtml = pData.climate.favorable.map(f => `<span class="px-2 py-0.5 text-[11px] rounded bg-blue-900/30 text-blue-300 border border-blue-700/30 mr-1.5 inline-block">${f}</span>`).join('');
      const tabHtml = pData.climate.taboos.map(t => `<span class="px-2 py-0.5 text-[11px] rounded bg-rose-900/30 text-rose-300 border border-rose-700/30 mr-1.5 inline-block">${t}</span>`).join('');

      climateBoxEl.innerHTML = `
        <div class="grid grid-cols-2 gap-2 pb-1 border-b border-gray-800">
          <div>
            <span class="text-blue-300 font-medium block text-[11px]">${isEn ? 'Primary Seasonal Regulator' : '首要调候用神'}</span>
            <span class="text-sm font-bold text-amber-300 font-serif-sc">${pData.climate.primary}</span>
          </div>
          <div>
            <span class="text-indigo-300 font-medium block text-[11px]">${isEn ? 'Secondary Seasonal Regulator' : '次要调候用神'}</span>
            <span class="text-sm font-bold text-indigo-200 font-serif-sc">${pData.climate.secondary}</span>
          </div>
        </div>
        <p class="text-gray-300 text-[11px] leading-relaxed">
          <b class="text-blue-300">${isEn ? '【Seasonal Climate】' : '【气候提纲】'}</b>${pData.climate.climate}
        </p>
        <p class="text-gray-400 text-[11px] italic font-serif-sc">
          “${pData.climate.classicText}”
        </p>
        <div class="flex flex-wrap gap-1 items-center pt-1">
          <span class="text-gray-400 text-[11px]">${isEn ? 'Favorable Supporting Gods: ' : '相助喜神：'}</span>${favHtml}
        </div>
        <div class="flex flex-wrap gap-1 items-center">
          <span class="text-rose-400 text-[11px]">${isEn ? 'Adverse / Taboo: ' : '忌见偏枯：'}</span>${tabHtml}
        </div>
      `;
    }

    // 4. Pattern Diagnostics & Energy Percentage Weights (Ensuring Total > 85%)
    const weightBarEl = document.getElementById('patternWeightSummaryBar');
    if (weightBarEl && pData.patterns) {
      const colors = [
        'bg-amber-500', 'bg-purple-500', 'bg-emerald-500', 'bg-blue-500', 'bg-rose-500', 'bg-cyan-500'
      ];
      const textColors = [
        'text-amber-400', 'text-purple-400', 'text-emerald-400', 'text-blue-400', 'text-rose-400', 'text-cyan-400'
      ];
      const borderColors = [
        'border-amber-500/30', 'border-purple-500/30', 'border-emerald-500/30', 'border-blue-500/30', 'border-rose-500/30', 'border-cyan-500/30'
      ];

      const segmentsHtml = pData.patterns.map((p, idx) => `
        <div class="${colors[idx % colors.length]} h-full transition-all duration-500 hover:opacity-90 relative group"
             style="width: ${p.weightPct}%;"
             title="${p.name}: ${p.weightPct}% (${p.tierName})">
        </div>
      `).join('') + `
        <div class="bg-gray-700/60 h-full transition-all duration-500 hover:opacity-90 relative group"
             style="width: ${pData.residualPatternPct}%;"
             title="${isEn ? 'Latent Energy Residue: ' : '潜隐杂气/微气象：'}${pData.residualPatternPct}%">
        </div>
      `;

      const legendHtml = pData.patterns.map((p, idx) => `
        <div class="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-black/40 border ${borderColors[idx % borderColors.length]}">
          <span class="w-2.5 h-2.5 rounded-full ${colors[idx % colors.length]}"></span>
          <span class="font-bold font-serif-sc ${textColors[idx % textColors.length]}">${p.name.split(' ')[0]}</span>
          <span class="font-mono text-white font-bold ml-1">${p.weightPct}%</span>
          <span class="text-[10px] text-gray-400">(${p.tierName})</span>
        </div>
      `).join('') + `
        <div class="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-black/30 border border-gray-800 text-gray-400 text-[11px]">
          <span class="w-2 h-2 rounded-full bg-gray-600"></span>
          <span>${isEn ? 'Latent Energy Residue: ' : '潜隐杂气余量: '}<b class="font-mono text-gray-300">${pData.residualPatternPct}%</b></span>
        </div>
      `;

      weightBarEl.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-gray-800 text-xs">
          <div class="flex items-center space-x-2">
            <span class="text-amber-300 font-bold font-serif-sc">${isEn ? '📊 Pattern Energy Weight Distribution' : '📊 命盘格局能量权重透视分布'}</span>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
              ${isEn ? '✓ Total Established Pattern Energy: ' + pData.totalPatternWeightPct + '% (Exceeds 85% Core Dominance Line)' : '✓ 已确立格局总能量：' + pData.totalPatternWeightPct + '% (已超85%核心主导线)'}
            </span>
          </div>
          <span class="text-[11px] text-gray-400">
            ${isEn ? 'Encompasses core personality, talents, and career dynamics; residue represents subtle latent energies' : '涵盖本命主要人格、才华天赋与事业气象，余量为潜隐微气象'}
          </span>
        </div>

        <!-- Segmented Multi-Color Bar -->
        <div class="w-full h-3.5 bg-gray-900 rounded-full overflow-hidden flex border border-gray-800 shadow-inner">
          ${segmentsHtml}
        </div>

        <!-- Legend Pills -->
        <div class="flex flex-wrap gap-2 pt-1 text-xs">
          ${legendHtml}
        </div>
      `;
    }

    const patternsContainer = document.getElementById('portraitPatternsContainer');
    if (patternsContainer) {
      patternsContainer.innerHTML = '';

      // Render Broken Pattern Notice Banner if any pattern was busted/removed
      if (pData.brokenPatterns && pData.brokenPatterns.length > 0) {
        const brokenBanner = document.createElement('div');
        brokenBanner.className = 'p-4 rounded-xl bg-red-950/20 border border-red-500/40 shadow-lg space-y-3 mb-4';
        const brokenListHtml = pData.brokenPatterns.map(bp => `
          <div class="p-3 bg-black/40 rounded-lg border border-red-500/30 text-xs space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="font-bold font-serif-sc text-red-300 flex items-center gap-1.5">
                <span class="chinese-seal text-[10px] py-0 border-red-500 text-red-400">${isEn ? 'Busted Pattern' : '破格已剔除'}</span>
                ${bp.name}
              </span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-semibold">
                ${isEn ? 'Defeated & Excised' : '破格受损 · 剔除不立'}
              </span>
            </div>
            <p class="text-gray-300 leading-relaxed">${bp.brokenReason}</p>
          </div>
        `).join('');

        brokenBanner.innerHTML = `
          <div class="flex items-center space-x-2 text-sm font-bold text-red-400 font-serif-sc">
            <span>🛡️ ${isEn ? 'De-confliction & Pattern Purity Verification (Canonical Filtering)' : '格局去伪存真辨证 · 破格剔除机制'}</span>
          </div>
          <p class="text-xs text-gray-400 leading-relaxed">
            ${isEn 
              ? 'Based on orthodox Ziping canonical doctrines (《Zi Ping Zhen Quan》 & 《Yuan Hai Zi Ping》), when a candidate pattern suffers direct clashes, corruption, or destruction from overriding stars (e.g. Direct Officer broken by Yang Blade, Seven Killings, or Hurting Officer), it cannot stand as a genuine life blueprint and must be excised. Established patterns have been dynamically recalculated to ensure >85% dominance.' 
              : '遵循《子平真诠·论成败救应》与《渊海子平·继善篇》宗义：当候选格局遭受强星克破（如正官遇羊刃冲战、七杀混杂或伤官克害），名实已亡，不可滥列为真格，已坚决剔除。剩余真格已重新归一化计算，确保核心格局能量覆盖率绝对高于85%。'}
          </p>
          <div class="space-y-2 mt-2">
            ${brokenListHtml}
          </div>
        `;
        patternsContainer.appendChild(brokenBanner);
      }

      pData.patterns.forEach(pat => {
        const card = document.createElement('div');
        const isHigh = pat.weightPct >= 35;
        card.className = `p-4 rounded-xl border ${pat.isSpecial ? 'bg-amber-950/20 border-amber-600/40 shadow-amber-950/20' : isHigh ? 'bg-purple-950/20 border-purple-600/40 shadow-purple-950/20' : 'bg-black/30 border-gray-800'} space-y-3 shadow-lg`;

        const verseHtml = pat.verse ? `
          <div class="p-2.5 bg-black/40 rounded-lg border-l-4 border-amber-400">
            <span class="text-[10px] text-amber-400 block font-bold">${isEn ? '【Classical Canon Verse】' : '【古赋断诀】'}</span>
            <p class="text-xs font-serif-sc text-amber-200 font-semibold leading-relaxed">“${pat.verse}”</p>
          </div>
        ` : '';

        const sealName = pat.isSpecial 
          ? (isEn ? 'Day-Hour Special' : '日时特格') 
          : pat.isSynergy 
            ? (isEn ? 'Multi-Star Synergy' : '多星复合') 
            : (isEn ? 'Month Regular' : '月令正格');

        card.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-800">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal text-[10px] py-0">${sealName}</span>
              <h4 class="text-base font-bold font-serif-sc ${pat.isSpecial ? 'text-amber-300' : 'text-purple-300'}">
                ${pat.name}
              </h4>
            </div>
            <div class="flex items-center space-x-2 flex-wrap gap-1">
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-600/30 to-amber-500/20 text-amber-300 border border-amber-500/40 font-bold font-mono">
                ${isEn ? 'Energy Share: ' : '能量占比：'}${pat.weightPct}%
              </span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                ${pat.tierName}
              </span>
              ${pat.gradeEvaluation ? `
                <span class="text-[11px] px-2.5 py-0.5 rounded-full font-bold font-mono ${
                  pat.gradeEvaluation.tier.includes('特等') || pat.gradeEvaluation.tier.includes('Exceptional') ? 'bg-gradient-to-r from-amber-500/30 to-rose-500/30 text-amber-300 border border-amber-500/50 shadow-sm' :
                  pat.gradeEvaluation.tier.includes('上等') || pat.gradeEvaluation.tier.includes('Superior') ? 'bg-purple-500/30 text-purple-300 border border-purple-500/40' :
                  pat.gradeEvaluation.tier.includes('中上') || pat.gradeEvaluation.tier.includes('High-Mid') ? 'bg-blue-500/30 text-blue-300 border border-blue-500/40' :
                  'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
                }">
                  👑 ${pat.gradeEvaluation.tier}
                </span>
              ` : ''}
            </div>
          </div>

          <!-- Mini Progress Bar for Individual Pattern -->
          <div class="w-full bg-gray-800/80 rounded-full h-1.5 overflow-hidden">
            <div class="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full" style="width: ${pat.weightPct}%"></div>
          </div>

          ${verseHtml}

          <!-- Strict 4-Part Structure + Dimension 5 Percentage Analysis + Dimension 6 Qing-Zhuo Classical Exegesis -->
          <div class="space-y-2 text-xs leading-relaxed">
            <!-- 1. Pattern Meaning -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-amber-900/30">
              <span class="text-amber-300 font-bold block mb-1">💡 1. ${isEn ? 'Pattern Meaning (Essence & Archetype)' : '格局含义 (是什么意思)'}</span>
              <p class="text-gray-300">${pat.meaning}</p>
            </div>

            <!-- 2. Canonical Source -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800">
              <span class="text-gray-400 font-bold block mb-1">📖 2. ${isEn ? 'Canonical Source (Classical Literature)' : '典籍出处 (出自书里哪里)'}</span>
              <p class="text-gray-400 font-medium">${pat.source}</p>
            </div>

            <!-- 3. Formation Rules & Natal Verification -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-emerald-900/30">
              <span class="text-emerald-400 font-bold block mb-1">⚖️ 3. ${isEn ? 'Formation Rules & Natal Verification' : '成格条件与本命验证 (怎样成的格局)'}</span>
              <p class="text-gray-300">${pat.formation}</p>
            </div>

            <!-- 4. Practical Application, Taboos & Mastery -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-rose-900/30">
              <span class="text-rose-400 font-bold block mb-1">🎯 4. ${isEn ? 'Practical Application, Taboos & Mastery' : '实战用法与喜忌 (怎样使用)'}</span>
              <div class="text-gray-300 whitespace-pre-line leading-relaxed">${pat.usage}</div>
            </div>

            <!-- 5. Natal Energy Share & Impact Assessment -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-indigo-900/30">
              <div class="flex justify-between items-center mb-1">
                <span class="text-indigo-300 font-bold">📊 5. ${isEn ? 'Natal Energy Share & Impact Assessment' : '本命能量占比与影响力评估'}</span>
                <span class="font-mono text-amber-300 font-bold">${pat.weightPct}% · 【${pat.tierName}】</span>
              </div>
              <p class="text-gray-300">${pat.tierDesc}</p>
              <p class="text-gray-400 text-[11px] mt-0.5"><b>${isEn ? 'Empowerment Rationale: ' : '成格赋能依据：'}</b>${pat.weightReason}</p>
            </div>

            ${pat.gradeEvaluation ? `
            <!-- 6. Pattern Grade & Qing-Zhuo Classical Exegesis -->
            <div class="p-3 bg-black/40 rounded-xl border border-amber-500/40 space-y-2 mt-2 shadow-inner">
              <div class="flex flex-wrap items-center justify-between gap-1.5 pb-1.5 border-b border-gray-800">
                <div class="flex items-center space-x-1.5">
                  <span class="chinese-seal text-[9px] py-0">${isEn ? 'Classical Purity' : '四经辨析'}</span>
                  <span class="text-amber-300 font-bold text-xs font-serif-sc">
                    🏛️ 6. ${isEn ? 'Pattern Grade & Qing-Zhuo Classical Exegesis' : '格局评级与四典清浊深度论述 (《滴天髓》《真诠》《兰台》《神峰》)'}
                  </span>
                </div>
                <span class="text-[11px] px-2.5 py-0.5 rounded-full font-bold font-mono ${
                  pat.gradeEvaluation.tier.includes('特等') || pat.gradeEvaluation.tier.includes('Exceptional') ? 'bg-gradient-to-r from-amber-500/30 to-rose-500/30 text-amber-300 border border-amber-500/50' :
                  pat.gradeEvaluation.tier.includes('上等') || pat.gradeEvaluation.tier.includes('Superior') ? 'bg-purple-500/30 text-purple-300 border border-purple-500/40' :
                  pat.gradeEvaluation.tier.includes('中上') || pat.gradeEvaluation.tier.includes('High-Mid') ? 'bg-blue-500/30 text-blue-300 border border-blue-500/40' :
                  'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
                }">
                  ${pat.gradeEvaluation.tier}
                </span>
              </div>

              <div class="space-y-2 text-[11.5px] leading-relaxed">
                <!-- Strengths & Vulnerabilities -->
                <div class="p-2 rounded bg-black/40 border border-gray-800/80">
                  <b class="text-amber-300">${isEn ? '⚖️ Strengths & Vulnerabilities (Good vs Bad): ' : '⚖️ 格局优劣辨析 (好与不好)：'}</b>
                  <span class="text-gray-300">${isEn ? (pat.gradeEvaluation.strengthsAndFlawsEn || pat.gradeEvaluation.strengthsAndFlaws || '') : (pat.gradeEvaluation.strengthsAndFlawsZh || pat.gradeEvaluation.strengthsAndFlaws || '')}</span>
                </div>

                <!-- Classical Criteria -->
                <div class="p-2 rounded bg-black/40 border border-gray-800/80">
                  <b class="text-blue-300">${isEn ? '📖 Classical Criteria (Why this Grade): ' : '📖 典籍评判依据 (为什么如此评判)：'}</b>
                  <span class="text-gray-300">${isEn ? (pat.gradeEvaluation.whyThisGradeEn || pat.gradeEvaluation.whyThisGrade || '') : (pat.gradeEvaluation.whyThisGradeZh || pat.gradeEvaluation.whyThisGrade || '')}</span>
                </div>

                <!-- Ceilings & Bottlenecks -->
                <div class="p-2 rounded bg-rose-950/20 border border-rose-900/40">
                  <b class="text-rose-400">${isEn ? '🚧 Ceilings & Bottlenecks (Why it cannot ascend): ' : '🚧 晋阶卡点与天花板 (为什么上不去)：'}</b>
                  <span class="text-rose-200">${isEn ? (pat.gradeEvaluation.bottleneckEn || pat.gradeEvaluation.bottleneck || '') : (pat.gradeEvaluation.bottleneckZh || pat.gradeEvaluation.bottleneck || '')}</span>
                </div>

                <!-- Moat & Defensible Floor -->
                <div class="p-2 rounded bg-emerald-950/20 border border-emerald-900/40">
                  <b class="text-emerald-400">${isEn ? '🛡️ Moat & Defensible Floor (Baseline Protection): ' : '🛡️ 守正护城河与保底 (保底是什么)：'}</b>
                  <span class="text-emerald-200">${isEn ? (pat.gradeEvaluation.floorBaselineEn || pat.gradeEvaluation.floorBaseline || '') : (pat.gradeEvaluation.floorBaselineZh || pat.gradeEvaluation.floorBaseline || '')}</span>
                </div>

                <!-- Ascension Path -->
                <div class="p-2 rounded bg-amber-950/20 border border-amber-900/40">
                  <b class="text-amber-400">${isEn ? '🚀 Practical Elevation & Ascension Path (How to improve): ' : '🚀 破局晋升与改运路径 (如何改善与提升)：'}</b>
                  <span class="text-amber-200">${isEn ? (pat.gradeEvaluation.elevationPathEn || pat.gradeEvaluation.elevationPath || '') : (pat.gradeEvaluation.elevationPathZh || pat.gradeEvaluation.elevationPath || '')}</span>
                </div>
              </div>
            </div>` : ''}

            <!-- 7. Combination Bureaus & Energy Precedence Exegesis -->
            ${(() => {
              const interactions = (currentBaziResult && currentBaziResult.interactions) || {};
              const sanHui = interactions.sanHuiCombos || [];
              const sanHe = interactions.sanHeCombos || [];
              const banHe = interactions.banHeCombos || [];
              const clashes = interactions.branchClashes || [];
              const resolvedClashes = clashes.filter(c => c.resolvedByCombo);

              let comboSummaryZh = '';
              let comboSummaryEn = '';

              if (sanHui.length > 0 || sanHe.length > 0 || banHe.length > 0) {
                const partsZh = [];
                const partsEn = [];
                if (sanHui.length > 0) {
                  partsZh.push(`三会方局【${sanHui.map(c => c.nameZh).join('、')}】`);
                  partsEn.push(`Directional Meeting [${sanHui.map(c => c.nameEn).join('; ')}]`);
                }
                if (sanHe.length > 0) {
                  partsZh.push(`三合局【${sanHe.map(c => c.nameZh).join('、')}】`);
                  partsEn.push(`Three Harmonies [${sanHe.map(c => c.nameEn).join('; ')}]`);
                }
                if (banHe.length > 0) {
                  partsZh.push(`半合/拱合【${banHe.map(c => c.nameZh).join('、')}】`);
                  partsEn.push(`Half Harmonies [${banHe.map(c => c.nameEn).join('; ')}]`);
                }
                comboSummaryZh = `原局聚合${partsZh.join('，')}。古法宗义：‘方局合局，气专势隆，以合化能量为第一优先；若与地支刑冲并见，贪合忘冲、贪合忘刑，合局优先涵摄化解’。此合局能量直接赋能并主导本命格局之清纯厚重度。`;
                comboSummaryEn = `Natal chart forms ${partsEn.join('; ')}. Metaphysical principle: 'Directional meetings and harmony bureaus consolidate dominant elemental momentum, taking absolute precedence over standard clashes and punishments (Greedy for Harmony, Oblivious to Clash)'. This combination energy directly governs pattern purity.`;
              } else {
                comboSummaryZh = '原局干支各守本位，无大势三合三会方局，以各柱正统干支生克承应为主，五行平和流转，综合分析全局流通气象。';
                comboSummaryEn = 'Natal pillars preserve individual spatial positions without major bureaus; standard ten gods circulation and pillar proximity govern pattern dynamics.';
              }

              return `
                <div class="p-3 bg-black/40 rounded-xl border border-sky-600/40 space-y-2 mt-2 shadow-inner">
                  <div class="flex items-center space-x-1.5 pb-1 border-b border-gray-800">
                    <span class="chinese-seal text-[9px] py-0 border-sky-500 text-sky-300">${isEn ? 'Combination Synthesis' : '合局通融'}</span>
                    <span class="text-sky-300 font-bold text-xs font-serif-sc">
                      🌀 7. ${isEn ? 'Combination Bureaus & Energy Precedence Exegesis (San He / San Hui)' : '合局全套解析与能量优先论 (三合生旺库 / 三会方局 / 贪合忘冲)'}
                    </span>
                  </div>
                  <p class="text-gray-300 text-[11.5px] leading-relaxed">${isEn ? comboSummaryEn : comboSummaryZh}</p>
                  ${resolvedClashes.length > 0 ? `
                    <div class="p-2 rounded bg-amber-950/30 border border-amber-600/30 text-[11px] text-amber-200">
                      <b>${isEn ? '⚡ Clashes Resolved by Combination Bureau: ' : '⚡ 合局化解刑冲实况：'}</b>
                      ${resolvedClashes.map(c => isEn ? `[${(c.branchesEn || c.branches.map(b => (typeof I18N !== 'undefined' ? I18N.getBranch(b, 'en') : b))).join('-')}: ${c.resolutionNoteEn}]` : `【地支${c.branches.join('与')}冲：${c.resolutionNoteZh}】`).join('；')}
                    </div>
                  ` : ''}
                </div>
              `;
            })()}
          </div>
        `;
        patternsContainer.appendChild(card);
      });
    }

    // 5. Holistic Persona Portrait
    const persEl = document.getElementById('personaPersonality');
    if (persEl) persEl.textContent = pData.portrait.personality;

    const careerEl = document.getElementById('personaCareer');
    if (careerEl) careerEl.textContent = pData.portrait.career;

    const wealthEl = document.getElementById('personaWealth');
    if (wealthEl) wealthEl.textContent = pData.portrait.wealth;

    const adviceEl = document.getElementById('personaAdvice');
    if (adviceEl) adviceEl.textContent = pData.portrait.advice;

    // 5.5 Pareto 80/20 Core Synthesis Report Rendering (👑 五经全盘画像 · 帕累托 20% 关键枢纽全盘分析)
    const paretoContainer = document.getElementById('paretoCoreContainer');
    if (paretoContainer && pData.paretoCore) {
      paretoContainer.innerHTML = '';
      const pc = pData.paretoCore;

      // 0. 👑 第一核心主导格局 20% 统帅横幅 (Dominant Pattern 20/80 Fulcrum Banner)
      if (pc.primaryPatternNameZh) {
        const topBanner = document.createElement('div');
        topBanner.className = 'p-4 rounded-xl bg-gradient-to-r from-amber-950/50 via-amber-900/25 to-black/60 border-2 border-amber-500/60 shadow-xl space-y-2';
        topBanner.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal text-xs py-0.5">${isEn ? 'PARETO 20% FULCRUM' : '👑 帕累托 20% 统帅枢纽'}</span>
              <h3 class="text-base sm:text-lg font-bold font-serif-sc text-amber-300">
                ${isEn ? `Primary Dominant Pattern: ${pc.primaryPatternNameEn || pc.primaryPatternNameZh} (${pc.primaryPatternWeightPct}%)` : `第一核心主导格局：${pc.primaryPatternNameZh}（能量占比：${pc.primaryPatternWeightPct}%）`}
              </h3>
            </div>
            <span class="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 font-mono">
              ${isEn ? 'Governs 80% Destiny' : '八经融通 · 统领全盘80%命途大纲'}
            </span>
          </div>
          <p class="text-xs text-gray-200 leading-relaxed font-serif-sc">
            ${isEn ? pc.primaryPatternDescEn : pc.primaryPatternDescZh}
          </p>
        `;
        paretoContainer.appendChild(topBanner);
      }

      // 0.5 👑 全盘大局通融 · 综合全息画像 (Grand Picture Holistic Masterpiece Card)
      if (pc.grandPicture) {
        const gp = pc.grandPicture;
        const grandCard = document.createElement('div');
        grandCard.className = 'p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-amber-950/40 via-black/85 to-stone-950/90 border-2 border-amber-500/70 shadow-2xl space-y-5';

        const highlights = (isEn ? (gp.highlightsEn || gp.highlights) : (gp.highlightsZh || gp.highlights)) || [];
        const highlightsHtml = highlights.map(h => `
          <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold border border-amber-500/40 font-mono">
            ${h}
          </span>
        `).join('');

        const rulesList = (isEn ? (gp.rulesEn || gp.rules) : (gp.rulesZh || gp.rules)) || [];
        const rulesCardsHtml = rulesList.map(r => `
          <div class="p-3 bg-black/40 rounded-xl border border-amber-500/30 space-y-1.5 flex flex-col justify-between">
            <span class="text-xs font-bold text-amber-300 font-serif-sc">${r.label}</span>
            <p class="text-[11px] text-gray-300 leading-relaxed">${r.desc}</p>
          </div>
        `).join('');

        grandCard.innerHTML = `
          <!-- Header -->
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-amber-500/40">
            <div class="flex items-center space-x-2.5">
              <span class="chinese-seal text-xs py-0.5">${isEn ? 'GRAND PICTURE' : '👑 综合全息画像'}</span>
              <h3 class="text-base sm:text-xl font-bold font-serif-sc text-amber-300">
                ${isEn ? (gp.titleEn || gp.title) : (gp.titleZh || gp.title)}
              </h3>
            </div>
            <div class="flex items-center gap-1.5 flex-wrap">
              ${highlightsHtml}
            </div>
          </div>

          <!-- Subtitle / Methodology -->
          <div class="p-3 bg-amber-950/20 rounded-xl border-l-4 border-amber-500 text-xs text-amber-200/90 font-serif-sc leading-relaxed">
            ${isEn ? (gp.subtitleEn || gp.subtitle) : (gp.subtitleZh || gp.subtitle)}
          </div>

          <!-- 1. 命盘总相与生命大纲 -->
          <div class="p-4 rounded-xl bg-black/40 border border-amber-500/30 space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-2 font-serif-sc">
                <span>🏛️</span>
                <span>${isEn ? '1. Grand Archetype & Sovereign Life Blueprint' : '一、命盘大局总相与生命大纲'}</span>
              </h4>
              <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
                ${isEn ? 'Day Master & Sovereign Mandate' : '元神气象 · 格局司权'}
              </span>
            </div>
            <p class="text-xs text-gray-200 leading-relaxed font-sans">
              ${isEn ? (gp.thesisEn || gp.thesis) : (gp.thesisZh || gp.thesis)}
            </p>
          </div>

          <!-- 2. 生杀破局与战略胜负手 -->
          <div class="p-4 rounded-xl bg-black/40 border border-rose-900/40 space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs sm:text-sm font-bold text-rose-300 flex items-center gap-2 font-serif-sc">
                <span>⚔️</span>
                <span>${isEn ? '2. Strategic Breakthrough Campaign & 20% Lever' : '二、生杀破局与战略胜负手 (20% 关键抓手)'}</span>
              </h4>
              <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono">
                ${isEn ? 'Disease & Medicine Alchemy' : '以病取药 · 相神救应'}
              </span>
            </div>
            <p class="text-xs text-gray-200 leading-relaxed font-sans">
              ${isEn ? (gp.campaignEn || gp.campaign) : (gp.campaignZh || gp.campaign)}
            </p>
          </div>

          <!-- 3. 六亲后方与家庭压舱石 -->
          <div class="p-4 rounded-xl bg-black/40 border border-emerald-900/40 space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs sm:text-sm font-bold text-emerald-300 flex items-center gap-2 font-serif-sc">
                <span>🛡️</span>
                <span>${isEn ? '3. Domestic Sanctuary & Kinship Ballast' : '三、六亲后方与家庭压舱石'}</span>
              </h4>
              <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                ${isEn ? 'Spousal Breakwater & Offspring Legacy' : '配偶防波堤 · 后嗣引秀'}
              </span>
            </div>
            <p class="text-xs text-gray-200 leading-relaxed font-sans">
              ${isEn ? (gp.kinshipEn || gp.kinship) : (gp.kinshipZh || gp.kinship)}
            </p>
          </div>

          <!-- 4. 时代跃迁与时空场能共振 -->
          <div class="p-4 rounded-xl bg-black/40 border border-teal-900/40 space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs sm:text-sm font-bold text-teal-300 flex items-center gap-2 font-serif-sc">
                <span>🚀</span>
                <span>${isEn ? '4. Macro Era Supercycle & Spatial Trajectory' : '四、时代跃迁与宏观时空场能共振'}</span>
              </h4>
              <span class="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30 font-mono">
                ${isEn ? 'Period 9 AI Era & Geographic Leverage' : '离九运AI浪潮 · 地理借势'}
              </span>
            </div>
            <p class="text-xs text-gray-200 leading-relaxed font-sans">
              ${isEn ? (gp.eraEn || gp.era) : (gp.eraZh || gp.era)}
            </p>
          </div>

          <!-- 5. 终身不败之立身三则 -->
          <div class="p-4 rounded-xl bg-amber-950/25 border border-amber-500/40 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-2 font-serif-sc">
                <span>🎯</span>
                <span>${isEn ? '5. Sovereign Grand Directives (Lifetime Golden Rules)' : '五、终身立身不败之黄金三则'}</span>
              </h4>
              <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono border border-amber-500/30">
                ${isEn ? 'Supreme Life Guidelines' : '守正不败总纲'}
              </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${rulesCardsHtml}
            </div>
          </div>
        `;
        paretoContainer.appendChild(grandCard);
      }

      // Details Drawer & Expand/Collapse Toggle
      const detailsDivider = document.createElement('div');
      detailsDivider.className = 'pt-4 pb-1 border-t border-gray-800/80 flex items-center justify-between gap-2';
      detailsDivider.innerHTML = `
        <div class="flex items-center space-x-2">
          <span class="chinese-seal text-[10px] py-0">${isEn ? 'CANONICAL DETAILS' : '八经依据'}</span>
          <h4 class="text-xs sm:text-sm font-bold text-gray-300 font-serif-sc">
            ${isEn ? '🔍 Classical Canonical Textual Evidences & Palace Exegeses' : '🔍 深入查验八经细分依据与六亲全息'}
          </h4>
        </div>
        <button id="toggleParetoDetailsBtn" type="button" class="px-3 py-1 text-xs rounded-lg bg-gray-800/90 hover:bg-gray-700 text-amber-300 border border-gray-700 transition flex items-center gap-1.5 shadow cursor-pointer">
          <span id="toggleParetoDetailsIcon">▼</span>
          <span id="toggleParetoDetailsText">${isEn ? 'Show Canonical Breakdowns' : '展开八经细分卡片'}</span>
        </button>
      `;
      paretoContainer.appendChild(detailsDivider);

      const paretoDetailsContainer = document.createElement('div');
      paretoDetailsContainer.id = 'paretoDetailsContainer';
      paretoDetailsContainer.className = 'space-y-4 hidden';
      paretoContainer.appendChild(paretoDetailsContainer);

      const toggleBtn = detailsDivider.querySelector('#toggleParetoDetailsBtn');
      if (toggleBtn) {
        toggleBtn.onclick = () => {
          const isHidden = paretoDetailsContainer.classList.contains('hidden');
          const toggleIcon = detailsDivider.querySelector('#toggleParetoDetailsIcon');
          const toggleText = detailsDivider.querySelector('#toggleParetoDetailsText');
          if (isHidden) {
            paretoDetailsContainer.classList.remove('hidden');
            if (toggleIcon) toggleIcon.textContent = '▲';
            if (toggleText) toggleText.textContent = isEn ? 'Collapse Canonical Breakdowns' : '收起八经细分卡片';
          } else {
            paretoDetailsContainer.classList.add('hidden');
            if (toggleIcon) toggleIcon.textContent = '▼';
            if (toggleText) toggleText.textContent = isEn ? 'Show Canonical Breakdowns' : '展开八经细分卡片';
          }
        };
      }

      // 1. 👑 八经 20/80 全相关键枢纽 (The Eight Classical Canons 20/80 Matrix)
      if (pc.canons) {
        const canonList = [
          pc.canons.ditiansui,
          pc.canons.qiongtong,
          pc.canons.ziping,
          pc.canons.sanming,
          pc.canons.yuanhai,
          pc.canons.shenfeng,
          pc.canons.yuzhao,
          pc.canons.lixuzhong
        ].filter(Boolean);

        canonList.forEach(c => {
          const card = document.createElement('div');
          let borderTheme = 'border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-black/40 to-black/60';
          let tagColor = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
          let leftBorder = 'border-amber-500';

          if (c.canonId === 'ditiansui') {
            borderTheme = 'border-amber-600/40 bg-gradient-to-br from-amber-950/25 via-black/40 to-black/60';
            tagColor = 'bg-amber-600/20 text-amber-300 border-amber-600/40';
            leftBorder = 'border-amber-600';
          } else if (c.canonId === 'qiongtong') {
            borderTheme = 'border-sky-600/40 bg-gradient-to-br from-sky-950/25 via-black/40 to-black/60';
            tagColor = 'bg-sky-600/20 text-sky-300 border-sky-600/40';
            leftBorder = 'border-sky-500';
          } else if (c.canonId === 'ziping') {
            borderTheme = 'border-violet-600/40 bg-gradient-to-br from-violet-950/25 via-black/40 to-black/60';
            tagColor = 'bg-violet-600/20 text-violet-300 border-violet-600/40';
            leftBorder = 'border-violet-500';
          } else if (c.canonId === 'sanming') {
            borderTheme = 'border-yellow-600/40 bg-gradient-to-br from-yellow-950/25 via-black/40 to-black/60';
            tagColor = 'bg-yellow-600/20 text-yellow-300 border-yellow-600/40';
            leftBorder = 'border-yellow-500';
          } else if (c.canonId === 'yuanhai') {
            borderTheme = 'border-rose-600/40 bg-gradient-to-br from-rose-950/25 via-black/40 to-black/60';
            tagColor = 'bg-rose-600/20 text-rose-300 border-rose-600/40';
            leftBorder = 'border-rose-500';
          } else if (c.canonId === 'shenfeng') {
            borderTheme = 'border-orange-500/40 bg-gradient-to-br from-orange-950/25 via-black/40 to-black/60';
            tagColor = 'bg-orange-500/20 text-orange-300 border-orange-500/30';
            leftBorder = 'border-orange-500';
          } else if (c.canonId === 'yuzhao') {
            borderTheme = 'border-emerald-600/40 bg-gradient-to-br from-emerald-950/25 via-black/40 to-black/60';
            tagColor = 'bg-emerald-600/20 text-emerald-300 border-emerald-600/40';
            leftBorder = 'border-emerald-500';
          } else if (c.canonId === 'lixuzhong') {
            borderTheme = 'border-teal-600/40 bg-gradient-to-br from-teal-950/25 via-black/40 to-black/60';
            tagColor = 'bg-teal-600/20 text-teal-300 border-teal-600/40';
            leftBorder = 'border-teal-500';
          }

          card.className = `p-4 rounded-xl border ${borderTheme} shadow-xl space-y-3`;

          let innerGrid = '';
          if (c.canonId === 'shenfeng') {
            innerGrid = `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-black/35 rounded-lg border border-rose-900/40 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-rose-400 font-bold flex items-center gap-1">
                      <span>⚠️</span>
                      <span>${isEn ? 'Natal Core Affliction (Disease / 病):' : '命盘核心受制病灶 (病)：'}</span>
                    </span>
                    <span class="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 font-mono">${isEn ? (c.diseaseNameEn || c.diseaseName) : (c.diseaseNameZh || c.diseaseName)}</span>
                  </div>
                  <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (c.symptomEn || c.symptom) : (c.symptomZh || c.symptom)}</p>
                </div>
                <div class="p-3 bg-black/35 rounded-lg border border-emerald-900/40 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-emerald-400 font-bold flex items-center gap-1">
                      <span>💊</span>
                      <span>${isEn ? 'Divine Antidote (Medicine / 药):' : '神峰通关至圣解药 (药)：'}</span>
                    </span>
                    <span class="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">${isEn ? 'Supreme Antidote' : '化险为贵'}</span>
                  </div>
                  <p class="text-emerald-200 text-[11px] leading-relaxed font-medium">${isEn ? (c.medicineEn || c.medicine) : (c.medicineZh || c.medicine)}</p>
                  <p class="text-gray-400 text-[10.5px] leading-relaxed pt-1 border-t border-gray-800/60">${isEn ? (c.rationaleEn || c.rationale) : (c.rationaleZh || c.rationale)}</p>
                </div>
              </div>
            `;
          } else if (c.canonId === 'ditiansui' || c.canonId === 'qiongtong') {
            innerGrid = `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-black/35 rounded-lg border border-gray-800/60 space-y-1.5">
                  <span class="text-amber-300 font-bold block">${isEn ? 'Core Vitality & Meteorological Mandate:' : '核心理气气象与五行生机：'}</span>
                  <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (c.summaryEn || c.summary) : (c.summaryZh || c.summary)}</p>
                </div>
                <div class="p-3 bg-black/35 rounded-lg border border-gray-800/60 space-y-1.5">
                  <span class="text-emerald-300 font-bold block">${isEn ? 'Favorable YongShen vs Avoidance Taboos:' : '喜用相生与避坑严戒：'}</span>
                  <div class="text-[11px] text-emerald-200 font-medium">【${isEn ? 'Favorable' : '喜用'}】：${isEn ? (c.favorableEn || c.favorable) : (c.favorableZh || c.favorable)}</div>
                  <div class="text-[11px] text-rose-300 pt-1 border-t border-gray-800/60">【${isEn ? 'Taboos' : '所忌'}】：${isEn ? (c.taboosEn || c.taboos) : (c.taboosZh || c.taboos)}</div>
                </div>
              </div>
            `;
          } else if (c.canonId === 'ziping') {
            innerGrid = `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-black/35 rounded-lg border border-gray-800/60 space-y-1.5">
                  <span class="text-violet-300 font-bold block">${isEn ? 'Pattern Formation & High Achievement Criteria:' : '格局确立与成格成贵基石：'}</span>
                  <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (c.summaryEn || c.summary) : (c.summaryZh || c.summary)}</p>
                  <p class="text-violet-200 text-[10.5px] pt-1 border-t border-gray-800/60">【${isEn ? 'Formation' : '成格'}】：${isEn ? (c.formationEn || c.formation) : (c.formationZh || c.formation)}</p>
                </div>
                <div class="p-3 bg-black/35 rounded-lg border border-gray-800/60 space-y-1.5">
                  <span class="text-emerald-300 font-bold block">${isEn ? 'Guarding Minister (Xiang Shen) & Rescue Synergy:' : '相神救应法度与化险为夷：'}</span>
                  <p class="text-emerald-200 text-[11px] leading-relaxed">${isEn ? (c.rescueEn || c.rescue) : (c.rescueZh || c.rescue)}</p>
                </div>
              </div>
            `;
          } else if (c.canonId === 'sanming' || c.canonId === 'yuanhai') {
            innerGrid = `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-black/35 rounded-lg border border-gray-800/60 space-y-1.5">
                  <span class="text-yellow-300 font-bold block">${isEn ? 'Core Axis & Legacy Trajectory:' : '命理骨相与终身归宿大势：'}</span>
                  <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (c.summaryEn || c.summary) : (c.summaryZh || c.summary)}</p>
                </div>
                <div class="p-3 bg-black/35 rounded-lg border border-gray-800/60 space-y-1.5">
                  <span class="text-amber-300 font-bold block">${isEn ? 'Canonical Scripture & Verse Oracle:' : '经文赋诗神断启示：'}</span>
                  <p class="text-amber-200/90 text-[11px] font-serif-sc leading-relaxed">“${isEn ? (c.verseEn || c.verseQuoteEn || c.verse || c.verseQuote) : (c.verseZh || c.verseQuoteZh || c.verse || c.verseQuote)}”</p>
                </div>
              </div>
            `;
          } else if (c.canonId === 'yuzhao') {
            innerGrid = `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                <div class="p-2.5 bg-black/35 rounded-lg border border-gray-800/60 space-y-1">
                  <span class="text-rose-300 font-bold block">${isEn ? 'Spouse Palace:' : '配偶宫照：'}</span>
                  <p class="text-gray-300 text-[10.5px] leading-relaxed">${isEn ? (c.spouseSummaryEn || c.spouseSummary) : (c.spouseSummaryZh || c.spouseSummary)}</p>
                </div>
                <div class="p-2.5 bg-black/35 rounded-lg border border-gray-800/60 space-y-1">
                  <span class="text-emerald-300 font-bold block">${isEn ? 'Children Palace:' : '子息宫照：'}</span>
                  <p class="text-gray-300 text-[10.5px] leading-relaxed">${isEn ? (c.childrenSummaryEn || c.childrenSummary) : (c.childrenSummaryZh || c.childrenSummary)}</p>
                </div>
                <div class="p-2.5 bg-black/35 rounded-lg border border-gray-800/60 space-y-1">
                  <span class="text-indigo-300 font-bold block">${isEn ? 'Ancestral Base:' : '父母祖业：'}</span>
                  <p class="text-gray-300 text-[10.5px] leading-relaxed">${isEn ? (c.parentsSummaryEn || c.parentsSummary) : (c.parentsSummaryZh || c.parentsSummary)}</p>
                </div>
              </div>
            `;
          } else if (c.canonId === 'lixuzhong') {
            innerGrid = `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-black/35 rounded-lg border border-gray-800/60 space-y-1.5">
                  <span class="text-teal-300 font-bold block">${isEn ? 'Three Primes (Rank, Destiny, Body):' : '三元论全息解构 (天元禄 · 地元命 · 人元身)：'}</span>
                  <p class="text-gray-300 text-[11px] leading-relaxed whitespace-pre-line font-mono">${isEn ? (c.threePrimesEn || c.threePrimes) : (c.threePrimesZh || c.threePrimes)}</p>
                </div>
                <div class="p-3 bg-black/35 rounded-lg border border-gray-800/60 space-y-1.5">
                  <span class="text-amber-300 font-bold block">${isEn ? 'Acoustic Geography & Macro Era:' : '音律地理方位与宏观AI时代周期：'}</span>
                  <div class="text-emerald-300 font-semibold mb-0.5">${isEn ? (c.idealGeographyEn || c.idealGeography) : (c.idealGeographyZh || c.idealGeography)}</div>
                  <p class="text-gray-300 text-[10.5px] leading-relaxed">${isEn ? (c.targetCitiesEn || c.targetCities) : (c.targetCitiesZh || c.targetCities)}</p>
                  <p class="text-teal-200 text-[10.5px] pt-1 border-t border-gray-800/60">${isEn ? (c.eraMacroTrendEn || c.eraMacroTrend) : (c.eraMacroTrendZh || c.eraMacroTrend)}</p>
                </div>
              </div>
            `;
          }

          card.innerHTML = `
            <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-800/60">
              <div class="flex items-center space-x-2">
                <span class="chinese-seal text-[10px] py-0">${isEn ? c.canonNameEn : c.canonNameZh}</span>
                <h4 class="text-sm sm:text-base font-bold text-amber-300 font-serif-sc flex items-center gap-1.5">
                  <span>${isEn ? (c.titleEn || c.title) : (c.titleZh || c.title)}</span>
                </h4>
              </div>
              <span class="text-[10px] px-2 py-0.5 rounded-full ${tagColor} font-mono">
                ${isEn ? (c.pivotNameEn || c.pivotName) : (c.pivotNameZh || c.pivotName)}
              </span>
            </div>

            <div class="p-2.5 bg-black/50 rounded-lg text-xs text-amber-200/90 font-serif-sc border-l-2 ${leftBorder} leading-relaxed">
              ${isEn ? (c.subtitleEn || c.subtitle) : (c.subtitleZh || c.subtitle)}
            </div>

            ${innerGrid}

            ${c.personaDepiction || c.personaDepictionEn ? `
            <div class="p-3 bg-black/45 rounded-lg border border-gray-800/80 text-xs space-y-2">
              <div>
                <span class="text-amber-300 font-bold block mb-0.5">👤 ${isEn ? 'Classical Personality & Persona Depiction:' : '本经深度个性肖像与气象刻画：'}</span>
                <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (c.personaDepictionEn || c.personaDepiction) : (c.personaDepictionZh || c.personaDepiction)}</p>
              </div>
              <div class="pt-1.5 border-t border-gray-800/60">
                <span class="text-blue-300 font-bold block mb-0.5">📈 ${isEn ? 'Destiny Trajectory & Lifelong Turning Points:' : '本经所指命运走向与人生关隘：'}</span>
                <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (c.destinyTrajectoryEn || c.destinyTrajectory) : (c.destinyTrajectoryZh || c.destinyTrajectory)}</p>
              </div>
              <div class="pt-1.5 border-t border-gray-800/60">
                <span class="text-emerald-300 font-bold block mb-0.5">⚡ ${isEn ? 'Core Actionable Maneuver & Strategy:' : '本经核心实战战术与破局手：'}</span>
                <p class="text-emerald-200 text-[11px] leading-relaxed">${isEn ? (c.actionableManeuverEn || c.actionableManeuver) : (c.actionableManeuverZh || c.actionableManeuver)}</p>
              </div>
            </div>` : ''}

            <div class="p-3 bg-black/40 rounded-lg border border-gray-800/60 text-xs space-y-1.5">
              <span class="text-amber-300 font-bold block">${isEn ? '🎯 20% High-Leverage Strategic Action Plan:' : '🎯 20% 核心抓手现代破局实操法门：'}</span>
              <p class="text-gray-200 leading-relaxed text-[11.5px]">${isEn ? (c.modernStrategyEn || c.modernStrategy) : (c.modernStrategyZh || c.modernStrategy)}</p>
              ${c.sculptingTypeZh ? `
              <div class="pt-1.5 border-t border-gray-800/60 flex flex-wrap items-center justify-between text-[11px] text-amber-400/90 font-mono">
                <span>【${isEn ? (c.sculptingTypeEn || c.sculptingType) : (c.sculptingTypeZh || c.sculptingType)}】</span>
                <span class="text-gray-400 font-sans">${isEn ? (c.sculptingAdviceEn || c.sculptingAdvice) : (c.sculptingAdviceZh || c.sculptingAdvice)}</span>
              </div>` : ''}
              ${(c.genderDiffZh || c.genderDiff) ? `
              <div class="pt-1.5 border-t border-gray-800/60 text-[11px] text-amber-300/90 leading-relaxed">
                <span class="font-bold text-amber-400">⚖️ ${isEn ? 'Gender Dynamics (Male vs. Female):' : '男女命差异 · 乾坤造化辨析：'}</span>
                ${isEn ? (c.genderDiffEn || c.genderDiff) : (c.genderDiffZh || c.genderDiff)}
              </div>` : ''}
            </div>
          `;
          paretoDetailsContainer.appendChild(card);
        });
      } else if (pc.fulcrum) {
        const fc = pc.fulcrum;
        const fulcrumCard = document.createElement('div');
        fulcrumCard.className = 'p-4 rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-black/40 to-black/60 shadow-xl space-y-3';
        fulcrumCard.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-amber-800/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal text-[10px] py-0">${isEn ? 'Shen Feng Tong Kao' : '神峰通考'}</span>
              <h4 class="text-sm sm:text-base font-bold text-amber-300 font-serif-sc flex items-center gap-1.5">
                <span>${isEn ? (fc.titleEn || fc.title) : (fc.titleZh || fc.title)}</span>
              </h4>
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
              ${isEn ? '20% Breakthrough Fulcrum' : '以病取药 · 绝地大成'}
            </span>
          </div>

          <div class="p-2.5 bg-black/50 rounded-lg text-xs text-amber-200/90 font-serif-sc border-l-2 border-amber-500 leading-relaxed">
            ${isEn ? (fc.subtitleEn || fc.subtitle) : (fc.subtitleZh || fc.subtitle)}
          </div>

          <div class="p-3 bg-amber-950/20 rounded-lg border border-amber-500/30 text-xs space-y-1.5">
            <span class="text-amber-300 font-bold block">${isEn ? '🎯 20% High-Leverage Modern Strategic Action Plan:' : '🎯 20% 核心抓手现代破局实操法门：'}</span>
            <p class="text-gray-200 leading-relaxed text-[11.5px]">${isEn ? (fc.modernStrategyEn || fc.modernStrategy) : (fc.modernStrategyZh || fc.modernStrategy)}</p>
          </div>
        `;
        paretoDetailsContainer.appendChild(fulcrumCard);
      }

      // 2. 💑 夫妻与婚姻深层全息透视 (Yu Zhao Ding Zhen Jing)
      if (pc.spouse) {
        const sp = pc.spouse;
        const spouseCard = document.createElement('div');
        spouseCard.className = 'p-4 rounded-xl border border-rose-900/50 bg-gradient-to-br from-rose-950/15 via-black/40 to-black/60 shadow-xl space-y-3';
        spouseCard.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-rose-900/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal text-[10px] py-0">${isEn ? 'Yu Zhao Ding Zhen' : '玉照定真经'}</span>
              <h4 class="text-sm sm:text-base font-bold text-rose-300 font-serif-sc flex items-center gap-1.5">
                <span>${isEn ? (sp.titleEn || sp.title) : (sp.titleZh || sp.title)}</span>
              </h4>
            </div>
            <div class="flex items-center gap-1.5 text-[10px] font-mono text-rose-300">
              <span class="px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/30">${isEn ? 'Day Branch: ' : '日支夫妻宫：'}${sp.palaceBranch}</span>
              <span class="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/30">${isEn ? (sp.spouseStarEn || sp.spouseStar) : (sp.spouseStarZh || sp.spouseStar)}</span>
            </div>
          </div>

          <div class="p-2.5 bg-black/50 rounded-lg text-xs text-rose-200/90 font-serif-sc border-l-2 border-rose-500 leading-relaxed">
            ${isEn ? (sp.subtitleEn || sp.subtitle) : (sp.subtitleZh || sp.subtitle)}
          </div>

          <!-- 4-Dimension Kinship Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-amber-300 font-bold block">⚡ 1. ${isEn ? 'Energy Scale & Elemental Aura:' : '能量等级与五行气象：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (sp.energyEn || sp.energy) : (sp.energyZh || sp.energy)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-rose-300 font-bold block">🧠 2. ${isEn ? 'Psychological Archetype & Character Profile:' : '心性原型与性格特征画像：'}</span>
              <div class="text-amber-200 font-semibold mb-1">【${isEn ? (sp.archetypeEn || sp.archetype) : (sp.archetypeZh || sp.archetype)}】</div>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (sp.personalityEn || sp.personality) : (sp.personalityZh || sp.personality)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-purple-300 font-bold block">✨ 3. ${isEn ? 'Likely Demeanour, Aura & Aesthetic Presence:' : '有可能的气质仪态与风采容貌：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (sp.demeanourEn || sp.demeanour) : (sp.demeanourZh || sp.demeanour)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-emerald-300 font-bold block">🤝 4. ${isEn ? 'Relationship Dynamics & Interaction Mechanics:' : '相处关系与互动机制：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (sp.relationshipEn || sp.relationship) : (sp.relationshipZh || sp.relationship)}</p>
              <p class="text-rose-300 text-[10.5px] pt-1 border-t border-gray-800/60"><b>${isEn ? 'Friction Reefs: ' : '潜在暗礁：'}</b>${isEn ? (sp.clashRiskEn || sp.clashRisk) : (sp.clashRiskZh || sp.clashRisk)}</p>
            </div>
          </div>

          <div class="p-3 bg-rose-950/20 rounded-lg border border-rose-500/30 text-xs space-y-1.5">
            <span class="text-emerald-300 font-bold block">${isEn ? '💍 Matrimonial Harmony & Daily Cultivation Guide:' : '💍 婚姻护持秘诀与日常相处法则：'}</span>
            <p class="text-gray-200 text-[11.5px] leading-relaxed">${isEn ? (sp.adviceEn || sp.advice) : (sp.adviceZh || sp.advice)}</p>
            ${sp.genderDiffZh || sp.genderDiff ? `
            <div class="pt-1.5 border-t border-rose-900/40 text-[11px] text-rose-300/90 leading-relaxed">
              <span class="font-bold text-rose-400">⚖️ ${isEn ? 'Gender Dynamics (Male vs. Female):' : '男女命差异 · 乾坤造化辨析：'}</span>
              ${isEn ? (sp.genderDiffEn || sp.genderDiff) : (sp.genderDiffZh || sp.genderDiff)}
            </div>` : ''}
          </div>
        `;
        paretoDetailsContainer.appendChild(spouseCard);
      }

      // 3. 👶 子女与后嗣才干缘法 (Yu Zhao Ding Zhen Jing)
      if (pc.children) {
        const ch = pc.children;
        const childrenCard = document.createElement('div');
        childrenCard.className = 'p-4 rounded-xl border border-emerald-900/50 bg-gradient-to-br from-emerald-950/15 via-black/40 to-black/60 shadow-xl space-y-3';
        childrenCard.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-emerald-900/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal text-[10px] py-0">${isEn ? 'Yu Zhao Ding Zhen' : '玉照定真经'}</span>
              <h4 class="text-sm sm:text-base font-bold text-emerald-300 font-serif-sc flex items-center gap-1.5">
                <span>${isEn ? (ch.titleEn || ch.title) : (ch.titleZh || ch.title)}</span>
              </h4>
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
              ${isEn ? 'Hour Pillar: ' : '时宿子女宫：'}${ch.hourPillarText}
            </span>
          </div>

          <div class="p-2.5 bg-black/50 rounded-lg text-xs text-emerald-200/90 font-serif-sc border-l-2 border-emerald-500 leading-relaxed">
            ${isEn ? (ch.subtitleEn || ch.subtitle) : (ch.subtitleZh || ch.subtitle)}
          </div>

          <!-- 4-Dimension Kinship Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-amber-300 font-bold block">⚡ 1. ${isEn ? 'Energy Scale & Innate Vitality:' : '能量等级与五行气象：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (ch.energyEn || ch.energy) : (ch.energyZh || ch.energy)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-emerald-300 font-bold block">🧠 2. ${isEn ? 'Character Archetype & Frontier Talent:' : '心性原型与天赋赛道：'}</span>
              <div class="text-amber-200 font-semibold mb-1">【${isEn ? (ch.archetypeEn || ch.archetype) : (ch.archetypeZh || ch.archetype)}】</div>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (ch.personalityEn || ch.personality) : (ch.personalityZh || ch.personality)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-purple-300 font-bold block">✨ 3. ${isEn ? 'Likely Demeanour, Intellectual Presence & Aura:' : '有可能的气质仪态与风度神采：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (ch.demeanourEn || ch.demeanour) : (ch.demeanourZh || ch.demeanour)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-blue-300 font-bold block">🤝 4. ${isEn ? 'Parent-Child Dynamics & Mentorship Guide:' : '相处关系与亲子沟通互动密码：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (ch.relationshipEn || ch.relationship) : (ch.relationshipZh || ch.relationship)}</p>
              <p class="text-emerald-200 text-[10.5px] pt-1 border-t border-gray-800/60"><b>${isEn ? 'Mentorship Key: ' : '沟通避坑：'}</b>${isEn ? (ch.guideEn || ch.guide) : (ch.guideZh || ch.guide)}</p>
            </div>
          </div>

          ${ch.genderDiffZh || ch.genderDiff ? `
          <div class="p-3 bg-emerald-950/20 rounded-lg border border-emerald-500/30 text-xs space-y-1">
            <span class="font-bold text-emerald-400">⚖️ ${isEn ? 'Gender Dynamics (Male vs. Female):' : '男女命差异 · 乾坤造化辨析：'}</span>
            <p class="text-gray-200 text-[11px] leading-relaxed">${isEn ? (ch.genderDiffEn || ch.genderDiff) : (ch.genderDiffZh || ch.genderDiff)}</p>
          </div>` : ''}
        `;
        paretoDetailsContainer.appendChild(childrenCard);
      }

      // 4. 🏡 父母与家族祖荫传承 (Yu Zhao Ding Zhen Jing)
      if (pc.parents) {
        const pa = pc.parents;
        const parentsCard = document.createElement('div');
        parentsCard.className = 'p-4 rounded-xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/15 via-black/40 to-black/60 shadow-xl space-y-3';
        parentsCard.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-indigo-900/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal text-[10px] py-0">${isEn ? 'Yu Zhao Ding Zhen' : '玉照定真经'}</span>
              <h4 class="text-sm sm:text-base font-bold text-indigo-300 font-serif-sc flex items-center gap-1.5">
                <span>${isEn ? (pa.titleEn || pa.title) : (pa.titleZh || pa.title)}</span>
              </h4>
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
              ${isEn ? (pa.typeEn || pa.type) : (pa.typeZh || pa.type)}
            </span>
          </div>

          <div class="p-2.5 bg-black/50 rounded-lg text-xs text-indigo-200/90 font-serif-sc border-l-2 border-indigo-500 leading-relaxed">
            ${isEn ? (pa.subtitleEn || pa.subtitle) : (pa.subtitleZh || pa.subtitle)}
          </div>

          <!-- 4-Dimension Kinship Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-amber-300 font-bold block">⚡ 1. ${isEn ? 'Energy Scale & Ancestral Foundation:' : '能量等级与祖业根基底色：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (pa.energyEn || pa.energy) : (pa.energyZh || pa.energy)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-indigo-300 font-bold block">🧠 2. ${isEn ? 'Parental Character Archetype & Mindset:' : '父母心性原型与思维模式画像：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (pa.personalityEn || pa.personality) : (pa.personalityZh || pa.personality)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-purple-300 font-bold block">✨ 3. ${isEn ? 'Family Demeanour & Upbringing Heritage:' : '家风气质风度与言传身教熏陶：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (pa.demeanourEn || pa.demeanour) : (pa.demeanourZh || pa.demeanour)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-emerald-300 font-bold block">🤝 4. ${isEn ? 'Intergenerational Dynamics & Filial Balance:' : '相处互动机制与孝道自主平衡：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (pa.relationshipEn || pa.relationship) : (pa.relationshipZh || pa.relationship)}</p>
              <p class="text-amber-200 text-[10.5px] pt-1 border-t border-gray-800/60"><b>${isEn ? 'Resource vs Debt: ' : '隐形资源vs约束：'}</b>${isEn ? (pa.debtOrBlessingEn || pa.debtOrBlessing) : (pa.debtOrBlessingZh || pa.debtOrBlessing)}</p>
            </div>
          </div>

          <div class="p-3 bg-indigo-950/20 rounded-lg border border-indigo-500/30 text-xs space-y-1.5">
            <span class="text-emerald-300 font-bold block">${isEn ? '🌿 Harmonizing Filial Devotion with Sovereign Autonomy:' : '🌿 孝道奉养与自主人生平衡法则：'}</span>
            <p class="text-gray-200 text-[11.5px] leading-relaxed">${isEn ? (pa.filialAdviceEn || pa.filialAdvice) : (pa.filialAdviceZh || pa.filialAdvice)}</p>
            ${pa.genderDiffZh || pa.genderDiff ? `
            <div class="pt-1.5 border-t border-indigo-900/40 text-[11px] text-indigo-300/90 leading-relaxed">
              <span class="font-bold text-indigo-400">⚖️ ${isEn ? 'Gender Dynamics (Male vs. Female):' : '男女命差异 · 乾坤造化辨析：'}</span>
              ${isEn ? (pa.genderDiffEn || pa.genderDiff) : (pa.genderDiffZh || pa.genderDiff)}
            </div>` : ''}
          </div>
        `;
        paretoDetailsContainer.appendChild(parentsCard);
      }

      // 5. 🌍 人与社会环境/时代周期的综合交互分析 (Li Xu Zhong Ming Shu)
      if (pc.environment) {
        const env = pc.environment;
        const envCard = document.createElement('div');
        envCard.className = 'p-4 rounded-xl border border-teal-900/50 bg-gradient-to-br from-teal-950/15 via-black/40 to-black/60 shadow-xl space-y-3';
        envCard.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-teal-900/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal text-[10px] py-0">${isEn ? 'Li Xu Zhong' : '李虚中命书'}</span>
              <h4 class="text-sm sm:text-base font-bold text-teal-300 font-serif-sc flex items-center gap-1.5">
                <span>${isEn ? (env.titleEn || env.title) : (env.titleZh || env.title)}</span>
              </h4>
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-mono">
              ${isEn ? 'Three Primes & Spatial Resonance' : '三元禄命 · 音律场能'}
            </span>
          </div>

          <div class="p-2.5 bg-black/50 rounded-lg text-xs text-teal-200/90 font-serif-sc border-l-2 border-teal-500 leading-relaxed">
            ${isEn ? (env.subtitleEn || env.subtitle) : (env.subtitleZh || env.subtitle)}
          </div>

          <div class="p-3 bg-black/35 rounded-lg border border-teal-800/40 text-xs space-y-1.5">
            <span class="text-teal-300 font-bold block">${isEn ? 'Three Primes Integration (Heavenly Rank, Earthly Destiny, Human Body):' : '三元论全息解构 (天元为禄 · 地元为命 · 人元为身)：'}</span>
            <p class="text-gray-300 text-[11px] leading-relaxed whitespace-pre-line font-mono">${isEn ? (env.threePrimesEn || env.threePrimes) : (env.threePrimesZh || env.threePrimes)}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-amber-300 font-bold block">${isEn ? 'Optimal Geographical Direction & Key Metropolises:' : '最佳地理发展方位与核心城市群：'}</span>
              <div class="text-emerald-300 font-semibold mb-0.5">${isEn ? (env.idealGeographyEn || env.idealGeography) : (env.idealGeographyZh || env.idealGeography)}</div>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (env.targetCitiesEn || env.targetCities) : (env.targetCitiesZh || env.targetCities)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-cyan-300 font-bold block">${isEn ? 'Workspace & Residence Physical Feng Shui Energy Field:' : '办公与居住物理空间场能调控：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (env.workspaceEnergyEn || env.workspaceEnergy) : (env.workspaceEnergyZh || env.workspaceEnergy)}</p>
            </div>
          </div>

          <div class="p-3 bg-teal-950/20 rounded-lg border border-teal-500/30 text-xs space-y-1.5">
            <span class="text-amber-300 font-bold block">${isEn ? '🚀 Macro Era Cycle Synchronization (AI / Digital Paradigm):' : '🚀 宏观时代周期交互（顺应AI与数字化变革红利）：'}</span>
            <p class="text-gray-200 text-[11.5px] leading-relaxed">${isEn ? (env.eraMacroTrendEn || env.eraMacroTrend) : (env.eraMacroTrendZh || env.eraMacroTrend)}</p>
            ${env.genderDiffZh || env.genderDiff ? `
            <div class="pt-1.5 border-t border-teal-900/40 text-[11px] text-teal-300/90 leading-relaxed">
              <span class="font-bold text-teal-400">⚖️ ${isEn ? 'Gender Dynamics (Male vs. Female):' : '男女命差异 · 乾坤造化辨析：'}</span>
              ${isEn ? (env.genderDiffEn || env.genderDiff) : (env.genderDiffZh || env.genderDiff)}
            </div>` : ''}
          </div>
        `;
        paretoDetailsContainer.appendChild(envCard);
      }
    }

    // 6. Day Master Defects & Vulnerabilities Rendering
    const defectsContainer = document.getElementById('defectsContainer');
    if (defectsContainer && pData.defects && pData.defects.cards) {
      defectsContainer.innerHTML = '';
      pData.defects.cards.forEach((card) => {
        const cardEl = document.createElement('div');
        const isRemedies = card.id === 'remedies';
        cardEl.className = `p-4 rounded-xl border ${card.borderColor} bg-black/35 shadow-lg flex flex-col justify-between space-y-3 hover:border-opacity-100 transition ${isRemedies ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-emerald-950/20 to-black/40 border-emerald-700/50' : ''}`;

        const pointsHtml = card.points.map(pt => `
          <div class="p-2.5 bg-black/40 rounded-lg border border-gray-800/80 space-y-1">
            <div class="flex items-center space-x-1.5 font-bold text-gray-200">
              <span class="w-1.5 h-1.5 rounded-full ${isRemedies ? 'bg-emerald-400' : 'bg-rose-400'} inline-block"></span>
              <span class="${isRemedies ? 'text-emerald-300' : 'text-amber-300'}">${pt.label}</span>
            </div>
            <p class="text-gray-300 text-[11px] leading-relaxed pl-3">${pt.text}</p>
          </div>
        `).join('');

        cardEl.innerHTML = `
          <div class="space-y-2.5">
            <div class="flex items-center justify-between pb-2 border-b border-gray-800/80">
              <div class="flex items-center space-x-2">
                <span class="text-base">${card.icon}</span>
                <h4 class="text-sm font-bold font-serif-sc ${isRemedies ? 'text-emerald-300' : 'text-rose-300'}">
                  ${card.title}
                </h4>
              </div>
              <span class="text-[10px] px-2 py-0.5 rounded-full border ${card.tagColor} font-mono">
                ${card.subtitle.split(' · ')[0]}
              </span>
            </div>

            <div class="space-y-2">
              ${pointsHtml}
            </div>
          </div>

          <div class="pt-2 border-t border-gray-800/60 mt-2">
            <div class="p-2 bg-black/50 rounded-lg text-[11px] text-gray-400 leading-relaxed font-serif-sc border-l-2 ${isRemedies ? 'border-emerald-500' : 'border-rose-500'}">
              ${card.rootCause}
            </div>
          </div>
        `;
        defectsContainer.appendChild(cardEl);
      });
    }

    // 7. Mental Internal Friction Detection & Practical Solutions
    const mfSection = document.getElementById('mentalFrictionSection');
    if (mfSection && pData.mentalFriction) {
      const mf = pData.mentalFriction;
      if (mf.detected) {
        const solutionsHtml = mf.solutions.map(sol => `
          <div class="p-3.5 rounded-xl border border-gray-800/80 bg-black/40 space-y-2 hover:border-gray-700 transition">
            <div class="flex items-center space-x-2 pb-1 border-b border-gray-800/80">
              <span class="text-base">${sol.icon}</span>
              <div>
                <span class="font-bold text-gray-200 text-xs">${sol.name}</span>
                <span class="text-[10.5px] text-amber-300/90 block">${sol.theme}</span>
              </div>
            </div>
            <div class="space-y-1.5 pt-1">
              ${sol.steps.map(st => `
                <div class="p-2 rounded-lg bg-black/50 border border-gray-800/60 text-[11px] text-gray-300 leading-relaxed">
                  ${st}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('');

        mfSection.innerHTML = `
          <div class="p-4 rounded-xl border border-rose-800/60 bg-gradient-to-br from-rose-950/25 via-black/40 to-black/50 space-y-3 shadow-xl">
            <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-800/80">
              <div class="flex items-center space-x-2">
                <span class="text-lg">🌪️</span>
                <h4 class="text-sm font-bold font-serif-sc text-rose-300 flex items-center gap-2">
                  <span>${isEn ? 'Mental Rumination Diagnostic & Battle-Tested Practical Antidotes' : '精神内耗专项检测与实战彻底改善方案'}</span>
                </h4>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-xs px-2.5 py-0.5 rounded-full border ${mf.levelBadge} font-bold font-mono">
                  ${isEn ? 'Rumination Index: ' : '内耗指数：'}${mf.score}% · ${mf.level}
                </span>
              </div>
            </div>

            <div class="p-3 rounded-lg bg-rose-950/20 border border-rose-900/40 text-xs text-rose-200 leading-relaxed font-serif-sc">
              <b>${isEn ? '【Core Mental Friction Root Cause】' : '【本命核心内耗根源剖析】'}</b>${mf.primaryRoot}
              <div class="text-[11px] text-gray-400 mt-1">
                <b>${isEn ? 'Natal BaZi Triggers: ' : '八字触发特征：'}</b>${mf.triggers.join('；')}
              </div>
            </div>

            <!-- 4 Actionable Solutions -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              ${solutionsHtml}
            </div>
          </div>
        `;
        mfSection.style.display = 'block';
      } else {
        mfSection.innerHTML = '';
        mfSection.style.display = 'none';
      }
    }

    // 8. Day Master Remedy & Balancing Guide Rendering
    const remedyContainer = document.getElementById('remedyContainer');
    const tabTailoredBtn = document.getElementById('remedyTabTailored');
    const tabComparisonBtn = document.getElementById('remedyTabComparison');

    if (remedyContainer && pData.remedyGuide) {
      const guide = pData.remedyGuide;
      let activeTab = 'tailored'; // 'tailored' or 'comparison'

      const renderRemedyView = () => {
        if (activeTab === 'tailored') {
          const t = guide.tailored;
          const isWeakType = t.type === 'weak';
          const isStrongType = t.type === 'strong';
          const themeColor = isWeakType ? 'emerald' : isStrongType ? 'amber' : 'blue';

          const elementCardsHtml = t.elementRemedy.details.map(d => `
            <div class="p-3 bg-black/40 rounded-xl border border-gray-800/80 space-y-1">
              <span class="font-bold text-${themeColor}-300 block text-xs">${d.name}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${d.content}</p>
            </div>
          `).join('');

          const mentalCardsHtml = t.mentalRemedy.map(m => `
            <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800/60 space-y-1">
              <span class="font-bold text-amber-300 block text-xs">【${m.tag}】</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${m.text}</p>
            </div>
          `).join('');

          const habitCardsHtml = t.habitRemedy.map(h => `
            <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800/60 space-y-1">
              <span class="font-bold text-emerald-300 block text-xs">【${h.tag}】</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${h.text}</p>
            </div>
          `).join('');

          const careerCardsHtml = t.careerRemedy.map(c => `
            <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800/60 space-y-1">
              <span class="font-bold text-purple-300 block text-xs">【${c.tag}】</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${c.text}</p>
            </div>
          `).join('');

          remedyContainer.innerHTML = `
            <!-- Tailored Header Banner -->
            <div class="p-4 rounded-xl border border-${themeColor}-800/60 bg-gradient-to-r from-${themeColor}-950/30 to-black/50 space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 class="text-sm font-bold font-serif-sc text-${themeColor}-300 flex items-center gap-2">
                    <span>${t.title}</span>
                  </h4>
                  <p class="text-[11px] text-gray-400 mt-0.5">${t.subtitle}</p>
                </div>
                <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-${themeColor}-500/20 text-${themeColor}-300 border border-${themeColor}-500/30">
                  ${t.badge}
                </span>
              </div>
              <p class="text-xs text-gray-300 leading-relaxed font-serif-sc pt-1 border-t border-gray-800/80">
                ${t.philosophy}
              </p>
            </div>

            <!-- 4 Actionable Dimension Grids -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <!-- Dimension 1: 五行生克理气补法 -->
              <div class="p-3.5 rounded-xl border border-emerald-900/50 bg-black/30 space-y-2.5">
                <div class="flex items-center space-x-2 text-xs font-bold text-emerald-300 pb-1.5 border-b border-gray-800">
                  <span>${isEn ? '🌌 I. Five Elements Regulatory Balancing' : '🌌 一、五行生克理气开运法则'}</span>
                </div>
                <div class="p-2 rounded bg-emerald-950/20 border border-emerald-800/40 text-[11px] text-emerald-200">
                  <b>${isEn ? '【Regulatory Core】' : '【理气核心】'}</b>${t.elementRemedy.mainAction}
                </div>
                <div class="space-y-2">
                  ${elementCardsHtml}
                </div>
              </div>

              <!-- Dimension 2: 心智模型与能量护城河 -->
              <div class="p-3.5 rounded-xl border border-amber-900/50 bg-black/30 space-y-2.5">
                <div class="flex items-center space-x-2 text-xs font-bold text-amber-300 pb-1.5 border-b border-gray-800">
                  <span>${isEn ? '🧠 II. Cognitive Models & Mindset Moats' : '🧠 二、心智模型与精神蓄能法则'}</span>
                </div>
                <div class="space-y-2">
                  ${mentalCardsHtml}
                </div>
              </div>

              <!-- Dimension 3: 日常起居与能量滋养 -->
              <div class="p-3.5 rounded-xl border border-cyan-900/50 bg-black/30 space-y-2.5">
                <div class="flex items-center space-x-2 text-xs font-bold text-cyan-300 pb-1.5 border-b border-gray-800">
                  <span>${isEn ? '🌿 III. Daily Habits & Energy Nourishment' : '🌿 三、日常作息、运动与能量摄入'}</span>
                </div>
                <div class="space-y-2">
                  ${habitCardsHtml}
                </div>
              </div>

              <!-- Dimension 4: 职场跑道与商业避坑策略 -->
              <div class="p-3.5 rounded-xl border border-purple-900/50 bg-black/30 space-y-2.5">
                <div class="flex items-center space-x-2 text-xs font-bold text-purple-300 pb-1.5 border-b border-gray-800">
                  <span>${isEn ? '💼 IV. Career Niches & Financial Firewalls' : '💼 四、职场生态位与财富安全防火墙'}</span>
                </div>
                <div class="space-y-2">
                  ${careerCardsHtml}
                </div>
              </div>
            </div>

            <!-- Dimension 5: 精神消耗与身体消耗专项抢救补充 (Mental & Physical Energy Restoration) -->
            ${t.energyRecharge ? `
              <div class="p-4 rounded-xl border border-rose-800/50 bg-gradient-to-br from-rose-950/20 via-black/40 to-black/50 space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-800">
                  <div class="flex items-center space-x-2">
                    <span class="text-base">⚡</span>
                    <h4 class="text-sm font-bold font-serif-sc text-rose-300">
                      ${isEn ? 'V. Emergency Energy Recharge Protocol (Mental & Physical Restoration)' : '五、气血与心神双耗抢救回血指南 (精神消耗 vs 身体消耗双重修复)'}
                    </h4>
                  </div>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono">
                    ${isEn ? 'Emergency Recharge · Restore Vital Essence' : '急救补能 · 固本培元'}
                  </span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                  <!-- A. 精神脑力消耗补充 -->
                  <div class="p-3.5 bg-black/40 rounded-xl border border-rose-900/40 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-rose-300 text-xs">${t.energyRecharge.mental.title}</span>
                      <span class="text-[10px] text-gray-400">${isEn ? 'Mental Reset' : '心神修复'}</span>
                    </div>
                    <p class="text-[11px] text-gray-400 leading-relaxed font-serif-sc">
                      <b>${isEn ? '【Mental Drain Cause】' : '【耗神根因】'}</b>${t.energyRecharge.mental.causes}
                    </p>
                    <div class="space-y-1.5 pt-1">
                      ${t.energyRecharge.mental.steps.map(s => `
                        <div class="p-2 bg-black/50 rounded-lg border border-gray-800/80 space-y-0.5">
                          <span class="font-semibold text-amber-300 text-[11px] block">✦ ${s.name}</span>
                          <p class="text-gray-300 text-[10.5px] leading-relaxed pl-2.5">${s.detail}</p>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- B. 身体肉体消耗补充 -->
                  <div class="p-3.5 bg-black/40 rounded-xl border border-cyan-900/40 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-cyan-300 text-xs">${t.energyRecharge.physical.title}</span>
                      <span class="text-[10px] text-gray-400">${isEn ? 'Physical Recovery' : '肉体回血'}</span>
                    </div>
                    <p class="text-[11px] text-gray-400 leading-relaxed font-serif-sc">
                      <b>${isEn ? '【Physical Drain Cause】' : '【耗体根因】'}</b>${t.energyRecharge.physical.causes}
                    </p>
                    <div class="space-y-1.5 pt-1">
                      ${t.energyRecharge.physical.steps.map(s => `
                        <div class="p-2 bg-black/50 rounded-lg border border-gray-800/80 space-y-0.5">
                          <span class="font-semibold text-emerald-300 text-[11px] block">✦ ${s.name}</span>
                          <p class="text-gray-300 text-[10.5px] leading-relaxed pl-2.5">${s.detail}</p>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>
            ` : ''}
          `;
        } else {
          // Comparison View
          const c = guide.comparisonGuide;

          const weakHtml = c.weakRules.map(r => `
            <div class="p-3 bg-black/40 rounded-xl border border-emerald-900/40 space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-emerald-300 text-xs">${r.num}. ${r.name}</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-300 font-mono">${isEn ? 'Nourishing' : '生身培补'}</span>
              </div>
              <div class="text-[11px] text-amber-200/90 font-medium">${isEn ? '【Core】' : '【核心】'}${r.theme}</div>
              <p class="text-gray-300 text-[11px] leading-relaxed">${r.detail}</p>
            </div>
          `).join('');

          const strongHtml = c.strongRules.map(r => `
            <div class="p-3 bg-black/40 rounded-xl border border-amber-900/40 space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-amber-300 text-xs">${r.num}. ${r.name}</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300 font-mono">${isEn ? 'Channeling' : '制化疏泄'}</span>
              </div>
              <div class="text-[11px] text-cyan-200/90 font-medium">${isEn ? '【Core】' : '【核心】'}${r.theme}</div>
              <p class="text-gray-300 text-[11px] leading-relaxed">${r.detail}</p>
            </div>
          `).join('');

          remedyContainer.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <!-- Left Column: 身弱六大立身开运总决 -->
              <div class="p-4 rounded-xl border border-emerald-800/60 bg-gradient-to-br from-emerald-950/20 to-black/40 space-y-3">
                <div class="flex items-center justify-between pb-2 border-b border-gray-800">
                  <div class="flex items-center space-x-2">
                    <span class="text-base">🌱</span>
                    <h4 class="text-sm font-bold font-serif-sc text-emerald-300">
                      ${isEn ? 'Six Core Mastery Rules for Weak Day Master (Nourish & Support)' : '身弱六大立身开运总决 (宜生宜扶)'}
                    </h4>
                  </div>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ${isEn ? 'Preserve Essence · Win via Leverage' : '守弱蓄元 · 借势致胜'}
                  </span>
                </div>
                <p class="text-[11px] text-gray-300 leading-relaxed font-serif-sc">
                  ${isEn ? '\"When vital energy is delicate, avoid direct friction and exhaustion; rely on the mother seal for replenishment, overcoming hardness with gentle persistence.\"' : '“元气亏虚，不耐克泄耗；守母慈护，以柔胜刚强”。身弱不是缺陷，而是独特的生存禀赋，顺势生扶即可成就非凡功业。'}
                </p>
                <div class="space-y-2.5">
                  ${weakHtml}
                </div>
              </div>

              <!-- Right Column: 身强六大制化疏导总决 -->
              <div class="p-4 rounded-xl border border-amber-800/60 bg-gradient-to-br from-amber-950/20 to-black/40 space-y-3">
                <div class="flex items-center justify-between pb-2 border-b border-gray-800">
                  <div class="flex items-center space-x-2">
                    <span class="text-base">🔥</span>
                    <h4 class="text-sm font-bold font-serif-sc text-amber-300">
                      ${isEn ? 'Six Core Mastery Rules for Strong Day Master (Channel & Restrain)' : '身强六大制化疏导总决 (宜泄宜克)'}
                    </h4>
                  </div>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    ${isEn ? 'Channel Talent · Share Profits' : '疏泄秀气 · 利出三分'}
                  </span>
                </div>
                <p class="text-[11px] text-gray-300 leading-relaxed font-serif-sc">
                  ${isEn ? '\"When energy is at its zenith, it must be channeled; a bow pulled to full tension must not be strung tighter. Share profits, express talent, and respect rules for enduring peace.\"' : '“强极宜泄，旺极宜制；满弦之弓，不可再绷”。身旺之人如烈火狂潮，必须利出三分、以才华泄秀、敬畏规矩，方得圆融善终。'}
                </p>
                <div class="space-y-2.5">
                  ${strongHtml}
                </div>
              </div>
            </div>
          `;
        }
      };

      // Tab click events
      if (tabTailoredBtn && tabComparisonBtn) {
        tabTailoredBtn.onclick = () => {
          activeTab = 'tailored';
          tabTailoredBtn.className = 'px-3 py-1 rounded font-medium transition active bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          tabComparisonBtn.className = 'px-3 py-1 rounded font-medium transition text-gray-400 hover:text-gray-200';
          renderRemedyView();
        };

        tabComparisonBtn.onclick = () => {
          activeTab = 'comparison';
          tabComparisonBtn.className = 'px-3 py-1 rounded font-medium transition active bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
          tabTailoredBtn.className = 'px-3 py-1 rounded font-medium transition text-gray-400 hover:text-gray-200';
          renderRemedyView();
        };
      }

      // Initial render
      renderRemedyView();
    }

    currentPortraitData = pData;

    // Render Dedicated Grand Strategy View
    renderStrategyView(pData, res, isEn);

    // Render Dedicated Mental Friction & Zen-Dao Transcendence View
    renderFrictionView(pData, res, isEn);
  }

  // 👑 Dedicated Grand Strategy & Kinship Hologram View Renderer (全新独立大相与破局战役战略视图)
  function renderStrategyView(pData, res, isEn) {
    const container = document.getElementById('strategyContentContainer');
    if (!container) return;
    if (!pData || !pData.paretoCore) {
      container.innerHTML = `
        <div class="p-8 text-center text-gray-400">
          <span class="text-3xl block mb-2">👑</span>
          <p>${isEn ? 'Please calculate a natal chart to reveal the Grand Strategy & Kinship Hologram.' : '请先在主盘完成排盘，以生成全新独立大相与破局战役战略全息图谱。'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    const pc = pData.paretoCore;

    // 1. 👑 第一核心主导格局 20% 统帅枢纽横幅 (Dominant Pattern 20/80 Fulcrum Banner)
    if (pc.primaryPatternNameZh || pc.primaryPatternName) {
      const patName = isEn ? (pc.primaryPatternName || pc.primaryPatternNameEn) : (pc.primaryPatternNameZh || pc.primaryPatternName);
      const patDesc = isEn ? (pc.primaryPatternDescEn || pc.primaryPatternDesc) : (pc.primaryPatternDescZh || pc.primaryPatternDesc);
      const banner = document.createElement('div');
      banner.className = 'p-5 rounded-2xl bg-gradient-to-r from-amber-950/60 via-amber-900/30 to-black/70 border-2 border-amber-500/70 shadow-2xl space-y-2.5';
      banner.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center space-x-2.5">
            <span class="chinese-seal text-xs py-0.5">${isEn ? 'PARETO 20% FULCRUM' : '👑 帕累托 20% 统帅枢纽'}</span>
            <h3 class="text-base sm:text-xl font-bold font-serif-sc text-amber-300">
              ${isEn ? `Primary Dominant Pattern: ${patName} (${pc.primaryPatternWeightPct}%)` : `第一核心主导格局：${patName}（能量占比：${pc.primaryPatternWeightPct}%）`}
            </h3>
          </div>
          <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 font-mono">
            ${isEn ? 'Governs 80% Destiny' : '八经融通 · 统领全盘80%命途大纲'}
          </span>
        </div>
        <p class="text-xs sm:text-sm text-gray-200 leading-relaxed font-serif-sc">
          ${patDesc}
        </p>
      `;
      container.appendChild(banner);
    }

    // 2. 👑 综合全息画像 (Grand Picture Holistic Masterpiece Card)
    if (pc.grandPicture) {
      const gp = pc.grandPicture;
      const grandCard = document.createElement('div');
      grandCard.className = 'p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-amber-950/40 via-black/85 to-stone-950/90 border-2 border-amber-500/70 shadow-2xl space-y-6';

      const highlights = (isEn ? (gp.highlightsEn || gp.highlights) : (gp.highlightsZh || gp.highlights)) || [];
      const highlightsHtml = highlights.map(h => `
        <span class="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 font-mono">
          ${h}
        </span>
      `).join('');

      const rulesList = (isEn ? (gp.rulesEn || gp.rules) : (gp.rulesZh || gp.rules)) || [];
      const rulesCardsHtml = rulesList.map(r => `
        <div class="p-3.5 bg-black/50 rounded-xl border border-amber-500/30 space-y-1.5 flex flex-col justify-between">
          <span class="text-xs sm:text-sm font-bold text-amber-300 font-serif-sc">${r.label}</span>
          <p class="text-xs text-gray-300 leading-relaxed">${r.desc}</p>
        </div>
      `).join('');

      grandCard.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-amber-500/40">
          <div class="flex items-center space-x-2.5">
            <span class="chinese-seal text-xs py-0.5">${isEn ? 'GRAND PICTURE' : '👑 综合全息画像'}</span>
            <h3 class="text-lg sm:text-2xl font-bold font-serif-sc text-amber-300">
              ${isEn ? (gp.titleEn || gp.title) : (gp.titleZh || gp.title)}
            </h3>
          </div>
          <div class="flex items-center gap-1.5 flex-wrap">
            ${highlightsHtml}
          </div>
        </div>

        <div class="p-3.5 bg-amber-950/20 rounded-xl border-l-4 border-amber-500 text-xs sm:text-sm text-amber-200/90 font-serif-sc leading-relaxed">
          ${isEn ? (gp.subtitleEn || gp.subtitle) : (gp.subtitleZh || gp.subtitle)}
        </div>

        <!-- 1. 命盘大局总相与生命大纲 -->
        <div class="p-4 rounded-xl bg-black/45 border border-amber-500/30 space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-2 font-serif-sc">
              <span>🏛️</span>
              <span>${isEn ? '1. Grand Archetype & Sovereign Life Blueprint' : '一、命盘大局总相与生命大纲'}</span>
            </h4>
            <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
              ${isEn ? 'Day Master & Sovereign Mandate' : '元神气象 · 格局司权'}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">
            ${isEn ? (gp.thesisEn || gp.thesis) : (gp.thesisZh || gp.thesis)}
          </p>
        </div>

        <!-- 2. 生杀破局与战略胜负手 -->
        <div class="p-4 rounded-xl bg-black/45 border border-rose-900/40 space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="text-xs sm:text-sm font-bold text-rose-300 flex items-center gap-2 font-serif-sc">
              <span>⚔️</span>
              <span>${isEn ? '2. Strategic Breakthrough Campaign & 20% Lever' : '二、生杀破局与战略胜负手 (20% 关键抓手)'}</span>
            </h4>
            <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono">
              ${isEn ? 'Disease & Medicine Alchemy' : '以病取药 · 相神救应'}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">
            ${isEn ? (gp.campaignEn || gp.campaign) : (gp.campaignZh || gp.campaign)}
          </p>
        </div>

        <!-- 3. 六亲后方与家庭压舱石 -->
        <div class="p-4 rounded-xl bg-black/45 border border-emerald-900/40 space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="text-xs sm:text-sm font-bold text-emerald-300 flex items-center gap-2 font-serif-sc">
              <span>🛡️</span>
              <span>${isEn ? '3. Domestic Sanctuary & Kinship Ballast' : '三、六亲后方与家庭压舱石'}</span>
            </h4>
            <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
              ${isEn ? 'Spousal Breakwater & Offspring Legacy' : '配偶防波堤 · 后嗣引秀'}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">
            ${isEn ? (gp.kinshipEn || gp.kinship) : (gp.kinshipZh || gp.kinship)}
          </p>
        </div>

        <!-- 4. 时代跃迁与宏观时空场能共振 -->
        <div class="p-4 rounded-xl bg-black/45 border border-teal-900/40 space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="text-xs sm:text-sm font-bold text-teal-300 flex items-center gap-2 font-serif-sc">
              <span>🚀</span>
              <span>${isEn ? '4. Macro Era Supercycle & Spatial Trajectory' : '四、时代跃迁与宏观时空场能共振'}</span>
            </h4>
            <span class="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30 font-mono">
              ${isEn ? 'Period 9 AI Era & Geographic Leverage' : '离九运AI浪潮 · 地理借势'}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">
            ${isEn ? (gp.eraEn || gp.era) : (gp.eraZh || gp.era)}
          </p>
        </div>

        <!-- 5. 终身立身不败之黄金三则 -->
        <div class="p-4 sm:p-5 rounded-xl bg-amber-950/25 border border-amber-500/40 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-2 font-serif-sc">
              <span>🎯</span>
              <span>${isEn ? '5. Sovereign Grand Directives (Lifetime Golden Rules)' : '五、终身立身不败之黄金三则'}</span>
            </h4>
            <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono border border-amber-500/30 font-bold">
              ${isEn ? 'Supreme Life Guidelines' : '守正不败总纲'}
            </span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${rulesCardsHtml}
          </div>
        </div>
      `;
      container.appendChild(grandCard);
    }

    // 3. 👑 六亲深度侧写全息图 (Kinship 4D Depth Profiles: 配偶、子女、父母)
    const kinshipSection = document.createElement('div');
    kinshipSection.className = 'space-y-4';
    kinshipSection.innerHTML = `
      <div class="flex items-center justify-between pb-2 border-b border-gray-800">
        <div class="flex items-center space-x-2">
          <span class="text-xl">👥</span>
          <h3 class="text-base sm:text-lg font-bold font-serif-sc text-amber-300">
            ${isEn ? 'Holographic Kinship 4D Depth Profiles (Spouse, Children, Parents)' : '六亲深度侧写全息图谱 · 能量/性格/气质/相处四大维度剖析'}
          </h3>
        </div>
        <span class="chinese-seal text-[10px] py-0">${isEn ? 'Yu Zhao Ding Zhen' : '玉照定真'}</span>
      </div>
      <div id="kinshipStrategyCardsGrid" class="grid grid-cols-1 gap-5"></div>
    `;
    container.appendChild(kinshipSection);
    const kg = kinshipSection.querySelector('#kinshipStrategyCardsGrid');

    // Spouse 4D Card
    if (pc.spouse && kg) {
      const sp = pc.spouse;
      const spCard = document.createElement('div');
      spCard.className = 'p-5 rounded-2xl border border-rose-900/60 bg-gradient-to-br from-rose-950/20 via-black/50 to-black/70 shadow-xl space-y-4';
      spCard.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-rose-900/40">
          <div class="flex items-center space-x-2">
            <span class="text-lg">💑</span>
            <h4 class="text-sm sm:text-base font-bold text-rose-300 font-serif-sc">
              ${isEn ? (sp.titleEn || sp.title) : (sp.titleZh || sp.title)}
            </h4>
          </div>
          <div class="flex items-center gap-1.5 text-xs font-mono">
            <span class="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">${isEn ? 'Palace: ' : '日支夫妻宫：'}${sp.palaceBranch}</span>
            <span class="px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">${isEn ? (sp.spouseStarEn || sp.spouseStar) : (sp.spouseStarZh || sp.spouseStar)}</span>
          </div>
        </div>

        <div class="p-3 bg-black/40 rounded-xl text-xs text-rose-200/90 font-serif-sc border-l-3 border-rose-500 leading-relaxed">
          ${isEn ? (sp.subtitleEn || sp.subtitle) : (sp.subtitleZh || sp.subtitle)}
        </div>

        <!-- 4-Dimension Profile Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-amber-300 font-bold block">⚡ 1. ${isEn ? 'Energy Scale & Elemental Aura:' : '能量等级与五行气象：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (sp.energyEn || sp.energy) : (sp.energyZh || sp.energy)}</p>
          </div>
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-rose-300 font-bold block">🧠 2. ${isEn ? 'Psychological Archetype & Character Profile:' : '心性原型与性格特征画像：'}</span>
            <div class="text-amber-200 font-semibold mb-1">【${isEn ? (sp.archetypeEn || sp.archetype) : (sp.archetypeZh || sp.archetype)}】</div>
            <p class="text-gray-300 leading-relaxed">${isEn ? (sp.personalityEn || sp.personality) : (sp.personalityZh || sp.personality)}</p>
          </div>
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-purple-300 font-bold block">✨ 3. ${isEn ? 'Likely Demeanour, Aura & Aesthetic Presence:' : '有可能的气质仪态与风采容貌：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (sp.demeanourEn || sp.demeanour) : (sp.demeanourZh || sp.demeanour)}</p>
          </div>
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-emerald-300 font-bold block">🤝 4. ${isEn ? 'Relationship Dynamics & Interaction Mechanics:' : '相处关系与互动机制：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (sp.relationshipEn || sp.relationship) : (sp.relationshipZh || sp.relationship)}</p>
            <p class="text-rose-300 text-[11px] pt-1 border-t border-gray-800/60"><b>${isEn ? 'Clashing Reefs: ' : '潜在暗礁：'}</b>${isEn ? (sp.clashRiskEn || sp.clashRisk) : (sp.clashRiskZh || sp.clashRisk)}</p>
          </div>
        </div>

        <div class="p-3 bg-rose-950/20 rounded-xl border border-rose-500/30 text-xs space-y-1.5">
          <span class="text-emerald-300 font-bold block">${isEn ? '💍 Matrimonial Harmony & Daily Cultivation Guide:' : '💍 婚姻护持秘诀与日常相处法则：'}</span>
          <p class="text-gray-200 leading-relaxed">${isEn ? (sp.adviceEn || sp.advice) : (sp.adviceZh || sp.advice)}</p>
          ${sp.genderDiffZh || sp.genderDiff ? `
          <div class="pt-1.5 border-t border-rose-900/40 text-[11px] text-rose-300/90 leading-relaxed">
            <span class="font-bold text-rose-400">⚖️ ${isEn ? 'Gender Dynamics (Male vs. Female):' : '男女命差异 · 乾坤造化辨析：'}</span>
            ${isEn ? (sp.genderDiffEn || sp.genderDiff) : (sp.genderDiffZh || sp.genderDiff)}
          </div>` : ''}
        </div>
      `;
      kg.appendChild(spCard);
    }

    // Children 4D Card
    if (pc.children && kg) {
      const ch = pc.children;
      const chCard = document.createElement('div');
      chCard.className = 'p-5 rounded-2xl border border-emerald-900/60 bg-gradient-to-br from-emerald-950/20 via-black/50 to-black/70 shadow-xl space-y-4';
      chCard.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-emerald-900/40">
          <div class="flex items-center space-x-2">
            <span class="text-lg">👶</span>
            <h4 class="text-sm sm:text-base font-bold text-emerald-300 font-serif-sc">
              ${isEn ? (ch.titleEn || ch.title) : (ch.titleZh || ch.title)}
            </h4>
          </div>
          <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono">
            ${isEn ? 'Hour Pillar: ' : '时宿子女宫：'}${ch.hourPillarText}
          </span>
        </div>

        <div class="p-3 bg-black/40 rounded-xl text-xs text-emerald-200/90 font-serif-sc border-l-3 border-emerald-500 leading-relaxed">
          ${isEn ? (ch.subtitleEn || ch.subtitle) : (ch.subtitleZh || ch.subtitle)}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-amber-300 font-bold block">⚡ 1. ${isEn ? 'Energy Scale & Innate Vitality:' : '能量等级与五行气象：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (ch.energyEn || ch.energy) : (ch.energyZh || ch.energy)}</p>
          </div>
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-emerald-300 font-bold block">🧠 2. ${isEn ? 'Character Archetype & Frontier Talent:' : '心性原型与天赋赛道：'}</span>
            <div class="text-amber-200 font-semibold mb-1">【${isEn ? (ch.archetypeEn || ch.archetype) : (ch.archetypeZh || ch.archetype)}】</div>
            <p class="text-gray-300 leading-relaxed">${isEn ? (ch.personalityEn || ch.personality) : (ch.personalityZh || ch.personality)}</p>
          </div>
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-purple-300 font-bold block">✨ 3. ${isEn ? 'Likely Demeanour & Cutting-edge Presence:' : '有可能的气质仪态与风度神采：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (ch.demeanourEn || ch.demeanour) : (ch.demeanourZh || ch.demeanour)}</p>
          </div>
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-blue-300 font-bold block">🤝 4. ${isEn ? 'Parent-Child Dynamics & Mentorship Guide:' : '相处关系与亲子沟通互动密码：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (ch.relationshipEn || ch.relationship) : (ch.relationshipZh || ch.relationship)}</p>
            <p class="text-emerald-200 text-[11px] pt-1 border-t border-gray-800/60"><b>${isEn ? 'Mentorship Key: ' : '沟通避坑：'}</b>${isEn ? (ch.guideEn || ch.guide) : (ch.guideZh || ch.guide)}</p>
          </div>
        </div>

        ${ch.genderDiffZh || ch.genderDiff ? `
        <div class="p-3 bg-emerald-950/20 rounded-xl border border-emerald-500/30 text-xs space-y-1">
          <span class="font-bold text-emerald-400">⚖️ ${isEn ? 'Gender Dynamics (Male vs. Female):' : '男女命差异 · 乾坤造化辨析：'}</span>
          <p class="text-gray-200 leading-relaxed">${isEn ? (ch.genderDiffEn || ch.genderDiff) : (ch.genderDiffZh || ch.genderDiff)}</p>
        </div>` : ''}
      `;
      kg.appendChild(chCard);
    }

    // Parents 4D Card
    if (pc.parents && kg) {
      const pa = pc.parents;
      const paCard = document.createElement('div');
      paCard.className = 'p-5 rounded-2xl border border-indigo-900/60 bg-gradient-to-br from-indigo-950/20 via-black/50 to-black/70 shadow-xl space-y-4';
      paCard.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-indigo-900/40">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🏡</span>
            <h4 class="text-sm sm:text-base font-bold text-indigo-300 font-serif-sc">
              ${isEn ? (pa.titleEn || pa.title) : (pa.titleZh || pa.title)}
            </h4>
          </div>
          <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono">
            ${isEn ? (pa.typeEn || pa.type) : (pa.typeZh || pa.type)}
          </span>
        </div>

        <div class="p-3 bg-black/40 rounded-xl text-xs text-indigo-200/90 font-serif-sc border-l-3 border-indigo-500 leading-relaxed">
          ${isEn ? (pa.subtitleEn || pa.subtitle) : (pa.subtitleZh || pa.subtitle)}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-amber-300 font-bold block">⚡ 1. ${isEn ? 'Energy Scale & Ancestral Foundation:' : '能量等级与祖业根基底色：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (pa.energyEn || pa.energy) : (pa.energyZh || pa.energy)}</p>
          </div>
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-indigo-300 font-bold block">🧠 2. ${isEn ? 'Parental Character Archetype & Mindset:' : '父母心性原型与思维模式画像：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (pa.personalityEn || pa.personality) : (pa.personalityZh || pa.personality)}</p>
          </div>
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-purple-300 font-bold block">✨ 3. ${isEn ? 'Family Demeanour & Upbringing Heritage:' : '家风气质风度与言传身教熏陶：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (pa.demeanourEn || pa.demeanour) : (pa.demeanourZh || pa.demeanour)}</p>
          </div>
          <div class="p-3 bg-black/40 rounded-xl border border-gray-800 space-y-1.5">
            <span class="text-emerald-300 font-bold block">🤝 4. ${isEn ? 'Intergenerational Dynamics & Filial Balance:' : '相处互动机制与孝道自主平衡：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? (pa.relationshipEn || pa.relationship) : (pa.relationshipZh || pa.relationship)}</p>
            <p class="text-amber-200 text-[11px] pt-1 border-t border-gray-800/60"><b>${isEn ? 'Resource vs Debt: ' : '隐形资源vs约束：'}</b>${isEn ? (pa.debtOrBlessingEn || pa.debtOrBlessing) : (pa.debtOrBlessingZh || pa.debtOrBlessing)}</p>
          </div>
        </div>

        <div class="p-3 bg-indigo-950/20 rounded-xl border border-indigo-500/30 text-xs space-y-1.5">
          <span class="text-emerald-300 font-bold block">${isEn ? '🌿 Harmonizing Filial Devotion with Sovereign Autonomy:' : '🌿 孝道奉养与自主人生平衡法则：'}</span>
          <p class="text-gray-200 leading-relaxed">${isEn ? (pa.filialAdviceEn || pa.filialAdvice) : (pa.filialAdviceZh || pa.filialAdvice)}</p>
          ${pa.genderDiffZh || pa.genderDiff ? `
          <div class="pt-1.5 border-t border-indigo-900/40 text-[11px] text-indigo-300/90 leading-relaxed">
            <span class="font-bold text-indigo-400">⚖️ ${isEn ? 'Gender Dynamics (Male vs. Female):' : '男女命差异 · 乾坤造化辨析：'}</span>
            ${isEn ? (pa.genderDiffEn || pa.genderDiff) : (pa.genderDiffZh || pa.genderDiff)}
          </div>` : ''}
        </div>
      `;
      kg.appendChild(paCard);
    }
  }

  // 🧘 Original Factory-Default Mindset Manual & Zen-Dao View Renderer (原厂心理使用说明书)
  function renderFrictionView(pData, res, isEn) {
    const container = document.getElementById('frictionContentContainer');
    if (!container) return;
    if (!pData || !pData.mentalFriction) {
      container.innerHTML = `
        <div class="p-8 text-center text-gray-400">
          <span class="text-3xl block mb-2">🧘</span>
          <p>${isEn ? 'Please calculate a natal chart to evaluate the Factory Mind Manual and Zen-Dao solutions.' : '请先在主盘完成排盘，以生成原厂心理使用说明书与禅道至高心法。'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    const mf = pData.mentalFriction;
    const fs = mf.factorySpecs || {};

    // 1. Factory Specifications Hardware Card (出厂硬件与核心心智规格说明)
    const specsCard = document.createElement('div');
    specsCard.className = 'p-5 sm:p-6 rounded-2xl border-2 border-rose-800/70 bg-gradient-to-br from-rose-950/40 via-black/80 to-stone-950/90 shadow-2xl space-y-4';
    
    const dmVal = isEn ? (fs.dayMasterEn || fs.dayMasterZh) : fs.dayMasterZh;
    const procVal = isEn ? (fs.processorTypeEn || fs.processorTypeZh) : fs.processorTypeZh;
    const osVal = isEn ? (fs.osVersionEn || fs.osVersionZh) : fs.osVersionZh;
    const engineVal = isEn ? (fs.coreEngineEn || fs.coreEngineZh) : fs.coreEngineZh;
    const bwVal = isEn ? (fs.ruminationBandwidthEn || fs.ruminationBandwidthZh) : fs.ruminationBandwidthZh;
    const ratioVal = isEn ? (fs.efficiencyRatioEn || fs.efficiencyRatioZh) : fs.efficiencyRatioZh;

    specsCard.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-rose-900/40">
        <div class="flex items-center space-x-2.5">
          <span class="text-2xl">🌪️</span>
          <div>
            <h3 class="text-base sm:text-xl font-bold font-serif-sc text-rose-300 flex items-center gap-2">
              <span>${isEn ? 'Original Factory Mind Manual & Cognitive Architecture' : '原厂心理使用说明书 · 精神内耗专项检测与实战彻底改善方案'}</span>
            </h3>
            <p class="text-xs text-gray-400 mt-0.5">
              ${isEn ? 'Quantifying neural standby overdrive & baseline computational specifications' : '大脑超频空转深度量化 · 探寻内耗底层命理与认知根源'}
            </p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-xs sm:text-sm px-3 py-1 rounded-full border ${mf.levelBadge} font-bold font-mono">
            ${isEn ? 'Rumination Index: ' : '内耗指数：'}${mf.score}% · ${mf.level}
          </span>
        </div>
      </div>

      <!-- Rumination Progress Bar -->
      <div class="w-full bg-gray-900 rounded-full h-3 overflow-hidden border border-gray-800">
        <div class="bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 h-full rounded-full transition-all duration-700" style="width: ${mf.score}%;"></div>
      </div>

      <!-- Six Factory Hardware Specs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
        <div class="p-3 bg-black/60 rounded-xl border border-rose-950 space-y-1">
          <span class="text-[11px] text-amber-400 font-mono block">🧬 ${isEn ? 'Day Master Prime:' : '本命元神引擎：'}</span>
          <span class="text-xs text-gray-200 font-serif-sc font-medium">${dmVal || '--'}</span>
        </div>
        <div class="p-3 bg-black/60 rounded-xl border border-rose-950 space-y-1">
          <span class="text-[11px] text-purple-400 font-mono block">🧠 ${isEn ? 'Processor Architecture:' : '神经处理器架构：'}</span>
          <span class="text-xs text-gray-200 font-serif-sc font-medium">${procVal || '--'}</span>
        </div>
        <div class="p-3 bg-black/60 rounded-xl border border-rose-950 space-y-1">
          <span class="text-[11px] text-blue-400 font-mono block">💿 ${isEn ? 'Factory OS:' : '出厂系统版本：'}</span>
          <span class="text-xs text-gray-200 font-mono">${osVal || '--'}</span>
        </div>
        <div class="p-3 bg-black/60 rounded-xl border border-rose-950 space-y-1">
          <span class="text-[11px] text-emerald-400 font-mono block">⚡ ${isEn ? 'Primary Drive Engine:' : '动力内核机制：'}</span>
          <span class="text-xs text-gray-200 font-serif-sc font-medium">${engineVal || '--'}</span>
        </div>
        <div class="p-3 bg-black/60 rounded-xl border border-rose-950 space-y-1">
          <span class="text-[11px] text-rose-400 font-mono block">📊 ${isEn ? 'Rumination Standby:' : '待机空转负载：'}</span>
          <span class="text-xs text-gray-200 font-mono">${bwVal || '--'}</span>
        </div>
        <div class="p-3 bg-black/60 rounded-xl border border-rose-950 space-y-1">
          <span class="text-[11px] text-cyan-400 font-mono block">🎯 ${isEn ? 'Sensitivity Quotient:' : '敏锐感知比率：'}</span>
          <span class="text-xs text-gray-200 font-serif-sc font-medium">${ratioVal || '--'}</span>
        </div>
      </div>

      <!-- Core Root Cause Diagnostic Box -->
      <div class="p-4 rounded-xl bg-rose-950/25 border border-rose-900/50 text-xs sm:text-sm text-rose-200 leading-relaxed font-serif-sc space-y-2">
        <div>
          <b class="text-amber-300">${isEn ? '【Core Mental Friction Root Cause】' : '【本命核心内耗根源剖析】'}</b>
          ${mf.primaryRoot}
        </div>
        <div class="text-xs text-gray-300 pt-2 border-t border-rose-900/40">
          <b class="text-rose-400">${isEn ? 'Natal BaZi Triggers: ' : '八字触发特征：'}</b>${mf.triggers ? mf.triggers.join(isEn ? '; ' : '；') : ''}
        </div>
      </div>
    `;
    container.appendChild(specsCard);

    // 2. Mind Manual Navigation Sub-tabs
    const tabsWrapper = document.createElement('div');
    tabsWrapper.className = 'flex flex-wrap items-center gap-2 border-b border-gray-800/80 pb-2.5';
    const manualTabs = [
      { id: 'canons', labelZh: '📜 八大经典经文细注', labelEn: '📜 Eight Canons Exegesis' },
      { id: 'triggers', labelZh: '⚡ 极端压力触发开关', labelEn: '⚡ Stress Triggers & Red Lines' },
      { id: 'protocols', labelZh: '🛡️ 出厂自救降维心法', labelEn: '🛡️ Emergency De-escalation' },
      { id: 'habits', labelZh: '🌿 五行能量微习惯', labelEn: '🌿 5-Element Micro-Habits' },
      { id: 'zendao', labelZh: '☸️ 禅道至高解脱专栏', labelEn: '☸️ Zen-Dao Sanctuary' }
    ];

    manualTabs.forEach(t => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isZenTab = (selectedManualTab === 'zendao' || selectedManualTab === 'trinity' || selectedManualTab === 'zen');
      const isActive = (t.id === 'zendao') ? isZenTab : (selectedManualTab === t.id);
      btn.className = `px-3.5 py-1.5 text-xs rounded-xl font-serif-sc font-semibold transition border cursor-pointer ${
        isActive
          ? 'bg-rose-600/30 text-rose-300 border-rose-500/60 shadow-md shadow-rose-950/40'
          : 'bg-black/40 text-gray-400 border-gray-800 hover:text-gray-200 hover:border-gray-700'
      }`;
      btn.textContent = isEn ? t.labelEn : t.labelZh;
      btn.addEventListener('click', () => {
        selectedManualTab = t.id;
        renderFrictionView(pData, res, isEn);
      });
      tabsWrapper.appendChild(btn);
    });
    container.appendChild(tabsWrapper);

    // Tab 1: Eight Canons Exegesis
    if (selectedManualTab === 'canons') {
      const canonsWrapper = document.createElement('div');
      canonsWrapper.className = 'space-y-4';
      canonsWrapper.innerHTML = `
        <div class="flex items-center justify-between pb-1 border-b border-gray-800">
          <div class="flex items-center space-x-2">
            <span class="text-lg">📜</span>
            <h4 class="text-sm sm:text-base font-bold text-amber-300 font-serif-sc">
              ${isEn ? 'Eight Classical Canons Scripture Manual & Factory Tuning' : '八大典籍正统经文细注与出厂心智调律'}
            </h4>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-mono border border-amber-500/30">
            ${isEn ? 'All 8 Ancient Canons' : '八典汇通'}
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${(mf.classicalCanonsManual || []).map(c => `
            <div class="p-4 sm:p-5 rounded-xl border border-gray-800 bg-black/45 space-y-3 hover:border-amber-500/40 transition flex flex-col justify-between">
              <div class="space-y-2.5">
                <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-800">
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold font-serif-sc text-amber-300">
                      ${isEn ? c.canonNameEn : c.canonNameZh}
                    </h5>
                    <span class="text-[10px] text-gray-400 font-mono">${isEn ? c.dynastyEn : c.dynastyZh}</span>
                  </div>
                  <span class="chinese-seal text-[9px] py-0 border-amber-500/60 text-amber-300 font-serif-sc">
                    ${isEn ? c.themeEn : c.themeZh}
                  </span>
                </div>

                <!-- Scripture Quote -->
                <div class="p-3 bg-amber-950/20 rounded-lg border-l-2 border-amber-400 font-serif-sc text-xs text-amber-200/95 italic leading-relaxed">
                  ${isEn ? c.quoteEn : c.quoteZh}
                </div>

                <!-- Vernacular Modern Exegesis -->
                <div class="p-2.5 rounded-lg bg-black/50 border border-gray-800/80 text-xs text-gray-300 leading-relaxed font-serif-sc">
                  ${isEn ? c.vernacularEn : c.vernacularZh}
                </div>
              </div>

              <!-- Factory Tuning Habit -->
              <div class="p-2.5 rounded-lg bg-emerald-950/25 border border-emerald-800/50 text-xs text-emerald-200 leading-relaxed font-serif-sc mt-2">
                ${isEn ? c.remedyEn : c.remedyZh}
              </div>
            </div>
          `).join('')}
        </div>
      `;
      container.appendChild(canonsWrapper);
    }

    // Tab 2: Stress Triggers & Red Lines
    if (selectedManualTab === 'triggers') {
      const triggersWrapper = document.createElement('div');
      triggersWrapper.className = 'space-y-4';
      triggersWrapper.innerHTML = `
        <div class="flex items-center justify-between pb-1 border-b border-gray-800">
          <div class="flex items-center space-x-2">
            <span class="text-lg">⚡</span>
            <h4 class="text-sm sm:text-base font-bold text-rose-300 font-serif-sc">
              ${isEn ? 'Extreme Stress Trigger Signatures & Cognitive Red Lines' : '极端压力触发开关与认知红线'}
            </h4>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 font-mono border border-rose-500/30">
            ${isEn ? '4 Signature Triggers' : '四大触发特征'}
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${(mf.stressTriggers || []).map(st => `
            <div class="p-4 sm:p-5 rounded-xl border border-rose-900/50 bg-black/45 space-y-3 hover:border-rose-700/60 transition flex flex-col justify-between">
              <div class="space-y-2.5">
                <div class="flex items-center justify-between pb-2 border-b border-gray-800">
                  <div class="flex items-center space-x-2">
                    <span class="text-xl">${st.icon}</span>
                    <h5 class="text-xs sm:text-sm font-bold font-serif-sc text-rose-300">
                      ${isEn ? st.nameEn : st.nameZh}
                    </h5>
                  </div>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono">
                    ${isEn ? st.classicalSignEn : st.classicalSignZh}
                  </span>
                </div>

                <!-- Cognitive Mechanism -->
                <p class="text-xs text-gray-300 leading-relaxed font-serif-sc">
                  <span class="text-amber-300 font-semibold">${isEn ? 'Cognitive Loop: ' : '底层认知机制：'}</span>
                  ${isEn ? st.mechanismEn : st.mechanismZh}
                </p>
              </div>

              <!-- Absolute Red Line -->
              <div class="p-3 rounded-lg bg-rose-950/30 border border-rose-600/60 text-xs text-rose-200 leading-relaxed font-serif-sc mt-2">
                ${isEn ? st.redLineEn : st.redLineZh}
              </div>
            </div>
          `).join('')}
        </div>
      `;
      container.appendChild(triggersWrapper);
    }

    // Tab 3: De-escalation Protocols & Somatic Reset
    if (selectedManualTab === 'protocols') {
      const protocolsWrapper = document.createElement('div');
      protocolsWrapper.className = 'space-y-5';

      // 3-Tier Master Protocols
      protocolsWrapper.innerHTML = `
        <div class="flex items-center justify-between pb-1 border-b border-gray-800">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🛡️</span>
            <h4 class="text-sm sm:text-base font-bold text-amber-300 font-serif-sc">
              ${isEn ? 'Three-Tier Factory Emergency De-escalation Master Protocols' : '出厂自救三阶战训降维心法 (终结内耗闭环)'}
            </h4>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-mono border border-amber-500/30">
            ${isEn ? '3 Emergency Tiers' : '三阶硬核自救'}
          </span>
        </div>

        <div class="space-y-4">
          ${(mf.deEscalationProtocols || []).map(dp => `
            <div class="p-4 sm:p-5 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/20 via-black/50 to-black/60 shadow-lg space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-amber-500/30">
                <div class="flex items-center space-x-2">
                  <span class="text-xl">${dp.icon}</span>
                  <h5 class="text-xs sm:text-sm font-bold font-serif-sc text-amber-300">
                    ${isEn ? dp.levelEn : dp.levelZh}
                  </h5>
                </div>
                <span class="text-[10.5px] text-amber-400 font-mono">
                  ${isEn ? dp.principleEn : dp.principleZh}
                </span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                ${((isEn ? dp.stepsEn : dp.stepsZh) || []).map(step => `
                  <div class="p-3 bg-black/60 rounded-xl border border-gray-800/80 text-xs text-gray-300 leading-relaxed font-serif-sc flex flex-col justify-between">
                    <div>${step}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
      container.appendChild(protocolsWrapper);
    }

    // Tab 4: Five Element Micro-Habits
    if (selectedManualTab === 'habits') {
      const habitsWrapper = document.createElement('div');
      habitsWrapper.className = 'space-y-4';
      habitsWrapper.innerHTML = `
        <div class="flex items-center justify-between pb-1 border-b border-gray-800">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🌿</span>
            <h4 class="text-sm sm:text-base font-bold text-emerald-300 font-serif-sc">
              ${isEn ? 'Daily Five-Element Energy Micro-Habits' : '每日五行能量微习惯与出厂调律'}
            </h4>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-mono border border-emerald-500/30">
            ${isEn ? '5 Elemental Rituals' : '五行微仪式'}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${(mf.fiveElementMicroHabits || []).map(mh => `
            <div class="p-4 sm:p-5 rounded-xl border ${mh.isPrimaryFavorable ? 'border-amber-500/70 bg-amber-950/20' : 'border-gray-800 bg-black/45'} space-y-3 hover:border-emerald-500/50 transition flex flex-col justify-between">
              <div class="space-y-2.5">
                <div class="flex items-center justify-between pb-2 border-b border-gray-800">
                  <div class="flex items-center space-x-2">
                    <span class="text-xl">${mh.icon}</span>
                    <h5 class="text-xs sm:text-sm font-bold font-serif-sc text-amber-300">
                      ${isEn ? mh.habitNameEn : mh.habitNameZh}
                    </h5>
                  </div>
                  <span class="text-xs font-mono text-gray-400">
                    ${isEn ? mh.durationEn : mh.durationZh}
                  </span>
                </div>

                ${mh.isPrimaryFavorable ? `
                  <div class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono inline-block">
                    ${isEn ? '★ Primary Natal Alignment' : '★ 本命喜用首选微习惯'}
                  </div>
                ` : ''}

                <div class="p-2.5 rounded-lg bg-black/60 border border-gray-800/80 text-xs text-gray-200 leading-relaxed font-serif-sc">
                  <span class="text-emerald-300 font-semibold">${isEn ? 'Daily Ritual: ' : '能量仪式：'}</span>
                  ${isEn ? mh.ritualEn : mh.ritualZh}
                </div>
              </div>

              <div class="p-2 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-[11px] text-emerald-300 leading-relaxed font-serif-sc mt-2">
                <span class="font-bold">${isEn ? 'Metaphysical Potency: ' : '气机效力：'}</span>
                ${isEn ? mh.potencyEn : mh.potencyZh}
              </div>
            </div>
          `).join('')}
        </div>
      `;
      container.appendChild(habitsWrapper);
    }

    // Tab 5: Zen-Dao Trinity Sanctuary
    if (selectedManualTab === 'zendao' || selectedManualTab === 'trinity' || selectedManualTab === 'zen') {
      if (mf.zenDaoWisdom) {
        const zd = mf.zenDaoWisdom;
        const zenSection = document.createElement('div');
        zenSection.className = 'p-5 sm:p-7 rounded-2xl border-2 border-amber-500/80 bg-gradient-to-b from-amber-950/40 via-black/85 to-stone-950/90 shadow-2xl space-y-5';

        const classics = [
          { key: 'diamond', item: zd.diamond, icon: '💎', theme: 'border-amber-500/60 bg-amber-950/20 text-amber-300' },
          { key: 'platform', item: zd.platform, icon: '🪞', theme: 'border-indigo-500/60 bg-indigo-950/20 text-indigo-300' },
          { key: 'zhuangzi', item: zd.zhuangzi, icon: '🦋', theme: 'border-emerald-500/60 bg-emerald-950/20 text-emerald-300' }
        ];

        const cardsHtml = classics.map(c => {
          const it = c.item;
          if (!it) return '';

          const quotesList = it.quotes || [];
          const quotesHtml = quotesList.map(q => `
            <div class="p-3 bg-black/60 rounded-xl border border-gray-800/80 hover:border-amber-500/40 transition space-y-1.5 text-xs">
              <div class="text-amber-200 font-serif-sc font-bold leading-relaxed">
                ${isEn ? (q.verseEn || q.verse) : (q.verseZh || q.verse)}
              </div>
              <div class="text-[10.5px] text-gray-400 text-right font-mono">
                —— ${isEn ? (q.sourceEn || q.source) : (q.sourceZh || q.source)}
              </div>
              <div class="pt-1 border-t border-gray-800/60 text-gray-300 text-[11px] leading-relaxed">
                <span class="text-amber-300/90 font-semibold">${isEn ? '💡 Mindset:' : '💡 洞见：'}</span>
                ${isEn ? (q.insightEn || q.insight) : (q.insightZh || q.insight)}
              </div>
              <div class="text-emerald-300/90 text-[11px] leading-relaxed">
                <span class="font-semibold">${isEn ? '🚀 Practice:' : '🚀 实操：'}</span>
                ${isEn ? (q.practicalEn || q.practical) : (q.practicalZh || q.practical)}
              </div>
            </div>
          `).join('');

          return `
            <div class="p-4 sm:p-5 rounded-xl border ${c.theme.split(' ')[0]} bg-black/50 shadow-lg space-y-3.5 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-800">
                  <div class="flex items-center space-x-2">
                    <span class="text-xl">${c.icon}</span>
                    <h5 class="text-xs sm:text-sm font-bold font-serif-sc text-amber-300">
                      ${isEn ? (it.titleEn || it.title) : (it.titleZh || it.title)}
                    </h5>
                  </div>
                  <span class="chinese-seal text-[9px] py-0">${isEn ? (it.badgeEn || 'Classic Zen') : (it.badgeZh || '三教至理')}</span>
                </div>

                <div class="p-3 bg-black/60 rounded-lg border-l-3 border-amber-400 font-serif-sc text-xs text-amber-200 font-semibold leading-relaxed">
                  “${isEn ? (it.mantraEn || it.mantra) : (it.mantraZh || it.mantra)}”
                </div>

                <div class="p-3 bg-black/40 rounded-lg border border-gray-800/80 space-y-1">
                  <span class="text-xs font-bold text-gray-300 block">💡 ${isEn ? 'Metaphysical Insight:' : '微言大义与心智洞见：'}</span>
                  <p class="text-xs text-gray-300 leading-relaxed font-serif-sc">${isEn ? (it.insightEn || it.insight) : (it.insightZh || it.insight)}</p>
                </div>

                <div class="p-3 bg-amber-950/20 rounded-lg border border-amber-500/30 space-y-1">
                  <span class="text-xs font-bold text-emerald-300 block">🚀 ${isEn ? 'Modern Actionable Mindset:' : '现实处世与实操心法：'}</span>
                  <p class="text-xs text-gray-200 leading-relaxed font-serif-sc">${isEn ? (it.practicalEn || it.practical) : (it.practicalZh || it.practical)}</p>
                </div>
              </div>

              ${quotesList.length > 0 ? `
                <div class="mt-2 pt-3 border-t border-gray-800/80 space-y-2.5">
                  <div class="flex items-center justify-between text-xs font-bold text-amber-300">
                    <span class="flex items-center gap-1">
                      <span>📜</span>
                      <span>${isEn ? 'Canonical Wisdom Anthology:' : '经典传世真言与心法集萃：'}</span>
                    </span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-mono border border-amber-500/30">
                      ${quotesList.length} ${isEn ? 'Verses' : '则经文精髓'}
                    </span>
                  </div>
                  <div class="space-y-2 max-h-[480px] overflow-y-auto pr-1">
                    ${quotesHtml}
                  </div>
                </div>
              ` : ''}
            </div>
          `;
        }).join('');

        zenSection.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-amber-500/40">
            <div class="flex items-center space-x-2.5">
              <span class="chinese-seal text-xs py-0.5">${isEn ? 'ZEN & DAO TRINITY' : '☸️ 禅道心智'}</span>
              <h3 class="text-base sm:text-xl font-bold font-serif-sc text-amber-300">
                ${isEn ? (zd.titleEn || zd.title) : (zd.titleZh || zd.title)}
              </h3>
            </div>
            <span class="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
              ${isEn ? 'Transcending Ego & Rumination' : '直断妄念 · 乘物游心'}
            </span>
          </div>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-serif-sc">
            ${isEn 
              ? 'The ultimate resolution of mental friction does not lie in endlessly wrestling with internal thoughts, but in transcending them through classical Zen and Dao wisdom. The Diamond Sutra shatters attachments to forms; the Platform Sutra returns directly to original self-nature; Zhuangzi transforms worldly friction into effortless roaming with the universal flow.' 
              : '世间一切精神内耗，皆源于“向内抓住不放”之执念。欲彻底根治，必须从认知维度降维打击：以《金刚经》破除一切得失幻相，以《六祖坛经》直悟本来无一物，以《庄子》物物而不物于物，化精神内耗为空灵洞见，乘物游心，笑看浮沉。'}
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-1">
            ${cardsHtml}
          </div>
        `;
        container.appendChild(zenSection);
      }
    }
  }

  // Render Classical Literature Modules (Five Canons Integration)
  function renderLiterature(res) {
    const isEn = (currentLang === 'en');
    const dayPillar = res.pillars.day.text;
    const hourPillar = res.pillars.hour.text;
    const dayMaster = res.dayMaster;
    const monthBranch = res.solarInfo.monthBranch;

    // 1. 《三命通会》 Auto Matching with 4-Part Structure
    const sanmingReading = SanMingDB.getReading(dayPillar, hourPillar);
    const smContainer = document.getElementById('sanmingAutoResult');
    if (sanmingReading) {
      smContainer.innerHTML = `
        <div class="bg-card p-5 rounded-xl border border-border-color shadow-lg space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-700/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal">${isEn ? 'San Ming Tong Hui' : '三命通会'}</span>
              <h3 class="text-lg font-bold text-amber-400 font-serif-sc">${sanmingReading.title}</h3>
            </div>
            <span class="px-2.5 py-1 text-xs rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
              ${isEn ? 'Pattern: ' : '格局：'}${sanmingReading.pattern}
            </span>
          </div>

          <!-- Classic Verse -->
          <div class="bg-amber-950/20 border-l-4 border-amber-500 p-3.5 rounded-r">
            <p class="text-xs text-amber-300/80 mb-1 font-medium">${isEn ? 'Poem by Master Wan Minying:' : '万民英古断诗诀：'}</p>
            <p class="text-base font-serif-sc text-amber-100 tracking-wide leading-relaxed font-semibold">
              “${sanmingReading.verse}”
            </p>
          </div>

          <!-- Four-Part Pattern Breakdown -->
          <div class="space-y-3 text-xs leading-relaxed text-gray-200">
            <div class="p-3 bg-black/30 rounded-lg border border-amber-900/30">
              <span class="text-amber-400 font-bold block mb-1">${isEn ? '💡 1. [Pattern Meaning]' : '💡【格局含义】'}</span>
              <p class="text-gray-300">${sanmingReading.meaning}</p>
            </div>

            <div class="p-3 bg-black/30 rounded-lg border border-gray-800">
              <span class="text-gray-400 font-bold block mb-1">${isEn ? '📖 2. [Canon Source]' : '📖【典籍出处】'}</span>
              <p class="text-gray-400">${sanmingReading.source}</p>
            </div>

            <div class="p-3 bg-black/30 rounded-lg border border-emerald-900/30">
              <span class="text-emerald-400 font-bold block mb-1">${isEn ? '⚖️ 3. [Formation Conditions]' : '⚖️【成格条件】'}</span>
              <p class="text-gray-300">${sanmingReading.conditions}</p>
            </div>

            <div class="p-3 bg-black/30 rounded-lg border border-rose-900/30">
              <span class="text-rose-400 font-bold block mb-1">${isEn ? '🎯 4. [Practical Usage & Taboos]' : '🎯【实战用法与喜忌】'}</span>
              <p class="text-gray-300">${sanmingReading.usage}</p>
            </div>
          </div>
        </div>
      `;
    } else {
      smContainer.innerHTML = `<p class="text-sm text-gray-400">${isEn ? 'No direct record found for the current pillar combination.' : '暂未检索到当前组合的直接条目。'}</p>`;
    }

    // 2. 《穷通宝鉴》 Auto Matching (Day Master + Month Branch)
    const qtReading = QiongTongDB.getReading(dayMaster, monthBranch);
    const qtContainer = document.getElementById('qiongtongAutoResult');
    if (qtReading) {
      const favorableTags = qtReading.favorable.map(f => `<span class="px-2 py-0.5 text-xs rounded bg-blue-900/30 text-blue-300 border border-blue-700/30 mr-1.5 mb-1 inline-block">${f}</span>`).join('');
      const tabooTags = qtReading.taboos.map(t => `<span class="px-2 py-0.5 text-xs rounded bg-rose-900/30 text-rose-300 border border-rose-700/30 mr-1.5 mb-1 inline-block">${t}</span>`).join('');

      qtContainer.innerHTML = `
        <div class="bg-card p-5 rounded-xl border border-border-color shadow-lg space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-700/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal">${isEn ? 'Qiong Tong Bao Jian' : '穷通宝鉴'}</span>
              <h3 class="text-lg font-bold text-blue-400 font-serif-sc">${qtReading.title}</h3>
            </div>
            <span class="text-xs text-gray-400">${isEn ? 'Qing Dynasty · Edited by Yu Chuntai / Lan Jiang Wang' : '清·余春台编订 / 栏江网原著'}</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="p-3 bg-blue-950/20 border-l-4 border-blue-500 rounded-r">
              <span class="text-xs text-blue-300 font-semibold block mb-0.5">${isEn ? '🌟 Primary Climate Regulator:' : '🌟 首要调候用神：'}</span>
              <span class="text-base font-bold text-amber-300 font-serif-sc">${qtReading.primary}</span>
            </div>
            <div class="p-3 bg-indigo-950/20 border-l-4 border-indigo-500 rounded-r">
              <span class="text-xs text-indigo-300 font-semibold block mb-0.5">${isEn ? '✨ Secondary Auxiliary God:' : '✨ 次要辅佐用神：'}</span>
              <span class="text-base font-bold text-indigo-200 font-serif-sc">${qtReading.secondary}</span>
            </div>
          </div>

          <div class="p-3.5 bg-black/20 rounded-lg border border-gray-800">
            <p class="text-xs text-blue-300 font-medium mb-1">${isEn ? '【Climate Outline】' : '【气候提纲】'}${qtReading.climate}</p>
            <p class="text-sm font-serif-sc text-gray-200 leading-relaxed font-medium mb-2">“${qtReading.classic_text}”</p>
            <p class="text-xs text-gray-400 leading-relaxed">${qtReading.vernacular}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-gray-700/30">
            <div>
              <span class="text-xs text-blue-400 font-semibold block mb-1.5">${isEn ? '✓ Favorable & Nourishing Elements:' : '✓ 喜神与生旺相助：'}</span>
              <div>${favorableTags}</div>
            </div>
            <div>
              <span class="text-xs text-rose-400 font-semibold block mb-1.5">${isEn ? '✗ Taboo & Unbalanced Elements:' : '✗ 忌神与偏枯之害：'}</span>
              <div>${tabooTags}</div>
            </div>
          </div>

          ${qtReading.yangren_meaning ? `
            <div class="p-4 bg-indigo-950/20 rounded-xl border border-indigo-500/30 space-y-3 mt-3">
              <div class="flex items-center justify-between border-b border-indigo-500/20 pb-2">
                <h4 class="text-sm font-bold text-indigo-300 font-serif-sc flex items-center gap-1.5">
                  <span class="chinese-seal text-[10px] py-0 border-indigo-400 text-indigo-300">${isEn ? 'Esoteric Key' : '深层密诀'}</span>
                  <span>🗡️ ${isEn ? 'Yang Blade (Yang Ren) True Nature & Practical Mastery' : '阳刃（羊刃）真谛与实战驭煞法门'}</span>
                </h4>
                <span class="text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">
                  ${isEn ? 'Ren Water Born in Zi Month Special Treatise' : '壬水生于子月专论'}
                </span>
              </div>

              <!-- 1. 阳刃本质 -->
              <div class="p-3 bg-black/30 rounded-lg border border-indigo-900/30 text-xs space-y-1">
                <span class="text-amber-300 font-bold block">💡 ${isEn ? '1. Yang Blade Essence (What It Truly Means):' : '1. 阳刃本质辨证（究竟是什么意思）：'}</span>
                <p class="text-gray-300 leading-relaxed">${qtReading.yangren_meaning}</p>
              </div>

              <!-- 2. 现实驾驭法则 -->
              <div class="p-3 bg-black/30 rounded-lg border border-indigo-900/30 text-xs space-y-1">
                <span class="text-emerald-400 font-bold block">🎯 ${isEn ? '2. Real-World Mastery Protocol (How to Channel Its Energy):' : '2. 现实驾驭与转化法则（怎样化凶为至大权柄）：'}</span>
                <p class="text-gray-300 leading-relaxed">${qtReading.yangren_usage}</p>
              </div>

              <!-- 3. 现实生活案例原型 -->
              <div class="p-3 bg-black/30 rounded-lg border border-indigo-900/30 text-xs space-y-1">
                <span class="text-blue-400 font-bold block">🌟 ${isEn ? '3. Real-World Elite Prototypes:' : '3. 现实生活中的典型人物案例原型：'}</span>
                <p class="text-gray-300 leading-relaxed">${qtReading.yangren_examples}</p>
              </div>

              <!-- 4. 戊土与丙火在现代社会的映射实体 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-black/30 rounded-lg border border-amber-900/30 space-y-1">
                  <span class="text-amber-400 font-bold block">⛰️ ${isEn ? 'Modern Wu Earth (Seven Killings / Dam & Backbone):' : '戊土在现代社会对应什么实体与形态：'}</span>
                  <p class="text-gray-300 leading-relaxed">${qtReading.modern_wutu}</p>
                </div>
                <div class="p-3 bg-black/30 rounded-lg border border-rose-900/30 space-y-1">
                  <span class="text-rose-400 font-bold block">☀️ ${isEn ? 'Modern Bing Fire (Sun / Energy & Warmth):' : '丙火在现代社会对应什么实体与形态：'}</span>
                  <p class="text-gray-300 leading-relaxed">${qtReading.modern_binghuo}</p>
                </div>
              </div>

              <!-- 5. 命主核心行动准则 -->
              <div class="p-3 bg-black/30 rounded-lg border border-emerald-900/40 text-xs space-y-1">
                <span class="text-emerald-300 font-bold block">⚡ ${isEn ? '4. Tactical Action Protocol for Native:' : '4. 命主核心战术行动准则（怎样彻底落地改运）：'}</span>
                <p class="text-gray-300 leading-relaxed">${qtReading.action_protocol}</p>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 3. 《子平真诠》 Auto Pattern Matching
    // Detect month god for pattern diagnosis
    const monthGod = res.pillars.month.stemGod;
    let dominantPatternKey = (monthGod && monthGod.includes('官')) ? '正官格'
      : (monthGod && monthGod.includes('杀')) ? '七杀格'
      : (monthGod && monthGod.includes('财')) ? '正财格'
      : (monthGod && monthGod.includes('印')) ? '印绶格'
      : (monthGod && monthGod.includes('伤')) ? '伤官格'
      : (monthGod && monthGod.includes('食')) ? '食神格'
      : '正官格';

    // If 正官格 was broken by 羊刃/七杀/伤官, align with dominant active pattern
    if (res.brokenPatterns && res.brokenPatterns.some(bp => bp.name.includes('正官'))) {
      dominantPatternKey = (monthGod && monthGod.includes('杀')) ? '七杀格'
        : (monthGod && monthGod.includes('伤')) ? '伤官格'
        : '七杀格';
    }

    const zpPattern = ZiPingZhenQuanDB.getPattern(dominantPatternKey);
    const zpContainer = document.getElementById('zipingAutoResult');
    if (zpContainer && zpPattern) {
      zpContainer.innerHTML = `
        <div class="bg-card p-5 rounded-xl border border-border-color shadow-lg space-y-3.5">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-700/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal">${isEn ? 'Zi Ping Zhen Quan' : '子平真诠'}</span>
              <h3 class="text-lg font-bold text-purple-400 font-serif-sc">${isEn ? (zpPattern.nameEn || zpPattern.name) : zpPattern.name} · ${isEn ? 'Success & Remedies' : '成败救应'}</h3>
            </div>
            <span class="text-xs text-gray-400">${isEn ? 'Qing Dynasty · Shen Xiaozhan' : '清·沈孝瞻著'}</span>
          </div>

          <div class="p-3 bg-purple-950/20 border-l-4 border-purple-500 rounded-r">
            <p class="text-xs text-purple-300 font-medium mb-1">${isEn ? 'Shen Xiaozhan Original Principle:' : '沈孝瞻原著定论：'}</p>
            <p class="text-sm font-serif-sc text-purple-100 font-medium leading-relaxed">“${isEn ? (zpPattern.quoteEn || zpPattern.quote) : zpPattern.quote}”</p>
          </div>

          <div class="space-y-2.5 text-xs text-gray-300 leading-relaxed">
            <div class="p-3 bg-black/30 rounded-lg border border-gray-800">
              <span class="text-amber-400 font-bold block mb-1">${isEn ? '💡 Pattern Essence:' : '💡 格局本义：'}</span>
              <p>${isEn ? ((zpPattern.vernacular && zpPattern.vernacular.translationEn) || zpPattern.meaning) : zpPattern.meaning}</p>
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-emerald-900/30">
              <span class="text-emerald-400 font-bold block mb-1">${isEn ? '✓ Formation Conditions (Factors for Great Success):' : '✓ 成格条件（何为大贵）：'}</span>
              <p>${isEn ? (zpPattern.conditionsEn || zpPattern.conditions) : zpPattern.conditions}</p>
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-rose-900/30">
              <span class="text-rose-400 font-bold block mb-1">${isEn ? '✗ Breaking Defects (Factors for Failure):' : '✗ 破格之患（何为大凶）：'}</span>
              <p>${isEn ? (zpPattern.defectsEn || zpPattern.defects) : zpPattern.defects}</p>
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-indigo-900/30">
              <span class="text-indigo-400 font-bold block mb-1">${isEn ? '🛡️ Remedies (Turning Failure into Success):' : '🛡️ 救应法门（化败为成）：'}</span>
              <p>${isEn ? (zpPattern.remediesEn || zpPattern.remedies) : zpPattern.remedies}</p>
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-gray-800">
              <span class="text-gray-400 font-bold block mb-1">${isEn ? '🎯 Practical Luck Cycle Rules:' : '🎯 实战行运法则：'}</span>
              <p>${isEn ? (zpPattern.usageEn || zpPattern.usage) : zpPattern.usage}</p>
            </div>
            ${zpPattern.vernacular ? `
              <div class="p-3.5 bg-purple-950/20 rounded-xl border border-purple-500/30 space-y-2.5 mt-2">
                <div class="flex items-center space-x-2 text-xs font-bold text-purple-300 font-serif-sc">
                  <span>📖</span>
                  <span>${isEn ? 'Modern Vernacular Interpretation & Strategic Blueprint' : '现代白话通俗精析与人生战略蓝图'}</span>
                </div>
                <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800 text-xs">
                  <span class="text-purple-300 font-bold block mb-1">${isEn ? '💡 Modern Psychological & Behavioral Interpretation:' : '💡 现代心性与行为模式深度通俗解读：'}</span>
                  <p class="text-gray-200 leading-relaxed">${isEn ? (zpPattern.vernacular.translationEn || zpPattern.vernacular.translation) : zpPattern.vernacular.translation}</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <div class="p-2.5 bg-black/30 rounded-lg border border-emerald-900/30">
                    <span class="text-emerald-400 font-bold block mb-1">🎯 ${isEn ? 'Real-World Success Paradigm:' : '现代社会成功范式与晋升通路：'}</span>
                    <p class="text-gray-300 leading-relaxed">${isEn ? (zpPattern.vernacular.paradigmEn || zpPattern.vernacular.paradigm) : zpPattern.vernacular.paradigm}</p>
                  </div>
                  <div class="p-2.5 bg-black/30 rounded-lg border border-rose-900/30">
                    <span class="text-rose-400 font-bold block mb-1">⚠️ ${isEn ? 'Defect Warning & Failure Traps:' : '破格预警与现代职场/生活避坑：'}</span>
                    <p class="text-gray-300 leading-relaxed">${isEn ? (zpPattern.vernacular.defectWarningEn || zpPattern.vernacular.defectWarning) : zpPattern.vernacular.defectWarning}</p>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    // 4. 《滴天髓》 Auto Matching
    const dtsStemData = DiTianSuiDB.getForDayMaster(dayMaster);
    const dtsContainer = document.getElementById('ditiansuiAutoResult');
    if (dtsStemData) {
      const favorableTags = dtsStemData.favorable.map(f => `<span class="px-2 py-0.5 text-xs rounded bg-emerald-900/30 text-emerald-300 border border-emerald-700/30 mr-1.5 mb-1 inline-block">${f}</span>`).join('');
      const tabooTags = dtsStemData.taboos.map(t => `<span class="px-2 py-0.5 text-xs rounded bg-rose-900/30 text-rose-300 border border-rose-700/30 mr-1.5 mb-1 inline-block">${t}</span>`).join('');

      dtsContainer.innerHTML = `
        <div class="bg-card p-5 rounded-xl border border-border-color shadow-lg space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-700/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal">${isEn ? 'Di Tian Sui' : '滴天髓'}</span>
              <h3 class="text-lg font-bold text-emerald-400 font-serif-sc">${isEn ? 'Heavenly Stem Treatise' : '天干论'} · ${dtsStemData.name} (${dtsStemData.nature})</h3>
            </div>
            <span class="text-xs text-gray-400">${isEn ? 'Jing Tu / Comm. Liu Bowen & Ren Tieqiao' : '京图原著 · 刘伯温/任铁樵注'}</span>
          </div>

          <div class="bg-emerald-950/20 border-l-4 border-emerald-500 p-3.5 rounded-r">
            <p class="text-xs text-emerald-300/80 mb-1 font-medium">${isEn ? 'Di Tian Sui Canonical Secret:' : '滴天髓原著真诀：'}</p>
            <p class="text-base font-serif-sc text-emerald-100 tracking-wider leading-relaxed font-semibold">
              “${dtsStemData.poem}”
            </p>
          </div>

          <div class="text-sm text-gray-300 space-y-3 leading-relaxed">
            <p><span class="text-emerald-400 font-medium">${isEn ? '【Ren Tieqiao Master Commentary】' : '【任铁樵名家精释】'}</span>${dtsStemData.classic_commentary}</p>
            <p><span class="text-gray-400 font-medium">${isEn ? '【Modern Interpretation】' : '【现代白话详解】'}</span>${dtsStemData.vernacular}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-gray-700/30">
            <div>
              <span class="text-xs text-emerald-400 font-semibold block mb-1.5">${isEn ? '✓ Favorable Climate & Supports:' : '✓ 喜见调候与辅佐：'}</span>
              <div>${favorableTags}</div>
            </div>
            <div>
              <span class="text-xs text-rose-400 font-semibold block mb-1.5">${isEn ? '✗ Taboos & Flaws:' : '✗ 忌讳与破格之患：'}</span>
              <div>${tabooTags}</div>
            </div>
          </div>

          ${dtsStemData.modern_manifestation ? `
            <div class="p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3 mt-3">
              <div class="flex items-center space-x-2 text-sm font-bold text-emerald-300 font-serif-sc">
                <span>🏢 ${isEn ? 'Modern Societal Equivalents & Professional Prototypes' : '五行干支现代落地 · 社会实体与精英原型'}</span>
              </div>
              
              <div class="p-3 bg-black/30 rounded-lg border border-gray-800 text-xs">
                <span class="text-emerald-400 font-bold block mb-1">💼 ${isEn ? 'Modern Societal Manifestations & Industry Prototypes:' : '现代社会实体与行业映射：'}</span>
                <p class="text-gray-300 leading-relaxed">${typeof dtsStemData.modern_manifestation === 'string' ? dtsStemData.modern_manifestation : JSON.stringify(dtsStemData.modern_manifestation)}</p>
              </div>

              ${dtsStemData.beneficial_lifestyle ? `
                <div class="p-3 bg-black/30 rounded-lg border border-emerald-900/40 text-xs space-y-1">
                  <span class="text-emerald-300 font-bold block mb-0.5">🌿 ${isEn ? 'Beneficial Life Patterns & Daily Disciplines (When Favorable):' : '对命主好时的具体形态与生活模式：'}</span>
                  <p class="text-gray-300 leading-relaxed">${dtsStemData.beneficial_lifestyle}</p>
                </div>
              ` : ''}

              ${dtsStemData.avoidance_taboos ? `
                <div class="p-3 bg-black/30 rounded-lg border border-rose-900/40 text-xs space-y-1">
                  <span class="text-rose-400 font-bold block mb-0.5">⚠️ ${isEn ? 'Modern Taboos, Flaws & Pitfalls to Avoid:' : '现代生活中的具体忌讳与防范禁忌：'}</span>
                  <p class="text-gray-300 leading-relaxed">${dtsStemData.avoidance_taboos}</p>
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    // 5. 《神峰通考》 Auto Matching
    const sfContainer = document.getElementById('shenfengAutoResult');
    if (sfContainer && typeof ShenFengDB !== 'undefined') {
      const diseaseMed = ShenFengDB.getDiseaseAndMedicine(res.bazi, res.vigor, res.brokenPatterns);
      const sculpt = ShenFengDB.getSculptingAnalysis(res.vigor);
      sfContainer.innerHTML = `
        <div class="bg-card p-5 rounded-xl border border-border-color shadow-lg space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-700/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal">${isEn ? 'Shen Feng Tong Kao' : '神峰通考'}</span>
              <h3 class="text-lg font-bold text-orange-400 font-serif-sc">${isEn ? 'Theory of Disease & Medicine' : '病药绝学与雕枯论'} · ${isEn ? diseaseMed.nameEn : diseaseMed.nameZh}</h3>
            </div>
            <span class="text-xs text-gray-400">${isEn ? 'Ming Dynasty · Zhang Shenfeng' : '明·张神峰著'}</span>
          </div>

          <div class="bg-orange-950/20 border-l-4 border-orange-500 p-3.5 rounded-r">
            <p class="text-xs text-orange-300/80 mb-1 font-medium">${isEn ? 'Zhang Shenfeng Core Maxim:' : '张神峰开山宗诀：'}</p>
            <p class="text-sm font-serif-sc text-orange-100 font-semibold leading-relaxed">
              ${isEn ? '“Greatness arises only where a grave Disease meets its perfect Medicine; without vulnerability, destiny lacks distinction. When the Disease is cured by the Medicine, supreme wealth and honor follow.”' : '“格格推详，以何为病，何者为药。有病方为贵，无伤不是奇。格中如去病，财禄两相随。”'}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-black/30 rounded-lg border border-rose-900/30 space-y-1">
              <span class="text-rose-400 font-bold block mb-1">⚠️ ${isEn ? 'Natal Core Disease / Bottleneck:' : '命局核心病灶（病）：'}</span>
              <p class="text-gray-300 leading-relaxed">${isEn ? diseaseMed.symptomEn : diseaseMed.symptomZh}</p>
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-emerald-900/30 space-y-1">
              <span class="text-emerald-400 font-bold block mb-1">💊 ${isEn ? 'Divine Antidote / Cure:' : '透关救应神药（药）：'}</span>
              <p class="text-gray-300 leading-relaxed">${isEn ? diseaseMed.medicineEn : diseaseMed.medicineZh}</p>
            </div>
          </div>

          <div class="p-3.5 bg-black/30 rounded-lg border border-gray-800 text-xs space-y-1.5">
            <span class="text-amber-300 font-bold block">📖 ${isEn ? 'Classical Analysis & Canonical Rationale:' : '古法考据与病药辨证：'}</span>
            <p class="text-gray-300 leading-relaxed">${isEn ? diseaseMed.rationaleEn : diseaseMed.rationaleZh}</p>
          </div>

          <div class="p-3.5 bg-orange-950/25 rounded-xl border border-orange-500/30 text-xs space-y-1.5">
            <span class="text-orange-300 font-bold block">⚡ ${isEn ? '20% High-Leverage Strategic Action (Pareto Principle):' : '帕累托20%关键破局行动总决：'}</span>
            <p class="text-gray-200 leading-relaxed">${isEn ? diseaseMed.modernStrategyEn : diseaseMed.modernStrategyZh}</p>
          </div>

          <div class="p-3 bg-black/20 rounded-lg border border-gray-800 text-xs space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-gray-300">${isEn ? 'Sculpting & Nurturing Analysis (Diao Ku Wang Ruo):' : '雕枯旺弱心法判词：'}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-orange-500/10 text-orange-300">${isEn ? (sculpt.categoryEn || sculpt.typeEn) : (sculpt.categoryZh || sculpt.typeZh)}</span>
            </div>
            <p class="text-gray-400 leading-relaxed">${isEn ? (sculpt.analysisEn || sculpt.adviceEn) : (sculpt.analysisZh || sculpt.adviceZh)}</p>
            ${(sculpt.genderDiffZh || sculpt.genderDiff) ? `
            <div class="pt-1.5 border-t border-gray-800 text-[11px] text-orange-300/90 leading-relaxed">
              <span class="font-bold text-orange-400">⚖️ ${isEn ? 'Gender Dynamics:' : '乾坤辨析：'}</span>
              ${isEn ? (sculpt.genderDiffEn || sculpt.genderDiff) : (sculpt.genderDiffZh || sculpt.genderDiff)}
            </div>` : ''}
          </div>
        </div>
      `;
    }

    // 6. 《玉照定真经》 Auto Matching
    const yzContainer = document.getElementById('yuzhaoAutoResult');
    if (yzContainer && typeof YuZhaoDB !== 'undefined') {
      const spouseReading = YuZhaoDB.getSpousePalaceReading(res.pillars.day.branch, res);
      const childrenReading = YuZhaoDB.getChildrenPalaceReading(res.pillars.hour.branch, res);
      const parentsReading = YuZhaoDB.getParentsPalaceReading(res.pillars.year.branch, res);
      yzContainer.innerHTML = `
        <div class="bg-card p-5 rounded-xl border border-border-color shadow-lg space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-700/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal">${isEn ? 'Yu Zhao Ding Zhen Jing' : '玉照定真经'}</span>
              <h3 class="text-lg font-bold text-cyan-400 font-serif-sc">${isEn ? 'Palace Genealogy & Relational Hologram' : '四柱宫位六亲直断全息透视'}</h3>
            </div>
            <span class="text-xs text-gray-400">${isEn ? 'Jin Dynasty · Guo Pu / Song · Xu Ziping' : '晋·郭璞著 / 宋·徐子平注'}</span>
          </div>

          <!-- Spouse Palace Reading -->
          <div class="p-3.5 bg-black/30 rounded-xl border border-rose-900/30 space-y-2 text-xs">
            <div class="flex items-center justify-between pb-1 border-b border-gray-800">
              <span class="font-bold text-rose-300 flex items-center gap-1.5">
                <span>💑</span>
                <span>${isEn ? 'Day Branch Spouse Palace:' : '日支夫妻宫直断：'}${res.pillars.day.branch} (${isEn ? spouseReading.archetypeEn : spouseReading.archetypeZh})</span>
              </span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-300 font-mono">${isEn ? 'Day Branch' : '日支配偶'}</span>
            </div>
            <p class="text-gray-300 leading-relaxed"><b class="text-gray-200">${isEn ? 'Partner Traits: ' : '伴侣特质：'}</b>${isEn ? spouseReading.traitsEn : spouseReading.traitsZh}</p>
            <p class="text-amber-200/90 leading-relaxed"><b class="text-amber-400">${isEn ? 'Clash Friction Caution: ' : '刑冲防范：'}</b>${isEn ? spouseReading.clashRiskEn : spouseReading.clashRiskZh}</p>
            <p class="text-emerald-300 leading-relaxed"><b class="text-emerald-400">${isEn ? 'Matrimonial Advice: ' : '护持锦囊：'}</b>${isEn ? spouseReading.adviceEn : spouseReading.adviceZh}</p>
            ${(spouseReading.genderDiffZh || spouseReading.genderDiff) ? `
            <div class="pt-1.5 border-t border-rose-900/40 text-[11px] text-rose-300/90 leading-relaxed">
              <span class="font-bold text-rose-400">⚖️ ${isEn ? 'Gender Dynamics:' : '乾坤辨析：'}</span>
              ${isEn ? (spouseReading.genderDiffEn || spouseReading.genderDiff) : (spouseReading.genderDiffZh || spouseReading.genderDiff)}
            </div>` : ''}
          </div>

          <!-- Children Palace Reading -->
          <div class="p-3.5 bg-black/30 rounded-xl border border-indigo-900/30 space-y-2 text-xs">
            <div class="flex items-center justify-between pb-1 border-b border-gray-800">
              <span class="font-bold text-indigo-300 flex items-center gap-1.5">
                <span>👶</span>
                <span>${isEn ? 'Hour Pillar Children Palace:' : '时柱子女时宿归宿：'}${res.pillars.hour.branch} (${isEn ? childrenReading.archetypeEn : childrenReading.archetypeZh})</span>
              </span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-300 font-mono">${isEn ? 'Hour Branch' : '时支帝座'}</span>
            </div>
            <p class="text-gray-300 leading-relaxed"><b class="text-gray-200">${isEn ? 'Talent & Potential: ' : '后嗣才干禀赋：'}</b>${isEn ? (childrenReading.traitsEn || childrenReading.talentEn) : (childrenReading.traitsZh || childrenReading.talentZh)}</p>
            <p class="text-indigo-200/90 leading-relaxed"><b class="text-indigo-400">${isEn ? 'Bond & Destiny: ' : '缘法晚景：'}</b>${isEn ? childrenReading.destinyEn : childrenReading.destinyZh}</p>
            <p class="text-emerald-300 leading-relaxed"><b class="text-emerald-400">${isEn ? 'Parenting Guidance: ' : '育嗣家训：'}</b>${isEn ? (childrenReading.parentingEn || childrenReading.guideEn) : (childrenReading.parentingZh || childrenReading.guideZh)}</p>
            ${(childrenReading.genderDiffZh || childrenReading.genderDiff) ? `
            <div class="pt-1.5 border-t border-indigo-900/40 text-[11px] text-indigo-300/90 leading-relaxed">
              <span class="font-bold text-indigo-400">⚖️ ${isEn ? 'Gender Dynamics:' : '乾坤辨析：'}</span>
              ${isEn ? (childrenReading.genderDiffEn || childrenReading.genderDiff) : (childrenReading.genderDiffZh || childrenReading.genderDiff)}
            </div>` : ''}
          </div>

          <!-- Parents Palace Reading -->
          <div class="p-3.5 bg-black/30 rounded-xl border border-amber-900/30 space-y-2 text-xs">
            <div class="flex items-center justify-between pb-1 border-b border-gray-800">
              <span class="font-bold text-amber-300 flex items-center gap-1.5">
                <span>🏡</span>
                <span>${isEn ? 'Year Pillar Ancestral Heritage:' : '年柱祖基与原生家庭传承：'}${res.pillars.year.branch} (${isEn ? parentsReading.heritageEn : parentsReading.heritageZh})</span>
              </span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300 font-mono">${isEn ? 'Year Branch' : '年支祖基'}</span>
            </div>
            <p class="text-gray-300 leading-relaxed"><b class="text-gray-200">${isEn ? 'Ancestral Blessing: ' : '祖荫福泽：'}</b>${isEn ? (parentsReading.familyTraditionEn || parentsReading.heritageEn) : (parentsReading.familyTraditionZh || parentsReading.heritageZh)}</p>
            <p class="text-cyan-200/90 leading-relaxed"><b class="text-cyan-400">${isEn ? 'Growth Trajectory: ' : '成长路径：'}</b>${isEn ? (parentsReading.growthPathEn || parentsReading.debtOrBlessingEn) : (parentsReading.growthPathZh || parentsReading.debtOrBlessingZh)}</p>
            <p class="text-emerald-300 leading-relaxed"><b class="text-emerald-400">${isEn ? 'Filial Alignment: ' : '孝亲立身：'}</b>${isEn ? parentsReading.filialAdviceEn : parentsReading.filialAdviceZh}</p>
            ${(parentsReading.genderDiffZh || parentsReading.genderDiff) ? `
            <div class="pt-1.5 border-t border-amber-900/40 text-[11px] text-amber-300/90 leading-relaxed">
              <span class="font-bold text-amber-400">⚖️ ${isEn ? 'Gender Dynamics:' : '乾坤辨析：'}</span>
              ${isEn ? (parentsReading.genderDiffEn || parentsReading.genderDiff) : (parentsReading.genderDiffZh || parentsReading.genderDiff)}
            </div>` : ''}
          </div>
        </div>
      `;
    }

    // 7. 《李虚中命书》 Auto Matching
    const lxzContainer = document.getElementById('lixuzhongAutoResult');
    if (lxzContainer && typeof LiXuZhongDB !== 'undefined') {
      const gender = (res.input && res.input.gender) || '乾造';
      const threePrimes = LiXuZhongDB.getThreePrimes(res, res.pillars.day.text, res.dayMaster, gender, res.pillars.day.naYin);
      const envResonance = LiXuZhongDB.getEnvironmentalResonance(res.dayMaster, res.climate);
      lxzContainer.innerHTML = `
        <div class="bg-card p-5 rounded-xl border border-border-color shadow-lg space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-700/40">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal">${isEn ? 'Li Xu Zhong Ming Shu' : '李虚中命书'}</span>
              <h3 class="text-lg font-bold text-teal-400 font-serif-sc">${isEn ? 'The Three Primes & Acoustic-Spatial Resonance' : '三元禄命身与地理场能交互'}</h3>
            </div>
            <span class="text-xs text-gray-400">${isEn ? 'Tang Dynasty · Li Xuzhong' : '唐·李虚中著'}</span>
          </div>

          <div class="bg-teal-950/20 border-l-4 border-teal-500 p-3.5 rounded-r">
            <p class="text-xs text-teal-300/80 mb-1 font-medium">${isEn ? 'Li Xuzhong Core Doctrine:' : '李虚中三元立命论：'}</p>
            <p class="text-sm font-serif-sc text-teal-100 font-semibold leading-relaxed">
              ${isEn ? '“Heavenly Prime is Rank (Lu), Earthly Prime is Destiny (Ming), Human Prime is Body (Shen). When the Three Primes resonate in mutual generation, compound honor and longevity are assured.”' : '“天元为禄，以日干论名位爵秩；地元为命，以日支论寿夭荣枯；人元为身，以纳音论气象才干。三元相生，百禄并臻。”'}
            </p>
          </div>

          <!-- Three Primes Analysis -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="p-3 bg-black/30 rounded-lg border border-amber-900/30 space-y-1.5 flex flex-col justify-between">
              <div>
                <span class="text-amber-300 font-bold block">👑 ${isEn ? 'Heavenly Prime (Rank):' : '天元为禄（公信威望）：'}</span>
                <div class="text-[11px] text-amber-200 font-medium">${threePrimes.heavenlyPrime.stem || res.dayMaster} (${isEn ? (threePrimes.heavenlyPrime.natureEn || 'Heavenly Rank') : (threePrimes.heavenlyPrime.natureZh || '天元为禄')})</div>
                <p class="text-gray-300 leading-relaxed mt-1">${isEn ? (threePrimes.heavenlyPrime.meaningEn || threePrimes.heavenLuEn || '') : (threePrimes.heavenlyPrime.meaningZh || threePrimes.heavenLuZh || '')}</p>
              </div>
              ${(threePrimes.heavenlyPrime.genderDiffZh || threePrimes.heavenlyPrime.genderDiff) ? `
              <div class="pt-2 border-t border-amber-900/40 text-[10.5px] text-amber-300/90 leading-relaxed">
                <span class="font-bold text-amber-400">⚖️ ${isEn ? 'Gender Dynamics:' : '乾坤辨析：'}</span>
                ${isEn ? (threePrimes.heavenlyPrime.genderDiffEn || threePrimes.heavenlyPrime.genderDiff) : (threePrimes.heavenlyPrime.genderDiffZh || threePrimes.heavenlyPrime.genderDiff)}
              </div>` : ''}
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-emerald-900/30 space-y-1.5 flex flex-col justify-between">
              <div>
                <span class="text-emerald-300 font-bold block">🌱 ${isEn ? 'Earthly Prime (Destiny):' : '地元为命（寿夭底盘）：'}</span>
                <div class="text-[11px] text-emerald-200 font-medium">${threePrimes.earthlyPrime.branch || res.pillars.day.branch} (${isEn ? (threePrimes.earthlyPrime.vitalityEn || 'Earthly Vitality') : (threePrimes.earthlyPrime.vitalityZh || '地元为命')})</div>
                <p class="text-gray-300 leading-relaxed mt-1">${isEn ? (threePrimes.earthlyPrime.meaningEn || threePrimes.earthMingEn || '') : (threePrimes.earthlyPrime.meaningZh || threePrimes.earthMingZh || '')}</p>
              </div>
              ${(threePrimes.earthlyPrime.genderDiffZh || threePrimes.earthlyPrime.genderDiff) ? `
              <div class="pt-2 border-t border-emerald-900/40 text-[10.5px] text-emerald-300/90 leading-relaxed">
                <span class="font-bold text-emerald-400">⚖️ ${isEn ? 'Gender Dynamics:' : '乾坤辨析：'}</span>
                ${isEn ? (threePrimes.earthlyPrime.genderDiffEn || threePrimes.earthlyPrime.genderDiff) : (threePrimes.earthlyPrime.genderDiffZh || threePrimes.earthlyPrime.genderDiff)}
              </div>` : ''}
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-cyan-900/30 space-y-1.5 flex flex-col justify-between">
              <div>
                <span class="text-cyan-300 font-bold block">🎵 ${isEn ? 'Human Prime (Body/NaYin):' : '人元为身（内才骨相）：'}</span>
                <div class="text-[11px] text-cyan-200 font-medium">${threePrimes.humanPrime.naYin || res.pillars.day.naYin} (${isEn ? (threePrimes.humanPrime.toneEn || 'Human Body/Tone') : (threePrimes.humanPrime.toneZh || '人元为身')})</div>
                <p class="text-gray-300 leading-relaxed mt-1">${isEn ? (threePrimes.humanPrime.meaningEn || threePrimes.humanShenEn || '') : (threePrimes.humanPrime.meaningZh || threePrimes.humanShenZh || '')}</p>
              </div>
              ${(threePrimes.humanPrime.genderDiffZh || threePrimes.humanPrime.genderDiff) ? `
              <div class="pt-2 border-t border-cyan-900/40 text-[10.5px] text-cyan-300/90 leading-relaxed">
                <span class="font-bold text-cyan-400">⚖️ ${isEn ? 'Gender Dynamics:' : '乾坤辨析：'}</span>
                ${isEn ? (threePrimes.humanPrime.genderDiffEn || threePrimes.humanPrime.genderDiff) : (threePrimes.humanPrime.genderDiffZh || threePrimes.humanPrime.genderDiff)}
              </div>` : ''}
            </div>
          </div>

          <!-- Spatial Environment Resonance -->
          <div class="p-3.5 bg-teal-950/20 rounded-xl border border-teal-500/30 space-y-2 text-xs">
            <div class="flex items-center justify-between pb-1 border-b border-gray-800">
              <span class="font-bold text-teal-300 flex items-center gap-1.5">
                <span>🌍</span>
                <span>${isEn ? 'Geographic Compass Direction & Modern Megacity Alignment:' : '五行地理方位与现代都市圈交互：'}${isEn ? (envResonance.directionEn || envResonance.idealGeographyEn) : (envResonance.directionZh || envResonance.idealGeographyZh)}</span>
              </span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-teal-500/10 text-teal-300">${isEn ? (envResonance.elementEn || envResonance.favorableElement) : (envResonance.elementZh || envResonance.favorableElement)}</span>
            </div>
            <p class="text-gray-300 leading-relaxed"><b class="text-teal-200">${isEn ? 'Recommended Metropolitan Clusters: ' : '契合现代核心都市群：'}</b>${isEn ? (envResonance.citiesEn || envResonance.targetCitiesEn) : (envResonance.citiesZh || envResonance.targetCitiesZh)}</p>
            <p class="text-emerald-300 leading-relaxed"><b class="text-emerald-400">${isEn ? 'Workspace & Spatial Layout: ' : '居处办公能量场布置：'}</b>${isEn ? (envResonance.fengshuiEn || envResonance.workspaceEnergyEn) : (envResonance.fengshuiZh || envResonance.workspaceEnergyZh)}</p>
            <p class="text-gray-300 leading-relaxed"><b class="text-amber-400">${isEn ? 'Macro Era Synergy: ' : '宏观时代周期红利：'}</b>${isEn ? (envResonance.macroTrendEn || envResonance.eraMacroTrendEn) : (envResonance.macroTrendZh || envResonance.eraMacroTrendZh)}</p>
          </div>
        </div>
      `;
    }
  }

  // Render Fortune & Luck Cycles (大运、流年、流月、流日 四阶全息推演与五柱同参)
  function renderLuckCycles(res) {
    if (typeof LuckEngine === 'undefined' || !currentLuckResult) return;
    const isEn = (currentLang === 'en');

    // 1. Meta Badges: Progression Direction & Start Age
    const progEl = document.getElementById('luckProgressionText');
    const startAgeEl = document.getElementById('luckStartAgeText');
    if (progEl && currentLuckResult.decadeMeta) {
      const m = currentLuckResult.decadeMeta;
      const dirText = m.direction === 1
        ? (isEn ? 'Forward (+10y)' : '顺行 (+10年/步)')
        : (isEn ? 'Backward (-10y)' : '逆行 (-10年/步)');
      const rawG = (res.input && res.input.gender) || res.gender || '乾造';
      const isM = (rawG === '乾造' || rawG === 'male' || rawG === 'Yang Male');
      const genderText = isM
        ? (isEn ? 'Yang Male' : '阳男')
        : (isEn ? 'Yin Female' : '阴女');
      progEl.textContent = `${genderText} · ${dirText}`;
    }
    if (startAgeEl && currentLuckResult.decadeMeta) {
      const m = currentLuckResult.decadeMeta;
      startAgeEl.textContent = isEn
        ? `Starts at Age ${m.nominalStartAge} (${m.startCalendarYear}) · ${m.diffDays}d ${m.diffHours}h to Term`
        : `${m.nominalStartAge}岁起运 (${m.startCalendarYear}年) · 出生后${m.diffDays}天${m.diffHours}时交节`;
    }

    // 2. Level 1: 10-Year Major Decades (大运)
    const decadeLabelEl = document.getElementById('currentSelectedDecadeLabel');
    const activeDecade = currentLuckResult.activeDecade || currentLuckResult.decades[selectedDecadeIdx] || currentLuckResult.decades[0];
    if (decadeLabelEl && activeDecade) {
      const godTranslated = I18N.getGod(activeDecade.stemGod, currentLang);
      decadeLabelEl.textContent = isEn
        ? `Selected: Decade ${activeDecade.index} · [${activeDecade.text}] (${godTranslated}) · Ages ${activeDecade.ageStart}-${activeDecade.ageEnd} (${activeDecade.yearStart}-${activeDecade.yearEnd})`
        : `已选大运：第${activeDecade.index}步 · 【${activeDecade.text}】(${godTranslated}) · ${activeDecade.ageSpanZh} (${activeDecade.yearSpanZh})`;
    }

    const decadesContainer = document.getElementById('decadesContainer');
    if (decadesContainer && currentLuckResult.decades) {
      decadesContainer.innerHTML = '';
      currentLuckResult.decades.forEach((d, idx) => {
        const isSelected = (idx === selectedDecadeIdx);
        const card = document.createElement('div');
        card.className = `p-2.5 rounded-xl border cursor-pointer transition-all duration-200 text-center flex flex-col justify-between space-y-1 ${
          isSelected
            ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-900/30 ring-1 ring-amber-500/50'
            : d.isActive
              ? 'bg-purple-950/30 border-purple-600/50 hover:border-purple-400'
              : 'bg-black/30 border-gray-800 hover:border-gray-600'
        }`;

        const stemGod = I18N.getGod(d.stemGod, currentLang);
        const nayin = I18N.getNaYin(d.naYin, currentLang);
        const f = d.fortune || LuckEngine.evaluateTransitFortune(res, d, 'decade');
        const isGood = (f.rating === 'good');
        const badgeLabel = isEn ? (isGood ? '🟢 Good' : '🔴 Caution') : (isGood ? '🟢 吉' : '🔴 慎');
        const badgeColor = isGood ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border-rose-500/40';

        card.innerHTML = `
          <div class="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-800/80 pb-1">
            <span>${isEn ? 'Decade ' : '第'}${d.index}${isEn ? '' : '步'}</span>
            <div class="flex items-center gap-1">
              ${d.isActive ? `<span class="px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-300 font-semibold">${isEn ? 'Active' : '当运'}</span>` : ''}
              <span class="px-1 py-0.2 rounded border text-[9px] font-bold ${badgeColor}">${badgeLabel}</span>
            </div>
          </div>
          <div class="py-1">
            <div class="text-base sm:text-lg font-serif-sc font-bold ${isSelected ? 'text-amber-300' : 'text-amber-200/90'}">
              ${d.stem}${d.branch}
            </div>
            <div class="text-[11px] text-purple-300 font-semibold truncate">${stemGod}</div>
          </div>
          <div class="pt-1 border-t border-gray-800/60 text-[10px] space-y-0.5 font-mono">
            <div class="text-emerald-400 font-bold">${isEn ? `Age ${d.ageStart}-${d.ageEnd}` : `${d.ageStart}~${d.ageEnd}岁`}</div>
            <div class="text-gray-400">${d.yearStart}~${d.yearEnd}</div>
            <div class="text-gray-500 text-[9.5px] truncate" title="${nayin}">${nayin}</div>
          </div>
        `;

        card.addEventListener('click', () => {
          selectedDecadeIdx = idx;
          selectedAnnualYear = d.yearStart;
          selectedFortuneCycle = 'decade';
          currentLuckResult = LuckEngine.calculateLuck(currentBaziResult, selectedAnnualYear, selectedMonthBranch, selectedDailyDate);
          renderLuckCycles(currentBaziResult);
        });

        decadesContainer.appendChild(card);
      });
    }

    // 3. Level 2: Annual Transit Years (流年)
    const annualLabelEl = document.getElementById('currentSelectedAnnualLabel');
    const activeAnnual = currentLuckResult.activeAnnual || (currentLuckResult.annuals && currentLuckResult.annuals[0]);
    let userBirthYear = 1990;
    if (res) {
      if (res.input) {
        if (typeof res.input.year === 'number' && !isNaN(res.input.year) && res.input.year > 0) userBirthYear = res.input.year;
        else if (typeof res.input.adjustedYear === 'number' && !isNaN(res.input.adjustedYear) && res.input.adjustedYear > 0) userBirthYear = res.input.adjustedYear;
      }
      if (!userBirthYear || userBirthYear === 1990) {
        if (typeof res.birthYear === 'number' && !isNaN(res.birthYear) && res.birthYear > 0) userBirthYear = res.birthYear;
        else if (res.solar && typeof res.solar.year === 'number' && !isNaN(res.solar.year) && res.solar.year > 0) userBirthYear = res.solar.year;
        else if (typeof res.year === 'number' && !isNaN(res.year) && res.year > 0) userBirthYear = res.year;
      }
    }
    if ((!userBirthYear || userBirthYear === 1990) && typeof document !== 'undefined') {
      const el = document.getElementById('birthDate');
      if (el && el.value) {
        const py = parseInt(el.value.split('-')[0], 10);
        if (!isNaN(py) && py > 1800) userBirthYear = py;
      }
    }

    if (annualLabelEl && activeAnnual) {
      const godTranslated = I18N.getGod(activeAnnual.stemGod, currentLang);
      const annualAge = (typeof activeAnnual.age === 'number' && !isNaN(activeAnnual.age)) ? activeAnnual.age : Math.max(0, activeAnnual.year - userBirthYear);
      annualLabelEl.textContent = isEn
        ? `Selected Year: ${activeAnnual.year} [${activeAnnual.text}] (${godTranslated}) · Age ${annualAge}`
        : `已选流年：${activeAnnual.year}年 · 【${activeAnnual.text}】(${godTranslated}) · ${annualAge}岁`;
    }

    const annualContainer = document.getElementById('annualContainer');
    if (annualContainer && currentLuckResult.annuals) {
      annualContainer.innerHTML = '';
      currentLuckResult.annuals.forEach(a => {
        const isSelected = (a.year === selectedAnnualYear);
        const card = document.createElement('div');
        card.className = `p-2 rounded-xl border cursor-pointer transition-all duration-200 text-center flex flex-col justify-between space-y-1 ${
          isSelected
            ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-900/30 ring-1 ring-indigo-500/50'
            : a.isSelected
              ? 'bg-blue-950/30 border-blue-600/50 hover:border-blue-400'
              : 'bg-black/30 border-gray-800 hover:border-gray-600'
        }`;

        const stemGod = I18N.getGod(a.stemGod, currentLang);
        const nayin = I18N.getNaYin(a.naYin, currentLang);
        const f = a.fortune || LuckEngine.evaluateTransitFortune(res, a, 'annual');
        const isGood = (f.rating === 'good');
        const badgeLabel = isEn ? (isGood ? '🟢 Good' : '🔴 Caution') : (isGood ? '🟢 吉' : '🔴 慎');
        const badgeColor = isGood ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border-rose-500/40';
        const aAge = (typeof a.age === 'number' && !isNaN(a.age)) ? a.age : Math.max(0, a.year - userBirthYear);

        card.innerHTML = `
          <div class="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-800/80 pb-0.5">
            <span class="font-mono text-indigo-300 font-bold">${a.year}</span>
            <div class="flex items-center gap-1">
              <span class="px-1 py-0.2 rounded border text-[9px] font-bold ${badgeColor}">${badgeLabel}</span>
              <span class="text-gray-400 font-mono">${aAge}${isEn ? 'yo' : '岁'}</span>
            </div>
          </div>
          <div class="py-1">
            <div class="text-base font-serif-sc font-bold ${isSelected ? 'text-amber-300' : 'text-amber-200/90'}">
              ${a.stem}${a.branch}
            </div>
            <div class="text-[10.5px] text-purple-300 font-semibold truncate">${stemGod}</div>
          </div>
          <div class="pt-0.5 border-t border-gray-800/60 text-[9.5px] text-gray-500 truncate" title="${nayin}">
            ${nayin}
          </div>
        `;

        card.addEventListener('click', () => {
          selectedAnnualYear = a.year;
          selectedFortuneCycle = 'annual';
          currentLuckResult = LuckEngine.calculateLuck(currentBaziResult, selectedAnnualYear, selectedMonthBranch, selectedDailyDate);
          renderLuckCycles(currentBaziResult);
        });

        annualContainer.appendChild(card);
      });
    }

    // 4. Level 3: 12 Solar Months (流月)
    const monthLabelEl = document.getElementById('currentSelectedMonthLabel');
    const activeMonth = currentLuckResult.activeMonth || (currentLuckResult.months && currentLuckResult.months[0]);
    if (monthLabelEl && activeMonth) {
      const termTitle = isEn ? activeMonth.solarTermEn : activeMonth.solarTermZh;
      const godTranslated = I18N.getGod(activeMonth.stemGod, currentLang);
      monthLabelEl.textContent = isEn
        ? `Selected Month: [${termTitle}] ${activeMonth.text} (${godTranslated})`
        : `已选流月：【${termTitle}】${activeMonth.text} (${godTranslated}) · 节令分野`;
    }

    const monthlyContainer = document.getElementById('monthlyContainer');
    if (monthlyContainer && currentLuckResult.months) {
      monthlyContainer.innerHTML = '';
      currentLuckResult.months.forEach(m => {
        const isSelected = (m.branch === selectedMonthBranch);
        const card = document.createElement('div');
        card.className = `p-2 rounded-xl border cursor-pointer transition-all duration-200 text-center flex flex-col justify-between space-y-1 ${
          isSelected
            ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-900/30 ring-1 ring-emerald-500/50'
            : m.isSelected
              ? 'bg-teal-950/30 border-teal-600/50 hover:border-teal-400'
              : 'bg-black/30 border-gray-800 hover:border-gray-600'
        }`;

        const termTitle = isEn ? m.solarTermEn : m.solarTermZh;
        const stemGod = I18N.getGod(m.stemGod, currentLang);
        const nayin = I18N.getNaYin(m.naYin, currentLang);
        const f = m.fortune || LuckEngine.evaluateTransitFortune(res, m, 'monthly');
        const isGood = (f.rating === 'good');
        const badgeLabel = isEn ? (isGood ? '🟢 Good' : '🔴 Caution') : (isGood ? '🟢 吉' : '🔴 慎');
        const badgeColor = isGood ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border-rose-500/40';

        card.innerHTML = `
          <div class="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-800/80 pb-0.5">
            <span class="text-emerald-300 font-bold font-serif-sc truncate">${termTitle}</span>
            <div class="flex items-center gap-1">
              <span class="px-1 py-0.2 rounded border text-[9px] font-bold ${badgeColor}">${badgeLabel}</span>
              <span class="font-mono text-gray-400 text-[9px]">${m.dateRangeZh}</span>
            </div>
          </div>
          <div class="py-1">
            <div class="text-base font-serif-sc font-bold ${isSelected ? 'text-amber-300' : 'text-amber-200/90'}">
              ${m.stem}${m.branch}
            </div>
            <div class="text-[10.5px] text-purple-300 font-semibold truncate">${stemGod}</div>
          </div>
          <div class="pt-0.5 border-t border-gray-800/60 text-[9.5px] text-gray-500 truncate" title="${nayin}">
            ${nayin}
          </div>
        `;

        card.addEventListener('click', () => {
          selectedMonthBranch = m.branch;
          selectedFortuneCycle = 'monthly';
          currentLuckResult = LuckEngine.calculateLuck(currentBaziResult, selectedAnnualYear, selectedMonthBranch, selectedDailyDate);
          renderLuckCycles(currentBaziResult);
        });

        monthlyContainer.appendChild(card);
      });
    }

    // 5. Level 4: Daily Luck & 5-Pillar Synergy Matrix
    const dailyInput = document.getElementById('luckDailyDatePicker');
    if (dailyInput) {
      dailyInput.value = selectedDailyDate;
      dailyInput.onchange = function() {
        if (this.value) {
          selectedDailyDate = this.value;
          selectedFortuneCycle = 'daily';
          const parts = selectedDailyDate.split('-').map(Number);
          if (parts[0]) selectedAnnualYear = parts[0];
          currentLuckResult = LuckEngine.calculateLuck(currentBaziResult, selectedAnnualYear, selectedMonthBranch, selectedDailyDate);
          renderLuckCycles(currentBaziResult);
        }
      };
    }
    const todayBtn = document.getElementById('luckTodayBtn');
    if (todayBtn) {
      todayBtn.onclick = function() {
        const now = new Date();
        selectedDailyDate = now.toISOString().split('T')[0];
        selectedAnnualYear = now.getFullYear();
        selectedFortuneCycle = 'daily';
        currentLuckResult = LuckEngine.calculateLuck(currentBaziResult, selectedAnnualYear, selectedMonthBranch, selectedDailyDate);
        renderLuckCycles(currentBaziResult);
      };
    }

    // 5-Pillar Alignment Matrix Table
    const matrixBody = document.getElementById('fivePillarsMatrixBody');
    if (matrixBody) {
      const branchHiddenMap = {
        '子': ['癸'], '丑': ['己', '癸', '辛'], '寅': ['甲', '丙', '戊'],
        '卯': ['乙'], '辰': ['戊', '乙', '癸'], '巳': ['丙', '庚', '戊'],
        '午': ['丁', '己'], '未': ['己', '丁', '乙'], '申': ['庚', '壬', '戊'],
        '酉': ['辛'], '戌': ['戊', '辛', '丁'], '亥': ['壬', '甲']
      };

      const pYear = res.pillars.year;
      const pMonth = res.pillars.month;
      const pDay = res.pillars.day;
      const pHour = res.pillars.hour;
      const pDecade = currentLuckResult.activeDecade || { stem: '--', branch: '--', stemGod: '--', naYin: '--' };
      const pAnnual = currentLuckResult.activeAnnual || { stem: '--', branch: '--', stemGod: '--', naYin: '--' };
      const pMonthly = currentLuckResult.activeMonth || { stem: '--', branch: '--', stemGod: '--', naYin: '--' };
      const pDaily = currentLuckResult.daily || { stem: '--', branch: '--', stemGod: '--', naYin: '--' };

      const getHiddenStemsStr = (p) => {
        if (!p) return '--';
        const list = p.hidden || p.hiddenStems || [];
        return list.map(h => (typeof h === 'object' && h ? h.stem : h)).join(' ') || '--';
      };

      const allCols = [
        {
          label: isEn ? 'Natal Year' : '本命年柱',
          stem: pYear.stem,
          branch: pYear.branch,
          god: pYear.stemGod,
          hidden: getHiddenStemsStr(pYear),
          nayin: pYear.naYin,
          cellCls: ''
        },
        {
          label: isEn ? 'Natal Month' : '本命月柱',
          stem: pMonth.stem,
          branch: pMonth.branch,
          god: pMonth.stemGod,
          hidden: getHiddenStemsStr(pMonth),
          nayin: pMonth.naYin,
          cellCls: ''
        },
        {
          label: isEn ? 'Natal Day' : '本命日柱',
          stem: pDay.stem,
          branch: pDay.branch,
          god: isEn ? 'Self (Day Master)' : '日主 (元神)',
          hidden: getHiddenStemsStr(pDay),
          nayin: pDay.naYin,
          cellCls: 'bg-amber-950/20 text-amber-300 font-bold'
        },
        {
          label: isEn ? 'Natal Hour' : '本命时柱',
          stem: pHour.stem,
          branch: pHour.branch,
          god: pHour.stemGod,
          hidden: getHiddenStemsStr(pHour),
          nayin: pHour.naYin,
          cellCls: ''
        },
        {
          label: isEn ? 'Decade Pillar' : '大运柱',
          stem: pDecade.stem,
          branch: pDecade.branch,
          god: pDecade.stemGod,
          hidden: (branchHiddenMap[pDecade.branch] || []).join(' '),
          nayin: pDecade.naYin,
          cellCls: 'bg-purple-950/20 text-purple-300 border-l border-r border-purple-800/30'
        },
        {
          label: isEn ? 'Annual Pillar' : '流年柱',
          stem: pAnnual.stem,
          branch: pAnnual.branch,
          god: pAnnual.stemGod,
          hidden: (branchHiddenMap[pAnnual.branch] || []).join(' '),
          nayin: pAnnual.naYin,
          cellCls: 'bg-indigo-950/20 text-indigo-300 border-r border-indigo-800/30'
        },
        {
          label: isEn ? 'Monthly Pillar' : '流月柱',
          stem: pMonthly.stem,
          branch: pMonthly.branch,
          god: pMonthly.stemGod,
          hidden: (branchHiddenMap[pMonthly.branch] || []).join(' '),
          nayin: pMonthly.naYin,
          cellCls: 'bg-emerald-950/20 text-emerald-300 border-r border-emerald-800/30'
        },
        {
          label: isEn ? 'Daily Pillar' : '流日柱',
          stem: pDaily.stem,
          branch: pDaily.branch,
          god: pDaily.stemGod,
          hidden: (branchHiddenMap[pDaily.branch] || []).join(' '),
          nayin: pDaily.naYin,
          cellCls: 'bg-rose-950/20 text-rose-300'
        }
      ];

      // Build 5 Dimensions Rows
      const rows = [
        {
          dimName: isEn ? 'Heavenly Stem' : '天干',
          cells: allCols.map(c => `
            <td class="py-2.5 px-3 font-serif-sc text-base font-bold ${c.cellCls}">
              ${c.stem}
              ${isEn && c.stem !== '--' ? `<span class="block text-[10px] font-sans font-normal text-gray-400">(${I18N.getStem(c.stem, 'en')})</span>` : ''}
            </td>
          `).join('')
        },
        {
          dimName: isEn ? 'Earthly Branch' : '地支',
          cells: allCols.map(c => `
            <td class="py-2.5 px-3 font-serif-sc text-base font-bold ${c.cellCls}">
              ${c.branch}
              ${isEn && c.branch !== '--' ? `<span class="block text-[10px] font-sans font-normal text-gray-400">(${I18N.getBranch(c.branch, 'en')})</span>` : ''}
            </td>
          `).join('')
        },
        {
          dimName: isEn ? 'Ten God' : '十神 (相对日主)',
          cells: allCols.map(c => `
            <td class="py-2 px-3 text-xs font-semibold ${c.cellCls}">
              ${I18N.getGod(c.god, currentLang)}
            </td>
          `).join('')
        },
        {
          dimName: isEn ? 'Hidden Stems' : '支中藏干',
          cells: allCols.map(c => `
            <td class="py-1.5 px-3 text-xs text-gray-300 ${c.cellCls}">
              ${c.hidden || '--'}
            </td>
          `).join('')
        },
        {
          dimName: isEn ? 'Melodic (Na Yin)' : '纳音五行',
          cells: allCols.map(c => `
            <td class="py-2 px-3 text-[11px] text-gray-400 ${c.cellCls}">
              ${I18N.getNaYin(c.nayin, currentLang)}
            </td>
          `).join('')
        }
      ];

      matrixBody.innerHTML = rows.map(r => `
        <tr>
          <td class="py-2 px-3 text-left font-bold text-gray-400 bg-[#171922] whitespace-nowrap">${r.dimName}</td>
          ${r.cells}
        </tr>
      `).join('');
    }

    // 6. Astrological Clashes, Combinations & Tactical Guidance
    const interactContainer = document.getElementById('luckInteractionsContainer');
    if (interactContainer && currentLuckResult.interactions) {
      const badgeTitle = isEn ? '🌌 5-Pillar Synergy · Transits & Natal Clashes / Harmonies' : '🌌 岁运同参 · 刑冲合害交感综评与行运指南';
      interactContainer.innerHTML = `
        <div class="flex items-center justify-between pb-2 border-b border-gray-800">
          <span class="text-xs font-bold text-amber-300 font-serif-sc">${badgeTitle}</span>
          <span class="text-[10px] text-gray-400 font-mono">${currentLuckResult.interactions.length} ${isEn ? 'Interactions Evaluated' : '项流转交感'}</span>
        </div>
        <div class="space-y-2 pt-1">
          ${currentLuckResult.interactions.map(it => {
            const isDanger = it.severity === 'critical' || it.severity === 'high';
            const isHarmony = it.severity === 'positive';
            const borderCls = isDanger ? 'border-rose-600/50 bg-rose-950/20' : isHarmony ? 'border-emerald-600/50 bg-emerald-950/20' : 'border-gray-800 bg-black/40';
            const titleCls = isDanger ? 'text-rose-300' : isHarmony ? 'text-emerald-300' : 'text-blue-300';
            const title = isEn ? it.titleEn : it.titleZh;
            const desc = isEn ? it.descEn : it.descZh;

            return `
              <div class="p-2.5 rounded-lg border ${borderCls} space-y-1 text-xs">
                <div class="flex items-center justify-between font-bold ${titleCls}">
                  <span>${title}</span>
                  <span class="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded border ${isDanger ? 'border-rose-500/40 text-rose-300' : isHarmony ? 'border-emerald-500/40 text-emerald-300' : 'border-gray-700 text-gray-400'}">${it.type}</span>
                </div>
                <p class="text-gray-300 text-[11px] leading-relaxed">${desc}</p>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 7. Render In-Depth Transit Fortune Detail Card
    renderTransitFortuneDetail(res, currentLuckResult);

    // 8. Render Lifelong Chrono-Navigator (百岁运势时空罗盘)
    if (currentLuckResult && currentLuckResult.timeline && typeof renderChronoNavigator === 'function') {
      renderChronoNavigator(currentLuckResult.timeline, res);
    }

    // 9. Render Current Year & Season Operational Playbook (当季/本年现实破局罗盘)
    renderOperationalPlaybook(res, currentLuckResult, isEn);

    // 10. Render Geographic & Ecological Resonance (地理方位与组织生态匹配仪)
    renderEcologicalResonance(res, currentLuckResult, isEn);

    // 11. Render Time Dynamics & Macro-Energy 5-Tier Master Report (时间动力学与宏观能量五阶递进战报)
    renderTimeDynamicsReport(res, currentLuckResult, isEn);

    // 12. Render 14-Character Dynamic Energy Synthesis (十四字时空全息能量统揽)
    render14CharEnergySynthesis(res, currentLuckResult, isEn);
  }

  // Render In-Depth Fortune Evaluation, Meaning, Pitfalls (if Good), Taboos (if Bad), and Strategy
  function renderTransitFortuneDetail(res, luckRes) {
    const detailBody = document.getElementById('fortuneDetailBody');
    const badgeEl = document.getElementById('fortuneActiveBadge');
    if (!detailBody || !luckRes) return;
    const isEn = (currentLang === 'en');

    // Update active sub-tab styling
    const tabBtns = document.querySelectorAll('.fortune-tab-btn');
    tabBtns.forEach(btn => {
      const target = btn.getAttribute('data-target');
      if (target === selectedFortuneCycle) {
        btn.classList.add('active');
        btn.classList.remove('text-gray-400');
      } else {
        btn.classList.remove('active');
        btn.classList.add('text-gray-400');
      }
    });

    // Select target pillar according to selectedFortuneCycle
    let targetPillar, cycleTitle, cycleDesc;
    if (selectedFortuneCycle === 'annual') {
      targetPillar = luckRes.activeAnnual || (luckRes.annuals && luckRes.annuals[0]);
      cycleTitle = isEn ? 'Annual Transit' : '流年太岁';
      cycleDesc = isEn ? `Year ${targetPillar.year} · Age ${targetPillar.age}` : `${targetPillar.year}年太岁 · 虚岁${targetPillar.age}岁`;
    } else if (selectedFortuneCycle === 'monthly') {
      targetPillar = luckRes.activeMonth || (luckRes.months && luckRes.months[0]);
      cycleTitle = isEn ? 'Solar Month' : '节令流月';
      const term = isEn ? (targetPillar.solarTermEn || targetPillar.solarTermZh) : targetPillar.solarTermZh;
      cycleDesc = isEn ? `Solar Term: [${term}] (${targetPillar.dateRangeZh})` : `节令【${term}】(${targetPillar.dateRangeZh})`;
    } else if (selectedFortuneCycle === 'daily') {
      targetPillar = luckRes.daily;
      cycleTitle = isEn ? 'Transit Day' : '流日精微';
      cycleDesc = isEn ? `Date: ${targetPillar.dateString}` : `${targetPillar.dateString} 精微流日`;
    } else {
      selectedFortuneCycle = 'decade';
      targetPillar = luckRes.activeDecade || (luckRes.decades && luckRes.decades[selectedDecadeIdx]) || luckRes.decades[0];
      cycleTitle = isEn ? '10-Year Major Decade' : '十年大运';
      cycleDesc = isEn ? `Decade ${targetPillar.index} · Ages ${targetPillar.ageStart}-${targetPillar.ageEnd} (${targetPillar.yearStart}-${targetPillar.yearEnd})` : `第${targetPillar.index}步大运 · ${targetPillar.ageSpanZh} (${targetPillar.yearSpanZh})`;
    }

    if (!targetPillar) return;

    const fortune = targetPillar.fortune || LuckEngine.evaluateTransitFortune(res, targetPillar, selectedFortuneCycle);
    const isGood = (fortune.rating === 'good');

    // Update active badge in header
    if (badgeEl) {
      badgeEl.className = `text-[10px] px-2.5 py-0.5 rounded-full font-mono font-bold border ${
        isGood
          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
          : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
      }`;
      badgeEl.textContent = isEn ? fortune.statusEn : fortune.statusZh;
    }

    const stemGodTranslated = I18N.getGod(targetPillar.stemGod, currentLang);
    const naYinTranslated = I18N.getNaYin(targetPillar.naYin, currentLang);

    detailBody.innerHTML = `
      <!-- Transit Overview Header Bar -->
      <div class="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-black/40 border border-gray-800">
        <div class="flex items-center space-x-3">
          <div class="px-3 py-1.5 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-900/40 border border-amber-500/40 text-center">
            <span class="text-base font-serif-sc font-bold text-amber-200">${targetPillar.stem}${targetPillar.branch}</span>
            <span class="block text-[9.5px] text-amber-400 font-mono">${targetPillar.stemElement || ''}${targetPillar.branchElement || ''}</span>
          </div>
          <div>
            <div class="text-xs font-bold text-gray-200 flex items-center gap-2">
              <span>${cycleTitle}</span>
              <span class="text-purple-300 font-medium">【${stemGodTranslated}】</span>
              <span class="text-gray-400 text-[11px] font-normal">(${naYinTranslated})</span>
            </div>
            <div class="text-[11px] text-gray-400 mt-0.5 font-mono">${cycleDesc}</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-md text-xs font-bold border ${
            isGood
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
          }">
            ${isEn ? fortune.statusEn : fortune.statusZh}
          </span>
        </div>
      </div>

      <!-- Deep Meaning & Core Lesson -->
      <div class="p-3.5 rounded-xl border border-blue-500/30 bg-blue-950/15 space-y-1.5">
        <div class="flex items-center space-x-2 text-blue-300 text-xs font-bold">
          <span>📖</span>
          <span>${isEn ? 'Essence Meaning & Core Lessons' : '气象本义与深层课题'}</span>
        </div>
        <p class="text-xs text-gray-200 leading-relaxed pl-6">
          ${isEn ? fortune.meaningEn : fortune.meaningZh}
        </p>
      </div>

      <!-- Conditional Block: Pitfalls (if Good) vs Taboos (if Bad) -->
      ${
        isGood
          ? `
          <div class="p-3.5 rounded-xl border border-amber-500/40 bg-amber-950/20 space-y-1.5">
            <div class="flex items-center space-x-2 text-amber-300 text-xs font-bold">
              <span>⚠️</span>
              <span>${isEn ? 'Aspects That Could Go Wrong (Pitfalls in Good Fortune)' : '吉中防患 · 居安思危 (吉运需防隐忧)'}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-normal border border-amber-500/30">${isEn ? 'Crucial Caution' : '吉运必读'}</span>
            </div>
            <p class="text-xs text-amber-100/90 leading-relaxed pl-6">
              ${isEn ? fortune.pitfallsEn : fortune.pitfallsZh}
            </p>
          </div>
          `
          : `
          <div class="p-3.5 rounded-xl border border-rose-500/50 bg-rose-950/25 space-y-1.5">
            <div class="flex items-center space-x-2 text-rose-300 text-xs font-bold">
              <span>🛑</span>
              <span>${isEn ? 'Strict Taboos (What NOT to Do in Challenging Transits)' : '避坑戒律 · 绝对切勿作为 (凶阻运重戒)'}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 font-normal border border-rose-500/30">${isEn ? 'Strict Taboos' : '切忌妄动'}</span>
            </div>
            <p class="text-xs text-rose-100/90 leading-relaxed pl-6 font-medium">
              ${isEn ? fortune.taboosEn : fortune.taboosZh}
            </p>
          </div>
          `
      }

      <!-- Action Strategy & Practical Alignment Guidance -->
      <div class="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-950/15 space-y-1.5">
        <div class="flex items-center space-x-2 text-emerald-300 text-xs font-bold">
          <span>🎯</span>
          <span>${isEn ? 'Tactical Action & Realignment' : '实操攻略与行运法门'}</span>
        </div>
        <p class="text-xs text-emerald-100/90 leading-relaxed pl-6">
          ${isEn ? fortune.guidanceEn : fortune.guidanceZh}
        </p>
      </div>

      <!-- Adversity Breakdown & Classical Origin Annotations (六大灾变术语深度注解与防御指南) -->
      ${fortune.adversityBreakdown && fortune.adversityBreakdown.sources && fortune.adversityBreakdown.sources.length > 0 ? `
        <div class="p-3.5 rounded-xl border border-rose-500/30 bg-rose-950/20 space-y-2.5">
          <div class="flex items-center justify-between border-b border-rose-500/20 pb-1.5">
            <div class="flex items-center space-x-2 text-rose-300 text-xs font-bold font-serif-sc">
              <span>🛡️</span>
              <span>${isEn ? (fortune.adversityBreakdown.titleEn || 'Classical Origin & Defense Protocol for Life Adversities') : (fortune.adversityBreakdown.titleZh || '六大不利与灾祸术语深度注解与防御指南')}</span>
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-200 border border-rose-500/30">
              ${isEn ? 'Origin & Remediation' : '考据注译 · 防御法门'}
            </span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
            ${fortune.adversityBreakdown.sources.map(item => `
              <div class="p-3 bg-black/40 rounded-lg border border-rose-900/40 text-xs space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-rose-300 font-serif-sc">${item.icon || '⚠️'} ${isEn ? (item.termEn || item.type) : (item.termZh || item.type)}</span>
                  <span class="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-300 font-mono">${isEn ? (item.typeEn || item.type) : (item.typeZh || item.type)}</span>
                </div>
                <div class="text-[11px] text-amber-300/90 font-serif-sc">
                  <span class="text-gray-400 font-normal">${isEn ? 'Classical Source: ' : '典籍原旨：'}</span>${isEn ? (item.originEn || item.originZh || item.origin) : (item.originZh || item.origin)}
                </div>
                <div class="text-[11px] text-gray-300 leading-relaxed">
                  <span class="text-rose-400 font-medium">${isEn ? 'Manifestation: ' : '应象表征：'}</span>${isEn ? (item.manifestationEn || item.manifestationZh || item.manifestation) : (item.manifestationZh || item.manifestation)}
                </div>
                <div class="text-[11px] text-emerald-300 leading-relaxed pt-1 border-t border-gray-800/60">
                  <span class="text-emerald-400 font-medium">${isEn ? 'Defense Strategy: ' : '实战化解：'}</span>${isEn ? (item.defenseEn || item.defenseZh || item.defense) : (item.defenseZh || item.defense)}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;
  }

  // 🧭 Current Year & Season Operational Playbook Renderer (当季/本年现实破局罗盘)
  function renderOperationalPlaybook(res, luckRes, isEn) {
    const container = document.getElementById('operationalPlaybookContainer');
    if (!container) return;
    if (!luckRes || !luckRes.operationalPlaybook) {
      container.innerHTML = `
        <div class="p-6 text-center text-gray-400">
          <span class="text-2xl block mb-2">🧭</span>
          <p>${isEn ? 'Please calculate luck cycles to generate the Operational Playbook.' : '请先进行岁运推演，以生成当季与本年现实破局罗盘。'}</p>
        </div>
      `;
      return;
    }

    const op = luckRes.operationalPlaybook;
    container.innerHTML = '';

    // Sub-tab Navigation
    const tabsWrapper = document.createElement('div');
    tabsWrapper.className = 'flex flex-wrap items-center gap-2 border-b border-gray-800/80 pb-2.5';
    const tabs = [
      { id: 'mainline', labelZh: '🎯 年度核心主线', labelEn: '🎯 Strategic Mainline' },
      { id: 'seasons', labelZh: '🌊 四季节律能量表', labelEn: '🌊 Seasonal Energy Tides' },
      { id: 'safeguards', labelZh: '🛡️ 即时决策防火墙', labelEn: '🛡️ Decision Safeguards' }
    ];

    tabs.forEach(t => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isActive = (selectedPlaybookTab === t.id);
      btn.className = `px-3.5 py-1.5 text-xs rounded-xl font-serif-sc font-semibold transition border cursor-pointer ${
        isActive
          ? 'bg-amber-600/30 text-amber-300 border-amber-500/60 shadow-md shadow-amber-950/40'
          : 'bg-black/40 text-gray-400 border-gray-800 hover:text-gray-200 hover:border-gray-700'
      }`;
      btn.textContent = isEn ? t.labelEn : t.labelZh;
      btn.addEventListener('click', () => {
        selectedPlaybookTab = t.id;
        renderOperationalPlaybook(res, luckRes, isEn);
      });
      tabsWrapper.appendChild(btn);
    });
    container.appendChild(tabsWrapper);

    // Tab 1: Strategic Mainline
    if (selectedPlaybookTab === 'mainline') {
      const mainlineCard = document.createElement('div');
      mainlineCard.className = 'space-y-4';
      mainlineCard.innerHTML = `
        <div class="p-4 sm:p-5 rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-950/30 via-black/60 to-stone-950/80 shadow-xl space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-amber-500/30">
            <div class="flex items-center space-x-2">
              <span class="text-xl">🏆</span>
              <div>
                <h4 class="text-sm sm:text-base font-bold font-serif-sc text-amber-300">
                  ${isEn ? `Annual Stance: [${op.stemBranchEn}] · ${op.stemGodEn}` : `${op.year}年太岁 · 【${op.stemBranch}】${op.stemGod}临命`}
                </h4>
                <span class="text-xs text-amber-400/90 font-mono">${isEn ? op.strategicToneEn : op.strategicToneZh}</span>
              </div>
            </div>
            <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
              ${isEn ? 'Core Mainline Stance' : '战略定调'}
            </span>
          </div>
          <div class="p-3.5 rounded-xl bg-black/50 border border-amber-500/20 text-xs sm:text-sm text-gray-200 leading-relaxed font-serif-sc">
            ${isEn ? op.mainlineMissionEn : op.mainlineMissionZh}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Priorities -->
          <div class="p-4 rounded-xl border border-emerald-900/50 bg-black/40 space-y-2.5">
            <div class="flex items-center justify-between pb-1.5 border-b border-gray-800">
              <span class="text-xs sm:text-sm font-bold text-emerald-300 flex items-center gap-1.5">
                <span>🎯</span>
                <span>${isEn ? 'Top 3 Decisive Offensive Priorities' : '三大核心主线攻坚要务'}</span>
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-mono">${isEn ? 'Offensive' : '全力进攻'}</span>
            </div>
            <div class="space-y-2">
              ${(isEn ? op.priorityTasksEn : op.priorityTasksZh).map(task => `
                <div class="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs text-gray-200 leading-relaxed font-serif-sc">
                  ${task}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Deprioritized -->
          <div class="p-4 rounded-xl border border-rose-900/50 bg-black/40 space-y-2.5">
            <div class="flex items-center justify-between pb-1.5 border-b border-gray-800">
              <span class="text-xs sm:text-sm font-bold text-rose-300 flex items-center gap-1.5">
                <span>⛔</span>
                <span>${isEn ? 'Strict Non-Priorities to Discard' : '坚决断舍离与减负避坑项'}</span>
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30 font-mono">${isEn ? 'Discard' : '绝对断舍离'}</span>
            </div>
            <div class="space-y-2">
              ${(isEn ? op.deprioritizedEn : op.deprioritizedZh).map(item => `
                <div class="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/40 text-xs text-gray-200 leading-relaxed font-serif-sc">
                  ${item}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      container.appendChild(mainlineCard);
    }

    // Tab 2: Seasonal Tides
    if (selectedPlaybookTab === 'seasons') {
      const seasonsGrid = document.createElement('div');
      seasonsGrid.className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4';
      if (op.seasonalTides && Array.isArray(op.seasonalTides)) {
        op.seasonalTides.forEach(s => {
          const card = document.createElement('div');
          card.className = 'p-4 rounded-xl border border-gray-800 bg-black/40 space-y-3 hover:border-amber-500/40 transition flex flex-col justify-between';
          
          let scoreColor = 'from-blue-500 to-cyan-400';
          if (s.energyScore >= 90) scoreColor = 'from-amber-500 to-emerald-400';
          else if (s.energyScore >= 80) scoreColor = 'from-amber-500 to-yellow-400';

          card.innerHTML = `
            <div class="space-y-2.5">
              <div class="flex items-center justify-between border-b border-gray-800 pb-2">
                <div>
                  <h5 class="text-sm font-bold font-serif-sc text-amber-300">
                    ${isEn ? s.seasonEn : s.seasonZh}
                  </h5>
                  <span class="text-[10px] text-gray-400 font-mono">${isEn ? (s.solarTermsEn || s.monthsEn) : (s.solarTermsZh || s.monthsZh)}</span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-bold font-mono text-amber-400">${s.energyScore}%</span>
                  <span class="block text-[9.5px] text-gray-400">${isEn ? 'Energy Score' : '节律分值'}</span>
                </div>
              </div>

              <!-- Energy Bar -->
              <div class="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden">
                <div class="bg-gradient-to-r ${scoreColor} h-full rounded-full" style="width: ${s.energyScore}%;"></div>
              </div>

              <!-- Posture -->
              <div class="p-1.5 rounded bg-amber-950/30 border border-amber-500/30 text-center text-xs font-serif-sc text-amber-200">
                ${isEn ? s.tidePostureEn : s.tidePostureZh}
              </div>

              <!-- Rhythm -->
              <p class="text-[11.5px] text-gray-300 leading-relaxed font-serif-sc">
                ${isEn ? s.rhythmEn : s.rhythmZh}
              </p>
            </div>

            <div class="space-y-1.5 pt-2 border-t border-gray-800/80 text-[11px] font-serif-sc">
              <div class="p-1.5 rounded bg-emerald-950/20 border border-emerald-900/40 text-emerald-300 leading-tight">
                <span class="font-bold">${isEn ? 'Optimal Strategy: ' : '宜（最佳进取）：'}</span>${isEn ? s.actionDoEn : s.actionDoZh}
              </div>
              <div class="p-1.5 rounded bg-rose-950/20 border border-rose-900/40 text-rose-300 leading-tight">
                <span class="font-bold">${isEn ? 'Strict Avoidance: ' : '忌（绝对避让）：'}</span>${isEn ? s.actionAvoidEn : s.actionAvoidZh}
              </div>
            </div>
          `;
          seasonsGrid.appendChild(card);
        });
      }
      container.appendChild(seasonsGrid);
    }

    // Tab 3: Decision Safeguards
    if (selectedPlaybookTab === 'safeguards') {
      const safeguardsWrapper = document.createElement('div');
      safeguardsWrapper.className = 'space-y-4';
      const sf = op.safeguards || {};

      let riskCardsHtml = '';
      if (sf.riskTriggers && Array.isArray(sf.riskTriggers)) {
        riskCardsHtml = sf.riskTriggers.map(r => `
          <div class="p-4 rounded-xl border border-rose-900/50 bg-black/45 space-y-2.5 hover:border-rose-700/60 transition">
            <div class="flex items-center space-x-2 pb-1.5 border-b border-gray-800">
              <span class="text-xl">${r.icon || '⚠️'}</span>
              <h5 class="text-xs sm:text-sm font-bold text-rose-300 font-serif-sc">
                ${isEn ? r.titleEn : r.titleZh}
              </h5>
            </div>
            <div class="text-xs text-gray-300 leading-relaxed font-serif-sc">
              <b class="text-amber-400">${isEn ? 'Vulnerability: ' : '潜在风险：'}</b>${isEn ? r.riskEn : r.riskZh}
            </div>
            <div class="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/40 text-xs text-amber-200 leading-relaxed font-serif-sc">
              <b class="text-rose-400">${isEn ? 'Circuit Breaker: ' : '即时熔断机制：'}</b>${isEn ? r.circuitBreakerEn : r.circuitBreakerZh}
            </div>
          </div>
        `).join('');
      }

      safeguardsWrapper.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${riskCardsHtml}
        </div>

        <!-- Golden Rules -->
        <div class="p-4 sm:p-5 rounded-2xl border border-amber-500/50 bg-gradient-to-r from-amber-950/30 via-black/60 to-black/70 shadow-xl space-y-2.5">
          <div class="flex items-center space-x-2 pb-1.5 border-b border-amber-500/30">
            <span class="text-lg">⚖️</span>
            <h5 class="text-xs sm:text-sm font-bold text-amber-300 font-serif-sc">
              ${isEn ? 'Three Golden Decision Axioms' : '现实决策三大黄金定律'}
            </h5>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${((isEn ? sf.goldenRulesEn : sf.goldenRulesZh) || []).map(rule => `
              <div class="p-3 rounded-xl bg-black/50 border border-gray-800/80 text-xs text-amber-200 leading-relaxed font-serif-sc">
                ${rule}
              </div>
            `).join('')}
          </div>
        </div>
      `;
      container.appendChild(safeguardsWrapper);
    }
  }

  // 🗺️ Geographic & Workplace Ecological Resonance Renderer (地理方位与组织生态匹配仪)
  function renderEcologicalResonance(res, luckRes, isEn) {
    const container = document.getElementById('ecologicalResonanceContainer');
    if (!container) return;
    if (!luckRes || !luckRes.ecologicalResonance) {
      container.innerHTML = `
        <div class="p-6 text-center text-gray-400">
          <span class="text-2xl block mb-2">🗺️</span>
          <p>${isEn ? 'Please calculate luck cycles to evaluate Ecological Resonance.' : '请先进行岁运推演，以生成地理方位与组织生态匹配仪。'}</p>
        </div>
      `;
      return;
    }

    const eco = luckRes.ecologicalResonance;
    container.innerHTML = '';

    // Sub-tab Navigation
    const tabsWrapper = document.createElement('div');
    tabsWrapper.className = 'flex flex-wrap items-center gap-2 border-b border-gray-800/80 pb-2.5';
    const tabs = [
      { id: 'directions', labelZh: '🧭 城市与方位能量场', labelEn: '🧭 City & Cardinal Field' },
      { id: 'ecosystems', labelZh: '💼 组织生态位与反内耗归因', labelEn: '💼 Workplace Ecosystem Diagnostic' }
    ];

    tabs.forEach(t => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isGeographic = (selectedResonanceTab === 'directions' || selectedResonanceTab === 'geographic');
      const isActive = (t.id === 'directions' || t.id === 'geographic') ? isGeographic : (selectedResonanceTab === t.id);
      btn.className = `px-3.5 py-1.5 text-xs rounded-xl font-serif-sc font-semibold transition border cursor-pointer ${
        isActive
          ? 'bg-blue-600/30 text-blue-300 border-blue-500/60 shadow-md shadow-blue-950/40'
          : 'bg-black/40 text-gray-400 border-gray-800 hover:text-gray-200 hover:border-gray-700'
      }`;
      btn.textContent = isEn ? t.labelEn : t.labelZh;
      btn.addEventListener('click', () => {
        selectedResonanceTab = t.id;
        renderEcologicalResonance(res, luckRes, isEn);
      });
      tabsWrapper.appendChild(btn);
    });
    container.appendChild(tabsWrapper);

    // Tab 1: Geographic Directions
    if (selectedResonanceTab === 'directions' || selectedResonanceTab === 'geographic') {
      const geoWrapper = document.createElement('div');
      geoWrapper.className = 'space-y-4';

      // Best Direction Banner
      geoWrapper.innerHTML = `
        <div class="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/40 text-xs sm:text-sm text-blue-200 flex items-center gap-2.5">
          <span class="text-xl">🌟</span>
          <span class="font-serif-sc font-medium">${isEn ? eco.bestDirectionEn : eco.bestDirectionZh}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${(eco.geographicDirections || []).map(d => `
            <div class="p-4 rounded-xl border border-gray-800/90 bg-black/45 space-y-3 hover:border-blue-500/40 transition flex flex-col justify-between">
              <div class="space-y-2">
                <div class="flex items-center justify-between border-b border-gray-800 pb-2">
                  <div class="flex items-center space-x-2">
                    <span class="text-base font-bold font-serif-sc text-blue-300">
                      ${isEn ? d.directionEn : d.directionZh}
                    </span>
                    <span class="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-mono border border-blue-500/30">
                      ${isEn ? d.elementEn : d.element}
                    </span>
                  </div>
                  <span class="text-xs font-bold font-mono text-blue-400">
                    ${d.fitScore}% · ${isEn ? d.ratingEn : d.ratingZh}
                  </span>
                </div>

                <!-- Progress Bar -->
                <div class="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden">
                  <div class="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full" style="width: ${d.fitScore}%;"></div>
                </div>

                <div class="text-[11.5px] text-gray-300 space-y-1 pt-1 font-serif-sc">
                  <div>
                    <span class="text-amber-400 font-semibold">${isEn ? 'Key Metropolitan Clusters: ' : '代表都市群：'}</span>
                    <span class="text-gray-300">${isEn ? d.citiesEn : d.citiesZh}</span>
                  </div>
                  <div class="pt-1 text-[11px] leading-relaxed text-gray-400 font-serif-sc">
                    <span class="text-blue-300 font-medium">${isEn ? 'Field Resonance: ' : '气场共振：'}</span>
                    ${isEn ? d.resonanceEn : d.resonanceZh}
                  </div>
                </div>
              </div>

              <div class="p-2 rounded-lg bg-blue-950/20 border border-blue-900/40 text-[11px] text-blue-200 leading-tight font-serif-sc">
                <span class="font-bold">${isEn ? 'Strategic Advice: ' : '发展指引：'}</span>${isEn ? d.careerSynergyEn : d.careerSynergyZh}
              </div>
            </div>
          `).join('')}
        </div>
      `;
      container.appendChild(geoWrapper);
    }

    // Tab 2: Workplace Ecosystems
    if (selectedResonanceTab === 'ecosystems') {
      const ecoSysWrapper = document.createElement('div');
      ecoSysWrapper.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';

      if (eco.workplaceEcosystems && Array.isArray(eco.workplaceEcosystems)) {
        eco.workplaceEcosystems.forEach(es => {
          const card = document.createElement('div');
          card.className = 'p-4 sm:p-5 rounded-xl border border-gray-800/90 bg-black/45 space-y-3 hover:border-gray-700 transition flex flex-col justify-between';

          let gradeBadgeColor = 'bg-blue-500/20 text-blue-300 border-blue-500/30';
          if (es.fitScore >= 80) gradeBadgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
          else if (es.fitScore < 65) gradeBadgeColor = 'bg-rose-500/20 text-rose-300 border-rose-500/40';

          card.innerHTML = `
            <div class="space-y-2.5">
              <div class="flex items-center justify-between border-b border-gray-800 pb-2">
                <div class="flex items-center space-x-2">
                  <span class="text-xl">${es.icon}</span>
                  <h5 class="text-xs sm:text-sm font-bold font-serif-sc text-gray-200">
                    ${isEn ? es.nameEn : es.nameZh}
                  </h5>
                </div>
                <span class="text-xs px-2 py-0.5 rounded-full border ${gradeBadgeColor} font-mono font-bold">
                  ${es.fitScore}% · ${isEn ? es.gradeEn : es.gradeZh}
                </span>
              </div>

              <!-- Progress Bar -->
              <div class="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden">
                <div class="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 h-full rounded-full" style="width: ${es.fitScore}%;"></div>
              </div>

              <!-- Resonance Mechanism -->
              <p class="text-xs text-gray-300 leading-relaxed font-serif-sc">
                ${isEn ? es.resonanceEn : es.resonanceZh}
              </p>

              <!-- Friction Root Cause -->
              <div class="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/40 text-[11.5px] text-rose-200 leading-relaxed font-serif-sc">
                ${isEn ? es.frictionRootCauseEn : es.frictionRootCauseZh}
              </div>
            </div>

            <!-- Survival Tactics -->
            <div class="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-[11.5px] text-emerald-200 leading-relaxed font-serif-sc mt-2">
              ${isEn ? es.survivalTacticsEn : es.survivalTacticsZh}
            </div>
          `;
          ecoSysWrapper.appendChild(card);
        });
      }
      container.appendChild(ecoSysWrapper);
    }
  }

  // ⚡ Time Dynamics & Macro-Energy 5-Tier Master Report Renderer (时间动力学与宏观能量五阶递进战报)
  function renderTimeDynamicsReport(res, luckRes, isEn) {
    const container = document.getElementById('timeDynamicsContainer');
    const badgeEl = document.getElementById('tdAnnualBadge');
    if (!container || !res || typeof LuckEngine === 'undefined' || typeof LuckEngine.generateImpedanceReport !== 'function') return;

    const activeAnnual = (luckRes && (luckRes.activeAnnual || (luckRes.annuals && luckRes.annuals[0]))) || { year: selectedAnnualYear || new Date().getFullYear() };
    const targetYear = activeAnnual.year || selectedAnnualYear || new Date().getFullYear();

    const report = LuckEngine.generateImpedanceReport(res, targetYear);
    if (!report) return;

    if (badgeEl) {
      const stemGod = I18N.getGod(report.chapter4.annualStemGod, currentLang);
      badgeEl.textContent = isEn
        ? `${report.selectedYear} · [${report.chapter4.annualGanZhi}] (${stemGod}) · Age ${report.currentAge}`
        : `${report.selectedYear}年 · 【${report.chapter4.annualGanZhi}】(${stemGod}) · ${report.currentAge}岁`;
    }

    // 0. Philosophical Banner (心理赦免与认知确定性)
    const bannerHtml = `
      <div class="p-4 sm:p-5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-950/30 via-[#191624] to-black space-y-2 shadow-lg">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🕯️</span>
            <span class="text-xs sm:text-sm font-bold text-amber-300 font-serif-sc">${isEn ? 'Psychological Pardon & Cognitive Certainty' : '心智解缚 · 认知确定性与心理赦免'}</span>
          </div>
          <span class="text-[9.5px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">${isEn ? 'SOVEREIGN AGENT' : '底层心法'}</span>
        </div>
        <p class="text-xs text-gray-300 leading-relaxed italic">
          “${isEn ? report.philosophy.en : report.philosophy.zh}”
        </p>
      </div>
    `;

    // 1. Chapter 1: 底层常数与心理认知原型
    const ch1 = report.chapter1;
    const ch1Html = `
      <div class="p-5 rounded-xl border border-blue-900/40 bg-gradient-to-br from-[#121520] via-black to-[#0e1017] space-y-4 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-2.5">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🧬</span>
            <div>
              <h4 class="text-sm font-bold text-blue-300 font-serif-sc">${isEn ? ch1.titleEn : ch1.titleZh}</h4>
              <p class="text-[10.5px] text-gray-400 mt-0.5">${isEn ? 'Cognitive archetypes, blindspots & stress defense mechanics' : '心智决策原型 · 偏枯五行情绪盲区与内在应激防御机制'}</p>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
            ${isEn ? ch1.archetype.badgeEn : ch1.archetype.badgeZh}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Mental Model Card -->
          <div class="p-4 rounded-lg bg-black/45 border border-gray-800 space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-1.5">
              <span class="text-xs font-bold text-amber-200">${isEn ? ch1.archetype.nameEn : ch1.archetype.nameZh}</span>
              <span class="text-[10px] text-gray-500 font-mono">${isEn ? 'DECISION PROTOTYPE' : '核心心智原型'}</span>
            </div>
            <div class="text-xs text-gray-300 leading-relaxed">
              <span class="text-amber-400/90 font-semibold">${isEn ? 'Mechanism: ' : '核心决策机制：'}</span>
              ${isEn ? ch1.archetype.coreMechanismEn : ch1.archetype.coreMechanismZh}
            </div>
            <div class="text-xs text-rose-300/90 leading-relaxed">
              <span class="text-rose-400 font-semibold">${isEn ? 'Strategic Blindspot: ' : '认知盲区陷阱：'}</span>
              ${isEn ? ch1.archetype.blindSpotEn : ch1.archetype.blindSpotZh}
            </div>
            <div class="text-xs text-purple-300/90 leading-relaxed">
              <span class="text-purple-400 font-semibold">${isEn ? 'Defense Mechanism: ' : '应激防御机制：'}</span>
              ${isEn ? ch1.archetype.defenseMechanismEn : ch1.archetype.defenseMechanismZh}
            </div>
          </div>

          <!-- Skewed Element Emotional Trap Card -->
          <div class="p-4 rounded-lg bg-black/45 border border-gray-800 space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-1.5">
              <span class="text-xs font-bold text-emerald-300">${isEn ? ch1.elementTrap.nameEn : ch1.elementTrap.nameZh}</span>
              <span class="text-[10px] text-gray-500 font-mono">${isEn ? 'ELEMENT IMBALANCE' : '偏枯五行盲区'}</span>
            </div>
            <div class="text-xs text-gray-300 leading-relaxed">
              <span class="text-emerald-400 font-semibold">${isEn ? 'Emotional Pattern: ' : '反复受挫情绪回路：'}</span>
              ${isEn ? ch1.elementTrap.trapEn : ch1.elementTrap.trapZh}
            </div>
            <div class="text-xs text-cyan-300/90 leading-relaxed">
              <span class="text-cyan-400 font-semibold">${isEn ? 'Coping Defense: ' : '潜在防御模式：'}</span>
              ${isEn ? ch1.elementTrap.defenseEn : ch1.elementTrap.defenseZh}
            </div>
            <div class="p-2 rounded bg-[#151821] border border-blue-900/30 text-[11px] text-gray-400">
              💡 ${isEn ? 'Self-Forgiveness Key: Recognize when this loop triggers to decouple emotional reactivity from rational choices.' : '心理赦免心法：当觉察到上述防御模式触发时，主动暂停推演，接纳情绪反应，用客观规律替代非理性内耗。'}
            </div>
          </div>
        </div>
      </div>
    `;

    // 2. Chapter 2: 格局生态与人生上限
    const ch2 = report.chapter2;
    const ch2Html = `
      <div class="p-5 rounded-xl border border-purple-900/40 bg-gradient-to-br from-[#16121e] via-black to-[#0e1017] space-y-4 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-2.5">
          <div class="flex items-center space-x-2">
            <span class="text-lg">👑</span>
            <div>
              <h4 class="text-sm font-bold text-purple-300 font-serif-sc">${isEn ? ch2.titleEn : ch2.titleZh}</h4>
              <p class="text-[10.5px] text-gray-400 mt-0.5">${isEn ? 'Talent ecological niche, adversity bounce resilience & monetization channels' : '天赋生态位定位 · 逆境反弹弹性上限（病药说）· 四大价值变现通道'}</p>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
            ${isEn ? 'CAPACITY CEILING' : '生态上限'}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Niche & Resilience -->
          <div class="p-4 rounded-lg bg-black/45 border border-gray-800 space-y-3">
            <div class="flex items-center justify-between border-b border-gray-800/80 pb-1.5">
              <span class="text-xs font-bold text-amber-200">${isEn ? ch2.niche.titleEn : ch2.niche.titleZh}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">${isEn ? 'ECOLOGICAL NICHE' : '天赋生态位'}</span>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">
              ${isEn ? ch2.niche.roleDescEn : ch2.niche.roleDescZh}
            </p>

            <!-- Resilience meter -->
            <div class="pt-2 border-t border-gray-800/80 space-y-1.5">
              <div class="flex items-center justify-between text-xs">
                <span class="font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span>🛡️</span>
                  <span>${isEn ? 'Adversity Bounce Resilience:' : '系统逆境反弹弹性：'}</span>
                </span>
                <span class="font-mono font-bold text-emerald-300">${ch2.resilienceScore} / 100</span>
              </div>
              <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-blue-500 via-emerald-400 to-amber-400 h-2 rounded-full" style="width: ${ch2.resilienceScore}%"></div>
              </div>
              <p class="text-[11px] text-gray-400 leading-relaxed italic pt-1">
                ${isEn ? ch2.resilienceExegesisEn : ch2.resilienceExegesisZh}
              </p>
            </div>
          </div>

          <!-- 4 Monetization Channels Ranked -->
          <div class="p-4 rounded-lg bg-black/45 border border-gray-800 space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-1.5">
              <span class="text-xs font-bold text-indigo-300 font-serif-sc">${isEn ? '4 Monetization Channels Ranked' : '四大价值变现路径权重排序'}</span>
              <span class="text-[10px] text-gray-500 font-mono">${isEn ? 'VALUE PATHWAYS' : '价值通道'}</span>
            </div>
            <div class="space-y-2">
              ${ch2.monetizationChannels.map((c, cIdx) => {
                const badgeText = isEn
                  ? (cIdx === 0 ? '🥇 Primary' : cIdx === 1 ? '🥈 Secondary' : cIdx === 2 ? '🥉 Tertiary' : '4th Aux')
                  : (cIdx === 0 ? '🥇 第一顺位' : cIdx === 1 ? '🥈 第二顺位' : cIdx === 2 ? '🥉 第三顺位' : '第4补充通道');
                const badgeCls = cIdx === 0 ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold' : 'bg-gray-800 text-gray-400 border-gray-700';
                return `
                  <div class="p-2 rounded bg-[#13151f] border border-gray-800/80 space-y-1">
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-semibold text-gray-200">${isEn ? c.nameEn : c.nameZh}</span>
                      <span class="px-1.5 py-0.2 rounded border text-[9.5px] font-mono ${badgeCls}">${badgeText}</span>
                    </div>
                    <p class="text-[11px] text-gray-400 leading-relaxed">${isEn ? c.channelEn : c.channelZh}</p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // 3. Chapter 3: 十年大运全景周期走势
    const ch3 = report.chapter3;
    const ch3Html = `
      <div class="p-5 rounded-xl border border-amber-900/40 bg-gradient-to-br from-[#181512] via-black to-[#0e1017] space-y-4 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-2.5">
          <div class="flex items-center space-x-2">
            <span class="text-lg">📈</span>
            <div>
              <h4 class="text-sm font-bold text-amber-300 font-serif-sc">${isEn ? ch3.titleEn : ch3.titleZh}</h4>
              <p class="text-[10.5px] text-gray-400 mt-0.5">${isEn ? 'Macro energy momentum, decade stages & transition shock-absorption' : '十年大运宏观势能折线走势 · 顺风扩张 vs 蓄力筑底 · 关键交脱运防震节点'}</p>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
            ${isEn ? 'DECADE MOMENTUM' : '宏观势能'}
          </span>
        </div>

        <!-- Decades Cards Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          ${ch3.decadesPanorama.map(d => {
            const isCurrent = d.isActive;
            const borderCls = isCurrent
              ? 'border-amber-500 shadow-md shadow-amber-900/30 bg-amber-950/30 ring-1 ring-amber-500/50'
              : d.impedance <= 0.35
                ? 'border-emerald-800/60 bg-emerald-950/20'
                : d.impedance >= 0.65
                  ? 'border-rose-900/60 bg-rose-950/20'
                  : 'border-gray-800 bg-black/40';
            const god = I18N.getGod(d.stemGod, currentLang);
            const impColor = d.impedance <= 0.35 ? 'text-emerald-400' : d.impedance >= 0.65 ? 'text-rose-400' : 'text-amber-400';

            return `
              <div class="p-2.5 rounded-xl border ${borderCls} flex flex-col justify-between space-y-1.5 text-xs">
                <div class="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-800/80 pb-1">
                  <span class="font-mono font-bold text-amber-300">${isEn ? d.ageSpanEn : d.ageSpanZh}</span>
                  <span class="font-mono text-gray-500">${isEn ? d.yearSpanEn : d.yearSpanZh}</span>
                </div>
                <div class="text-center py-0.5">
                  <div class="text-base font-serif-sc font-bold ${isCurrent ? 'text-amber-300' : 'text-gray-200'}">${d.text}</div>
                  <div class="text-[10px] text-purple-300">${god}</div>
                </div>
                <div class="pt-1 border-t border-gray-800/60 space-y-1 text-center">
                  <div class="flex items-center justify-between text-[10px]">
                    <span class="text-gray-400">${isEn ? 'Impedance' : '阻抗系数'}</span>
                    <span class="font-mono font-bold ${impColor}">${d.impedance}</span>
                  </div>
                  <div class="text-[9.5px] font-semibold text-gray-300 truncate" title="${isEn ? d.actionDirectiveEn : d.actionDirectiveZh}">
                    ${isEn ? d.actionDirectiveEn : d.actionDirectiveZh}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Transition Shock-Absorption Warning Box -->
        <div class="p-3.5 rounded-lg bg-black/50 border border-amber-600/40 flex items-start space-x-3 text-xs">
          <span class="text-xl">⚠️</span>
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-bold text-amber-300 font-serif-sc">${isEn ? 'Decade Transition Knot Warning' : '关键交脱运防震法则'}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">
                ${isEn ? `Next Transition ~${ch3.nextTransitionYear} (${ch3.yearsToTransition}y left)` : `下一次交脱大运约 ${ch3.nextTransitionYear} 年 (距今约 ${ch3.yearsToTransition} 年)`}
              </span>
            </div>
            <p class="text-gray-300 leading-relaxed text-[11px]">
              ${isEn ? ch3.transitionAdviceEn : ch3.transitionAdviceZh}
            </p>
          </div>
        </div>
      </div>
    `;

    // 4. Chapter 4: 当下流年转折与动静决策
    const ch4 = report.chapter4;
    const postureColor = ch4.postureKey === 'attack' ? 'text-emerald-300 border-emerald-500/40 bg-emerald-950/30' : ch4.postureKey === 'defense' ? 'text-rose-300 border-rose-500/40 bg-rose-950/30' : 'text-amber-300 border-amber-500/40 bg-amber-950/30';
    const ch4Html = `
      <div class="p-5 rounded-xl border border-indigo-900/40 bg-gradient-to-br from-[#141422] via-black to-[#0e1017] space-y-4 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-2.5">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🎯</span>
            <div>
              <h4 class="text-sm font-bold text-indigo-300 font-serif-sc">${isEn ? ch4.titleEn : ch4.titleZh}</h4>
              <p class="text-[10.5px] text-gray-400 mt-0.5">${isEn ? 'Annual strategic posture定调, decoupled action directives & 3-point risk firewalls' : '本年攻守姿态三阶定调 · 动静解耦行动指令 · 合同/职场/现金流三大防火墙'}</p>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            ${report.selectedYear} ${isEn ? 'ANNUAL STRATEGY' : '流年决策'}
          </span>
        </div>

        <!-- Posture Banner -->
        <div class="p-4 rounded-xl border ${postureColor} flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="text-base font-bold font-serif-sc flex items-center gap-2">
              <span>${isEn ? ch4.postureTitleEn : ch4.postureTitleZh}</span>
              <span class="text-xs px-2 py-0.5 rounded bg-black/40 border border-gray-700 font-mono text-gray-300">
                ${isEn ? `Impedance: ${ch4.annualImpedance}` : `年度阻抗系数: ${ch4.annualImpedance}`}
              </span>
            </div>
            <div class="text-xs font-semibold text-gray-200">
              ${isEn ? ch4.postureDirectiveEn : ch4.postureDirectiveZh}
            </div>
          </div>
        </div>

        <!-- 3 Core Firewalls -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="p-3 rounded-lg bg-black/45 border border-gray-800 space-y-1.5 text-xs">
            <div class="font-bold text-amber-300 flex items-center gap-1.5">
              <span>📝</span>
              <span>${isEn ? 'Contractual Firewall' : '合同与法务防火墙'}</span>
            </div>
            <p class="text-[11px] text-gray-400 leading-relaxed">${isEn ? ch4.firewalls.contractsEn : ch4.firewalls.contractsZh}</p>
          </div>
          <div class="p-3 rounded-lg bg-black/45 border border-gray-800 space-y-1.5 text-xs">
            <div class="font-bold text-blue-300 flex items-center gap-1.5">
              <span>🤝</span>
              <span>${isEn ? 'Career & Partnership' : '职场与合伙防火墙'}</span>
            </div>
            <p class="text-[11px] text-gray-400 leading-relaxed">${isEn ? ch4.firewalls.careerEn : ch4.firewalls.careerZh}</p>
          </div>
          <div class="p-3 rounded-lg bg-black/45 border border-gray-800 space-y-1.5 text-xs">
            <div class="font-bold text-emerald-300 flex items-center gap-1.5">
              <span>💰</span>
              <span>${isEn ? 'Cash Flow & Assets' : '现金流与资产防火墙'}</span>
            </div>
            <p class="text-[11px] text-gray-400 leading-relaxed">${isEn ? ch4.firewalls.cashEn : ch4.firewalls.cashZh}</p>
          </div>
        </div>
      </div>
    `;

    // 5. Chapter 5: 周期风险雷达与敏感窗口
    const ch5 = report.chapter5;
    const ch5Html = `
      <div class="p-5 rounded-xl border border-rose-900/40 bg-gradient-to-br from-[#1a1215] via-black to-[#0e1017] space-y-5 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-2.5">
          <div class="flex items-center space-x-2">
            <span class="text-lg">📡</span>
            <div>
              <h4 class="text-sm font-bold text-rose-300 font-serif-sc">${isEn ? ch5.titleEn : ch5.titleZh}</h4>
              <p class="text-[10.5px] text-gray-400 mt-0.5">${isEn ? '12-Month Impedance Heatmap & Top 20-30 High-Risk Sensitive Days Roster' : '12 节令月度阻抗热力图（Heatmap）+ 全年 20~30 个高风险敏感日精准避险预警'}</p>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
            ${isEn ? 'RISK RADAR' : '风险雷达'}
          </span>
        </div>

        <!-- 5A: 12 Solar Months Heatmap -->
        <div class="space-y-2.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-amber-200 font-serif-sc flex items-center gap-1.5">
              <span>🔥</span>
              <span>${isEn ? '12 Solar Months Impedance Heatmap (0.1 ~ 1.0)' : '12 节令月度阻抗热力矩阵 (0.1 ~ 1.0 能量阻抗系数)'}</span>
            </span>
            <span class="text-[10px] text-gray-500 font-mono">${isEn ? 'GREEN: LOW IMPEDANCE | RED: HIGH IMPEDANCE' : '翠绿：低阻借势 | 红橙：高阻防守'}</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            ${ch5.monthlyHeatmap.map(m => {
              const impColor = m.impedance <= 0.35 ? 'text-emerald-400 bg-emerald-950/20 border-emerald-500/40' : m.impedance >= 0.65 ? 'text-rose-400 bg-rose-950/20 border-rose-500/40' : 'text-amber-400 bg-amber-950/20 border-amber-500/40';
              const god = I18N.getGod(m.stemGod, currentLang);
              return `
                <div class="p-2 rounded-lg border ${impColor} flex flex-col justify-between space-y-1 text-center">
                  <div class="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-800/70 pb-0.5">
                    <span class="font-mono text-gray-300">${isEn ? m.solarTermEn : m.solarTermZh}</span>
                    <span class="font-mono font-bold">${m.impedancePercent}</span>
                  </div>
                  <div class="py-0.5">
                    <div class="text-sm font-bold font-serif-sc text-gray-100">${m.ganZhi}</div>
                    <div class="text-[9.5px] text-purple-300">${god}</div>
                  </div>
                  <div class="pt-0.5 border-t border-gray-800/60 text-[9.5px] font-semibold truncate">
                    ${isEn ? m.actionDirectiveEn : m.actionDirectiveZh}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 5B: 20-30 High-Risk Sensitive Days -->
        <div class="space-y-2.5 pt-3 border-t border-gray-800/80">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xs font-bold text-rose-300 font-serif-sc flex items-center gap-1.5">
              <span>🛑</span>
              <span>${isEn ? 'Top High-Risk Sensitive Days Roster' : '全年高风险敏感日精确标记与闭关避险指南'}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 font-mono border border-rose-500/30">${ch5.sensitiveDays.length} ${isEn ? 'Days' : '个高危敏感日'}</span>
            </span>
            <span class="text-[10.5px] text-gray-400">${isEn ? 'Strictly postpone irreversible contracts & avoid confrontations' : '（精准扫描日柱/提纲/太岁之天克地冲、地支三刑与七杀暴戾，重大决策务必避让）'}</span>
          </div>

          <div class="space-y-2 max-h-96 overflow-y-auto pr-1">
            ${ch5.sensitiveDays.map(sd => {
              const isCrit = sd.riskLevel === '极危';
              const badgeCls = isCrit ? 'bg-rose-500/20 text-rose-300 border-rose-500/50' : 'bg-amber-500/20 text-amber-300 border-amber-500/50';
              const borderCls = isCrit ? 'border-rose-900/60 bg-rose-950/20' : 'border-gray-800 bg-black/40';
              const stemGod = I18N.getGod(sd.stemGod, currentLang);

              return `
                <div class="p-3 rounded-lg border ${borderCls} space-y-1.5 text-xs">
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <div class="flex items-center space-x-2 font-mono">
                      <span class="text-amber-300 font-bold">${sd.date}</span>
                      <span class="px-1.5 py-0.2 rounded bg-gray-800 text-gray-300 text-[11px]">${sd.ganZhi} (${stemGod})</span>
                      <span class="px-1.5 py-0.2 rounded border text-[10px] font-bold ${badgeCls}">${isEn ? sd.riskLevelEn : sd.riskLevel}</span>
                    </div>
                    <span class="text-[11px] font-semibold text-rose-300">${isEn ? sd.clashTypeEn : sd.clashTypeZh}</span>
                  </div>
                  <div class="text-[11px] text-gray-300">
                    <span class="text-amber-400/90 font-semibold">${isEn ? 'Sensitive Triggers: ' : '触发敏感领域：'}</span>
                    ${isEn ? sd.riskDomainEn : sd.riskDomainZh}
                  </div>
                  <div class="text-[11px] text-gray-400 leading-relaxed italic bg-black/30 p-2 rounded border border-gray-800/60">
                    ${isEn ? sd.shelterGuidanceEn : sd.shelterGuidanceZh}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    container.innerHTML = `
      ${bannerHtml}
      ${ch1Html}
      ${ch2Html}
      ${ch3Html}
      ${ch4Html}
      ${ch5Html}
    `;
  }

  // 🌌 14-Character Dynamic Energy Synthesis (十四字时空全息能量统揽)
  function render14CharEnergySynthesis(res, luckRes, isEn) {
    const container = document.getElementById('fourteenCharEnergyContainer');
    const badgeEl = document.getElementById('fourteenCharBadge');
    if (!container || !res) return;

    const synthesis = (luckRes && luckRes.synthesis14Char) ||
      (typeof LuckEngine !== 'undefined' && LuckEngine.calculate14CharEnergySynthesis
        ? LuckEngine.calculate14CharEnergySynthesis(res, luckRes ? luckRes.activeDecade : null, luckRes ? luckRes.activeAnnual : null, luckRes ? luckRes.activeMonth : null)
        : null);
    if (!synthesis) return;

    if (badgeEl) {
      badgeEl.textContent = isEn ? synthesis.dayMasterDynamicState.badgeEn : synthesis.dayMasterDynamicState.badgeZh;
    }

    const dmState = synthesis.dayMasterDynamicState;
    const domEl = synthesis.dominantElement;
    const interp = synthesis.strategicFieldInterpretation;

    const elStyles = {
      '木': { bg: 'bg-emerald-950/40', border: 'border-emerald-500/50', text: 'text-emerald-300', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', bar: 'from-emerald-600 to-emerald-400' },
      '火': { bg: 'bg-rose-950/40', border: 'border-rose-500/50', text: 'text-rose-300', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30', bar: 'from-rose-600 to-rose-400' },
      '土': { bg: 'bg-amber-950/40', border: 'border-amber-500/50', text: 'text-amber-300', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30', bar: 'from-amber-600 to-amber-400' },
      '金': { bg: 'bg-slate-900/50', border: 'border-slate-400/50', text: 'text-slate-200', badge: 'bg-slate-500/20 text-slate-200 border-slate-400/30', bar: 'from-slate-500 to-slate-300' },
      '水': { bg: 'bg-blue-950/40', border: 'border-blue-500/50', text: 'text-blue-300', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30', bar: 'from-blue-600 to-blue-400' }
    };

    container.innerHTML = `
      <!-- Card 1: 14 Characters Holographic Roster -->
      <div class="p-4 sm:p-5 rounded-2xl bg-black/40 border border-gray-800 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-800">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🪐</span>
            <h4 class="text-sm font-bold text-amber-300 font-serif-sc">
              ${isEn ? '14-Character Multi-Dimensional Matrix (Natal 8 + Decade 2 + Annual 2 + Month 2)' : '十四字全景矩阵（原局八字 + 大运两字 + 流年两字 + 流月两字）'}
            </h4>
          </div>
          <span class="text-xs font-mono text-gray-400">
            ${isEn ? `Day Master: ${dmState.dayMasterEn || dmState.dayMaster} (${dmState.dayMasterElementEn} · Natal ${dmState.natalStrengthEn})` : `核心日元：${dmState.dayMaster} (${dmState.dayMasterElement} · 原局${dmState.natalStrength})`}
          </span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-1">
          ${synthesis.characters.map(c => {
            const st = elStyles[c.el] || elStyles['木'];
            return `
              <div class="p-2.5 rounded-xl border ${st.border} ${st.bg} flex flex-col justify-between space-y-1 text-center">
                <div class="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-800/60 pb-1">
                  <span class="truncate font-mono">${isEn ? c.sourceEn : c.sourceZh}</span>
                  <span class="px-1 py-0.2 rounded text-[9px] font-mono border ${c.isTransit ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-gray-800 text-gray-300 border-gray-700'}">
                    ${c.isTransit ? (isEn ? 'Transit' : '岁运') : (isEn ? 'Natal' : '原局')}
                  </span>
                </div>
                <div class="py-1">
                  <div class="text-lg font-bold font-serif-sc ${st.text}">
                    ${isEn ? c.charEn : c.char}
                  </div>
                  <div class="text-[10px] font-mono ${st.text}">
                    ${isEn ? c.elementEn : c.el}
                  </div>
                </div>
                <div class="pt-1 border-t border-gray-800/60 text-[10px] font-semibold text-purple-300 truncate">
                  ${isEn ? c.tenGodEn : c.tenGod}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Card 2: 5-Element Distribution & Dominant Force -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- 5-Element Proportions -->
        <div class="lg:col-span-2 p-4 sm:p-5 rounded-2xl bg-black/40 border border-gray-800 space-y-3 flex flex-col justify-between">
          <div class="flex items-center justify-between pb-2 border-b border-gray-800">
            <span class="text-xs font-bold text-amber-300 font-serif-sc">
              ${isEn ? 'Dynamic 5-Element Energy Share Across 14 Characters' : '十四字全场五行气机权重分布'}
            </span>
            <span class="text-[10.5px] text-gray-400 font-mono">
              ${isEn ? 'Total 14 Characters' : '全场共十四字'}
            </span>
          </div>
          <div class="space-y-2.5">
            ${synthesis.elementDistributionList.map(item => {
              const st = elStyles[item.element] || elStyles['木'];
              return `
                <div class="space-y-1">
                  <div class="flex items-center justify-between text-xs font-mono">
                    <span class="${st.text} font-bold flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full ${st.bg} border ${st.border}"></span>
                      <span>${isEn ? item.elementEn : item.element}</span>
                    </span>
                    <span class="text-gray-300">${item.count} / 14 (${item.percentage}%)</span>
                  </div>
                  <div class="w-full bg-gray-800/80 rounded-full h-2 overflow-hidden">
                    <div class="bg-gradient-to-r ${st.bar} h-full rounded-full transition-all duration-300" style="width: ${item.percentage}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Dominant Vector Card -->
        <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-950/20 via-black/40 to-black/60 border border-amber-500/40 space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex items-center justify-between pb-2 border-b border-amber-500/30">
              <span class="text-xs font-bold text-amber-300 font-serif-sc flex items-center gap-1">
                <span>👑</span>
                <span>${isEn ? 'Dominant Macro Force' : '气机统帅主导五行'}</span>
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                ${domEl.percentage}%
              </span>
            </div>
            <div class="text-center py-2">
              <div class="text-2xl font-bold font-serif-sc text-amber-200">
                ${isEn ? domEl.elementEn : domEl.element}
              </div>
              <div class="text-xs font-semibold text-purple-300 mt-0.5">
                ${isEn ? domEl.roleEn : domEl.roleZh}
              </div>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed font-serif-sc bg-black/40 p-2.5 rounded-lg border border-gray-800/80">
              ${isEn ? dmState.statusEn : dmState.statusZh}
            </p>
          </div>
          <div class="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
            <span>${isEn ? 'Support vs Drain Ratio' : '同党扶助 vs 异党消耗'}</span>
            <span class="text-amber-300 font-bold">${dmState.supportCount} : ${dmState.drainCount} (${Math.round(dmState.dynamicRatio * 100)}%)</span>
          </div>
        </div>
      </div>

      <!-- Card 3: Deep Actionable Environmental Interpretation -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-[#1b1926] via-[#12131d] to-black border border-amber-500/40 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-800">
          <div class="flex items-center space-x-2">
            <span class="text-xl">⚔️</span>
            <h4 class="text-sm sm:text-base font-bold text-amber-200 font-serif-sc">
              ${isEn ? interp.titleEn : interp.titleZh}
            </h4>
          </div>
          <span class="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-serif-sc font-bold">
            ${isEn ? dmState.badgeEn : dmState.badgeZh}
          </span>
        </div>

        <!-- Field Dynamics -->
        <div class="p-3.5 rounded-xl bg-black/50 border border-gray-800/80 text-xs text-gray-300 leading-relaxed font-serif-sc space-y-1">
          <div class="text-amber-300 font-semibold flex items-center gap-1.5">
            <span>⚡</span>
            <span>${isEn ? 'Holographic Field Dynamics:' : '时空场态深度推演：'}</span>
          </div>
          <p class="text-gray-300">${isEn ? interp.dynamicsEn : interp.dynamicsZh}</p>
        </div>

        <!-- Strategic Focus -->
        <div class="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed font-serif-sc space-y-1">
          <div class="text-amber-300 font-semibold flex items-center gap-1.5">
            <span>🎯</span>
            <span>${isEn ? 'Core Strategic Focus:' : '核心战略攻守定调：'}</span>
          </div>
          <p>${isEn ? interp.strategicFocusEn : interp.strategicFocusZh}</p>
        </div>

        <!-- Action Directives -->
        <div class="space-y-2 pt-1">
          <h5 class="text-xs font-bold text-gray-200 font-serif-sc flex items-center gap-1.5">
            <span>🛡️</span>
            <span>${isEn ? 'Tactical Action Directives & Operating Rules:' : '现实破局战术指令与实操戒律：'}</span>
          </h5>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            ${(isEn ? interp.actionDirectivesEn : interp.actionDirectivesZh).map(dir => `
              <div class="p-3 rounded-xl bg-black/60 border border-gray-800 text-xs text-gray-300 leading-relaxed font-serif-sc flex flex-col justify-between">
                <div>${dir}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Somatic Tuning -->
        <div class="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed font-serif-sc flex items-center gap-2">
          <span class="text-base">🌿</span>
          <div>
            <span class="font-bold text-emerald-300">${isEn ? 'Somatic Grounding & Physical Regulation: ' : '身心调律与生理接地实践：'}</span>
            <span>${isEn ? interp.physicalTuningEn : interp.physicalTuningZh}</span>
          </div>
        </div>
      </div>
    `;
  }

  // 子平 100 分制生克量化评分与格局高低
  function renderZiping100Score(res) {
    const isEn = (currentLang === 'en');
    const container = document.getElementById('ziping100Container');
    const badgesContainer = document.getElementById('zipingScoreBadges');
    if (!container) return;

    const ziping = (res && res.zipingScore) ? res.zipingScore : (typeof BaZiEngine !== 'undefined' ? BaZiEngine.calculateZipingScore(res) : null);
    if (!ziping) {
      container.innerHTML = `<p class="text-xs text-gray-500">${isEn ? 'Ziping scoring awaiting calculation...' : '子平生克量化数据计算中...'}</p>`;
      return;
    }

    const tierBadgeBg = (ziping.tierKey === 'noble')
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
      : (ziping.tierKey === 'good')
        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
        : 'bg-blue-500/20 text-blue-300 border-blue-500/40';

    if (badgesContainer) {
      badgesContainer.innerHTML = `
        <span class="px-2.5 py-1 rounded-full border text-xs font-bold ${tierBadgeBg}">
          ${isEn ? ziping.tierEn : ziping.tierZh}
        </span>
        <span class="px-2.5 py-1 rounded-full border border-purple-500/40 bg-purple-500/20 text-purple-200 text-xs font-bold">
          ${isEn ? ziping.categoryEn : ziping.categoryZh}
        </span>
        <span class="px-2.5 py-1 rounded-full border border-amber-500/40 bg-black/40 text-amber-300 text-xs font-mono font-bold">
          ${isEn ? `Ziping: ${ziping.totalScore} / 100` : `子平量化: ${ziping.totalScore} 分`}
        </span>
      `;
    }

    const scorePct = Math.min(100, Math.max(0, ziping.totalScore));
    const stemsPct = (ziping.stemsScore / 40 * 100).toFixed(1);
    const branchesPct = (ziping.branchesScore / 60 * 100).toFixed(1);

    container.innerHTML = `
      <div class="p-4 sm:p-5 rounded-2xl bg-black/30 border border-gray-800 space-y-4">
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="text-amber-300 font-bold">${isEn ? 'Ziping 100-Point Energy Score' : '子平百分制生克得分量化'}</span>
            <span class="text-base font-bold text-amber-400">${ziping.totalScore} <span class="text-xs text-gray-500">/ 100</span></span>
          </div>
          <div class="w-full bg-gray-900 rounded-full h-4 p-0.5 border border-amber-500/30 overflow-hidden relative">
            <div class="h-full rounded-full bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-500 transition-all duration-500" style="width: ${scorePct}%;"></div>
            <div class="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-400/50 z-10" title="50 Balance Line"></div>
          </div>
          <div class="flex justify-between text-[11px] text-gray-500 font-mono">
            <span>0 (${isEn ? 'Extreme Weak' : '极弱从格'})</span>
            <span>15</span>
            <span>50 (${isEn ? 'Weak/Strong Pivot' : '旺衰平衡线'})</span>
            <span>85</span>
            <span>100 (${isEn ? 'Extreme Strong' : '专旺大格'})</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div class="p-3 rounded-xl bg-black/40 border border-gray-800/80 space-y-1.5 text-xs">
            <div class="flex justify-between items-center text-gray-300">
              <span class="font-semibold text-sky-300">${isEn ? 'Heavenly Stems (40 pts max)' : '天干气象得分 (满分40)'}</span>
              <span class="font-mono font-bold text-sky-400">${ziping.stemsScore} / 40</span>
            </div>
            <div class="w-full bg-gray-950 rounded-full h-2 overflow-hidden border border-sky-900/40">
              <div class="bg-sky-500 h-full rounded-full" style="width: ${stemsPct}%;"></div>
            </div>
            <p class="text-[10px] text-gray-500 leading-tight">
              ${isEn ? 'Day Master inherently contributes +10 to root core self.' : '日干永远基准+10分，年干/月干/时干根据生扶属性各占10分。'}
            </p>
          </div>

          <div class="p-3 rounded-xl bg-black/40 border border-gray-800/80 space-y-1.5 text-xs">
            <div class="flex justify-between items-center text-gray-300">
              <span class="font-semibold text-emerald-300">${isEn ? 'Earthly Branches (60 pts max)' : '地支根基得分 (满分60)'}</span>
              <span class="font-mono font-bold text-emerald-400">${ziping.branchesScore} / 60</span>
            </div>
            <div class="w-full bg-gray-950 rounded-full h-2 overflow-hidden border border-emerald-900/40">
              <div class="bg-emerald-500 h-full rounded-full" style="width: ${branchesPct}%;"></div>
            </div>
            <p class="text-[10px] text-gray-500 leading-tight">
              ${isEn ? 'Month Command: 35 pts | Day Branch: 15 pts | Year & Hour: 5 pts each. Za Qi (Chen/Xu/Chou/Wei) folded by 60/30/10 ratio.' : '提纲月令35分、日支坐基15分、年支5分、时支5分。辰戌丑未杂气按本气60%/余气30%/中气10%折算。'}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-gray-800/80">
          <div class="p-3 rounded-xl bg-black/40 border border-gray-800 text-xs space-y-1">
            <div class="flex justify-between items-center">
              <span class="font-bold text-amber-300">${isEn ? 'Day Branch (15 pts)' : '日支第一近邻 (15分)'}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded font-bold ${ziping.proximityChecks.dayBranch.isFavorable ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-gray-800 text-gray-400'}">
                ${ziping.proximityChecks.dayBranch.isFavorable ? (isEn ? 'Favorable Shield' : '用神贴身') : (isEn ? 'Consuming/Neutral' : '克泄抑或常态')}
              </span>
            </div>
            <p class="text-[11px] text-gray-400">${isEn ? 'Palace of self and spouse. Closest energetic proximity to Day Master.' : '自身坐基与夫妻宫，距离日干最近，影响力权重居支神之首。'}</p>
          </div>

          <div class="p-3 rounded-xl bg-black/40 border border-gray-800 text-xs space-y-1">
            <div class="flex justify-between items-center">
              <span class="font-bold text-amber-300">${isEn ? 'Month Stem (10 pts)' : '月干门户近邻 (10分)'}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded font-bold ${ziping.proximityChecks.monthStem.isFavorable ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-gray-800 text-gray-400'}">
                ${ziping.proximityChecks.monthStem.isFavorable ? (isEn ? 'Favorable Shield' : '用神透出门户') : (isEn ? 'Consuming/Neutral' : '克泄抑或常态')}
              </span>
            </div>
            <p class="text-[11px] text-gray-400">${isEn ? 'Governs external social reputation, career gateway, and paternal heritage.' : '主社会声誉、对外事业门户与父母传承，左右逢源。'}</p>
          </div>

          <div class="p-3 rounded-xl bg-black/40 border border-gray-800 text-xs space-y-1">
            <div class="flex justify-between items-center">
              <span class="font-bold text-amber-300">${isEn ? 'Monthly Command (35 pts)' : '提纲月令权重 (35分)'}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded font-bold ${ziping.monthBranchSupportsFavorable ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'}">
                ${ziping.monthBranchSupportsFavorable ? (isEn ? 'Command Backing' : '月令生扶有力') : (isEn ? 'Command Tensions' : '月令克耗有制')}
              </span>
            </div>
            <p class="text-[11px] text-gray-400">${isEn ? 'The commanding authority of all seasons, holding 35% of total chart gravity.' : '四时节令主令权衡，单支独占35分，决定全局五行气候大势。'}</p>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs space-y-2">
          <div class="flex flex-wrap items-center gap-3">
            <div>
              <span class="text-amber-400 font-semibold">${isEn ? 'Favorable Gods: ' : '喜用神：'}</span>
              <span class="text-emerald-300 font-mono font-bold">${isEn ? ziping.favorableGodsEn.join(', ') : ziping.favorableGodsZh.join('、')}</span>
            </div>
            <div class="text-gray-600">|</div>
            <div>
              <span class="text-amber-400 font-semibold">${isEn ? 'Unfavorable Gods: ' : '忌仇神：'}</span>
              <span class="text-rose-300 font-mono font-bold">${isEn ? ziping.unfavorableGodsEn.join(', ') : ziping.unfavorableGodsZh.join('、')}</span>
            </div>
          </div>
          <p class="text-gray-300 leading-relaxed pt-1 border-t border-amber-900/30">
            <span class="text-amber-400 font-bold">${isEn ? 'Destiny Tier Exegesis: ' : '命格高低总论：'}</span>
            ${isEn ? ziping.tierReasonEn : ziping.tierReasonZh}
          </p>
        </div>
      </div>
    `;
  }

  // 四柱命卦推演 · 倪海厦《天纪》六十四卦全相秘解 (fourPillarsActiveAge hoisted to top)

  function renderFourPillarsHexagrams(res) {
    const isEn = (currentLang === 'en');
    const container = document.getElementById('fourPillarsHexContainer');
    const slider = document.getElementById('fourPillarsAgeSlider');
    const ageDisplay = document.getElementById('fourPillarsAgeDisplay');
    if (!container) return;

    if (!res || !res.pillars) {
      container.innerHTML = `<p class="text-xs text-gray-500">${isEn ? 'Calculating natal hexagrams...' : '四柱命卦计算中...'}</p>`;
      return;
    }

    if (res) currentBaziResult = currentBaziResult || res;

    let birthYear = (res.input && res.input.year) || res.birthYear || 1990;
    const currentCalYear = new Date().getFullYear();
    const calculatedAge = Math.max(1, Math.abs(currentCalYear - birthYear));
    if (window._lastRenderedHexRes !== res) {
      window._lastRenderedHexRes = res;
      const lastBYear = window._lastHexBirthYear;
      window._lastHexBirthYear = birthYear;
      if (lastBYear !== birthYear || !fourPillarsActiveAge) {
        fourPillarsActiveAge = calculatedAge;
      }
    }

    const isInitialized = slider && (slider.hasAttribute ? slider.hasAttribute('data-initialized') : slider._initialized);
    if (slider && !isInitialized) {
      if (!fourPillarsActiveAge) {
        fourPillarsActiveAge = calculatedAge;
      }
      slider.value = fourPillarsActiveAge;
      if (slider.setAttribute) slider.setAttribute('data-initialized', 'true');
      slider._initialized = true;

      const handleSliderChange = (e) => {
        const val = parseInt((e && e.target) ? e.target.value : slider.value, 10);
        if (!isNaN(val)) {
          fourPillarsActiveAge = Math.max(1, Math.min(100, val));
          slider.value = fourPillarsActiveAge;
          if (ageDisplay) {
            ageDisplay.textContent = (currentLang === 'en') ? `${fourPillarsActiveAge} yrs` : `${fourPillarsActiveAge} 岁`;
          }
          if (currentBaziResult) {
            renderFourPillarsHexagrams(currentBaziResult);
            if (typeof renderHexagramCycle === 'function') {
              renderHexagramCycle(currentBaziResult, fourPillarsActiveAge);
            }
          }
        }
      };

      slider.addEventListener('input', handleSliderChange);
      slider.addEventListener('change', handleSliderChange);
    } else if (slider) {
      slider.value = fourPillarsActiveAge;
    }

    if (ageDisplay) {
      ageDisplay.textContent = isEn ? `${fourPillarsActiveAge} yrs` : `${fourPillarsActiveAge} 岁`;
    }

    const hexData = (typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateFourPillarsHexagrams === 'function')
      ? IChingEngine.calculateFourPillarsHexagrams(res, fourPillarsActiveAge, birthYear + fourPillarsActiveAge)
      : null;

    if (!hexData) {
      container.innerHTML = `<p class="text-xs text-gray-500">${isEn ? 'Hexagram engine awaiting initialization...' : '周易推命引擎初始化中...'}</p>`;
      return;
    }

    function renderLinesHtml(lines) {
      return lines.slice().reverse().map(l => {
        const activeCls = l.isActive
          ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-md ring-1 ring-amber-500/50'
          : 'bg-black/30 border-gray-800 text-gray-400';
        const badgeColor = (l.nature === 1) ? 'text-amber-400' : 'text-purple-400';
        return `
          <div class="flex items-center justify-between p-1.5 rounded border ${activeCls} text-[11px] font-mono">
            <div class="flex items-center space-x-2">
              <span class="font-bold ${badgeColor} text-base leading-none">${l.symbol}</span>
              <span class="font-bold text-gray-300">${isEn ? l.posEn : l.posZh}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-[10px] ${badgeColor}">${isEn ? l.typeEn : l.typeZh}</span>
              <span class="px-1.5 py-0.2 rounded bg-black/50 text-[10px] text-gray-300">${isEn ? l.ageSpanEn : l.ageSpanZh}</span>
              ${l.isActive ? `<span class="px-1 py-0.2 rounded bg-amber-500 text-black text-[9px] font-bold">${isEn ? 'CURRENT' : '当值'}</span>` : ''}
            </div>
          </div>
        `;
      }).join('');
    }

    const xt = hexData.xianTian;
    const ht = hexData.houTian;
    const zn = hexData.zhiNian;

    const xtHex = xt.hexagram || { number: 1, nameZh: '乾为天', nameEn: 'The Creative' };
    const htHex = ht.hexagram || { number: 2, nameZh: '坤为地', nameEn: 'The Receptive' };
    const znHex = zn.hexagram || { number: 11, nameZh: '地天泰', nameEn: 'Peace' };

    const xtTj = xt.tianJi || {};
    const htTj = ht.tianJi || {};
    const znTj = zn.tianJi || {};

    const stemEnMap = { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' };
    const branchEnMap = { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' };

    const sumOdds = (typeof hexData.sumOdds === 'number') ? hexData.sumOdds : (hexData.odds && hexData.odds.length ? hexData.odds.reduce((a, b) => a + b, 0) : (typeof hexData.tianShu === 'number' ? hexData.tianShu : 25));
    const sumEvens = (typeof hexData.sumEvens === 'number') ? hexData.sumEvens : (hexData.evens && hexData.evens.length ? hexData.evens.reduce((a, b) => a + b, 0) : (typeof hexData.diShu === 'number' ? hexData.diShu : 30));
    const rawTianShu = (typeof hexData.rawTianShu === 'number') ? hexData.rawTianShu : (typeof hexData.tianShu === 'number' ? hexData.tianShu : 6);
    const rawDiShu = (typeof hexData.rawDiShu === 'number') ? hexData.rawDiShu : (typeof hexData.diShu === 'number' ? hexData.diShu : 4);
    const tianShu = (typeof hexData.tianShu === 'number') ? hexData.tianShu : rawTianShu;
    const diShu = (typeof hexData.diShu === 'number') ? hexData.diShu : rawDiShu;

    const stemStr = (hexData.stemDetails && hexData.stemDetails.length)
      ? hexData.stemDetails.map(s => `${isEn ? (stemEnMap[s.stem] || 'Stem') : s.stem}${isEn ? '->' : '→'}${s.num}`).join(' · ')
      : (res && res.pillars ? [res.pillars.year.stem, res.pillars.month.stem, res.pillars.day.stem, res.pillars.hour.stem].map(s => `${s}→6`).join(' · ') : '--');
    const branchStr = (hexData.branchDetails && hexData.branchDetails.length)
      ? hexData.branchDetails.map(b => `${isEn ? (branchEnMap[b.branch] || 'Branch') : b.branch}${isEn ? '->' : '→'}[${b.nums.join(',')}]`).join(' · ')
      : (res && res.pillars ? [res.pillars.year.branch, res.pillars.month.branch, res.pillars.day.branch, res.pillars.hour.branch].map(b => `${b}→[1,6]`).join(' · ') : '--');

    const oddsStr = (hexData.odds && hexData.odds.length) ? hexData.odds.join('+') : `${sumOdds}`;
    const evensStr = (hexData.evens && hexData.evens.length) ? hexData.evens.join('+') : `${sumEvens}`;

    const tianDerivationZh = sumOdds > 25
      ? `${oddsStr} = ${sumOdds}（以25为中数：${sumOdds} - 25 = ${sumOdds - 25} → 取【${rawTianShu}】）`
      : (sumOdds === 25 ? `${oddsStr} = 25（以25为中数：逢25取【5】）` : `${oddsStr} = ${sumOdds}（以25为中数：取【${rawTianShu}】）`);
    const diDerivationZh = sumEvens > 30
      ? `${evensStr} = ${sumEvens}（以30为中数：${sumEvens} - 30 = ${sumEvens - 30} → 取【${rawDiShu}】）`
      : (sumEvens === 30 ? `${evensStr} = 30（以30为中数：逢30取【3】）` : `${evensStr} = ${sumEvens}（以30为中数：取【${rawDiShu}】）`);

    const tianDerivationEn = sumOdds > 25
      ? `${oddsStr} = ${sumOdds} (Base 25: ${sumOdds} - 25 = ${sumOdds - 25} -> takes ${rawTianShu})`
      : (sumOdds === 25 ? `${oddsStr} = 25 (Base 25: exactly 25 takes 5)` : `${oddsStr} = ${sumOdds} (Base 25: takes ${rawTianShu})`);
    const diDerivationEn = sumEvens > 30
      ? `${evensStr} = ${sumEvens} (Base 30: ${sumEvens} - 30 = ${sumEvens - 30} -> takes ${rawDiShu})`
      : (sumEvens === 30 ? `${evensStr} = 30 (Base 30: exactly 30 takes 3)` : `${evensStr} = ${sumEvens} (Base 30: takes ${rawDiShu})`);

    const xtUpperName = isEn ? (hexData.xtUpperTri ? hexData.xtUpperTri.nameEn : 'Heaven') : (hexData.xtUpperTri ? hexData.xtUpperTri.nameZh : '乾');
    const xtLowerName = isEn ? (hexData.xtLowerTri ? hexData.xtLowerTri.nameEn : 'Wind') : (hexData.xtLowerTri ? hexData.xtLowerTri.nameZh : '巽');
    const htUpperName = isEn ? (hexData.htUpperTri ? hexData.htUpperTri.nameEn : 'Wind') : (hexData.htUpperTri ? hexData.htUpperTri.nameZh : '巽');
    const htLowerName = isEn ? (hexData.htLowerTri ? hexData.htLowerTri.nameEn : 'Heaven') : (hexData.htLowerTri ? hexData.htLowerTri.nameZh : '乾');

    const tianTriName = isEn
      ? (hexData.tianTri ? hexData.tianTri.nameEn : (hexData.isYangMaleOrYinFemale ? xtUpperName : xtLowerName))
      : (hexData.tianTri ? hexData.tianTri.nameZh : (hexData.isYangMaleOrYinFemale ? xtUpperName : xtLowerName));
    const diTriName = isEn
      ? (hexData.diTri ? hexData.diTri.nameEn : (hexData.isYangMaleOrYinFemale ? xtLowerName : xtUpperName))
      : (hexData.diTri ? hexData.diTri.nameZh : (hexData.isYangMaleOrYinFemale ? xtLowerName : xtUpperName));

    const oscillationRuleZh = hexData.isYangMaleOrYinFemale
      ? '阳男阴女：天数在上卦，地数在下卦荡成【先天卦】；地数在上卦，天数在下卦荡成【后天卦】。'
      : '阴男阳女：地数在上卦，天数在下卦荡成【先天卦】；天数在上卦，地数在下卦荡成【后天卦】。';
    const oscillationRuleEn = hexData.isYangMaleOrYinFemale
      ? 'Yang Male / Yin Female: Heaven Trigram on top, Earth Trigram below for Early Heaven; Earth Trigram on top, Heaven Trigram below for Later Heaven.'
      : 'Yin Male / Yang Female: Earth Trigram on top, Heaven Trigram below for Early Heaven; Heaven Trigram on top, Earth Trigram below for Later Heaven.';

    container.innerHTML = `
      <!-- Canonical Derivation Box -->
      <div class="p-3.5 rounded-xl bg-black/40 border border-amber-500/30 text-xs space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800/80 pb-2">
          <div class="flex items-center space-x-2">
            <span class="text-amber-400 font-bold">🧮</span>
            <span class="text-amber-300 font-bold font-serif-sc">${isEn ? 'Four Pillars Luo Shu & He Tu Mathematical Derivation' : '四柱天纪数理推演 · 洛书与河图正统算法'}</span>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
            ${isEn ? hexData.genderPolarityEn : hexData.genderPolarityZh}
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-[11px]">
          <div class="space-y-1 bg-black/30 p-2.5 rounded-lg border border-gray-800/60">
            <div class="text-gray-400 font-semibold flex items-center justify-between">
              <span>${isEn ? 'Heaven Number (Odd Sum / Base 25):' : '天数归纳（单数和 / 逢25折算）：'}</span>
              <span class="text-amber-400 font-bold font-mono">${sumOdds} → ${tianShu} (${tianTriName})</span>
            </div>
            <p class="text-gray-300 font-mono text-[10px]">${isEn ? tianDerivationEn : tianDerivationZh}</p>
            <p class="text-gray-400 text-[10px]">${isEn ? 'Heavenly Stems Mapping:' : '干分配数：'} <span class="text-gray-200 font-mono">${stemStr}</span></p>
          </div>
          <div class="space-y-1 bg-black/30 p-2.5 rounded-lg border border-gray-800/60">
            <div class="text-gray-400 font-semibold flex items-center justify-between">
              <span>${isEn ? 'Earth Number (Even Sum / Base 30):' : '地数归纳（双数和 / 逢30折算）：'}</span>
              <span class="text-purple-400 font-bold font-mono">${sumEvens} → ${diShu} (${diTriName})</span>
            </div>
            <p class="text-gray-300 font-mono text-[10px]">${isEn ? diDerivationEn : diDerivationZh}</p>
            <p class="text-gray-400 text-[10px]">${isEn ? 'Earthly Branches Mapping:' : '支分配数：'} <span class="text-gray-200 font-mono">${branchStr}</span></p>
          </div>
        </div>
        <div class="text-[10px] text-gray-400 bg-black/50 p-2 rounded border border-gray-800/60 flex items-start gap-2">
          <span class="text-amber-400 font-bold">☯️</span>
          <div>
            <span class="text-gray-300 font-semibold">${isEn ? 'Bagua Oscillation Law: ' : '八卦相荡法则：'}</span>
            <span>${isEn ? oscillationRuleEn : oscillationRuleZh}</span>
            <div class="text-amber-300/90 font-mono mt-0.5">
              ${isEn
                ? `Early Heaven Natal: Upper [${xtUpperName}] + Lower [${xtLowerName}] -> Hexagram ${xtHex.number} · ${xtHex.nameEn} | Later Heaven Mandate: Upper [${htUpperName}] + Lower [${htLowerName}] -> Hexagram ${htHex.number} · ${htHex.nameEn}`
                : `先天命基：上【${xtUpperName}】+ 下【${xtLowerName}】→ 第${xtHex.number}卦 · 【${xtHex.nameZh}】 ｜ 后天跃升：上【${htUpperName}】+ 下【${htLowerName}】→ 第${htHex.number}卦 · 【${htHex.nameZh}】`}
            </div>
          </div>
        </div>
      </div>

      <!-- Master Ni Haisha Yin-Yang Law Liu Nian Hexagram Audit Box -->
      <div class="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-black/60 to-emerald-950/40 border border-amber-500/40 space-y-3 text-xs shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800/80 pb-2">
          <div class="flex items-center space-x-2">
            <span class="chinese-seal text-[9px] py-0 border-amber-500 text-amber-300">${isEn ? 'Tian Ji Divination' : '天纪易卦'}</span>
            <span class="chinese-seal text-[9px] py-0 border-amber-500 text-amber-300">${isEn ? 'YIN-YANG LAW' : '阴阳律'}</span>
            <span class="text-amber-300 font-bold font-serif-sc text-sm">
              ☯️ ${isEn ? 'Master Ni Haisha 《Tian Ji》 Annual Hexagram "Yin-Yang Law" Calibration' : '倪海厦《天纪》流年卦推演 · 阴阳律与岁运变卦秘解'}
            </span>
          </div>
          <span class="px-2.5 py-1 rounded text-[10.5px] font-mono font-bold ${zn.isMutated ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'}">
            ${isEn ? (zn.isMutated ? 'Like Polarities Repel -> Transformed Hexagram' : 'Opposite Polarities Attract -> Retain Base Hexagram') : (zn.isMutated ? '同性相斥 · 变卦执年' : '异性相吸 · 守本卦执年')}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
          <!-- 1. Annual Transit Branch & Polarity -->
          <div class="p-3 rounded-lg bg-black/40 border border-gray-800 space-y-1.5">
            <div class="text-gray-400 text-[10px] font-semibold flex items-center justify-between">
              <span>${isEn ? '1. Annual Transit & Polarity:' : '1. 流年岁次与地支阴阳：'}</span>
              <span class="px-1.5 py-0.2 rounded text-[9px] font-mono ${zn.isYangYear ? 'bg-amber-500/20 text-amber-300' : 'bg-purple-500/20 text-purple-300'}">
                ${isEn ? zn.yearPolarityEn : zn.yearPolarityZh}
              </span>
            </div>
            <div class="font-bold text-amber-300 font-mono text-sm">
              ${zn.year} ${isEn ? (zn.annualGanzhiEn ? `${zn.annualGanzhiEn} · ${zn.yearPolarityEn}` : zn.yearPolarityEn) : (zn.annualGanzhiZh ? `${zn.annualGanzhiZh}年 · ${zn.yearPolarityZh}` : zn.yearPolarityZh)}
            </div>
            <div class="text-[10px] text-gray-400 leading-tight">
              ${isEn
                ? (zn.isYangYear ? 'Branch (Zi, Yin, Chen, Wu, Shen, Xu) -> Yang Year' : 'Branch (Chou, Mao, Si, Wei, You, Hai) -> Yin Year')
                : (zn.isYangYear ? '地支逢【子、寅、辰、午、申、戌】为阳年' : '地支逢【丑、卯、巳、未、酉、亥】为阴年')}
            </div>
          </div>

          <!-- 2. Natal Active Line at Target Age -->
          <div class="p-3 rounded-lg bg-black/40 border border-gray-800 space-y-1.5">
            <div class="text-gray-400 text-[10px] font-semibold flex items-center justify-between">
              <span>${isEn ? `2. Governing Line (Age ${zn.age}):` : `2. 当值爻位（${zn.age}岁）：`}</span>
              <span class="px-1.5 py-0.2 rounded text-[9px] font-mono ${zn.isYangLine ? 'bg-amber-500/20 text-amber-300' : 'bg-purple-500/20 text-purple-300'}">
                ${isEn ? zn.linePolarityEn : zn.linePolarityZh}
              </span>
            </div>
            <div class="font-bold text-purple-300 font-mono text-sm truncate">
              ${isEn ? `${zn.baseHexagram ? zn.baseHexagram.nameEn : ''} Line ${zn.activeLinePos} · ${zn.linePolarityEn}` : `【${zn.baseHexagram ? zn.baseHexagram.nameZh : ''}】第${zn.activeLinePos}爻 · ${zn.linePolarityZh}`}
            </div>
            <div class="text-[10px] text-gray-400 leading-tight">
              ${isEn
                ? (zn.isYangLine ? 'Solid Line (1 / ⚊) -> Yang Line (Governs 9y)' : 'Broken Line (0 / ⚋) -> Yin Line (Governs 6y)')
                : (zn.isYangLine ? '阳爻（—）天纪阳九管9年' : '阴爻（--）天纪阴六管6年')}
            </div>
          </div>

          <!-- 3. Yin-Yang Law Interaction Rule -->
          <div class="p-3 rounded-lg bg-black/40 border border-gray-800 space-y-1.5">
            <div class="text-gray-400 text-[10px] font-semibold flex items-center justify-between">
              <span>${isEn ? '3. Interaction Law & Decision:' : '3. 阴阳律交互决断：'}</span>
              <span class="px-1.5 py-0.2 rounded text-[9px] font-mono ${zn.isMutated ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}">
                ${zn.isMutated ? (isEn ? 'Mutates' : '变爻') : (isEn ? 'Preserved' : '不变')}
              </span>
            </div>
            <div class="font-bold font-mono text-xs ${zn.isMutated ? 'text-amber-300' : 'text-emerald-300'} leading-snug">
              ${isEn ? zn.ruleInteractionEn : zn.ruleInteractionZh}
            </div>
            <div class="text-[10px] text-gray-400 leading-tight">
              ${isEn
                ? (zn.isMutated ? 'Like polarities repel -> line mutates to derive Bian Gua' : 'Opposite polarities attract -> harmony, line unchanged, retain Ben Gua')
                : (zn.isMutated ? '同性相斥气极必变，当值爻位翻转得变卦' : '异性相吸阴阳调和，气机守正不妄动，遵本卦')}
            </div>
          </div>
        </div>

        <!-- Master Ni Tian Ji Canonical Liu Nian Directive Comparison -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1 text-[11px]">
          <div class="p-2.5 rounded-lg bg-black/50 border border-gray-800/80 space-y-1">
            <div class="text-gray-400 text-[10px] flex items-center justify-between border-b border-gray-800/60 pb-1">
              <span class="font-semibold text-gray-300">${isEn ? 'Base Hexagram Decennial Premise:' : '本命卦（当期大运基调）：'}</span>
              <span class="text-amber-400 font-mono font-bold">${isEn ? (zn.baseHexagram ? zn.baseHexagram.nameEn : '') : (zn.baseHexagram ? zn.baseHexagram.nameZh : '')}</span>
            </div>
            <p class="text-gray-300 leading-relaxed text-[11px] pt-0.5">
              ${isEn ? (zn.baseTianJi ? zn.baseTianJi.liuNianEn : 'Consolidate foundational assets with disciplined prudence.') : (zn.baseTianJi ? zn.baseTianJi.liuNianZh : '基业稳健，审慎行止，蓄势待发。')}
            </p>
          </div>
          <div class="p-2.5 rounded-lg bg-black/50 border ${zn.isMutated ? 'border-amber-500/50' : 'border-emerald-500/50'} space-y-1">
            <div class="text-gray-400 text-[10px] flex items-center justify-between border-b border-gray-800/60 pb-1">
              <span class="font-semibold ${zn.isMutated ? 'text-amber-300' : 'text-emerald-300'}">
                ${isEn ? (zn.isMutated ? 'Annual Transformed Hexagram Directive:' : 'Annual Preserved Base Hexagram Mandate:') : (zn.isMutated ? '值年变卦断辞（当岁战术突破）：' : '值年本卦断辞（当岁执权守正）：')}
              </span>
              <span class="font-mono font-bold ${zn.isMutated ? 'text-amber-300' : 'text-emerald-300'}">
                ${isEn ? (znHex ? znHex.nameEn : '') : (znHex ? znHex.nameZh : '')}
              </span>
            </div>
            <p class="text-gray-200 leading-relaxed text-[11px] pt-0.5">
              ${isEn ? (znTj.liuNianEn || 'Auspicious achievements with disciplined execution; avoid impulsive risks.') : (znTj.liuNianZh || '吉庆临门，加官进禄，文书有喜；防刚愎自用，宜守正求稳。')}
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="p-4 sm:p-5 rounded-2xl bg-black/30 border ${hexData.activeStage === 'xianTian' ? 'border-amber-500/60 shadow-amber-950/20' : 'border-gray-800'} space-y-3.5 flex flex-col justify-between shadow-xl">
          <div class="space-y-2">
            <div class="flex justify-between items-start border-b border-gray-800 pb-2">
              <div>
                <span class="chinese-seal text-[10px] py-0 border-amber-500/50 text-amber-300">${isEn ? 'EARLY HEAVEN' : '先天命基'}</span>
                <h3 class="text-base font-bold font-serif-sc text-amber-300 mt-1">
                  ${isEn ? `Hexagram ${xtHex.number}: ${xtHex.nameEn}` : `第${xtHex.number}卦 · ${xtHex.nameZh}`}
                </h3>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${hexData.activeStage === 'xianTian' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-gray-800 text-gray-400'}">
                ${isEn ? xt.ageSpanEn : xt.ageSpanZh}
              </span>
            </div>
            <div class="space-y-1 py-1">
              ${renderLinesHtml(xt.lines)}
            </div>
            <div class="p-3 rounded-xl bg-black/50 border border-gray-800 text-xs space-y-1.5">
              <div class="flex items-center space-x-1.5 text-amber-400 font-bold font-serif-sc">
                <span>📖</span>
                <span>${isEn ? 'Ni Haisha 《Tian Ji》 Early Heaven Exegesis' : '倪海厦《天纪》先天卦断'}</span>
              </div>
              <p class="text-gray-300 leading-relaxed text-[11px]">
                ${isEn ? (xtTj.xianTianEn || 'Born with profound innate fortitude and natural wisdom.') : (xtTj.xianTianZh || '生来有财智慧高，早岁多磨砺，少年早达。')}
              </p>
            </div>
          </div>
          <div class="text-[10px] text-gray-500 text-right font-mono">
            ${isEn ? `Governs first ${xt.totalYears} years of life` : `统摄前半生共 ${xt.totalYears} 年行止`}
          </div>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-black/30 border ${hexData.activeStage === 'houTian' ? 'border-amber-500/60 shadow-amber-950/20' : 'border-gray-800'} space-y-3.5 flex flex-col justify-between shadow-xl">
          <div class="space-y-2">
            <div class="flex justify-between items-start border-b border-gray-800 pb-2">
              <div>
                <span class="chinese-seal text-[10px] py-0 border-purple-500/50 text-purple-300">${isEn ? 'LATER HEAVEN' : '后天跃升'}</span>
                <h3 class="text-base font-bold font-serif-sc text-purple-300 mt-1">
                  ${isEn ? `Hexagram ${htHex.number}: ${htHex.nameEn}` : `第${htHex.number}卦 · ${htHex.nameZh}`}
                </h3>
                <p class="text-[10.5px] font-mono text-purple-300/80 mt-0.5">
                  ${isEn ? (ht.derivationRuleEn || '') : (ht.derivationRuleZh || '')}
                </p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${hexData.activeStage === 'houTian' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'bg-gray-800 text-gray-400'}">
                ${isEn ? ht.ageSpanEn : ht.ageSpanZh}
              </span>
            </div>
            <div class="space-y-1 py-1">
              ${renderLinesHtml(ht.lines)}
            </div>
            <div class="p-3 rounded-xl bg-black/50 border border-gray-800 text-xs space-y-1.5">
              <div class="flex items-center space-x-1.5 text-purple-400 font-bold font-serif-sc">
                <span>📖</span>
                <span>${isEn ? 'Ni Haisha 《Tian Ji》 Later Heaven Exegesis' : '倪海厦《天纪》后天卦断'}</span>
              </div>
              <p class="text-gray-300 leading-relaxed text-[11px]">
                ${isEn ? (htTj.houTianEn || 'Empowered sovereign accomplishments and solid institutional foundations.') : (htTj.houTianZh || '官带加身，位高权重，动见瞻观，终成一代首领。')}
              </p>
            </div>
          </div>
          <div class="text-[10px] text-gray-500 text-right font-mono">
            ${isEn ? `Governs subsequent mature compounding cycles` : `统摄后半生厚积薄发之鼎盛基业`}
          </div>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-black/30 border ${zn.isMutated ? 'border-amber-500/50 shadow-amber-950/20' : 'border-emerald-500/50 shadow-emerald-950/20'} space-y-3.5 flex flex-col justify-between shadow-xl">
          <div class="space-y-2">
            <div class="flex justify-between items-start border-b border-gray-800 pb-2">
              <div>
                <span class="chinese-seal text-[10px] py-0 ${zn.isMutated ? 'border-amber-500/50 text-amber-300' : 'border-emerald-500/50 text-emerald-300'}">
                  ${isEn ? (zn.isMutated ? 'TRANSFORMED GUA' : 'BASE GUA') : (zn.isMutated ? '变卦执年' : '守本卦执年')}
                </span>
                <h3 class="text-base font-bold font-serif-sc ${zn.isMutated ? 'text-amber-300' : 'text-emerald-300'} mt-1">
                  ${isEn ? `${zn.year} ${zn.annualGanzhiEn || ''} (Age ${zn.age}): ${znHex.nameEn}` : `${zn.year}年 ${zn.annualGanzhiZh || zn.annualGanzhi || ''} (${zn.age}岁) · ${znHex.nameZh}`}
                </h3>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${zn.isMutated ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'}">
                ${zn.isMutated ? (isEn ? `Line ${zn.activeLinePos} Mutated` : `第${zn.activeLinePos}爻变`) : (isEn ? `Line ${zn.activeLinePos} Preserved` : `第${zn.activeLinePos}爻守本`)}
              </span>
            </div>
            <div class="p-2.5 rounded-lg bg-black/50 border border-gray-800 text-[10.5px] font-mono ${zn.isMutated ? 'text-amber-300' : 'text-emerald-300'}">
              ${isEn ? zn.ruleInteractionEn : zn.ruleInteractionZh}
            </div>
            <div class="p-3 rounded-xl bg-black/50 border border-gray-800 text-xs space-y-1.5">
              <div class="flex items-center space-x-1.5 ${zn.isMutated ? 'text-amber-400' : 'text-emerald-400'} font-bold font-serif-sc">
                <span>⚡</span>
                <span>${isEn ? 'Ni Haisha 《Tian Ji》 Annual Transit Oracle' : '倪海厦《天纪》流年卦断'}</span>
              </div>
              <p class="text-gray-300 leading-relaxed text-[11px]">
                ${isEn ? (znTj.liuNianEn || 'Auspicious achievements with disciplined execution; avoid impulsive risks.') : (znTj.liuNianZh || '吉庆临门，加官进禄，文书有喜；防刚愎自用，宜守正求稳。')}
              </p>
            </div>
            <div class="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs space-y-1.5">
              <div class="flex items-center space-x-1.5 text-amber-300 font-bold font-serif-sc">
                <span>🔮</span>
                <span>${isEn ? 'Luminous Jade Glyph & Celestial Cipher' : '玉上有光 · 字谜与天机解密'}</span>
              </div>
              <p class="text-gray-300 leading-relaxed text-[11px] italic">
                ${isEn ? (znTj.riddleEn || 'Treasures emerge through integrity and calculated persistence.') : (znTj.riddleZh || '图示明珠出土，金甲将军护卫，大器晚成、光华内敛后一鸣惊人。')}
              </p>
            </div>
          </div>
          <div class="text-[10px] ${zn.isMutated ? 'text-amber-400/80' : 'text-emerald-400/80'} text-right font-mono">
            ${isEn ? (zn.isMutated ? `Like polarities repel: Line ${zn.activeLinePos} flipped to produce ${znHex.nameEn}` : `Opposite polarities attract: Line ${zn.activeLinePos} held steady in base ${znHex.nameEn}`) : (zn.isMutated ? `同性相斥：第${zn.activeLinePos}爻气机激荡变爻，定卦【${znHex.nameZh}】` : `异性相吸：第${zn.activeLinePos}爻阴阳和合不变，安守本卦【${znHex.nameZh}】`)}
          </div>
        </div>
      </div>
    `;

    const isHooked = slider.hasAttribute ? slider.hasAttribute('data-slider-hooked') : slider._sliderHooked;
    if (slider && !isHooked) {
      if (slider.setAttribute) slider.setAttribute('data-slider-hooked', 'true');
      slider._sliderHooked = true;
      slider.addEventListener('input', (e) => {
        fourPillarsActiveAge = parseInt(e.target.value, 10) || 35;
        if (ageDisplay) ageDisplay.textContent = isEn ? `${fourPillarsActiveAge} yrs` : `${fourPillarsActiveAge} 岁`;
        if (currentBaziResult) {
          renderFourPillarsHexagrams(currentBaziResult);
          if (typeof renderHexagramCycle === 'function') renderHexagramCycle(currentBaziResult, fourPillarsActiveAge);
        }
      });
    }

    if (typeof renderHexagramCycle === 'function') {
      renderHexagramCycle(res, fourPillarsActiveAge);
    }
  }

  // ==========================================================================
  // 周易六十四卦时空周期推演图 (Hexagram Cycle & Lifelong Progression Engine)
  // ==========================================================================

  function renderHexagramCycle(res, activeAge) {
    const isEn = (currentLang === 'en');
    const container = document.getElementById('ichingCycleContainer');
    if (!container) return;

    if (!res || !res.pillars) {
      container.innerHTML = `<p class="text-xs text-gray-500">${isEn ? 'Awaiting natal chart calculation...' : '八字命盘计算中，周期推演即将呈现...'}</p>`;
      return;
    }

    if (res) currentBaziResult = currentBaziResult || res;

    let birthYear = (res.input && res.input.year) || res.birthYear || 1990;
    if (activeAge !== undefined && activeAge !== null) {
      fourPillarsActiveAge = Math.max(1, Math.min(100, activeAge));
    }
    const slider = document.getElementById('fourPillarsAgeSlider');
    if (slider) slider.value = fourPillarsActiveAge;
    const ageDisplay = document.getElementById('fourPillarsAgeDisplay');
    if (ageDisplay) {
      ageDisplay.textContent = isEn ? `${fourPillarsActiveAge} yrs` : `${fourPillarsActiveAge} 岁`;
    }

    // Sync age badge and controls
    const ageBadge = document.getElementById('ichingCycleAgeBadge');
    if (ageBadge) {
      ageBadge.textContent = isEn ? `Age ${fourPillarsActiveAge}` : `${fourPillarsActiveAge}岁`;
    }

    // Compute or retrieve 100-year cycle dataset
    const points = (typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateLifelongCycle === 'function')
      ? IChingEngine.calculateLifelongCycle(res)
      : [];

    cachedIChingCycleData = points;

    if (!points || points.length === 0) {
      container.innerHTML = `<p class="text-xs text-gray-500">${isEn ? 'Generating hexagram cycle progression...' : '易数时空周期数据生成中...'}</p>`;
      return;
    }

    const currentPoint = points[fourPillarsActiveAge - 1] || points[0];

    // Wire mode switcher tabs
    const tabTimeline = document.getElementById('ichingTabTimeline');
    const tabYao = document.getElementById('ichingTabYaoStages');
    const tabCosmic = document.getElementById('ichingTabCosmic');

    const updateTabStyles = () => {
      [
        { btn: tabTimeline, id: 'timeline' },
        { btn: tabYao, id: 'yaoStages' },
        { btn: tabCosmic, id: 'cosmic' }
      ].forEach(({ btn, id }) => {
        if (!btn) return;
        if (activeIChingCycleTab === id) {
          btn.className = 'px-3 py-1 rounded-lg font-bold transition bg-amber-500/20 text-amber-300 border border-amber-500/30 cursor-pointer';
        } else {
          btn.className = 'px-3 py-1 rounded-lg font-bold transition text-gray-400 hover:text-gray-200 border border-transparent cursor-pointer';
        }
      });
    };
    updateTabStyles();

    if (tabTimeline && !tabTimeline._hooked) {
      tabTimeline._hooked = true;
      tabTimeline.addEventListener('click', () => {
        activeIChingCycleTab = 'timeline';
        updateTabStyles();
        renderHexagramCycle(currentBaziResult || res, fourPillarsActiveAge);
      });
    }
    if (tabYao && !tabYao._hooked) {
      tabYao._hooked = true;
      tabYao.addEventListener('click', () => {
        activeIChingCycleTab = 'yaoStages';
        updateTabStyles();
        renderHexagramCycle(currentBaziResult || res, fourPillarsActiveAge);
      });
    }
    if (tabCosmic && !tabCosmic._hooked) {
      tabCosmic._hooked = true;
      tabCosmic.addEventListener('click', () => {
        activeIChingCycleTab = 'cosmic';
        updateTabStyles();
        renderHexagramCycle(currentBaziResult || res, fourPillarsActiveAge);
      });
    }

    // Controls: Play / Pause
    const playBtn = document.getElementById('ichingCyclePlayBtn');
    const playIcon = document.getElementById('ichingCyclePlayIcon');
    const playText = document.getElementById('ichingCyclePlayText');
    if (playBtn && !playBtn._hooked) {
      playBtn._hooked = true;
      playBtn.addEventListener('click', () => {
        if (isIChingCyclePlaying) {
          stopIChingCyclePlay();
        } else {
          startIChingCyclePlay();
        }
      });
    }

    // Controls: Prev / Next
    const prevBtn = document.getElementById('ichingCyclePrevBtn');
    const nextBtn = document.getElementById('ichingCycleNextBtn');
    if (prevBtn && !prevBtn._hooked) {
      prevBtn._hooked = true;
      prevBtn.addEventListener('click', () => {
        setIChingActiveAge(fourPillarsActiveAge - 1);
      });
    }
    if (nextBtn && !nextBtn._hooked) {
      nextBtn._hooked = true;
      nextBtn.addEventListener('click', () => {
        setIChingActiveAge(fourPillarsActiveAge + 1);
      });
    }

    // Milestone buttons
    document.querySelectorAll('.iching-milestone-btn').forEach(btn => {
      if (!btn._hooked) {
        btn._hooked = true;
        btn.addEventListener('click', () => {
          const activeRes = currentBaziResult || res;
          const activeBYear = (activeRes && activeRes.input && activeRes.input.year) || (activeRes && activeRes.birthYear) || 1990;
          const ageAttr = btn.getAttribute('data-age');
          if (ageAttr) {
            setIChingActiveAge(parseInt(ageAttr, 10));
          } else if (btn.id === 'ichingBtnEpochHandover') {
            const activePts = (cachedIChingCycleData && cachedIChingCycleData.length > 0) ? cachedIChingCycleData : points;
            const xtYears = (activePts[0] && activePts[0].governingHex) ? (activePts.find(p => !p.isXianTian) ? activePts.find(p => !p.isXianTian).age : 48) : 48;
            setIChingActiveAge(xtYears);
          } else if (btn.id === 'ichingBtnRealAge') {
            const currentYear = new Date().getFullYear();
            const realAge = Math.max(1, Math.min(100, Math.abs(currentYear - activeBYear)));
            setIChingActiveAge(realAge);
          }
        });
      }
    });

    // Sub-view rendering based on activeIChingCycleTab
    if (activeIChingCycleTab === 'timeline') {
      renderTimelineTabHtml(container, points, currentPoint, isEn);
      drawHexagramCycleChart(points, fourPillarsActiveAge);
    } else if (activeIChingCycleTab === 'yaoStages') {
      renderYaoStagesTabHtml(container, res, currentPoint, isEn);
    } else if (activeIChingCycleTab === 'cosmic') {
      renderCosmicTabHtml(container, currentPoint, isEn);
    }
  }

  function setIChingActiveAge(age) {
    fourPillarsActiveAge = Math.max(1, Math.min(100, age));
    const slider = document.getElementById('fourPillarsAgeSlider');
    if (slider) slider.value = fourPillarsActiveAge;
    const ageDisplay = document.getElementById('fourPillarsAgeDisplay');
    if (ageDisplay) ageDisplay.textContent = (currentLang === 'en') ? `${fourPillarsActiveAge} yrs` : `${fourPillarsActiveAge} 岁`;
    const ageBadge = document.getElementById('ichingCycleAgeBadge');
    if (ageBadge) ageBadge.textContent = (currentLang === 'en') ? `Age ${fourPillarsActiveAge}` : `${fourPillarsActiveAge}岁`;

    if (currentBaziResult) {
      renderFourPillarsHexagrams(currentBaziResult);
      renderHexagramCycle(currentBaziResult, fourPillarsActiveAge);
    }
  }

  function startIChingCyclePlay() {
    if (isIChingCyclePlaying) return;
    isIChingCyclePlaying = true;
    const playIcon = document.getElementById('ichingCyclePlayIcon');
    const playText = document.getElementById('ichingCyclePlayText');
    if (playIcon) playIcon.textContent = '⏸️';
    if (playText) playText.textContent = (currentLang === 'en') ? 'Pause' : '暂停推演';

    const setTimerFn = (typeof window !== 'undefined' && window.setInterval) ? window.setInterval : (typeof setInterval !== 'undefined' ? setInterval : null);
    if (!setTimerFn) return;
    ichingCyclePlayTimer = setTimerFn(() => {
      let nextAge = fourPillarsActiveAge + 1;
      if (nextAge > 100) nextAge = 1;
      setIChingActiveAge(nextAge);
    }, 380);
  }

  function stopIChingCyclePlay() {
    isIChingCyclePlaying = false;
    const playIcon = document.getElementById('ichingCyclePlayIcon');
    const playText = document.getElementById('ichingCyclePlayText');
    if (playIcon) playIcon.textContent = '▶️';
    if (playText) playText.textContent = (currentLang === 'en') ? 'Auto Play' : '连续推演';
    if (ichingCyclePlayTimer) {
      const clearTimerFn = (typeof window !== 'undefined' && window.clearInterval) ? window.clearInterval : (typeof clearInterval !== 'undefined' ? clearInterval : null);
      if (clearTimerFn) clearTimerFn(ichingCyclePlayTimer);
      ichingCyclePlayTimer = null;
    }
  }

  function renderTimelineTabHtml(container, points, item, isEn) {
    const hex = item.annualHex || { number: 1, nameZh: '乾为天', nameEn: 'The Creative' };
    const tj = item.annualTJ || {};
    const gHex = item.governingHex || { number: 1, nameZh: '乾为天', nameEn: 'The Creative' };
    const currentLangCode = isEn ? 'en' : 'zh';

    if (container.getAttribute('data-active-tab') === 'timeline' &&
        container.getAttribute('data-lang') === currentLangCode &&
        document.getElementById('ichingCycleCanvas') &&
        document.getElementById('ichingTelemetryEpochTitle')) {

      const elEpochBadge = document.getElementById('ichingTelemetryEpochBadge');
      const elEpochTitle = document.getElementById('ichingTelemetryEpochTitle');
      const elEpochDesc = document.getElementById('ichingTelemetryEpochDesc');

      const elRulerBadge = document.getElementById('ichingTelemetryRulerBadge');
      const elRulerTitle = document.getElementById('ichingTelemetryRulerTitle');
      const elRulerDesc = document.getElementById('ichingTelemetryRulerDesc');

      const elTransitBadge = document.getElementById('ichingTelemetryTransitBadge');
      const elTransitTitle = document.getElementById('ichingTelemetryTransitTitle');
      const elTransitDesc = document.getElementById('ichingTelemetryTransitDesc');

      const elTJScore = document.getElementById('ichingTelemetryTJScore');
      const elTJDirective = document.getElementById('ichingTelemetryTJDirective');
      const elTJRiddle = document.getElementById('ichingTelemetryTJRiddle');

      if (elEpochTitle && elRulerTitle && elTransitTitle && elTJDirective) {
        if (elEpochBadge) {
          elEpochBadge.textContent = isEn ? (item.isXianTian ? 'Early Heaven' : 'Later Heaven') : (item.isXianTian ? '前半生' : '后半生');
          elEpochBadge.className = `px-1.5 py-0.2 rounded text-[9px] font-mono ${item.isXianTian ? 'bg-amber-500/20 text-amber-300' : 'bg-purple-500/20 text-purple-300'}`;
        }
        elEpochTitle.textContent = isEn ? item.epochEn : item.epochZh;
        if (elEpochDesc) elEpochDesc.textContent = isEn ? `Governed by Hexagram ${gHex.number}: ${gHex.nameEn}` : `统摄本基：第${gHex.number}卦 · 【${gHex.nameZh}】`;

        if (elRulerBadge) {
          elRulerBadge.textContent = isEn ? (item.isYangLine ? 'Yang (9y)' : 'Yin (6y)') : (item.isYangLine ? '阳九管9年' : '阴六管6年');
          elRulerBadge.className = `px-1.5 py-0.2 rounded text-[9px] font-mono ${item.isYangLine ? 'bg-amber-500/20 text-amber-300' : 'bg-purple-500/20 text-purple-300'}`;
        }
        elRulerTitle.textContent = isEn ? `Line ${item.activeLinePos} Active` : `第${item.activeLinePos}爻当值执权`;
        if (elRulerDesc) elRulerDesc.textContent = `${item.activeLine ? (isEn ? item.activeLine.ageSpanEn : item.activeLine.ageSpanZh) : ''} · ${isEn ? (item.isYangLine ? 'Solid Line (⚊)' : 'Broken Line (⚋)') : (item.isYangLine ? '天数纯阳' : '地数纯阴')}`;

        if (elTransitBadge) {
          elTransitBadge.textContent = item.isMutated ? (isEn ? 'Mutated' : '变卦') : (isEn ? 'Preserved' : '守本');
          elTransitBadge.className = `px-1.5 py-0.2 rounded text-[9px] font-mono font-bold ${item.isMutated ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}`;
        }
        elTransitTitle.textContent = `${item.year} ${isEn ? item.annualGanzhiEn : item.annualGanzhiZh} · ${isEn ? hex.nameEn : hex.nameZh}`;
        elTransitTitle.className = `text-sm font-bold font-serif-sc ${item.isMutated ? 'text-amber-300' : 'text-emerald-300'} truncate`;
        if (elTransitDesc) elTransitDesc.textContent = isEn ? item.ruleInteractionEn : item.ruleInteractionZh;

        if (elTJScore) elTJScore.textContent = `${item.score}% ${isEn ? 'Score' : '能级'}`;
        elTJDirective.textContent = isEn ? (tj.liuNianEn || 'Auspicious achievements with disciplined execution.') : (tj.liuNianZh || '吉庆临门，加官进禄，稳健守正求通。');
        if (elTJRiddle) elTJRiddle.textContent = isEn ? (tj.riddleEn || 'Treasures emerge through inner clarity.') : (tj.riddleZh || '图示明珠出土，大器晚成。');

        const elResonance = document.getElementById('ichingTelemetryResonance');
        if (elResonance) elResonance.textContent = isEn ? (item.elementalResonanceEn || '') : (item.elementalResonanceZh || '');
        const elDynamicInterp = document.getElementById('ichingTelemetryDynamicInterp');
        if (elDynamicInterp) elDynamicInterp.textContent = isEn ? (item.dynamicInterpretationEn || '') : (item.dynamicInterpretationZh || '');
        const elDynamicScore = document.getElementById('ichingTelemetryDynamicScore');
        if (elDynamicScore) elDynamicScore.textContent = `${item.score}% ${isEn ? 'Adjusted' : '校准能级'}`;
        return;
      }
    }

    if (container.setAttribute) {
      container.setAttribute('data-active-tab', 'timeline');
      container.setAttribute('data-lang', currentLangCode);
    }

    container.innerHTML = `
      <!-- Interactive Lifelong Hexagram Progression Canvas -->
      <div class="relative rounded-2xl bg-black/40 border border-gray-800 p-3 sm:p-4 space-y-2 shadow-inner">
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div class="flex items-center space-x-2">
            <span class="text-amber-400 font-bold">📈</span>
            <span class="font-bold text-gray-200 font-serif-sc">${isEn ? 'Lifelong 100-Year Hexagram Energy & Transit Trajectory' : '百岁岁运六十四卦易数气机波动轨迹'}</span>
          </div>
          <div class="flex items-center gap-3 text-[10.5px] font-mono text-gray-400">
            <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span> ${isEn ? 'Mutated (Breakthrough)' : '同性相斥 · 变卦激荡'}</span>
            <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> ${isEn ? 'Preserved (Harmony)' : '异性相吸 · 守本稳健'}</span>
            <span class="flex items-center gap-1"><span class="w-2 h-2 rounded bg-rose-500"></span> ${isEn ? 'Current Needle' : '当前岁次游标'}</span>
          </div>
        </div>

        <!-- Canvas Element with touch-none to prevent page vertical scrolling while dragging horizontally -->
        <canvas id="ichingCycleCanvas" class="w-full h-48 sm:h-56 rounded-xl bg-black/60 border border-gray-800/80 cursor-crosshair shadow-md touch-none" style="touch-action: none;"></canvas>

        <div class="flex justify-between items-center text-[10px] text-gray-500 font-mono px-1">
          <span>${isEn ? 'Age 1 (Early Inception)' : '1岁 (初爻潜龙发端)'}</span>
          <span>${isEn ? 'Click or drag across canvas to inspect any year' : '可直接点击或拖动趋势图任意位置自由探索'}</span>
          <span>${isEn ? 'Age 100 (Centenarian)' : '100岁 (期颐圆满归道)'}</span>
        </div>
      </div>

      <!-- Real-Time Cycle Telemetry Detail Grid -->
      <div id="ichingTelemetryGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <!-- 1. Life Epoch & Governing Natal Mandate -->
        <div class="p-3.5 rounded-xl bg-black/40 border border-gray-800 space-y-1.5 shadow">
          <div class="flex items-center justify-between text-gray-400 text-[10.5px] font-semibold border-b border-gray-800/70 pb-1">
            <span>🏛️ ${isEn ? 'Life Epoch & Natal Base' : '生命纪元与主导命基'}</span>
            <span id="ichingTelemetryEpochBadge" class="px-1.5 py-0.2 rounded text-[9px] font-mono ${item.isXianTian ? 'bg-amber-500/20 text-amber-300' : 'bg-purple-500/20 text-purple-300'}">
              ${isEn ? (item.isXianTian ? 'Early Heaven' : 'Later Heaven') : (item.isXianTian ? '前半生' : '后半生')}
            </span>
          </div>
          <div id="ichingTelemetryEpochTitle" class="text-sm font-bold font-serif-sc text-amber-300">
            ${isEn ? item.epochEn : item.epochZh}
          </div>
          <p id="ichingTelemetryEpochDesc" class="text-[11px] text-gray-300 leading-tight">
            ${isEn ? `Governed by Hexagram ${gHex.number}: ${gHex.nameEn}` : `统摄本基：第${gHex.number}卦 · 【${gHex.nameZh}】`}
          </p>
        </div>

        <!-- 2. Governing Yao Ruler -->
        <div class="p-3.5 rounded-xl bg-black/40 border border-gray-800 space-y-1.5 shadow">
          <div class="flex items-center justify-between text-gray-400 text-[10.5px] font-semibold border-b border-gray-800/70 pb-1">
            <span>👑 ${isEn ? 'Governing Yao Ruler' : '大运统辖值爻'}</span>
            <span id="ichingTelemetryRulerBadge" class="px-1.5 py-0.2 rounded text-[9px] font-mono ${item.isYangLine ? 'bg-amber-500/20 text-amber-300' : 'bg-purple-500/20 text-purple-300'}">
              ${isEn ? (item.isYangLine ? 'Yang (9y)' : 'Yin (6y)') : (item.isYangLine ? '阳九管9年' : '阴六管6年')}
            </span>
          </div>
          <div id="ichingTelemetryRulerTitle" class="text-sm font-bold font-serif-sc text-amber-300">
            ${isEn ? `Line ${item.activeLinePos} Active` : `第${item.activeLinePos}爻当值执权`}
          </div>
          <p id="ichingTelemetryRulerDesc" class="text-[11px] text-gray-300 leading-tight">
            ${item.activeLine ? (isEn ? item.activeLine.ageSpanEn : item.activeLine.ageSpanZh) : ''} · ${isEn ? (item.isYangLine ? 'Solid Line (⚊)' : 'Broken Line (⚋)') : (item.isYangLine ? '天数纯阳' : '地数纯阴')}
          </p>
        </div>

        <!-- 3. Annual Transit Hexagram & Yin-Yang Law -->
        <div class="p-3.5 rounded-xl bg-black/40 border border-gray-800 space-y-1.5 shadow">
          <div class="flex items-center justify-between text-gray-400 text-[10.5px] font-semibold border-b border-gray-800/70 pb-1">
            <span>☯️ ${isEn ? 'Annual Transit & Law' : '流年值年卦与阴阳律'}</span>
            <span id="ichingTelemetryTransitBadge" class="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold ${item.isMutated ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}">
              ${item.isMutated ? (isEn ? 'Mutated' : '变卦') : (isEn ? 'Preserved' : '守本')}
            </span>
          </div>
          <div id="ichingTelemetryTransitTitle" class="text-sm font-bold font-serif-sc ${item.isMutated ? 'text-amber-300' : 'text-emerald-300'} truncate">
            ${item.year} ${isEn ? item.annualGanzhiEn : item.annualGanzhiZh} · ${isEn ? hex.nameEn : hex.nameZh}
          </div>
          <p id="ichingTelemetryTransitDesc" class="text-[10.5px] font-mono text-gray-300 leading-tight truncate">
            ${isEn ? item.ruleInteractionEn : item.ruleInteractionZh}
          </p>
        </div>

        <!-- 4. Tian Ji Directive & Riddle -->
        <div class="p-3.5 rounded-xl bg-black/40 border border-gray-800 space-y-1.5 shadow">
          <div class="flex items-center justify-between text-gray-400 text-[10.5px] font-semibold border-b border-gray-800/70 pb-1">
            <span>📜 ${isEn ? 'Tian Ji Master Directive' : '天纪秘解与玉上有光'}</span>
            <span id="ichingTelemetryTJScore" class="text-[9px] font-mono text-amber-400/90">${item.score}% ${isEn ? 'Score' : '能级'}</span>
          </div>
          <p id="ichingTelemetryTJDirective" class="text-[11px] text-gray-200 line-clamp-2 leading-relaxed font-sans">
            ${isEn ? (tj.liuNianEn || 'Auspicious achievements with disciplined execution.') : (tj.liuNianZh || '吉庆临门，加官进禄，稳健守正求通。')}
          </p>
          <p id="ichingTelemetryTJRiddle" class="text-[10px] text-gray-400 italic line-clamp-1">
            ${isEn ? (tj.riddleEn || 'Treasures emerge through inner clarity.') : (tj.riddleZh || '图示明珠出土，大器晚成。')}
          </p>
        </div>

        <!-- 5. BaZi Elemental Resonance & Dynamic Interpretation -->
        ${item.dynamicInterpretationZh ? `
          <div class="col-span-1 md:col-span-2 lg:col-span-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1.5 shadow">
            <div class="flex flex-wrap items-center justify-between gap-2 font-bold text-amber-200 border-b border-amber-500/20 pb-1">
              <span class="flex items-center gap-1.5 font-serif-sc">
                <span>⚖️</span>
                <span>${isEn ? 'BaZi & Hexagram Elemental Dynamic Resonance:' : '本命五行气机交感与时空格局流变：'}</span>
                <span id="ichingTelemetryResonance" class="font-normal text-amber-300">${isEn ? item.elementalResonanceEn : item.elementalResonanceZh}</span>
              </span>
              <span id="ichingTelemetryDynamicScore" class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">
                ${item.score}% ${isEn ? 'Adjusted' : '校准能级'}
              </span>
            </div>
            <p id="ichingTelemetryDynamicInterp" class="text-[11px] text-gray-200 leading-relaxed font-sans">
              ${isEn ? item.dynamicInterpretationEn : item.dynamicInterpretationZh}
            </p>
          </div>
        ` : ''}
      </div>
    `;

    // Hook canvas click and drag safely (no multiple listeners on window)
    const canvas = document.getElementById('ichingCycleCanvas');
    if (canvas && !canvas._hooked) {
      canvas._hooked = true;
      const handleCanvasAction = (clientX) => {
        const rect = canvas.getBoundingClientRect ? canvas.getBoundingClientRect() : { left: 0, width: 600 };
        const clickX = clientX - (rect.left || 0);
        const padL = 36;
        const padR = 24;
        const chartW = (rect.width || 600) - padL - padR;
        if (chartW > 0) {
          const ratio = Math.max(0, Math.min(1, (clickX - padL) / chartW));
          const clickedAge = Math.round(1 + ratio * 99);
          setIChingActiveAge(clickedAge);
        }
      };

      let isDragging = false;
      canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        handleCanvasAction(e.clientX || 0);
      });

      if (!window._ichingCanvasWindowHooked && typeof window !== 'undefined' && window.addEventListener) {
        window._ichingCanvasWindowHooked = true;
        window.addEventListener('mousemove', (e) => {
          if (isDragging) handleCanvasAction(e.clientX || 0);
        });
        window.addEventListener('mouseup', () => {
          isDragging = false;
        });
      }

      // Touch events with passive: false to prevent scrolling during horizontal timeline scrub
      canvas.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
          if (e.cancelable && e.preventDefault) e.preventDefault();
          handleCanvasAction(e.touches[0].clientX || 0);
        }
      }, { passive: false });
      canvas.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) {
          if (e.cancelable && e.preventDefault) e.preventDefault();
          handleCanvasAction(e.touches[0].clientX || 0);
        }
      }, { passive: false });

      canvas.addEventListener('click', (e) => {
        handleCanvasAction(e.clientX || 0);
      });
    }
  }

  function drawHexagramCycleChart(points, activeAge) {
    const canvas = document.getElementById('ichingCycleCanvas');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isEn = (currentLang === 'en');
    const rect = canvas.getBoundingClientRect ? canvas.getBoundingClientRect() : { width: canvas.width || 600, height: canvas.height || 220 };
    const parentW = (canvas.parentElement && canvas.parentElement.clientWidth) ? canvas.parentElement.clientWidth : 0;
    const w = (rect.width > 0 ? rect.width : (parentW > 0 ? parentW : (canvas.clientWidth || 600)));
    const h = (rect.height > 0 ? rect.height : (canvas.clientHeight || 220));
    const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;

    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    if (ctx.scale) ctx.scale(dpr, dpr);

    if (ctx.clearRect) ctx.clearRect(0, 0, w, h);

    const padL = 36;
    const padR = 24;
    const padT = 36;
    const padB = 26;
    const chartW = w - padL - padR;
    const chartH = h - padT - padB;

    if (chartW <= 0 || chartH <= 0 || !points || points.length === 0) return;

    // Find Xian Tian boundary
    const xtCutoff = points.findIndex(p => !p.isXianTian);
    const xtCount = (xtCutoff > 0) ? xtCutoff : 48;
    const xtWidth = (xtCount / 99) * chartW;

    // 1. Top Epoch Ribbon
    if (ctx.save) ctx.save();
    // Xian Tian Band
    const xtGrad = (ctx.createLinearGradient) ? ctx.createLinearGradient(padL, 0, padL + xtWidth, 0) : null;
    if (xtGrad && xtGrad.addColorStop) {
      xtGrad.addColorStop(0, 'rgba(217, 119, 6, 0.45)');
      xtGrad.addColorStop(1, 'rgba(180, 83, 9, 0.25)');
      ctx.fillStyle = xtGrad;
    } else {
      ctx.fillStyle = 'rgba(217, 119, 6, 0.35)';
    }
    if (ctx.fillRect) ctx.fillRect(padL, 8, xtWidth, 20);

    // Hou Tian Band
    const htGrad = (ctx.createLinearGradient) ? ctx.createLinearGradient(padL + xtWidth, 0, padL + chartW, 0) : null;
    if (htGrad && htGrad.addColorStop) {
      htGrad.addColorStop(0, 'rgba(109, 40, 217, 0.45)');
      htGrad.addColorStop(1, 'rgba(76, 29, 149, 0.25)');
      ctx.fillStyle = htGrad;
    } else {
      ctx.fillStyle = 'rgba(109, 40, 217, 0.35)';
    }
    if (ctx.fillRect) ctx.fillRect(padL + xtWidth, 8, chartW - xtWidth, 20);

    // Ribbon Labels
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#fef3c7';
    if (ctx.fillText) {
      ctx.fillText(isEn ? `Early Heaven (1-${xtCount}y)` : `前半生 · 先天命基 (1~${xtCount}岁)`, padL + 8, 22);
      ctx.fillStyle = '#e0e7ff';
      ctx.fillText(isEn ? `Later Heaven (${xtCount + 1}-100y)` : `后半生 · 后天跃升 (${xtCount + 1}~100岁)`, padL + xtWidth + 8, 22);
    }
    if (ctx.restore) ctx.restore();

    // 2. Horizontal Reference Grid Lines
    ctx.strokeStyle = 'rgba(75, 85, 99, 0.3)';
    ctx.lineWidth = 1;
    if (ctx.setLineDash) ctx.setLineDash([4, 4]);

    [0.25, 0.5, 0.75].forEach(ratio => {
      const y = padT + chartH * (1 - ratio);
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + chartW, y);
      ctx.stroke();

      ctx.fillStyle = 'rgba(156, 163, 175, 0.6)';
      ctx.font = '9px monospace';
      if (ctx.fillText) ctx.fillText(`${Math.round(ratio * 100)}%`, 6, y + 3);
    });

    // Vertical Decade Lines
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].forEach(decadeAge => {
      const x = padL + ((decadeAge - 1) / 99) * chartW;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + chartH);
      ctx.stroke();

      ctx.fillStyle = 'rgba(156, 163, 175, 0.7)';
      ctx.font = '9px monospace';
      if (ctx.fillText) ctx.fillText(`${decadeAge}`, x - 6, padT + chartH + 14);
    });
    if (ctx.setLineDash) ctx.setLineDash([]);

    // 3. Compute Coordinates
    const coords = points.map(p => {
      const x = padL + ((p.age - 1) / 99) * chartW;
      const norm = (p.score - 20) / 80;
      const y = padT + chartH * (1 - Math.max(0.05, Math.min(0.95, norm)));
      return { x, y, point: p };
    });

    // 4. Draw Area Fill Under Curve
    if (ctx.createLinearGradient) {
      const fillGrad = ctx.createLinearGradient(0, padT, 0, padT + chartH);
      if (fillGrad && fillGrad.addColorStop) {
        fillGrad.addColorStop(0, 'rgba(245, 158, 11, 0.35)');
        fillGrad.addColorStop(0.6, 'rgba(16, 185, 129, 0.15)');
        fillGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = fillGrad;

        ctx.beginPath();
        ctx.moveTo(coords[0].x, padT + chartH);
        ctx.lineTo(coords[0].x, coords[0].y);

        for (let i = 0; i < coords.length - 1; i++) {
          const curr = coords[i];
          const next = coords[i + 1];
          const midX = (curr.x + next.x) / 2;
          if (ctx.bezierCurveTo) {
            ctx.bezierCurveTo(midX, curr.y, midX, next.y, next.x, next.y);
          } else {
            ctx.lineTo(next.x, next.y);
          }
        }

        ctx.lineTo(coords[coords.length - 1].x, padT + chartH);
        if (ctx.closePath) ctx.closePath();
        if (ctx.fill) ctx.fill();
      }
    }

    // 5. Draw Curve Stroke
    ctx.lineWidth = 2.5;
    if (ctx.createLinearGradient) {
      const strokeGrad = ctx.createLinearGradient(padL, 0, padL + chartW, 0);
      if (strokeGrad && strokeGrad.addColorStop) {
        strokeGrad.addColorStop(0, '#f59e0b');
        strokeGrad.addColorStop(0.5, '#10b981');
        strokeGrad.addColorStop(1, '#8b5cf6');
        ctx.strokeStyle = strokeGrad;
      } else {
        ctx.strokeStyle = '#f59e0b';
      }
    } else {
      ctx.strokeStyle = '#f59e0b';
    }

    if (ctx.beginPath) ctx.beginPath();
    if (ctx.moveTo) ctx.moveTo(coords[0].x, coords[0].y);
    for (let i = 0; i < coords.length - 1; i++) {
      const curr = coords[i];
      const next = coords[i + 1];
      const midX = (curr.x + next.x) / 2;
      if (ctx.bezierCurveTo) {
        ctx.bezierCurveTo(midX, curr.y, midX, next.y, next.x, next.y);
      } else if (ctx.lineTo) {
        ctx.lineTo(next.x, next.y);
      }
    }
    if (ctx.stroke) ctx.stroke();

    // 6. Draw Dots on Key Points
    coords.forEach((c, idx) => {
      const isAct = (c.point.age === activeAge);
      const isMut = c.point.isMutated;
      if (idx % 2 === 0 || isMut || isAct) {
        if (ctx.beginPath) ctx.beginPath();
        const r = isAct ? 5 : (isMut ? 3.5 : 2.5);
        if (ctx.arc) ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isAct ? '#ef4444' : (isMut ? '#f59e0b' : '#10b981');
        if (ctx.fill) ctx.fill();
      }
    });

    // 7. Active Needle / Tracking Cursor
    const activeCoord = coords[activeAge - 1] || coords[0];
    if (activeCoord) {
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.85)';
      ctx.lineWidth = 1.5;
      if (ctx.setLineDash) ctx.setLineDash([3, 2]);
      if (ctx.beginPath) ctx.beginPath();
      if (ctx.moveTo) ctx.moveTo(activeCoord.x, padT - 6);
      if (ctx.lineTo) ctx.lineTo(activeCoord.x, padT + chartH);
      if (ctx.stroke) ctx.stroke();
      if (ctx.setLineDash) ctx.setLineDash([]);

      if (ctx.beginPath) ctx.beginPath();
      if (ctx.arc) ctx.arc(activeCoord.x, activeCoord.y, 8, 0, Math.PI * 2);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      if (ctx.stroke) ctx.stroke();

      const pt = activeCoord.point;
      const hexName = isEn ? (pt.annualHex ? pt.annualHex.nameEn : 'Hexagram') : (pt.annualHex ? pt.annualHex.nameZh : '卦');
      const tooltipText = `${pt.age}${isEn ? 'y' : '岁'} · ${hexName}`;

      const flagW = Math.max(80, tooltipText.length * 6.5 + 16);
      let flagX = activeCoord.x - flagW / 2;
      if (flagX < padL) flagX = padL;
      if (flagX + flagW > padL + chartW) flagX = padL + chartW - flagW;
      const flagY = Math.max(padT - 6, activeCoord.y - 26);

      ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
      if (ctx.fillRect) ctx.fillRect(flagX, flagY, flagW, 18);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1;
      if (ctx.strokeRect) ctx.strokeRect(flagX, flagY, flagW, 18);

      ctx.fillStyle = '#fef3c7';
      ctx.font = '10px sans-serif';
      if (ctx.fillText) ctx.fillText(tooltipText, flagX + 6, flagY + 12);
    }
  }

  function renderYaoStagesTabHtml(container, res, currentPoint, isEn) {
    const hexData = (typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateFourPillarsHexagrams === 'function')
      ? IChingEngine.calculateFourPillarsHexagrams(res, fourPillarsActiveAge, currentPoint.year)
      : null;

    if (!hexData) {
      container.innerHTML = `<p class="text-xs text-gray-500">${isEn ? 'Calculating Yao stage progression...' : '六爻时序推演计算中...'}</p>`;
      return;
    }

    if (container.setAttribute) {
      container.setAttribute('data-active-tab', 'yaoStages');
      container.setAttribute('data-lang', isEn ? 'en' : 'zh');
    }

    const isXian = (fourPillarsActiveAge <= hexData.xianTian.totalYears);
    const stageObj = isXian ? hexData.xianTian : hexData.houTian;
    const stageTitleZh = isXian ? '前半生 · 先天命卦六爻时序递进' : '后半生 · 后天跃升六爻时序递进';
    const stageTitleEn = isXian ? 'Early Heaven Natal Hexagram 6-Stage Progression' : 'Later Heaven Hexagram 6-Stage Progression';
    const activeHex = stageObj.hexagram || { number: 1, nameZh: '乾为天', nameEn: 'The Creative' };

    const stageArchetypesZh = [
      { name: '潜龙勿用 · 蓄势萌发', desc: '事态初始，气机潜藏深渊。重在蓄力内修、广结善缘、守正待时，不可急躁妄动。' },
      { name: '见龙在田 · 崭露破土', desc: '才华崭露头角，利见大人。遇得道明师或关键贵人提携，稳扎稳打夯实根基。' },
      { name: '终日乾乾 · 试炼精进', desc: '下卦极位与转折关口，风浪激荡多凶多惧。唯有战战兢兢、自强不息、深自反省可化险为夷。' },
      { name: '或跃在渊 · 跃迁蓄力', desc: '跨入上卦核心圈层，进退自如。审时度势寻求范式转移，进可一跃登天，退可深潜自保。' },
      { name: '飞龙在天 · 盛极中正', desc: '全卦九五之尊，中正大公，君临天下。威权鼎盛，大展宏图，成就一代非凡功业。' },
      { name: '亢龙有悔 · 穷变返始', desc: '登峰造极而物极必反。警惕傲慢偏执，宜虚怀若谷、功成身退、提携后辈，开启全新周期轮回。' }
    ];

    const stageArchetypesEn = [
      { name: 'Latent Genesis', desc: 'Initial inception: potential is hidden. Cultivate inner reserves, master craft, and await optimal cosmic alignment.' },
      { name: 'Emergence & Growth', desc: 'Talent surfaces; favorable to meet benevolent mentors and build foundational alliances.' },
      { name: 'Crucible & Resilience', desc: 'Pivotal transition of tests and tension. Vigilant diligence and relentless self-discipline turn crises into breakthrough.' },
      { name: 'Threshold Ascension', desc: 'Approaching executive circles; assess macro currents to execute calculated paradigm leaps.' },
      { name: 'Sovereign Zenith', desc: 'The 5th line prime leadership. Supreme alignment of character, authority, and auspicious timing.' },
      { name: 'Metamorphosis & Renewal', desc: 'Peak limits and cyclic turnaround. Relinquish rigid ego, embrace humility and mentorship to rebirth the next cycle.' }
    ];

    const linesHtml = stageObj.lines.slice().reverse().map((l) => {
      const archIdx = l.position - 1;
      const arch = isEn ? stageArchetypesEn[archIdx] : stageArchetypesZh[archIdx];
      const isAct = (currentPoint.activeLinePos === l.position && ((isXian && currentPoint.isXianTian) || (!isXian && !currentPoint.isXianTian)));

      const activeBorder = isAct
        ? 'border-amber-500 ring-2 ring-amber-500/50 bg-gradient-to-r from-amber-950/40 via-black/60 to-amber-900/30'
        : 'border-gray-800 bg-black/40 hover:border-gray-700';

      return `
        <div class="p-4 rounded-xl border ${activeBorder} transition space-y-2">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800/80 pb-2">
            <div class="flex items-center space-x-2.5">
              <span class="text-xl font-bold ${l.nature === 1 ? 'text-amber-400' : 'text-purple-400'} font-mono">${l.symbol}</span>
              <span class="font-bold text-sm text-gray-200 font-serif-sc">${isEn ? l.posEn : l.posZh} · ${arch.name}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="px-2 py-0.5 rounded text-[10px] font-mono ${l.nature === 1 ? 'bg-amber-500/20 text-amber-300' : 'bg-purple-500/20 text-purple-300'}">
                ${isEn ? l.typeEn : l.typeZh}
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] bg-black/60 text-gray-300 font-mono">
                ${isEn ? l.ageSpanEn : l.ageSpanZh}
              </span>
              ${isAct ? `<span class="px-2 py-0.5 rounded bg-amber-500 text-black font-bold text-[10px] shadow">${isEn ? '⚡ CURRENT GOVERNING' : '⚡ 当前执权'}</span>` : ''}
            </div>
          </div>
          <p class="text-xs text-gray-300 leading-relaxed font-sans">
            ${arch.desc}
          </p>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="p-4 rounded-xl bg-black/40 border border-amber-500/30 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-2">
          <div>
            <h3 class="text-sm sm:text-base font-bold text-amber-300 font-serif-sc">
              ${isEn ? `${stageTitleEn} (Hexagram ${activeHex.number}: ${activeHex.nameEn})` : `${stageTitleZh}（第${activeHex.number}卦 · 【${activeHex.nameZh}】）`}
            </h3>
            <p class="text-xs text-gray-400 mt-0.5">
              ${isEn ? 'Universal 6-stage evolutionary ladder from Initial Genesis to Metamorphosis' : '周易六爻时空递进阶梯：初爻发端、二爻显露、三爻惕厉、四爻跃迁、五爻大成、上爻穷变'}
            </p>
          </div>
          <span class="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            ${isEn ? `Active at Age ${fourPillarsActiveAge}` : `虚岁 ${fourPillarsActiveAge} 岁当值`}
          </span>
        </div>

        <div class="space-y-3 pt-1">
          ${linesHtml}
        </div>
      </div>
    `;
  }

  function renderCosmicTabHtml(container, currentPoint, isEn) {
    if (container.setAttribute) {
      container.setAttribute('data-active-tab', 'cosmic');
      container.setAttribute('data-lang', isEn ? 'en' : 'zh');
    }

    const SOVEREIGN_HEXAGRAMS = [
      { num: 24, nameZh: '地雷复', nameEn: 'Return (Fu)', symbol: '䷗', monthZh: '十一月 · 子月', monthEn: 'Month 11 (Zi)', yang: 1, yin: 5, quoteZh: '冬至一阳生，万物苏萌，闭关静养。', quoteEn: 'Winter Solstice first light of Yang; stillness preserves inner seeds.' },
      { num: 19, nameZh: '地泽临', nameEn: 'Approach (Lin)', symbol: '䷒', monthZh: '十二月 · 丑月', monthEn: 'Month 12 (Chou)', yang: 2, yin: 4, quoteZh: '二阳渐长，督导奋发，至于八月有凶。', quoteEn: 'Two Yang lines advance; maintain diligence before autumn decline.' },
      { num: 11, nameZh: '地天泰', nameEn: 'Peace (Tai)', symbol: '䷊', monthZh: '正月 · 寅月', monthEn: 'Month 1 (Yin)', yang: 3, yin: 3, quoteZh: '三阳开泰，天地交泰，小往大来。', quoteEn: 'Heaven and Earth commune; fruitful harmony across all endeavors.' },
      { num: 34, nameZh: '雷天大壮', nameEn: 'Great Power (Da Zhuang)', symbol: '䷡', monthZh: '二月 · 卯月', monthEn: 'Month 2 (Mao)', yang: 4, yin: 2, quoteZh: '四阳盛壮，雷震天宇，非礼弗履。', quoteEn: 'Thunder across heaven; righteous boundaries anchor mighty strength.' },
      { num: 43, nameZh: '泽天夬', nameEn: 'Breakthrough (Guai)', symbol: '䷪', monthZh: '三月 · 辰月', monthEn: 'Month 3 (Chen)', yang: 5, yin: 1, quoteZh: '五阳决阴，决而和之，扬于王庭。', quoteEn: 'Decisive breakthrough: clear outdated shackles with graceful resolve.' },
      { num: 1, nameZh: '乾为天', nameEn: 'The Creative (Qian)', symbol: '䷀', monthZh: '四月 · 巳月', monthEn: 'Month 4 (Si)', yang: 6, yin: 0, quoteZh: '纯阳盛极，大明终始，六位时成。', quoteEn: 'Supreme Yang at peak zenith; cosmic sovereignty orchestrating tides.' },
      { num: 44, nameZh: '天风姤', nameEn: 'Coming to Meet (Gou)', symbol: '䷫', monthZh: '五月 · 午月', monthEn: 'Month 5 (Wu)', yang: 5, yin: 1, quoteZh: '夏至一阴生，天地相遇，柔道渐长。', quoteEn: 'Summer Solstice initial Yin emerges; heed subtle undercurrents.' },
      { num: 33, nameZh: '天山遁', nameEn: 'Retreat (Dun)', symbol: '䷠', monthZh: '六月 · 未月', monthEn: 'Month 6 (Wei)', yang: 4, yin: 2, quoteZh: '二阴浸长，君子退藏，远小人不恶。', quoteEn: 'Strategic withdrawal: step aside gracefully to preserve transcendent virtue.' },
      { num: 12, nameZh: '天地否', nameEn: 'Standstill (Pi)', symbol: '䷋', monthZh: '七月 · 申月', monthEn: 'Month 7 (Shen)', yang: 3, yin: 3, quoteZh: '天地不交，闭塞成冬，君子以俭德辟难。', quoteEn: 'Cosmic blockage; frugality and discreet wisdom safeguard integrity.' },
      { num: 20, nameZh: '风地观', nameEn: 'Contemplation (Guan)', symbol: '䷓', monthZh: '八月 · 酉月', monthEn: 'Month 8 (You)', yang: 2, yin: 4, quoteZh: '风行地上，盥而不荐，有孚颙若。', quoteEn: 'Wind sweeps earth; solemn reflection illuminates deep foresight.' },
      { num: 23, nameZh: '山地剥', nameEn: 'Splitting Apart (Bo)', symbol: '䷖', monthZh: '九月 · 戌月', monthEn: 'Month 9 (Xu)', yang: 1, yin: 5, quoteZh: '五阴剥阳，硕果不食，君子得舆。', quoteEn: 'Dissolution of outer bark; preserve core seeds for regenerative rebirth.' },
      { num: 2, nameZh: '坤为地', nameEn: 'The Receptive (Kun)', symbol: '䷁', monthZh: '十月 · 亥月', monthEn: 'Month 10 (Hai)', yang: 0, yin: 6, quoteZh: '六阴纯至，含弘光大，厚德载物。', quoteEn: 'Pure Yin receptive stillness; supreme capacity sustaining all life.' }
    ];

    const curNum = currentPoint.annualHex ? currentPoint.annualHex.number : 1;

    const cardsHtml = SOVEREIGN_HEXAGRAMS.map(sh => {
      const isCur = (sh.num === curNum);
      const isYangCycle = (sh.num === 24 || sh.num === 19 || sh.num === 11 || sh.num === 34 || sh.num === 43 || sh.num === 1);
      const border = isCur
        ? 'border-amber-500 ring-2 ring-amber-500/50 bg-gradient-to-br from-amber-950/40 via-black/60 to-amber-900/40'
        : (isYangCycle ? 'border-amber-900/30 bg-black/40 hover:border-amber-600/40' : 'border-purple-900/30 bg-black/40 hover:border-purple-600/40');

      return `
        <div class="p-3 rounded-xl border ${border} transition space-y-1.5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold font-mono ${isYangCycle ? 'text-amber-400' : 'text-purple-400'}">${sh.symbol}</span>
              <span class="text-[10px] font-mono px-1.5 py-0.2 rounded ${isYangCycle ? 'bg-amber-500/10 text-amber-300' : 'bg-purple-500/10 text-purple-300'}">
                ${isEn ? sh.monthEn : sh.monthZh}
              </span>
            </div>
            <div class="font-bold font-serif-sc text-xs text-gray-200 mt-1">
              ${isEn ? sh.nameEn : sh.nameZh}
            </div>
            <div class="text-[9.5px] font-mono text-gray-400">
              ${isEn ? `${sh.yang} Yang / ${sh.yin} Yin` : `${sh.yang}阳 · ${sh.yin}阴`}
            </div>
            <p class="text-[10.5px] text-gray-300 leading-tight pt-1">
              ${isEn ? sh.quoteEn : sh.quoteZh}
            </p>
          </div>
          ${isCur ? `<div class="pt-1 border-t border-amber-500/40 text-[9.5px] font-bold text-amber-300 text-center font-mono">${isEn ? '★ CURRENT ANNUAL HEX' : '★ 当值流年辟卦'}</div>` : ''}
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="p-4 rounded-xl bg-black/40 border border-amber-500/30 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-2">
          <div>
            <h3 class="text-sm sm:text-base font-bold text-amber-300 font-serif-sc">
              ${isEn ? 'Twelve Sovereign Hexagrams Yin-Yang Macrocosm Cycle' : '十二辟卦阴阳消息消长律 · 宏观宇宙时序大钟'}
            </h3>
            <p class="text-xs text-gray-400 mt-0.5">
              ${isEn ? 'From Winter Solstice Yang inception to Summer Solstice Yin return: perpetual rhythm of waxing and waning' : '冬至一阳生（复）至纯阳（乾），夏至一阴生（姤）至纯阴（坤）：宇宙万物之能量潮汐'}
            </p>
          </div>
          <span class="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            ${isEn ? `Year ${currentPoint.year} (${currentPoint.age}y)` : `${currentPoint.year}年 (${currentPoint.age}岁)`}
          </span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
          ${cardsHtml}
        </div>
      </div>
    `;
  }


  // 空间风水指南 · 实操十策
  function renderSpatialFengShui(bazi, luck) {
    const isEn = (currentLang === 'en');
    const container = document.getElementById('fengshuiContentContainer');
    const badgesContainer = document.getElementById('fengshuiQuickBadges');
    if (!container) return;

    if (!bazi || !bazi.pillars) {
      container.innerHTML = `<p class="text-xs text-gray-500">${isEn ? 'Awaiting natal chart calculation...' : '八字排盘数据就绪后自动生成空间指南...'}</p>`;
      return;
    }

    const residenceData = {
      country: currentResidenceCountry,
      city: currentResidenceCity,
      customCity: currentResidenceCustomName
    };

    const guide = (typeof SpatialFengShuiEngine !== 'undefined')
      ? SpatialFengShuiEngine.generateFengShuiGuide(bazi, luck, residenceData)
      : null;

    if (!guide) {
      container.innerHTML = `<p class="text-xs text-gray-500">${isEn ? 'Feng Shui engine awaiting initialization...' : '风水引擎计算中...'}</p>`;
      return;
    }

    if (badgesContainer) {
      badgesContainer.innerHTML = `
        <span class="px-2.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 font-bold">
          ${isEn ? guide.kuaInfo.nameEn : guide.kuaInfo.nameZh} (${isEn ? guide.kuaInfo.sectorEn : guide.kuaInfo.sectorZh})
        </span>
        <span class="px-2.5 py-1 rounded-full border border-amber-500/40 bg-amber-950/60 text-amber-300 font-bold">
          ${isEn ? `Prime Yan Nian: ${guide.kuaInfo.yanNianEn}` : `延年吉位: ${guide.kuaInfo.yanNianZh}`}
        </span>
        <span class="px-2.5 py-1 rounded-full border border-sky-500/40 bg-sky-950/60 text-sky-300 font-bold">
          ${isEn ? `Favorable Element: ${guide.primaryFavElEn || guide.primaryFavEl}` : `第一喜用神: ${guide.primaryFavElZh || guide.primaryFavEl}`}
        </span>
        <span class="px-2.5 py-1 rounded-full border border-purple-500/40 bg-purple-950/60 text-purple-300 font-bold">
          ${isEn ? guide.holisticRatingItem.badgeEn : guide.holisticRatingItem.badgeZh}
        </span>
      `;
    }

    const y = guide.yanNianItem;
    const dt = guide.dragonTurtleItem;
    const th = guide.tanHeItem;
    const cb = guide.carBellsItem;
    const mc = guide.missingCornerItem;
    const sa = guide.sanHeArrayItem;
    const tb = guide.trioBoostItem;
    const hl = guide.hetuLuoshuItem;
    const me = guide.meritItem;
    const hr = guide.holisticRatingItem;

    const cityCardHtml = (guide.currentCityEvaluation && typeof SpatialFengShuiEngine.renderCityEvaluationCard === 'function')
      ? SpatialFengShuiEngine.renderCityEvaluationCard(guide.currentCityEvaluation, isEn)
      : '';

    container.innerHTML = cityCardHtml + `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-amber-500 text-amber-300">
                ${isEn ? 'ITEM 1' : '法门壹'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold font-mono">
                ${isEn ? y.locationEn : y.locationZh}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-amber-300 flex items-center gap-2">
              <span>🏺</span>
              <span>${isEn ? y.titleEn : y.titleZh}</span>
            </h3>
            <div class="text-xs text-gray-300 space-y-2">
              <p><strong class="text-amber-400">${isEn ? 'Core Structure: ' : '器物规格：'}</strong>${isEn ? y.coreItemEn : y.coreItemZh}</p>
              <p><strong class="text-amber-400">${isEn ? 'Sacred Layout: ' : '布局法要：'}</strong>${isEn ? y.layoutEn : y.layoutZh}</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-[11px] text-amber-200/90 leading-relaxed">
            <strong>${isEn ? 'Energetic Impact: ' : '聚气玄机：'}</strong>${isEn ? y.benefitsEn : y.benefitsZh}
          </div>
        </div>

        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-emerald-500 text-emerald-300">
                ${isEn ? 'ITEM 2' : '法门贰'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold font-mono">
                ${isEn ? 'Barrier & Companion' : '内外双卫'}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-emerald-300 flex items-center gap-2">
              <span>🐢</span>
              <span>${isEn ? dt.titleEn : dt.titleZh}</span>
            </h3>
            <div class="text-xs text-gray-300 space-y-2">
              <p><strong class="text-emerald-400">${isEn ? 'Entryway Barrier: ' : '玄关外卫：'}</strong>${isEn ? dt.facingDoorEn : dt.facingDoorZh}</p>
              <p><strong class="text-emerald-400">${isEn ? 'Personal Talisman: ' : '随身内卫：'}</strong>${isEn ? dt.portableEn : dt.portableZh}</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-[11px] text-emerald-200/90 leading-relaxed">
            <strong>${isEn ? 'Metaphysical Shield: ' : '降煞威能：'}</strong>${isEn ? dt.benefitsEn : dt.benefitsZh}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-purple-500 text-purple-300">
                ${isEn ? 'ITEM 3' : '法门叁'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold font-mono">
                ${isEn ? th.remedyZodiacEn : th.remedyZodiacZh}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-purple-300 flex items-center gap-2">
              <span>☯️</span>
              <span>${isEn ? th.titleEn : th.titleZh}</span>
            </h3>
            <div class="text-xs text-gray-300 space-y-2">
              <p><strong class="text-purple-400">${isEn ? 'Natal Tension: ' : '原局气机：'}</strong>${isEn ? th.natalStateEn : th.natalStateZh}</p>
              <p><strong class="text-purple-400">${isEn ? 'Attuned Material: ' : '开运材质：'}</strong>${isEn ? th.materialEn : th.materialZh}</p>
              <p><strong class="text-purple-400">${isEn ? 'Protocol: ' : '安镇法则：'}</strong>${isEn ? th.protocolEn : th.protocolZh}</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-purple-950/20 border border-purple-800/40 text-[11px] text-purple-200/90 leading-relaxed">
            <strong>${isEn ? 'Harmonization Result: ' : '融通转机：'}</strong>${isEn ? th.benefitsEn : th.benefitsZh}
          </div>
        </div>

        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-amber-500 text-amber-300">
                ${isEn ? 'ITEM 4' : '法门肆'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold font-mono">
                ${isEn ? 'Automotive Shield' : '行车护驾'}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-amber-300 flex items-center gap-2">
              <span>🔔</span>
              <span>${isEn ? cb.titleEn : cb.titleZh}</span>
            </h3>
            <div class="text-xs text-gray-300 space-y-2">
              <p><strong class="text-amber-400">${isEn ? 'Sacred Implement: ' : '法器材质：'}</strong>${isEn ? cb.itemEn : cb.itemZh}</p>
              <p><strong class="text-amber-400">${isEn ? 'Hanging Protocol: ' : '系挂方位：'}</strong>${isEn ? cb.protocolEn : cb.protocolZh}</p>
              <p><strong class="text-amber-400">${isEn ? 'Acoustic Principle: ' : '金声玉振：'}</strong>${isEn ? cb.principleEn : cb.principleZh}</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-[11px] text-amber-200/90 leading-relaxed">
            <strong>${isEn ? 'Road Protection: ' : '行车护佑：'}</strong>${isEn ? 'Dispels sleepiness, fatigue, and crossroads sha energy instantaneously.' : '金石清音破除行路昏沉与阴气滞障，保车行万里平安。'}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-rose-500 text-rose-300">
                ${isEn ? 'ITEM 5' : '法门伍'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold font-mono">
                ${isEn ? mc.priorityPalaceEn : mc.priorityPalaceZh}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-rose-300 flex items-center gap-2">
              <span>🪨</span>
              <span>${isEn ? mc.titleEn : mc.titleZh}</span>
            </h3>
            <div class="text-xs text-gray-300 space-y-2">
              <p><strong class="text-rose-400">${isEn ? 'Priority Sector: ' : '关键审视方位：'}</strong>${isEn ? mc.priorityPalaceEn : mc.priorityPalaceZh}</p>
              <p><strong class="text-rose-400">${isEn ? 'Missing Impact: ' : '缺角潜在损耗：'}</strong>${isEn ? mc.impactEn : mc.impactZh}</p>
              <p><strong class="text-rose-400">${isEn ? 'Placement Protocol: ' : '安镇法度：'}</strong>${isEn ? mc.protocolEn : mc.protocolZh}</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-rose-950/20 border border-rose-800/40 text-[11px] text-rose-200/90 leading-relaxed">
            <strong>${isEn ? 'Taiji Completion: ' : '太极圆融：'}</strong>${isEn ? mc.benefitsEn : mc.benefitsZh}
          </div>
        </div>

        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-sky-500 text-sky-300">
                ${isEn ? 'ITEM 6' : '法门陆'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-semibold font-mono">
                ${isEn ? sa.targetBureauEn : sa.targetBureauZh}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-sky-300 flex items-center gap-2">
              <span>🌟</span>
              <span>${isEn ? sa.titleEn : sa.titleZh}</span>
            </h3>
            <div class="text-xs text-gray-300 space-y-2">
              <p><strong class="text-sky-400">${isEn ? 'Guardian Triad: ' : '三合三圣：'}</strong>${isEn ? sa.zodiacTrioEn : sa.zodiacTrioZh}</p>
              <p><strong class="text-sky-400">${isEn ? 'Strategic Theme: ' : '气象格局：'}</strong>${isEn ? sa.themeEn : sa.themeZh}</p>
              <p><strong class="text-sky-400">${isEn ? 'Cross Coordinate Layout: ' : '天心十道排列：'}</strong>${isEn ? sa.protocolEn : sa.protocolZh}</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-sky-950/20 border border-sky-800/40 text-[11px] text-sky-200/90 leading-relaxed">
            <strong>${isEn ? 'Exponential Surge: ' : '阵法神功：'}</strong>${isEn ? sa.benefitsEn : sa.benefitsZh}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-teal-500 text-teal-300">
                ${isEn ? 'ITEM 7' : '法门柒'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-semibold font-mono">
                ${isEn ? 'Mentors, Wisdom, Romance' : '贵人·文昌·桃花'}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-teal-300 flex items-center gap-2">
              <span>🌸</span>
              <span>${isEn ? tb.titleEn : tb.titleZh}</span>
            </h3>
            <div class="text-xs text-gray-300 space-y-2">
              <p>${isEn ? tb.noblemanEn : tb.noblemanZh}</p>
              <p>${isEn ? tb.wenChangEn : tb.wenChangZh}</p>
              <p>${isEn ? tb.peachBlossomEn : tb.peachBlossomZh}</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-teal-950/20 border border-teal-800/40 text-[11px] text-teal-200/90 leading-relaxed">
            <strong>${isEn ? 'Strategic Advantage: ' : '综合效能：'}</strong>${isEn ? 'Synchronizes intellectual acuity with indispensable patron sponsors and genuine charisma.' : '三大维度同频共振，外得贵人鼎力扶持，内具从容文慧与高雅魅力。'}
          </div>
        </div>

        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-amber-500 text-amber-300">
                ${isEn ? 'ITEM 8' : '法门捌'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold font-mono">
                ${isEn ? 'Hetu Luoshu' : '河洛玄数'}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-amber-300 flex items-center gap-2">
              <span>🔢</span>
              <span>${isEn ? hl.titleEn : hl.titleZh}</span>
            </h3>
            <div class="grid grid-cols-2 gap-2 text-xs text-gray-300">
              <p><strong class="text-amber-400">${isEn ? 'Auspicious Numbers: ' : '河图吉数：'}</strong>${isEn ? hl.numbersEn : hl.numbersZh}</p>
              <p><strong class="text-amber-400">${isEn ? 'Floors: ' : '吉利楼层：'}</strong>${isEn ? hl.floorsEn : hl.floorsZh}</p>
              <p><strong class="text-amber-400">${isEn ? 'Phone Tail: ' : '手机尾号：'}</strong>${isEn ? hl.phoneTailEn : hl.phoneTailZh}</p>
              <p><strong class="text-amber-400">${isEn ? 'Plate Tail: ' : '车牌尾数：'}</strong>${isEn ? hl.plateTailEn : hl.plateTailZh}</p>
              <p><strong class="text-amber-400">${isEn ? 'Wardrobe Colors: ' : '服饰主色：'}</strong>${isEn ? hl.colorsEn : hl.colorsZh}</p>
              <p><strong class="text-amber-400">${isEn ? 'Vehicle Colors: ' : '车身色彩：'}</strong>${isEn ? hl.carColorEn : hl.carColorZh}</p>
            </div>
            <div class="text-xs text-gray-300 pt-1">
              <p><strong class="text-amber-400">${isEn ? 'Expansion Direction: ' : '商战拓客：'}</strong>${isEn ? hl.clientOutreachEn : hl.clientOutreachZh}</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-[11px] text-amber-200/90 leading-relaxed">
            <strong>${isEn ? 'Macro Harmony: ' : '宏观引力：'}</strong>${isEn ? 'Aligns real property, mobile frequency, and vehicular travel with natal elemental gravity.' : '全方位将数字、空间高差与车辆磁场调至最高同频共振态。'}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-rose-500 text-rose-300">
                ${isEn ? 'ITEM 9' : '法门玖'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold font-mono">
                ${isEn ? 'Karmic Foundations' : '积德改命'}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-rose-300 flex items-center gap-2">
              <span>❤️</span>
              <span>${isEn ? me.titleEn : me.titleZh}</span>
            </h3>
            <p class="text-xs text-amber-300/90 italic">
              ${isEn ? me.corePhilosophyEn : me.corePhilosophyZh}
            </p>
            <div class="text-xs text-gray-300 space-y-2">
              <p>${isEn ? me.bloodDonationEn : me.bloodDonationZh}</p>
              <p>${isEn ? me.almsgivingEn : me.almsgivingZh}</p>
              <p>${isEn ? me.selfCultivationEn : me.selfCultivationZh}</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-rose-950/20 border border-rose-800/40 text-[11px] text-rose-200/90 leading-relaxed">
            <strong>${isEn ? 'Karmic Shield: ' : '改运真谛：'}</strong>${isEn ? 'Conscious moral virtue transcends and overwrites any terrestrial spatial flaw.' : '心正行端，虽逢大煞亦化为甘露；德厚流光，万神自护。'}
          </div>
        </div>

        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl space-y-3.5 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="chinese-seal text-xs py-0.5 border-emerald-500 text-emerald-300">
                ${isEn ? 'ITEM 10' : '法门拾'}
              </span>
              <span class="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold font-mono">
                ${isEn ? hr.badgeEn : hr.badgeZh}
              </span>
            </div>
            <h3 class="text-base font-bold font-serif-sc text-emerald-300 flex items-center gap-2">
              <span>🏡</span>
              <span>${isEn ? (hr.titleEn || 'Comprehensive Spatial Field Harmonization Rating & Master Principles') : (hr.titleZh || '空间气场总评与总诀')}</span>
            </h3>
            <div class="flex items-center space-x-3 p-3 bg-black/40 rounded-xl border border-gray-800">
              <span class="text-3xl font-black font-mono text-emerald-400">${hr.score}</span>
              <div class="text-xs text-gray-300">
                <p class="font-bold text-gray-200">${isEn ? 'Spatial Atmospheric Harmony Score' : '空间环境调理综合评分'}</p>
                <p class="text-[11px] text-gray-400">${isEn ? hr.verdictEn : hr.verdictZh}</p>
              </div>
            </div>
          </div>
          <div class="p-4 rounded-xl bg-emerald-950/30 border border-emerald-700/50 text-center text-xs sm:text-sm font-serif-sc text-amber-200 tracking-wide">
            ${isEn ? hr.masterMottoEn : hr.masterMottoZh}
          </div>
        </div>
      </div>
    `;

    const inCardCountry = document.getElementById('fsCardCountrySelect');
    const inCardCity = document.getElementById('fsCardCitySelect');
    const inCardCustom = document.getElementById('fsCardCustomCityInput');
    if (inCardCountry && inCardCity) {
      inCardCountry.addEventListener('change', (e) => {
        currentResidenceCountry = e.target.value;
        if (currentCountrySelect) currentCountrySelect.value = currentResidenceCountry;
        const db = (typeof SpatialFengShuiEngine !== 'undefined') ? SpatialFengShuiEngine.GEO_CITIES_DATABASE : null;
        const countryData = db ? db[currentResidenceCountry] : null;
        const firstReg = countryData ? Object.values(countryData.regions)[0] : null;
        currentResidenceCity = (firstReg && firstReg.cities[0]) ? firstReg.cities[0].id : 'custom';
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('current_residence_country', currentResidenceCountry);
          localStorage.setItem('current_residence_city', currentResidenceCity);
        }
        populateCurrentCityOptions(currentResidenceCountry, currentResidenceCity);
        renderSpatialFengShui(bazi, luck);
      });
      inCardCity.addEventListener('change', (e) => {
        currentResidenceCity = e.target.value;
        if (currentCitySelect) currentCitySelect.value = currentResidenceCity;
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('current_residence_city', currentResidenceCity);
        }
        populateCurrentCityOptions(currentResidenceCountry, currentResidenceCity);
        renderSpatialFengShui(bazi, luck);
        if (currentResidenceCity === 'custom') {
          const freshCustomInput = document.getElementById('fsCardCustomCityInput');
          if (freshCustomInput && typeof freshCustomInput.focus === 'function') {
            freshCustomInput.focus();
          }
        }
      });
    }
    if (inCardCustom) {
      inCardCustom.addEventListener('change', (e) => {
        currentResidenceCustomName = e.target.value.trim();
        if (currentCustomCityInput) currentCustomCityInput.value = currentResidenceCustomName;
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('current_residence_custom', currentResidenceCustomName);
        }
        renderSpatialFengShui(bazi, luck);
      });
      inCardCustom.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          currentResidenceCustomName = e.target.value.trim();
          if (currentCustomCityInput) currentCustomCityInput.value = currentResidenceCustomName;
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('current_residence_custom', currentResidenceCustomName);
          }
          renderSpatialFengShui(bazi, luck);
        }
      });
    }
  }

  // ==========================================
  // 职场打工人破局与财运事业推演 (Career & Wealth Trajectory)
  // ==========================================
  function renderCareerWealth(bazi, luck) {
    const isEn = (currentLang === 'en');
    const container = document.getElementById('careerContentContainer');
    const badgesContainer = document.getElementById('careerQuickBadgesDashboard');
    if (!container) return;

    if (!bazi || !bazi.pillars) {
      container.innerHTML = `<p class="text-xs text-gray-500 text-center py-6">${isEn ? 'Awaiting natal chart calculation to generate career and wealth trajectory...' : '八字排盘数据就绪后自动生成职场与财运推演...'}</p>`;
      return;
    }

    if (typeof CareerEngine === 'undefined' || typeof CareerEngine.generateCareerReport !== 'function') {
      container.innerHTML = `<p class="text-xs text-gray-500 text-center py-6">${isEn ? 'Career Engine initializing...' : '职场推演引擎初始化中...'}</p>`;
      return;
    }

    const currentYear = new Date().getFullYear();
    const report = CareerEngine.generateCareerReport(bazi, luck, currentYear);
    if (!report) return;

    // Badges Dashboard
    if (badgesContainer) {
      const topArch = (report.workplaceArchetypes && report.workplaceArchetypes[0]) || {};
      const hex = (report.timingTrajectory && report.timingTrajectory.annualHex) || {};
      badgesContainer.innerHTML = `
        <span class="px-2.5 py-1 rounded-full border border-amber-500/40 bg-amber-950/60 text-amber-300 font-bold">
          ${isEn ? `Day Master: ${report.summary.dmEn}` : `元神日主: ${report.summary.dm}（${report.summary.dmEl}）`}
        </span>
        <span class="px-2.5 py-1 rounded-full border border-purple-500/40 bg-purple-950/60 text-purple-300 font-bold">
          ${isEn ? report.summary.primaryPatternEn : report.summary.primaryPattern}
        </span>
        <span class="px-2.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 font-bold">
          ${isEn ? `Primary Calling: ${(topArch.nameEn || '').split('(')[0]}` : `首要天命: ${(topArch.nameZh || '').split('(')[0]}`}
        </span>
        <span class="px-2.5 py-1 rounded-full border border-blue-500/40 bg-blue-950/60 text-blue-300 font-bold">
          ${isEn ? `Transit Hexagram: #${hex.number || ''} ${hex.nameEn || ''}` : `值年卦: 第${hex.number || ''}卦 · ${hex.nameZh || ''}`}
        </span>
      `;
    }

    const mu = report.managingUp;
    const pd = report.peerDynamics;
    const archs = report.workplaceArchetypes;
    const tt = report.timingTrajectory;

    container.innerHTML = `
      <!-- Pillar 1: Managing Up -->
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-gray-800 pb-2">
          <div class="flex items-center space-x-2">
            <span class="text-xl">👑</span>
            <h3 class="text-base font-bold font-serif-sc text-purple-300">
              ${isEn ? 'I. Managing Up & Workplace Communication (Navigating Superiors Without Friction)' : '一、向上管理与职场沟通（如何不得罪领导）'}
            </h3>
          </div>
          <span class="chinese-seal text-[10px] py-0.5 border-purple-500 text-purple-300">
            ${isEn ? 'Executive Alignment' : '领导博弈'}
          </span>
        </div>

        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-gray-800 shadow-xl space-y-4">
          <div class="space-y-2">
            <h4 class="text-sm font-bold text-purple-300 flex items-center gap-2">
              <span>🧐</span><span>${isEn ? 'Executive Archetype & Upward Disposition Diagnosis' : '上级心智透视与自身向上互动原型'}</span>
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed font-sans">${isEn ? mu.styleEn : mu.styleZh}</p>
          </div>
          <div class="p-3.5 rounded-xl bg-purple-950/20 border border-purple-800/40 text-xs text-purple-200 leading-relaxed">
            ${isEn ? mu.avoidOffendingEn : mu.avoidOffendingZh}
          </div>
          <div class="p-3.5 rounded-xl bg-black/40 border border-gray-800 text-xs text-gray-300 leading-relaxed">
            <strong class="text-amber-400">${isEn ? 'Resource Requisition Protocol: ' : '向领导争取资源战法：'}</strong>
            ${isEn ? mu.askingResourcesEn : mu.askingResourcesZh}
          </div>
        </div>

        <!-- 4 Workplace Scripts -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${mu.scripts.map(s => `
            <div class="bg-card p-4 rounded-xl border border-gray-800/80 shadow-lg space-y-2.5 flex flex-col justify-between hover:border-purple-500/40 transition">
              <div class="space-y-2">
                <div class="flex items-center justify-between border-b border-gray-800 pb-1.5">
                  <span class="text-xs font-bold font-serif-sc text-amber-300">${isEn ? s.titleEn : s.titleZh}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">${isEn ? s.badgeEn : s.badgeZh}</span>
                </div>
                <div class="p-3 rounded-lg bg-black/50 border border-gray-800 text-xs font-mono text-gray-200 leading-relaxed">
                  ${isEn ? s.dialogueEn : s.dialogueZh}
                </div>
              </div>
              <p class="text-[11px] text-gray-400 italic">${isEn ? s.tipsEn : s.tipsZh}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Pillar 2: Peer Dynamics -->
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-gray-800 pb-2">
          <div class="flex items-center space-x-2">
            <span class="text-xl">🛡️</span>
            <h3 class="text-base font-bold font-serif-sc text-rose-300">
              ${isEn ? 'II. Lateral Peer Collaboration & Boundary Firewalls (Credit Defense & Healthy Communication)' : '二、横向协作与人际防火墙（防抢功背刺与健康交流）'}
            </h3>
          </div>
          <span class="chinese-seal text-[10px] py-0.5 border-rose-500 text-rose-300">
            ${isEn ? 'Lateral Defense' : '同僚防御'}
          </span>
        </div>

        <div class="bg-card p-5 sm:p-6 rounded-2xl border border-gray-800 shadow-xl space-y-4">
          <div class="space-y-2">
            <h4 class="text-sm font-bold text-rose-300 flex items-center gap-2">
              <span>🤝</span><span>${isEn ? 'Peer Dynamics & Horizontal Competition Analysis' : '同僚横向竞争与比劫争财深度透视'}</span>
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed font-sans">${isEn ? pd.peerAnalysisEn : pd.peerAnalysisZh}</p>
          </div>
          <div class="p-3.5 rounded-xl bg-rose-950/20 border border-rose-800/40 text-xs text-rose-200 leading-relaxed">
            ${isEn ? pd.betrayalWarningEn : pd.betrayalWarningZh}
          </div>
        </div>

        <!-- 3 Hard Firewalls -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${pd.threeFirewalls.map(fw => `
            <div class="bg-card p-4 rounded-xl border border-gray-800 shadow-lg space-y-2 flex flex-col justify-between hover:border-rose-500/40 transition">
              <div class="space-y-2">
                <div class="flex items-center justify-between border-b border-gray-800 pb-1.5">
                  <h5 class="text-xs font-bold text-amber-300 font-serif-sc">${isEn ? fw.titleEn : fw.titleZh}</h5>
                  <span class="chinese-seal text-[9px] py-0 border-rose-500 text-rose-400">${isEn ? fw.sealEn : fw.sealZh}</span>
                </div>
                <p class="text-xs text-gray-300 leading-relaxed font-sans">${isEn ? fw.descEn : fw.descZh}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Pillar 3: Workplace Archetype Matching -->
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-gray-800 pb-2">
          <div class="flex items-center space-x-2">
            <span class="text-xl">🎯</span>
            <h3 class="text-base font-bold font-serif-sc text-amber-300">
              ${isEn ? 'III. Destiny Calling & Precision Workplace Archetypes (Civil · Martial · Specialist · Executive)' : '三、天命职能与四大生态位精准定向（文职 · 武职 · 技术人员 · 高管）'}
            </h3>
          </div>
          <span class="chinese-seal text-[10px] py-0.5 border-amber-500 text-amber-300">
            ${isEn ? 'Archetype Fit' : '生态定位'}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${archs.map(a => `
            <div class="bg-card p-5 sm:p-6 rounded-2xl border border-gray-800 shadow-xl space-y-4 flex flex-col justify-between hover:border-amber-500/40 transition">
              <div class="space-y-3">
                <div class="flex items-center justify-between border-b border-gray-800 pb-2">
                  <div class="flex items-center space-x-2">
                    <span class="text-2xl">${a.icon}</span>
                    <h4 class="text-sm sm:text-base font-bold text-amber-200 font-serif-sc">${isEn ? a.nameEn : a.nameZh}</h4>
                  </div>
                  <span class="text-xs px-2.5 py-0.5 rounded-full border font-bold ${a.grade.badgeClass}">
                    ${isEn ? a.grade.en : a.grade.zh} (${a.fitScore}${isEn ? '/100' : '分'})
                  </span>
                </div>
                <div class="text-xs space-y-2 text-gray-300">
                  <p><strong class="text-emerald-400">${isEn ? 'Core Strengths: ' : '天赋优势：'}</strong>${isEn ? a.coreStrengthsEn : a.coreStrengthsZh}</p>
                  <p><strong class="text-sky-400">${isEn ? 'Typical Roles: ' : '代表岗位：'}</strong>${isEn ? a.typicalRolesEn : a.typicalRolesZh}</p>
                  <p><strong class="text-rose-400">${isEn ? 'Deadly Blindspot: ' : '致命盲点：'}</strong>${isEn ? a.pitfallAlertEn : a.pitfallAlertZh}</p>
                </div>
              </div>
              <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-[11px] text-amber-200/90 leading-relaxed">
                <strong>${isEn ? 'Breakthrough Tactic: ' : '破局战法：'}</strong>${isEn ? a.breakthroughTacticEn : a.breakthroughTacticZh}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Pillar 4: Timing Trajectory -->
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-gray-800 pb-2">
          <div class="flex items-center space-x-2">
            <span class="text-xl">⏳</span>
            <h3 class="text-base font-bold font-serif-sc text-emerald-300">
              ${isEn ? 'IV. Spatiotemporal Career & Wealth Trajectory (Zhou Yi Annual Hexagram · Direct & Indirect Wealth · 12 Months)' : '四、时空财运与事业窗口推演（周易值年卦 · 正财主业 · 偏财副业 · 12月节律）'}
            </h3>
          </div>
          <span class="chinese-seal text-[10px] py-0.5 border-emerald-500 text-emerald-300">
            ${isEn ? 'Transit Timing' : '岁运时序'}
          </span>
        </div>

        <!-- Transit & Zhou Yi Banner -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-card p-5 rounded-2xl border border-gray-800 space-y-2.5 shadow-xl">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="text-xs font-bold text-purple-300">${isEn ? 'Decade & Annual Stance' : '当前大运与流年定调'}</span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">
                ${isEn ? tt.decadeGanzhiEn : tt.decadeGanzhi} (${isEn ? tt.decadeGodEn : tt.decadeGod}) · ${isEn ? tt.annualGanzhiEn : tt.annualGanzhi} (${isEn ? tt.annualGodEn : tt.annualGod})
              </span>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">
              ${isEn
                ? `Decade [${tt.decadeGanzhiEn}] sets a ${tt.decadeGodEn} command tone, whilst Year [${tt.annualGanzhiEn}] activates the ${tt.annualGodEn} gateway. Calibrate high-risk strategic moves against steady capital retention.`
                : `大运【${tt.decadeGanzhi}】（${tt.decadeGod}执权）奠定宏观中枢，流年【${tt.annualGanzhi}】（${tt.annualGod}当值）激活当下现实战役。注意区分攻守节奏，稳中求进。`}
            </p>
          </div>

          <div class="bg-card p-5 rounded-2xl border border-gray-800 space-y-2.5 shadow-xl">
            <div class="flex items-center justify-between border-b border-gray-800 pb-2">
              <span class="text-xs font-bold text-amber-300">${isEn ? 'Zhou Yi Value Year Hexagram' : '周易流年值年卦神机'}</span>
              <span class="text-xs font-mono font-bold text-amber-400">
                ${tt.annualHex.character || ''} ${isEn ? tt.annualHex.nameEn : tt.annualHex.nameZh}
              </span>
            </div>
            <p class="text-xs text-amber-100/90 font-serif-sc leading-relaxed">
              “${isEn ? tt.annualHex.decisionEn : tt.annualHex.decisionZh}”
            </p>
          </div>
        </div>

        <!-- Direct vs Indirect Wealth Dynamics -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-card p-5 rounded-2xl border border-emerald-900/40 space-y-2 shadow-xl">
            <div class="flex items-center justify-between">
              <h5 class="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <span>💰</span><span>${isEn ? 'Direct Wealth (Base Salary & Promotion)' : '正财运势（主业薪酬与职级晋升）'}</span>
              </h5>
              <span class="text-xs font-mono text-emerald-400 font-bold">${tt.directWealthScore}/100</span>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">${isEn ? tt.directWealthAnalysisEn : tt.directWealthAnalysisZh}</p>
          </div>

          <div class="bg-card p-5 rounded-2xl border border-sky-900/40 space-y-2 shadow-xl">
            <div class="flex items-center justify-between">
              <h5 class="text-sm font-bold text-sky-400 flex items-center gap-1.5">
                <span>📈</span><span>${isEn ? 'Indirect Wealth (Side-Hustle & Investments)' : '偏财运势（副业孵化与投资博弈）'}</span>
              </h5>
              <span class="text-xs font-mono text-sky-400 font-bold">${tt.indirectWealthScore}/100</span>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">${isEn ? tt.indirectWealthAnalysisEn : tt.indirectWealthAnalysisZh}</p>
          </div>
        </div>

        <!-- 12-Month Tactical Roadmap -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold text-gray-200 font-serif-sc flex items-center gap-2">
            <span>📅</span><span>${isEn ? '12-Month Tactical Career Calendar for Working Professionals' : '流月十二节律 · 打工人月度攻守行动指南'}</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${tt.monthlyRoadmap.map(m => `
              <div class="p-3.5 rounded-xl bg-black/40 border border-gray-800/80 hover:border-amber-500/40 transition space-y-2 flex flex-col justify-between">
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between border-b border-gray-800 pb-1">
                    <span class="font-bold text-xs text-amber-300 font-serif-sc">${isEn ? m.ganzhiEn : m.ganzhi}${isEn ? ' Month' : '月'} (${isEn ? m.godEn : m.god})</span>
                    <span class="text-[10px] text-gray-400 font-mono">${isEn ? m.solarSpanEn : m.solarSpanZh}</span>
                  </div>
                  <span class="inline-block text-[10px] px-2 py-0.5 rounded font-semibold bg-gray-800 text-gray-200 border border-gray-700">
                    ${isEn ? m.actionTagEn : m.actionTagZh}
                  </span>
                  <p class="text-[11px] text-gray-300 leading-relaxed font-sans">${isEn ? m.adviceEn : m.adviceZh}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Primary View Navigation Logic
  // activePrimaryView already declared at top
  const viewNavBtns = document.querySelectorAll('.view-nav-btn');
  const primaryViews = {
    'view-home': document.getElementById('view-home'),
    'view-strategy': document.getElementById('view-strategy'),
    'view-friction': document.getElementById('view-friction'),
    'view-luck': document.getElementById('view-luck'),
    'view-canons': document.getElementById('view-canons'),
    'view-iching': document.getElementById('view-iching'),
    'view-synastry': document.getElementById('view-synastry'),
    'view-fengshui': document.getElementById('view-fengshui'),
    'view-career': document.getElementById('view-career')
  };

  function switchPrimaryView(targetViewId) {
    if (!primaryViews[targetViewId]) return;
    activePrimaryView = targetViewId;

    if (targetViewId !== 'view-iching') {
      if (typeof stopIChingCyclePlay === 'function' && isIChingCyclePlaying) {
        stopIChingCyclePlay();
      }
    }

    viewNavBtns.forEach(btn => {
      const v = btn.getAttribute('data-view');
      if (v === targetViewId) {
        btn.classList.add('active', 'bg-gradient-to-r', 'from-amber-600', 'to-amber-700', 'text-white', 'border-amber-500/50', 'shadow-lg');
        btn.classList.remove('text-gray-400', 'hover:text-gray-200', 'border-transparent');
      } else {
        btn.classList.remove('active', 'bg-gradient-to-r', 'from-amber-600', 'to-amber-700', 'text-white', 'border-amber-500/50', 'shadow-lg');
        btn.classList.add('text-gray-400', 'hover:text-gray-200', 'border-transparent');
      }
    });

    Object.entries(primaryViews).forEach(([vId, el]) => {
      if (el) {
        if (vId === targetViewId) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      }
    });

    // If switching to home view, refresh radar canvas & ziping score
    if (targetViewId === 'view-home' && currentBaziResult) {
      if (typeof ElementChart !== 'undefined') {
        ElementChart.renderRadar('elementRadarCanvas', currentBaziResult.elements.percentages);
      }
      if (typeof renderZiping100Score === 'function') {
        renderZiping100Score(currentBaziResult);
      }
    }

    // If switching to luck view, refresh Chrono-Navigator canvas
    if (targetViewId === 'view-luck' && currentLuckResult && currentLuckResult.timeline && typeof drawChronoTimelineChart === 'function') {
      setTimeout(() => drawChronoTimelineChart(currentLuckResult.timeline, activeChronoAge), 60);
    }

    // If switching to synastry view, calculate if empty with progress bar
    if (targetViewId === 'view-synastry' && !currentSynastryResult && typeof triggerCalculateSynastry === 'function') {
      showDynamicCalculationProgress('synastry', () => {
        triggerCalculateSynastry();
      });
    }

    // If switching to fengshui view, render if chart exists
    if (targetViewId === 'view-fengshui' && currentBaziResult && typeof renderSpatialFengShui === 'function') {
      renderSpatialFengShui(currentBaziResult, currentLuckResult);
    }

    // If switching to career view, render if chart exists
    if (targetViewId === 'view-career' && currentBaziResult && typeof renderCareerWealth === 'function') {
      renderCareerWealth(currentBaziResult, currentLuckResult);
    }

    // If switching to iching view, render Four Pillars Hexagrams & Cycle Progression if chart exists
    if (targetViewId === 'view-iching' && currentBaziResult) {
      if (typeof renderFourPillarsHexagrams === 'function') renderFourPillarsHexagrams(currentBaziResult);
      if (typeof renderHexagramCycle === 'function') renderHexagramCycle(currentBaziResult, fourPillarsActiveAge);
      setTimeout(() => {
        if (activeIChingCycleTab === 'timeline' && cachedIChingCycleData && typeof drawHexagramCycleChart === 'function') {
          drawHexagramCycleChart(cachedIChingCycleData, fourPillarsActiveAge);
        }
      }, 50);
    }
  }

  viewNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-view');
      if (target) switchPrimaryView(target);
    });
  });

  // Window resize handler for active canvases
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('resize', () => {
      if (activePrimaryView === 'view-iching' && activeIChingCycleTab === 'timeline') {
        if (cachedIChingCycleData && cachedIChingCycleData.length > 0 && typeof drawHexagramCycleChart === 'function') {
          drawHexagramCycleChart(cachedIChingCycleData, fourPillarsActiveAge);
        }
      }
    });
  }

  // Page visibility change handler to pause autoplay when hidden
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && typeof stopIChingCyclePlay === 'function' && isIChingCyclePlaying) {
        stopIChingCyclePlay();
      }
    });
  }

  // Portal Jump Buttons & Back Buttons
  const portalBtnStrategy = document.getElementById('portalBtnStrategy');
  if (portalBtnStrategy) {
    portalBtnStrategy.addEventListener('click', () => switchPrimaryView('view-strategy'));
  }
  const portalBtnFriction = document.getElementById('portalBtnFriction');
  if (portalBtnFriction) {
    portalBtnFriction.addEventListener('click', () => switchPrimaryView('view-friction'));
  }
  const portalBtnFengShui = document.getElementById('portalBtnFengShui');
  if (portalBtnFengShui) {
    portalBtnFengShui.addEventListener('click', () => switchPrimaryView('view-fengshui'));
  }
  const btnJumpToHomeFromStrategy = document.getElementById('btnJumpToHomeFromStrategy');
  if (btnJumpToHomeFromStrategy) {
    btnJumpToHomeFromStrategy.addEventListener('click', () => switchPrimaryView('view-home'));
  }
  const btnJumpToHomeFromFriction = document.getElementById('btnJumpToHomeFromFriction');
  if (btnJumpToHomeFromFriction) {
    btnJumpToHomeFromFriction.addEventListener('click', () => switchPrimaryView('view-home'));
  }
  const btnJumpToHomeFromFengShui = document.getElementById('btnJumpToHomeFromFengShui');
  if (btnJumpToHomeFromFengShui) {
    btnJumpToHomeFromFengShui.addEventListener('click', () => switchPrimaryView('view-home'));
  }
  const portalBtnCareer = document.getElementById('portalBtnCareer') || document.getElementById('btnPortalCareer');
  if (portalBtnCareer) {
    portalBtnCareer.addEventListener('click', () => switchPrimaryView('view-career'));
  }
  const btnPortalCareer = document.getElementById('btnPortalCareer');
  if (btnPortalCareer && btnPortalCareer !== portalBtnCareer) {
    btnPortalCareer.addEventListener('click', () => switchPrimaryView('view-career'));
  }
  const btnJumpToHomeFromCareer = document.getElementById('btnJumpToHomeFromCareer');
  if (btnJumpToHomeFromCareer) {
    btnJumpToHomeFromCareer.addEventListener('click', () => switchPrimaryView('view-home'));
  }

  // Career Fullscreen Mode Controller (Seamlessly Enter / Exit Fullscreen without losing BaZi data)
  const btnToggleCareerFullscreen = document.getElementById('btnToggleCareerFullscreen');
  const btnExitCareerFullscreenFloating = document.getElementById('btnExitCareerFullscreenFloating');
  const viewCareer = document.getElementById('view-career');
  const careerFullscreenIcon = document.getElementById('careerFullscreenIcon');
  const careerFullscreenText = document.getElementById('careerFullscreenText');

  function updateCareerFullscreenUI(isFullscreen) {
    const isEn = (currentLang === 'en');
    if (careerFullscreenIcon) {
      careerFullscreenIcon.textContent = isFullscreen ? '🗗' : '⛶';
    }
    if (careerFullscreenText) {
      careerFullscreenText.textContent = isFullscreen
        ? (isEn ? 'Exit Fullscreen' : '退出全屏')
        : (isEn ? 'Enter Fullscreen' : '进入全屏推演');
    }
    if (btnToggleCareerFullscreen) {
      if (isFullscreen) {
        btnToggleCareerFullscreen.classList.remove('bg-indigo-700/80', 'hover:bg-indigo-600');
        btnToggleCareerFullscreen.classList.add('bg-rose-700/80', 'hover:bg-rose-600');
      } else {
        btnToggleCareerFullscreen.classList.remove('bg-rose-700/80', 'hover:bg-rose-600');
        btnToggleCareerFullscreen.classList.add('bg-indigo-700/80', 'hover:bg-indigo-600');
      }
    }
    if (btnExitCareerFullscreenFloating) {
      if (isFullscreen) {
        btnExitCareerFullscreenFloating.classList.remove('hidden');
      } else {
        btnExitCareerFullscreenFloating.classList.add('hidden');
      }
    }
  }

  function setCareerFullscreenState(enable) {
    if (!viewCareer) return;
    if (enable) {
      viewCareer.classList.add('career-fullscreen-mode');
      if (viewCareer.requestFullscreen && !document.fullscreenElement) {
        viewCareer.requestFullscreen().catch(() => {});
      }
      updateCareerFullscreenUI(true);
    } else {
      viewCareer.classList.remove('career-fullscreen-mode');
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      updateCareerFullscreenUI(false);
    }
  }

  if (btnToggleCareerFullscreen) {
    btnToggleCareerFullscreen.addEventListener('click', () => {
      if (!viewCareer) return;
      const isCurrentlyFullscreen = viewCareer.classList.contains('career-fullscreen-mode');
      setCareerFullscreenState(!isCurrentlyFullscreen);
    });
  }

  if (btnExitCareerFullscreenFloating) {
    btnExitCareerFullscreenFloating.addEventListener('click', () => {
      setCareerFullscreenState(false);
    });
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && viewCareer && viewCareer.classList.contains('career-fullscreen-mode')) {
        setCareerFullscreenState(false);
      }
    });
  }

  // Database Tab Switching Logic (6 Tabs)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.add('hidden'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetTab);
      if (activePane) activePane.classList.remove('hidden');
    });
  });

  // Transit Fortune Cycle Sub-Tabs (Decade / Annual / Month / Day)
  const fortuneCycleTabs = document.getElementById('fortuneCycleTabs');
  if (fortuneCycleTabs) {
    fortuneCycleTabs.querySelectorAll('.fortune-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target) {
          selectedFortuneCycle = target;
          if (currentBaziResult && currentLuckResult) {
            renderTransitFortuneDetail(currentBaziResult, currentLuckResult);
          }
        }
      });
    });
  }

  // 《三命通会》 Day/Hour Selector Interactive Lookup
  const smDaySelect = document.getElementById('smDaySelect');
  const smHourSelect = document.getElementById('smHourSelect');
  const smCustomQueryBtn = document.getElementById('smCustomQueryBtn');
  const smCustomResult = document.getElementById('smCustomResult');

  JIA_ZI_60.forEach(jz => {
    const opt = document.createElement('option');
    opt.value = jz;
    opt.textContent = jz + '日';
    smDaySelect.appendChild(opt);
  });
  BRANCHES.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b;
    opt.textContent = b + '时';
    smHourSelect.appendChild(opt);
  });

  smCustomQueryBtn.addEventListener('click', () => {
    const d = smDaySelect.value;
    const h = smHourSelect.value;
    const dStemIdx = STEMS.indexOf(d[0]);
    const hBranchIdx = BRANCHES.indexOf(h);
    const hStemIdx = (dStemIdx % 5 * 2 + hBranchIdx) % 10;
    const hourPillar = STEMS[hStemIdx] + h;

    const res = SanMingDB.getReading(d, hourPillar);
    if (res) {
      smCustomResult.innerHTML = `
        <div class="bg-black/30 p-4 rounded-lg border border-amber-600/30 mt-3 space-y-2">
          <div class="flex justify-between items-center">
            <h4 class="font-bold text-amber-300 font-serif-sc">${res.title} (${res.pattern})</h4>
            <span class="text-xs text-gray-400">${res.source}</span>
          </div>
          <p class="text-sm font-serif-sc text-amber-100 font-semibold">“${res.verse}”</p>
          <div class="text-xs text-gray-300 space-y-1.5 pt-2 border-t border-gray-800">
            <p><b class="text-amber-400">【含义】</b>${res.meaning}</p>
            <p><b class="text-emerald-400">【成格】</b>${res.conditions}</p>
            <p><b class="text-rose-400">【用法】</b>${res.usage}</p>
          </div>
        </div>
      `;
    }
  });

  // 《穷通宝鉴》 120 Seasonal Explorer
  const qtStemSelect = document.getElementById('qtStemSelect');
  const qtBranchSelect = document.getElementById('qtBranchSelect');
  const qtCustomQueryBtn = document.getElementById('qtCustomQueryBtn');
  const qtCustomResult = document.getElementById('qtCustomResult');

  STEMS.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = `${s}日元`;
    qtStemSelect.appendChild(opt);
  });
  BRANCHES.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b;
    opt.textContent = `${MONTH_BRANCH_NAMES[b] || b + '月'}`;
    qtBranchSelect.appendChild(opt);
  });

  qtCustomQueryBtn.addEventListener('click', () => {
    const s = qtStemSelect.value;
    const b = qtBranchSelect.value;
    const res = QiongTongDB.getReading(s, b);
    if (res) {
      qtCustomResult.innerHTML = `
        <div class="bg-black/30 p-4 rounded-lg border border-blue-600/30 mt-3 space-y-2">
          <div class="flex justify-between items-center">
            <h4 class="font-bold text-blue-300 font-serif-sc">${res.title}</h4>
            <span class="text-xs text-amber-300">首用: ${res.primary} | 次用: ${res.secondary}</span>
          </div>
          <p class="text-xs text-gray-400">【气候】${res.climate}</p>
          <p class="text-sm font-serif-sc text-blue-100 font-medium">“${res.classic_text}”</p>
          <p class="text-xs text-gray-300 leading-relaxed">${res.vernacular}</p>
        </div>
      `;
    }
  });

  // ==========================================
  // 《子平真诠》 格局成败救应与现代白话解读 (Zi Ping Zhen Quan Patterns)
  // ==========================================
  function renderZipingPatterns(isEn) {
    const zpPatternsContainer = document.getElementById('zipingPatternsList');
    if (!zpPatternsContainer) return;
    if (typeof ZiPingZhenQuanDB === 'undefined' || typeof ZiPingZhenQuanDB.getAllPatterns !== 'function') return;

    zpPatternsContainer.innerHTML = '';
    const allPats = ZiPingZhenQuanDB.getAllPatterns();
    for (const [pName, p] of Object.entries(allPats)) {
      const div = document.createElement('div');
      div.className = 'p-4 bg-black/20 rounded-xl border border-gray-800 text-xs space-y-2.5 hover:border-purple-500/40 transition';
      
      const pTitle = isEn ? (p.nameEn || p.name) : p.name;
      const authorText = isEn ? 'Shen Xiaozhan Canonical Pattern Exegesis' : '沈孝瞻格局真谛';
      const condLabel = isEn ? 'Pattern Formation Conditions' : '成格条件';
      const condText = isEn ? (p.conditionsEn || p.conditions) : p.conditions;
      const defectLabel = isEn ? 'Fatal Defects' : '破格之患';
      const defectText = isEn ? (p.defectsEn || p.defects) : p.defects;
      const remedyLabel = isEn ? 'Remedies & Supporting Gods' : '救应法门';
      const remedyText = isEn ? (p.remediesEn || p.remedies) : p.remedies;

      let vernacularHtml = '';
      if (p.vernacular) {
        const vTrans = isEn ? p.vernacular.translationEn : p.vernacular.translation;
        const vPara = isEn ? p.vernacular.paradigmEn : p.vernacular.paradigm;
        const vWarn = isEn ? p.vernacular.defectWarningEn : p.vernacular.defectWarning;
        vernacularHtml = `
          <div class="mt-2 pt-2 border-t border-gray-800/80 space-y-1.5 text-[11px]">
            <div class="text-purple-300">
              <b>${isEn ? '💡 Modern Vernacular Exegesis: ' : '💡 现代通俗白话解读：'}</b>${vTrans}
            </div>
            <div class="text-emerald-300">
              <b>${isEn ? '💼 Career Paradigm: ' : '💼 职场立身范式：'}</b>${vPara}
            </div>
            <div class="text-rose-300">
              <b>${isEn ? '⚠️ Defect Alert: ' : '⚠️ 破格警示：'}</b>${vWarn}
            </div>
          </div>
        `;
      }

      div.innerHTML = `
        <div class="flex justify-between items-center border-b border-gray-800/60 pb-1.5">
          <h5 class="font-bold text-purple-300 text-sm font-serif-sc">${pTitle}</h5>
          <span class="text-[11px] text-gray-400 font-mono">${authorText}</span>
        </div>
        <p class="text-gray-300"><b class="text-amber-400">【${condLabel}】</b>${condText}</p>
        <p class="text-rose-400"><b class="text-rose-300">【${defectLabel}】</b>${defectText}</p>
        <p class="text-emerald-400"><b class="text-emerald-300">【${remedyLabel}】</b>${remedyText}</p>
        ${vernacularHtml}
      `;
      zpPatternsContainer.appendChild(div);
    }
  }

  // ==========================================
  // 十神全典与常见定义渲染 (Ten Gods Glossary & Common Definitions)
  // ==========================================
  function renderTenGodsDefinitions(isEn, category = null) {
    if (category) activeTenGodsCategory = category;
    const filterContainer = document.getElementById('tenGodsFilterGroup');
    const listContainer = document.getElementById('tenGodsContainer');
    if (!listContainer) return;
    if (typeof TenGodsDB === 'undefined' || typeof TenGodsDB.getAll !== 'function') return;

    const categories = [
      { key: 'all', zh: '全部十神', en: 'All Ten Gods' },
      { key: 'guan_sha', zh: '官杀星', en: 'Officer & Killings' },
      { key: 'cai', zh: '财星', en: 'Wealth Stars' },
      { key: 'yin', zh: '印星', en: 'Resource Stars' },
      { key: 'shi_shang', zh: '食伤星', en: 'Output Stars' },
      { key: 'bi_jie', zh: '比劫星', en: 'Companion Stars' }
    ];

    if (filterContainer) {
      filterContainer.innerHTML = '';
      categories.forEach(cat => {
        const btn = document.createElement('button');
        const isActive = (activeTenGodsCategory === cat.key);
        btn.className = `px-2.5 py-1 rounded-lg font-medium transition cursor-pointer text-xs ${
          isActive
            ? 'bg-amber-600 text-white shadow'
            : 'bg-black/30 text-gray-400 hover:text-gray-200 border border-gray-800'
        }`;
        btn.textContent = isEn ? cat.en : cat.zh;
        btn.addEventListener('click', () => {
          activeTenGodsCategory = cat.key;
          renderTenGodsDefinitions(isEn, cat.key);
        });
        filterContainer.appendChild(btn);
      });
    }

    const allGods = TenGodsDB.getAll();
    const filtered = allGods.filter(g => {
      if (activeTenGodsCategory === 'all') return true;
      if (activeTenGodsCategory === 'guan_sha') return g.key === 'zheng_guan' || g.key === 'qi_sha';
      if (activeTenGodsCategory === 'cai') return g.key === 'zheng_cai' || g.key === 'pian_cai';
      if (activeTenGodsCategory === 'yin') return g.key === 'zheng_yin' || g.key === 'pian_yin';
      if (activeTenGodsCategory === 'shi_shang') return g.key === 'shi_shen' || g.key === 'shang_guan';
      if (activeTenGodsCategory === 'bi_jie') return g.key === 'bi_jian' || g.key === 'jie_cai';
      return true;
    });

    listContainer.innerHTML = '';
    filtered.forEach(g => {
      const card = document.createElement('div');
      card.className = 'p-4 sm:p-5 rounded-2xl bg-card border border-gray-800 shadow-xl space-y-3.5 flex flex-col justify-between hover:border-amber-500/40 transition';

      card.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-gray-800 pb-2">
            <div class="flex items-center space-x-2">
              <span class="text-base font-bold font-serif-sc text-amber-300">
                ${isEn ? g.nameEn : g.nameZh}
              </span>
              <span class="chinese-seal text-[10px] py-0 border-amber-500 text-amber-300">
                ${isEn ? g.chineseSealEn : g.chineseSealZh}
              </span>
            </div>
            <span class="text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded border border-gray-800">
              ${isEn ? g.elementRelationEn : g.elementRelationZh}
            </span>
          </div>

          <div class="p-3 rounded-xl bg-black/50 border border-gray-800 text-xs font-serif-sc text-amber-100/90 leading-relaxed space-y-1">
            <div class="text-[10px] text-amber-400/80 font-mono font-bold">
              ${isEn ? '📜 Ancient Canon Authority' : '📜 古籍原典引证'}
            </div>
            <p class="whitespace-pre-line">${isEn ? g.ancientCanonEn : g.ancientCanonZh}</p>
          </div>

          <div class="text-xs text-gray-300 leading-relaxed">
            <strong class="text-purple-300">${isEn ? '💡 Plain Exegesis: ' : '💡 白话通俗要义：'}</strong>
            ${isEn ? g.plainTextEn : g.plainTextZh}
          </div>

          <div class="space-y-1 text-xs">
            <p>
              <strong class="text-blue-300">${isEn ? '💼 Workplace Archetype: ' : '💼 职场心智原型：'}</strong>
              <span class="font-bold text-gray-200">${isEn ? g.workplaceArchetypeEn : g.workplaceArchetypeZh}</span>
            </p>
            <p class="text-gray-300">
              <strong class="text-emerald-400">${isEn ? '⚡ Core Strengths: ' : '⚡ 核心优势：'}</strong>
              ${isEn ? g.strengthsEn : g.strengthsZh}
            </p>
            <p class="text-gray-300">
              <strong class="text-rose-400">${isEn ? '⚠️ Deadly Traps: ' : '⚠️ 致命雷区：'}</strong>
              ${isEn ? g.trapsEn : g.trapsZh}
            </p>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-[11px] text-amber-200 leading-relaxed">
          <strong class="text-amber-300">${isEn ? '🎯 Practical Action Directive: ' : '🎯 职场实操指令：'}</strong>
          ${isEn ? g.actionRulesEn : g.actionRulesZh}
        </div>
      `;
      listContainer.appendChild(card);
    });
  }

  // Initial render of Patterns and Definitions
  renderZipingPatterns(currentLang === 'en');
  renderTenGodsDefinitions(currentLang === 'en');

  // 《滴天髓》 10 Stems Quick Selector
  const dtsStemsContainer = document.getElementById('dtsStemButtons');
  const dtsCustomResult = document.getElementById('dtsCustomResult');
  STEMS.forEach(s => {
    const btn = document.createElement('button');
    btn.className = `px-3 py-1.5 rounded text-sm font-bold border border-gray-700 hover:border-amber-400 transition ${getElementClass(STEM_ELEMENTS[STEMS.indexOf(s)])}`;
    btn.textContent = s + '木火土金水'[STEMS.indexOf(s) % 5];
    btn.addEventListener('click', () => {
      const data = DiTianSuiDB.getForDayMaster(s);
      if (data) {
        dtsCustomResult.innerHTML = `
          <div class="bg-black/30 p-4 rounded-lg border border-emerald-600/30 mt-3">
            <h4 class="font-bold text-emerald-300 font-serif-sc mb-1">${data.name} · ${data.nature}</h4>
            <p class="text-sm font-serif-sc text-emerald-100 font-semibold mb-2">“${data.poem}”</p>
            <p class="text-xs text-gray-300 leading-relaxed mb-2">${data.vernacular}</p>
            <p class="text-xs text-emerald-400">注解：${data.classic_commentary}</p>
          </div>
        `;
      }
    });
    dtsStemsContainer.appendChild(btn);
  });

  // 《滴天髓》 Chapters
  const dtsChaptersContainer = document.getElementById('dtsChaptersList');
  if (dtsChaptersContainer) {
    const chaps = DiTianSuiDB.getAllChapters();
    chaps.forEach(c => {
      const div = document.createElement('div');
      div.className = 'p-3 bg-black/20 rounded-lg border border-gray-800 text-xs';
      div.innerHTML = `
        <h5 class="font-bold text-gray-200 mb-1">${c.title}</h5>
        <p class="font-serif-sc text-amber-200/90 font-medium mb-1">“${c.content}”</p>
        <p class="text-gray-400">${c.commentary}</p>
      `;
      dtsChaptersContainer.appendChild(div);
    });
  }

  // 《渊海子平》 Chapters & Ten Gods
  function renderYuanHaiChapters() {
    const yhChaptersContainer = document.getElementById('yuanhaiChaptersList');
    if (!yhChaptersContainer) return;
    const isEn = (currentLang === 'en');
    yhChaptersContainer.innerHTML = '';
    const chaps = YuanHaiDB.getAllChapters();
    chaps.forEach(c => {
      const div = document.createElement('div');
      div.className = 'p-4 bg-black/20 rounded-xl border border-gray-800 text-xs space-y-2.5 shadow-md';
      const versesHtml = c.verses.map(v => `
        <div class="p-3 bg-black/30 rounded-lg border-l-4 border-rose-500/60 space-y-2 mb-2 shadow-inner">
          <div class="flex items-center justify-between">
            <p class="font-serif-sc text-rose-200 font-bold text-xs">“${v.line}”</p>
            <span class="text-[10px] text-rose-400/80 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 font-semibold">
              ${isEn ? 'Classic Verse' : '祖师真传断诀'}
            </span>
          </div>
          <p class="text-gray-400 text-[11px] leading-relaxed"><b class="text-gray-300">${isEn ? '【Ancient Summary】' : '【古训要义】'}</b>${v.note}</p>
          ${v.vernacular ? `
            <div class="pt-1 text-gray-300 text-[11px] leading-relaxed border-t border-gray-800/60">
              <span class="text-amber-300/90 font-semibold block mb-0.5">📖 ${isEn ? '【Modern Vernacular Interpretation】' : '【现代白话逐句通俗精析】：'}</span>
              <p>${v.vernacular}</p>
            </div>
          ` : ''}
          ${v.application ? `
            <div class="pt-1 text-gray-300 text-[11px] leading-relaxed border-t border-gray-800/60">
              <span class="text-emerald-400 font-semibold block mb-0.5">🎯 ${isEn ? '【Real-World Practice & Career Guidelines】' : '【现实实战应用与处世法则】：'}</span>
              <p>${v.application}</p>
            </div>
          ` : ''}
        </div>
      `).join('');
      div.innerHTML = `
        <div class="flex justify-between items-center pb-1.5 border-b border-gray-800">
          <h5 class="font-bold text-rose-300 text-sm font-serif-sc">${c.title}</h5>
          <span class="text-gray-400 text-[11px]">${c.author}</span>
        </div>
        <p class="text-gray-300 font-serif-sc font-medium text-xs leading-relaxed">“${c.quote}”</p>
        <p class="text-gray-400 text-[11px] leading-relaxed">${c.meaning}</p>
        <div class="pt-2 space-y-2 border-t border-gray-800">${versesHtml}</div>
      `;
      yhChaptersContainer.appendChild(div);
    });
  }
  renderYuanHaiChapters();

  const yhTenGodsContainer = document.getElementById('yuanhaiTenGodsList');
  if (yhTenGodsContainer) {
    const gods = ['正官', '七杀', '正印', '偏印', '正财', '偏财', '食神', '伤官', '比肩', '劫财'];
    gods.forEach(g => {
      const info = YuanHaiDB.getTenGodTreatise(g);
      if (!info) return;
      const div = document.createElement('div');
      div.className = 'p-4 bg-black/25 rounded-xl border border-gray-800 hover:border-amber-500/40 transition text-xs space-y-2.5 shadow-md';
      div.innerHTML = `
        <div class="flex items-center justify-between pb-1.5 border-b border-gray-800">
          <h5 class="font-bold text-amber-300 text-sm font-serif-sc flex items-center gap-1.5">
            <span class="chinese-seal text-[10px] py-0">十神</span>
            <span>【${info.name || g}】</span>
          </h5>
          <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
            现代实战全解
          </span>
        </div>

        <!-- Ancient Scripture Quote -->
        <div class="p-2 bg-amber-950/20 rounded border-l-2 border-amber-600/60 text-gray-400 font-serif-sc text-[11px]">
          <b>🏛️ 徐大升祖训：</b>“${info.ancient || ''}”
        </div>

        <!-- Plain Language Explanation -->
        <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800">
          <span class="text-amber-300 font-bold block mb-1">💡 通俗白话精释：</span>
          <p class="text-gray-200 leading-relaxed">${info.plain_text || ''}</p>
        </div>

        <!-- Suitable Careers -->
        <div class="p-2.5 bg-black/30 rounded-lg border border-emerald-950/40">
          <span class="text-emerald-400 font-bold block mb-1">💼 适合现代职业与岗位：</span>
          <p class="text-gray-300 leading-relaxed">${info.careers || ''}</p>
        </div>

        <!-- Interpersonal Relations -->
        <div class="p-2.5 bg-black/30 rounded-lg border border-blue-950/40">
          <span class="text-blue-300 font-bold block mb-1">👥 人际关系与社交情商：</span>
          <p class="text-gray-300 leading-relaxed">${info.relationships || ''}</p>
        </div>

        <!-- Real-world Example & Strengths/Flaws -->
        <div class="p-2 bg-black/20 rounded text-[11px] text-gray-400 border border-gray-800/80 space-y-1">
          <p><b class="text-indigo-300">🌟 生活真实案例：</b>${info.example || ''}</p>
          <p class="text-gray-500 pt-0.5 border-t border-gray-800/60">${info.strengths_flaws || ''}</p>
        </div>
      `;
      yhTenGodsContainer.appendChild(div);
    });
  }

  // 《神峰通考》 Treatises List
  function renderShenFengTreatises() {
    const sfContainer = document.getElementById('shenfengTreatisesList');
    if (!sfContainer || typeof ShenFengDB === 'undefined') return;
    const isEn = (currentLang === 'en');
    sfContainer.innerHTML = '';
    const treatises = ShenFengDB.getAllTreatises();
    treatises.forEach(t => {
      const div = document.createElement('div');
      div.className = 'p-4 bg-black/20 rounded-xl border border-gray-800 text-xs space-y-2 shadow-md';
      div.innerHTML = `
        <div class="flex justify-between items-center pb-1.5 border-b border-gray-800">
          <h5 class="font-bold text-orange-300 text-sm font-serif-sc">${isEn ? t.titleEn : t.titleZh}</h5>
          <span class="chinese-seal text-[10px] py-0">${isEn ? 'Shen Feng Doctrine' : '神峰绝学'}</span>
        </div>
        <p class="text-orange-200/90 font-serif-sc font-medium leading-relaxed">“${isEn ? t.quoteEn : t.quoteZh}”</p>
        <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800">
          <span class="text-amber-300 font-bold block mb-1">💡 ${isEn ? 'Canonical Vernacular:' : '通俗白话阐微：'}</span>
          <p class="text-gray-300 leading-relaxed">${isEn ? t.vernacularEn : t.vernacularZh}</p>
        </div>
        <div class="p-2.5 bg-black/30 rounded-lg border border-orange-950/40">
          <span class="text-orange-400 font-bold block mb-1">🎯 ${isEn ? 'Modern Strategic Pivot (Pareto 20%):' : '现代战略破局（帕累托20%枢纽）：'}</span>
          <p class="text-gray-300 leading-relaxed">${isEn ? t.modernInterpretationEn : t.modernInterpretationZh}</p>
        </div>
      `;
      sfContainer.appendChild(div);
    });
  }
  renderShenFengTreatises();

  // 《玉照定真经》 Aphorisms List
  function renderYuZhaoAphorisms() {
    const yzContainer = document.getElementById('yuzhaoAphorismsList');
    if (!yzContainer || typeof YuZhaoDB === 'undefined') return;
    const isEn = (currentLang === 'en');
    yzContainer.innerHTML = '';
    const aphorisms = YuZhaoDB.getAllAphorisms();
    aphorisms.forEach(a => {
      const div = document.createElement('div');
      div.className = 'p-4 bg-black/20 rounded-xl border border-gray-800 text-xs space-y-2 shadow-md';
      div.innerHTML = `
        <div class="flex justify-between items-center pb-1.5 border-b border-gray-800">
          <h5 class="font-bold text-cyan-300 text-sm font-serif-sc">${isEn ? a.titleEn : a.titleZh}</h5>
          <span class="chinese-seal text-[10px] py-0">${isEn ? 'Yu Zhao Classic' : '玉照真诠'}</span>
        </div>
        <p class="text-cyan-200/90 font-serif-sc font-medium leading-relaxed">“${isEn ? a.quoteEn : a.quoteZh}”</p>
        <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800">
          <span class="text-amber-300 font-bold block mb-1">💡 ${isEn ? 'Palace Genealogy Insight:' : '宫位六亲经旨精解：'}</span>
          <p class="text-gray-300 leading-relaxed">${isEn ? a.vernacularEn : a.vernacularZh}</p>
        </div>
      `;
      yzContainer.appendChild(div);
    });
  }
  renderYuZhaoAphorisms();

  // 《李虚中命书》 Chapters List
  function renderLiXuZhongChapters() {
    const lxzContainer = document.getElementById('lixuzhongChaptersList');
    if (!lxzContainer || typeof LiXuZhongDB === 'undefined') return;
    const isEn = (currentLang === 'en');
    lxzContainer.innerHTML = '';
    const chapters = LiXuZhongDB.getAllChapters();
    chapters.forEach(c => {
      const div = document.createElement('div');
      div.className = 'p-4 bg-black/20 rounded-xl border border-gray-800 text-xs space-y-2 shadow-md';
      div.innerHTML = `
        <div class="flex justify-between items-center pb-1.5 border-b border-gray-800">
          <h5 class="font-bold text-teal-300 text-sm font-serif-sc">${isEn ? c.titleEn : c.titleZh}</h5>
          <span class="chinese-seal text-[10px] py-0">${isEn ? 'Three Primes' : '三元宗旨'}</span>
        </div>
        <p class="text-teal-200/90 font-serif-sc font-medium leading-relaxed">“${isEn ? c.quoteEn : c.quoteZh}”</p>
        <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800">
          <span class="text-amber-300 font-bold block mb-1">💡 ${isEn ? 'Acoustic Resonance & Spatial Field:' : '音律场能与时空交互：'}</span>
          <p class="text-gray-300 leading-relaxed">${isEn ? c.vernacularEn : c.vernacularZh}</p>
        </div>
      `;
      lxzContainer.appendChild(div);
    });
  }
  renderLiXuZhongChapters();

  // Universal Search across all 8 databases
  const searchInput = document.getElementById('dbSearchInput');
  const searchBtn = document.getElementById('dbSearchBtn');
  const searchResultsContainer = document.getElementById('dbSearchResults');

  function executeSearch() {
    const isEn = (currentLang === 'en');
    const query = searchInput.value.trim();
    if (!query) {
      searchResultsContainer.innerHTML = isEn
        ? '<p class="text-xs text-gray-500 text-center">Please enter keywords to search across the eight classics.</p>'
        : '<p class="text-xs text-gray-500 text-center">请输入关键词进行联合检索，如“病药”、“夫妻”、“纳音”、“桃花流水”、“伤官吐秀”、“金白水清”、“丙火”、“调候”、“救应”等。</p>';
      return;
    }

    const dtsResults = DiTianSuiDB.search(query);
    const smResults = SanMingDB.search(query);
    const qtResults = QiongTongDB.search(query);
    const zpResults = ZiPingZhenQuanDB.search(query);
    const yhResults = YuanHaiDB.search(query);
    const sfResults = (typeof ShenFengDB !== 'undefined') ? ShenFengDB.search(query) : [];
    const yzResults = (typeof YuZhaoDB !== 'undefined') ? YuZhaoDB.search(query) : [];
    const lxzResults = (typeof LiXuZhongDB !== 'undefined') ? LiXuZhongDB.search(query) : [];
    const tgResults = (typeof TenGodsDB !== 'undefined') ? TenGodsDB.search(query) : [];
    const all = [...dtsResults, ...smResults, ...qtResults, ...zpResults, ...yhResults, ...sfResults, ...yzResults, ...lxzResults, ...tgResults];

    if (all.length === 0) {
      searchResultsContainer.innerHTML = isEn
        ? `<p class="text-xs text-gray-400 text-center">No relevant entries containing "${query}" found across the eight classics.</p>`
        : `<p class="text-xs text-gray-400 text-center">八大典籍中未找到包含 “${query}” 的相关条目。</p>`;
      return;
    }

    searchResultsContainer.innerHTML = `
      <div class="text-xs text-gray-400 mb-2 font-medium">${isEn ? `Found ${all.length} results across the eight classics:` : `在八大典籍全库中检索到 ${all.length} 条结果：`}</div>
      <div class="space-y-3">
        ${all.map(item => `
          <div class="p-3.5 bg-black/30 rounded-lg border border-gray-700/50 hover:border-amber-500/50 transition">
            <div class="flex justify-between items-center mb-1.5">
              <span class="font-bold text-sm text-amber-300 font-serif-sc">${isEn ? (item.titleEn || item.title) : item.title}</span>
              <span class="chinese-seal text-[10px] py-0">${isEn ? (item.sourceEn || item.source) : item.source}</span>
            </div>
            <p class="text-xs font-serif-sc text-gray-200 mb-1">“${isEn ? (item.contentEn || item.content) : item.content}”</p>
            <p class="text-[11px] text-gray-400 leading-relaxed">${isEn ? (item.detailEn || item.detail) : item.detail}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  searchBtn.addEventListener('click', executeSearch);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') executeSearch();
  });

  // ==========================================
  // 周易六十四卦算卦控制器 (I Ching Controller)
  // ==========================================
  // I Ching state already declared at top

  function initIChingController() {
    const ichingQueryInput = document.getElementById('ichingQueryInput');
    const ichingSelect = document.getElementById('ichingSelect');
    const ichingInstantBtn = document.getElementById('ichingInstantBtn');
    const ichingCoinBtn = document.getElementById('ichingCoinBtn');
    const ichingTimeBtn = document.getElementById('ichingTimeBtn');
    const coinTossArena = document.getElementById('coinTossArena');
    const coinStepBadge = document.getElementById('coinStepBadge');
    const coinResetBtn = document.getElementById('coinResetBtn');
    const coinGraphic1 = document.getElementById('coinGraphic1');
    const coinGraphic2 = document.getElementById('coinGraphic2');
    const coinGraphic3 = document.getElementById('coinGraphic3');
    const throwCoinBtn = document.getElementById('throwCoinBtn');
    const coinLinesProgress = document.getElementById('coinLinesProgress');

    function populateIChingDropdown() {
      if (!ichingSelect || typeof IChingDB === 'undefined') return;
      const isEn = (currentLang === 'en');
      const hexList = IChingDB.getAllHexagrams();
      const currentSelected = ichingSelect.value;

      ichingSelect.innerHTML = `
        <option value="">${isEn ? '📖 64 Hexagrams Quick Reference...' : '📖 六十四卦速查全览...'}</option>
        ${hexList.map(h => `
          <option value="${h.number}">
            ${isEn ? `Hexagram ${h.number} · ${h.nameEn} (${h.nameZh})` : `第${h.number}卦 · ${h.nameZh} (${h.pinyin})`}
          </option>
        `).join('')}
      `;
      if (currentSelected) {
        ichingSelect.value = currentSelected;
      }
    }

    function resetCoinState() {
      currentCoinStep = 1;
      currentCoinLines = [];
      const isEn = (currentLang === 'en');
      if (coinStepBadge) {
        coinStepBadge.textContent = isEn ? 'Toss 1 of 6' : '第 1 / 6 掷';
      }
      if (throwCoinBtn) {
        throwCoinBtn.disabled = false;
        throwCoinBtn.className = 'px-8 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm shadow-xl transition active:scale-95';
        throwCoinBtn.textContent = isEn ? 'Toss Line 1 (Initial)' : '掷出第 1 爻 (初爻)';
      }
      if (coinLinesProgress) {
        coinLinesProgress.innerHTML = '';
      }
      if (coinGraphic1) {
        coinGraphic1.className = 'w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center shadow-lg text-xs font-bold text-amber-100 font-serif-sc transition-transform duration-300';
        coinGraphic1.textContent = isEn ? 'Heads (3)' : '字 (3)';
      }
      if (coinGraphic2) {
        coinGraphic2.className = 'w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center shadow-lg text-xs font-bold text-amber-100 font-serif-sc transition-transform duration-300';
        coinGraphic2.textContent = isEn ? 'Heads (3)' : '字 (3)';
      }
      if (coinGraphic3) {
        coinGraphic3.className = 'w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center shadow-lg text-xs font-bold text-amber-100 font-serif-sc transition-transform duration-300';
        coinGraphic3.textContent = isEn ? 'Tails (2)' : '背 (2)';
      }
    }

    // Expose refresh on language change
    window.refreshIChingOnLangChange = function() {
      populateIChingDropdown();
      if (lastDivinationResult) {
        renderIChingResult(lastDivinationResult);
      }
      const isEn = (currentLang === 'en');
      if (coinStepBadge && currentCoinStep <= 6) {
        coinStepBadge.textContent = isEn ? `Toss ${currentCoinStep} of 6` : `第 ${currentCoinStep} / 6 掷`;
      }
      if (throwCoinBtn && currentCoinStep <= 6) {
        const posNamesZh = ['初', '二', '三', '四', '五', '上'];
        const posNamesEn = ['1st (Initial)', '2nd', '3rd', '4th', '5th', '6th (Top)'];
        throwCoinBtn.textContent = isEn 
          ? `Toss Line ${currentCoinStep} (${posNamesEn[currentCoinStep - 1]})`
          : `掷出第 ${currentCoinStep} 爻 (${posNamesZh[currentCoinStep - 1]}爻)`;
      }
    };

    // Initial Dropdown population
    populateIChingDropdown();

    // Event: Instant Cast (Yarrow Stalk probability)
    if (ichingInstantBtn) {
      ichingInstantBtn.addEventListener('click', () => {
        if (typeof IChingEngine === 'undefined') return;
        if (coinTossArena) coinTossArena.classList.add('hidden');
        const q = ichingQueryInput ? ichingQueryInput.value.trim() : '';
        lastDivinationResult = IChingEngine.castInstant(q);
        renderIChingResult(lastDivinationResult);
      });
    }

    // Event: Plum Blossom Time Cast
    if (ichingTimeBtn) {
      ichingTimeBtn.addEventListener('click', () => {
        if (typeof IChingEngine === 'undefined') return;
        if (coinTossArena) coinTossArena.classList.add('hidden');
        const q = ichingQueryInput ? ichingQueryInput.value.trim() : '';
        lastDivinationResult = IChingEngine.castTimeHexagram(new Date(), q);
        renderIChingResult(lastDivinationResult);
      });
    }

    // Event: Toggle Coin Toss Arena
    if (ichingCoinBtn) {
      ichingCoinBtn.addEventListener('click', () => {
        if (!coinTossArena) return;
        coinTossArena.classList.toggle('hidden');
        if (!coinTossArena.classList.contains('hidden')) {
          resetCoinState();
        }
      });
    }

    // Event: Coin Reset
    if (coinResetBtn) {
      coinResetBtn.addEventListener('click', () => {
        resetCoinState();
      });
    }

    // Event: Throw Coin Button
    if (throwCoinBtn) {
      throwCoinBtn.addEventListener('click', () => {
        if (typeof IChingEngine === 'undefined') return;
        if (currentCoinStep > 6) {
          resetCoinState();
          return;
        }

        const isEn = (currentLang === 'en');
        const line = IChingEngine.castCoinLine(currentCoinStep);
        currentCoinLines.push(line);

        // Animate coins
        const updateCoinGraphic = (el, val) => {
          if (!el) return;
          el.style.transform = 'scale(1.15) rotate(180deg)';
          setTimeout(() => {
            el.style.transform = 'scale(1) rotate(0deg)';
            if (val === 3) {
              el.className = 'w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center shadow-lg text-xs font-bold text-amber-100 font-serif-sc transition-transform duration-300';
              el.textContent = isEn ? 'Heads (3)' : '字 (3)';
            } else {
              el.className = 'w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-stone-400/80 bg-gradient-to-br from-stone-600 via-stone-700 to-stone-900 flex items-center justify-center shadow-lg text-xs font-bold text-stone-200 font-serif-sc transition-transform duration-300';
              el.textContent = isEn ? 'Tails (2)' : '背 (2)';
            }
          }, 150);
        };

        if (line.coins && line.coins.length === 3) {
          updateCoinGraphic(coinGraphic1, line.coins[0]);
          updateCoinGraphic(coinGraphic2, line.coins[1]);
          updateCoinGraphic(coinGraphic3, line.coins[2]);
        }

        // Render line into progress list
        if (coinLinesProgress) {
          const row = document.createElement('div');
          row.className = 'p-2 rounded-lg bg-black/40 border ' + (line.isMoving ? 'border-rose-500/60 bg-rose-950/20' : 'border-gray-800') + ' flex items-center justify-between text-xs';
          
          let lineVisual = '';
          if (line.nature === 1) {
            lineVisual = '<div class="w-24 sm:w-32 h-2.5 bg-amber-500 rounded"></div>';
          } else {
            lineVisual = '<div class="w-24 sm:w-32 flex gap-1.5"><div class="flex-1 h-2.5 bg-sky-500 rounded"></div><div class="flex-1 h-2.5 bg-sky-500 rounded"></div></div>';
          }

          row.innerHTML = `
            <div class="flex items-center gap-2">
              <span class="font-mono font-bold text-amber-300">${isEn ? line.posStrEn : `${line.posStrZh}爻`}</span>
              <span class="text-gray-300 font-mono">[${line.coins.join('+')}=${line.value}]</span>
              <span class="${line.isMoving ? 'text-rose-300 font-bold' : 'text-gray-400'}">${isEn ? line.valueNameEn : line.valueNameZh}</span>
            </div>
            <div class="flex items-center gap-2">
              ${lineVisual}
              <span class="font-mono text-base ${line.nature === 1 ? 'text-amber-400' : 'text-sky-400'}">${line.symbol}</span>
            </div>
          `;
          coinLinesProgress.appendChild(row);
        }

        if (currentCoinStep < 6) {
          currentCoinStep++;
          const posNamesZh = ['初', '二', '三', '四', '五', '上'];
          const posNamesEn = ['1st (Initial)', '2nd', '3rd', '4th', '5th', '6th (Top)'];
          if (coinStepBadge) {
            coinStepBadge.textContent = isEn ? `Toss ${currentCoinStep} of 6` : `第 ${currentCoinStep} / 6 掷`;
          }
          if (throwCoinBtn) {
            throwCoinBtn.textContent = isEn 
              ? `Toss Line ${currentCoinStep} (${posNamesEn[currentCoinStep - 1]})`
              : `掷出第 ${currentCoinStep} 爻 (${posNamesZh[currentCoinStep - 1]}爻)`;
          }
        } else {
          // Completed 6 lines
          if (coinStepBadge) {
            coinStepBadge.textContent = isEn ? 'Complete (6/6)' : '六掷圆满 (6/6)';
          }
          if (throwCoinBtn) {
            throwCoinBtn.textContent = isEn ? '🎉 Hexagram Cast! Re-toss' : '🎉 六爻成卦！点击重新起卦';
            throwCoinBtn.className = 'px-8 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl transition active:scale-95';
          }
          currentCoinStep = 7; // marker for completed
          const q = ichingQueryInput ? ichingQueryInput.value.trim() : '';
          lastDivinationResult = IChingEngine.synthesizeDivination(currentCoinLines, 'coin', q);
          renderIChingResult(lastDivinationResult);
        }
      });
    }

    // Event: Dropdown Selection
    if (ichingSelect) {
      ichingSelect.addEventListener('change', () => {
        const val = parseInt(ichingSelect.value, 10);
        if (isNaN(val) || val < 1 || val > 64) return;
        if (typeof IChingDB === 'undefined' || typeof IChingEngine === 'undefined') return;

        const hex = IChingDB.getByNumber(val);
        if (!hex) return;

        if (coinTossArena) coinTossArena.classList.add('hidden');
        const staticLines = hex.binaryLines.map((bit, idx) => {
          const valNum = bit === 1 ? 7 : 8;
          return IChingEngine.buildLineObject(idx + 1, valNum, 'select');
        });
        const q = ichingQueryInput ? ichingQueryInput.value.trim() : '';
        lastDivinationResult = IChingEngine.synthesizeDivination(staticLines, 'select', q);
        renderIChingResult(lastDivinationResult);
      });
    }
  }

  function renderIChingResult(res) {
    if (!res || !res.originalHexagram) return;

    const ichingInitPrompt = document.getElementById('ichingInitPrompt');
    const ichingResultCard = document.getElementById('ichingResultCard');
    const ichingMetaBanner = document.getElementById('ichingMetaBanner');
    const originalHexagramCard = document.getElementById('originalHexagramCard');
    const resultingHexagramCard = document.getElementById('resultingHexagramCard');
    const complementaryHexagramsBar = document.getElementById('complementaryHexagramsBar');
    const oracleFocusTag = document.getElementById('oracleFocusTag');
    const canonicalScripturesContent = document.getElementById('canonicalScripturesContent');
    const modernInterpretationCards = document.getElementById('modernInterpretationCards');

    if (ichingInitPrompt) ichingInitPrompt.classList.add('hidden');
    if (ichingResultCard) ichingResultCard.classList.remove('hidden');

    const isEn = (currentLang === 'en');
    const orig = res.originalHexagram;
    const resHex = res.resultingHexagram;
    const nuc = res.nuclearHexagram;
    const opp = res.oppositeHexagram;
    const inv = res.invertedHexagram;
    const of = res.oracleFocus || {};

    // 1. Meta Banner
    if (ichingMetaBanner) {
      let methodBadge = '';
      if (res.method === 'instant') {
        methodBadge = isEn ? '⚡ Sacred Yarrow Stalk (49 Stalks)' : '⚡ 大衍筮法 (四十九蓍神机)';
      } else if (res.method === 'coin') {
        methodBadge = isEn ? '🪙 3-Coin Toss Simulation' : '🪙 乾隆通宝 · 三铜钱六掷';
      } else if (res.method === 'time') {
        methodBadge = isEn ? '⏱️ Plum Blossom Time Divination' : '⏱️ 邵雍梅花易数时空卦';
      } else {
        methodBadge = isEn ? '📖 Canonical Direct Reference' : '📖 文王卦典直查研索';
      }

      const movingText = res.movingLinesCount > 0
        ? (isEn 
            ? `${res.movingLinesCount} Moving Line(s): [${res.movingLinesPositions.join(', ')}]`
            : `发动爻位：${res.movingLinesPositions.map(p => `第${p}爻`).join('、')} (共${res.movingLinesCount}爻变)`)
        : (isEn ? 'Static Hexagram (0 moving lines)' : '六爻安静（无动爻，体用不移）');

      const dateStr = new Date(res.timestamp).toLocaleDateString(isEn ? 'en-US' : 'zh-CN', {
        year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });

      ichingMetaBanner.innerHTML = `
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">${methodBadge}</span>
          <span class="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-mono border border-purple-500/30">${movingText}</span>
          <span class="text-gray-400 font-mono">${dateStr}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-gray-400">${isEn ? 'Intent:' : '问事心念：'}</span>
          <span class="font-bold text-amber-200 font-serif-sc">“${res.query}”</span>
        </div>
      `;
    }

    // Helper: Render Hexagram Graphic Stack
    function buildHexagramLinesHtml(hex, linesInfo, isChanged = false) {
      let html = '<div class="space-y-2 py-2">';
      // Top line down to bottom line: index 5 down to 0
      for (let i = 5; i >= 0; i--) {
        const pos = i + 1;
        const lineInfo = linesInfo[i] || {};
        const bit = isChanged ? (lineInfo.changedNature ?? hex.binaryLines[i]) : (lineInfo.nature ?? hex.binaryLines[i]);
        const isMoving = !!lineInfo.isMoving;
        const isTarget = of.targetLines && of.targetLines.includes(pos);
        const lineData = (hex.lines && hex.lines[i]) ? hex.lines[i] : {};

        let lineGraphic = '';
        if (bit === 1) {
          lineGraphic = `<div class="flex-1 h-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded shadow"></div>`;
        } else {
          lineGraphic = `
            <div class="flex-1 flex gap-3">
              <div class="flex-1 h-4 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 rounded shadow"></div>
              <div class="flex-1 h-4 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 rounded shadow"></div>
            </div>
          `;
        }

        const badgeHtml = isTarget
          ? `<span class="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-200 font-bold border border-amber-400/50">${isEn ? '★ Oracle Focus' : '★ 定断主爻'}</span>`
          : (isMoving && !isChanged
              ? `<span class="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/30 text-rose-200 font-bold border border-rose-400/50">${isEn ? 'Moving' : '动爻'}</span>`
              : '');

        html += `
          <div class="hexagram-line-row flex items-center gap-3 p-1.5 rounded-lg transition hover:bg-white/10 cursor-pointer group" data-pos="${pos}" data-bit="${bit}" title="${isEn ? 'Click to animate line transformation' : '点击触发爻变动效流转'}">
            <span class="w-16 sm:w-20 text-xs font-serif-sc font-semibold ${isTarget ? 'text-amber-300' : 'text-gray-300'} group-hover:text-amber-300 transition">
              ${isEn ? (lineData.nameEn || `Line ${pos}`) : (lineData.nameZh || `第${pos}爻`)}
            </span>
            ${lineGraphic}
            <span class="w-20 sm:w-24 text-right">${badgeHtml}</span>
          </div>
        `;
      }
      html += '</div>';
      return html;
    }

    // 2. Original Hexagram Card (本卦)
    if (originalHexagramCard) {
      originalHexagramCard.innerHTML = `
        <div class="flex items-center justify-between border-b border-amber-800/40 pb-2">
          <div class="flex items-center space-x-2">
            <span class="chinese-seal text-xs py-0.5">${isEn ? 'ORIGINAL' : '本卦根基'}</span>
            <h3 class="text-base sm:text-lg font-bold font-serif-sc text-amber-300">
              ${isEn ? `Hexagram ${orig.number} · ${orig.nameEn}` : `第${orig.number}卦 · ${orig.nameZh}`}
            </h3>
          </div>
          <span class="text-xs font-mono text-amber-200/80">${orig.pinyin || ''}</span>
        </div>

        <div class="flex items-center justify-between text-xs text-gray-400 border-b border-gray-800/60 pb-2">
          <div>${isEn ? `Upper: ${orig.upperTrigramEn}` : `上卦：${orig.upperTrigram}`}</div>
          <div>${isEn ? `Lower: ${orig.lowerTrigramEn}` : `下卦：${orig.lowerTrigram}`}</div>
          <div class="font-mono text-amber-300">${isEn ? 'Nature: ' : '象曰：'}${orig.upperTrigramNature}上${orig.lowerTrigramNature}下</div>
        </div>

        ${buildHexagramLinesHtml(orig, res.lines, false)}

        <div class="p-3 bg-black/40 rounded-xl border border-amber-500/20 space-y-1.5">
          <div class="text-[11px] font-bold text-amber-400 font-serif-sc">${isEn ? '【Judgment / 卦辞】' : '【文王卦辞】'}</div>
          <p class="text-xs text-gray-200 font-serif-sc leading-relaxed">“${isEn ? orig.judgmentEn : orig.judgmentZh}”</p>
          <div class="text-[11px] font-bold text-gray-400 font-serif-sc pt-1">${isEn ? '【Great Image / 大象】' : '【大象传】'}</div>
          <p class="text-xs text-gray-300 font-serif-sc italic">“${isEn ? orig.greatXiangEn : orig.greatXiangZh}”</p>
        </div>
      `;
    }

    // 3. Resulting Hexagram Card (变卦 / 之卦)
    if (resultingHexagramCard) {
      if (resHex && res.movingLinesCount > 0) {
        resultingHexagramCard.innerHTML = `
          <div class="flex items-center justify-between border-b border-purple-800/40 pb-2">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal text-xs py-0.5" style="border-color:#a855f7;color:#d8b4fe;">${isEn ? 'RESULTING' : '变卦之象'}</span>
              <h3 class="text-base sm:text-lg font-bold font-serif-sc text-purple-300">
                ${isEn ? `Hexagram ${resHex.number} · ${resHex.nameEn}` : `第${resHex.number}卦 · ${resHex.nameZh}`}
              </h3>
            </div>
            <span class="text-xs font-mono text-purple-200/80">${resHex.pinyin || ''}</span>
          </div>

          <div class="flex items-center justify-between text-xs text-gray-400 border-b border-gray-800/60 pb-2">
            <div>${isEn ? `Upper: ${resHex.upperTrigramEn}` : `上卦：${resHex.upperTrigram}`}</div>
            <div>${isEn ? `Lower: ${resHex.lowerTrigramEn}` : `下卦：${resHex.lowerTrigram}`}</div>
            <div class="font-mono text-purple-300">${isEn ? 'Nature: ' : '象曰：'}${resHex.upperTrigramNature}上${resHex.lowerTrigramNature}下</div>
          </div>

          ${buildHexagramLinesHtml(resHex, res.lines, true)}

          <div class="p-3 bg-black/40 rounded-xl border border-purple-500/20 space-y-1.5">
            <div class="text-[11px] font-bold text-purple-400 font-serif-sc">${isEn ? '【Resulting Judgment / 变卦卦辞】' : '【之卦卦辞 · 终局指引】'}</div>
            <p class="text-xs text-gray-200 font-serif-sc leading-relaxed">“${isEn ? resHex.judgmentEn : resHex.judgmentZh}”</p>
            <div class="text-[11px] font-bold text-gray-400 font-serif-sc pt-1">${isEn ? '【Great Image / 大象】' : '【大象传】'}</div>
            <p class="text-xs text-gray-300 font-serif-sc italic">“${isEn ? resHex.greatXiangEn : resHex.greatXiangZh}”</p>
          </div>
        `;
      } else {
        resultingHexagramCard.innerHTML = `
          <div class="flex items-center justify-between border-b border-gray-800 pb-2">
            <div class="flex items-center space-x-2">
              <span class="chinese-seal text-xs py-0.5 text-gray-400 border-gray-600">${isEn ? 'STATIC' : '六爻安静'}</span>
              <h3 class="text-base sm:text-lg font-bold font-serif-sc text-gray-300">
                ${isEn ? 'No Resulting Hexagram' : '本卦纯静 · 无变卦'}
              </h3>
            </div>
          </div>

          <div class="p-8 text-center space-y-3">
            <div class="text-4xl text-amber-400/80">☯️</div>
            <h4 class="text-sm font-bold text-amber-200 font-serif-sc">
              ${isEn ? 'All Lines Static · Pure Stability' : '六爻无动 · 体用一如'}
            </h4>
            <p class="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
              ${isEn 
                ? 'When casting yields no moving lines, the circumstance is grounded and unchanging. Directly consult the Original Hexagram Judgment and Commentary for supreme guidance.'
                : '筮得此卦六爻皆静，无变动之象。表明当下时空能量纯凝、基盘稳固。事态发展循本卦之道而行，专参本卦卦辞、彖传与大象传即可。'}
            </p>
          </div>
        `;
      }
    }

    // 4. Complementary Hexagram Perspective Badges (互卦 / 错卦 / 综卦)
    if (complementaryHexagramsBar) {
      complementaryHexagramsBar.innerHTML = `
        <!-- 互卦 (Nuclear) -->
        <div class="p-3.5 rounded-xl bg-black/40 border border-teal-700/40 space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-teal-300 font-serif-sc">${isEn ? '🔄 Nuclear Hexagram (互卦)' : '🔄 互卦 (中程内在推演)'}</span>
            <span class="text-[11px] font-mono text-teal-400 font-bold">${nuc ? `第${nuc.number}卦` : ''}</span>
          </div>
          <div class="text-xs font-bold text-gray-200 font-serif-sc">${nuc ? (isEn ? nuc.nameEn : nuc.nameZh) : '---'}</div>
          <p class="text-[11px] text-gray-400 leading-tight">
            ${isEn ? 'Reflects hidden process and internal motives' : '去初上二爻，取二三四为下、三四五为上，表征事态深层内在动因。'}
          </p>
        </div>

        <!-- 错卦 (Opposite) -->
        <div class="p-3.5 rounded-xl bg-black/40 border border-rose-700/40 space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-rose-300 font-serif-sc">${isEn ? '⚖️ Opposite Hexagram (错卦)' : '⚖️ 错卦 (对立面审视)'}</span>
            <span class="text-[11px] font-mono text-rose-400 font-bold">${opp ? `第${opp.number}卦` : ''}</span>
          </div>
          <div class="text-xs font-bold text-gray-200 font-serif-sc">${opp ? (isEn ? opp.nameEn : opp.nameZh) : '---'}</div>
          <p class="text-[11px] text-gray-400 leading-tight">
            ${isEn ? 'Reveals polar opposites, shadow tensions and risks' : '六爻阴阳全反，表征事态的对立视角、逆境危机与隐蔽盲区。'}
          </p>
        </div>

        <!-- 综卦 (Inverted) -->
        <div class="p-3.5 rounded-xl bg-black/40 border border-indigo-700/40 space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-indigo-300 font-serif-sc">${isEn ? '🌀 Inverted Hexagram (综卦)' : '🌀 综卦 (换位与周期)'}</span>
            <span class="text-[11px] font-mono text-indigo-400 font-bold">${inv ? `第${inv.number}卦` : ''}</span>
          </div>
          <div class="text-xs font-bold text-gray-200 font-serif-sc">${inv ? (isEn ? inv.nameEn : inv.nameZh) : '---'}</div>
          <p class="text-[11px] text-gray-400 leading-tight">
            ${isEn ? 'Observes the situation from the other party’s perspective' : '将全卦上下颠倒翻转，表征站在对方立场与时空翻覆后的全景。'}
          </p>
        </div>
      `;
    }

    // 5. Oracle Focus Tag
    if (oracleFocusTag) {
      oracleFocusTag.textContent = isEn ? (of.ruleNameEn || 'Oracle Focus') : (of.ruleNameZh || '动爻定断');
    }

    // 6. Canonical Scriptures Content (卦辞、彖传、大象传、六爻爻辞)
    if (canonicalScripturesContent) {
      canonicalScripturesContent.innerHTML = `
        <!-- Rule Deciding Explanation Banner -->
        <div class="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-2.5">
          <span class="text-base">📜</span>
          <div class="space-y-0.5">
            <div class="font-bold text-xs text-amber-300 font-serif-sc">
              ${isEn ? of.ruleNameEn : of.ruleNameZh}
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">
              ${isEn ? of.explanationEn : of.explanationZh}
            </p>
          </div>
        </div>

        ${(() => {
          const targetPos = (of.targetLines && of.targetLines[0]) || (res.movingLinesPositions && res.movingLinesPositions[0]);
          const primaryLine = (targetPos && orig.lines) ? orig.lines[targetPos - 1] : null;
          if (!primaryLine) return '';

          return `
            <!-- Primary Deciding Line Highlight Card (断卦核心主爻 · 深度密解与实战大典) -->
            <div class="p-4 rounded-xl bg-gradient-to-br from-amber-950/60 via-black/70 to-amber-950/40 border-2 border-amber-500 shadow-2xl space-y-3 ring-1 ring-amber-400/40">
              <div class="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/40 pb-2.5">
                <div class="flex items-center space-x-2">
                  <span class="chinese-seal text-xs py-0.5" style="border-color:#f59e0b;color:#fef08a;">★ ${isEn ? 'CORE ORACLE FOCUS' : '定断主爻深度密解'}</span>
                  <h4 class="text-base sm:text-lg font-bold font-serif-sc text-amber-300">
                    ${isEn ? primaryLine.nameEn : primaryLine.nameZh} · ${isEn ? 'Core Strategic Deciding Line' : '本次起卦定断主爻'}
                  </h4>
                  <span class="px-2 py-0.5 rounded text-[10px] bg-rose-600/30 text-rose-300 border border-rose-500/50 font-bold">${isEn ? 'MOVING PIVOT' : '核心动爻'}</span>
                </div>
                <span class="text-xs text-amber-200/90 font-serif-sc italic">${isEn ? primaryLine.xiangEn : primaryLine.xiangZh}</span>
              </div>

              <!-- Canonical Line Statement -->
              <div class="p-3 bg-black/60 rounded-lg border border-amber-500/30 space-y-1">
                <div class="text-[11px] font-bold text-amber-400 font-serif-sc">${isEn ? '【Duke of Zhou Line Statement / 周公爻辞原文】' : '【周公本爻爻辞经文】'}</div>
                <p class="text-sm sm:text-base font-serif-sc text-amber-100 font-bold leading-relaxed">“${isEn ? primaryLine.statementEn : primaryLine.statementZh}”</p>
                <div class="text-xs text-gray-400 font-serif-sc italic pt-1 border-t border-gray-800/60">${isEn ? primaryLine.xiangEn : primaryLine.xiangZh}</div>
              </div>

              <!-- In-Depth Vernacular Exegesis -->
              <div class="p-3 bg-black/40 rounded-lg border border-gray-800 space-y-1.5 text-xs">
                <div class="font-bold text-amber-300 font-serif-sc flex items-center gap-1.5">
                  <span>🔍</span>
                  <span>${isEn ? 'Line In-Depth Exegesis & Subtle Meaning' : '爻辞微言大义与白话深度剖析'}</span>
                </div>
                <p class="text-gray-200 leading-relaxed font-serif-sc">${isEn ? primaryLine.exegesisEn : primaryLine.exegesisZh}</p>
              </div>

              <!-- Position Dynamics & Temporal Stage -->
              <div class="p-3 bg-black/40 rounded-lg border border-gray-800 space-y-1.5 text-xs">
                <div class="font-bold text-sky-300 font-serif-sc flex items-center gap-1.5">
                  <span>🧭</span>
                  <span>${isEn ? 'Temporal Position Dynamics (Yin/Yang Harmony)' : '时空位阶与阴阳承应法则'}</span>
                </div>
                <p class="text-gray-200 leading-relaxed">${isEn ? primaryLine.posAnalysisEn : primaryLine.posAnalysisZh}</p>
              </div>

              <!-- Modern Practical Decisions & Strategy -->
              <div class="p-3 bg-black/40 rounded-lg border border-gray-800 space-y-1.5 text-xs">
                <div class="font-bold text-emerald-300 font-serif-sc flex items-center gap-1.5">
                  <span>💼</span>
                  <span>${isEn ? 'Modern Tactical Decisions & Strategic Guidance' : '现代实战决策指引 (事业/人际/趋避锦囊)'}</span>
                </div>
                <div class="text-gray-200 leading-relaxed whitespace-pre-line">${isEn ? primaryLine.practicalEn : primaryLine.practicalZh}</div>
              </div>

              <!-- Action Guidance Summary -->
              <div class="p-2.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-xs text-amber-200 flex items-start gap-2">
                <span class="font-bold text-amber-400 whitespace-nowrap">🎯 ${isEn ? 'Action Directive:' : '核心行事指引：'}</span>
                <span class="font-medium">${isEn ? primaryLine.guidanceEn : primaryLine.guidanceZh}</span>
              </div>
            </div>
          `;
        })()}

        <!-- Tuan Commentary (彖传) & Great Image (大象) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-3.5 rounded-xl bg-black/30 border border-gray-800 space-y-1">
            <span class="font-bold text-xs text-amber-300 font-serif-sc">${isEn ? '《Tuan Commentary》' : '《彖传》研析'}</span>
            <p class="text-xs text-gray-300 font-serif-sc leading-relaxed">${isEn ? orig.tuanEn : orig.tuanZh}</p>
          </div>
          <div class="p-3.5 rounded-xl bg-black/30 border border-gray-800 space-y-1">
            <span class="font-bold text-xs text-amber-300 font-serif-sc">${isEn ? '《Great Image Commentary》' : '《大象传》君子行持'}</span>
            <p class="text-xs text-gray-300 font-serif-sc leading-relaxed">${isEn ? orig.greatXiangEn : orig.greatXiangZh}</p>
          </div>
        </div>

        <!-- Master Ni Haisha Tian Ji Exegesis Card (倪海厦《天纪》64卦批注全集) -->
        ${(() => {
          const tj = (typeof TianJiDB !== 'undefined' && orig.number) ? TianJiDB.getByNumber(orig.number) : null;
          if (!tj) return '';
          return `
            <div class="p-4 rounded-xl bg-amber-950/25 border border-amber-600/50 shadow-xl space-y-3">
              <div class="flex items-center justify-between border-b border-amber-500/30 pb-2">
                <div class="flex items-center space-x-2">
                  <span class="chinese-seal text-xs py-0.5 border-amber-500 text-amber-300">${isEn ? 'Tian Ji Divination' : '天纪秘解'}</span>
                  <h4 class="text-sm sm:text-base font-bold font-serif-sc text-amber-300">
                    ${isEn ? 'Master Ni Haisha 《Tian Ji》 Canonical Exegesis' : '倪海厦《天纪》六十四卦秘传全解'}
                  </h4>
                </div>
                <span class="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                  ${isEn ? `Hexagram ${orig.number}` : `第${orig.number}卦`}
                </span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed">
                <div class="p-2.5 rounded bg-black/40 border border-gray-800 space-y-1">
                  <b class="text-amber-300 block">🔮 ${isEn ? 'Early Heaven Destiny Reading' : '先天卦断 (前半生根基)'}</b>
                  <p class="text-gray-300">${isEn ? tj.xianTianEn : tj.xianTianZh}</p>
                </div>
                <div class="p-2.5 rounded bg-black/40 border border-gray-800 space-y-1">
                  <b class="text-emerald-300 block">🌿 ${isEn ? 'Later Heaven Destiny Reading' : '后天卦断 (后半生归宿)'}</b>
                  <p class="text-gray-300">${isEn ? tj.houTianEn : tj.houTianZh}</p>
                </div>
                <div class="p-2.5 rounded bg-black/40 border border-gray-800 space-y-1">
                  <b class="text-sky-300 block">⏳ ${isEn ? 'Annual Luck Guidance' : '流年流月断 (当值时岁指引)'}</b>
                  <p class="text-gray-300">${isEn ? tj.liuNianEn : tj.liuNianZh}</p>
                </div>
              </div>
              <div class="p-2.5 rounded-lg bg-black/60 border border-amber-500/30 text-xs">
                <span class="text-amber-400 font-bold">✨ ${isEn ? 'Jade Luminance Riddle & Cosmic Key:' : '玉上有光字谜与天机解密：'}</span>
                <span class="text-amber-200 ml-1 font-serif-sc">${isEn ? tj.riddleEn : tj.riddleZh}</span>
              </div>
            </div>
          `;
        })()}

        <!-- Six Lines Exegesis (六爻爻辞详析) -->
        <div class="space-y-2 pt-2">
          <div class="text-xs font-bold text-gray-400 font-serif-sc flex items-center justify-between">
            <span>${isEn ? 'Six Lines Canonical Texts & Deep Exegeses' : '周易六爻经文、爻辞细解与行事指引全录：'}</span>
            <span class="text-[11px] text-amber-400/80">${isEn ? 'Highlighted cards indicate oracle focus' : '金框标出者为本次断卦核心爻'}</span>
          </div>

          <div class="space-y-3">
            ${orig.lines.map((l, idx) => {
              const pos = l.position;
              const isTarget = of.targetLines && of.targetLines.includes(pos);
              const lineInfo = res.lines[idx] || {};
              const isMoving = !!lineInfo.isMoving;

              const cardClass = isTarget
                ? 'p-4 rounded-xl bg-amber-950/40 border-2 border-amber-500 shadow-xl ring-1 ring-amber-400/30'
                : (isMoving 
                    ? 'p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/50'
                    : 'p-3.5 rounded-xl bg-black/30 border border-gray-800/80');

              return `
                <div class="${cardClass} space-y-2.5">
                  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800/60 pb-1.5">
                    <div class="flex items-center space-x-2">
                      <span class="font-bold text-xs ${isTarget ? 'text-amber-300 text-sm' : 'text-gray-200'} font-serif-sc">
                        ${isEn ? l.nameEn : l.nameZh}
                      </span>
                      ${isTarget ? `<span class="px-1.5 py-0.2 rounded text-[10px] bg-amber-500 text-black font-bold">${isEn ? '★ DECIDING LINE' : '★ 断卦主爻'}</span>` : ''}
                      ${isMoving ? `<span class="px-1.5 py-0.2 rounded text-[10px] bg-rose-600 text-white font-bold">${isEn ? 'MOVING' : '动爻'}</span>` : ''}
                    </div>
                    <span class="text-[11px] text-gray-400 font-serif-sc italic">${isEn ? l.xiangEn : l.xiangZh}</span>
                  </div>

                  <p class="text-xs sm:text-sm font-serif-sc text-gray-100 font-bold leading-relaxed">
                    “${isEn ? l.statementEn : l.statementZh}”
                  </p>

                  <div class="p-2.5 bg-black/40 rounded-lg border border-gray-800/80 space-y-1.5 text-xs">
                    <div class="text-gray-300 leading-relaxed">
                      <span class="text-amber-400 font-semibold font-serif-sc">${isEn ? '【Exegesis】: ' : '【爻辞深度精解】：'}</span>
                      ${isEn ? l.exegesisEn : l.exegesisZh}
                    </div>
                    <div class="text-gray-400 text-[11px] pt-1 border-t border-gray-800/50">
                      <span class="text-sky-300 font-semibold font-serif-sc">${isEn ? '【Position】: ' : '【时空位阶】：'}</span>
                      ${isEn ? l.posAnalysisEn : l.posAnalysisZh}
                    </div>
                  </div>

                  <div class="text-xs text-amber-200/90 leading-relaxed pt-1 border-t border-gray-800/50">
                    <span class="font-semibold text-gray-400">${isEn ? 'Action Guidance: ' : '行事指引：'}</span>
                    ${isEn ? l.guidanceEn : l.guidanceZh}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // 7. Modern Multi-Dimensional In-Depth Interpretations
    if (modernInterpretationCards) {
      const m = orig.modernInterpretation || {};
      modernInterpretationCards.innerHTML = `
        <!-- Dimension 1: Philosophy -->
        <div class="p-4 rounded-xl bg-card border border-border-color space-y-2 shadow">
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-amber-300 font-serif-sc flex items-center gap-1.5">
              <span>💡</span>
              <span>${isEn ? 'Core Philosophy & Temporal Timing' : '核心大义与时空哲理'}</span>
            </span>
            <span class="chinese-seal text-[10px] py-0">${isEn ? 'PHILOSOPHY' : '大道行思'}</span>
          </div>
          <p class="text-xs text-gray-300 leading-relaxed">${isEn ? m.philosophyEn : m.philosophyZh}</p>
        </div>

        <!-- Dimension 2: Career -->
        <div class="p-4 rounded-xl bg-card border border-border-color space-y-2 shadow">
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-blue-300 font-serif-sc flex items-center gap-1.5">
              <span>💼</span>
              <span>${isEn ? 'Career & Strategic Decisions' : '事业发展与重大抉择'}</span>
            </span>
            <span class="chinese-seal text-[10px] py-0">${isEn ? 'CAREER' : '功业建树'}</span>
          </div>
          <p class="text-xs text-gray-300 leading-relaxed">${isEn ? m.careerEn : m.careerZh}</p>
        </div>

        <!-- Dimension 3: Wealth -->
        <div class="p-4 rounded-xl bg-card border border-border-color space-y-2 shadow">
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-emerald-300 font-serif-sc flex items-center gap-1.5">
              <span>💰</span>
              <span>${isEn ? 'Finance & Business Acumen' : '求财商业与资本投资'}</span>
            </span>
            <span class="chinese-seal text-[10px] py-0">${isEn ? 'WEALTH' : '经商理财'}</span>
          </div>
          <p class="text-xs text-gray-300 leading-relaxed">${isEn ? m.wealthEn : m.wealthZh}</p>
        </div>

        <!-- Dimension 4: Love & Marriage -->
        <div class="p-4 rounded-xl bg-card border border-border-color space-y-2 shadow">
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-rose-300 font-serif-sc flex items-center gap-1.5">
              <span>💑</span>
              <span>${isEn ? 'Love, Marriage & Relationships' : '情感婚姻与人际合和'}</span>
            </span>
            <span class="chinese-seal text-[10px] py-0">${isEn ? 'RELATION' : '情缘伦常'}</span>
          </div>
          <p class="text-xs text-gray-300 leading-relaxed">${isEn ? (m.relationshipEn || m.loveEn || '') : (m.relationshipZh || m.loveZh || '')}</p>
        </div>

        <!-- Dimension 5: Action Guidance (Full Span) -->
        <div class="md:col-span-2 p-4 rounded-xl bg-gradient-to-r from-amber-950/30 via-black/40 to-amber-950/30 border border-amber-500/40 space-y-2 shadow">
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-amber-300 font-serif-sc flex items-center gap-1.5">
              <span>🛡️</span>
              <span>${isEn ? 'Action Guidance (Favorable & Taboo)' : '趋避锦囊 · 宜与忌行持准则'}</span>
            </span>
            <span class="chinese-seal text-[10px] py-0">${isEn ? 'STRATEGY' : '进退枢机'}</span>
          </div>
          <p class="text-xs text-gray-200 leading-relaxed font-serif-sc">${isEn ? m.actionGuidanceEn : m.actionGuidanceZh}</p>
        </div>
      `;
    }

    // Attach interactive hexagram line transformation morphing animations
    document.querySelectorAll('.hexagram-line-row').forEach(row => {
      if (!row._hasMorphListener) {
        row._hasMorphListener = true;
        row.addEventListener('click', () => {
          if (typeof VisualAlchemy !== 'undefined' && typeof VisualAlchemy.animateLineTransformation === 'function') {
            VisualAlchemy.animateLineTransformation(row);
          }
        });
      }
    });
  }

  // ==========================================================================
  // Feature 2: Lifelong Chrono-Navigator / Interactive Fortune Timeline
  // ==========================================================================
  // Chrono-Navigator state already declared at top

  function renderChronoNavigator(timeline, bazi) {
    chronoTimelineData = timeline;
    const isEn = (currentLang === 'en');
    const birthYear = (bazi.input && bazi.input.year) || bazi.birthYear || bazi.year || 1990;
    const currentYear = new Date().getFullYear();
    const curTimelineItem = (chronoTimelineData && chronoTimelineData.length > 0)
      ? (chronoTimelineData.find(d => d.year === currentYear) || chronoTimelineData[0])
      : null;
    activeChronoAge = curTimelineItem ? curTimelineItem.age : Math.max(1, Math.min(100, currentYear - birthYear + 1));

    const slider = document.getElementById('chronoAgeSlider');
    if (slider) {
      slider.value = activeChronoAge;
    }

    updateChronoDisplay(activeChronoAge, isEn);
    drawChronoTimelineChart(chronoTimelineData, activeChronoAge);

    if (slider && !slider._hasListener) {
      slider._hasListener = true;
      slider.addEventListener('input', (e) => {
        activeChronoAge = parseInt(e.target.value, 10);
        updateChronoDisplay(activeChronoAge, currentLang === 'en');
        drawChronoTimelineChart(chronoTimelineData, activeChronoAge);
      });
    }

    const playBtn = document.getElementById('chronoPlayBtn');
    if (playBtn && !playBtn._hasListener) {
      playBtn._hasListener = true;
      playBtn.addEventListener('click', () => {
        if (isChronoPlaying) {
          stopChronoPlay();
        } else {
          startChronoPlay();
        }
      });
    }

    const prevBtn = document.getElementById('chronoPrevAge');
    if (prevBtn && !prevBtn._hasListener) {
      prevBtn._hasListener = true;
      prevBtn.addEventListener('click', () => {
        jumpToAge(activeChronoAge - 1);
      });
    }

    const nextBtn = document.getElementById('chronoNextAge');
    if (nextBtn && !nextBtn._hasListener) {
      nextBtn._hasListener = true;
      nextBtn.addEventListener('click', () => {
        jumpToAge(activeChronoAge + 1);
      });
    }

    const jumpCur = document.getElementById('chronoJumpCurrent');
    if (jumpCur && !jumpCur._hasListener) {
      jumpCur._hasListener = true;
      jumpCur.addEventListener('click', () => {
        const cur = (chronoTimelineData && chronoTimelineData.length > 0)
          ? (chronoTimelineData.find(d => d.year === currentYear) || chronoTimelineData[0])
          : null;
        if (cur) jumpToAge(cur.age);
      });
    }

    const jumpGold = document.getElementById('chronoJumpGolden');
    if (jumpGold && !jumpGold._hasListener) {
      jumpGold._hasListener = true;
      jumpGold.addEventListener('click', () => {
        if (!chronoTimelineData.length) return;
        let bestAge = 1;
        let maxWeightedScore = -1;
        chronoTimelineData.forEach(item => {
          const age = item.age;
          // 1. Biological Age Vigor Curve (35% weight): prime career productivity plateau (28~55)
          let wAge = 0.5;
          if (age < 18) {
            wAge = 0.35 + (age / 18) * 0.35; // 0.35 -> 0.70
          } else if (age >= 18 && age < 28) {
            wAge = 0.70 + ((age - 18) / 10) * 0.28; // 0.70 -> 0.98
          } else if (age >= 28 && age <= 55) {
            wAge = 1.0 - ((age - 28) / 27) * 0.08; // 1.00 -> 0.92 (Golden Prime Window)
          } else if (age > 55 && age <= 68) {
            wAge = 0.92 - ((age - 55) / 13) * 0.32; // 0.92 -> 0.60
          } else if (age > 68 && age <= 80) {
            wAge = 0.60 - ((age - 68) / 12) * 0.30; // 0.60 -> 0.30 (Elderly Serenity Phase)
          } else {
            wAge = Math.max(0.12, 0.30 - ((age - 80) / 20) * 0.18); // 0.30 -> 0.12 (Late Life Fragility)
          }

          // 2. Decade & Annual Transit Fortune (40% weight)
          const transitScore = (item.energyScore + item.wealthScore) / 2; // ~20 to 100

          // 3. Natal Pattern & Transit Harmony Fit (25% weight)
          let harmonyFit = 60;
          if (item.alerts && item.alerts.includes('岁运双吉')) harmonyFit += 25;
          if (item.alerts && item.alerts.includes('岁君六合')) harmonyFit += 15;
          if (item.alerts && (item.alerts.includes('天克地冲') || item.alerts.includes('岁运并临'))) harmonyFit -= 35;
          if (item.rating === 'auspicious') harmonyFit += 10;
          harmonyFit = Math.max(20, Math.min(100, harmonyFit));

          // Multi-Factor Composite Score: Biological (35%) + Fortune (40%) + Harmony (25%)
          const composite = (wAge * 100) * 0.35 + transitScore * 0.40 + harmonyFit * 0.25;
          if (composite > maxWeightedScore) {
            maxWeightedScore = composite;
            bestAge = age;
          }
        });
        jumpToAge(bestAge);
      });
    }

    const jumpTransit = document.getElementById('chronoJumpTransit');
    if (jumpTransit && !jumpTransit._hasListener) {
      jumpTransit._hasListener = true;
      jumpTransit.addEventListener('click', () => {
        if (!currentLuckResult || !currentLuckResult.decades) return;
        const nextDecade = currentLuckResult.decades.find(d => d.ageStart > activeChronoAge);
        const targetAge = nextDecade ? nextDecade.ageStart : (currentLuckResult.decades[0] ? currentLuckResult.decades[0].ageStart : 1);
        jumpToAge(targetAge);
      });
    }

    document.querySelectorAll('.chrono-quick-age').forEach(btn => {
      if (!btn._hasListener) {
        btn._hasListener = true;
        btn.addEventListener('click', () => {
          const a = parseInt(btn.getAttribute('data-age'), 10);
          if (a) jumpToAge(a);
        });
      }
    });

    const canvas = document.getElementById('chronoTimelineCanvas');
    if (canvas && !canvas._hasListener) {
      canvas._hasListener = true;
      canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const padL = 32;
        const padR = 20;
        const chartW = rect.width - padL - padR;
        if (chartW > 0) {
          const ratio = Math.max(0, Math.min(1, (clickX - padL) / chartW));
          const clickedAge = Math.round(1 + ratio * 99);
          jumpToAge(clickedAge);
        }
      });
    }
  }

  function jumpToAge(age) {
    activeChronoAge = Math.max(1, Math.min(100, age));
    const slider = document.getElementById('chronoAgeSlider');
    if (slider) slider.value = activeChronoAge;
    updateChronoDisplay(activeChronoAge, currentLang === 'en');
    drawChronoTimelineChart(chronoTimelineData, activeChronoAge);
  }

  function startChronoPlay() {
    if (isChronoPlaying) return;
    isChronoPlaying = true;
    const playBtn = document.getElementById('chronoPlayBtn');
    if (playBtn) playBtn.textContent = (currentLang === 'en') ? '⏸️ Pause' : '⏸️ 暂停推演';

    chronoPlayTimer = setInterval(() => {
      activeChronoAge++;
      if (activeChronoAge > 100) activeChronoAge = 1;
      const slider = document.getElementById('chronoAgeSlider');
      if (slider) slider.value = activeChronoAge;
      updateChronoDisplay(activeChronoAge, currentLang === 'en');
      drawChronoTimelineChart(chronoTimelineData, activeChronoAge);
    }, 380);
  }

  function stopChronoPlay() {
    isChronoPlaying = false;
    const playBtn = document.getElementById('chronoPlayBtn');
    if (playBtn) playBtn.textContent = (currentLang === 'en') ? '▶️ Auto Play' : '▶️ 连续推演';
    if (chronoPlayTimer) {
      clearInterval(chronoPlayTimer);
      chronoPlayTimer = null;
    }
  }

  function updateChronoDisplay(age, isEn) {
    if (!chronoTimelineData || chronoTimelineData.length === 0) return;
    const item = chronoTimelineData[age - 1];
    if (!item) return;

    const realAge = (item.realAge !== undefined) ? item.realAge : (item.age - 1);
    const nomAge = item.nominalAge || item.age;

    const badge = document.getElementById('chronoAgeValueBadge');
    if (badge) {
      badge.textContent = isEn
        ? (realAge === 0
            ? `Age 0 (Nominal 1) · ${item.year} ${item.ganZhiEn}`
            : `Age ${realAge} (Nominal ${nomAge}) · ${item.year} ${item.ganZhiEn}`)
        : (realAge === 0
            ? `0 岁初生 (虚岁 1) · ${item.year} ${item.ganZhi}年`
            : `${realAge} 岁 (虚岁 ${nomAge}) · ${item.year} ${item.ganZhi}年`);
    }

    const card = document.getElementById('chronoYearCard');
    if (card) {
      const alerts = isEn ? item.alertsEn : item.alerts;
      const alertBadges = alerts.map(a => {
        let cls = 'bg-rose-950/60 text-rose-300 border border-rose-800/40 font-bold';
        if (a.includes('吉') || a.includes('合') || a.includes('祥和') || a.includes('Favorable') || a.includes('Harmony') || a.includes('Surge') || a.includes('Harmonious')) {
          cls = 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 font-bold';
        } else if (a.includes('从容') || a.includes('稳健') || a.includes('深耕') || a.includes('Steady') || a.includes('Focus') || a.includes('Prudent')) {
          cls = 'bg-blue-950/60 text-blue-300 border border-blue-800/40 font-bold';
        }
        return `<span class="px-2 py-0.5 rounded text-[10px] ${cls}">${a}</span>`;
      }).join(' ');
      const godText = isEn ? item.tenGodEn : item.tenGod;
      const gzText = isEn ? item.ganZhiEn : item.ganZhi;
      const decText = isEn ? item.decadeSpanEn : `${item.decade}大运 (${item.decadeSpanZh})`;
      const ageHeading = isEn
        ? (realAge === 0 ? `Age 0 (Nominal 1) · ${item.year}` : `Age ${realAge} (Nominal ${nomAge}) · ${item.year}`)
        : (realAge === 0 ? `0岁初生 (虚岁1) · ${item.year}年` : `${realAge}岁 (虚岁${nomAge}) · ${item.year}年`);

      card.innerHTML = `
        <div class="space-y-2 border-b md:border-b-0 md:border-r border-gray-800 pb-3 md:pb-0 md:pr-3">
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold font-serif-sc text-amber-200">${ageHeading}</span>
            <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">${gzText}</span>
          </div>
          <div class="text-xs text-gray-400 space-y-1">
            <div class="flex items-center justify-between">
              <span>${isEn ? 'Active Major Luck:' : '所属十年大运:'}</span>
              <span class="text-gray-200 font-mono">${decText}</span>
            </div>
            <div class="flex items-center justify-between">
              <span>${isEn ? 'Ten God Transit:' : '岁君十神司权:'}</span>
              <span class="text-indigo-300 font-bold font-mono">${godText}</span>
            </div>
            <div class="flex items-center justify-between">
              <span>${isEn ? 'Sound Element:' : '年柱纳音律动:'}</span>
              <span class="text-gray-300 font-mono">${isEn ? (item.naYinEn || (typeof I18N !== 'undefined' ? I18N.getNaYin(item.naYin, 'en') : item.naYin)) : item.naYin}</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${alertBadges || `<span class="px-2 py-0.5 rounded text-[10px] bg-emerald-950/40 text-emerald-300 border border-emerald-800/30 font-bold">${isEn ? 'Harmonious Transit' : '岁运祥和'}</span>`}
          </div>
        </div>

        <div class="space-y-2.5 border-b md:border-b-0 md:border-r border-gray-800 pb-3 md:pb-0 md:pr-3">
          <div class="space-y-1">
            <div class="flex items-center justify-between text-xs">
              <span class="text-gray-400 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>${isEn ? 'Vitality & Energy Index' : '生命能量与活力指数'}</span>
              </span>
              <span class="font-bold font-mono text-amber-300">${item.energyScore} / 100</span>
            </div>
            <div class="w-full bg-gray-800/80 rounded-full h-2 overflow-hidden">
              <div class="bg-gradient-to-r from-amber-600 to-amber-400 h-full rounded-full transition-all duration-300" style="width: ${item.energyScore}%"></div>
            </div>
          </div>

          <div class="space-y-1">
            <div class="flex items-center justify-between text-xs">
              <span class="text-gray-400 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>${isEn ? 'Wealth & Resource Tide' : '财富运势与机遇潮汐'}</span>
              </span>
              <span class="font-bold font-mono text-emerald-300">${item.wealthScore} / 100</span>
            </div>
            <div class="w-full bg-gray-800/80 rounded-full h-2 overflow-hidden">
              <div class="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full transition-all duration-300" style="width: ${item.wealthScore}%"></div>
            </div>
          </div>

          <div class="p-2 rounded bg-black/40 border border-gray-800 text-[11px] text-gray-300 flex items-center justify-between">
            <span>${isEn ? 'Strategic Focus:' : '战略定调:'}</span>
            <span class="font-bold text-amber-300 font-serif-sc">${isEn ? item.focusEn : item.focusZh}</span>
          </div>
        </div>

        <div class="space-y-1.5 text-xs">
          <div class="flex items-center gap-1.5 font-bold text-amber-300 font-serif-sc">
            <span>🎯</span>
            <span>${isEn ? 'Actionable Yearly Directive' : '流年战略锦囊与行持准则'}</span>
          </div>
          <p class="text-gray-200 text-xs leading-relaxed font-serif-sc bg-amber-950/20 p-2.5 rounded-lg border border-amber-800/30">
            ${isEn ? item.directiveEn : item.directiveZh}
          </p>
        </div>
      `;
    }
  }

  function drawChronoTimelineChart(timeline, activeAge) {
    const canvas = document.getElementById('chronoTimelineCanvas');
    if (!canvas || !timeline || timeline.length === 0) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 700;
    const h = rect.height || 128;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, w, h);

    const padL = 32;
    const padR = 20;
    const padT = 16;
    const padB = 22;
    const chartW = w - padL - padR;
    const chartH = h - padT - padB;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    [0, 25, 50, 75, 100].forEach(val => {
      const y = padT + chartH - (val / 100) * chartH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(w - padR, y);
      ctx.stroke();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.font = '9px monospace';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(val), padL - 4, y);
    });

    const getX = (idx) => padL + (idx / (timeline.length - 1)) * chartW;
    const getY = (score) => padT + chartH - (score / 100) * chartH;

    // 1. Wealth Curve (Emerald)
    ctx.beginPath();
    timeline.forEach((it, i) => {
      const x = getX(i);
      const y = getY(it.wealthScore);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 2. Energy Curve (Amber Gold)
    ctx.beginPath();
    timeline.forEach((it, i) => {
      const x = getX(i);
      const y = getY(it.energyScore);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.2;
    ctx.stroke();

    // 3. Mark Alerts
    timeline.forEach((it, i) => {
      if (it.alerts && it.alerts.length > 0) {
        const hasWarning = it.alerts.some(a => a.includes('冲') || a.includes('并') || a.includes('提纲') || a.includes('慎'));
        const hasAuspicious = it.alerts.some(a => a.includes('吉') || a.includes('合'));
        if (hasWarning || hasAuspicious) {
          const x = getX(i);
          const y = Math.min(getY(it.energyScore), getY(it.wealthScore)) - 4;
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = hasWarning ? '#ef4444' : '#10b981';
          ctx.fill();
        }
      }
    });

    // 4. Active Age Scrubber Line
    const activeIdx = Math.max(0, Math.min(timeline.length - 1, activeAge - 1));
    const ax = getX(activeIdx);
    const item = timeline[activeIdx];

    ctx.beginPath();
    ctx.setLineDash([3, 3]);
    ctx.moveTo(ax, padT);
    ctx.lineTo(ax, h - padB);
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 1.8;
    ctx.stroke();
    ctx.setLineDash([]);

    const ey = getY(item.energyScore);
    const wy = getY(item.wealthScore);

    ctx.beginPath();
    ctx.arc(ax, ey, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#f59e0b';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(ax, wy, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#10b981';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    const chartRealAge = (item.realAge !== undefined) ? item.realAge : (item.age - 1);
    ctx.fillText(`${chartRealAge}y (${item.year})`, ax, padT - 4);
  }

  // ==========================================================================
  // Feature 3: Synastry & Partner Compatibility Controller
  // ==========================================================================
  // Synastry state already declared at top

  function initSynastryController() {
    const modeRom = document.getElementById('synastryModeRomantic');
    const modeBiz = document.getElementById('synastryModeBusiness');
    const btnLoadA = document.getElementById('btnSynastryLoadA');
    const btnCalc = document.getElementById('calcSynastryBtn');

    if (modeRom && modeBiz) {
      modeRom.addEventListener('click', () => {
        currentSynastryMode = 'romantic';
        modeRom.className = 'px-3 py-1.5 text-xs rounded-md font-bold transition bg-rose-600 text-white shadow';
        modeBiz.className = 'px-3 py-1.5 text-xs rounded-md font-bold transition text-gray-400 hover:text-gray-200';
        triggerCalculateSynastry();
      });
      modeBiz.addEventListener('click', () => {
        currentSynastryMode = 'business';
        modeBiz.className = 'px-3 py-1.5 text-xs rounded-md font-bold transition bg-amber-600 text-white shadow';
        modeRom.className = 'px-3 py-1.5 text-xs rounded-md font-bold transition text-gray-400 hover:text-gray-200';
        triggerCalculateSynastry();
      });
    }

    if (btnLoadA) {
      btnLoadA.addEventListener('click', () => {
        const dateInput = document.getElementById('birthDate');
        const timeInput = document.getElementById('birthTime');
        const genSelect = document.getElementById('gender');
        if (dateInput && dateInput.value) document.getElementById('synastryDateA').value = dateInput.value;
        if (timeInput && timeInput.value) document.getElementById('synastryTimeA').value = timeInput.value;
        if (genSelect) document.getElementById('synastryGenderA').value = genSelect.value;
      });
    }

    if (btnCalc) {
      btnCalc.addEventListener('click', () => {
        showDynamicCalculationProgress('synastry', () => {
          triggerCalculateSynastry();
        });
      });
    }
  }

  function triggerCalculateSynastry() {
    if (typeof SynastryEngine === 'undefined' || typeof BaZiEngine === 'undefined') return;
    const dateA = document.getElementById('synastryDateA')?.value;
    const timeA = document.getElementById('synastryTimeA')?.value;
    const genderA = document.getElementById('synastryGenderA')?.value || '乾造';

    const dateB = document.getElementById('synastryDateB')?.value;
    const timeB = document.getElementById('synastryTimeB')?.value;
    const genderB = document.getElementById('synastryGenderB')?.value || '坤造';

    if (!dateA || !timeA || !dateB || !timeB) return;

    const [yA, mA, dA] = dateA.split('-').map(Number);
    const [hA, minA] = timeA.split(':').map(Number);
    cachedChartA = BaZiEngine.calculate({
      year: yA, month: mA, day: dA, hour: hA, minute: minA,
      gender: genderA, useTrueSolarTime: false, isLateRatNextDay: false,
      longitude: 116.4, timezone: 8.0
    });

    const [yB, mB, dB] = dateB.split('-').map(Number);
    const [hB, minB] = timeB.split(':').map(Number);
    cachedChartB = BaZiEngine.calculate({
      year: yB, month: mB, day: dB, hour: hB, minute: minB,
      gender: genderB, useTrueSolarTime: false, isLateRatNextDay: false,
      longitude: 116.4, timezone: 8.0
    });

    const isEn = (currentLang === 'en');
    currentSynastryResult = SynastryEngine.analyze(cachedChartA, cachedChartB, currentSynastryMode, currentLang);
    renderSynastryResult(currentSynastryResult, cachedChartA, cachedChartB, isEn);
  }

  function refreshSynastryOnLangChange() {
    if (cachedChartA && cachedChartB && typeof SynastryEngine !== 'undefined') {
      const isEn = (currentLang === 'en');
      currentSynastryResult = SynastryEngine.analyze(cachedChartA, cachedChartB, currentSynastryMode, currentLang);
      renderSynastryResult(currentSynastryResult, cachedChartA, cachedChartB, isEn);
    }
  }

  function renderSynastryResult(data, chartA, chartB, isEn) {
    const container = document.getElementById('synastryResultContainer');
    if (!container || !data) return;

    const rawValA = document.getElementById('synastryLabelA')?.value;
    const rawValB = document.getElementById('synastryLabelB')?.value;
    let labelA = rawValA || (isEn ? 'Person A' : '甲造');
    if (isEn && labelA === '甲造') labelA = 'Person A';
    if (!isEn && labelA === 'Person A') labelA = '甲造';

    let labelB = rawValB || (isEn ? 'Person B' : '乙造');
    if (isEn && labelB === '乙造') labelB = 'Person B';
    if (!isEn && labelB === 'Person B') labelB = '乙造';

    const score = data.overallScore;
    const arc = data.archetype;
    const pA = chartA.pillars;
    const pB = chartB.pillars;

    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    container.innerHTML = `
      <div class="p-6 rounded-2xl bg-gradient-to-br from-black/60 via-[#191522] to-black/80 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center gap-6">
        <div class="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
          <svg class="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="${radius}" stroke="rgba(255,255,255,0.08)" stroke-width="8" fill="none" />
            <circle cx="50" cy="50" r="${radius}" stroke="url(#scoreGrad)" stroke-width="8" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round" fill="none" />
            <defs>
              <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f59e0b" />
                <stop offset="100%" stop-color="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="text-2xl font-black font-mono text-amber-200">${score}%</span>
            <span class="text-[9px] text-gray-400 font-bold uppercase">${isEn ? 'Synergy' : '契合指数'}</span>
          </div>
        </div>

        <div class="flex-1 space-y-2.5 text-center md:text-left">
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <h4 class="text-lg sm:text-xl font-bold font-serif-sc text-amber-200">${arc.name}</h4>
            <span class="imperial-seal-stamp">${arc.seal}</span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">${arc.tier}</span>
          </div>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-serif-sc">${arc.description}</p>
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-200 border border-amber-500/30 flex items-center gap-1">
              <span>🐾</span>
              <span>${labelA}: ${isEn ? data.zodiacA.nameEn : data.zodiacA.nameZh}</span>
            </span>
            <span class="text-xs text-gray-500 font-mono">⚡</span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-purple-500/10 text-purple-200 border border-purple-500/30 flex items-center gap-1">
              <span>🐾</span>
              <span>${labelB}: ${isEn ? data.zodiacB.nameEn : data.zodiacB.nameZh}</span>
            </span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
              ${data.zodiacMatch.badge} · ${isEn ? `${data.zodiacA.animalEn} & ${data.zodiacB.animalEn}` : `${data.zodiacA.animalZh}${data.zodiacB.animalZh}`}
            </span>
          </div>
        </div>
      </div>

      <div class="p-5 rounded-2xl bg-card border border-border-color shadow-xl space-y-3">
        <h5 class="text-sm font-bold text-gray-200 font-serif-sc flex items-center justify-between border-b border-gray-800 pb-2">
          <span>${isEn ? 'Dual Four Pillars Direct Comparison' : '双人命盘四柱对照神机表'}</span>
          <span class="text-xs font-mono text-gray-400">${labelA} vs ${labelB}</span>
        </h5>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-center border-collapse">
            <thead>
              <tr class="text-gray-400 border-b border-gray-800">
                <th class="py-2 text-left">${isEn ? 'Pillar' : '柱位'}</th>
                <th class="py-2">${labelA} (${isEn ? 'Stem/Branch' : '干支'})</th>
                <th class="py-2">${labelA} (${isEn ? 'Ten God' : '十神'})</th>
                <th class="py-2">${labelA} (${isEn ? 'Na-Yin' : '纳音'})</th>
                <th class="py-2 border-l border-gray-800">${labelB} (${isEn ? 'Stem/Branch' : '干支'})</th>
                <th class="py-2">${labelB} (${isEn ? 'Ten God' : '十神'})</th>
                <th class="py-2">${labelB} (${isEn ? 'Na-Yin' : '纳音'})</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-800/60 font-mono">
              ${['year', 'month', 'day', 'hour'].map(k => {
                const colA = pA[k];
                const colB = pB[k];
                const pLabel = isEn
                  ? { year: `Year Pillar (Zodiac: ${data.zodiacA.animalEn} / ${data.zodiacB.animalEn})`, month: 'Month Pillar', day: 'Day Pillar', hour: 'Hour Pillar' }[k]
                  : { year: `年柱 (生肖: 属${data.zodiacA.animalZh} / 属${data.zodiacB.animalZh})`, month: '月柱 (事业)', day: '日柱 (自身/配偶)', hour: '时柱 (愿景)' }[k];
                const gzTextA = isEn ? `${I18N.getStem(colA.stem, 'en').split(' ')[0]}-${I18N.getBranch(colA.branch, 'en').split(' ')[0]}` : colA.text;
                const gzTextB = isEn ? `${I18N.getStem(colB.stem, 'en').split(' ')[0]}-${I18N.getBranch(colB.branch, 'en').split(' ')[0]}` : colB.text;
                const isDay = (k === 'day');
                const rowHighlight = isDay ? 'bg-amber-950/20' : '';
                return `
                  <tr class="${rowHighlight}">
                    <td class="py-2.5 text-left font-sans font-bold text-amber-300/90">${pLabel}</td>
                    <td class="py-2.5 font-serif-sc text-sm font-bold text-amber-200">${gzTextA}</td>
                    <td class="py-2.5 text-indigo-300 font-sans">${isEn ? I18N.getGod(colA.stemGod, 'en') : colA.stemGod}</td>
                    <td class="py-2.5 text-gray-400">${isEn ? I18N.getNaYin(colA.naYin, 'en') : colA.naYin}</td>
                    <td class="py-2.5 border-l border-gray-800 font-serif-sc text-sm font-bold text-purple-200">${gzTextB}</td>
                    <td class="py-2.5 text-indigo-300 font-sans">${isEn ? I18N.getGod(colB.stemGod, 'en') : colB.stemGod}</td>
                    <td class="py-2.5 text-gray-400">${isEn ? I18N.getNaYin(colB.naYin, 'en') : colB.naYin}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div class="md:col-span-2 p-4 rounded-xl bg-card border border-amber-500/30 shadow-lg space-y-2">
          <div class="flex items-center justify-between border-b border-gray-800 pb-1.5 font-bold font-serif-sc text-amber-300">
            <span class="flex items-center gap-1.5"><span>🐉</span><span>${isEn ? '1. Zodiac & Ancestral Root Compatibility' : '1. 生肖合化与根基契合'}</span></span>
            <span class="chinese-seal text-[9px] py-0">${data.zodiacMatch.badge}</span>
          </div>
          <div class="flex flex-wrap items-center gap-2 text-xs text-amber-200 font-bold">
            <span>${data.zodiacMatch.title}</span>
            <span class="text-gray-400 font-normal">| ${data.zodiacMatch.classicalOrigin}</span>
          </div>
          <p class="text-gray-200 leading-relaxed font-serif-sc whitespace-pre-line">${data.zodiacMatch.description}</p>
        </div>

        <div class="p-4 rounded-xl bg-card border border-border-color shadow-lg space-y-2">
          <div class="flex items-center justify-between border-b border-gray-800 pb-1.5 font-bold font-serif-sc text-amber-300">
            <span class="flex items-center gap-1.5"><span>🌱</span><span>${isEn ? '2. Five Elements Symbiosis Architecture' : '2. 五行气机交融图谱'}</span></span>
            <span class="chinese-seal text-[9px] py-0">${isEn ? 'ELEMENTS' : '相生相养'}</span>
          </div>
          <p class="text-gray-200 leading-relaxed font-serif-sc whitespace-pre-line">${data.elementalSynergy.diagnosis}</p>
        </div>

        <div class="p-4 rounded-xl bg-card border border-border-color shadow-lg space-y-2">
          <div class="flex items-center justify-between border-b border-gray-800 pb-1.5 font-bold font-serif-sc text-amber-300">
            <span class="flex items-center gap-1.5"><span>✨</span><span>${isEn ? '3. Soul Resonance & Pillar Chemistry' : '3. 柱位交互与情志默契'}</span></span>
            <span class="chinese-seal text-[9px] py-0">${isEn ? 'RESONANCE' : '天作之合'}</span>
          </div>
          <p class="text-gray-200 leading-relaxed font-serif-sc whitespace-pre-line">${data.pillarResonance.diagnosis}</p>
        </div>

        <div class="p-4 rounded-xl bg-card border border-border-color shadow-lg space-y-2">
          <div class="flex items-center justify-between border-b border-gray-800 pb-1.5 font-bold font-serif-sc text-rose-300">
            <span class="flex items-center gap-1.5"><span>⚡</span><span>${isEn ? '4. Clash Points & Stress Vectors' : '4. 潜在雷区与刑冲预警'}</span></span>
            <span class="chinese-seal text-[9px] py-0 border-rose-500 text-rose-400">${isEn ? 'CLASHES' : '刑冲克害'}</span>
          </div>
          <p class="text-gray-200 leading-relaxed font-serif-sc whitespace-pre-line">${data.clashPoints.diagnosis}</p>
        </div>

        <div class="p-4 rounded-xl bg-card border border-border-color shadow-lg space-y-2">
          <div class="flex items-center justify-between border-b border-gray-800 pb-1.5 font-bold font-serif-sc text-amber-300">
            <span class="flex items-center gap-1.5"><span>💰</span><span>${isEn ? '5. Financial Trust & Game Theory' : '5. 财富合力与商业资产博弈'}</span></span>
            <span class="chinese-seal text-[9px] py-0">${isEn ? 'WEALTH' : '财星博弈'}</span>
          </div>
          <p class="text-gray-200 leading-relaxed font-serif-sc whitespace-pre-line">${data.financialTrust.diagnosis}</p>
        </div>
      </div>

      <!-- Eight Canons Deep Synthesis Card -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-950/25 via-black/50 to-amber-950/20 border border-amber-500/40 shadow-xl space-y-4">
        <div class="flex items-center justify-between border-b border-amber-800/40 pb-2.5">
          <div class="flex items-center gap-2">
            <span class="text-base">📜</span>
            <h5 class="text-sm font-bold text-amber-200 font-serif-sc">${isEn ? '6. Eight Classical Canons Deep Synastry Matrix' : '6. 八大经典合盘互参全息战报'}</h5>
            <span class="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30">${isEn ? '8 Classics' : '八经合参'}</span>
          </div>
          <span class="chinese-seal text-[10px] py-0">${isEn ? 'CANONS' : '八经通考'}</span>
        </div>
        <p class="text-xs text-gray-300 italic font-serif-sc leading-relaxed">${data.eightCanonsSynthesis.summary}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          ${data.eightCanonsSynthesis.canons.map(c => `
            <div class="p-3.5 rounded-xl bg-black/40 border border-gray-800 hover:border-amber-500/30 transition space-y-2">
              <div class="flex items-center justify-between border-b border-gray-800/60 pb-1 font-bold text-amber-300 font-serif-sc">
                <span>${c.name}</span>
              </div>
              <p class="text-[11px] text-amber-200/80 italic font-mono leading-relaxed bg-amber-950/20 px-2 py-1 rounded border-l-2 border-amber-500">${c.canon}</p>
              <p class="text-gray-300 leading-relaxed font-serif-sc">${c.analysis}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Zen & Dao Trinity Relationship Counsel Card -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-950/30 via-black/50 to-indigo-950/30 border border-purple-500/40 shadow-xl space-y-4">
        <div class="flex items-center justify-between border-b border-purple-800/40 pb-2.5">
          <div class="flex items-center gap-2">
            <span class="text-base">🧘</span>
            <h5 class="text-sm font-bold text-purple-200 font-serif-sc">${isEn ? '7. Zen & Dao Trinity Relationship Counsel (Diamond Sutra · Platform Sutra · Zhuangzi)' : '7. 三经智慧调和化解之道 (金刚经 · 坛经 · 庄子)'}</h5>
            <span class="px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30">${isEn ? 'Zen Trinity' : '三经绝学'}</span>
          </div>
          <span class="chinese-seal text-[10px] py-0 border-purple-500 text-purple-300">${isEn ? 'ZEN-DAO' : '明心见性'}</span>
        </div>
        <p class="text-xs text-gray-300 italic font-serif-sc leading-relaxed">${data.zenDaoCounsel.synthesis}</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <!-- Diamond Sutra -->
          <div class="p-3.5 rounded-xl bg-black/40 border border-purple-800/50 hover:border-purple-500/50 transition space-y-2 flex flex-col justify-between">
            <div class="space-y-1.5">
              <h6 class="font-bold text-amber-300 font-serif-sc flex items-center gap-1">
                <span>💎</span><span>${data.zenDaoCounsel.diamondSutra.title}</span>
              </h6>
              <p class="text-[11px] text-amber-200/70 italic font-mono leading-relaxed bg-black/40 p-1.5 rounded border-l border-amber-500">${data.zenDaoCounsel.diamondSutra.canonQuote}</p>
              <p class="text-gray-300 leading-relaxed font-serif-sc">${data.zenDaoCounsel.diamondSutra.counsel}</p>
            </div>
            <div class="pt-2 text-[10px] font-mono text-purple-400/80 uppercase">${isEn ? '• Release Rigid Expectations' : '• 破相无住 · 释放执念'}</div>
          </div>

          <!-- Platform Sutra -->
          <div class="p-3.5 rounded-xl bg-black/40 border border-indigo-800/50 hover:border-indigo-500/50 transition space-y-2 flex flex-col justify-between">
            <div class="space-y-1.5">
              <h6 class="font-bold text-indigo-300 font-serif-sc flex items-center gap-1">
                <span>🪞</span><span>${data.zenDaoCounsel.platformSutra.title}</span>
              </h6>
              <p class="text-[11px] text-indigo-200/70 italic font-mono leading-relaxed bg-black/40 p-1.5 rounded border-l border-indigo-500">${data.zenDaoCounsel.platformSutra.canonQuote}</p>
              <p class="text-gray-300 leading-relaxed font-serif-sc">${data.zenDaoCounsel.platformSutra.counsel}</p>
            </div>
            <div class="pt-2 text-[10px] font-mono text-indigo-400/80 uppercase">${isEn ? '• Clean Slate & Present Mind' : '• 当下觉醒 · 永绝旧怨'}</div>
          </div>

          <!-- Zhuangzi -->
          <div class="p-3.5 rounded-xl bg-black/40 border border-teal-800/50 hover:border-teal-500/50 transition space-y-2 flex flex-col justify-between">
            <div class="space-y-1.5">
              <h6 class="font-bold text-teal-300 font-serif-sc flex items-center gap-1">
                <span>🕊️</span><span>${data.zenDaoCounsel.zhuangzi.title}</span>
              </h6>
              <p class="text-[11px] text-teal-200/70 italic font-mono leading-relaxed bg-black/40 p-1.5 rounded border-l border-teal-500">${data.zenDaoCounsel.zhuangzi.canonQuote}</p>
              <p class="text-gray-300 leading-relaxed font-serif-sc">${data.zenDaoCounsel.zhuangzi.counsel}</p>
            </div>
            <div class="pt-2 text-[10px] font-mono text-teal-400/80 uppercase">${isEn ? '• Mutual Autonomy & Freedom' : '• 齐物逍遥 · 尊重差异'}</div>
          </div>
        </div>
      </div>

      <!-- Remedies Card -->
      <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-950/20 via-black/40 to-black/60 border border-amber-600/40 shadow-xl space-y-2">
        <div class="flex items-center justify-between border-b border-amber-800/40 pb-2 font-bold font-serif-sc text-amber-200 text-sm">
          <span class="flex items-center gap-2"><span>🛡️</span><span>${isEn ? '8. Mutual Remedies & Co-existence Bylaws' : '8. 双人调和化解之道与共生锦囊'}</span></span>
          <span class="chinese-seal text-[10px] py-0">${isEn ? 'REMEDIES' : '通关胜道'}</span>
        </div>
        <p class="text-gray-100 text-xs sm:text-sm leading-relaxed font-serif-sc whitespace-pre-line">${data.remedies.diagnosis}</p>
      </div>
    `;
  }

  // ==========================================================================
  // Feature 1: Imperial Thread-Bound PDF Dossier (A4 绝美精装排盘战报)
  // ==========================================================================
  let currentDossierLang = 'zh';

  function initImperialDossier() {
    const btnExport = document.getElementById('btnExportDossier');
    const modal = document.getElementById('imperialDossierModal');
    const btnClose = document.getElementById('dossierCloseBtn');
    const btnPrint = document.getElementById('dossierPrintBtn');
    const btnDownload = document.getElementById('dossierDownloadPdfBtn');
    const btnDismiss = document.getElementById('dossierExportStatusDismiss');
    const langZhBtn = document.getElementById('dossierLangZh');
    const langEnBtn = document.getElementById('dossierLangEn');

    if (btnExport && modal) {
      btnExport.addEventListener('click', () => {
        openImperialDossierModal(currentLang);
      });
    }

    if (btnClose && modal) {
      btnClose.addEventListener('click', () => {
        closeImperialDossierModal();
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeImperialDossierModal();
        }
      });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeImperialDossierModal();
        }
      });
    }

    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        printImperialDossier();
      });
    }

    if (btnDownload) {
      btnDownload.addEventListener('click', () => {
        downloadImperialDossierPDF(currentDossierLang);
      });
    }

    if (btnDismiss) {
      btnDismiss.addEventListener('click', () => {
        const statusEl = document.getElementById('dossierExportStatus');
        if (statusEl) statusEl.classList.add('hidden');
      });
    }

    if (langZhBtn && langEnBtn) {
      langZhBtn.addEventListener('click', () => {
        langZhBtn.className = 'px-2 py-0.5 text-xs rounded bg-amber-600 text-white font-medium';
        langEnBtn.className = 'px-2 py-0.5 text-xs rounded text-gray-400 hover:text-gray-200 font-medium';
        currentDossierLang = 'zh';
        updateDossierModalI18n('zh');
        renderImperialDossierPages('zh');
      });
      langEnBtn.addEventListener('click', () => {
        langEnBtn.className = 'px-2 py-0.5 text-xs rounded bg-amber-600 text-white font-medium';
        langZhBtn.className = 'px-2 py-0.5 text-xs rounded text-gray-400 hover:text-gray-200 font-medium';
        currentDossierLang = 'en';
        updateDossierModalI18n('en');
        renderImperialDossierPages('en');
      });
    }

    // Auto-sync with language switcher if dossier is open
    const globalLangZhBtn = document.getElementById('langZhBtn');
    const globalLangEnBtn = document.getElementById('langEnBtn');
    if (globalLangZhBtn) {
      globalLangZhBtn.addEventListener('click', () => {
        if (modal && !modal.classList.contains('hidden')) {
          renderImperialDossierPages(currentDossierLang || currentLang);
        }
      });
    }
    if (globalLangEnBtn) {
      globalLangEnBtn.addEventListener('click', () => {
        if (modal && !modal.classList.contains('hidden')) {
          renderImperialDossierPages(currentDossierLang || currentLang);
        }
      });
    }

    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('beforeprint', () => {
        renderImperialDossierPages(currentDossierLang || currentLang);
      });
    }
  }

  function updateDossierModalI18n(lang) {
    const isEn = (lang === 'en');
    const titleEl = document.querySelector('[data-i18n="dossier_modal_title"]');
    const printBtnEl = document.querySelector('#dossierPrintBtn span:last-child');
    const downloadBtnEl = document.querySelector('#dossierDownloadPdfBtn span:last-child');
    const closeBtnEl = document.getElementById('dossierCloseBtn');

    if (titleEl) {
      titleEl.textContent = isEn
        ? 'Imperial Thread-Bound BaZi Dossier · Classified Master Archive (A4 PDF Export)'
        : '皇家线装排盘战报 · 绝美珍藏册 (A4 级导出)';
    }
    if (printBtnEl) {
      printBtnEl.textContent = isEn ? 'System Print / Save as PDF' : '系统打印 / 另存为 PDF';
    }
    if (downloadBtnEl) {
      downloadBtnEl.textContent = isEn ? 'Direct Download PDF' : '直接下载 PDF 文件';
    }
    if (closeBtnEl) {
      closeBtnEl.textContent = isEn ? 'Close Preview' : '关闭预览';
    }
  }

  function showDossierStatus(msg, type = 'info') {
    const statusEl = document.getElementById('dossierExportStatus');
    const msgEl = document.getElementById('dossierExportStatusMsg');
    if (!statusEl || !msgEl) return;

    msgEl.textContent = msg;
    statusEl.classList.remove('hidden');
    if (type === 'success') {
      statusEl.className = 'no-print w-full max-w-4xl mb-3 px-4 py-2.5 rounded-lg text-xs font-medium border flex items-center justify-between transition shadow-md bg-emerald-950/80 border-emerald-600/50 text-emerald-200';
    } else {
      statusEl.className = 'no-print w-full max-w-4xl mb-3 px-4 py-2.5 rounded-lg text-xs font-medium border flex items-center justify-between transition shadow-md bg-amber-950/80 border-amber-600/50 text-amber-200';
    }
  }

  function openImperialDossierModal(lang) {
    const modal = document.getElementById('imperialDossierModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    if (document.body) {
      if (document.body.classList) document.body.classList.add('dossier-modal-open');
      if (document.body.style) document.body.style.overflow = 'hidden';
    }

    const activeLang = lang || currentLang || 'zh';
    currentDossierLang = activeLang;

    const statusEl = document.getElementById('dossierExportStatus');
    if (statusEl) statusEl.classList.add('hidden');

    const langZhBtn = document.getElementById('dossierLangZh');
    const langEnBtn = document.getElementById('dossierLangEn');
    if (langZhBtn && langEnBtn) {
      if (activeLang === 'en') {
        langEnBtn.className = 'px-2 py-0.5 text-xs rounded bg-amber-600 text-white font-medium';
        langZhBtn.className = 'px-2 py-0.5 text-xs rounded text-gray-400 hover:text-gray-200 font-medium';
      } else {
        langZhBtn.className = 'px-2 py-0.5 text-xs rounded bg-amber-600 text-white font-medium';
        langEnBtn.className = 'px-2 py-0.5 text-xs rounded text-gray-400 hover:text-gray-200 font-medium';
      }
    }

    updateDossierModalI18n(activeLang);
    renderImperialDossierPages(activeLang);
  }

  function closeImperialDossierModal() {
    const modal = document.getElementById('imperialDossierModal');
    if (!modal) return;
    modal.classList.add('hidden');
    if (document.body) {
      if (document.body.classList) document.body.classList.remove('dossier-modal-open');
      if (document.body.style) document.body.style.overflow = '';
    }
  }

  function printImperialDossier() {
    renderImperialDossierPages(currentDossierLang || currentLang);
    window.print();
  }

  function downloadImperialDossierPDF(lang) {
    const activeLang = lang || currentDossierLang || currentLang || 'zh';
    const isEn = (activeLang === 'en');

    renderImperialDossierPages(activeLang);

    const container = document.getElementById('imperialDossierContainer');
    if (!container) return;

    const bazi = currentBaziResult;
    const yrStem = (bazi && bazi.pillars && bazi.pillars.year && bazi.pillars.year.text) ? bazi.pillars.year.text : (isEn ? 'Chart' : '命造');
    const dateStr = (bazi && bazi.input && bazi.input.year)
      ? `${bazi.input.year}${String(bazi.input.month).padStart(2,'0')}${String(bazi.input.day).padStart(2,'0')}`
      : new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const filename = isEn ? `Imperial_BaZi_Dossier_${dateStr}` : `钦天监御制命盘密卷_${yrStem}_${dateStr}`;

    showDossierStatus(
      isEn ? '⏳ Compiling 7-Page Qin Tian Jian Imperial Celestial Blueprint A4 PDF...' : '⏳ 正在编译 7 页钦天监 · 御制天机 A4 珍藏册 PDF，请稍候...',
      'info'
    );

    container.classList.add('exporting-pdf');

    // 1. Primary: Use html2pdf.js if available in the browser runtime
    if (typeof html2pdf !== 'undefined') {
      try {
        const opt = {
          margin: 0,
          filename: `${filename}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            letterRendering: true,
            scrollY: 0,
            scrollX: 0,
            backgroundColor: '#fcfbf7',
            logging: false
          },
          jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
          },
          pagebreak: {
            mode: [] // Pure 7-page continuous A4 rendering without spurious spacer injections
          }
        };

        html2pdf().set(opt).from(container).save().then(() => {
          container.classList.remove('exporting-pdf');
          showDossierStatus(
            isEn ? '✅ Qin Tian Jian Imperial PDF Dossier generated and download started!' : '✅ 钦天监 · 御制天机战报 PDF 已成功生成并开始下载！',
            'success'
          );
        }).catch((err) => {
          container.classList.remove('exporting-pdf');
          console.warn('html2pdf runtime notice, invoking fallback:', err);
          fallbackExportPDF(container, filename, isEn);
        });
        return;
      } catch (err) {
        container.classList.remove('exporting-pdf');
        console.warn('html2pdf invocation error:', err);
      }
    }

    container.classList.remove('exporting-pdf');
    // 2. Secondary: Built-in zero-dependency client-side PDF emitter
    fallbackExportPDF(container, filename, isEn);
  }

  function fallbackExportPDF(container, filename, isEn) {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const pages = (container.querySelectorAll && typeof container.querySelectorAll === 'function')
      ? Array.from(container.querySelectorAll('.imperial-page'))
      : [];

    if (!pages || pages.length === 0) {
      triggerPrintFallback(isEn);
      return;
    }

    renderPagesToJpegs(pages).then((jpegList) => {
      if (!jpegList || jpegList.length === 0) {
        triggerPrintFallback(isEn);
        return;
      }
      const pdfBytes = compileA4PdfFromJpegs(jpegList);
      if (typeof Blob === 'undefined' || typeof URL === 'undefined') {
        triggerPrintFallback(isEn);
        return;
      }
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${filename}.pdf`;
      if (document.body && typeof document.body.appendChild === 'function') {
        document.body.appendChild(link);
      }
      if (typeof link.click === 'function') {
        link.click();
      }
      setTimeout(() => {
        if (link.parentNode && typeof link.parentNode.removeChild === 'function') {
          link.parentNode.removeChild(link);
        }
        if (typeof URL.revokeObjectURL === 'function') {
          URL.revokeObjectURL(blobUrl);
        }
      }, 2000);
      showDossierStatus(
        isEn ? '✅ Qin Tian Jian Imperial PDF Dossier generated and download started!' : '✅ 钦天监 · 御制天机战报 PDF 已成功生成并开始下载！',
        'success'
      );
    }).catch((err) => {
      console.warn('Direct canvas rasterization notice, opening high-fidelity print engine:', err);
      triggerPrintFallback(isEn);
    });
  }

  function triggerPrintFallback(isEn) {
    showDossierStatus(
      isEn
        ? 'ℹ️ High-fidelity A4 print view ready. Select "Save as PDF" in the print dialog to save.'
        : 'ℹ️ 已为您启动 A4 级高保真打印视图，请在系统窗口选择「另存为 PDF」即可保存文件。',
      'info'
    );
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
      setTimeout(() => {
        window.print();
      }, 400);
    }
  }

  function renderPagesToJpegs(pages, scale = 2) {
    if (typeof Promise === 'undefined') return Promise.resolve([]);
    return Promise.all(pages.map(page => renderPageToJpeg(page, scale)));
  }

  function dataUrlToUint8Array(dataUrl) {
    const parts = (dataUrl || '').split(',');
    const b64 = parts.length > 1 ? parts[1] : parts[0];
    const binStr = (typeof atob === 'function') ? atob(b64) : '';
    const u = new Uint8Array(binStr.length);
    for (let i = 0; i < binStr.length; i++) {
      u[i] = binStr.charCodeAt(i);
    }
    return u;
  }

  function renderPageToJpeg(pageEl, scale = 2) {
    return new Promise((resolve, reject) => {
      try {
        if (typeof Image === 'undefined' || typeof document.createElement !== 'function') {
          reject(new Error('DOM Image or Canvas API unavailable'));
          return;
        }
        const width = 794;
        const height = 1123;

        let cssRules = '';
        try {
          if (document.styleSheets) {
            for (let i = 0; i < document.styleSheets.length; i++) {
              try {
                const sheet = document.styleSheets[i];
                const rules = sheet.cssRules || sheet.rules;
                if (rules) {
                  for (let j = 0; j < rules.length; j++) {
                    cssRules += rules[j].cssText + '\n';
                  }
                }
              } catch (e) {}
            }
          }
        } catch (e) {}

        const clone = pageEl.cloneNode ? pageEl.cloneNode(true) : pageEl;
        if (clone.style) {
          clone.style.margin = '0';
          clone.style.boxShadow = 'none';
          clone.style.width = width + 'px';
          clone.style.height = height + 'px';
          clone.style.minHeight = height + 'px';
          clone.style.maxHeight = height + 'px';
          clone.style.boxSizing = 'border-box';
          clone.style.overflow = 'hidden';
        }

        const serialized = (typeof XMLSerializer !== 'undefined')
          ? new XMLSerializer().serializeToString(clone)
          : (clone.outerHTML || '');

        const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
          '<foreignObject width="100%" height="100%">' +
          '<div xmlns="http://www.w3.org/1999/xhtml">' +
          '<style>' + cssRules + '* { box-sizing: border-box; }</style>' +
          serialized +
          '</div>' +
          '</foreignObject>' +
          '</svg>';

        if (typeof Blob === 'undefined' || typeof URL === 'undefined') {
          reject(new Error('Blob API unavailable'));
          return;
        }

        const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const img = new Image();

        img.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = Math.round(width * scale);
            canvas.height = Math.round(height * scale);
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.fillStyle = '#fcfbf7';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
            URL.revokeObjectURL(url);
            const dataUrl = canvas.toDataURL ? canvas.toDataURL('image/jpeg', 0.95) : '';
            const bytes = dataUrlToUint8Array(dataUrl);
            resolve({
              bytes: bytes,
              width: canvas.width,
              height: canvas.height
            });
          } catch (err) {
            URL.revokeObjectURL(url);
            reject(err);
          }
        };

        img.onerror = (e) => {
          URL.revokeObjectURL(url);
          reject(e);
        };

        img.src = url;
      } catch (err) {
        reject(err);
      }
    });
  }

  // Pure Client-Side ISO 32000-1 / PDF-1.4 Multi-Page A4 Binary Compiler
  function compileA4PdfFromJpegs(jpegDataList) {
    const parts = [];
    const offsets = [];
    let totalLen = 0;

    function writeStr(s) {
      const arr = [];
      for (let i = 0; i < s.length; i++) {
        arr.push(s.charCodeAt(i) & 0xff);
      }
      const u = new Uint8Array(arr);
      parts.push(u);
      totalLen += u.length;
    }

    function writeBytes(u) {
      parts.push(u);
      totalLen += u.length;
    }

    function addObj(objNum, contentStr, binaryBytes) {
      offsets.push(totalLen);
      writeStr(objNum + ' 0 obj\n' + contentStr + '\n');
      if (binaryBytes) {
        writeBytes(binaryBytes);
        writeStr('\nendstream\n');
      }
      writeStr('endobj\n');
    }

    writeStr('%PDF-1.4\n%\xe2\xe3\xcf\xd3\n');

    const numPages = (jpegDataList && jpegDataList.length) ? jpegDataList.length : 1;
    addObj(1, '<< /Type /Catalog /Pages 2 0 R >>');

    const kids = [];
    for (let i = 0; i < numPages; i++) {
      kids.push((3 + i * 3) + ' 0 R');
    }
    addObj(2, '<< /Type /Pages /Kids [' + kids.join(' ') + '] /Count ' + numPages + ' >>');

    for (let p = 0; p < numPages; p++) {
      const pageObjNum = 3 + p * 3;
      const streamObjNum = 4 + p * 3;
      const imgObjNum = 5 + p * 3;
      const imgName = 'Im' + (p + 1);
      const item = jpegDataList[p] || { bytes: new Uint8Array(0), width: 1, height: 1 };

      addObj(pageObjNum, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /' + imgName + ' ' + imgObjNum + ' 0 R >> >> /Contents ' + streamObjNum + ' 0 R >>');

      const streamContent = 'q 595.28 0 0 841.89 0 0 cm /' + imgName + ' Do Q';
      addObj(streamObjNum, '<< /Length ' + streamContent.length + ' >>\nstream\n' + streamContent + '\nendstream');

      const imgHeader = '<< /Type /XObject /Subtype /Image /Width ' + item.width + ' /Height ' + item.height + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + item.bytes.length + ' >>\nstream';
      addObj(imgObjNum, imgHeader, item.bytes);
    }

    const xrefOffset = totalLen;
    const totalObjs = 2 + numPages * 3;
    writeStr('xref\n0 ' + (totalObjs + 1) + '\n0000000000 65535 f \n');
    for (let o = 0; o < offsets.length; o++) {
      const offStr = ('0000000000' + offsets[o]).slice(-10);
      writeStr(offStr + ' 00000 n \n');
    }
    writeStr('trailer\n<< /Size ' + (totalObjs + 1) + ' /Root 1 0 R >>\nstartxref\n' + xrefOffset + '\n%%EOF\n');

    const full = new Uint8Array(totalLen);
    let ptr = 0;
    for (let k = 0; k < parts.length; k++) {
      full.set(parts[k], ptr);
      ptr += parts[k].length;
    }
    return full;
  }

  // Global exposure for controllers and testing
  if (typeof window !== 'undefined') {
    window.downloadImperialDossierPDF = downloadImperialDossierPDF;
    window.printImperialDossier = printImperialDossier;
    window.compileA4PdfFromJpegs = compileA4PdfFromJpegs;
    window.openImperialDossierModal = openImperialDossierModal;
    window.renderImperialDossierPages = renderImperialDossierPages;
  }

  function renderImperialDossierPages(lang) {
    const container = document.getElementById('imperialDossierContainer');
    if (!container) return;

    if (!currentBaziResult) {
      if (typeof triggerCalculate === 'function') {
        triggerCalculate();
      }
      if (!currentBaziResult && typeof BaZiEngine !== 'undefined') {
        currentBaziResult = BaZiEngine.calculate({
          year: 1990, month: 6, day: 20, hour: 14, minute: 30, gender: '乾造',
          useTrueSolarTime: false, isLateRatNextDay: false, longitude: 116.4, timezone: 8.0
        });
      }
    }
    if (!currentBaziResult) return;

    const isEn = (lang === 'en');
    const bazi = currentBaziResult;
    const pZh = PortraitEngine.analyze(bazi, 'zh');
    const portrait = isEn ? I18N.translatePortrait(pZh, 'en') : pZh;
    const gp = portrait.paretoCore.grandPicture;
    const pc = portrait.paretoCore;
    const mf = portrait.mentalFriction;
    const zen = mf.zenDaoWisdom;

    const watermarkText = isEn ? 'QIN TIAN JIAN · IMPERIAL CELESTIAL BLUEPRINT' : '钦天监 · 御制天机';
    const mainTitle = isEn ? 'Qin Tian Jian · Imperial Celestial Blueprint' : '钦天监 · 御制天机';
    const subTitle = isEn ? 'Canonical Synthesis from Di Tian Sui, San Ming, Qiong Tong, Zi Ping & Yuan Hai' : '《滴天髓》·《三命通会》·《穷通宝鉴》·《子平真诠》·《渊海子平》五典全相集成';

    const p = bazi.pillars;

    const rawGender = (bazi.input && bazi.input.gender) || bazi.gender || '乾造';
    const isMale = (rawGender === '乾造' || rawGender === 'male' || rawGender === 'Yang Male');
    const genderStr = isEn ? (isMale ? 'Yang Male (Qian)' : 'Yin Female (Kun)') : (isMale ? '乾造' : '坤造');
    const domPat = isEn ? (portrait.patterns[0].nameEn || portrait.patterns[0].name) : portrait.patterns[0].name;
    const ge = portrait.patterns[0].gradeEvaluation;
    const domTier = ge ? (isEn ? (ge.tierEn || ge.tier) : (ge.tierZh || ge.tier)) : '';
    const elPercentages = (bazi.elements && bazi.elements.percentages) || bazi.elements || {};
    const elMap = { '木': 'Wood', '火': 'Fire', '土': 'Earth', '金': 'Metal', '水': 'Water' };
    const elSummaryStr = Object.entries(elPercentages).map(([k, v]) => `${isEn ? (elMap[k] || k) : k} ${v}%`).join(' · ');

    const inpYr = (bazi.input && bazi.input.year) || 1990;
    const inpMo = (bazi.input && bazi.input.month) || 1;
    const inpDa = (bazi.input && bazi.input.day) || 1;
    const inpHr = (bazi.input && bazi.input.hour) || 0;
    const inpMi = (bazi.input && bazi.input.minute) || 0;
    const dateStr = `${inpYr}-${String(inpMo).padStart(2,'0')}-${String(inpDa).padStart(2,'0')} ${String(inpHr).padStart(2,'0')}:${String(inpMi).padStart(2,'0')}`;

    let luck = (typeof currentLuckResult !== 'undefined' && currentLuckResult) ? currentLuckResult : null;
    if (!luck && typeof LuckEngine !== 'undefined') {
      luck = LuckEngine.calculateLuck(bazi);
    }
    const dPillar = (luck && luck.activeDecade) || { stem: '甲', branch: '子', text: '甲子', stemGod: '比肩', naYin: '海中金', ageStart: 20, ageEnd: 29 };
    const aPillar = (luck && luck.activeAnnual) || { stem: '丙', branch: '午', text: '丙午', year: new Date().getFullYear(), stemGod: '偏官', naYin: '天河水' };
    const mPillar = (luck && luck.activeMonth) || { stem: '丁', branch: '酉', text: '丁酉', stemGod: '正印', naYin: '山下火' };

    const synthesis = (luck && luck.synthesis14Char) ||
      (typeof LuckEngine !== 'undefined' && LuckEngine.calculate14CharEnergySynthesis
        ? LuckEngine.calculate14CharEnergySynthesis(bazi, dPillar, aPillar, mPillar)
        : null);

    const dmState = (synthesis && synthesis.dayMasterDynamicState) || {
      dayMaster: bazi.dayMaster,
      dayMasterEn: (typeof I18N !== 'undefined' && I18N.getStem) ? I18N.getStem(bazi.dayMaster, 'en').split(' ')[0] : bazi.dayMaster,
      dayMasterElement: bazi.dayMasterElement || '木',
      dayMasterElementEn: isEn ? (elMap[bazi.dayMasterElement] || 'Wood') : (bazi.dayMasterElement || '木'),
      natalStrength: (portrait && portrait.vigor) ? portrait.vigor.status : '身旺',
      natalStrengthEn: (portrait && portrait.vigor) ? portrait.vigor.status : 'Strong',
      supportCount: 7,
      drainCount: 7,
      dynamicRatio: 0.5,
      badgeZh: '气机流转 · 中和守常',
      badgeEn: 'Resilient Equilibrium',
      statusZh: '14字气机生克均衡，进退有度，自我定力与外部开拓形成良性循环。',
      statusEn: 'The 14 characters balance self-strength and outward engagement; steady sovereignty meets responsive execution.'
    };
    const domEl = (synthesis && synthesis.dominantElement) || {
      element: bazi.dayMasterElement || '木',
      elementEn: isEn ? (elMap[bazi.dayMasterElement] || 'Wood') : (bazi.dayMasterElement || '木'),
      percentage: 28.5,
      count: 4,
      roleZh: '五行主导 · 运化中枢',
      roleEn: 'Dominant Elemental Pivot'
    };
    const interp = (synthesis && synthesis.strategicFieldInterpretation) || {
      titleZh: '大运岁序与原局交感 · 统筹全局战略',
      titleEn: 'Decennial & Annual Resonance · Unified Grand Strategy',
      dynamicsZh: '原局底蕴深厚，岁运流转相生相化，形成生生不息之动态场域。',
      dynamicsEn: 'Natal foundation integrates harmoniously with decennial and annual currents, generating dynamic momentum.',
      strategicFocusZh: '把握岁运主线节奏，立足核心优势，顺势而为。',
      strategicFocusEn: 'Anchor to your decisive core advantage; ride the temporal momentum with clear focus.',
      actionDirectivesZh: ['守正出奇，在关键运势窗口果断出手。', '平衡精力分配，规避消耗性竞争。'],
      actionDirectivesEn: ['Act decisively during major strategic windows.', 'Preserve somatic energy and eliminate wasteful friction.'],
      physicalTuningZh: '调适作息与身心节奏，保持气血通畅。',
      physicalTuningEn: 'Harmonize somatic rhythms and maintain adequate rest and recovery.'
    };
    const charsList = (synthesis && synthesis.characters && synthesis.characters.length === 14) ? synthesis.characters : [
      { char: p.year.stem, charEn: I18N.getStem(p.year.stem, 'en').split(' ')[0], el: '木', elementEn: 'Wood', tenGod: p.year.stemGod, tenGodEn: I18N.getGod(p.year.stemGod, 'en') },
      { char: p.year.branch, charEn: I18N.getBranch(p.year.branch, 'en').split(' ')[0], el: '水', elementEn: 'Water', tenGod: '偏印', tenGodEn: 'Indirect Resource' },
      { char: p.month.stem, charEn: I18N.getStem(p.month.stem, 'en').split(' ')[0], el: '木', elementEn: 'Wood', tenGod: p.month.stemGod, tenGodEn: I18N.getGod(p.month.stemGod, 'en') },
      { char: p.month.branch, charEn: I18N.getBranch(p.month.branch, 'en').split(' ')[0], el: '火', elementEn: 'Fire', tenGod: '偏财', tenGodEn: 'Indirect Wealth' },
      { char: p.day.stem, charEn: I18N.getStem(p.day.stem, 'en').split(' ')[0], el: '水', elementEn: 'Water', tenGod: '日主', tenGodEn: 'Day Master' },
      { char: p.day.branch, charEn: I18N.getBranch(p.day.branch, 'en').split(' ')[0], el: '水', elementEn: 'Water', tenGod: '比肩', tenGodEn: 'Companion' },
      { char: p.hour.stem, charEn: I18N.getStem(p.hour.stem, 'en').split(' ')[0], el: '金', elementEn: 'Metal', tenGod: p.hour.stemGod, tenGodEn: I18N.getGod(p.hour.stemGod, 'en') },
      { char: p.hour.branch, charEn: I18N.getBranch(p.hour.branch, 'en').split(' ')[0], el: '金', elementEn: 'Metal', tenGod: '正印', tenGodEn: 'Direct Resource' },
      { char: dPillar.stem, charEn: I18N.getStem(dPillar.stem, 'en').split(' ')[0], el: '木', elementEn: 'Wood', tenGod: dPillar.stemGod, tenGodEn: I18N.getGod(dPillar.stemGod, 'en') },
      { char: dPillar.branch, charEn: I18N.getBranch(dPillar.branch, 'en').split(' ')[0], el: '水', elementEn: 'Water', tenGod: '偏印', tenGodEn: 'Indirect Resource' },
      { char: aPillar.stem, charEn: I18N.getStem(aPillar.stem, 'en').split(' ')[0], el: '火', elementEn: 'Fire', tenGod: aPillar.stemGod, tenGodEn: I18N.getGod(aPillar.stemGod, 'en') },
      { char: aPillar.branch, charEn: I18N.getBranch(aPillar.branch, 'en').split(' ')[0], el: '火', elementEn: 'Fire', tenGod: '正财', tenGodEn: 'Direct Wealth' },
      { char: mPillar.stem, charEn: I18N.getStem(mPillar.stem, 'en').split(' ')[0], el: '金', elementEn: 'Metal', tenGod: mPillar.stemGod, tenGodEn: I18N.getGod(mPillar.stemGod, 'en') },
      { char: mPillar.branch, charEn: I18N.getBranch(mPillar.branch, 'en').split(' ')[0], el: '金', elementEn: 'Metal', tenGod: '偏财', tenGodEn: 'Indirect Wealth' }
    ];
    const elDistList = (synthesis && synthesis.elementDistributionList) || [];
    const elDistSummaryStr = elDistList.length > 0
      ? elDistList.map(item => `${isEn ? item.elementEn : item.element} ${item.percentage}%`).join(' · ')
      : elSummaryStr;

    const decadePillarStr = isEn
      ? `${I18N.getStem(dPillar.stem, 'en').split(' ')[0]}-${I18N.getBranch(dPillar.branch, 'en').split(' ')[0]} (${I18N.getGod(dPillar.stemGod, 'en')}) · Ages ${dPillar.ageStart || '--'}-${dPillar.ageEnd || '--'}`
      : `${dPillar.text || (dPillar.stem + dPillar.branch)} (${dPillar.stemGod}) · ${dPillar.ageStart || '--'}-${dPillar.ageEnd || '--'}岁`;
    const decadeNaYinStr = isEn ? I18N.getNaYin(dPillar.naYin, 'en') : dPillar.naYin;

    const annualPillarStr = isEn
      ? `${aPillar.year || ''} ${I18N.getStem(aPillar.stem, 'en').split(' ')[0]}-${I18N.getBranch(aPillar.branch, 'en').split(' ')[0]} (${I18N.getGod(aPillar.stemGod, 'en')})`
      : `${aPillar.year || ''}年 ${aPillar.text || (aPillar.stem + aPillar.branch)} (${aPillar.stemGod})`;
    const annualNaYinStr = isEn ? I18N.getNaYin(aPillar.naYin, 'en') : aPillar.naYin;

    const reflectionPreservationNote = isEn
      ? 'Note: Preserving the authentic Chinese classical passage alongside vernacular translation is recommended for personal reflection and deeper meditation.'
      : '注：研读时参验古典原文与白话指引对照，以助个人静心省察与觉悟升维。';

    const targetCalYear = (aPillar && aPillar.year) || new Date().getFullYear();
    const careerReport = (typeof CareerEngine !== 'undefined' && typeof CareerEngine.generateCareerReport === 'function')
      ? CareerEngine.generateCareerReport(bazi, luck, targetCalYear)
      : null;
    const crMu = careerReport ? careerReport.managingUp : null;
    const crPd = careerReport ? careerReport.peerDynamics : null;
    const crArchs = (careerReport && careerReport.workplaceArchetypes) ? careerReport.workplaceArchetypes : [];
    const crTt = careerReport ? careerReport.timingTrajectory : null;
    const upwardRuleZh = (crMu && (crMu.generalRuleZh || crMu.avoidOffendingZh || crMu.styleZh)) || '以严密数据与结构化成果向上复命，多请示少冒进，克制叛逆锋芒。';
    const upwardRuleEn = (crMu && (crMu.generalRuleEn || crMu.avoidOffendingEn || crMu.styleEn)) || 'Preserve institutional alignment and present structured results.';

    // Executive Summary Blueprint Data Extraction
    const sf = (portrait.canons && portrait.canons.shenfeng) || (bazi.canons && bazi.canons.shenfeng) || {};
    const rawMedicineZh = (sf && sf.medicineZh) || (gp && gp.section2 && gp.section2.medicineZh) || '以法度约束锋芒，以相神护卫用神';
    const rawMedicineEn = (sf && sf.medicineEn) || (gp && gp.section2 && gp.section2.medicineEn) || 'Discipline & Strategic Warmth';
    const keyMedicineText = isEn ? (rawMedicineEn.split('.')[0] || 'Discipline & Solar Warmth') : (rawMedicineZh.split('与')[0] || '相神救应');

    const arch1 = (crArchs && crArchs.length > 0) ? crArchs[0] : {
      icon: '🏛️',
      nameZh: '高管 / 统帅型',
      nameEn: 'Executive / Commander',
      fitScore: 95,
      coreStrengthsZh: '具备宏观全景视野与极强战略定力，擅长制定顶层规则、调配核心资源。',
      coreStrengthsEn: 'Commanding panoramic strategic vision and systemic discipline in orchestrating high-stakes organizational campaigns.',
      breakthroughTacticZh: '以制度建威权，以成果赢话语，不争细节琐碎，专攻关键抓手。',
      breakthroughTacticEn: 'Establish authority through structural discipline and measurable milestones; govern high-leverage outcomes.'
    };

    const sp = pc.spouse || {};
    const spBranch = (p && p.day && p.day.branch) || '子';
    const spBranchEn = (typeof I18N !== 'undefined' && I18N.getBranch) ? I18N.getBranch(spBranch, 'en').split(' ')[0] : spBranch;
    const spArch = isEn
      ? (sp.archetype && !/[\u4e00-\u9fa5]/.test(sp.archetype) ? sp.archetype : 'Steadfast Ballast Consort')
      : (sp.archetypeZh || '大局深稳内助型');
    const spDemeanour = isEn
      ? (sp.demeanour && !/[\u4e00-\u9fa5]/.test(sp.demeanour) ? sp.demeanour : 'Composed, discerning, and naturally protective.')
      : (sp.demeanourZh || '温润沉静，处事极具大局观，暗中稳固底盘。');
    const spRelationship = isEn
      ? (sp.relationship && !/[\u4e00-\u9fa5]/.test(sp.relationship) ? sp.relationship : 'Harmonious domestic foundation; mutual strategic counsel.')
      : (sp.relationshipZh || '相敬如宾，家庭压舱石稳固，遇风浪共商大计。');

    const directWealthText = isEn
      ? (crTt ? (crTt.directWealthEvaluationEn || crTt.directWealthAnalysisEn || 'Direct wealth indicates stable core salary and promotions.') : 'Direct wealth indicates stable core salary and promotions.')
      : (crTt ? (crTt.directWealthEvaluationZh || crTt.directWealthAnalysisZh || '正财主业稳定，深耕岗位基本盘换取稳健增长。') : '正财主业稳定，深耕岗位基本盘换取稳健增长。');

    const indirectWealthText = isEn
      ? (crTt ? (crTt.indirectWealthEvaluationEn || crTt.indirectWealthAnalysisEn || 'Indirect wealth advises prudent equity and venture investments.') : 'Indirect wealth advises prudent equity and venture investments.')
      : (crTt ? (crTt.indirectWealthEvaluationZh || crTt.indirectWealthAnalysisZh || '偏财副业适度进取，善用信息差获利，严控杠杆。') : '偏财副业适度进取，善用信息差获利，严控杠杆。');

    const rule1 = isEn
      ? '1. Govern Ferocious Drive with Structural Law: Tame excessive ambition through ironclad rules and self-discipline, converting turbulent friction into supreme authority.'
      : '一、以法度驾驭锋芒（守正）：极度偏旺之势切忌任性逞强，须以严苛制度与自我纪律约束锋芒，凶煞自转威权帅印。';
    const rule2 = isEn
      ? '2. Dissolve Aloofness with Radiant Altruism: Melt defensive isolation through genuine empathy, collaborative generosity, and strategic patience, winning lasting allies.'
      : '二、以利他远见融解孤寒（化冰）：遇逆境切忌孤芳自赏，善用温润沟通与利他大局广结善缘，得道多助方能成就长久基业。';
    const rule3 = isEn
      ? '3. Fortify Domestic Sanctuary & Somatic Reserve: Honor the spouse as your ultimate financial breakwater and emotional ballast; guard vitality against overwork.'
      : '三、以后方压舱石固本培元（安内）：配偶乃一生财库防波堤与理智护航者，遇风浪当共商大计，修心养气方保终身立于不败之地。';

    container.innerHTML = `
      <!-- Page 1: Executive Summary Blueprint -->
      <div class="imperial-page relative">
        <div class="imperial-thread-spine">
          <div class="thread-eyelet eyelet-1"></div>
          <div class="thread-eyelet eyelet-2"></div>
          <div class="thread-eyelet eyelet-3"></div>
          <div class="thread-eyelet eyelet-4"></div>
        </div>
        <div class="imperial-watermark">${watermarkText}</div>

        <div class="imperial-frame flex flex-col justify-between p-6 space-y-2">
          <!-- Header -->
          <div class="text-center space-y-1 border-b-2 border-amber-900/60 pb-2.5">
            <div class="flex items-center justify-between">
              <span class="imperial-seal-stamp">${isEn ? 'IMPERIAL BLUEPRINT' : '钦天监正堂之宝'}</span>
              <span class="text-[11px] text-gray-600 font-mono">${isEn ? 'CLASSIFIED ARCHIVE' : '天机御览 · 卷首统览'}</span>
            </div>
            <h1 class="text-xl font-black font-serif-sc text-amber-900 tracking-wider">${isEn ? 'Qin Tian Jian · Imperial Celestial Blueprint' : '钦天监 · 御制天机 · 卷首三要终身统览'}</h1>
            <p class="text-[11px] text-gray-700 font-serif-sc">${isEn ? 'Executive Lifetime Synthesis: Career Calling · Wealth Flow · Domestic Spouse Ballast · Three Sovereign Decrees' : '全相至高纲领：天命职能 · 金玉资财 · 配偶家庭（老婆） · 钦天监朱批终身三铁律'}</p>
          </div>

          <!-- Subject Quick Metadata Banner -->
          <div class="grid grid-cols-4 gap-2 text-[10.5px] bg-amber-50/70 p-2 rounded border border-amber-900/30 text-center font-serif-sc">
            <div><span class="text-gray-500">${isEn ? 'Subject:' : '命主造化:'}</span> <b class="text-amber-950 font-mono ml-0.5">${genderStr}</b></div>
            <div><span class="text-gray-500">${isEn ? 'Day Master:' : '日元元神:'}</span> <b class="text-amber-900 ml-0.5">${isEn ? `${I18N.getStem(bazi.dayMaster, 'en').split(' ')[0]} (${portrait.vigor.status})` : `${bazi.dayMaster} (${portrait.vigor.status})`}</b></div>
            <div><span class="text-gray-500">${isEn ? 'Pattern:' : '统帅格局:'}</span> <b class="text-amber-900 ml-0.5 truncate">${domPat}</b></div>
            <div><span class="text-gray-500">${isEn ? 'Key Medicine:' : '相神大药:'}</span> <b class="text-red-900 ml-0.5">${keyMedicineText}</b></div>
          </div>

          <!-- Module 1: Career Calling -->
          <div class="p-2.5 bg-amber-50/70 rounded border border-amber-900/30 text-xs space-y-1 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950 border-b border-amber-900/20 pb-1">
              <span class="flex items-center gap-1.5"><span class="text-sm">🎯</span><span>${isEn ? 'I. Career Calling & Optimal Ecosystem (Career Trajectory)' : '一、事业立身与天命职能生态位（事业怎么样）'}</span></span>
              <span class="text-[10px] px-2 py-0.2 rounded bg-emerald-200/80 text-emerald-950 font-bold border border-emerald-600/40 font-mono">
                ${arch1.icon} ${isEn ? arch1.nameEn.split('(')[0].trim() : arch1.nameZh.split('（')[0].trim()} (${arch1.fitScore}${isEn ? '/100' : '分'})
              </span>
            </div>
            <p class="text-[10.5px] text-gray-800 leading-tight"><b>${isEn ? 'Core Advantage: ' : '核心天赋优势：'}</b>${isEn ? arch1.coreStrengthsEn : arch1.coreStrengthsZh}</p>
            <p class="text-[10.5px] text-amber-900 leading-tight"><b>${isEn ? 'Breakthrough Tactic: ' : '向下突破与战略战法：'}</b>${isEn ? arch1.breakthroughTacticEn : arch1.breakthroughTacticZh}</p>
            <p class="text-[10.5px] text-gray-700 leading-tight"><b>${isEn ? 'Managing Up & Colleagues: ' : '向上管理与职场沟通：'}</b>${isEn ? upwardRuleEn : upwardRuleZh}</p>
          </div>

          <!-- Module 2: Wealth & Capital -->
          <div class="p-2.5 bg-amber-50/70 rounded border border-amber-900/30 text-xs space-y-1 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950 border-b border-amber-900/20 pb-1">
              <span class="flex items-center gap-1.5"><span class="text-sm">💰</span><span>${isEn ? 'II. Wealth Engine & Capital Preservation (Wealth Outlook)' : '二、金玉资财与守财防漏红线（财富怎么样）'}</span></span>
              <span class="text-[10px] px-2 py-0.2 rounded bg-amber-200/80 text-amber-950 font-bold border border-amber-600/40 font-mono">
                ${isEn ? `Direct ${crTt ? crTt.directWealthScore : 80} / Indirect ${crTt ? crTt.indirectWealthScore : 75}` : `正财${crTt ? crTt.directWealthScore : 80}分 · 偏财${crTt ? crTt.indirectWealthScore : 75}分`}
              </span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-[10px] text-gray-800 pt-0.5">
              <div class="p-1.5 bg-white/60 rounded border border-amber-900/10">
                <b>${isEn ? 'Base Salary & Promotion: ' : '正财薪酬与现金流：'}</b>
                <span class="leading-tight">${directWealthText}</span>
              </div>
              <div class="p-1.5 bg-white/60 rounded border border-amber-900/10">
                <b>${isEn ? 'Side Ventures & Investments: ' : '偏财副业与投资红利：'}</b>
                <span class="leading-tight">${indirectWealthText}</span>
              </div>
            </div>
            <p class="text-[10px] text-rose-900 leading-tight"><b>${isEn ? 'Anti-Leakage Rule: ' : '守财防漏戒律：'}</b>${isEn ? 'Guard liquidity reserves with discipline. Strictly avoid unhedged high-leverage gambles, unvetted angel partnerships, or cosigning personal loans to prevent sudden wealth plunder.' : '严守现金储备安全垫，严禁高杠杆投机与无担保民间借贷，防范“比劫夺财”，将流动资本牢固转化为核心资产。'}</p>
          </div>

          <!-- Module 3: Spouse & Marriage -->
          <div class="p-2.5 bg-amber-50/70 rounded border border-amber-900/30 text-xs space-y-1 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950 border-b border-amber-900/20 pb-1">
              <span class="flex items-center gap-1.5"><span class="text-sm">🛡️</span><span>${isEn ? 'III. Spouse & Marriage Palace (Domestic Breakwater Ballast)' : '三、配偶家庭与后方压舱石（配偶·老婆怎么样）'}</span></span>
              <span class="text-[10px] px-2 py-0.2 rounded bg-rose-200/80 text-rose-950 font-bold border border-rose-600/40 font-mono">
                ${isEn ? `Day Branch [${spBranchEn}] · ${spArch}` : `日支坐【${spBranch}】· ${spArch}`}
              </span>
            </div>
            <p class="text-[10.5px] text-gray-800 leading-tight"><b>${isEn ? 'Spouse Archetype & Demeanour: ' : '配偶心性与气质风范：'}</b>${spDemeanour}</p>
            <p class="text-[10.5px] text-amber-900 leading-tight"><b>${isEn ? 'Domestic Breakwater Ballast: ' : '防波堤与财富护航功能：'}</b>${isEn ? 'The partner serves as your ultimate financial breakwater and emotional ballast—anchoring family assets, offering sound rational counsel during crises, and mitigating reckless extremes.' : '配偶不仅在暗中稳住财富底盘，更能在命主锋芒过盛或外部突遭狂风暴雨时提供最坚不可摧的理智庇护与精神压舱石。'}</p>
            <p class="text-[10px] text-gray-700 leading-tight"><b>${isEn ? 'Harmony Mandate: ' : '相处共融之道：'}</b>${spRelationship}</p>
          </div>

          <!-- Module 4: Imperial Decrees -->
          <div class="p-2 bg-amber-100/60 rounded border border-amber-900/40 text-xs space-y-0.5 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950">
              <span class="flex items-center gap-1"><span class="text-sm">👑</span><span>${isEn ? 'IV. Imperial Decrees · Three Golden Rules for Life' : '四、钦天监朱批 · 终身不败立身三铁律'}</span></span>
              <span class="imperial-seal-stamp text-[9px] py-0.2 px-1.5">${isEn ? 'IMPERIAL DECREE' : '朱批定命'}</span>
            </div>
            <div class="space-y-0.5 text-[10px] text-amber-950 leading-tight pt-0.5">
              <p>${rule1}</p>
              <p>${rule2}</p>
              <p>${rule3}</p>
            </div>
          </div>

          <!-- Footer -->
          <div class="flex items-center justify-between border-t border-amber-900/40 pt-1 text-[10px] text-gray-500 font-mono">
            <span>${isEn ? 'Imperial Astrometry Bureau · Master Executive Summary' : '大明/大清钦天监 · 卷首 终身统览'}</span>
            <span>Page 1 / 7</span>
          </div>
        </div>
      </div>

      <!-- Page 2: Cover & Four Pillars Grand Altar -->
      <div class="imperial-page relative">
        <div class="imperial-thread-spine">
          <div class="thread-eyelet eyelet-1"></div>
          <div class="thread-eyelet eyelet-2"></div>
          <div class="thread-eyelet eyelet-3"></div>
          <div class="thread-eyelet eyelet-4"></div>
        </div>
        <div class="imperial-watermark">${watermarkText}</div>

        <div class="imperial-frame flex flex-col justify-between p-6">
          <div class="text-center space-y-2 border-b-2 border-amber-900/60 pb-4">
            <div class="flex items-center justify-between">
              <span class="imperial-seal-stamp">${isEn ? 'IMPERIAL SEAL' : '钦天监正堂之宝'}</span>
              <span class="text-[11px] text-gray-600 font-mono">${isEn ? 'CLASSIFIED ARCHIVE' : '天机御览 · 卷一图谱'}</span>
            </div>
            <h1 class="text-2xl font-black font-serif-sc text-amber-900 tracking-wider">${mainTitle}</h1>
            <p class="text-xs text-gray-700 font-serif-sc">${isEn ? 'Volume I · Sacred Four Pillars & Five-Element Architecture' : '卷一 · 四柱本命神机图谱与五行气象'}</p>
          </div>

          <div class="grid grid-cols-2 gap-4 text-xs bg-amber-50/60 p-3 rounded border border-amber-900/30 my-3">
            <div>
              <span class="text-gray-500">${isEn ? 'Subject:' : '本命造化:'}</span>
              <span class="font-bold text-gray-900 ml-1 font-mono">${genderStr}</span>
            </div>
            <div>
              <span class="text-gray-500">${isEn ? 'Solar Date:' : '阳历生辰:'}</span>
              <span class="font-bold text-gray-900 ml-1 font-mono">${dateStr}</span>
            </div>
            <div>
              <span class="text-gray-500">${isEn ? 'Day Master & Vigor:' : '日元本命与旺衰:'}</span>
              <span class="font-bold text-amber-900 ml-1">${isEn ? `${I18N.getStem(bazi.dayMaster, 'en')} (${portrait.vigor.status})` : `${bazi.dayMaster} (${portrait.vigor.status})`}</span>
            </div>
            <div>
              <span class="text-gray-500">${isEn ? 'Dominant Pattern:' : '核心统帅格局:'}</span>
              <span class="font-bold text-amber-900 ml-1">${domPat} (${domTier})</span>
            </div>
          </div>

          <div class="space-y-1 my-2">
            <h2 class="text-xs font-bold text-amber-900 tracking-wider">${isEn ? 'FOUR PILLARS SACRED GRID' : '四柱本命神机图谱'}</h2>
            <table class="w-full text-xs text-center border-collapse border border-amber-900/40">
              <thead class="bg-amber-100/70 text-amber-950 font-bold">
                <tr>
                  <th class="p-1.5 border border-amber-900/30">${isEn ? 'Pillar' : '柱位'}</th>
                  <th class="p-1.5 border border-amber-900/30">${isEn ? 'Year' : '年柱 (根基)'}</th>
                  <th class="p-1.5 border border-amber-900/30">${isEn ? 'Month' : '月柱 (提纲)'}</th>
                  <th class="p-1.5 border border-amber-900/30">${isEn ? 'Day' : '日柱 (本命元神)'}</th>
                  <th class="p-1.5 border border-amber-900/30">${isEn ? 'Hour' : '时柱 (归宿愿景)'}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-amber-900/30 font-serif-sc">
                <tr>
                  <td class="p-1 font-bold bg-amber-50/50">${isEn ? 'Ten God' : '主气十神'}</td>
                  <td class="p-1">${isEn ? I18N.getGod(p.year.stemGod, 'en') : p.year.stemGod}</td>
                  <td class="p-1">${isEn ? I18N.getGod(p.month.stemGod, 'en') : p.month.stemGod}</td>
                  <td class="p-1 font-bold text-amber-900">${isEn ? 'Day Master' : '本命元神'}</td>
                  <td class="p-1">${isEn ? I18N.getGod(p.hour.stemGod, 'en') : p.hour.stemGod}</td>
                </tr>
                <tr class="text-base font-bold bg-amber-50/80">
                  <td class="p-2 font-sans text-xs">${isEn ? 'Gan-Zhi' : '天干地支'}</td>
                  <td class="p-2 text-amber-900">${isEn ? I18N.getStem(p.year.stem, 'en').split(' ')[0] + '-' + I18N.getBranch(p.year.branch, 'en').split(' ')[0] : p.year.text}</td>
                  <td class="p-2 text-amber-900">${isEn ? I18N.getStem(p.month.stem, 'en').split(' ')[0] + '-' + I18N.getBranch(p.month.branch, 'en').split(' ')[0] : p.month.text}</td>
                  <td class="p-2 text-red-900 font-black">${isEn ? I18N.getStem(p.day.stem, 'en').split(' ')[0] + '-' + I18N.getBranch(p.day.branch, 'en').split(' ')[0] : p.day.text}</td>
                  <td class="p-2 text-amber-900">${isEn ? I18N.getStem(p.hour.stem, 'en').split(' ')[0] + '-' + I18N.getBranch(p.hour.branch, 'en').split(' ')[0] : p.hour.text}</td>
                </tr>
                <tr>
                  <td class="p-1 font-bold bg-amber-50/50">${isEn ? 'Hidden Stems' : '地支藏干'}</td>
                  <td class="p-1">${(p.year.hidden || []).map(h => isEn ? I18N.getStem(h.stem, 'en').split(' ')[0] : h.stem).join(isEn ? ', ' : ' ')}</td>
                  <td class="p-1">${(p.month.hidden || []).map(h => isEn ? I18N.getStem(h.stem, 'en').split(' ')[0] : h.stem).join(isEn ? ', ' : ' ')}</td>
                  <td class="p-1">${(p.day.hidden || []).map(h => isEn ? I18N.getStem(h.stem, 'en').split(' ')[0] : h.stem).join(isEn ? ', ' : ' ')}</td>
                  <td class="p-1">${(p.hour.hidden || []).map(h => isEn ? I18N.getStem(h.stem, 'en').split(' ')[0] : h.stem).join(isEn ? ', ' : ' ')}</td>
                </tr>
                <tr>
                  <td class="p-1 font-bold bg-amber-50/50">${isEn ? 'Na-Yin Element' : '纳音五行'}</td>
                  <td class="p-1">${isEn ? I18N.getNaYin(p.year.naYin, 'en') : p.year.naYin}</td>
                  <td class="p-1">${isEn ? I18N.getNaYin(p.month.naYin, 'en') : p.month.naYin}</td>
                  <td class="p-1">${isEn ? I18N.getNaYin(p.day.naYin, 'en') : p.day.naYin}</td>
                  <td class="p-1">${isEn ? I18N.getNaYin(p.hour.naYin, 'en') : p.hour.naYin}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-3 bg-amber-50/80 rounded border border-amber-900/30 text-xs space-y-1.5">
            <div class="flex items-center justify-between font-bold text-amber-950">
              <span>${isEn ? 'Five Elements Dynamic Balance:' : '五行能量分布与气机平衡:'}</span>
              <span class="font-mono">${elSummaryStr}</span>
            </div>
            <p class="text-gray-800 leading-relaxed font-serif-sc">${portrait.patterns[0].gradeEvaluation ? (isEn ? (portrait.patterns[0].gradeEvaluation.strengthsAndFlawsEn || portrait.patterns[0].gradeEvaluation.strengthsAndFlaws) : portrait.patterns[0].gradeEvaluation.strengthsAndFlaws) : ''}</p>
          </div>

          <div class="flex items-center justify-between border-t border-amber-900/40 pt-2 text-[10px] text-gray-500 font-mono">
            <span>${isEn ? 'Imperial Astrometry Bureau · Section 1' : '大明/大清钦天监 · 卷一'}</span>
            <span>Page 2 / 7</span>
          </div>
        </div>
      </div>

      <!-- Page 2: Volume I - 80/20 Grand Picture Pareto Strategy -->
      <div class="imperial-page relative">
        <div class="imperial-thread-spine">
          <div class="thread-eyelet eyelet-1"></div>
          <div class="thread-eyelet eyelet-2"></div>
          <div class="thread-eyelet eyelet-3"></div>
          <div class="thread-eyelet eyelet-4"></div>
        </div>
        <div class="imperial-watermark">${watermarkText}</div>

        <div class="imperial-frame flex flex-col justify-between p-6 space-y-3">
          <div class="border-b-2 border-amber-900/60 pb-2 flex items-center justify-between">
            <h2 class="text-base font-bold font-serif-sc text-amber-900">${isEn ? 'Volume I: 80/20 Grand Picture Pareto Strategy' : '卷一 · 八经全相 80/20 关键枢纽战略战法 (立命定调与胜负大药)'}</h2>
            <span class="imperial-seal-stamp">${isEn ? 'STRATEGIC PIVOT' : '全盘胜负手'}</span>
          </div>

          <!-- Outline of Grand Picture -->
          <div class="p-3 bg-amber-50/60 rounded border border-amber-900/30 space-y-1 text-xs text-gray-800 font-serif-sc">
            <h3 class="font-bold text-amber-950">${isEn ? 'I. Grand Archetype & Sovereign Blueprint' : '一、命盘大局总相与生命大纲'}</h3>
            <p class="leading-relaxed">${isEn ? (gp.thesisEn || gp.thesis || '') : (gp.thesisZh || gp.thesis || '')}</p>
          </div>

          <!-- Strategic Pivot / Medicine of Chart -->
          <div class="p-3 bg-amber-50/60 rounded border border-amber-900/30 space-y-1 text-xs text-gray-800 font-serif-sc">
            <h3 class="font-bold text-amber-950">${isEn ? 'II. Strategic Breakthrough & 20% Pareto Lever' : '二、生杀破局与战略胜负手 (20% 关键抓手)'}</h3>
            <p class="leading-relaxed">${isEn ? (gp.campaignEn || gp.campaign || '') : (gp.campaignZh || gp.campaign || '')}</p>
          </div>

          <!-- Spatial Environment Resonance -->
          <div class="p-3 bg-amber-50/60 rounded border border-amber-900/30 space-y-1 text-xs text-gray-800 font-serif-sc">
            <h3 class="font-bold text-amber-950">${isEn ? 'III. Era Dynamics & Spatial Resonance' : '三、时代大潮与物理空间地缘场能共振'}</h3>
            <p class="leading-relaxed">${isEn ? (gp.eraEn || gp.era || '') : (gp.eraZh || gp.era || '')}</p>
          </div>

          <!-- Lifelong 3 Cardinal Rules -->
          <div class="p-3 bg-amber-50/60 rounded border border-amber-900/30 space-y-1 text-xs text-gray-800 font-serif-sc">
            <h3 class="font-bold text-amber-950">${isEn ? 'IV. Three Lifelong Invariant Directives' : '四、立身处世终身三大铁律'}</h3>
            <div class="space-y-1">
              ${((isEn ? (gp.rulesEn || gp.rules) : (gp.rulesZh || gp.rules)) || []).map((r, idx) => `
                <div class="flex gap-1.5">
                  <span class="font-bold text-amber-900">${idx + 1}.</span>
                  <span><b>${r.label || r.labelZh || ''}</b>: ${r.desc || r.descZh || ''}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="flex items-center justify-between border-t border-amber-900/40 pt-2 text-[10px] text-gray-500 font-mono">
            <span>${isEn ? 'Imperial Astrometry Bureau · Section 2' : '大明/大清钦天监 · 卷二'}</span>
            <span>Page 3 / 7</span>
          </div>
        </div>
      </div>

      <!-- Page 4: Volume III - 4D Kinship Profiles -->
      <div class="imperial-page relative">
        <div class="imperial-thread-spine">
          <div class="thread-eyelet eyelet-1"></div>
          <div class="thread-eyelet eyelet-2"></div>
          <div class="thread-eyelet eyelet-3"></div>
          <div class="thread-eyelet eyelet-4"></div>
        </div>
        <div class="imperial-watermark">${watermarkText}</div>

        <div class="imperial-frame flex flex-col justify-between p-6 space-y-3">
          <div class="border-b-2 border-amber-900/60 pb-2 flex items-center justify-between">
            <h2 class="text-base font-bold font-serif-sc text-amber-900">${isEn ? 'Volume III: 4D Kinship Holographic Depth Profiles' : '卷三 · 六亲全息深度侧写 (配偶 · 子女 · 父母)'}</h2>
            <span class="imperial-seal-stamp">${isEn ? 'KINSHIP HARMONY' : '和合天伦'}</span>
          </div>

          <!-- Spouse Profile -->
          <div class="p-3 bg-amber-50/60 rounded border border-amber-900/30 space-y-1.5 text-xs text-gray-800 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950 border-b border-amber-900/20 pb-1">
              <span>${isEn ? 'Spouse & Marriage Palace Depth Hologram' : '一、配偶与夫妻宫深度侧写 (Spouse Profile)'}</span>
              <span class="text-rose-800 font-mono">${isEn ? pc.spouse.archetype : pc.spouse.archetypeZh}</span>
            </div>
            <p><b>${isEn ? 'Energy Baseline:' : '能量基石:'}</b> ${isEn ? pc.spouse.energy : pc.spouse.energyZh}</p>
            <p><b>${isEn ? 'Temperament & Demeanour:' : '性格与气质:'}</b> ${isEn ? pc.spouse.demeanour : pc.spouse.demeanourZh}</p>
            <p><b>${isEn ? 'Relationship Dynamics:' : '相处共融:'}</b> ${isEn ? pc.spouse.relationship : pc.spouse.relationshipZh}</p>
          </div>

          <!-- Children Profile -->
          <div class="p-3 bg-amber-50/60 rounded border border-amber-900/30 space-y-1.5 text-xs text-gray-800 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950 border-b border-amber-900/20 pb-1">
              <span>${isEn ? 'Children & Legacy Depth Hologram' : '二、子女人才与晚景传承侧写 (Children Profile)'}</span>
              <span class="text-emerald-800 font-mono">${isEn ? pc.children.archetype : pc.children.archetypeZh}</span>
            </div>
            <p><b>${isEn ? 'Energy Baseline:' : '能量基石:'}</b> ${isEn ? pc.children.energy : pc.children.energyZh}</p>
            <p><b>${isEn ? 'Temperament & Demeanour:' : '气质与才干:'}</b> ${isEn ? pc.children.demeanour : pc.children.demeanourZh}</p>
            <p><b>${isEn ? 'Nurturing Harmony:' : '托举相处:'}</b> ${isEn ? pc.children.relationship : pc.children.relationshipZh}</p>
          </div>

          <!-- Parents Profile -->
          <div class="p-3 bg-amber-50/60 rounded border border-amber-900/30 space-y-1.5 text-xs text-gray-800 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950 border-b border-amber-900/20 pb-1">
              <span>${isEn ? 'Ancestral Heritage & Parents Depth Hologram' : '三、祖荫福泽与父母渊源侧写 (Parents Profile)'}</span>
              <span class="text-indigo-800 font-mono">${isEn ? (pc.parents.archetype || pc.parents.type || pc.parents.typeEn || 'Ancestral Heritage') : (pc.parents.archetypeZh || pc.parents.typeZh || pc.parents.type || '祖德延绵')}</span>
            </div>
            <p><b>${isEn ? 'Energy Baseline:' : '能量基石:'}</b> ${isEn ? pc.parents.energy : pc.parents.energyZh}</p>
            <p><b>${isEn ? 'Temperament & Demeanour:' : '家风气质:'}</b> ${isEn ? pc.parents.demeanour : pc.parents.demeanourZh}</p>
            <p><b>${isEn ? 'Ancestral Connection:' : '代际互动:'}</b> ${isEn ? pc.parents.relationship : pc.parents.relationshipZh}</p>
          </div>

          <div class="flex items-center justify-between border-t border-amber-900/40 pt-2 text-[10px] text-gray-500 font-mono">
            <span>${isEn ? 'Imperial Astrometry Bureau · Section 3' : '大明/大清钦天监 · 卷三'}</span>
            <span>Page 4 / 7</span>
          </div>
        </div>
      </div>

      <!-- Page 5: Volume IV - Zen & Dao Trinity Wisdom -->
      <div class="imperial-page relative">
        <div class="imperial-thread-spine">
          <div class="thread-eyelet eyelet-1"></div>
          <div class="thread-eyelet eyelet-2"></div>
          <div class="thread-eyelet eyelet-3"></div>
          <div class="thread-eyelet eyelet-4"></div>
        </div>
        <div class="imperial-watermark">${watermarkText}</div>

        <div class="imperial-frame flex flex-col justify-between p-6 space-y-3">
          <div class="border-b-2 border-amber-900/60 pb-2 flex items-center justify-between">
            <h2 class="text-base font-bold font-serif-sc text-amber-900">${isEn ? 'Volume IV: Zen & Dao Trinity Wisdom & Ultimate Liberation' : '卷四 · 禅道心智与传世解脱方策 (金刚经 · 坛经 · 庄子)'}</h2>
            <span class="imperial-seal-stamp">${isEn ? 'LIBERATION WISDOM' : '顿悟解脱'}</span>
          </div>

          <div class="space-y-3 text-xs leading-relaxed font-serif-sc text-gray-800">
            <!-- Diamond Sutra -->
            <div class="p-3 bg-amber-50/60 rounded border-l-4 border-amber-700 space-y-1">
              <h3 class="font-bold text-amber-950">${isEn ? zen.diamond.title : zen.diamond.titleZh}</h3>
              <p class="font-bold text-red-900">${isEn ? zen.diamond.mantra : zen.diamond.mantraZh}</p>
              <p>${isEn ? zen.diamond.insight : zen.diamond.insightZh}</p>
              <p class="text-gray-700 italic">${isEn ? zen.diamond.quotes[0].verse : zen.diamond.quotes[0].verseZh} —— ${isEn ? zen.diamond.quotes[0].source : zen.diamond.quotes[0].sourceZh}</p>
            </div>

            <!-- Platform Sutra -->
            <div class="p-3 bg-amber-50/60 rounded border-l-4 border-purple-700 space-y-1">
              <h3 class="font-bold text-purple-950">${isEn ? zen.platform.title : zen.platform.titleZh}</h3>
              <p class="font-bold text-purple-900">${isEn ? zen.platform.mantra : zen.platform.mantraZh}</p>
              <p>${isEn ? zen.platform.insight : zen.platform.insightZh}</p>
              <p class="text-gray-700 italic">${isEn ? zen.platform.quotes[0].verse : zen.platform.quotes[0].verseZh} —— ${isEn ? zen.platform.quotes[0].source : zen.platform.quotes[0].sourceZh}</p>
            </div>

            <!-- Zhuangzi -->
            <div class="p-3 bg-amber-50/60 rounded border-l-4 border-teal-700 space-y-1">
              <h3 class="font-bold text-teal-950">${isEn ? zen.zhuangzi.title : zen.zhuangzi.titleZh}</h3>
              <p class="font-bold text-teal-900">${isEn ? zen.zhuangzi.mantra : zen.zhuangzi.mantraZh}</p>
              <p>${isEn ? zen.zhuangzi.insight : zen.zhuangzi.insightZh}</p>
              <p class="text-gray-700 italic">${isEn ? zen.zhuangzi.quotes[0].verse : zen.zhuangzi.quotes[0].verseZh} —— ${isEn ? zen.zhuangzi.quotes[0].source : zen.zhuangzi.quotes[0].sourceZh}</p>
            </div>
          </div>

          <!-- Thoughtful side-note on Classical preservation and personal meditation -->
          <div class="p-2 rounded bg-amber-50/70 border border-amber-900/30 text-[10px] text-gray-700 italic font-serif-sc">
            <span>${reflectionPreservationNote}</span>
          </div>

          <div class="flex items-center justify-between border-t-2 border-amber-900/60 pt-3">
            <div class="space-y-0.5 text-[11px] text-gray-700 font-serif-sc">
              <p><b>${isEn ? 'Certification Authority:' : '钦定勘验印鉴:'}</b> ${isEn ? 'Imperial Astronomical Bureau Archive (Qin Tian Jian)' : '钦天监正堂掌事 · 钦赐天机密卷'}</p>
              <p>${isEn ? 'This dossier is mathematically generated from orthodox canonical algorithms.' : '本战报依正统八典算法严密考订，纯正传承，万金不易。'}</p>
            </div>
            <div class="imperial-seal-stamp text-sm py-1.5 px-3">
              ${isEn ? 'IMPERIAL SEAL OF ASTRONOMY' : '钦天监正堂之宝'}
            </div>
          </div>

          <div class="flex items-center justify-between border-t border-amber-900/40 pt-1 text-[10px] text-gray-500 font-mono">
            <span>${isEn ? 'Imperial Astrometry Bureau · Section 4' : '大明/大清钦天监 · 卷四'}</span>
            <span>Page 5 / 7</span>
          </div>
        </div>
      </div>

      <!-- Page 6: Volume V - Decennial Trajectory & 14-Character Dynamic Energy Synthesis -->
      <div class="imperial-page relative">
        <div class="imperial-thread-spine">
          <div class="thread-eyelet eyelet-1"></div>
          <div class="thread-eyelet eyelet-2"></div>
          <div class="thread-eyelet eyelet-3"></div>
          <div class="thread-eyelet eyelet-4"></div>
        </div>
        <div class="imperial-watermark">${watermarkText}</div>

        <div class="imperial-frame flex flex-col justify-between p-6 space-y-3">
          <div class="border-b-2 border-amber-900/60 pb-2 flex items-center justify-between">
            <h2 class="text-base font-bold font-serif-sc text-amber-900">${isEn ? 'Volume V: Decennial Trajectory & 14-Character Energy Synthesis' : '卷五 · 大运年景大势与十四字全景气机集成 (时运交感与时空场能)'}</h2>
            <span class="imperial-seal-stamp">${isEn ? 'DYNAMIC RESONANCE' : '时运合一'}</span>
          </div>

          <!-- Transit Luck Coordinate -->
          <div class="grid grid-cols-2 gap-3 text-xs bg-amber-50/60 p-2.5 rounded border border-amber-900/30 font-serif-sc">
            <div>
              <span class="text-gray-500">${isEn ? 'Active Decade (10-Yr Pillar):' : '当运大运 (十年提纲):'}</span>
              <div class="font-bold text-amber-900 font-mono text-[12.5px] mt-0.5">${decadePillarStr}</div>
              <div class="text-[10px] text-gray-600 font-mono">${isEn ? 'Na-Yin:' : '纳音五行:'} ${decadeNaYinStr}</div>
            </div>
            <div>
              <span class="text-gray-500">${isEn ? 'Annual Mandate (Tai Sui):' : '当值流年 (太岁统辖):'}</span>
              <div class="font-bold text-amber-900 font-mono text-[12.5px] mt-0.5">${annualPillarStr}</div>
              <div class="text-[10px] text-gray-600 font-mono">${isEn ? 'Na-Yin:' : '纳音五行:'} ${annualNaYinStr}</div>
            </div>
          </div>

          <!-- 14-Character Multi-Dimensional Matrix Table -->
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <h3 class="text-xs font-bold text-amber-900 tracking-wider">${isEn ? '14-CHARACTER HOLOGRAPHIC MATRIX (NATAL 8 + TRANSIT 6)' : '十四字全相矩阵 (原局八字 + 岁运六字)'}</h3>
              <span class="imperial-seal-stamp text-[10px] py-0.5 px-2">${isEn ? dmState.badgeEn : dmState.badgeZh}</span>
            </div>
            <table class="w-full text-xs text-center border-collapse border border-amber-900/40">
              <thead class="bg-amber-100/70 text-amber-950 font-bold">
                <tr>
                  <th class="p-1 border border-amber-900/30">${isEn ? 'Natal Yr' : '原局年柱'}</th>
                  <th class="p-1 border border-amber-900/30">${isEn ? 'Natal Mo' : '原局月令'}</th>
                  <th class="p-1 border border-amber-900/30">${isEn ? 'Natal Day' : '本命日元'}</th>
                  <th class="p-1 border border-amber-900/30">${isEn ? 'Natal Hr' : '原局时柱'}</th>
                  <th class="p-1 border border-amber-900/30 bg-amber-200/50 text-amber-900">${isEn ? 'Transit Dec' : '当行大运'}</th>
                  <th class="p-1 border border-amber-900/30 bg-amber-200/50 text-amber-900">${isEn ? 'Transit Ann' : '流年太岁'}</th>
                  <th class="p-1 border border-amber-900/30 bg-amber-200/50 text-amber-900">${isEn ? 'Transit Mo' : '流月建星'}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-amber-900/30 font-serif-sc">
                <!-- Stems -->
                <tr class="bg-amber-50/40">
                  ${[0, 2, 4, 6, 8, 10, 12].map(idx => {
                    const c = charsList[idx] || {};
                    const cChar = isEn ? (c.charEn || c.char || '--') : (c.char || '--');
                    const cGod = isEn ? (c.tenGodEn || c.tenGod || '--') : (c.tenGod || '--');
                    const cEl = isEn ? (c.elementEn || c.el || '--') : (c.el || '--');
                    const isDM = (idx === 4);
                    return `
                      <td class="p-1.5 ${isDM ? 'bg-amber-100/80 font-bold' : ''}">
                        <div class="text-[10px] text-gray-500 font-mono">${cGod}</div>
                        <div class="text-base font-bold ${isDM ? 'text-red-900' : 'text-amber-900'}">${cChar}</div>
                        <div class="text-[9.5px] text-gray-600 font-mono">${cEl}</div>
                      </td>
                    `;
                  }).join('')}
                </tr>
                <!-- Branches -->
                <tr class="bg-amber-50/80">
                  ${[1, 3, 5, 7, 9, 11, 13].map(idx => {
                    const c = charsList[idx] || {};
                    const cChar = isEn ? (c.charEn || c.char || '--') : (c.char || '--');
                    const cGod = isEn ? (c.tenGodEn || c.tenGod || '--') : (c.tenGod || '--');
                    const cEl = isEn ? (c.elementEn || c.el || '--') : (c.el || '--');
                    return `
                      <td class="p-1.5">
                        <div class="text-[10px] text-gray-500 font-mono">${cGod}</div>
                        <div class="text-base font-bold text-amber-900">${cChar}</div>
                        <div class="text-[9.5px] text-gray-600 font-mono">${cEl}</div>
                      </td>
                    `;
                  }).join('')}
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Dynamic 5-Element Share & Dominant Force -->
          <div class="p-2.5 bg-amber-50/80 rounded border border-amber-900/30 text-xs space-y-1 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950">
              <span>${isEn ? 'Dynamic 5-Element Distribution (14 Characters):' : '十四字全场五行能量权重与气机统帅:'}</span>
              <span class="font-mono text-[11px]">${elDistSummaryStr}</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-gray-800">
              <span><b>${isEn ? 'Dominant Force:' : '统帅五行:'}</b> ${isEn ? domEl.elementEn : domEl.element} (${domEl.percentage}%) · ${isEn ? domEl.roleEn : domEl.roleZh}</span>
              <span class="font-mono"><b>${isEn ? 'Support vs Drain:' : '扶抑比率:'}</b> ${dmState.supportCount} : ${dmState.drainCount} (${Math.round(dmState.dynamicRatio * 100)}%)</span>
            </div>
            <p class="text-[11.5px] text-gray-700 leading-relaxed">${isEn ? dmState.statusEn : dmState.statusZh}</p>
          </div>

          <!-- Tactical Strategic Focus & Action Directives -->
          <div class="p-3 bg-amber-50/60 rounded border-l-4 border-amber-800 space-y-1.5 text-xs text-gray-800 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950">
              <span class="text-xs font-bold">${isEn ? interp.titleEn : interp.titleZh}</span>
              <span class="text-[11px] text-amber-900 font-mono">${isEn ? dmState.natalStrengthEn : dmState.natalStrength}</span>
            </div>
            <p><b>${isEn ? 'Core Strategic Focus:' : '核心战略攻守定调:'}</b> ${isEn ? interp.strategicFocusEn : interp.strategicFocusZh}</p>
            <div class="space-y-1">
              <b>${isEn ? 'Tactical Action Directives:' : '立命行事三策:'}</b>
              ${(isEn ? interp.actionDirectivesEn : interp.actionDirectivesZh).slice(0, 3).map((act, idx) => `
                <div class="flex gap-1.5 ml-1">
                  <span class="font-bold text-amber-900">${idx + 1}.</span>
                  <span>${act}</span>
                </div>
              `).join('')}
            </div>
            <p><b>${isEn ? 'Somatic Tuning & Rhythm:' : '身心调和与气血调摄:'}</b> ${isEn ? interp.physicalTuningEn : interp.physicalTuningZh}</p>
          </div>

          <!-- Canonical Preservation Reflection Note -->
          <div class="p-2 rounded bg-amber-50/50 border border-amber-900/30 text-[10px] text-gray-600 italic font-serif-sc">
            <span>${reflectionPreservationNote}</span>
          </div>

          <!-- Verification Stamp & Complete Footer -->
          <div class="flex items-center justify-between border-t border-amber-900/40 pt-1 text-[10px] text-gray-500 font-mono">
            <span>${isEn ? 'Imperial Astrometry Bureau · Section 5' : '大明/大清钦天监 · 卷五'}</span>
            <span>Page 6 / 7</span>
          </div>
        </div>
      </div>

      <!-- Page 7: Volume VI - Career & Wealth Trajectory -->
      <div class="imperial-page relative">
        <div class="imperial-thread-spine">
          <div class="thread-eyelet eyelet-1"></div>
          <div class="thread-eyelet eyelet-2"></div>
          <div class="thread-eyelet eyelet-3"></div>
          <div class="thread-eyelet eyelet-4"></div>
        </div>
        <div class="imperial-watermark">${watermarkText}</div>

        <div class="imperial-frame flex flex-col justify-between p-6 space-y-2.5">
          <div class="border-b-2 border-amber-900/60 pb-2 flex items-center justify-between">
            <h2 class="text-base font-bold font-serif-sc text-amber-900">${isEn ? 'Volume VI: Career Breakthrough & Wealth Trajectory' : '卷六 · 职场打工人破局与财运事业全相推演 (向上管理 · 同僚防波堤 · 天命生态位 · 岁运财帛)'}</h2>
            <span class="imperial-seal-stamp">${isEn ? 'CAREER & WEALTH' : '天命经纶'}</span>
          </div>

          <!-- Section 1: Managing Upward & Superior Alignment -->
          <div class="p-3 bg-amber-50/70 rounded border border-amber-900/30 text-xs space-y-1.5 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950 border-b border-amber-900/20 pb-1">
              <span class="flex items-center gap-1"><span>👑</span><span>${isEn ? 'I. Managing Upward & Superior Alignment Directive' : '一、向上管理心智与领导沟通破局准则'}</span></span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-amber-200/60 text-amber-900 font-mono">${isEn ? 'Upward Alignment' : '闭环对齐'}</span>
            </div>
            <p class="text-[11px] text-gray-800 leading-relaxed">${isEn ? (crMu ? crMu.styleEn : '') : (crMu ? crMu.styleZh : '')}</p>
            <div class="p-2 bg-amber-100/60 rounded text-[10.5px] text-amber-950 leading-relaxed">
              <b>${isEn ? 'Core De-escalation Directive: ' : '核心避坑法门：'}</b>${isEn ? (crMu ? crMu.avoidOffendingEn : '') : (crMu ? crMu.avoidOffendingZh : '')}
            </div>
          </div>

          <!-- Section 2: Lateral Peer Collaboration & Attribution Firewalls -->
          <div class="p-3 bg-amber-50/70 rounded border border-amber-900/30 text-xs space-y-1.5 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950 border-b border-amber-900/20 pb-1">
              <span class="flex items-center gap-1"><span>🤝</span><span>${isEn ? 'II. Peer Dynamics & Three Indispensable Firewalls' : '二、同僚横向协作与三大防抢功硬核防火墙'}</span></span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-rose-200/60 text-rose-900 font-mono">${isEn ? 'Lateral Defense' : '同僚护城河'}</span>
            </div>
            <p class="text-[11px] text-gray-800 leading-relaxed">${isEn ? (crPd ? crPd.peerAnalysisEn : '') : (crPd ? crPd.peerAnalysisZh : '')}</p>
            <div class="grid grid-cols-3 gap-2 pt-1 text-[10px]">
              ${(crPd && crPd.threeFirewalls ? crPd.threeFirewalls : []).map(fw => `
                <div class="p-1.5 rounded bg-amber-100/50 border border-amber-900/20 space-y-0.5">
                  <div class="font-bold text-amber-900 truncate">${isEn ? fw.titleEn.split('(')[0] : fw.titleZh.split('（')[0]}</div>
                  <p class="text-gray-700 leading-tight line-clamp-3">${isEn ? fw.descEn : fw.descZh}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Section 3: Precision Workplace Archetypes (Rank 1 & Rank 2) -->
          <div class="space-y-1.5 font-serif-sc">
            <div class="flex items-center justify-between">
              <h3 class="text-xs font-bold text-amber-900 tracking-wider">${isEn ? 'III. DESTINY CALLING & WORKPLACE ARCHETYPES (OPTIMAL & SECONDARY)' : '三、天命职能四大生态位精准定向（最适合 vs 其次适合）'}</h3>
              <span class="imperial-seal-stamp text-[10px] py-0.5 px-2">${isEn ? 'ECOSYSTEM' : '生态择位'}</span>
            </div>
            <div class="grid grid-cols-2 gap-3 text-xs">
              ${crArchs.slice(0, 2).map((arch, aIdx) => `
                <div class="p-2.5 rounded bg-amber-50/80 border ${aIdx === 0 ? 'border-amber-700' : 'border-amber-900/30'} space-y-1">
                  <div class="flex items-center justify-between border-b border-amber-900/20 pb-1">
                    <span class="font-bold text-amber-950 flex items-center gap-1 text-[11.5px]">
                      <span>${arch.icon}</span><span>${isEn ? arch.nameEn.split('(')[0] : arch.nameZh.split('（')[0]}</span>
                    </span>
                    <span class="text-[10px] px-1.5 py-0.2 rounded font-bold ${aIdx === 0 ? 'bg-emerald-200/80 text-emerald-950 border border-emerald-600/40' : 'bg-amber-200/80 text-amber-950 border border-amber-600/40'}">
                      ${isEn ? arch.grade.en : arch.grade.zh} (${arch.fitScore}${isEn ? '/100' : '分'})
                    </span>
                  </div>
                  <p class="text-[10.5px] text-gray-800 leading-tight"><b>${isEn ? 'Strengths: ' : '天赋优势：'}</b>${isEn ? arch.coreStrengthsEn : arch.coreStrengthsZh}</p>
                  <p class="text-[10.5px] text-amber-900 leading-tight"><b>${isEn ? 'Tactic: ' : '破局战法：'}</b>${isEn ? arch.breakthroughTacticEn : arch.breakthroughTacticZh}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Section 4: Timing Trajectory & Wealth Outlook -->
          <div class="p-2.5 bg-amber-50/70 rounded border border-amber-900/30 text-xs space-y-1 font-serif-sc">
            <div class="flex items-center justify-between font-bold text-amber-950">
              <span class="flex items-center gap-1"><span>⏳</span><span>${isEn ? 'IV. Wealth & Transit Hexagram Mandate' : '四、时空财运与周易值年卦经纶'}</span></span>
              <span class="font-mono text-[10.5px] text-amber-900">
                ${isEn ? (crTt && crTt.annualHex ? `Annual Hexagram: #${crTt.annualHex.number || ''} ${crTt.annualHex.nameEn || ''}` : '') : (crTt && crTt.annualHex ? `值年卦：第${crTt.annualHex.number || ''}卦 · ${crTt.annualHex.nameZh || ''}` : '')}
              </span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-[10.5px] text-gray-800 pt-0.5">
              <div class="p-1.5 bg-white/60 rounded border border-amber-900/10">
                <b>${isEn ? 'Direct Wealth (Career Salary): ' : '正财主业薪酬：'}</b>
                <span>${isEn ? (crTt ? (crTt.directWealthEvaluationEn || crTt.directWealthAnalysisEn || 'Direct wealth indicates stable core compensation.') : 'Direct wealth indicates stable core compensation.') : (crTt ? (crTt.directWealthEvaluationZh || crTt.directWealthAnalysisZh || '正财主业稳定，深耕岗位基本盘。') : '正财主业稳定，深耕岗位基本盘。')}</span>
              </div>
              <div class="p-1.5 bg-white/60 rounded border border-amber-900/10">
                <b>${isEn ? 'Indirect Wealth (Investments): ' : '偏财副业投资：'}</b>
                <span>${isEn ? (crTt ? (crTt.indirectWealthEvaluationEn || crTt.indirectWealthAnalysisEn || 'Indirect wealth advises defensive risk management.') : 'Indirect wealth advises defensive risk management.') : (crTt ? (crTt.indirectWealthEvaluationZh || crTt.indirectWealthAnalysisZh || '偏财副业适度进取，严防比劫夺财破耗。') : '偏财副业适度进取，严防比劫夺财破耗。')}</span>
              </div>
            </div>
            <p class="text-[10.5px] text-gray-700 leading-tight pt-0.5">
              <b>${isEn ? 'Annual Hexagram Guidance: ' : '值年卦指引：'}</b>${isEn ? (crTt ? (crTt.annualHexTacticEn || (crTt.annualHex && crTt.annualHex.decisionEn) || 'Align actions with timing and maintain strategic patience.') : 'Align actions with timing and maintain strategic patience.') : (crTt ? (crTt.annualHexTacticZh || (crTt.annualHex && crTt.annualHex.decisionZh) || '顺应天道节律，进退有据。') : '顺应天道节律，进退有据。')}
            </p>
          </div>

          <!-- Verification Stamp & Complete Footer -->
          <div class="flex items-center justify-between border-t border-amber-900/40 pt-1 text-[10px] text-gray-500 font-mono">
            <span>${isEn ? 'Imperial Astrometry Bureau · Section 6' : '大明/大清钦天监 · 卷六'}</span>
            <span>Page 7 / 7 · Complete Dossier</span>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // Feature 4: Offline-First PWA Controller & Service Worker
  // ==========================================================================
  // deferredPwaPrompt already declared at top

  function initPWA() {
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => {
          console.warn('Service Worker registration note:', err);
        });
      });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPwaPrompt = e;
      const btnInstall = document.getElementById('btnInstallPwa');
      if (btnInstall) {
        btnInstall.classList.remove('hidden');
        btnInstall.addEventListener('click', () => {
          if (deferredPwaPrompt) {
            deferredPwaPrompt.prompt();
            deferredPwaPrompt.userChoice.then(() => {
              deferredPwaPrompt = null;
              btnInstall.classList.add('hidden');
            });
          }
        });
      }
    });
  }

  // ==========================================================================
  // Feature 5: Visual Alchemy & Ambient Flux Particle Canvas
  // ==========================================================================
  function initVisualAlchemy() {
    if (typeof VisualAlchemy !== 'undefined') {
      VisualAlchemy.initParticleRings('elementFluxCanvas', currentBaziResult ? currentBaziResult.dayMasterElement : '木');
      const toggleFluxBtn = document.getElementById('btnToggleFlux');
      if (toggleFluxBtn) {
        toggleFluxBtn.addEventListener('click', () => {
          const isEnabled = VisualAlchemy.toggleFlux();
          toggleFluxBtn.style.opacity = isEnabled ? '1' : '0.5';
        });
      }
    }
  }

  // Initialize All Controllers
  initIChingController();
  initSynastryController();
  initImperialDossier();
  initPWA();
  initVisualAlchemy();
  initPortalPresets();
  initPortalFeaturesShowcase();
  initAdvSolarToggle();

  // Return to Portal & Edit Natal Buttons
  if (btnReturnToPortal) {
    btnReturnToPortal.addEventListener('click', switchToLandingView);
  }
  if (btnPortalTopNav) {
    btnPortalTopNav.addEventListener('click', switchToLandingView);
  }

  // Event Listeners for Calculation and Preview Updates
  const baziFormInputs = [birthDatePicker, birthTimePicker, genderSelect, useSolarTimeCheck, lateRatCheck, timezoneSelect, customLonInput];
  baziFormInputs.forEach(el => {
    if (el) {
      el.addEventListener('change', () => {
        if (activeMainPage === 'landing') {
          updateLandingPreview();
        } else {
          triggerCalculate();
        }
      });
      el.addEventListener('input', () => {
        if (activeMainPage === 'landing') {
          updateLandingPreview();
        } else {
          debouncedCalculate(60);
        }
      });
    }
  });

  // Dynamic Web UI Calculation & Transition Progress Bar (动态智能排盘计算进度条)
  function showDynamicCalculationProgress(modeOrCb, onComplete) {
    let mode = 'natal';
    let cb = onComplete;
    if (typeof modeOrCb === 'function') {
      cb = modeOrCb;
      mode = 'natal';
    } else if (typeof modeOrCb === 'string') {
      mode = modeOrCb;
    }

    const modal = document.getElementById('calculationProgressModal');
    if (!modal) {
      if (typeof cb === 'function') cb();
      return;
    }
    const activeLang = (typeof window !== 'undefined' && window.currentLang) ||
                       (typeof I18N !== 'undefined' && I18N.currentLang) ||
                       (typeof globalThis !== 'undefined' && globalThis.currentLang) ||
                       (typeof currentLang !== 'undefined' ? currentLang : 'zh');
    const isEn = (activeLang === 'en');
    const titleEl = document.getElementById('calcProgressTitle');
    const subtitleEl = document.getElementById('calcProgressSubtitle');
    const stageTextEl = document.getElementById('calcProgressStageText');
    const percentTextEl = document.getElementById('calcProgressPercentText');
    const barInner = document.getElementById('calcProgressBarInner');
    const stepEls = [
      document.getElementById('progressStep1'),
      document.getElementById('progressStep2'),
      document.getElementById('progressStep3'),
      document.getElementById('progressStep4'),
      document.getElementById('progressStep5')
    ];

    const configMap = {
      natal: {
        titleZh: '乾坤气象 · 全相智能排盘推演中',
        titleEn: 'Synthesizing Cosmic Pillars & Natal Blueprint...',
        subtitleZh: '正在调用东方全息大模型并通判八大典籍古籍库',
        subtitleEn: 'Synthesizing Natal Geometry with Eight Classical Canons & Luck Cycles',
        stepChipsZh: ['① 四柱', '② 八典', '③ 罗盘', '④ 心法', '⑤ 乾坤'],
        stepChipsEn: ['① Pillars', '② Canons', '③ Chrono', '④ Mind', '⑤ Destiny'],
        stages: [
          { percent: 20, textZh: '四柱八字乾坤排盘 · 纳音神煞五行量化', textEn: 'Computing Four Pillars, NaYin & Elemental Balance', step: 0 },
          { percent: 45, textZh: '八大正统典籍互参 · 穷通子平神峰玉照', textEn: 'Cross-Referencing Eight Classical Canons & Pareto Fulcrum', step: 1 },
          { percent: 70, textZh: '岁运百岁罗盘推演 · 当季现实破局攻坚', textEn: 'Synthesizing Luck Cycles & Operational Chrono-Navigator', step: 2 },
          { percent: 90, textZh: '原厂心理说明书构筑 · 极端压力触发与降维心法', textEn: 'Assembling Factory Mind Manual & De-escalation Protocols', step: 3 },
          { percent: 100, textZh: '呈现全相乾坤大局 · 宏观破局战报合流', textEn: 'Destiny Canvas Complete · Launching Dashboard', step: 4 }
        ]
      },
      synastry: {
        titleZh: '乾坤互参 · 双人合盘深度推演中',
        titleEn: 'Cross-Referencing Natal Geometries · Synastry Matrix',
        subtitleZh: '通判八大经典合盘法则 · 婚恋合伙博弈与禅道智慧调和',
        subtitleEn: 'Evaluating Dual Natal Charts, Elemental Clashes & Zen Trinity Synergy',
        stepChipsZh: ['① 双方', '② 八典', '③ 雷区', '④ 调和', '⑤ 契合'],
        stepChipsEn: ['① Pillars', '② Canons', '③ Clashes', '④ Harmony', '⑤ Report'],
        stages: [
          { percent: 20, textZh: '双方原局乾坤排盘 · 命宫日柱喜用提炼', textEn: 'Pairing Natal Pillars, Day Masters & Favorable Elements', step: 0 },
          { percent: 45, textZh: '八大正统典籍合判 · 渊海子平三命会通', textEn: 'Cross-Referencing Eight Canons for Synastry Dynamics', step: 1 },
          { percent: 70, textZh: '刑冲化合雷区扫描 · 契约防火墙构建', textEn: 'Scanning Clashes, Harms & Boundary Safeguards', step: 2 },
          { percent: 90, textZh: '商业合伙/婚恋博弈平衡 · 禅道三经智慧调和', textEn: 'Balancing Partnership Dynamics & Zen Trinity Wisdom', step: 3 },
          { percent: 100, textZh: '合盘全息战报成型 · 呈现契合大局', textEn: 'Synastry Dossier Complete · Unveiling Results', step: 4 }
        ]
      },
      chrono: {
        titleZh: '时空罗盘 · 百岁运势与现实破局深度推演中',
        titleEn: 'Calibrating Chrono-Navigator & Operational Playbook',
        subtitleZh: '推演百岁精微双曲线 · 当季现实破局攻坚与地理生态位共振',
        subtitleEn: 'Computing Lifelong Trajectory, Seasonal Tides & Ecological Resonance',
        stepChipsZh: ['① 罗盘', '② 节律', '③ 熔断', '④ 生态', '⑤ 破局'],
        stepChipsEn: ['① Chrono', '② Seasons', '③ Breakers', '④ Ecology', '⑤ Horizon'],
        stages: [
          { percent: 20, textZh: '时空大运罗盘定位 · 百岁精微曲线校准', textEn: 'Calibrating Lifelong Chrono-Navigator & Decennial Cycles', step: 0 },
          { percent: 45, textZh: '流年流月四季节律 · 当季现实破局定调', textEn: 'Computing Annual & Seasonal Operational Playbook', step: 1 },
          { percent: 70, textZh: '岁运并临与天克地冲 · 极端风险熔断诊断', textEn: 'Screening Grand Duke Conjunctions & Risk Safeguards', step: 2 },
          { percent: 90, textZh: '地理生态位共振 · 城市气场与组织匹配', textEn: 'Aligning Five-Element Geography & Workplace Ecosystem', step: 3 },
          { percent: 100, textZh: '时空全相罗盘呈现 · 决胜当季主线', textEn: 'Chrono Matrix Ready · Revealing Strategic Timeline', step: 4 }
        ]
      }
    };

    const cfg = configMap[mode] || configMap.natal;
    const stages = cfg.stages;

    if (titleEl) titleEl.textContent = isEn ? cfg.titleEn : cfg.titleZh;
    if (subtitleEl) subtitleEl.textContent = isEn ? cfg.subtitleEn : cfg.subtitleZh;

    const chips = isEn ? cfg.stepChipsEn : cfg.stepChipsZh;
    stepEls.forEach((el, idx) => {
      if (el && chips[idx]) el.textContent = chips[idx];
    });

    // Headless test environment check
    const isHeadless = (typeof window !== 'undefined' && (window.__headlessTest || !window.document || !window.document.body || typeof setTimeout === 'undefined' || typeof setInterval === 'undefined'));
    if (isHeadless) {
      modal.classList.remove('hidden');
      if (stageTextEl) stageTextEl.textContent = isEn ? stages[4].textEn : stages[4].textZh;
      if (percentTextEl) percentTextEl.textContent = '100%';
      if (barInner) barInner.style.width = '100%';
      stepEls.forEach(el => {
        if (el) {
          el.className = 'p-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold transition';
        }
      });
      modal.classList.add('hidden');
      if (typeof cb === 'function') cb();
      return;
    }

    // Interactive Browser Environment
    modal.classList.remove('hidden');
    let currentStageIdx = 0;

    function applyStage(idx) {
      const s = stages[idx];
      if (!s) return;
      if (stageTextEl) stageTextEl.textContent = isEn ? s.textEn : s.textZh;
      if (percentTextEl) percentTextEl.textContent = `${s.percent}%`;
      if (barInner) barInner.style.width = `${s.percent}%`;
      stepEls.forEach((el, sIdx) => {
        if (!el) return;
        if (sIdx <= s.step) {
          el.className = 'p-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold transition';
        } else {
          el.className = 'p-1 rounded bg-black/40 text-gray-500 border border-gray-800 transition';
        }
      });
    }

    applyStage(0);

    const stepInterval = 100;
    const progressTimer = setInterval(() => {
      currentStageIdx++;
      if (currentStageIdx < stages.length) {
        applyStage(currentStageIdx);
      } else {
        clearInterval(progressTimer);
        setTimeout(() => {
          modal.classList.add('hidden');
          if (typeof cb === 'function') cb();
        }, 120);
      }
    }, stepInterval);
  }

  // Enter key trigger to submit calculation and transition to dashboard
  [birthDatePicker, birthTimePicker, customLonInput, currentCustomCityInput].forEach(el => {
    if (el) {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          triggerCalculate();
          showDynamicCalculationProgress('natal', () => {
            switchToDashboardView();
          });
        }
      });
    }
  });

  calcBtn.addEventListener('click', () => {
    triggerCalculate();
    showDynamicCalculationProgress('natal', () => {
      switchToDashboardView();
    });
  });

  // Expose key modular renderers on window for direct headless verification
  window.setLanguage = setLanguage;
  window.showDynamicCalculationProgress = showDynamicCalculationProgress;
  window.renderOperationalPlaybook = renderOperationalPlaybook;
  window.renderEcologicalResonance = renderEcologicalResonance;
  window.renderTimeDynamicsReport = renderTimeDynamicsReport;
  window.renderFrictionView = renderFrictionView;
  window.render14CharEnergySynthesis = render14CharEnergySynthesis;
  window.renderFourPillarsHexagrams = renderFourPillarsHexagrams;
  window.renderHexagramCycle = renderHexagramCycle;
  window.drawHexagramCycleChart = drawHexagramCycleChart;

  // Restore user inputs from localStorage if available
  if (typeof localStorage !== 'undefined') {
    try {
      const savedParams = localStorage.getItem('lastBaziParams');
      if (savedParams) {
        const p = JSON.parse(savedParams);
        if (p) {
          if (birthDatePicker && p.year && p.month && p.day) {
            birthDatePicker.value = `${p.year}-${String(p.month).padStart(2, '0')}-${String(p.day).padStart(2, '0')}`;
          }
          if (birthTimePicker && p.hour !== undefined && p.minute !== undefined) {
            birthTimePicker.value = `${String(p.hour).padStart(2, '0')}:${String(p.minute).padStart(2, '0')}`;
          }
          if (genderSelect && p.gender) {
            genderSelect.value = p.gender;
          }
          if (citySelect && p.city) {
            citySelect.value = p.city;
          }
        }
      }
    } catch (e) {}
  }

  // Initial Calculation Run & Prepare Landing Preview
  triggerCalculate();
  updateLandingPreview();

  // Auto-restore dashboard view when requested via hash or query param (e.g. returning from career.html)
  if (typeof window !== 'undefined' && window.location) {
    const hash = window.location.hash || '';
    const search = window.location.search || '';
    if (hash.includes('dashboard') || search.includes('restore=true') || search.includes('view=career')) {
      const targetView = search.includes('view=career') ? 'view-career' : null;
      switchToDashboardView(targetView);
    }
  }
});
