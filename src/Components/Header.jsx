import React from "react";
import { logo } from "../Image/Index";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, NavLink } from "react-router-dom";
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
											<Nav.Link>
												<NavLink to="/home">Home</NavLink>
											</Nav.Link>
											<Nav.Link>
												<NavLink to="/about">About Us</NavLink>
											</Nav.Link>
											<Nav.Link>
												<NavLink to="/service"> Our Services</NavLink>
											</Nav.Link>
											<Nav.Link>
												<NavLink to="/tool-service"> Tools</NavLink>
											</Nav.Link>
											<Nav.Link>
												<NavLink to="/contact-us"> Contact Us</NavLink>
											</Nav.Link>
											<Nav.Link
												className="contect-us-head"
												target="_blank"
												href="https://netfreight.descartes.com/nettrack/Login/ClientLogin.aspx"
											>
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
