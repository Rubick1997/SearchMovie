import React from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<React.Fragment>
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
