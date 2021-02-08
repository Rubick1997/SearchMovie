import React, { useState, useEffect } from "react";
import { API_KEY } from "../requests";
import { useParams } from "react-router-dom";
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
import { imgUrl } from "../requests";
import { formatDate } from "../functions";
import { Link } from "react-router-dom";

function SearchResults() {
	const [items, setItems] = useState([]);
	const { query } = useParams();

	const itemSearch = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(itemSearch);
				const info = await data.json();
				setItems(info.results);
				return info;
			} catch (error) {
				alert(error.message);
			}
		}
		fetchData();
	}, [itemSearch]);

	console.log(items);

	return (
		<div>
			{items
				.filter((item) => item?.poster_path)
				.map((item) => (
					<Card>
						<CardBody>
							<Row>
								<Col>
									<img
										className='poster_img'
										src={`${imgUrl}${item?.poster_path}`}
										alt={item?.title || item?.name + "poster"}
									/>
								</Col>
								<Col>
									<CardTitle>
										<Link
											to={`/${item.media_type}/${item?.id}`}
											style={{ color: "black", textDecoration: "none" }}>
											<h3>
												{item?.title || item?.name || item?.original_title}
											</h3>
										</Link>
									</CardTitle>
									<CardText>
										<p>
											<small>
												{formatDate(item?.first_air_date || item?.release_date)}
											</small>
										</p>
									</CardText>
								</Col>
							</Row>
						</CardBody>
					</Card>
				))}
		</div>
	);
}

export default SearchResults;
