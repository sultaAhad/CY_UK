import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../Assets/css/Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaShareAlt } from "react-icons/fa";

const Footers = () => {
	return (
		<>
			<Container>
				<Row className="all-about-footer">
					<Col col={6} className="footer-icon-wrapper">
						<div className="footer-logo">
							<div className="logo-para">
								<h1>CY UK </h1>
								<h5>Subscribe To Our Newsletter</h5>
							</div>
							<div className="form-footer">
								<Row>
									<Col lg={8}>
										<div className="group">
											<Form>
												<Form.Group controlId="exampleForm.ControlInput1">
													<Form.Control type="text" placeholder="" />
													<span className="highlight"></span>
													<span className="bar"></span>
													<Form.Label>Enter Your Email</Form.Label>
												</Form.Group>
											</Form>
										</div>
										<Link className="footer-submit" to="">
											Submit
										</Link>
									</Col>
								</Row>
							</div>
							<div className="footer-iconics">
								<ul>
									<li>
										<Link to="">
											<FaFacebookF />
										</Link>
									</li>
									<li>
										<Link to="">
											<FaTwitter />
										</Link>
									</li>
									<li>
										<Link to="">
											<FaYoutube />
										</Link>
									</li>
									<li>
										<Link to="">
											<FaShareAlt />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</Col>
					<Col lg={6}>
						<Row className="footer-margin ">
							<Col lg={6}>
								<div className="footer-wrapper margin-wrapper">
									<h5>Quick Links</h5>
									<ul>
										<li>
											<Link to="/home">Home</Link>
										</li>
										<li>
											<Link to="/about">About Us</Link>
										</li>
										<li>
											<Link to="/service">Services</Link>
										</li>
										<li>
											<Link to="/contact-us">Contact</Link>
										</li>
										<li>
											<Link
												to="https://netfreight.descartes.com/nettrack/Login/ClientLogin.aspx"
												target="_blank"
											></Link>
											Cargo Tracking
										</li>
									</ul>
								</div>
							</Col>
							<Col lg={6}>
								<div className="footer-wrapper">
									<h5>Legal</h5>
									<ul>
										<li>
											<Link to="/term-condition">Terms &amp; Condition</Link>
										</li>
										<li>
											<Link to="/privacy">Privacy Policy</Link>
										</li>
										<li>
											<Link to="/shipment">Shipment</Link>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
						<Row className="footer-margin">
							<Col lg={6}>
								<div className="footer-wrapper margin-wrapper">
									<h5>Contact Us</h5>
									<ul>
										<li>
											<Link to="">
												Address: 7345 SE. Garfield Drive Kansas City, MO 64151{" "}
											</Link>
										</li>
										<li>
											<Link to="">Email: sales@autelpilot.com </Link>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg={12}>
								<div className="footer-all-right">
									<h6>
										Ⓒ Copyrights <span id="year">2023</span> CYUK Ltd | All
										rights reserved
									</h6>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Footers;
