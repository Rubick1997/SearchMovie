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
		// <Card>
		// 	<CardBody>
		// 		<Row>
		// 			<Col>
		// 				<img
		// 					className='card-img'
		// 					src={`${imgUrl2}${movie.backdrop_path}`}
		// 					alt={movie.title + "poster"}
		// 				/>
		// 			</Col>
		// 			<Col>
		// 				<CardTitle>
		// 					<h3>
		// 						{movie.title} ({getYear(movie.release_date)})
		// 					</h3>
		// 				</CardTitle>
		// 			</Col>
		// 		</Row>
		// 	</CardBody>
		// </Card>
	);
}

export default MovieCard;
