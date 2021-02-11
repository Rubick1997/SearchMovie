import React, { useEffect, useState } from "react";
import ItemRow from "./Row";
import PeopleRow from "./PeopleRow";
import { listRequests } from "../requests";
import Search from "./SearchComponent";
import ReactLoading from "react-loading";

function Collections() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
		
	}, []);

	return (
		<div>
			<Search />
			{loading === false ? (
				<div>
					<ItemRow
						type='movie'
						title='Trending Movies'
						fetchUrl={listRequests.fetchTrendingMovies}
					/>
					<ItemRow
						type='tv'
						title='Trending Shows'
						fetchUrl={listRequests.fetchTrendingShows}
					/>
					<PeopleRow
						title='Trending People'
						fetchUrl={listRequests.fetchTrendingPeople}
					/>
					<ItemRow
						type='movie'
						title='Top Rated Movies'
						fetchUrl={listRequests.fetchTopRatedMovies}
					/>
					<ItemRow
						type='tv'
						title='Top Rated TV Shows'
						fetchUrl={listRequests.fetchTopRatedShows}
					/>
				</div>
			) : (
				<ReactLoading type='bars' color='#fff' height='100px' />
			)}
		</div>
	);
}

export default Collections;
