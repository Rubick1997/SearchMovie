import React, { useEffect, useState } from "react";
import { Row} from "reactstrap";
import { request } from "../axios";
import "../Row.css";
import "react-circular-progressbar/dist/styles.css";
import Line from "./Line";
import ReactLoading from "react-loading";

function ItemRow({ title, fetchUrl, type }) {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
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
		<>
			{loading === false ? (
				<Row>
					<h3>{title}</h3>
					<div className='row_line'>
						{items
							.filter((item) => item?.backdrop_path)
							.map((item) => (
								<Line item={item} key={item.id} type={type} />
							))}
					</div>
				</Row>
			) : (
				<ReactLoading type='bars' color='#fff' />
			)}
		</>
	);
}

export default ItemRow;
