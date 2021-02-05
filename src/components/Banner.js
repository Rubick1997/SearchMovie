import React, { useState } from "react";
import { imgUrl2 } from "../requests";
import { Col, Row } from "reactstrap";
import { getYear, fullDate, convertTime } from "../functions";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../Banner.css";

function Banner({ item }) {
	const { genres = [] } = item;
	const [trailerUrl, setTrailerUrl] = useState("");

	console.log(item);

	const opts = {
		height: "300px",
		width: "99%",
		playerVars: {
			autoplay: 0,
		},
	};

	const handleClick = (item) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(item?.title || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};
	return (
		<div
			className='banner img-fluid'
			style={{
				clear: "both",
				backgroundImage: `url(
                ${imgUrl2}${item.backdrop_path}
			)`,
				backgroundSize: " cover",
				position: "absolute",
				right: " 0px",
				left: "0px",
			}}>
			<div className='banner_contents overlay'>
				<Row>
					<Col sm='5'>
						<img
							className='banner_img img-fluid'
							src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
							alt={item.title + "poster"}
							onClick={() => handleClick(item)}
						/>
					</Col>
					<Col sm='7'>
						<h1 className='banner_title'>
							{item?.title || item?.name || item?.original_name}(
							{getYear(item?.release_date || item.first_air_date)})
						</h1>
						<p>
							{fullDate(item.release_date || item.first_air_date)}(US) •{" "}
							{genres.map((genre, index) => (index ? ", " : "") + genre.name)} •{" "}
							{convertTime(item.runtime || item.episode_run_time)}
						</p>
						<div style={{ width: 50, height: 50, float: "left" }}>
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
								value={item.vote_average * 10}
								text={`${item.vote_average * 10}%`}
								strokeWidth={5}
							/>
						</div>
						<p>User Score</p>
						<h2 style={{ clear: "both" }}>
							Overview
						</h2>
						<h1 className='banner_description'>{item?.overview}</h1>
						<Row>
							<Col>
								<div style={{ padding: "40px" }}>
									{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Banner;