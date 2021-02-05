import React, { useEffect, useState } from "react";
import { request } from "../axios";
import "../Row.css";
import { imgUrl } from "../requests";
import { API_KEY } from "../requests";

function Cast({ item, title, id }) {
	const [cast, setCast] = useState();

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

    console.log(cast);
    
	return <div></div>;
}

export default Cast;
