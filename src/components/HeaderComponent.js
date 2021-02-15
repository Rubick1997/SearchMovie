import React from "react";
import { Navbar, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
	faFilm,
	faSignInAlt,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<React.Fragment>
			<Navbar dark expand='md'>
				<span className='navbar-text ml-auto'>
					<ul className='navbar-nav ml-auto mt-2'>
						<Button className='button' outline>
							<FontAwesomeIcon icon={faSignInAlt} /> Login
						</Button>
						<Button className='button' outline>
							<FontAwesomeIcon icon={faUserPlus} /> Register
						</Button>
					</ul>
				</span>
			</Navbar>
				<Row>
					<Col>
						<h1 className='title'>
							<Link to='/' style={{ color: "black", textDecoration: "none" }}>
								Movie App <FontAwesomeIcon icon={faFilm} />
							</Link>
						</h1>
					</Col>
				</Row>
		</React.Fragment>
	);
}

export default Header;
