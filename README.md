# ❤️ For My Fiancée — Interactive Surprise Website

A funny, deeply romantic, and highly interactive static Angular web experience designed as a progressive journey to surprise your fiancée.

---

## 🌟 The Experience Journey

Rather than a simple one-page scroll, this website is structured as a **7-chapter interactive story** where she discovers each step by interacting:

1. **Screen 1 — The Mysterious Welcome (`/welcome`)**: Romantic opening scene with floating particles, teaser message, and an "I'm ready 😎" button that triggers a heart explosion.
2. **Screen 2 — Fiancée Verification System™ (`/verify`)**: A humorous challenge with 4 funny biometric questions, live security scanning verdicts, and instant comedic commentary.
3. **Screen 3 — How We Became... Us ❤️ (`/story`)**: An interactive timeline with animated connecting lines, glowing nodes, and expandable modal cards featuring milestone stories and honest fiancé thoughts.
4. **Screen 4 — Polaroid Memory Scrapbook (`/memories`)**: A virtual polaroid wall with realistic tilted photos, smooth hover straightening, lightbox zoom view, memory shuffle (`🔀`), and a forbidden suspicious button!
5. **Screen 5 — ∞ Reasons I Love You (`/reasons`)**: A giant beating heart that serves dynamic reasons from a collection of 25+ heartwarming and funny declarations, with ambient hue shifts and particle bursts.
6. **Screen 6 — "Catch The Hearts" Mini-Game (`/game`)**: A 20-second interactive arcade game where flying hearts, sparkle hearts, and engagement rings appear to test her reflexes, ending in a sweet punchline.
7. **Screen 7 & Final Romantic Surprise (`/finale`)**: A dramatic fake ending ("The surprise is over... Wait... I forgot something") leading into the grand finale with falling petals, couple photo, customizable love letter, and proposal reaffirmation buttons.

---

## 🚀 How to Run Locally

### 1. Prerequisites
- Node.js (version 18, 20, or newer recommended)
- npm

### 2. Install & Start
Open a terminal in the project folder and run:
```bash
# Install dependencies (if not already installed)
npm install

# Start development server
npm start
# or: ng serve
```

Open your browser and navigate to:
```
http://localhost:4200
```

---

## 🛠️ Personalization & Customization Guide

Everything in this website is centralized in **one single file**:
📂 **`src/app/data/relationship-data.ts`**

You do **not** need to hunt through component files. Open `src/app/data/relationship-data.ts` to customize:

### 1. Couple Names & Important Dates
In `RELATIONSHIP_CONFIG.couple`:
```typescript
couple: {
  fianceeName: 'YOUR_FIANCEE_NAME',       // e.g. 'Sarah' or 'Priya'
  fianceeNickname: 'My Beautiful Fiancée', // The title in the top capsule
  fianceName: 'YOUR_NAME',               // Your name
  relationshipStartDate: '14 February 2023',
  engagementDate: '24 December 2024',
  weddingDate: 'Coming Soon'
}
```

### 2. Adding Your Own Photos 📸
1. Place your photo files inside:
   ```
   src/assets/images/
   ```
   *(e.g., `my-proposal.jpg`, `vacation.jpg`, `first-date.jpg`)*
2. In `src/app/data/relationship-data.ts`:
   - In the `timeline` array, update the `image` field:
     ```typescript
     image: 'assets/images/my-first-date.jpg'
     ```
   - In the `memories` array, update each polaroid's `image` and text:
     ```typescript
     {
       id: 1,
       title: 'First Date Magic',
       date: '12 June 2023',
       location: 'Our Favorite Cafe',
       caption: 'The night everything started.',
       funnyComment: 'You took 45 minutes to decide on dessert.',
       image: 'assets/images/our-photo1.jpg',
       rotation: -3
     }
     ```
   - In `finale.partnerPhoto`, update your favorite couple picture.

> [!TIP]
> **Graceful Fallbacks Included**: The website comes pre-loaded with beautiful vector SVG illustrations (`photo1.svg` to `photo10.svg`, milestone SVGs, and couple illustrations). If an image path is missing or fails to load, the site automatically falls back to an artistic vector graphic so it never breaks!

### 3. Adding Background Music 🎵
1. Save your romantic MP3 song to:
   ```
   src/assets/audio/romantic-song.mp3
   ```
2. The floating music button (bottom right) lets your fiancée play or pause the music whenever she wants.

> [!NOTE]
> **Built-in Web Audio Melodic Synthesizer**: If no MP3 is placed yet, clicking the music button will automatically play a warm, soothing ambient romantic chime arpeggio using the browser's Web Audio API. It works out of the box with zero external files needed!

---

## 🕵️‍♀️ 5 Secret Easter Eggs (Hidden Surprises)

The website features 5 interactive easter eggs for her to discover:

1. **Logo 5-Tap Discovery**:
   - Tap the top-left couple heart logo 5 times.
   - **Unlocks**: "Curious Detective" badge and a coupon for 100 Unlimited Fiancé Hugs.
2. **The Konami Code**:
   - On desktop, press `↑ ↑ ↓ ↓ ← → ← →` (Arrow keys).
   - **Unlocks**: "Cheat Code Activated!" with a coupon for a Free Back Massage & Dinner of her choice.
3. **Suspicious Button**:
   - On Screen 4 (Memories Scrapbook), click `"⚠️ Definitely DON'T click this 👀"`.
   - **Unlocks**: "Rebel Fiancée" popup with a funny curious cat meme and restaurant debate immunity coupon.
4. **The Secret Micro-Sparkle**:
   - At the very bottom of Screen 1 (Welcome page), click the tiny faint `✨` sparkle.
   - **Unlocks**: "The Hidden Sparkle" badge and breakfast in bed reward coupon.
5. **Classified Memory Vault**:
   - Triggered through the chapter drawer hints or milestone secrets.

All easter egg titles, badges, and rewards can be easily edited in `RELATIONSHIP_CONFIG.easterEggs` inside `relationship-data.ts`.

---

## 📱 Mobile & Tablet Responsive Design

- Built mobile-first with touch-friendly tap targets.
- Responsive polaroid tilt and touch lightbox.
- Interactive canvas hearts that follow finger touch movement.
- Smooth CSS hardware-accelerated animations that respect `prefers-reduced-motion`.
- Top floating progress capsule showing `❤️ X / 7` with a clickable drawer to revisit unlocked chapters.
