import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../requests";
import Banner from "./Banner";
import Cast from "./CastRow";
import ReactLoading from "react-loading";

function MovieCard({ item, row }) {
	const [movie, setMovie] = useState([]);
	const { id } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
		async function fetchData() {
			try {
				const data = await fetch(
					`https://api.themoviedb.org/3/${item}/${id}?api_key=${API_KEY}&language=en-US`
				);
				const info = await data.json();
				setMovie(info);
				return info;
			} catch (error) {
				alert(error.message);
			}
		}
		fetchData();
	}, [item, id]);

	return (
		<React.Fragment>
			{loading === false ? (
				<div >
					<Banner item={movie} key={movie.id} />
					<Cast item={item} id={id} title={row} />
				</div>
			) : (
				<ReactLoading type='bars' color='#fff' height='100px' />
			)}
		</React.Fragment>
	);
}

export default MovieCard;
