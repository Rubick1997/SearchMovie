import React from "react";
import Header from "./HeaderComponent";
import Search from "./SearchComponent";
import Collections from "./Collections"

function Main() {
	return (
		<React.Fragment>
			<Header />
			<Search />
			<Collections/>
		</React.Fragment>
	);
}

export default Main;
