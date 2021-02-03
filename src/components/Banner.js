import React, { useState } from "react";
import { imgUrl2 } from "../requests";
import { Col, Row} from "reactstrap";
import { getYear } from "../functions";
import "../Banner.css";

function Banner({ item }) {
	return (
		<div
			className='banner img-fluid'
			style={{
				backgroundImage: `url(
                ${imgUrl2}${item.backdrop_path}
			)`,
				backgroundSize: " cover",
				position: "absolute",
				right: " 0px",
				left: "0px",
			}}>
			<div className='banner_contents overlay'>
				<Row>
					<Col sm='5'>
						<img
							className='banner_img img-fluid'
							src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
							alt={item.title + "poster"}
						/>
					</Col>
					<Col sm='7'>
						<h1 className='banner_title'>
							{item?.title || item?.name || item?.original_name}
							({getYear(item.release_date || item.first_air_date)})
						</h1>
						<h1 className='banner_description'>{item?.overview}</h1>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Banner;
