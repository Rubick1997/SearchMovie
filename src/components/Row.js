import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import {request} from "../axios";
import "../Row.css";
import { formatDate } from "../functions";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { imgUrl } from "../requests";
import { Link} from "react-router-dom";

function ItemRow({ title, fetchUrl,type }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const info = await request.get(fetchUrl);
				setItems(info.data.results);
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
				{items
					.filter((item) => item.backdrop_path)
					.map((item) => (
						<div className='row_poster' key={item.id}>
							<img
								className='poster_img'
								src={`${imgUrl}${item.poster_path}`}
								alt={item.title + "poster"}
							/>
							<Link
								to={`/${type}/${item.id}`}
								style={{ color: "black", textDecoration: "none" }}>
								<h3>{item.title || item?.name}</h3>
							</Link>
							<Row>
								<Col>
									<p>{formatDate(item.release_date || item.first_air_date)}</p>
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
											value={item.vote_average * 10}
											text={`${item.vote_average * 10}%`}
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

export default ItemRow;
