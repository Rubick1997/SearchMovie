import React from "react";
import { Row, Col } from "reactstrap";
import { imgUrl } from "../requests";
import { formatDate } from "../functions";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../Row.css";

const Line = ({ item, type}) => {

	return (
		<div className='row_poster'>
			<img
				className='poster_img'
				src={`${imgUrl}${item?.poster_path || item?.profile_path}`}
				alt={item?.title || item?.name + "poster"}
			/>
			<Link
				to={`/${type}/${item?.id}`}
				style={{ color: "black", textDecoration: "none" }}>
				<h3>{item?.title || item?.name}</h3>
			</Link>
			{item.vote_average && (
				<Row>
					<Col>
						<p>{formatDate(item?.release_date || item?.first_air_date)}</p>
					</Col>
					<Col>
						<div style={{ width: 50 }}>
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
								value={item?.vote_average * 10}
								text={`${item?.vote_average * 10}%`}
								strokeWidth={5}
							/>
						</div>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default Line;
