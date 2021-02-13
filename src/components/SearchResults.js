import React, { useState, useEffect } from "react";
import { API_KEY } from "../requests";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import Search from "./SearchComponent";
import "../Row.css";
import Line from "./Line";
import ReactLoading from "react-loading";

function SearchResults() {
	const [items, setItems] = useState([]);
	const { query } = useParams();
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, []);

	const itemSearch = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

	console.log(items)
	const isFound = (array) => {
		if (array.length === 0) {
			return <h1>No Results found</h1>;
		} else {
			return (
				<Row>
					<div className='row_line'>
						{array
							.filter((item) => item?.poster_path||item?.profile_path)
							.map((item) => (
								<Line item={item} known={item.know_for} key={item.id} type={item.media_type} />
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

	return (
		<div>
			<Search />
			{loading === false ? (
				isFound(items)
			) : (
				<ReactLoading type='bars' color='#fff' height='100px' />
			)}
		</div>
	);
}

export default SearchResults;
