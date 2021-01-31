import React, { useEffect, useState } from "react";
import {request} from "../axios";
import "../Row.css";
import { imgUrl } from "../requests";

function PeopleRow({ title, fetchUrl }) {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const info = await request.get(fetchUrl);
				setPeople(info.data.results);
				return info;
			} catch (error) {
				alert(error.message);
			}
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<div>
			<h3>{title}</h3>
			<div className='row_line'>
				{people.map((person) => (
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
		</div>
	);
}

export default PeopleRow;
