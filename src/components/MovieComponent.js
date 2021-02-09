import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../requests";
import {
	Row,
	Col,
	Jumbotron,
	Button,
	Card,
	CardBody,
	CardTitle,
	CardText,
} from "reactstrap";
import { getYear } from "../functions";
import Banner from "./Banner";
import Cast from "./CastRow";

function MovieCard({ item, row }) {
	const [movie, setMovie] = useState([]);
	const { id } = useParams();

	useEffect(() => {
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
			<Banner item={movie} key={movie.id} />
			<Cast item={item} id={id} title={row} />
		</React.Fragment>
	);
}

export default MovieCard;
