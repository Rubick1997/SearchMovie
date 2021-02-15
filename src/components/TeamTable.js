import React from "react";
import { getYear } from "../functions";
import {Link} from "react-router-dom"
const TeamTable = ({ el }) => {
	return (
		<tbody>
			<tr>
				<td>{getYear(el?.release_date || el?.first_air_date) || "━"}</td>
				<td>
					<Link
						to={{
							pathname: `/${el?.media_type}/${el?.id}`,
						}}
						style={{ color: "black", textDecoration: "none" }}>
						{el?.title || el?.original_title || el?.name}
					</Link>
				</td>
				<td>{el?.character || el?.job}</td>
			</tr>
		</tbody>
	);
};

export default TeamTable;
