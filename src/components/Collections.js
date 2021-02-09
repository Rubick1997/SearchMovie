import React from "react";
import ItemRow from "./Row";
import PeopleRow from "./PeopleRow";
import { listRequests } from "../requests";
import Search from "./SearchComponent";

function Collections() {
	return (
		<div>
			<Search />
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
	);
}

export default Collections;
