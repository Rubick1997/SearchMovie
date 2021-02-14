import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../requests";
import ReactLoading from "react-loading";
import { Row, Col, Card, Container } from "reactstrap";
import { formatDate } from "../functions";
import "../Banner.css";
import "../Row.css";
import PersonCredits from "./PersonCredits";
import nopicture from "../img/nopicture.png";

function PersonCard({ item }) {
	const [person, setPerson] = useState([]);
	const [known, setKnown] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
		async function fetchData() {
			try {
				const data = await fetch(
					`https://api.themoviedb.org/3/${item}/${id}?api_key=${API_KEY}&language=en-US`
				);
				const info = await data.json();
				console.log(info);
				setPerson(info);
				setKnown(info.also_known_as);
				return info;
			} catch (error) {
				alert(error.message);
			}
		}
		fetchData();
	}, [item, id]);

	return loading === false ? (
		<Container>
			<Card style={{ borderRadius: "25px" }}>
				<Container>
					<Row style={{ margin: "auto" }}>
						<Col sm='4' style={{ listStyleType: "none", fontSize: "12px" }}>
							<img
								className='banner_img img-fluid'
								style={{ borderRadius: "25px", marginTop: "10px" }}
								src={
									person?.profile_path
										? `https://image.tmdb.org/t/p/w342/${person?.profile_path}`
										: `${nopicture}`
								}
								alt={person.name + "poster"}
							/>
							<h3>Personal Info</h3>
							<div>
								Known For: {person.known_for_department}
								<br />
								Gender:
								{person.gender === 2
									? "Male"
									: person.gender === 1
									? "Female"
									: "Uknown"}
								<br />
								Birthday:{" "}
								{person.birthday ? formatDate(person.birthday) : "Uknown"}
								<br />
								<div>
									{person.deathday
										? `Deathday:${formatDate(person.deathday)}`
										: null}
								</div>
								{person.place_of_birth ? `Place of birth:${person.place_of_birth}`:null}
								<br />
							</div>
							{known.length > 0 && (
								<ul>
									Also Known As:
									{known.map((value, index) => {
										return <li key={index}>{value}</li>;
									})}
								</ul>
							)}
						</Col>
						<Col sm='8'>
							<h1>{person.name}</h1>
							<h3>Biography</h3>
							<p className='text-justify'>{person.biography}</p>
							<Row style={{ margin: "auto" }}>
								<PersonCredits
									person_id={person.id}
									known={person.known_for_department}
								/>
							</Row>
						</Col>
					</Row>
				</Container>
			</Card>
		</Container>
	) : (
		<ReactLoading type='bars' color='#fff' height='100px' />
	);
}

export default PersonCard;
