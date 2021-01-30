import React from 'react';
import MoviesRow from "./MoviesRow";
import ShowsRow from "./ShowsRow";
import PeopleRow from "./PeopleRow";
import { listRequests } from "../requests";

function Collections() {
    return (
			<div>
				<MoviesRow
					title='Trending Movies'
					fetchUrl={listRequests.fetchTrendingMovies}
				/>
				<ShowsRow
					title='Trending Shows'
					fetchUrl={listRequests.fetchTrendingShows}
				/>
				<PeopleRow
					title='Trending People'
					fetchUrl={listRequests.fetchTrendingPeople}
				/>
				<MoviesRow
					title='Top Rated Movies'
					fetchUrl={listRequests.fetchTopRatedMovies}
				/>
				<ShowsRow
					title='Top Rated TV Shows'
					fetchUrl={listRequests.fetchTopRatedShows}
				/>
			</div>
		);
}

export default Collections;