import React, { useEffect, useState } from "react";
import { Row, Container, Col } from "reactstrap";
import request from "../axios";
import "../Row.css";
import { imgUrl } from "../requests";
import { formatDate } from "../functions";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ShowsRow({ title, fetchUrl }) {
	const [shows, setShows] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const info = await request.get(fetchUrl);
				setShows(info.data.results);
				return info;
			} catch (error) {
				alert(error.message);
			}
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<Container>
			<Row>
				<h3>{title}</h3>
				<div className='row_line'>
					{shows
						.filter((show) => show.backdrop_path)
						.map((show) => (
							<div className='row_poster' key={show.id}>
								<img
									className='poster_img'
									src={`${imgUrl}${show.backdrop_path}`}
									alt={show.title + "poster"}
								/>
								<h3>{show.name}</h3>
								<Row>
									<Col>
										<p>{formatDate(show.first_air_date)}</p>
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
												value={show.vote_average * 10}
												text={`${show.vote_average * 10}%`}
												strokeWidth={5}
											/>
										</div>
									</Col>
								</Row>
							</div>
						))}
				</div>
			</Row>
		</Container>
	);
}

export default ShowsRow;
