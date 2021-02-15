import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
	Table,
	Container,
	Card,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import TeamTable from "./TeamTable";
import classnames from "classnames";
import ReactLoading from "react-loading";
const MoreInfo = () => {
	const location = useLocation();
	const state = location.state;
	const [cast] = useState(state.cast_info);
	const [crew] = useState(state.crew_info);
	const [activeTab, setActiveTab] = useState("1");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, []);

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return loading === false ? (
		<Container style={{ margin: "auto" }}>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "1" })}
						onClick={() => {
							toggle("1");
						}}>
						Acting
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "2" })}
						onClick={() => {
							toggle("2");
						}}>
						Crew
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId='1'>
					{cast.length > 0 && (
						<Card>
							<Table responsive striped>
								<thead>
									<tr>
										<th>Year</th>
										<th>Title</th>
										<th>Character</th>
									</tr>
								</thead>
								{cast.map((el) => (
									<TeamTable el={el} />
								))}
							</Table>
						</Card>
					)}
				</TabPane>
				<TabPane tabId='2'>
					{crew.length > 0 && (
						<Card>
							<Table responsive striped>
								<thead>
									<tr>
										<th>Year</th>
										<th>Title</th>
										<th>Job</th>
									</tr>
								</thead>
								{crew.map((el) => (
									<TeamTable el={el} />
								))}
							</Table>
						</Card>
					)}
				</TabPane>
			</TabContent>
		</Container>
	) : (
		<ReactLoading type='bars' color='#fff' height='100px' />
	);
};

export default MoreInfo;
