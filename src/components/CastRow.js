import React, { useEffect, useState } from "react";
import "../Row.css";
import { imgUrl } from "../requests";
import { API_KEY } from "../requests";
import { Row } from "reactstrap";
import nopicture from "../img/nopicture.png";
import { Link } from "react-router-dom";

function Cast({ item, title, id }) {
	const [casts, setCast] = useState([]);
	const [crew, setCrew] = useState([]);
	const [isHidden, setIsHidd] = useState(false);

	const handleHidden = (array) => {
		if (array.length > 0) {
			setIsHidd((prevState) => !prevState);
		}
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(
					`https://api.themoviedb.org/3/${item}/${id}/credits?api_key=${API_KEY}&language=en-US`
				);
				const info = await data.json();
				setCast(info.cast);
				setCrew(info.crew);
				handleHidden(info.cast);
				return info;
			} catch (error) {
				alert(error.message);
			}
		}
		fetchData();
	}, [item, id]);

	console.log(casts);

	return (
		isHidden && (
			<Row style={{ padding: "20px" }}>
				<h3>{title}</h3>
				<div className='row_line'>
					{crew

						.filter(function (person) {
							return person.job === "Director";
						})
						.map((person) => (
							<div className='row_poster' key={person.id}>
								<img
									className='poster_img'
									src={
										person.profile_path
											? `${imgUrl}${person.profile_path}`
											: `${nopicture}`
									}
									alt={person.name + "poster"}
								/>
								<Link
									to={`/person/${person?.id}`}
									style={{ color: "black", textDecoration: "none" }}>
									<h3>{person.name}</h3>
								</Link>
								<h1>Director</h1>
							</div>
						))}
					{casts.slice(0, 15).map((person) => (
						<div className='row_poster' key={person.id}>
							<img
								className='poster_img'
								src={
									person.profile_path
										? `${imgUrl}${person.profile_path}`
										: `${nopicture}`
								}
								alt={person.name + "poster"}
							/>
							<Link
								to={`/person/${person?.id}`}
								style={{ color: "black", textDecoration: "none" }}>
								<h3>{person.name}</h3>
							</Link>
							<p>{person.character}</p>
						</div>
					))}
				</div>
			</Row>
		)
	);
}

export default Cast;
