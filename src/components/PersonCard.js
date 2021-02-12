import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { API_KEY } from "../requests";
import ReactLoading from "react-loading";

function PersonCard({ item }) {
	const [person, setPerson] = useState([]);
	const {id} = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
		async function fetchData() {
			try {
				const data = await fetch(
					`https://api.themoviedb.org/3/${item}/${id}?api_key=${API_KEY}&language=en-US`
				);
				const info = await data.json();
                console.log(info)
				setPerson(info);
				return info;
			} catch (error) {
				alert(error.message);
			}
		}
		fetchData();
	}, [item, id]);

	

	return <Container></Container>;
}

export default PersonCard;
