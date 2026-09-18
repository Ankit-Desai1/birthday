const fs = require('fs');
const path = require('path');

const svgTemplates = [
  { name: 'story-1-first-meeting.svg', title: 'The First Spark ✨', subtitle: 'Where everything began', icon: '✨', bg1: '#ff758f', bg2: '#590d22' },
  { name: 'story-2-first-convo.svg', title: 'The First Conversation 💬', subtitle: 'Hours felt like minutes', icon: '👀', bg1: '#ff4d6d', bg2: '#800f2f' },
  { name: 'story-3-inside-joke.svg', title: 'Our First Inside Joke 😂', subtitle: 'Nobody else gets us', icon: '🤣', bg1: '#ff8fa3', bg2: '#590d22' },
  { name: 'story-4-turning-point.svg', title: 'The Moment Things Changed ❤️', subtitle: 'From friends to everything', icon: '💖', bg1: '#c9184a', bg2: '#39000f' },
  { name: 'story-5-becoming-us.svg', title: 'Officially Us 🥰', subtitle: 'The start of our adventure', icon: '🥰', bg1: '#ff4d6d', bg2: '#590d22' },
  { name: 'story-6-engagement.svg', title: 'The Engagement 💍', subtitle: 'The easiest YES of my life', icon: '💍', bg1: '#ffd166', bg2: '#c9184a' },
  { name: 'story-7-forever.svg', title: 'Everything Still Ahead ♾️', subtitle: 'To infinity and beyond', icon: '♾️', bg1: '#ff758f', bg2: '#39000f' },
  { name: 'photo1.svg', title: 'First Date Magic', subtitle: 'Laughing over cold food', icon: '🍕', bg1: '#ff758f', bg2: '#800f2f' },
  { name: 'photo2.svg', title: 'Sunset Adventures', subtitle: 'Golden hours together', icon: '🌅', bg1: '#ff9e00', bg2: '#c9184a' },
  { name: 'photo3.svg', title: 'Coffee & Chaos', subtitle: 'Half asleep, fully in love', icon: '☕', bg1: '#d4a373', bg2: '#590d22' },
  { name: 'photo4.svg', title: 'Roadtrip Karaoke', subtitle: 'Singing terribly together', icon: '🚗', bg1: '#ff4d6d', bg2: '#3a0ca3' },
  { name: 'photo5.svg', title: 'Proof We Leave The House', subtitle: 'Dressed up and looking fancy', icon: '🥂', bg1: '#e0aaff', bg2: '#590d22' },
  { name: 'photo6.svg', title: 'Rainy Day Cuddles', subtitle: 'My favorite shelter', icon: '🌧️', bg1: '#7209b7', bg2: '#c9184a' },
  { name: 'photo7.svg', title: 'The Yes Moment', subtitle: 'My hands were shaking', icon: '💍', bg1: '#ffd166', bg2: '#800f2f' },
  { name: 'photo8.svg', title: 'Late Night Walks', subtitle: 'Under the quiet moon', icon: '🌙', bg1: '#3a0ca3', bg2: '#ff4d6d' },
  { name: 'photo9.svg', title: 'Cooking Disasters', subtitle: 'Burnt food, sweet memories', icon: '🍳', bg1: '#f72585', bg2: '#590d22' },
  { name: 'photo10.svg', title: 'Pure Happiness', subtitle: 'Laughing until we cry', icon: '🥰', bg1: '#ff758f', bg2: '#c9184a' },
  { name: 'couple-finale.svg', title: 'Forever Starts With Us', subtitle: 'My forever teammate', icon: '💍', bg1: '#ff4d6d', bg2: '#39000f' },
  { name: 'easter-egg-meme.svg', title: 'CURIOUS CAT ALERT! 🚨', subtitle: 'I said DO NOT CLICK!', icon: '😼', bg1: '#ffd166', bg2: '#590d22' }
];

function makeSvg(item) {
  const id = item.name.replace('.svg', '');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${item.bg1}"/>
      <stop offset="100%" stop-color="${item.bg2}"/>
    </linearGradient>
    <filter id="blur-${id}">
      <feGaussianBlur stdDeviation="30"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bg-${id})"/>
  
  <circle cx="120" cy="110" r="140" fill="#ffffff" opacity="0.16" filter="url(#blur-${id})"/>
  <circle cx="480" cy="340" r="160" fill="${item.bg1}" opacity="0.4" filter="url(#blur-${id})"/>

  <rect x="22" y="22" width="556" height="406" rx="16" fill="none" stroke="#ffffff" stroke-opacity="0.35" stroke-width="2" stroke-dasharray="6 6"/>

  <text x="70" y="80" font-size="24" opacity="0.5">✨</text>
  <text x="520" y="90" font-size="28" opacity="0.45">❤️</text>
  <text x="60" y="380" font-size="26" opacity="0.4">💕</text>
  <text x="520" y="380" font-size="24" opacity="0.45">✨</text>

  <g transform="translate(300, 175)">
    <circle cx="0" cy="0" r="62" fill="#ffffff" fill-opacity="0.22" stroke="#ffffff" stroke-opacity="0.6" stroke-width="3"/>
    <text x="0" y="14" font-size="50" text-anchor="middle" dominant-baseline="central">${item.icon}</text>
  </g>

  <text x="300" y="290" font-family="'Playfair Display', Georgia, serif" font-weight="bold" font-size="28" fill="#ffffff" text-anchor="middle">
    ${item.title}
  </text>
  <text x="300" y="328" font-family="'Outfit', sans-serif" font-size="17" fill="#ffffff" fill-opacity="0.88" text-anchor="middle">
    ${item.subtitle}
  </text>

  <text x="300" y="390" font-family="'Outfit', sans-serif" font-size="12" fill="#ffffff" fill-opacity="0.65" text-anchor="middle">
    📷 Replace with your own photo in assets/images/${item.name}
  </text>
</svg>`;
}

const outDirs = [
  path.join(__dirname, 'src/assets/images'),
  path.join(__dirname, 'public/assets/images')
];

outDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

svgTemplates.forEach(t => {
  const content = makeSvg(t);
  outDirs.forEach(dir => {
    fs.writeFileSync(path.join(dir, t.name), content, 'utf8');
  });
});

console.log(`Generated ${svgTemplates.length} placeholder SVGs.`);
