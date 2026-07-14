import random
print("--------Welcome to MoodMuse--------")
print("A perfect music analyzer for your mood!")
print()
name = input("Enter your name: ")
print()
print("Hello " + name + "! Let's find the perfect song for your mood.")
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
    mood = input("How are you feeling?(Select an option): ")
    if mood != "6":
        print()
        print("MoodMuse is choosing the perfect song for your mood...")
        print()
        if mood == "1":
            happy_songs = ["Happy - Pharrell Williams", "Can't Stop the Feeling! - Justin Timberlake", "Uptown Funk - Mark Ronson ft. Bruno Mars", "Shake It Off - Taylor Swift", "I Gotta Feeling - The Black Eyed Peas"]
            print("Here is a happy song for you: " + random.choice(happy_songs))
            print("Thank you for using MoodMuse! Have a great day!")
        elif mood == "2":
            sad_songs = ["Someone Like You - Adele", "Stay With Me - Sam Smith", "Fix You - Coldplay", "The Night We Met - Lord Huron", "Let Her Go - Passenger"]
            print("Here is a sad song for you: " + random.choice(sad_songs))
            print("Thank you for using MoodMuse! Have a great day!")
        elif mood == "3":
            en_songs = ["Eye of the Tiger - Survivor", "Don't Stop Me Now - Queen", "Stronger - Kanye West", "Can't Hold Us - Macklemore & Ryan Lewis", "Titanium - David Guetta ft. Sia"]
            print("Here is an energetic song for you: " + random.choice(en_songs))
            print("Thank you for using MoodMuse! Have a great day!")
        elif mood == "4":
            rom_songs = ["Perfect - Ed Sheeran", "All of Me - John Legend", "Thinking Out Loud - Ed Sheeran", "A Thousand Years - Christina Perri", "I Will Always Love You - Whitney Houston"]
            print("Here is a romantic song for you: " + random.choice(rom_songs))
            print("Thank you for using MoodMuse! Have a great day!")
        elif mood == "5":
            mot_songs = ["Eye of the Tiger - Survivor", "Lose Yourself - Eminem", "Don't Stop Believin' - Journey", "Hall of Fame - The Script ft. will.i.am", "Stronger - Kanye West"]
            print("Here is a motivational song for you: " + random.choice(mot_songs))
            print("Thank you for using MoodMuse! Have a great day!")
        else:
            print("Invalid option. Please select a valid mood.")
            print("Thank you for using MoodMuse! Have a great day!")
    else:
        print("Thank you for using MoodMuse! Have a great day!")
        break