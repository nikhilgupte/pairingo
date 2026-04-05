const TOTAL_PAIRS = 18;
const OBJECT_TYPES = [
  // Food & Drink
  "pizza", "burger", "cookie", "fries", "taco", "popcorn", "cupcake",
  "apple", "banana", "carrot", "milk", "tea",
  // Animals
  "dog", "cat", "butterfly", "elephant", "penguin", "lion", "frog",
  "turtle", "eagle", "octopus", "fish", "duck",
  // Sports & Activities
  "soccer", "football", "baseball", "volleyball", "ping pong",
  // Recreation & Games
  "video game", "dice", "target", "pool ball", "bowling", "circus",
  "guitar", "trumpet", "violin", "microphone",
  // Objects & Tools
  "wrench", "hammer", "screwdriver", "gear", "key", "bucket", "magnet",
  "computer", "phone", "keyboard", "mouse", "camera",
  // Nature & Weather
  "tree", "sunflower", "flower", "rainbow", "sun", "moon", "star",
  "ocean", "fire", "ice",
  // Travel & Vehicles
  "train", "airplane", "rocket", "ship", "sailboat", "helicopter",
  // Clothing & Accessories
  "hat", "jacket", "socks", "backpack", "ring", "watch", "sunglasses",
  // Household
  "bed", "couch", "door", "flashlight", "bulb", "candle", "broom", "basket",
];

const FLAG_ICONS = [
  // Country flags (emoji)
  { name: "usa", type: "emoji", value: "🇺🇸", label: "United States" },
  { name: "uk", type: "emoji", value: "🇬🇧", label: "United Kingdom" },
  { name: "france", type: "emoji", value: "🇫🇷", label: "France" },
  { name: "germany", type: "emoji", value: "🇩🇪", label: "Germany" },
  { name: "japan", type: "emoji", value: "🇯🇵", label: "Japan" },
  { name: "brazil", type: "emoji", value: "🇧🇷", label: "Brazil" },
  { name: "australia", type: "emoji", value: "🇦🇺", label: "Australia" },
  { name: "india", type: "emoji", value: "🇮🇳", label: "India" },
  { name: "mexico", type: "emoji", value: "🇲🇽", label: "Mexico" },
  { name: "spain", type: "emoji", value: "🇪🇸", label: "Spain" },
  { name: "italy", type: "emoji", value: "🇮🇹", label: "Italy" },
  { name: "pride", type: "emoji", value: "🏳️‍🌈", label: "Pride" },
  // Canadian provincial / city flags (image files)
  { name: "ontario", type: "image", value: "flags/ontario.svg", label: "Ontario" },
  { name: "quebec", type: "image", value: "flags/quebec.svg", label: "Québec" },
  { name: "britishcolumbia", type: "image", value: "flags/britishcolumbia.svg", label: "British Columbia" },
  { name: "alberta", type: "image", value: "flags/alberta.svg", label: "Alberta" },
  { name: "manitoba", type: "image", value: "flags/manitoba.svg", label: "Manitoba" },
  { name: "saskatchewan", type: "image", value: "flags/saskatchewan.svg", label: "Saskatchewan" },
  { name: "novascotia", type: "image", value: "flags/novascotia.svg", label: "Nova Scotia" },
  { name: "newbrunswick", type: "image", value: "flags/newbrunswick.svg", label: "New Brunswick" },
  { name: "newfoundland", type: "image", value: "flags/newfoundland.svg", label: "Newfoundland" },
  { name: "pei", type: "image", value: "flags/pei.svg", label: "PEI" },
  { name: "toronto", type: "image", value: "flags/toronto.svg", label: "Toronto" },
];

const CREEPY_CRAWLIES_ICONS = [
  { name: "caterpillar", type: "emoji", value: "🐛", label: "Caterpillar" },
  { name: "butterfly", type: "emoji", value: "🦋", label: "Butterfly" },
  { name: "bee", type: "emoji", value: "🐝", label: "Bee" },
  { name: "ladybug", type: "emoji", value: "🐞", label: "Ladybug" },
  { name: "cricket", type: "emoji", value: "🦗", label: "Cricket" },
  { name: "spider", type: "emoji", value: "🕷️", label: "Spider" },
  { name: "scorpion", type: "emoji", value: "🦂", label: "Scorpion" },
  { name: "ant", type: "emoji", value: "🐜", label: "Ant" },
  { name: "mosquito", type: "emoji", value: "🦟", label: "Mosquito" },
  { name: "beetle", type: "emoji", value: "🪲", label: "Beetle" },
  { name: "cockroach", type: "emoji", value: "🪳", label: "Cockroach" },
  { name: "fly", type: "emoji", value: "🪰", label: "Fly" },
  { name: "worm", type: "emoji", value: "🪱", label: "Worm" },
  { name: "snail", type: "emoji", value: "🐌", label: "Snail" },
  { name: "microbe", type: "emoji", value: "🦠", label: "Microbe" },
  { name: "lizard", type: "emoji", value: "🦎", label: "Lizard" },
  { name: "snake", type: "emoji", value: "🐍", label: "Snake" },
  { name: "crab", type: "emoji", value: "🦀", label: "Crab" },
  { name: "squid", type: "emoji", value: "🦑", label: "Squid" },
  { name: "octopus", type: "emoji", value: "🐙", label: "Octopus" },
];

const DINO_ICONS = [
  { name: "tyrannosaurus", type: "image", value: "dinos/tyrannosaurus.svg", label: "T-Rex" },
  { name: "stegosaurus", type: "image", value: "dinos/stegosaurus.svg", label: "Stegosaurus" },
  { name: "ankylosaurus", type: "image", value: "dinos/ankylosaurus.svg", label: "Ankylosaurus" },
  { name: "spinosaurus", type: "image", value: "dinos/spinosaurus.svg", label: "Spinosaurus" },
  { name: "coelophysis", type: "image", value: "dinos/coelophysis.svg", label: "Coelophysis" },
  { name: "acrocanthosaurus", type: "image", value: "dinos/acrocanthosaurus.svg", label: "Acrocanthosaurus" },
  { name: "eoraptor", type: "image", value: "dinos/eoraptor.svg", label: "Eoraptor" },
  { name: "edmontosaurus", type: "image", value: "dinos/edmontosaurus.svg", label: "Edmontosaurus" },
  { name: "kentrosaurus", type: "image", value: "dinos/kentrosaurus.svg", label: "Kentrosaurus" },
  { name: "camarasaurus", type: "image", value: "dinos/camarasaurus.svg", label: "Camarasaurus" },
  { name: "parasaurolophus", type: "image", value: "dinos/parasaurolophus.svg", label: "Parasaurolophus" },
  { name: "iguanodon", type: "image", value: "dinos/iguanodon.svg", label: "Iguanodon" },
  { name: "diplodocus", type: "image", value: "dinos/diplodocus.svg", label: "Diplodocus" },
  { name: "brachiosaurus", type: "image", value: "dinos/brachiosaurus.svg", label: "Brachiosaurus" },
  { name: "velociraptor", type: "image", value: "dinos/velociraptor.svg", label: "Velociraptor" },
  { name: "triceratops", type: "image", value: "dinos/triceratops.svg", label: "Triceratops" },
  { name: "deinonychus", type: "image", value: "dinos/deinonychus.svg", label: "Deinonychus" },
  { name: "sauropod", type: "emoji", value: "🦕", label: "Sauropod" },
];

const board = document.getElementById("game-board");
const inviteButton = document.getElementById("invite-btn");
const joinButton = document.getElementById("join-btn");
const joinSection = document.getElementById("join-section");
const disconnectButton = document.getElementById("disconnect-btn");
const shareButton = document.getElementById("share-btn");
const roomInput = document.getElementById("room-input");
const roomCode = document.getElementById("room-code");
const scoreboard = document.getElementById("scoreboard");
const playerCountInputs = Array.from(
  document.querySelectorAll("input[name='player-count']")
);

let deck = [];
let players = [];
let currentPlayerIndex = 0;
let firstSelection = null;
let secondSelection = null;
let lockBoard = false;
let matchedPairs = 0;
let multiplayerGameOver = false;
let currentDeckSignature = "";
let turnCount = 0;
let turnTimerInterval = null;
let turnTimerDisplay = null;
let tickInterval = null;
let gameTimerInterval = null;
let gameTimerStart = null;
let localGameSpeedMs = 0;
let pendingInviteCopy = false;
let multiplayerTurnTimerStarted = false;
let currentCardBackPattern = "";
let currentCardBackColor = "";
let currentEdition = "default";

const CARD_BACK_PATTERNS = ["pattern-lines", "pattern-dots", "pattern-grid", "pattern-solid"];

const multiplayer = {
  active: false,
  socket: null,
  roomId: null,
  playerId: null,
  isHost: false,
};

function getPlayerCount() {
  const selected = document.querySelector("input[name='player-count']:checked");
  return Number(selected ? selected.value : 2);
}



function setRoomCode(code) {
  if (roomCode) roomCode.textContent = code || "-";
  if (disconnectButton) {
    disconnectButton.textContent = code ? `Disconnect Room ${code}` : "Disconnect";
  }
}

function setConnectionStatus(_message) {}

function setPlayerControlsDisabled(disabled) {
  playerCountInputs.forEach((input) => {
    input.disabled = disabled;
  });
}

function updateMultiplayerControls() {
  setPlayerControlsDisabled(multiplayer.active);
  updateJoinDisconnectUI();
}

function updateJoinDisconnectUI() {
  const singlePlayer = getPlayerCount() === 1;
  if (singlePlayer && !multiplayer.active) {
    if (joinSection) joinSection.classList.add('hidden');
    return;
  }
  if (joinSection) joinSection.classList.remove('hidden');
  const inRoom = multiplayer.active;
  if (inviteButton) inviteButton.classList.toggle('hidden', inRoom);
  if (joinButton) joinButton.classList.toggle('hidden', inRoom);
  if (roomInput) roomInput.classList.toggle('hidden', inRoom);
  if (shareButton) shareButton.classList.toggle('hidden', !inRoom || !multiplayer.isHost);
  if (disconnectButton) disconnectButton.classList.toggle('hidden', !inRoom);
}

function mulberry32(seed) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), t | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(array, rng) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildIconSet(iconSeed) {
  const rng = iconSeed != null ? mulberry32(iconSeed) : Math.random.bind(Math);
  const s = arr => iconSeed != null ? seededShuffle(arr, rng) : shuffle(arr);
  if (currentEdition === "flags") {
    const pride = FLAG_ICONS.find(f => f.name === "pride");
    const rest = s(FLAG_ICONS.filter(f => f.name !== "pride"));
    const selected = s([pride, ...rest.slice(0, TOTAL_PAIRS - 1)]);
    return selected.map((flag, index) => ({ id: index, name: flag.name }));
  }
  if (currentEdition === "bugs") {
    const others = s(CREEPY_CRAWLIES_ICONS.filter(b => b.name !== "octopus"));
    const selected = [CREEPY_CRAWLIES_ICONS.find(b => b.name === "octopus"), ...others.slice(0, TOTAL_PAIRS - 1)];
    return selected.map((bug, index) => ({ id: index, name: bug.name }));
  }
  if (currentEdition === "dinos") {
    const shuffled = s([...DINO_ICONS]);
    return shuffled.slice(0, TOTAL_PAIRS).map((dino, index) => ({ id: index, name: dino.name }));
  }
  const shuffled = s([...OBJECT_TYPES]);
  return shuffled.slice(0, TOTAL_PAIRS).map((name, index) => ({ id: index, name }));
}

function getEmojiForIcon(type) {
  const emojiMap = {
    // Food & Drink
    pizza: "🍕", burger: "🍔", cookie: "🍪", fries: "🍟", taco: "🌮",
    popcorn: "🍿", cupcake: "🧁", apple: "🍎", banana: "🍌", carrot: "🥕",
    milk: "🥛", tea: "🍵",
    // Animals
    dog: "🐕", cat: "🐈", butterfly: "🦋", elephant: "🐘", penguin: "🐧",
    lion: "🦁", frog: "🐸", turtle: "🐢", eagle: "🦅", octopus: "🐙",
    fish: "🐠", duck: "🦆",
    // Sports & Activities
    soccer: "⚽", football: "🏈", baseball: "⚾", volleyball: "🏐",
    "ping pong": "🏓",
    // Recreation & Games
    "video game": "🎮", dice: "🎲", target: "🎯", "pool ball": "🎱",
    bowling: "🎳", circus: "🎪", guitar: "🎸", trumpet: "🎺",
    violin: "🎻", microphone: "🎤",
    // Objects & Tools
    wrench: "🔧", hammer: "🔨", screwdriver: "🪛", gear: "⚙️", key: "🔑",
    bucket: "🪣", magnet: "🧲", computer: "💻", phone: "📱",
    keyboard: "⌨️", mouse: "🖱️", camera: "📷",
    // Nature & Weather
    tree: "🌲", sunflower: "🌻", flower: "🌺", rainbow: "🌈", sun: "☀️",
    moon: "🌙", star: "⭐", ocean: "🌊", fire: "🔥", ice: "🧊",
    // Travel & Vehicles
    train: "🚂", airplane: "✈️", rocket: "🚀", ship: "🚢",
    sailboat: "⛵", helicopter: "🚁",
    // Clothing & Accessories
    hat: "👒", jacket: "🧥", socks: "🧦", backpack: "👝", ring: "💍",
    watch: "⌚", sunglasses: "🕶️",
    // Household
    bed: "🛏️", couch: "🛋️", door: "🚪", flashlight: "🔦", bulb: "💡",
    candle: "🕯️", broom: "🧹", basket: "🧺",
  };
  return emojiMap[type] || "❓";
}

function createIconData(icon) {
  if (currentEdition === "flags") {
    const flag = FLAG_ICONS.find(f => f.name === icon.name);
    if (flag) {
      return {
        image: flag.type === "emoji" ? flag.value : null,
        flagSrc: flag.type === "image" ? flag.value : null,
        label: flag.label,
      };
    }
  }
  if (currentEdition === "bugs") {
    const bug = CREEPY_CRAWLIES_ICONS.find(b => b.name === icon.name);
    if (bug) return { image: bug.value, flagSrc: null, label: bug.label };
  }
  if (currentEdition === "dinos") {
    const dino = DINO_ICONS.find(d => d.name === icon.name);
    if (dino) return {
      image: dino.type === "emoji" ? dino.value : null,
      flagSrc: dino.type === "image" ? dino.value : null,
      label: dino.label,
    };
  }
  return { image: getEmojiForIcon(icon.name), flagSrc: null, label: `${icon.name} icon` };
}

function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildDeckFromOrder(order, iconSeed) {
  const icons = buildIconSet(iconSeed);
  return order.map((matchId, index) => {
    const icon = icons[matchId];
    const iconData = createIconData(icon);
    return {
      id: index,
      matchId,
      image: iconData.image,
      flagSrc: iconData.flagSrc,
      label: iconData.label,
      matched: false,
      flipped: false,
    };
  });
}

function createDeck() {
  const icons = buildIconSet();
  const order = [];
  icons.forEach((icon) => {
    order.push(icon.id, icon.id);
  });
  const shuffledOrder = shuffle(order);
  return buildDeckFromOrder(shuffledOrder);
}

function renderScoreboard() {
  scoreboard.innerHTML = "";
  if (players.length === 1 && !multiplayer.active) return;
  const highestScore = players.length
    ? Math.max(...players.map((player) => player.score))
    : 0;
  const gameOver = multiplayer.active
    ? multiplayerGameOver
    : matchedPairs === TOTAL_PAIRS;

  players.forEach((player, index) => {
    const item = document.createElement("li");
    item.className = "score-item";
    if (index === currentPlayerIndex) {
      item.classList.add("active");
    }
    if (gameOver && player.score === highestScore) {
      item.classList.add("leader");
    }
    const name =
      player.connected === false ? `${player.name} (disconnected)` : player.name;
    item.textContent = `${name}: ${player.score}`;
    scoreboard.appendChild(item);
  });
}

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

// iOS Safari requires AudioContext to be resumed inside a user gesture
document.addEventListener("touchstart", () => getAudioCtx(), { once: true });

function playTone({ frequency = 440, type = "sine", duration = 0.15, gain = 0.3, delay = 0 } = {}) {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const vol = ctx.createGain();
  osc.connect(vol);
  vol.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
  vol.gain.setValueAtTime(gain, ctx.currentTime + delay);
  vol.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
  osc.start(ctx.currentTime + delay);
  osc.stop(ctx.currentTime + delay + duration);
}

const sfx = {
  flip() {
    playTone({ frequency: 600, type: "sine", duration: 0.08, gain: 0.2 });
  },
  match() {
    playTone({ frequency: 523, duration: 0.12, gain: 0.3 });
    playTone({ frequency: 659, duration: 0.12, gain: 0.3, delay: 0.1 });
    playTone({ frequency: 784, duration: 0.2,  gain: 0.3, delay: 0.2 });
  },
  miss() {
    playTone({ frequency: 330, type: "sawtooth", duration: 0.12, gain: 0.2 });
    playTone({ frequency: 220, type: "sawtooth", duration: 0.18, gain: 0.2, delay: 0.1 });
  },
  tick() {
    playTone({ frequency: 1200, type: "square", duration: 0.04, gain: 0.1 });
  },
  timerOut() {
    playTone({ frequency: 440, type: "sawtooth", duration: 0.15, gain: 0.3 });
    playTone({ frequency: 370, type: "sawtooth", duration: 0.15, gain: 0.3, delay: 0.15 });
    playTone({ frequency: 311, type: "sawtooth", duration: 0.3,  gain: 0.3, delay: 0.3 });
  },
};

function speak(text) {
  if (!window.speechSynthesis || currentEdition === "default") return;
  if (!document.getElementById("speech-toggle")?.checked) return;
  const say = () => {
    window.speechSynthesis.resume();
    const utterance = new SpeechSynthesisUtterance(text);
    const karen = window.speechSynthesis.getVoices().find(v => v.name === "Karen");
    if (karen) utterance.voice = karen;
    window.speechSynthesis.speak(utterance);
  };
  if (window.speechSynthesis.getVoices().length > 0) {
    say();
  } else {
    let spoke = false;
    window.speechSynthesis.addEventListener("voiceschanged", () => { spoke = true; say(); }, { once: true });
    setTimeout(() => { if (!spoke) say(); }, 500);
  }
}

function getRandomDarkColor() {
  // Generate random dark colors (hues 0-360, low saturation for dark tones)
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 20; // 20-50%
  const lightness = Math.floor(Math.random() * 20) + 35; // 35-55% (dark)
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function renderBoard() {
  board.innerHTML = "";
  const cheatMode = document.getElementById('cheat-mode')?.checked || false;
  deck.forEach((card, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "card";
    button.dataset.index = String(index);
    button.dataset.matchId = String(card.matchId);
    button.setAttribute("role", "gridcell");
    button.setAttribute("aria-label", "Hidden card");
    let frontText = '';
    if (cheatMode) {
      frontText = String(card.matchId);
    }
    // Subtle random rotation and spacing for natural card placement
    const rotation = (Math.random() * 4 - 2); // -2 to +2 degrees
    const offsetX = (Math.random() * 2 - 1); // -1 to +1 pixels
    const offsetY = (Math.random() * 2 - 1); // -1 to +1 pixels
    button.style.transform = `rotate(${rotation}deg) translate(${offsetX}px, ${offsetY}px)`;
    const backContent = card.flagSrc
      ? `<img src="${card.flagSrc}" alt="${card.label}" class="flag-img">`
      : (card.image || "❓");
    const showLabel = currentEdition === "flags" || currentEdition === "bugs" || currentEdition === "dinos";
    const cardLabel = showLabel ? `<span class="flag-label">${card.label}</span>` : "";
    button.innerHTML =
      `<span class="card-face card-front ${currentCardBackPattern}" style="background-color: ${currentCardBackColor}; --card-color: ${currentCardBackColor};">${frontText}</span>` +
      `<span class="card-face card-back emoji-icon${showLabel ? " flag-card" : ""}">${backContent}${cardLabel}</span>`;
    if (cheatMode) {
      button.classList.add('cheat-mode');
    }
    board.appendChild(button);
  });
}

function updateCardUI(index) {
  const button = board.querySelector(`button[data-index="${index}"]`);
  if (!button) {
    return;
  }
  const card = deck[index];
  const showBack = card.flipped || card.matched;
  button.classList.toggle("flipped", showBack);
  button.classList.toggle("matched", card.matched);
  button.disabled = card.matched;
  button.setAttribute("aria-label", showBack ? `Card ${card.label}` : "Hidden card");
}

function resetSelections() {
  firstSelection = null;
  secondSelection = null;
}

function advancePlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
}

function endGame() {
  stopGameTimer();
  clearTurnTimer();
  lockBoard = true;
  const highestScore = Math.max(...players.map((player) => player.score));
  let message = "";
  if (players.length === 1) {
    message = `You found ${highestScore} pairs!`;
  } else {
    const winners = players
      .filter((player) => player.score === highestScore)
      .map((player) => player.name);
    message =
      winners.length === 1
        ? `${winners[0]} wins with ${highestScore} pairs!`
        : `Tie between ${winners.join(" and ")} with ${highestScore} pairs each.`;
  }

  board.querySelectorAll("button.card").forEach((button) => {
    button.disabled = true;
  });

  renderScoreboard();
}

function handleMatch(firstIndex, secondIndex) {
  sfx.match();
  clearTurnTimer();
  deck[firstIndex].matched = true;
  deck[secondIndex].matched = true;
  matchedPairs += 1;
  players[currentPlayerIndex].score += 1;

  updateCardUI(firstIndex);
  updateCardUI(secondIndex);
  renderScoreboard();

  window.setTimeout(() => {
    resetSelections();
    if (matchedPairs === TOTAL_PAIRS) {
      endGame();
    } else {
      lockBoard = false;
    }
  }, 600);
}

function handleMismatch(firstIndex, secondIndex) {
  sfx.miss();
  clearTurnTimer();
  window.setTimeout(() => {
    deck[firstIndex].flipped = false;
    deck[secondIndex].flipped = false;
    updateCardUI(firstIndex);
    updateCardUI(secondIndex);
    advancePlayer();
    renderScoreboard();
    resetSelections();
    lockBoard = false;
  }, 800);
}

function evaluateSelection() {
  const firstCard = deck[firstSelection];
  const secondCard = deck[secondSelection];

  if (firstCard.matchId === secondCard.matchId) {
    handleMatch(firstSelection, secondSelection);
  } else {
    handleMismatch(firstSelection, secondSelection);
  }
}

function startTurnTimer(ms) {
  clearTurnTimer();
  if (!ms) {
    console.log('startTurnTimer: ms is 0 or falsy, skipping');
    return;
  }
  const timerEl = document.getElementById('turn-timer');
  const fillEl = document.getElementById('timer-fill');
  if (!timerEl || !fillEl) {
    console.error('Timer elements not found');
    return;
  }
  console.log('Timer started for', ms, 'ms');
  timerEl.classList.remove('hidden');
  fillEl.style.transition = 'none';
  fillEl.style.width = '100%';
  const start = Date.now();

  turnTimerDisplay = setInterval(() => {
    const elapsed = Date.now() - start;
    const remaining = Math.max(0, ms - elapsed);
    const pct = (remaining / ms) * 100;
    fillEl.style.transition = 'width 0.1s linear';
    fillEl.style.width = pct + '%';
    if (remaining <= 3000) {
      timerEl.classList.add('urgent');
    }
  }, 50);

  {
    const scheduleTick = () => {
      const remaining = Math.max(0, ms - (Date.now() - start));
      const delay = 100 + (remaining / ms) * 900; // 1000ms at start → 100ms at end
      tickInterval = setTimeout(() => {
        sfx.tick();
        if (remaining > 0) scheduleTick();
      }, delay);
    };
    scheduleTick();
  }

  turnTimerInterval = setTimeout(() => {
    console.log('Timer expired!');
    clearTurnTimer();
    // Time's up - if player hasn't flipped 2 cards, auto-advance (local mode only)
    if (secondSelection === null && !multiplayer.active) {
      console.log('Auto-advancing turn');
      handleTimeoutTurn();
    }
  }, ms);
}

function handleTimeoutTurn() {
  sfx.timerOut();
  if (firstSelection !== null) {
    // Flip back any revealed card
    deck[firstSelection].flipped = false;
    updateCardUI(firstSelection);
  }
  resetSelections();
  advancePlayer();
  renderScoreboard();
  if (players.length > 1) {
  }
  lockBoard = false;
  // Timer will start when the next player flips their first card
}

function clearTurnTimer() {
  if (tickInterval) {
    clearTimeout(tickInterval);
    tickInterval = null;
  }
  if (turnTimerDisplay) {
    clearInterval(turnTimerDisplay);
    turnTimerDisplay = null;
  }
  if (turnTimerInterval) {
    clearTimeout(turnTimerInterval);
    turnTimerInterval = null;
  }
  const timerEl = document.getElementById('turn-timer');
  if (timerEl) {
    timerEl.classList.add('hidden');
    timerEl.classList.remove('urgent');
  }
}

function handleCardSelection(index) {
  if (multiplayer.active) {
    if (lockBoard) {
      return;
    }
    const currentPlayer = players[currentPlayerIndex];
    if (currentPlayer && currentPlayer.id !== multiplayer.playerId) {
      return;
    }
    sendMessage({ type: "select-card", index });
    return;
  }

  if (lockBoard) {
    return;
  }

  const card = deck[index];
  if (!card || card.flipped || card.matched) {
    return;
  }

  card.flipped = true;
  updateCardUI(index);
  const isMatch = firstSelection !== null && deck[firstSelection].matchId === card.matchId;
  const matchText = card.label === "Octopus" ? "AWWWW, Pink baby octopus!" : "Pair ringo!";
  speak(isMatch ? matchText : card.label);

  if (firstSelection === null) {
    sfx.flip();
    // Show restart button on first card flip
    showRestartButton();
    // Increment turn counter when a new turn starts
    turnCount += 1;
    // Start overall game timer for single player on first flip
    if (players.length === 1 && !gameTimerStart) startGameTimer();
    firstSelection = index;
    // Turn timer only for multiplayer
    if (players.length > 1) {
      // Calculate time based on pairs discovered: 8s at start, 3s when all pairs found
      const pairsDiscovered = matchedPairs;
      const timeSeconds = Math.max(3, 8 - (pairsDiscovered / TOTAL_PAIRS) * 5);
      const timeMs = timeSeconds * 1000 * 0.8;
      startTurnTimer(timeMs);
    }
    if (players.length > 1) {
    }
    return;
  }

  secondSelection = index;
  lockBoard = true;
  evaluateSelection();
}

function startGameTimer() {
  const el = document.getElementById("game-timer");
  if (!el) return;
  gameTimerStart = Date.now();
  el.classList.remove("hidden");
  el.textContent = "0:00";
  gameTimerInterval = setInterval(() => {
    const secs = Math.floor((Date.now() - gameTimerStart) / 1000);
    el.textContent = `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
  }, 500);
}

function stopGameTimer() {
  if (gameTimerInterval) {
    clearInterval(gameTimerInterval);
    gameTimerInterval = null;
  }
}

function resetGameTimer(showIdle = false) {
  stopGameTimer();
  gameTimerStart = null;
  const el = document.getElementById("game-timer");
  if (el) {
    el.textContent = "0:00";
    el.classList.toggle("hidden", !showIdle);
    el.textContent = "0:00";
  }
}

function startGame() {
  if (multiplayer.active) {
    return;
  }
  hideRestartButton();
  players = Array.from({ length: getPlayerCount() }, (_, index) => ({
    name: `Player ${index + 1}`,
    score: 0,
  }));
  currentPlayerIndex = 0;
  firstSelection = null;
  secondSelection = null;
  lockBoard = false;
  matchedPairs = 0;
  multiplayerGameOver = false;
  turnCount = 0;
  clearTurnTimer();
  resetGameTimer(getPlayerCount() === 1);
  // Pick card back pattern and color for this game
  if (currentEdition === "flags") {
    currentCardBackPattern = "pattern-flags";
    currentCardBackColor = "transparent";
  } else if (currentEdition === "bugs") {
    currentCardBackPattern = "pattern-bugs";
    currentCardBackColor = "transparent";
  } else if (currentEdition === "dinos") {
    currentCardBackPattern = "pattern-dinos";
    currentCardBackColor = "transparent";
  } else {
    currentCardBackPattern = CARD_BACK_PATTERNS[Math.floor(Math.random() * CARD_BACK_PATTERNS.length)];
    currentCardBackColor = getRandomDarkColor();
  }
  deck = createDeck();
  currentDeckSignature = "";

  renderBoard();
  renderScoreboard();
  if (players.length > 1) {
  }
}

function updateUrlWithRoom(roomId) {
  const url = new URL(window.location.href);
  if (roomId) {
    url.searchParams.set("room", roomId);
  } else {
    url.searchParams.delete("room");
  }
  window.history.replaceState({}, "", url.toString());
}

function applyEdition(edition) {
  if (!edition || edition === currentEdition) return false;
  currentEdition = edition;
  document.querySelectorAll(".edition-pill").forEach(b => {
    b.classList.toggle("active", b.dataset.edition === edition);
  });
  document.getElementById("speech-toggle-label")?.classList.toggle("hidden", edition === "default");
  return true;
}

function applyServerState(state) {
  if (!state) {
    return;
  }
  const editionChanged = applyEdition(state.edition);
  const signature = state.deck.join(",");
  if (signature !== currentDeckSignature || editionChanged) {
    deck = buildDeckFromOrder(state.deck, state.iconSeed);
    currentDeckSignature = signature;
    // Generate a new color and pattern for each new game
    currentCardBackPattern = CARD_BACK_PATTERNS[Math.floor(Math.random() * CARD_BACK_PATTERNS.length)];
    currentCardBackColor = getRandomDarkColor();
    renderBoard();
  }

  const matchedSet = new Set(state.matched);
  const revealedSet = new Set(state.revealed);
  deck.forEach((card, index) => {
    card.matched = matchedSet.has(index);
    card.flipped = card.matched || revealedSet.has(index);
    updateCardUI(index);
  });

  players = state.players.map((player) => ({
    id: player.id,
    name: player.name,
    score: player.score,
    connected: player.connected,
  }));
  currentPlayerIndex = players.findIndex(
    (player) => player.id === state.currentPlayerId
  );
  lockBoard = state.locked;
  multiplayerGameOver = state.gameOver;

  turnCount = state.turnCount || 0;

  // Start timer only once when first card in turn is flipped (and timer is enabled)
  // Timer is visible to all players, not just the current player
  const hasFirstCardFlipped = state.revealed && state.revealed.length === 1;

  if (hasFirstCardFlipped && state.speedMs && !multiplayerTurnTimerStarted) {
    multiplayerTurnTimerStarted = true;
    startTurnTimer(state.speedMs);
  } else if (!hasFirstCardFlipped) {
    multiplayerTurnTimerStarted = false;
    clearTurnTimer();
  }

  // Show restart button for host when first card in game is flipped
  if (hasFirstCardFlipped && multiplayer.isHost) {
    showRestartButton();
  }

  renderScoreboard();
  if (state.gameOver) {
    const highestScore = Math.max(...players.map((player) => player.score));
    const winners = players
      .filter((player) => player.score === highestScore)
      .map((player) => player.name);
    const message =
      winners.length === 1
        ? `${winners[0]} wins with ${highestScore} pairs!`
        : `Tie between ${winners.join(" and ")} with ${highestScore} pairs each.`;
    return;
  }

  const currentPlayer = players[currentPlayerIndex];
  if (!currentPlayer) {
    return;
  }
  if (currentPlayer.id === multiplayer.playerId) {
  } else {
  }
}

function getSocketUrl() {
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  return `${protocol}://${window.location.host}`;
}

function ensureSocket() {
  if (
    multiplayer.socket &&
    (multiplayer.socket.readyState === WebSocket.OPEN ||
      multiplayer.socket.readyState === WebSocket.CONNECTING)
  ) {
    return multiplayer.socket;
  }
  const socket = new WebSocket(getSocketUrl());
  multiplayer.socket = socket;
  setConnectionStatus("Connecting...");

  socket.addEventListener("open", () => {
    setConnectionStatus("Connected");
  });

  socket.addEventListener("close", () => {
    setConnectionStatus("Disconnected");
    if (multiplayer.active) {
      multiplayer.active = false;
      multiplayer.roomId = null;
      multiplayer.playerId = null;
      multiplayer.isHost = false;
      setRoomCode("");
      updateUrlWithRoom(null);
      updateMultiplayerControls();
      // Restore player count selector and edition pills to local mode
      const playerCountSelector = document.querySelector('.player-count-selector');
      if (playerCountSelector) playerCountSelector.classList.remove('hidden');
      document.querySelectorAll('.edition-pill').forEach(b => { b.disabled = false; });
      // Hide connection info
      const connectionInfo = document.getElementById('connection-info');
      if (connectionInfo) {
        connectionInfo.classList.add('hidden');
      }
      // Restore buttons in local mode
      hideRestartButton();
      if (inviteButton) inviteButton.classList.remove('hidden');
      // Update join/disconnect button visibility
      updateJoinDisconnectUI();
      startGame();
    }
  });

  socket.addEventListener("message", (event) => {
    let message;
    try {
      message = JSON.parse(event.data);
    } catch (error) {
      return;
    }

    switch (message.type) {
      case "room-created":
      case "room-joined":
        multiplayer.active = true;
        multiplayer.roomId = message.roomId;
        multiplayer.playerId = message.playerId;
        multiplayer.isHost = Boolean(message.isHost);
        setRoomCode(message.roomId);
        updateUrlWithRoom(message.roomId);
        updateMultiplayerControls();
        multiplayerTurnTimerStarted = false;
        // Pick a random card back pattern and color for this game
        currentCardBackPattern = CARD_BACK_PATTERNS[Math.floor(Math.random() * CARD_BACK_PATTERNS.length)];
        currentCardBackColor = getRandomDarkColor();
        // Show connection info
        const connectionInfo = document.getElementById('connection-info');
        if (connectionInfo) {
          connectionInfo.classList.remove('hidden');
        }
        // Hide player count in multiplayer — player count is governed by who joins (max 4)
        document.getElementById('player-count-selector')?.classList.add('hidden');
        // Disable edition pills for non-hosts
        document.querySelectorAll('.edition-pill').forEach(b => { b.disabled = !multiplayer.isHost; });
        // Update join/disconnect button visibility
        updateJoinDisconnectUI();
        if (!multiplayer.isHost) hideRestartButton();
        applyServerState(message.state);
        if (pendingInviteCopy) {
          pendingInviteCopy = false;
          doCopyLink();
        }
        break;
      case "state-update":
        applyServerState(message.state);
        break;
      case "error":
        break;
      default:
        break;
    }
  });

  return socket;
}

function sendMessage(payload) {
  const socket = ensureSocket();
  const message = JSON.stringify(payload);
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(message);
    return;
  }
  socket.addEventListener(
    "open",
    () => {
      socket.send(message);
    },
    { once: true }
  );
}

function hostMultiplayer() {
  sendMessage({ type: "create-room", speedMs: 12000, edition: currentEdition });
}

function joinMultiplayer(code) {
  if (!code) {
    return;
  }
  sendMessage({ type: "join-room", roomId: code });
}

function fallbackCopyInvite(link) {
  window.prompt("Copy this link to invite others:", link);
}

function doCopyLink() {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("room", multiplayer.roomId);
  const link = url.toString();

  const doConfirm = () => {
    if (shareButton) {
      const prev = shareButton.innerHTML;
      shareButton.textContent = "✓";
      setTimeout(() => { shareButton.innerHTML = prev; }, 2000);
    }
  };

  if (navigator.share) {
    navigator.share({ title: "Join my Pairingo game!", url: link }).catch(() => {});
  } else if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(link).then(doConfirm).catch(() => fallbackCopyInvite(link));
  } else {
    fallbackCopyInvite(link);
  }
}

function copyInviteLink() {
  if (multiplayer.roomId) {
    // Already in a room — just copy the link
    doCopyLink();
  } else {
    // Create a room first, copy link once room-created fires
    pendingInviteCopy = true;
    hostMultiplayer();
  }
}

board.addEventListener("click", (event) => {
  const button = event.target.closest("button.card");
  if (!button) {
    return;
  }
  handleCardSelection(Number(button.dataset.index));
});

// Restart button removed - game auto-starts on first card flip

inviteButton.addEventListener("click", () => {
  copyInviteLink();
});

if (shareButton) {
  shareButton.addEventListener("click", () => {
    doCopyLink();
  });
}

joinButton.addEventListener("click", () => {
  const code = roomInput.value.trim().toUpperCase();
  joinMultiplayer(code);
});

roomInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const code = roomInput.value.trim().toUpperCase();
    joinMultiplayer(code);
  }
});

disconnectButton.addEventListener("click", () => {
  if (multiplayer.socket && multiplayer.socket.readyState === WebSocket.OPEN) {
    multiplayer.socket.close();
  }
});

// Restart button
const restartButton = document.getElementById('restart-btn');
if (restartButton) {
  restartButton.addEventListener('click', () => {
    if (multiplayer.active) {
      sendMessage({ type: "restart-game" });
    } else {
      startGame();
    }
  });
}

function showRestartButton() {
  if (multiplayer.active && !multiplayer.isHost) return;
  if (restartButton) restartButton.style.display = 'block';
  document.getElementById('player-count-selector')?.style.setProperty('display', 'none');
}

function hideRestartButton() {
  if (restartButton) restartButton.style.display = 'none';
  document.getElementById('player-count-selector')?.style.setProperty('display', 'grid');
}



// UI toggle (slide controls/scoreboard off-screen)
const toggleUIBtn = document.getElementById("toggle-ui");
const app = document.querySelector(".app");

toggleUIBtn.addEventListener("click", () => {
  app.classList.toggle("ui-hidden");
  toggleUIBtn.classList.toggle("collapsed");
});

const roomParam = new URLSearchParams(window.location.search).get("room");
if (roomParam) {
  roomInput.value = roomParam;
  joinMultiplayer(roomParam.toUpperCase());
}

// Enable cheat mode if ?cheat=on is in the URL
const cheatParam = new URLSearchParams(window.location.search).get("cheat");
const cheatModeCheckbox = document.getElementById('cheat-mode');
if (cheatParam === "on" && cheatModeCheckbox) {
  cheatModeCheckbox.checked = true;
}

// Restore saved edition
const savedEdition = localStorage.getItem("edition");
if (savedEdition) {
  const pill = document.querySelector(`.edition-pill[data-edition="${savedEdition}"]`);
  if (pill) {
    document.querySelectorAll(".edition-pill").forEach(b => b.classList.remove("active"));
    pill.classList.add("active");
    currentEdition = savedEdition;
    document.getElementById("speech-toggle-label")?.classList.toggle("hidden", currentEdition === "default");
  }
}

// Switch edition
document.querySelectorAll(".edition-pill").forEach(btn => {
  btn.addEventListener("click", () => {
    if (multiplayer.active && !multiplayer.isHost) return;
    document.querySelectorAll(".edition-pill").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentEdition = btn.dataset.edition;
    localStorage.setItem("edition", currentEdition);
    document.getElementById("speech-toggle-label")?.classList.toggle("hidden", currentEdition === "default");
    if (multiplayer.active && multiplayer.isHost) {
      sendMessage({ type: "set-edition", edition: currentEdition });
    } else {
      startGame();
    }
  });
});

// Restart game when player count changes
playerCountInputs.forEach((input) => {
  input.addEventListener('change', () => {
    if (!multiplayer.active) {
      updateJoinDisconnectUI();
      startGame();
    }
  });
});

updateMultiplayerControls();
startGame();

