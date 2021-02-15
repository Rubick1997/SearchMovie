import React, { useState, useEffect } from "react";
import { API_KEY } from "../requests";
import Line from "./Line";
import "../Row.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function PersonCredits({ person_id, known }) {
	const [cast, setCast] = useState([]);
	const [crew, setCrew] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(
					`https://api.themoviedb.org/3/person/${person_id}/combined_credits?api_key=${API_KEY}&language=en-US`
				);
				const info = await data.json();
				setCast(info.cast);
				setCrew(info.crew);
			} catch (err) {
				alert(err.message);
			}
		}
		fetchData();
	}, [person_id]);

	const isActing = (string) => {
		if (string === "Acting") {
			return cast;
		} else {
			return crew;
		}
	};

	return (
		<>
			<h3>Known For </h3>
			<div className='row_line'>
				{isActing(known)
					.slice(0, 8)
					.map((item) => (
						<Line item={item} key={item.id} type={item.media_type} />
					))}
			</div>
			<p>
				<Link
					to={{
						pathname: `/credits/${person_id}`,
						state: {
							crew_info:crew,
							cast_info:cast,
						},
					}}
					style={{ color: "black", textDecoration: "none" }}>
					more info
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</p>
		</>
	);
}

export default PersonCredits;
