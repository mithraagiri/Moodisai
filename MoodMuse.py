import random
print("--------Welcome to MoodMuse--------")
print("A perfect music analyzer for your mood!")
print()
name = input("Enter your name: ")
print()
print("Hello " + name + "! Let's find the perfect song for your mood.")
songs = {
    "1": ["Happy - Pharrell Williams", "Can't Stop the Feeling! - Justin Timberlake", "Uptown Funk - Mark Ronson ft. Bruno Mars", "Shake It Off - Taylor Swift", "I Gotta Feeling - The Black Eyed Peas"],
    "2": ["Someone Like You - Adele", "Stay With Me - Sam Smith", "Fix You - Coldplay", "The Night We Met - Lord Huron", "Let Her Go - Passenger"],
    "3": ["Eye of the Tiger - Survivor", "Don't Stop Me Now - Queen", "Stronger - Kanye West", "Can't Hold Us - Macklemore & Ryan Lewis", "Titanium - David Guetta ft. Sia"],
    "4": ["Perfect - Ed Sheeran", "All of Me - John Legend", "Thinking Out Loud - Ed Sheeran", "A Thousand Years - Christina Perri", "I Will Always Love You - Whitney Houston"],
    "5": ["Eye of the Tiger - Survivor", "Lose Yourself - Eminem", "Don't Stop Believin' - Journey", "Hall of Fame - The Script ft. will.i.am", "Stronger - Kanye West"]
}
def recommend_song(mood):
    if mood in songs:
        return random.choice(songs[mood])
    else:
        return None
while True:
    print()
    print("Mood List:")
    print("1. Happy 😀")
    print("2. Sad 😢")
    print("3. Energetic ⚡")
    print("4. Romantic ❤️")
    print("5. Motivational ☀️")
    print("6. Exit")
    print()
    mood = input("\nHow are you feeling?(Select an option): ")
    if mood == "6":
        print("\nThank you for using MoodMuse! Have a great day 🎵")
        break

    song = recommend_song(mood)

    if song:
        print("\nMoodMuse is analyzing your mood...")
        print("Here is a song for you:", song)
        print("Thank you for using MoodMuse! Have a great day")
    else:
        print("\nInvalid option. Please select a valid mood.")
