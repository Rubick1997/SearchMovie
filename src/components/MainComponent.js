import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import MovieCard from "./MovieComponent";

function Main() {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/movie/:id'>
					<MovieCard item='movie' row='Movie Cast'/>
				</Route>
				<Route path='/show/:id'>
					<MovieCard item='tv' row='Show Cast'/>
				</Route>
				<Redirect to='/' />
			</Switch>
		</React.Fragment>
	);
}

export default Main;
