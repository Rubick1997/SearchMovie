export const API_KEY =
	"Your API Key"; 

export const listRequests = {
	fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
	fetchTrendingShows: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
	fetchTrendingPeople: `
trending/person/week?api_key=${API_KEY}`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	fetchTopRatedShows: `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export const imgUrl = "https://image.tmdb.org/t/p/original";
