import React from "react";
import { Row, Col } from "reactstrap";
import { imgUrl } from "../requests";
import { formatDate } from "../functions";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../Row.css";
import nopicture from "../img/nopicture.png";
const Line = ({ item, type }) => {
	const { known_for = [] } = item;

	return (
		<div className='row_poster'>
			<Row>
				<Col>
					<img
						className='poster_img'
						src={
							item.profile_path || item?.poster_path
								? `${imgUrl}${item?.poster_path || item?.profile_path}`
								: `${nopicture}`
						}
						alt={item?.title || item?.name + "poster"}
					/>
					<Link
						to={{
							pathname: `/${type}/${item?.id}`,
						}}
						style={{ color: "black", textDecoration: "none" }}>
						<h3>{item?.title || item?.name}</h3>
					</Link>
				</Col>
			</Row>
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
			{item?.known_for && (
				<Row>
					<Col style={{ wordBreak: "normal" }}>
						{item?.known_for_department}•
						{known_for.map((el, index) => (index ? "," : "") + el?.title)}
					</Col>
				</Row>
			)}
		</div>
	);
};

export default Line;
