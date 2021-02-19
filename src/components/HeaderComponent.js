import React, { useState } from "react";
import {
	Navbar,
	Button,
	Row,
	Col,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
	faFilm,
	faSignInAlt,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
	const [modal, setModal] = useState(false);
	const [modal2,setModal2] = useState(false)

	const toggle = () => setModal(!modal);
	const toggle2 = () => setModal2(!modal2)


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
