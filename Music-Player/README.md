# 🎵 Music Player App

A fully functional browser-based music player built with **HTML**, **CSS**, and **vanilla JavaScript** — no frameworks, no libraries.

![Music Player](https://picsum.photos/seed/music/800/300)

---

## 🚀 Live Demo

> 🔗 [View Live](https://anup-patwa.github.io/frontend-projects/music-player/)

---

## 📸 Preview

| Player View | Playlist View |
|---|---|
| ![player](https://picsum.photos/seed/player1/400/250) | ![playlist](https://picsum.photos/seed/player2/400/250) |

---

## ✨ Features

- ▶️ **Play / Pause** — toggle playback with button or `Space` key
- ⏮ ⏭ **Previous / Next** — navigate tracks (respects paused state)
- 🔀 **Shuffle** — random track order
- 🔂 **Repeat** — three modes: Off → Repeat One → Repeat All
- 📊 **Progress Bar** — click or drag to seek anywhere in the track
- 🔈 **Volume Control** — slider + mute/unmute button
- ⌨️ **Keyboard Shortcuts** — `Space` (play/pause), `→` (next), `←` (prev)
- 📋 **Playlist** — clickable track list with duration display

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Structure & Audio element |
| CSS3 | Styling, Flexbox, Responsive layout |
| JavaScript (ES6+) | Audio API, DOM manipulation, State management |

---

## 📁 Project Structure

```
music-player/
├── index.html     → App structure & Audio element
├── style.css      → Dark theme UI styling
└── script.js      → Player logic & event listeners
```

---

## 🧠 Concepts Practiced

- `<audio>` element API (`play`, `pause`, `currentTime`, `duration`)
- DOM event listeners (`timeupdate`, `loadedmetadata`, `ended`)
- State management with JavaScript variables
- Progress bar seek using `pointerdown` / `pointermove` events
- Shuffle & Repeat logic with conditional rendering

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `Space` | Play / Pause |
| `→` Arrow Right | Next Track |
| `←` Arrow Left | Previous Track |

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/anup-patwa/frontend-projects.git

# 2. Open the folder
cd frontend-projects/music-player

# 3. Open in browser
open index.html
```

> No build tools or dependencies needed — just open `index.html` in any modern browser! ✅

---

## 📚 What I Learned

- How to control HTML5 Audio API with JavaScript
- Managing player state (play/pause/shuffle/repeat) using variables
- Implementing drag-to-seek on a custom progress bar
- Handling edge cases (paused state on next/prev, repeat modes)

---

## 👤 Author

**Anup Patwa**
- GitHub: [@anup-patwa](https://github.com/anup-patwa)
- LinkedIn: [linkedin.com/in/anup-patwa](https://linkedin.com/in/anup-patwa)

---

## 📄 License

This project is licensed under the [MIT License](../LICENSE).

---

> ⭐ If you found this helpful, consider giving the repo a star!
