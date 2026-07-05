const COLORS = {
  red: "#e82936",
  deepRed: "#c8192e",
  white: "#fff",
  blue: "#1756b8",
  navy: "#122486",
  sky: "#72c7f2",
  green: "#138a57",
  deepGreen: "#087847",
  yellow: "#ffd735",
  gold: "#f4b22a",
  black: "#111",
  orange: "#f48b35",
  maroon: "#7b1432",
};

const artLabels = {
  "c-red": "赤いパーツ",
  "c-deep-red": "濃い赤のパーツ",
  "c-white": "白いパーツ",
  "c-blue": "青いパーツ",
  "c-navy": "紺のパーツ",
  "c-sky": "水色のパーツ",
  "c-green": "緑のパーツ",
  "c-deep-green": "濃い緑のパーツ",
  "c-yellow": "黄色いパーツ",
  "c-gold": "金色のパーツ",
  "c-black": "黒いパーツ",
  "c-orange": "オレンジのパーツ",
  "c-maroon": "えんじ色のパーツ",
  "sym-star": "黄色い星",
  "sym-white-star": "白い星",
  "sym-green-star": "緑の星",
  "sym-red-disc": "赤い丸",
  "sym-blue-disc": "青い丸",
  "sym-yellow-disc": "黄色い丸",
  "sym-sun": "太陽",
  "sym-blue-wheel": "青い車輪",
  "sym-eagle": "ワシの紋章",
  "spain-emblem": "スペインの紋章",
  "brazil-globe": "ブラジルの青い円",
  "portugal-emblem": "ポルトガルの紋章",
  "ethiopia-emblem": "エチオピアの星",
  "sym-maple": "カエデの葉",
  "sym-crescent": "三日月と星",
  "sym-taegeuk": "太極マーク",
  "sym-david-star": "青い六芒星",
  "sym-trigram-a": "左上の黒い線",
  "sym-trigram-b": "右上の黒い線",
  "sym-trigram-c": "左下の黒い線",
  "sym-trigram-d": "右下の黒い線",
  "shape-diamond-yellow": "黄色いひし形",
  "shape-triangle-white": "白い三角",
  "shape-triangle-blue": "青い三角",
  "shape-triangle-red": "赤い三角",
  "shape-triangle-green": "緑の三角",
  "shape-triangle-black": "黒い三角",
  "shape-diagonal-yellow": "黄色い斜め線",
  "shape-diagonal-white": "白い斜め線",
  "shape-diagonal-red": "赤い斜め線",
  "cross-red": "赤い十字",
  "cross-white": "白い十字",
  "cross-blue": "青い十字",
  "cross-yellow": "黄色い十字",
  "nordic-white": "白い北欧十字",
  "nordic-blue": "青い北欧十字",
  "nordic-yellow": "黄色い北欧十字",
  "nordic-red": "赤い北欧十字",
  "canton-blue-stars": "星のある青い四角",
  "china-stars": "小さな黄色い星",
  "stars-strip": "白い星",
  "morocco-star": "緑の星",
  "script-sword": "文字と剣のしるし",
};

const distractorArts = [
  "c-red",
  "c-blue",
  "c-green",
  "c-yellow",
  "c-black",
  "c-white",
  "sym-star",
  "sym-sun",
  "sym-red-disc",
  "sym-blue-disc",
  "sym-crescent",
  "shape-triangle-white",
  "cross-red",
  "nordic-blue",
  "sym-maple",
];

const positions = [
  { x: "5%", y: "2%", size: "74px", rotate: "-10deg" },
  { x: "38%", y: "0%", size: "76px", rotate: "8deg" },
  { x: "70%", y: "6%", size: "74px", rotate: "13deg" },
  { x: "1%", y: "36%", size: "76px", rotate: "16deg" },
  { x: "27%", y: "35%", size: "78px", rotate: "-8deg" },
  { x: "54%", y: "37%", size: "78px", rotate: "10deg" },
  { x: "76%", y: "36%", size: "76px", rotate: "-14deg" },
  { x: "6%", y: "68%", size: "74px", rotate: "-16deg" },
  { x: "31%", y: "68%", size: "74px", rotate: "7deg" },
  { x: "56%", y: "68%", size: "74px", rotate: "-5deg" },
  { x: "78%", y: "68%", size: "74px", rotate: "12deg" },
];

const v3 = (a, b, c) => [
  piece(a, 0, 0, 33.4, 100, 1),
  piece(b, 33.3, 0, 33.4, 100, 1),
  piece(c, 66.6, 0, 33.4, 100, 1),
];

const h3 = (a, b, c) => [
  piece(a, 0, 0, 100, 33.4, 1),
  piece(b, 0, 33.3, 100, 33.4, 1),
  piece(c, 0, 66.6, 100, 33.4, 1),
];

const h2 = (a, b) => [
  piece(a, 0, 0, 100, 50, 1),
  piece(b, 0, 50, 100, 50, 1),
];

const field = (art) => [piece(art, 0, 0, 100, 100, 1)];
const center = (art, size = 24) => [piece(art, 50 - size / 2, 50 - size / 2, size, size, 3)];

function piece(art, x, y, w, h, z = 1, label) {
  return { art, x, y, w, h, z, label: label || artLabels[art] || "国旗パーツ" };
}

const countryPlans = [
  { country: "メキシコ", english: "Mexico", pieces: [...v3("c-green", "c-white", "c-red"), ...center("sym-eagle", 18)] },
  { country: "ベトナム", english: "Viet Nam", pieces: [...field("c-red"), ...center("sym-star", 26)] },
  { country: "エジプト", english: "Egypt", pieces: [...h3("c-red", "c-white", "c-black"), ...center("sym-eagle", 15)] },
  { country: "イングランド", english: "England", pieces: [...field("c-white"), piece("cross-red", 0, 0, 100, 100, 2)] },
  {
    country: "韓国",
    english: "Korea",
    pieces: [
      ...field("c-white"),
      ...center("sym-taegeuk", 20),
      piece("sym-trigram-a", 20, 18, 16, 18, 2),
      piece("sym-trigram-b", 64, 18, 16, 18, 2),
      piece("sym-trigram-c", 20, 64, 16, 18, 2),
      piece("sym-trigram-d", 64, 64, 16, 18, 2),
    ],
  },
  { country: "アルゼンチン", english: "Argentina", pieces: [...h3("c-sky", "c-white", "c-sky"), ...center("sym-sun", 14)] },
  { country: "日本", english: "Japan", pieces: [...field("c-white"), ...center("sym-red-disc", 24)] },
  { country: "フランス", english: "France", pieces: v3("c-blue", "c-white", "c-red") },
  { country: "イタリア", english: "Italy", pieces: v3("c-green", "c-white", "c-red") },
  { country: "ドイツ", english: "Germany", pieces: h3("c-black", "c-red", "c-yellow") },
  { country: "オランダ", english: "Netherlands", pieces: h3("c-red", "c-white", "c-blue") },
  { country: "ロシア", english: "Russia", pieces: h3("c-white", "c-blue", "c-red") },
  { country: "スペイン", english: "Spain", pieces: [piece("c-red", 0, 0, 100, 25), piece("c-yellow", 0, 25, 100, 50), piece("c-red", 0, 75, 100, 25), piece("spain-emblem", 23, 38, 12, 24, 2)] },
  { country: "ブラジル", english: "Brazil", pieces: [...field("c-green"), piece("shape-diamond-yellow", 20, 16, 60, 68, 2), ...center("brazil-globe", 22)] },
  { country: "カナダ", english: "Canada", pieces: [piece("c-red", 0, 0, 25, 100), piece("c-white", 25, 0, 50, 100), piece("c-red", 75, 0, 25, 100), ...center("sym-maple", 24)] },
  { country: "中国", english: "China", pieces: [...field("c-red"), piece("sym-star", 9, 12, 22, 24, 2), piece("china-stars", 30, 10, 22, 28, 2)] },
  { country: "アメリカ", english: "United States", pieces: [piece("stripe-reds", 0, 0, 100, 100), piece("canton-blue-stars", 0, 0, 43, 54, 2)] },
  { country: "インド", english: "India", pieces: [...h3("c-orange", "c-white", "c-green"), ...center("sym-blue-wheel", 15)] },
  { country: "インドネシア", english: "Indonesia", pieces: h2("c-red", "c-white") },
  { country: "ポーランド", english: "Poland", pieces: h2("c-white", "c-red") },
  { country: "ウクライナ", english: "Ukraine", pieces: h2("c-blue", "c-yellow") },
  { country: "スウェーデン", english: "Sweden", pieces: [...field("c-blue"), piece("nordic-yellow", 0, 0, 100, 100, 2)] },
  { country: "スイス", english: "Switzerland", pieces: [...field("c-red"), piece("cross-white", 0, 0, 100, 100, 2)] },
  { country: "デンマーク", english: "Denmark", pieces: [...field("c-red"), piece("nordic-white", 0, 0, 100, 100, 2)] },
  { country: "フィンランド", english: "Finland", pieces: [...field("c-white"), piece("nordic-blue", 0, 0, 100, 100, 2)] },
  { country: "ノルウェー", english: "Norway", pieces: [...field("c-red"), piece("nordic-white", 0, 0, 100, 100, 2), piece("nordic-blue", 0, 0, 100, 100, 3)] },
  { country: "トルコ", english: "Turkey", pieces: [...field("c-red"), piece("sym-crescent", 32, 30, 30, 40, 2)] },
  { country: "モロッコ", english: "Morocco", pieces: [...field("c-deep-red"), ...center("morocco-star", 24)] },
  { country: "バングラデシュ", english: "Bangladesh", pieces: [...field("c-deep-green"), piece("sym-red-disc", 37, 32, 25, 36, 2)] },
  { country: "パキスタン", english: "Pakistan", pieces: [piece("c-white", 0, 0, 25, 100), piece("c-deep-green", 25, 0, 75, 100), piece("sym-crescent", 50, 29, 28, 40, 2)] },
  { country: "アイルランド", english: "Ireland", pieces: v3("c-green", "c-white", "c-orange") },
  { country: "ベルギー", english: "Belgium", pieces: v3("c-black", "c-yellow", "c-red") },
  { country: "ルーマニア", english: "Romania", pieces: v3("c-blue", "c-yellow", "c-red") },
  { country: "ナイジェリア", english: "Nigeria", pieces: v3("c-green", "c-white", "c-green") },
  { country: "タイ", english: "Thailand", pieces: [piece("c-red", 0, 0, 100, 16), piece("c-white", 0, 16, 100, 16), piece("c-navy", 0, 32, 100, 36), piece("c-white", 0, 68, 100, 16), piece("c-red", 0, 84, 100, 16)] },
  { country: "フィリピン", english: "Philippines", pieces: [piece("c-blue", 0, 0, 100, 50), piece("c-red", 0, 50, 100, 50), piece("shape-triangle-white", 0, 0, 42, 100, 2), piece("sym-sun", 11, 40, 12, 20, 3)] },
  { country: "ポルトガル", english: "Portugal", pieces: [piece("c-green", 0, 0, 40, 100), piece("c-red", 40, 0, 60, 100), piece("portugal-emblem", 32, 34, 18, 32, 2)] },
  { country: "コロンビア", english: "Colombia", pieces: [piece("c-yellow", 0, 0, 100, 50), piece("c-blue", 0, 50, 100, 25), piece("c-red", 0, 75, 100, 25)] },
  { country: "チリ", english: "Chile", pieces: [piece("c-white", 0, 0, 100, 50), piece("c-red", 0, 50, 100, 50), piece("c-blue", 0, 0, 34, 50, 2), piece("sym-white-star", 10, 11, 14, 24, 3)] },
  { country: "チェコ", english: "Czechia", pieces: [piece("c-white", 0, 0, 100, 50), piece("c-red", 0, 50, 100, 50), piece("shape-triangle-blue", 0, 0, 44, 100, 2)] },
  { country: "キューバ", english: "Cuba", pieces: [piece("stripe-blue-white", 0, 0, 100, 100), piece("shape-triangle-red", 0, 0, 42, 100, 2), piece("sym-white-star", 10, 38, 14, 24, 3)] },
  { country: "ジャマイカ", english: "Jamaica", pieces: [...field("c-green"), piece("shape-diagonal-yellow", 0, 0, 100, 100, 2), piece("shape-triangle-black", 0, 0, 100, 100, 3)] },
  { country: "イスラエル", english: "Israel", pieces: [piece("c-white", 0, 0, 100, 100), piece("c-blue", 0, 12, 100, 10, 2), piece("c-blue", 0, 78, 100, 10, 2), ...center("sym-david-star", 24)] },
  { country: "サウジアラビア", english: "Saudi Arabia", pieces: [...field("c-deep-green"), piece("script-sword", 28, 29, 44, 42, 2)] },
  { country: "シンガポール", english: "Singapore", pieces: [piece("c-red", 0, 0, 100, 50), piece("c-white", 0, 50, 100, 50), piece("sym-crescent", 12, 12, 24, 28, 2), piece("stars-strip", 35, 12, 23, 26, 2)] },
  { country: "マレーシア", english: "Malaysia", pieces: [piece("stripe-red-white", 0, 0, 100, 100), piece("c-blue", 0, 0, 44, 54, 2), piece("sym-crescent", 9, 11, 22, 30, 3), piece("sym-star", 28, 17, 12, 18, 3)] },
  { country: "ガーナ", english: "Ghana", pieces: [...h3("c-red", "c-yellow", "c-green"), ...center("sym-black-star", 18)] },
  { country: "ケニア", english: "Kenya", pieces: [piece("c-black", 0, 0, 100, 30), piece("c-white", 0, 30, 100, 5), piece("c-red", 0, 35, 100, 30), piece("c-white", 0, 65, 100, 5), piece("c-green", 0, 70, 100, 30), ...center("sym-shield", 18)] },
  { country: "タンザニア", english: "Tanzania", pieces: [piece("c-green", 0, 0, 100, 100), piece("shape-diagonal-yellow", 0, 0, 100, 100, 2), piece("shape-diagonal-black", 0, 0, 100, 100, 3), piece("shape-triangle-blue", 55, 35, 45, 65, 1)] },
  { country: "エチオピア", english: "Ethiopia", pieces: [...h3("c-green", "c-yellow", "c-red"), ...center("ethiopia-emblem", 20)] },
];

const levels = countryPlans
  .map((plan, levelIndex) => createLevel(plan, levelIndex))
  .sort((a, b) => {
    const order = { easy: 0, normal: 1, hard: 2, master: 3 };
    const difficultyDiff = order[getDifficultyKey(a.required.length)] - order[getDifficultyKey(b.required.length)];
    if (difficultyDiff !== 0) return difficultyDiff;
    return a.required.length - b.required.length || a.time - b.time;
  });

let levelIndex = 0;
let remaining = 0;
let timerId;
let points = 0;
let solved = false;
let placed = new Set();
let lastAward = 0;
let selectedDifficulty = "easy";
const nextByDifficulty = { easy: 0, normal: 0, hard: 0, master: 0 };

const homeScreen = document.querySelector("#homeScreen");
const playScreen = document.querySelector("#playScreen");
const levelList = document.querySelector("#levelList");
const difficultyRoad = document.querySelector("#difficultyRoad");
const startButton = document.querySelector("#startButton");
const countryName = document.querySelector("#countryName");
const levelChip = document.querySelector("#levelChip");
const pointCount = document.querySelector("#pointCount");
const timer = document.querySelector("#timer");
const flagBoard = document.querySelector("#flagBoard");
const partsZone = document.querySelector("#partsZone");
const message = document.querySelector("#message");
const continueButton = document.querySelector("#continueButton");
const homeButton = document.querySelector("#homeButton");
const resultDialog = document.querySelector("#resultDialog");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const nextButton = document.querySelector("#nextButton");
const closeDialogButton = document.querySelector("#closeDialogButton");
const rulesDialog = document.querySelector("#rulesDialog");
const rulesButton = document.querySelector("#rulesButton");
const homeRulesButton = document.querySelector("#homeRulesButton");
const closeRulesButton = document.querySelector("#closeRulesButton");
const soundToggle = document.querySelector("#soundToggle");

let soundEnabled = true;
let audioContext;
let masterGain;
let musicGain;
let musicTimer;
let musicStep = 0;
let audioUnlocked = false;
let audioResumePromise;

function ensureAudio() {
  if (!soundEnabled) return false;

  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return false;

    audioContext = new AudioContextClass();
    masterGain = audioContext.createGain();
    musicGain = audioContext.createGain();
    masterGain.gain.value = 0.34;
    musicGain.gain.value = 0.2;
    musicGain.connect(masterGain);
    masterGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    audioResumePromise = audioContext.resume().then(() => {
      audioUnlocked = true;
      startMusic();
    }).catch(() => {
      audioUnlocked = false;
    });
  } else {
    audioUnlocked = true;
  }

  if (audioUnlocked) startMusic();
  return true;
}

function unlockAudioFromGesture() {
  if (!soundEnabled) return;
  ensureAudio();

  if (audioResumePromise) {
    audioResumePromise.then(() => playTone(880, audioContext.currentTime, 0.025, "sine", 0.02));
  } else if (audioUnlocked) {
    playTone(880, audioContext.currentTime, 0.025, "sine", 0.02);
  }
}

function startMusic() {
  if (!soundEnabled || !audioContext || !audioUnlocked || musicTimer) return;

  playMusicStep();
  musicTimer = setInterval(playMusicStep, 480);
}

function stopMusic() {
  if (!musicTimer) return;
  clearInterval(musicTimer);
  musicTimer = undefined;
}

function playMusicStep() {
  if (!soundEnabled || !audioContext || !musicGain) return;

  const notes = [392, 493.88, 587.33, 659.25, 587.33, 493.88, 440, 523.25];
  const bass = [196, 196, 246.94, 246.94, 220, 220, 261.63, 261.63];
  const now = audioContext.currentTime;
  playTone(notes[musicStep % notes.length], now, 0.16, "triangle", 0.06, musicGain);
  if (musicStep % 2 === 0) {
    playTone(bass[musicStep % bass.length], now, 0.2, "sine", 0.035, musicGain);
  }
  musicStep += 1;
}

function playSfx(type) {
  if (!ensureAudio()) return;
  if (!audioUnlocked) {
    audioResumePromise?.then(() => playSfx(type));
    return;
  }

  const now = audioContext.currentTime;
  if (type === "correct") {
    playTone(660, now, 0.08, "triangle", 0.16);
    playTone(880, now + 0.07, 0.11, "triangle", 0.14);
  } else if (type === "wrong") {
    playTone(180, now, 0.11, "sawtooth", 0.12);
    playTone(140, now + 0.08, 0.12, "sawtooth", 0.1);
  } else if (type === "clear") {
    [523.25, 659.25, 783.99, 1046.5].forEach((note, index) => {
      playTone(note, now + index * 0.08, 0.16, "triangle", 0.14);
    });
  } else if (type === "timeup") {
    [330, 247, 196].forEach((note, index) => {
      playTone(note, now + index * 0.12, 0.18, "sawtooth", 0.1);
    });
  } else if (type === "tick") {
    playTone(900, now, 0.035, "square", 0.06);
  } else {
    playTone(520, now, 0.06, "triangle", 0.08);
  }
}

function playTone(frequency, start, duration, type = "sine", volume = 0.1, destination = masterGain) {
  if (!audioContext || !destination) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  updateSoundButton();

  if (soundEnabled) {
    unlockAudioFromGesture();
    audioResumePromise?.then(() => playSfx("button"));
    if (audioUnlocked) playSfx("button");
  } else {
    stopMusic();
  }
}

function updateSoundButton() {
  soundToggle.classList.toggle("muted", !soundEnabled);
  soundToggle.classList.toggle("active", soundEnabled);
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundToggle.setAttribute("aria-label", soundEnabled ? "音を切る" : "音を鳴らす");
  soundToggle.title = soundEnabled ? "音を切る" : "音を鳴らす";
}

function createLevel(plan, index) {
  const slots = plan.pieces.map((item, pieceIndex) => ({
    ...item,
    id: `${index}-${pieceIndex}-${item.art}`,
  }));
  const usedArts = new Set(slots.map((item) => item.art));
  const distractorLimit = Math.min(4, Math.max(0, positions.length - slots.length));
  const distractors = distractorArts
    .filter((art) => !usedArts.has(art))
    .slice(index % 5, index % 5 + distractorLimit)
    .map((art, distractorIndex) => ({
      id: `${index}-decoy-${distractorIndex}-${art}`,
      art,
      label: artLabels[art] || "まぎらわしいパーツ",
    }));

  return {
    country: plan.country,
    english: plan.english,
    time: plan.time || Math.min(45, 16 + slots.length * 4),
    baseClass: "blank-bg",
    required: slots.map((item) => item.id),
    slots,
    choices: shuffle([...slots, ...distractors]),
  };
}

function renderHome() {
  clearInterval(timerId);
  levelList.innerHTML = "";
  renderDifficultyRoad(selectedDifficulty);
  const targetIndex = getNextLevelIndex(selectedDifficulty);
  const level = levels[targetIndex];
  const difficulty = getDifficultyGroups().find((group) => group.key === selectedDifficulty);
  const button = document.createElement("button");
  button.className = `next-stage-card difficulty-${difficulty.key}`;
  button.type = "button";
  button.innerHTML = `
    <span class="next-stage-kicker">NEXT PUZZLE</span>
    <span class="next-stage-title">${difficulty.name}</span>
    <span class="next-stage-hint">どんな国旗かな？</span>
    <span class="next-stage-meta">${level.time}秒 / ${level.required.length}パーツ</span>
  `;
  button.addEventListener("click", () => startLevel(targetIndex, true));
  levelList.append(button);
}

function renderDifficultyRoad(activeKey) {
  difficultyRoad.innerHTML = "";
  getDifficultyGroups().forEach((group) => {
    const item = document.createElement("button");
    item.type = "button";
    const isActive = group.key === activeKey;
    item.className = `road-item${isActive ? " active" : ""}`;
    item.textContent = group.name;
    item.addEventListener("click", () => {
      selectedDifficulty = group.key;
      renderHome();
    });
    difficultyRoad.append(item);
  });
}


function showHome() {
  clearInterval(timerId);
  playSfx("button");
  if (resultDialog.open) resultDialog.close();
  if (rulesDialog.open) rulesDialog.close();
  homeScreen.hidden = false;
  playScreen.hidden = true;
  renderHome();
}

function startLevel(index, resetPoints) {
  ensureAudio();
  playSfx("button");
  levelIndex = index;
  if (resetPoints) points = 0;
  homeScreen.hidden = true;
  playScreen.hidden = false;
  renderLevel();
}

function renderLevel() {
  const level = levels[levelIndex];
  solved = false;
  placed = new Set();
  lastAward = 0;
  remaining = level.time;
  countryName.replaceChildren(
    createCountryLine("country-ja", level.country),
    createCountryLine("country-en", level.english),
  );
  levelChip.textContent = `STAGE ${levelIndex + 1}`;
  pointCount.textContent = points;
  timer.textContent = `${remaining}s`;
  continueButton.hidden = true;
  updateMessage();

  flagBoard.className = `flag-board ${level.baseClass}`;
  flagBoard.innerHTML = "";
  level.slots.forEach(addSlotGhost);

  renderParts(level);
  startTimer();
}

function addSlotGhost(slot) {
  const ghost = document.createElement("div");
  ghost.className = "slot-ghost";
  ghost.dataset.slot = slot.id;
  setBox(ghost, slot);
  ghost.append(createPieceArt(slot.art));
  flagBoard.append(ghost);
}

function renderParts(level) {
  partsZone.innerHTML = "";

  level.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    const spot = positions[index % positions.length];
    button.className = "part";
    button.type = "button";
    button.style.setProperty("--x", spot.x);
    button.style.setProperty("--y", spot.y);
    button.style.setProperty("--size", spot.size);
    button.style.setProperty("--rotate", spot.rotate);
    button.setAttribute("aria-label", choice.label || artLabels[choice.art] || "国旗パーツ");
    button.dataset.part = choice.id;
    button.dataset.art = choice.art;
    button.append(createPieceArt(choice.art));
    button.addEventListener("click", () => choosePart(button));
    partsZone.append(button);
  });
}

function createCountryLine(className, text) {
  const line = document.createElement("span");
  line.className = className;
  line.textContent = text;
  return line;
}

function createPieceArt(artName) {
  const art = document.createElement("div");
  art.className = `piece-art ${artName}`;

  if (artName.startsWith("sym-trigram-")) {
    art.innerHTML = "<span></span><span></span><span></span>";
  }

  return art;
}

function choosePart(button) {
  if (solved) return;

  const level = levels[levelIndex];
  const picked = button.dataset.part;

  if (level.required.includes(picked) && !placed.has(picked)) {
    placed.add(picked);
    button.classList.add("used");
    fillSlot(picked);
    points += 1;
    pointCount.textContent = points;

    if (placed.size === level.required.length) {
      solved = true;
      clearInterval(timerId);
      unlockNextLevel();
      const timeBonus = Math.ceil(remaining / 5);
      lastAward = level.required.length + timeBonus;
      points += timeBonus;
      pointCount.textContent = points;
      message.textContent = `完成！ ${level.country} / ${level.english}`;
      continueButton.hidden = false;
      playSfx("clear");
    } else {
      playSfx("correct");
      updateMessage();
    }
  } else {
    remaining = Math.max(0, remaining - 3);
    timer.textContent = `${remaining}s`;
    message.textContent = "そのパーツは使わないよ";
    playSfx("wrong");
    shake(button);
    if (remaining === 0) finishTimeUp();
  }
}

function fillSlot(pieceId) {
  const level = levels[levelIndex];
  const slot = level.slots.find((item) => item.id === pieceId);
  const ghost = flagBoard.querySelector(`[data-slot="${pieceId}"]`);
  if (ghost) ghost.remove();

  const pieceElement = createPieceArt(slot.art);
  pieceElement.classList.add("board-piece");
  setBox(pieceElement, slot);
  flagBoard.append(pieceElement);
}

function setBox(element, slot) {
  element.style.left = `${slot.x}%`;
  element.style.top = `${slot.y}%`;
  element.style.width = `${slot.w}%`;
  element.style.height = `${slot.h}%`;
  element.style.zIndex = slot.z || 1;
}

function updateMessage() {
  const level = levels[levelIndex];
  const rest = level.required.length - placed.size;
  message.textContent = `あと ${rest} 個のパーツを入れよう`;
}

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    if (solved) return;
    remaining -= 1;
    timer.textContent = `${remaining}s`;
    if (remaining > 0 && remaining <= 5) playSfx("tick");
    if (remaining <= 0) finishTimeUp();
  }, 1000);
}

function finishTimeUp() {
  clearInterval(timerId);
  solved = true;
  remaining = 0;
  timer.textContent = "0s";
  message.textContent = "タイムアップ。もう一度チャレンジ！";
  playSfx("timeup");
  showResult(false);
}

function showResult(success) {
  if (success) playSfx("button");
  const isFinalLevel = levelIndex === levels.length - 1;
  resultTitle.textContent = success ? "クリア！" : "タイムアップ";
  if (success && isFinalLevel) {
    resultTitle.textContent = `ランク ${getRank(points)}`;
    resultText.textContent = `最後までクリア！合計 ${points} ポイントです。`;
  } else {
    resultText.textContent = success
      ? `${levels[levelIndex].country} の国旗が完成しました。今回 +${lastAward} ポイント`
      : "全部のパーツを入れる前に時間切れです。";
  }
  nextButton.textContent = success ? (isFinalLevel ? "TOPへ" : "次の国旗") : "もう一度";
  if (!resultDialog.open) resultDialog.showModal();
}

function nextLevel() {
  const completed = solved && placed.size === levels[levelIndex].required.length;
  resultDialog.close();
  if (completed) {
    advanceDifficultyProgress(levelIndex);
    startLevel(getNextLevelIndex(selectedDifficulty), false);
    return;
  }
  renderLevel();
}

function getRank(score) {
  if (score >= 390) return "S";
  if (score >= 320) return "A";
  if (score >= 240) return "B";
  return "C";
}

function unlockNextLevel() {
  advanceDifficultyProgress(levelIndex);
}

function getNextLevelIndex(difficultyKey) {
  const groupLevels = levels
    .map((level, index) => ({ level, index }))
    .filter((item) => getDifficultyKey(item.level.required.length) === difficultyKey);
  const groupPosition = nextByDifficulty[difficultyKey] % groupLevels.length;
  return groupLevels[groupPosition].index;
}

function advanceDifficultyProgress(index) {
  const difficultyKey = getDifficultyKey(levels[index].required.length);
  const groupLevels = levels
    .map((level, levelIndex) => ({ level, index: levelIndex }))
    .filter((item) => getDifficultyKey(item.level.required.length) === difficultyKey);
  const currentPosition = groupLevels.findIndex((item) => item.index === index);
  if (currentPosition >= 0) {
    nextByDifficulty[difficultyKey] = (currentPosition + 1) % groupLevels.length;
  }
}

function getDifficultyLabel(partsCount) {
  return getDifficultyGroups().find((group) => group.key === getDifficultyKey(partsCount)).name;
}

function getDifficultyKey(partsCount) {
  if (partsCount <= 2) return "easy";
  if (partsCount <= 4) return "normal";
  if (partsCount <= 6) return "hard";
  return "master";
}

function getDifficultyGroups() {
  return [
    { key: "easy", name: "EASY", note: "2パーツ" },
    { key: "normal", name: "NORMAL", note: "3〜4パーツ" },
    { key: "hard", name: "HARD", note: "5〜6パーツ" },
    { key: "master", name: "MASTER", note: "7パーツ以上" },
  ];
}

function shake(button) {
  button.animate(
    [
      { transform: `translateX(0) rotate(${button.style.getPropertyValue("--rotate")})` },
      { transform: `translateX(-9px) rotate(${button.style.getPropertyValue("--rotate")})` },
      { transform: `translateX(9px) rotate(${button.style.getPropertyValue("--rotate")})` },
      { transform: `translateX(0) rotate(${button.style.getPropertyValue("--rotate")})` },
    ],
    { duration: 260, easing: "ease-in-out" },
  );
}

function shuffle(items) {
  return items
    .map((value) => ({ value, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map((item) => item.value);
}

startButton.addEventListener("click", () => startLevel(getNextLevelIndex(selectedDifficulty), true));
homeButton.addEventListener("click", showHome);
continueButton.addEventListener("click", () => showResult(true));
nextButton.addEventListener("click", nextLevel);
closeDialogButton.addEventListener("click", () => {
  playSfx("button");
  resultDialog.close();
});
rulesButton.addEventListener("click", () => {
  playSfx("button");
  rulesDialog.showModal();
});
homeRulesButton.addEventListener("click", () => {
  playSfx("button");
  rulesDialog.showModal();
});
closeRulesButton.addEventListener("click", () => {
  playSfx("button");
  rulesDialog.close();
});
soundToggle.addEventListener("click", toggleSound);
document.addEventListener("pointerdown", unlockAudioFromGesture, { capture: true, once: true });
document.addEventListener("touchstart", unlockAudioFromGesture, { capture: true, once: true, passive: true });

updateSoundButton();
renderHome();
