export const API_KEY = "cdd3c5ce5ede207e5ca373b35395541c";

export const listRequests = {
	fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
	fetchTrendingShows: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
	fetchTrendingPeople: `
/trending/person/week?api_key=${API_KEY}&language=en-US`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	fetchTopRatedShows: `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};
