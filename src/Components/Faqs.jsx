import React from "react";
import { Link } from "react-router-dom";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

function Faqs() {
	const accordion = [
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit? ",
			para: "	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
		},
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit? ",
			para: "	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
		},
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit? ",
			para: "	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
		},
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit? ",
			para: "	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
		},
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit? ",
			para: "	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
		},
	];
	return (
		<>
			<section id="Faqs">
				<Container>
					<div className="main-faqs">
						<Row>
							<Col lg={5}>
								<div className="faqs-heading">
									<h1>
										CY UK <span className="span"> FAQs</span>
									</h1>
									<h4>Have Question? Read Our FAQs </h4>
									<Link to="/contact-us" className="btn faq ">
										Contact Us
									</Link>
									<Link
										to="https://netfreight.descartes.com/nettrack/Login/ClientLogin.aspx"
										target="_blank"
										className="faq-btn"
									>
										Cargo Tracking
									</Link>
								</div>
							</Col>
							<Col lg={7}>
								<div className="container faq">
									<Accordion>
										{accordion.map((item, index) => {
											return (
												<AccordionItem key={index}>
													<AccordionItemHeading>
														<AccordionItemButton>
															<h3>{item.title}</h3>
														</AccordionItemButton>
													</AccordionItemHeading>
													<AccordionItemPanel>
														<p>{item.para}</p>
													</AccordionItemPanel>
												</AccordionItem>
											);
										})}
									</Accordion>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
		</>
	);
}

export default Faqs;
