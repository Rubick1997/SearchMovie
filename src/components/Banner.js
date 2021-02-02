import React, { useState } from "react";
import { imgUrl2 } from "../requests";
import { Nav } from "reactstrap";
import "../Banner.css";

function Banner({ item }) {
	return (
		<div
			className='banner'
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
					<h1 className='banner_title'>
						{item?.title || item?.name || item?.original_name}
					</h1>
					<h1 className='banner_description'>{item?.overview}</h1>
				</div>
		</div>
	);
}

export default Banner;
