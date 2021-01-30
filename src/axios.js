import axios from "axios";

const request = axios.create({
	baseURL: "http://api.themoviedb.org/3",
});

export default request;
