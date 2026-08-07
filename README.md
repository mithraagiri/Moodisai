# 🎵 Moodisai

### Music that matches your mood.

MoodMuse is a music companion that recommends songs based on how you feel.

What started as a simple Python mood-based recommendation project has evolved into a responsive, full-stack web application with mood-based recommendations, multi-language support, insights, music links, an interactive chatbot, and a modern glassmorphism interface.

🌐 **Live Demo:** https://moodmuse-eight.vercel.app
💻 **GitHub:** https://github.com/mithraagiri/MoodMuse

---

# 📌 About the Project

MoodMuse combines music, emotions, and technology to create a personalized music discovery experience.

Users can select their mood and preferred language, and MoodMuse finds a suitable song from its curated music library. The recommendation experience includes mood matching, insights, song information, and direct Spotify and YouTube links.

The project began as a simple Python program and gradually evolved into a full-stack web application using React, TypeScript, Tailwind CSS, FastAPI, and REST APIs.

---

# ✨ Features

## 🎵 Music Recommendation

* 😊 Mood-based song recommendations
* 🎯 Mood Match percentage
* 🤖 Recommendation experience
* 💡 MoodMuse Insight for each recommendation
* 🔄 Find Another Song option
* 🎲 Randomized song selection
* 🎵 Song title and artist information
* 🌎 Language information
* 🎼 Genre information
* ⏱️ Song duration
* 🎧 Direct Spotify links
* ▶️ Direct YouTube links

## 🎭 Mood Experience

* 16 different mood categories
* Interactive mood selection
* Personalized recommendations based on the selected mood
* Mood-aware responses
* Visual mood experience
* Animated music visualizer

## 🌎 Language Support

* 🇬🇧 English
* 🇮🇳 Tamil
* 🇮🇳 Telugu
* 🇮🇳 Malayalam
* 🌐 All Languages option

## 🤖 Mia — Music Companion

* 💬 Interactive chatbot
* 🎵 Music-related conversations
* 😊 Mood-aware responses
* 🤖 Personalized music suggestions
* ✨ Friendly companion experience

## 🎨 UI & Experience

* 🌙 Dark mode
* ☀️ Light mode
* 🪟 Glassmorphism interface
* ✨ Smooth animations
* 🎧 Music visualizer
* 📱 Responsive design
* 💻 Desktop optimization
* 📱 Mobile optimization
* 🖥️ Tablet / iPad optimization
* 🎨 Modern gradient-based visual design
* 🔘 Interactive buttons and cards
* 👤 Creator section
* 🧭 Smooth navigation and scrolling

## ⚡ Application Features

* ⚛️ Component-based React architecture
* 🔄 React state management
* 🔌 Frontend-to-backend API communication
* 🚀 FastAPI REST API
* 📄 JSON-based music database
* 🔀 Mood and language filtering
* 🌐 Production deployment
* 🔗 GitHub version control

---

# 🎭 Available Moods

MoodMuse currently includes **16 mood categories**:

1. 😊 **Happy**
2. 😢 **Sad**
3. ⚡ **Energetic**
4. 🔥 **Motivated**
5. 😌 **Relaxed**
6. ❤️ **Romantic**
7. 😴 **Sleep**
8. 🌧️ **Rainy**
9. 🌅 **Morning**
10. 🌙 **Night**
11. 🎉 **Party**
12. 💔 **Heartbreak**
13. 🧘 **Meditation**
14. 🚗 **Road Trip**
15. 📚 **Study**
16. 🎮 **Gaming**

---

# 🛠️ Technologies Used

## Frontend

* ⚛️ React
* 📘 TypeScript
* 🎨 Tailwind CSS
* ⚡ Vite
* 🧩 React Hooks

## Backend

* 🐍 Python
* 🚀 FastAPI
* 📡 REST API
* 📄 JSON

## Development & Deployment

* 🐙 Git
* 🐙 GitHub
* ▲ Vercel
* 🚀 Render
* 💻 VS Code

---

# 🧠 Concepts Learned

Building MoodMuse helped me progress from Python fundamentals to full-stack web development.

### Python

* Variables and data types
* User input and output
* Conditional statements
* Loops
* Dictionaries
* Functions
* Randomization
* Modular programming

### React & TypeScript

* React components
* Props
* State management
* React Hooks
* `useState`
* `useEffect`
* TypeScript types and interfaces
* Component communication
* Conditional rendering

### Web Development

* Responsive design
* Tailwind CSS
* Flexbox
* CSS Grid
* Animations
* Themes
* UI component design
* Mobile-first considerations

### Backend & APIs

* FastAPI
* REST API development
* API endpoints
* Frontend/backend communication
* JSON data handling
* CORS
* Production API deployment

### Development Workflow

* Git
* GitHub
* Debugging
* Deployment
* Environment configuration
* Connecting frontend and backend services

---

# 🔄 How MoodMuse Works

```text
User
  │
  ▼
Choose a Mood
  │
  ▼
Choose a Language
  │
  ▼
Generate My Recommendation
  │
  ▼
React Frontend
  │
  ▼
FastAPI Backend
  │
  ▼
Song Library
  │
  ▼
Mood + Language Matching
  │
  ▼
Recommendation Experience
  │
  ├── 🎵 Song
  ├── 🎤 Artist
  ├── 🌎 Language
  ├── 🎼 Genre
  ├── ⏱️ Duration
  ├── 🎯 Mood Match
  ├── 🤖 Insight
  └── 🔗 Spotify / YouTube
```

---

# 🏗️ Project Structure

```text
MoodMuse/
│
├── MoodMuse.py
├── README.md
│
├── backend/
│   ├── main.py
│   ├── songs.json
│   ├── requirements.txt
│   └── ...
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── data/
    │   ├── pages/
    │   ├── services/
    │   └── utils/
    ├── package.json
    └── ...
```

---

# 🚀 How to Run Locally

## 1. Clone the repository

```bash
git clone https://github.com/mithraagiri/MoodMuse.git
cd MoodMuse
```

## 2. Start the backend

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

### macOS / Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

## 3. Start the frontend

Open another terminal:

```bash
cd MoodMuse/frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local development URL.

---

# 🌐 Live Deployment

MoodMuse is deployed as a full-stack web application.

### Frontend

**Vercel**

### Backend

**Render**

### Source Code

**GitHub**

🌐 **Live Demo:**
https://moodmuse-eight.vercel.app

💻 **GitHub Repository:**
https://github.com/mithraagiri/MoodMuse

---

# 📷 Project Preview

Screenshots can be added here.

Suggested screenshots:

* 🏠 Home page
* 🎭 Mood selection
* 🌎 Language selection
* 🤖 Recommendation
* 🎯 Mood Match card
* 💬 Talk with Mia
* 🎨 Dark mode
* ☀️ Light mode
* 📱 Mobile interface
* 👤 Creator section

---

# 🔮 Future Improvements

MoodMuse is still evolving. Future possibilities include:

* 🧠 More advanced recommendations
* 🎤 Natural-language mood detection
* 🎵 Larger music library
* 💾 Mood and recommendation history
* ⭐ Favorite songs
* 🎧 Personalized playlists
* 📊 Mood and listening analytics
* 👤 User profiles
* 🌐 Additional language support
* ☁️ Database integration
* 🔗 Deeper music platform integrations
* 📱 Progressive Web App support

---

# 💡 Project Journey

MoodMuse started as a small Python project created to practice programming fundamentals.

It gradually evolved into a full-stack application while exploring:

```text
Python
   ↓
Web Development
   ↓
React
   ↓
TypeScript
   ↓
Tailwind CSS
   ↓
FastAPI
   ↓
REST APIs
   ↓
Features
   ↓
Deployment
```

The goal was not simply to build a project, but to learn by continuously improving it.

> **A small project today, a bigger vision tomorrow. 🎧✨**

---

# 👨‍💻 Author

## Mithraa G

Student & Developer interested in:

* 🤖 Artificial Intelligence
* 💻 Software Development
* 📊 Data Science
* 🎵 Music & Technology

### GitHub

https://github.com/mithraagiri

---

# ⭐ Support

If you find MoodMuse interesting, consider giving the repository a ⭐ on GitHub!

**Made with 💙, code, and a lot of music. 🎧**
