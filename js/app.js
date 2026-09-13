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
  let currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem('bazi_lang')) ? localStorage.getItem('bazi_lang') : 'zh';

  // DOM Elements
  const birthDatePicker = document.getElementById('birthDate');
  const birthTimePicker = document.getElementById('birthTime');
  const genderSelect = document.getElementById('gender');
  const citySelect = document.getElementById('citySelect');
  const timezoneSelect = document.getElementById('timezoneSelect');
  const customLonInput = document.getElementById('customLongitude');
  const useSolarTimeCheck = document.getElementById('useTrueSolarTime');
  const lateRatCheck = document.getElementById('lateRatNextDay');
  const calcBtn = document.getElementById('calcBtn');
  const nowBtn = document.getElementById('nowBtn');
  const themeToggle = document.getElementById('themeToggle');
  const langZhBtn = document.getElementById('langZhBtn');
  const langEnBtn = document.getElementById('langEnBtn');

  function setLanguage(lang) {
    currentLang = lang;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('bazi_lang', lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = (lang === 'en' ? 'en' : 'zh-CN');

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

      // Update gender select options
      if (genderSelect && typeof I18N !== 'undefined') {
        if (genderSelect.options[0]) genderSelect.options[0].textContent = I18N.t('opt_qian', lang);
        if (genderSelect.options[1]) genderSelect.options[1].textContent = I18N.t('opt_kun', lang);
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
      triggerCalculate();
    } catch (e) {
      // Custom or unparsed
    }
  });

  timezoneSelect.addEventListener('change', () => {
    triggerCalculate();
  });

  customLonInput.addEventListener('input', () => {
    debouncedCalculate(60);
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
    triggerCalculate();
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

      // Update Real-Time Solar Correction Detail Display
      const detailEl = document.getElementById('solarCalcDetail');
      if (detailEl) {
        if (useTrueSolarTime) {
          const tzSign = timezone >= 0 ? '+' : '';
          const stdMeridian = (timezone * 15.0).toFixed(1);
          const lonDiff = result.input.lonOffsetMinutes.toFixed(1);
          const lonSign = result.input.lonOffsetMinutes >= 0 ? '+' : '';
          const eotVal = result.input.eot.toFixed(1);
          const eotSign = result.input.eot >= 0 ? '+' : '';
          const totVal = result.input.totalSolarOffset.toFixed(1);
          const totSign = result.input.totalSolarOffset >= 0 ? '+' : '';

          const adjH = String(result.input.adjustedHour).padStart(2, '0');
          const adjM = String(result.input.adjustedMinute).padStart(2, '0');
          const lonDisplay = longitude >= 0 ? `${longitude}°E` : `${Math.abs(longitude)}°W`;

          detailEl.innerHTML = `
            <span><b>标准时区:</b> UTC${tzSign}${timezone}:00 (${stdMeridian}°)</span>
            <span><b>出生经度:</b> ${lonDisplay}</span>
            <span><b>经度偏离:</b> ${lonSign}${lonDiff}分</span>
            <span><b>均时差:</b> ${eotSign}${eotVal}分</span>
            <span class="text-amber-300 font-bold"><b>总校正:</b> ${totSign}${totVal}分 ➔ <b>真太阳时:</b> ${result.input.adjustedYear}-${String(result.input.adjustedMonth).padStart(2,'0')}-${String(result.input.adjustedDay).padStart(2,'0')} ${adjH}:${adjM}</span>
          `;
        } else {
          const tzSign = timezone >= 0 ? '+' : '';
          detailEl.innerHTML = `
            <span class="text-gray-400">当前未启用真太阳时校正，直接采用当地标准钟表时间（时区 UTC${tzSign}${timezone}:00）排盘。</span>
          `;
        }
      }

      currentBaziResult = result;

      // Calculate Fortune & Luck Cycles (大运、流年、流月、流日)
      if (typeof LuckEngine !== 'undefined') {
        const now = new Date();
        if (!selectedAnnualYear) selectedAnnualYear = now.getFullYear();
        if (!selectedDailyDate) selectedDailyDate = now.toISOString().split('T')[0];

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

      // Measure calculation duration
      const tEnd = (typeof performance !== 'undefined') ? performance.now() : Date.now();
      const duration = (tEnd - tStart).toFixed(2);
      const perfBadge = document.getElementById('calcPerfBadge');
      if (perfBadge) {
        perfBadge.textContent = `⚡ 瞬时计算完成 (${duration}ms)`;
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

      card.innerHTML = `
        <div class="w-full flex justify-between items-center mb-2 pb-1 border-b border-gray-700/40">
          <span class="text-xs text-gray-400 font-medium">${titles[idx]}</span>
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
            <div class="flex items-center space-x-2">
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-600/30 to-amber-500/20 text-amber-300 border border-amber-500/40 font-bold font-mono">
                ${isEn ? 'Energy Share: ' : '能量占比：'}${pat.weightPct}%
              </span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                ${pat.tierName}
              </span>
            </div>
          </div>

          <!-- Mini Progress Bar for Individual Pattern -->
          <div class="w-full bg-gray-800/80 rounded-full h-1.5 overflow-hidden">
            <div class="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full" style="width: ${pat.weightPct}%"></div>
          </div>

          ${verseHtml}

          <!-- Strict 4-Part Structure + Dimension 5 Percentage Analysis -->
          <div class="space-y-2 text-xs leading-relaxed">
            <!-- 1. 格局含义 -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-amber-900/30">
              <span class="text-amber-300 font-bold block mb-1">💡 1. ${isEn ? 'Pattern Meaning (Essence & Archetype)' : '格局含义 (是什么意思)'}</span>
              <p class="text-gray-300">${pat.meaning}</p>
            </div>

            <!-- 2. 典籍出处 -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-gray-800">
              <span class="text-gray-400 font-bold block mb-1">📖 2. ${isEn ? 'Canonical Source (Classical Literature)' : '典籍出处 (出自书里哪里)'}</span>
              <p class="text-gray-400 font-medium">${pat.source}</p>
            </div>

            <!-- 3. 成格条件与本命验证 -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-emerald-900/30">
              <span class="text-emerald-400 font-bold block mb-1">⚖️ 3. ${isEn ? 'Formation Rules & Natal Verification' : '成格条件与本命验证 (怎样成的格局)'}</span>
              <p class="text-gray-300">${pat.formation}</p>
            </div>

            <!-- 4. 实战用法与喜忌 (含现代适合职业、人际关系与真实案例) -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-rose-900/30">
              <span class="text-rose-400 font-bold block mb-1">🎯 4. ${isEn ? 'Practical Application, Taboos & Mastery' : '实战用法与喜忌 (怎样使用)'}</span>
              <div class="text-gray-300 whitespace-pre-line leading-relaxed">${pat.usage}</div>
            </div>

            <!-- 5. 能量权重与影响力评估 -->
            <div class="p-2.5 bg-black/30 rounded-lg border border-indigo-900/30">
              <div class="flex justify-between items-center mb-1">
                <span class="text-indigo-300 font-bold">📊 5. ${isEn ? 'Natal Energy Share & Impact Assessment' : '本命能量占比与影响力评估'}</span>
                <span class="font-mono text-amber-300 font-bold">${pat.weightPct}% · 【${pat.tierName}】</span>
              </div>
              <p class="text-gray-300">${pat.tierDesc}</p>
              <p class="text-gray-400 text-[11px] mt-0.5"><b>${isEn ? 'Empowerment Rationale: ' : '成格赋能依据：'}</b>${pat.weightReason}</p>
            </div>
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
          paretoContainer.appendChild(card);
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
        paretoContainer.appendChild(fulcrumCard);
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

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-rose-300 font-bold block">${isEn ? 'Consort Psychological Archetype & Inherent Disposition:' : '配偶真实心性原型与相貌气象：'}</span>
              <div class="text-amber-200 font-semibold mb-1">【${isEn ? (sp.archetypeEn || sp.archetype) : (sp.archetypeZh || sp.archetype)}】</div>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (sp.traitsEn || sp.traits) : (sp.traitsZh || sp.traits)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-amber-400 font-bold block">${isEn ? 'Latent Marital Friction Reefs & Clashing Risks:' : '潜在情感暗礁与岁运刑冲隐患：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (sp.clashRiskEn || sp.clashRisk) : (sp.clashRiskZh || sp.clashRisk)}</p>
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
        paretoContainer.appendChild(spouseCard);
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

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-emerald-300 font-bold block">${isEn ? 'Offspring Disposition Archetype & Frontier Talent Direction:' : '后嗣心性原型与天赋赛道：'}</span>
              <div class="text-amber-200 font-semibold mb-1">【${isEn ? (ch.archetypeEn || ch.archetype) : (ch.archetypeZh || ch.archetype)}】</div>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (ch.talentEn || ch.talent) : (ch.talentZh || ch.talent)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-blue-300 font-bold block">${isEn ? 'Parental Mentorship & Communication Guide:' : '亲子教育沟通密码与避坑指南：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (ch.guideEn || ch.guide) : (ch.guideZh || ch.guide)}</p>
            </div>
          </div>

          ${ch.genderDiffZh || ch.genderDiff ? `
          <div class="p-3 bg-emerald-950/20 rounded-lg border border-emerald-500/30 text-xs space-y-1">
            <span class="font-bold text-emerald-400">⚖️ ${isEn ? 'Gender Dynamics (Male vs. Female):' : '男女命差异 · 乾坤造化辨析：'}</span>
            <p class="text-gray-200 text-[11px] leading-relaxed">${isEn ? (ch.genderDiffEn || ch.genderDiff) : (ch.genderDiffZh || ch.genderDiff)}</p>
          </div>` : ''}
        `;
        paretoContainer.appendChild(childrenCard);
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

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-indigo-300 font-bold block">${isEn ? 'Ancestral Root Heritage & Family Upbringing:' : '祖业根基传承与家风熏陶：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (pa.heritageEn || pa.heritage) : (pa.heritageZh || pa.heritage)}</p>
            </div>

            <div class="p-3 bg-black/35 rounded-lg border border-gray-800 space-y-1.5">
              <span class="text-amber-300 font-bold block">${isEn ? 'Intangible Asset Blessing vs Emotional Debt Balance:' : '隐形资源赋能 vs 家族约束张力：'}</span>
              <p class="text-gray-300 text-[11px] leading-relaxed">${isEn ? (pa.debtOrBlessingEn || pa.debtOrBlessing) : (pa.debtOrBlessingZh || pa.debtOrBlessing)}</p>
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
        paretoContainer.appendChild(parentsCard);
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
        paretoContainer.appendChild(envCard);
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
              <h3 class="text-lg font-bold text-purple-400 font-serif-sc">${zpPattern.name} · ${isEn ? 'Success & Remedies' : '成败救应'}</h3>
            </div>
            <span class="text-xs text-gray-400">${isEn ? 'Qing Dynasty · Shen Xiaozhan' : '清·沈孝瞻著'}</span>
          </div>

          <div class="p-3 bg-purple-950/20 border-l-4 border-purple-500 rounded-r">
            <p class="text-xs text-purple-300 font-medium mb-1">${isEn ? 'Shen Xiaozhan Original Principle:' : '沈孝瞻原著定论：'}</p>
            <p class="text-sm font-serif-sc text-purple-100 font-medium leading-relaxed">“${zpPattern.quote}”</p>
          </div>

          <div class="space-y-2.5 text-xs text-gray-300 leading-relaxed">
            <div class="p-3 bg-black/30 rounded-lg border border-gray-800">
              <span class="text-amber-400 font-bold block mb-1">${isEn ? '💡 Pattern Essence:' : '💡 格局本义：'}</span>
              <p>${zpPattern.meaning}</p>
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-emerald-900/30">
              <span class="text-emerald-400 font-bold block mb-1">${isEn ? '✓ Formation Conditions (Factors for Great Success):' : '✓ 成格条件（何为大贵）：'}</span>
              <p>${zpPattern.conditions}</p>
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-rose-900/30">
              <span class="text-rose-400 font-bold block mb-1">${isEn ? '✗ Breaking Defects (Factors for Failure):' : '✗ 破格之患（何为大凶）：'}</span>
              <p>${zpPattern.defects}</p>
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-indigo-900/30">
              <span class="text-indigo-400 font-bold block mb-1">${isEn ? '🛡️ Remedies (Turning Failure into Success):' : '🛡️ 救应法门（化败为成）：'}</span>
              <p>${zpPattern.remedies}</p>
            </div>
            <div class="p-3 bg-black/30 rounded-lg border border-gray-800">
              <span class="text-gray-400 font-bold block mb-1">${isEn ? '🎯 Practical Luck Cycle Rules:' : '🎯 实战行运法则：'}</span>
              <p>${zpPattern.usage}</p>
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
      const genderText = res.gender === '乾造'
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
    if (annualLabelEl && activeAnnual) {
      const godTranslated = I18N.getGod(activeAnnual.stemGod, currentLang);
      annualLabelEl.textContent = isEn
        ? `Selected Year: ${activeAnnual.year} [${activeAnnual.text}] (${godTranslated}) · Age ${activeAnnual.age}`
        : `已选流年：${activeAnnual.year}年 · 【${activeAnnual.text}】(${godTranslated}) · ${activeAnnual.age}岁`;
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

        card.innerHTML = `
          <div class="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-800/80 pb-0.5">
            <span class="font-mono text-indigo-300 font-bold">${a.year}</span>
            <div class="flex items-center gap-1">
              <span class="px-1 py-0.2 rounded border text-[9px] font-bold ${badgeColor}">${badgeLabel}</span>
              <span class="text-gray-400">${a.age}${isEn ? 'yo' : '岁'}</span>
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

  // Primary View Navigation Logic (View 1: Home/Pareto | View 2: Luck/Transits | View 3: Canons)
  let activePrimaryView = 'view-home';
  const viewNavBtns = document.querySelectorAll('.view-nav-btn');
  const primaryViews = {
    'view-home': document.getElementById('view-home'),
    'view-luck': document.getElementById('view-luck'),
    'view-canons': document.getElementById('view-canons'),
    'view-iching': document.getElementById('view-iching')
  };

  function switchPrimaryView(targetViewId) {
    if (!primaryViews[targetViewId]) return;
    activePrimaryView = targetViewId;

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

    // If switching to home view, refresh radar canvas
    if (targetViewId === 'view-home' && currentBaziResult && typeof renderElementRadar === 'function') {
      renderElementRadar(currentBaziResult.elements);
    }
  }

  viewNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-view');
      if (target) switchPrimaryView(target);
    });
  });

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

  // 《子平真诠》 Patterns List
  const zpPatternsContainer = document.getElementById('zipingPatternsList');
  if (zpPatternsContainer) {
    const allPats = ZiPingZhenQuanDB.getAllPatterns();
    for (const [pName, p] of Object.entries(allPats)) {
      const div = document.createElement('div');
      div.className = 'p-3 bg-black/20 rounded-lg border border-gray-800 text-xs space-y-1';
      div.innerHTML = `
        <div class="flex justify-between items-center">
          <h5 class="font-bold text-purple-300 text-sm font-serif-sc">${p.name}</h5>
          <span class="text-[11px] text-gray-400">沈孝瞻格局真谛</span>
        </div>
        <p class="text-gray-300"><b>【成格条件】</b>${p.conditions}</p>
        <p class="text-rose-400"><b>【破格之患】</b>${p.defects}</p>
        <p class="text-emerald-400"><b>【救应法门】</b>${p.remedies}</p>
      `;
      zpPatternsContainer.appendChild(div);
    }
  }

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
    const all = [...dtsResults, ...smResults, ...qtResults, ...zpResults, ...yhResults, ...sfResults, ...yzResults, ...lxzResults];

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
              <span class="font-bold text-sm text-amber-300 font-serif-sc">${item.title}</span>
              <span class="chinese-seal text-[10px] py-0">${item.source}</span>
            </div>
            <p class="text-xs font-serif-sc text-gray-200 mb-1">“${item.content}”</p>
            <p class="text-[11px] text-gray-400 leading-relaxed">${item.detail}</p>
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
  let lastDivinationResult = null;
  let currentCoinStep = 1;
  let currentCoinLines = [];

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
          <div class="flex items-center gap-3 p-1 rounded transition hover:bg-white/5">
            <span class="w-16 sm:w-20 text-xs font-serif-sc font-semibold ${isTarget ? 'text-amber-300' : 'text-gray-300'}">
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
  }

  // Initialize I Ching Controller
  initIChingController();

  // Event Listeners for Immediate Calculation
  [birthDatePicker, birthTimePicker, genderSelect, useSolarTimeCheck, lateRatCheck, timezoneSelect].forEach(el => {
    el.addEventListener('change', triggerCalculate);
  });
  calcBtn.addEventListener('click', triggerCalculate);

  // Initial Calculation Run
  triggerCalculate();
});
