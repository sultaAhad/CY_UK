import React from "react";
import { logo } from "../Image/Index";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Assets/css/Header.css";

const Header = () => {
	return (
		<>
			<header>
				<Container>
					<Row>
						<Col lg={12}>
							<Navbar expand="lg">
								<Col lg={2}>
									<Navbar.Brand href="#home">
										<img
											src={logo}
											alt=""
											style={{
												height: 90,
												width: 150,
											}}
										/>
									</Navbar.Brand>
								</Col>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Col col={10}>
									<Navbar.Collapse
										id="basic-navbar-nav"
										className=" justify-content-md-end"
									>
										<Nav>
											<Nav.Link
												href="#home"
												className={({ isActive, isPending }) =>
													isPending ? "pending" : isActive ? "active" : ""
												}
											>
												Home
											</Nav.Link>
											<Nav.Link href="#link">About Us</Nav.Link>
											<Nav.Link href="#link">Our Services</Nav.Link>
											<Nav.Link href="#link">Tools</Nav.Link>
											<Nav.Link href="#link">Contact Us</Nav.Link>
											<Nav.Link className="contect-us-head" href="#link">
												Cargo Tracking
											</Nav.Link>
										</Nav>
									</Navbar.Collapse>
								</Col>
							</Navbar>
						</Col>
					</Row>
				</Container>
			</header>
		</>
	);
};

export default Header;
