from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI(
    title="MoodMuse API",
    description="Music recommendation backend",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://192.168.1.10:5173",
        "https://moodmuse-eight.vercel.app",
        "https://moodmuse-backend-npfm.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "MoodMuse Backend is running 🎧"
    }


@app.get("/songs")
def get_songs():
    with open("songs.json", "r", encoding="utf-8") as f:
        return json.load(f)


@app.get("/songs/{mood}")
def get_songs_by_mood(mood: str):
    with open("songs.json", "r", encoding="utf-8") as f:
        songs = json.load(f)

    return [
        song
        for song in songs
        if song["mood"].lower() == mood.lower()
    ]