export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a22ec9fd5cmsh53b25368f39b29fp1ab928jsn6c2604dd639f",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "a22ec9fd5cmsh53b25368f39b29fp1ab928jsn6c2604dd639f",
  },
};

export const exercisedbUrl = "https://exercisedb.p.rapidapi.com/exercises";

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log("Error occured fetching data", e);
  }
};
