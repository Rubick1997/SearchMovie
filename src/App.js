import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container-fluid">
					<Main />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
