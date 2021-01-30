import React, { useEffect, useState } from "react";
import { Row, Container} from "reactstrap";
import request from "../axios";
import "../Row.css";

const imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

function MoviesRow({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const info = await request.get(fetchUrl);
				setMovies(info.data.results);
				return info;
			} catch (error) {
				alert(error.message);
			}
		}
		fetchData();
	}, [fetchUrl]);

	console.table(movies);
	return (
		<Container>
			<Row>
				<h3>{title}</h3>
				<div className='row_line'>
					{movies.slice(0, 15).map((movie) => (
						<img
							className='row_poster'
							src={`${imgUrl}${movie.poster_path}`}
							alt={movie.title + "poster"}
						/>
					))}
				</div>
			</Row>
		</Container>
	);
}

export default MoviesRow;
