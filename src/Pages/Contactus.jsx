import React from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Faqs from "../Components/Faqs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../Assets/css/Contactus.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Servicedetailship } from "../Image/Index";


function Contactus() {
	return (
		<>
			<Header />
			<section id="banner" className="contact-main">
				<Container>
					<div className="banner-wrapper">
						<Row>
							<Col lg={5}>
								<div className="banner-heading">
									<h1>
										Contact <span class="span">CY UK </span>
									</h1>
								</div>
								<div className="banner-heading-para">
									<h2>We Are here at your service anytime contact Now</h2>
								</div>
								<div className="form-footer form-contact ">
									<Form>
										<Row>
											<Col lg={6} className="group">
												<Form.Group controlId="exampleForm.ControlInput1">
													<Form.Control type="text" placeholder="" />
													<span className="highlight"></span>
													<span className="bar"></span>
													<Form.Label>First Name</Form.Label>
												</Form.Group>
											</Col>
											<Col lg={6} className="group">
												<Form.Group controlId="exampleForm.ControlInput1">
													<Form.Control type="text" placeholder="" />
													<span className="highlight"></span>
													<span className="bar"></span>
													<Form.Label>Last Name</Form.Label>
												</Form.Group>
											</Col>
										</Row>
										<Row>
											<Col lg={6} className="group">
												<Form.Group controlId="exampleForm.ControlInput1">
													<Form.Control type="email" placeholder="" />
													<span className="highlight"></span>
													<span className="bar"></span>
													<Form.Label>Email Address</Form.Label>
												</Form.Group>
											</Col>
											<Col lg={6} className="group">
												<Form.Group controlId="exampleForm.ControlInput1">
													<Form.Control type="phone" placeholder="" />
													<span className="highlight"></span>
													<span className="bar"></span>
													<Form.Label>Phone Number</Form.Label>
												</Form.Group>
											</Col>
										</Row>
										<Row>
											<Col lg={12} className="group">
												<Form.Group controlId="exampleForm.ControlInput1">
													<textarea placeholder="" />
													<span className="highlight"></span>
													<span className="bar"></span>
													<Form.Label> Your Message</Form.Label>
												</Form.Group>
											</Col>
										</Row>
										<Row>
											<Col lg={12}>
												<Link className="footer-submit" to="">
													Submit
												</Link>
											</Col>
										</Row>
										<Row>
											<Col>
												<div className="icon-contact">
													<div className="icon-contact-us-wrapper">
														<FaRegEnvelope />
													</div>
													<div className="icon-heading">
														<h6>Email Us</h6>
														<Link to="">info@cyuk.com</Link>
													</div>
												</div>
											</Col>
											<Col>
												<div className="icon-contact">
													<div className="icon-contact-us-wrapper">
														<FaPhoneAlt />
													</div>
													<div className="icon-heading">
														<h6>Call us</h6>
														<Link to="">012-3456-7890</Link>
													</div>
												</div>
											</Col>
											<Col>
												<div className="icon-contact">
													<div className="icon-contact-us-wrapper">
														<FaMapMarkerAlt />{" "}
													</div>
													<div className="icon-heading">
														<h6>Head Office</h6>
														<Link to="">Location</Link>
													</div>
												</div>
											</Col>
										</Row>
									</Form>
								</div>
							</Col>
							<Col lg={7}>
								<div className="contact-banner-img">
                                    <img src={Servicedetailship} className="img-fluid" alt="" />
                                </div>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
			<Faqs />

			<Footers />
		</>
	);
}

export default Contactus;
