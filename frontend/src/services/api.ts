const API_URL = "http://192.168.1.10:8000";
export async function getSongs() {

  const response = await fetch(`${API_URL}/songs`);

  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }

  return await response.json();

}



export async function getSongsByMood(mood: string) {

  const response = await fetch(
    `${API_URL}/songs/${encodeURIComponent(mood)}`
  );


  if (!response.ok) {
    throw new Error("Failed to fetch songs by mood");
  }


  return await response.json();

}