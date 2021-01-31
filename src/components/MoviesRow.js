import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import {request} from "../axios";
import "../Row.css";
import { formatDate } from "../functions";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { imgUrl } from "../requests";
import { Link} from "react-router-dom";

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

	return (
		<Row>
			<h3>{title}</h3>
			<div className='row_line'>
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<div className='row_poster' key={movie.id}>
							<img
								className='poster_img'
								src={`${imgUrl}${movie.poster_path}`}
								alt={movie.title + "poster"}
							/>
							<Link
								to={`/movies/${movie.id}`}
								style={{ color: "black", textDecoration: "none" }}>
								<h3>{movie.title}</h3>
							</Link>
							<Row>
								<Col>
									<p>{formatDate(movie.release_date)}</p>
								</Col>
								<Col>
									<div style={{ width: 50, height: 50 }}>
										<CircularProgressbar
											className='rating_circle'
											background
											backgroundPadding={6}
											styles={buildStyles({
												backgroundColor: "#3e98c7",
												textColor: "#fff",
												pathColor: "#fff",
												trailColor: "transparent",
												textSize: "25px",
											})}
											value={movie.vote_average * 10}
											text={`${movie.vote_average * 10}%`}
											strokeWidth={5}
										/>
									</div>
								</Col>
							</Row>
						</div>
					))}
			</div>
		</Row>
	);
}

export default MoviesRow;
