import React, { useEffect, useState } from "react";
import "../Row.css";
import { imgUrl } from "../requests";
import { API_KEY } from "../requests";
import { Row } from "reactstrap";

function Cast({ item, title, id }) {
	const [casts, setCast] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(
					`https://api.themoviedb.org/3/${item}/${id}/credits?api_key=${API_KEY}&language=en-US`
				);
				const info = await data.json();
				setCast(info.cast);
				return info;
			} catch (error) {
				alert(error.message);
			}
		}
		fetchData();
	}, [item, id]);

	return (
		<Row>
			<h3>{title}</h3>
			<div className='row_line'>
				{casts
					.filter((person) => person.profile_path)
					.slice(0, 15)
					.map((person) => (
						<div className='row_poster' key={person.id}>
							<img
								className='poster_img'
								src={`${imgUrl}${person.profile_path}`}
								alt={person.name + "poster"}
							/>
							<h3>{person.name}</h3>
						</div>
					))}
			</div>
		</Row>
	);
}

export default Cast;
