import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import MovieCard from "./MovieComponent";
import { listRequests } from "../requests";
function Main() {

	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path= "/movies/:id">
					<MovieCard fetchUrl={listRequests.fetchInfo}/>
				</Route>
				<Redirect to='/' />
			</Switch>
		</React.Fragment>
	);
}

export default Main;
