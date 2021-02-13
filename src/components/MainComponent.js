import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./HeaderComponent";
import MovieCard from "./MovieComponent";
import SearchResults from "./SearchResults";
import Collections from "./Collections";
import PersonCard from "./PersonCard";

function Main(props) {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={Collections} />
				<Route path='/movie/:id' >
					<MovieCard item='movie' row='Movie Cast' />
				</Route>
				<Route path='/tv/:id'>
					<MovieCard item='tv' row='Show Cast' />
				</Route>
				<Route path='/person/:id' >
					<PersonCard item='person'/>
				</Route>
				<Route path='/results/:query' component={SearchResults}/>
				<Redirect to='/'/>
			</Switch>
		</React.Fragment>
	);
}

export default Main;
