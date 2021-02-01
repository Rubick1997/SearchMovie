import React, { useState } from "react";
import { imgUrl2 } from "../requests";
import "../Banner.css";
function Banner({ item }) {
	return (
		<div
			className='banner'
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(
                "${imgUrl2}${item.backdrop_path}"
            )`,
				width: "100%",
				opacity: "0.5",
				mozOpacity: "0.8",
				filter: "alpha(opacity=100) black",
				khtmlOpacity: "0.8",
				backgroundColor: "#000",
			}}>
			<div className='banner_contents'>
				<h1>{item?.title || item?.name || item?.original_name}</h1>
				<h1 className='banner_description'>{item?.overview}</h1>
			</div>
		</div>
	);
}

export default Banner;
