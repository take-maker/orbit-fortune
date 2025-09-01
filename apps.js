// Zodiac data
const zodiacData = {
  "牡羊座": {
    "dateRange": "3/21-4/19",
    "icon": "♈",
    "today": {
      "fortune": "今日はエネルギッシュな一日になりそうです。新しいことに挑戦するには絶好の日。積極性が幸運を呼び込みます。",
      "love": "パートナーとの関係が深まる暗示。シングルの方は意外な出会いが期待できそう。",
      "work": "リーダーシップを発揮できる日。チームをまとめる力が評価されるでしょう。",
      "money": "投資や新しい収入源について考える良い機会。慎重に検討を。",
      "luckyColor": "赤",
      "luckyNumber": 7
    }
  },
  "牡牛座": {
    "dateRange": "4/20-5/20", 
    "icon": "♉",
    "today": {
      "fortune": "安定を求める気持ちが強くなる日。焦らずじっくりと物事を進めることが成功への鍵です。",
      "love": "穏やかな愛情に包まれる日。相手の気持ちを大切にする姿勢が吉。",
      "work": "粘り強さが功を奏します。継続してきた努力が実を結ぶ兆し。",
      "money": "堅実な金銭管理が幸運をもたらします。無駄遣いは控えめに。",
      "luckyColor": "緑",
      "luckyNumber": 2
    }
  },
  "双子座": {
    "dateRange": "5/21-6/21",
    "icon": "♊", 
    "today": {
      "fortune": "コミュニケーション能力が光る日。多くの人との交流が新しい可能性を開きます。",
      "love": "会話を通じて相手との距離が縮まる暗示。素直な気持ちを伝えて。",
      "work": "情報収集と人脈作りに最適な日。新しいアイデアが浮かびそう。",
      "money": "複数の収入源を検討するのに良い日。分散投資がキーワード。",
      "luckyColor": "黄色",
      "luckyNumber": 3
    }
  },
  "蟹座": {
    "dateRange": "6/22-7/22",
    "icon": "♋",
    "today": {
      "fortune": "家族や身近な人との絆が深まる日。感情を大切にすることで良い結果が。",
      "love": "心の繋がりを重視した関係作りが吉。優しさが相手に伝わります。",
      "work": "チームワークを活かした取り組みが成功をもたらします。",
      "money": "家計や将来の備えについて考える良いタイミング。",
      "luckyColor": "銀",
      "luckyNumber": 4
    }
  },
  "獅子座": {
    "dateRange": "7/23-8/22",
    "icon": "♌",
    "today": {
      "fortune": "自分らしさを表現することで注目を集める日。自信を持って行動を。",
      "love": "ドラマチックな展開が期待できる日。積極的なアプローチが吉。",
      "work": "創造性と表現力が評価される場面が。プレゼンテーションに最適。",
      "money": "大胆な投資よりも、確実性を重視した方が良い結果に。",
      "luckyColor": "金",
      "luckyNumber": 5
    }
  },
  "乙女座": {
    "dateRange": "8/23-9/22",
    "icon": "♍",
    "today": {
      "fortune": "細かな配慮と丁寧な作業が評価される日。完璧主義が功を奏します。",
      "love": "相手への思いやりが関係を深めます。小さな気遣いが大切。",
      "work": "分析力と組織力を活かして成果を上げられる日。品質重視で。",
      "money": "家計簿の見直しや節約プランの検討に最適な日。",
      "luckyColor": "紺",
      "luckyNumber": 6
    }
  },
  "天秤座": {
    "dateRange": "9/23-10/23",
    "icon": "♎",
    "today": {
      "fortune": "バランス感覚が冴える日。対立する意見の調和を図れそう。",
      "love": "パートナーシップが重要なテーマ。相手との平等な関係を心がけて。",
      "work": "交渉や仲裁役として力を発揮できる日。公平性が鍵。",
      "money": "収支のバランスを見直すのに良いタイミング。",
      "luckyColor": "ピンク",
      "luckyNumber": 6
    }
  },
  "蠍座": {
    "dateRange": "10/24-11/22",
    "icon": "♏",
    "today": {
      "fortune": "直感力が冴える日。深く物事を見つめることで真実が見えてきそう。",
      "love": "情熱的な感情が高まる日。深い愛情を表現するチャンス。",
      "work": "集中力を活かして重要な課題に取り組むのに最適。",
      "money": "長期的な投資戦略を練るのに良い日。じっくり検討を。",
      "luckyColor": "深紅",
      "luckyNumber": 8
    }
  },
  "射手座": {
    "dateRange": "11/23-12/21",
    "icon": "♐",
    "today": {
      "fortune": "冒険心が刺激される日。新しい挑戦や学びの機会を求めて。",
      "love": "自由で開放的な関係が心地よい日。束縛よりも信頼を。",
      "work": "海外や遠方との関わりで良い展開が期待できそう。",
      "money": "将来への投資や学習にお金を使うのが吉。",
      "luckyColor": "紫",
      "luckyNumber": 9
    }
  },
  "山羊座": {
    "dateRange": "12/22-1/19",
    "icon": "♑",
    "today": {
      "fortune": "責任感と計画性が成功をもたらす日。着実に目標に向かって進んで。",
      "love": "真面目で誠実な姿勢が相手の心を動かします。",
      "work": "長期的な視野に立った取り組みが評価される日。",
      "money": "堅実な貯蓄や資産形成について検討するのに最適。",
      "luckyColor": "茶色",
      "luckyNumber": 10
    }
  },
  "水瓶座": {
    "dateRange": "1/20-2/18",
    "icon": "♒",
    "today": {
      "fortune": "独創性と革新的なアイデアが光る日。従来の枠にとらわれない発想を。",
      "love": "友情から始まる恋愛に発展の可能性。自然体でいることが大切。",
      "work": "テクノロジーや新しい手法を取り入れることで成果が上がりそう。",
      "money": "仮想通貨や新しい投資商品に興味を持つ日。情報収集を。",
      "luckyColor": "水色",
      "luckyNumber": 11
    }
  },
  "魚座": {
    "dateRange": "2/19-3/20",
    "icon": "♓",
    "today": {
      "fortune": "直感と想像力が豊かになる日。芸術的な活動や創作に向いています。",
      "love": "ロマンチックな雰囲気を大切に。感情表現が相手に響きます。",
      "work": "共感力を活かしたサービスや人助けで評価を得られそう。",
      "money": "衝動的な買い物は控えて。感情に流されない判断を。",
      "luckyColor": "海の青",
      "luckyNumber": 12
    }
  }
};

// Color class mapping for lucky colors
const colorClassMap = {
  "赤": "color-red",
  "緑": "color-green", 
  "黄色": "color-yellow",
  "銀": "color-silver",
  "金": "color-gold",
  "紺": "color-navy",
  "ピンク": "color-pink",
  "深紅": "color-crimson",
  "紫": "color-purple",
  "茶色": "color-brown",
  "水色": "color-lightblue",
  "海の青": "color-seablue"
};

// DOM elements
const birthDateInput = document.getElementById('birthDate');
const fortuneButton = document.getElementById('fortuneButton');
const resultSection = document.getElementById('resultSection');
const inputSection = document.getElementById('inputSection');
const tryAgainButton = document.getElementById('tryAgainButton');

// Result display elements
const zodiacIcon = document.getElementById('zodiacIcon');
const zodiacName = document.getElementById('zodiacName');
const zodiacPeriod = document.getElementById('zodiacPeriod');
const overallFortune = document.getElementById('overallFortune');
const loveFortune = document.getElementById('loveFortune');
const workFortune = document.getElementById('workFortune');
const moneyFortune = document.getElementById('moneyFortune');
const luckyColor = document.getElementById('luckyColor');
const luckyColorSwatch = document.getElementById('luckyColorSwatch');
const luckyNumber = document.getElementById('luckyNumber');

// Determine zodiac sign from birth date
function getZodiacSign(birthDate) {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();
  
  // Zodiac date ranges
  const zodiacRanges = [
    { sign: "山羊座", start: [12, 22], end: [1, 19] },
    { sign: "水瓶座", start: [1, 20], end: [2, 18] },
    { sign: "魚座", start: [2, 19], end: [3, 20] },
    { sign: "牡羊座", start: [3, 21], end: [4, 19] },
    { sign: "牡牛座", start: [4, 20], end: [5, 20] },
    { sign: "双子座", start: [5, 21], end: [6, 21] },
    { sign: "蟹座", start: [6, 22], end: [7, 22] },
    { sign: "獅子座", start: [7, 23], end: [8, 22] },
    { sign: "乙女座", start: [8, 23], end: [9, 22] },
    { sign: "天秤座", start: [9, 23], end: [10, 23] },
    { sign: "蠍座", start: [10, 24], end: [11, 22] },
    { sign: "射手座", start: [11, 23], end: [12, 21] }
  ];

  for (const range of zodiacRanges) {
    const [startMonth, startDay] = range.start;
    const [endMonth, endDay] = range.end;
    
    if (startMonth === endMonth) {
      // Same month range
      if (month === startMonth && day >= startDay && day <= endDay) {
        return range.sign;
      }
    } else {
      // Cross-month range
      if ((month === startMonth && day >= startDay) || 
          (month === endMonth && day <= endDay)) {
        return range.sign;
      }
    }
  }
  
  return null;
}

// Display fortune results with animation
function displayFortune(sign) {
  const data = zodiacData[sign];
  
  // Populate the result elements
  zodiacIcon.textContent = data.icon;
  zodiacName.textContent = sign;
  zodiacPeriod.textContent = data.dateRange;
  overallFortune.textContent = data.today.fortune;
  loveFortune.textContent = data.today.love;
  workFortune.textContent = data.today.work;
  moneyFortune.textContent = data.today.money;
  luckyColor.textContent = data.today.luckyColor;
  luckyNumber.textContent = data.today.luckyNumber;
  
  // Set lucky color swatch
  const colorClass = colorClassMap[data.today.luckyColor];
  luckyColorSwatch.className = `color-swatch ${colorClass}`;
  
  // Hide input section and show results with animation
  setTimeout(() => {
    inputSection.style.opacity = '0';
    inputSection.style.transform = 'translateY(-20px)';
    inputSection.style.pointerEvents = 'none';
    
    setTimeout(() => {
      resultSection.classList.add('show');
    }, 300);
  }, 500);
}

// Reset to input view
function resetToInput() {
  resultSection.classList.remove('show');
  
  setTimeout(() => {
    inputSection.style.opacity = '1';
    inputSection.style.transform = 'translateY(0)';
    inputSection.style.pointerEvents = 'all';
    birthDateInput.value = '';
    
    // Remove loading state if present
    fortuneButton.classList.remove('loading');
    fortuneButton.textContent = '🔮 占う';
  }, 300);
}

// Handle fortune button click
function handleFortuneClick() {
  const birthDate = birthDateInput.value;
  
  if (!birthDate) {
    alert('生年月日を入力してください。');
    return;
  }
  
  // Add loading animation
  fortuneButton.classList.add('loading');
  fortuneButton.textContent = '';
  
  // Simulate processing time for better UX
  setTimeout(() => {
    const zodiacSign = getZodiacSign(birthDate);
    
    if (zodiacSign) {
      displayFortune(zodiacSign);
    } else {
      alert('星座の判定に失敗しました。正しい日付を入力してください。');
      fortuneButton.classList.remove('loading');
      fortuneButton.textContent = '🔮 占う';
    }
  }, 1500);
}

// Event listeners
fortuneButton.addEventListener('click', handleFortuneClick);
tryAgainButton.addEventListener('click', resetToInput);

// Allow Enter key to trigger fortune
birthDateInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleFortuneClick();
  }
});

// Set max date to today
const today = new Date().toISOString().split('T')[0];
birthDateInput.setAttribute('max', today);

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Focus on birth date input
  birthDateInput.focus();
  
  // Add subtle entrance animation to input section
  setTimeout(() => {
    inputSection.style.animation = 'fadeInUp 0.8s ease-out';
  }, 200);
});