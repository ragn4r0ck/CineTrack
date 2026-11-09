const API_URL = "https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json";

export async function getTitles() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
