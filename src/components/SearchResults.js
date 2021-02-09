import React, { useState, useEffect } from "react";
import { API_KEY } from "../requests";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import Search from "./SearchComponent";
import "../Row.css";
import Line from "./Line";

function SearchResults() {
	const [items, setItems] = useState([]);
	const { query } = useParams();

	const itemSearch = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;


	const isFound = (array) => {
		if (array.length === 0) {
			console.log("not found")
			return (
				<h1>No Results found</h1>
			)
		} else {
			return (
				<Row>
					<div className='row_line'>
						{array
							.filter((item) => item?.poster_path)
							.map((item) => (
								<Line item={item} key={item.id} type={item.media_type} />
							))}
					</div>
				</Row>
			);
		}
	};
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
			<Search />
			{isFound(items)}
		</div>
	);
}

export default SearchResults;
