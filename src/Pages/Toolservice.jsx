import React from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Faqs from "../Components/Faqs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
	Toolbanner,
	Toolbackground,
	toolservicesecond,
	toolserviceone,
} from "../Image/Index";
import "../Assets/css/Toolservice.css";

function Toolservice() {
	return (
		<>
			<Header />
			<section id="banner" className="banner-main">
				<Container>
					<div className="banner-wrapper">
						<Row>
							<Col
								lg={5}
								className=" justify-content-center align-item-center "
							>
								<div className="banner-heading position-wrapper">
									<h1>
										CY UK <span className="span"> Tools</span>
									</h1>
									<div className="banner-heading-para para-wrapper">
										<h2>
											Reviews About<span> CY UK </span>{" "}
										</h2>
										<h2>Who we Are and What we do?</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Condimentum id venenatis a condimentum vitae
											sapien. Velit euismod in pellentesque massa placerat duis
											ultricies lacus sed.
										</p>
									</div>
								</div>
							</Col>
							<Col lg={7} className="p-0">
								<div className="tool-img">
									<figure>
										<img src={Toolbanner} class="img-fluid" alt="" />
									</figure>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
			<section class="sea-freight-sec">
				<div className="background-img1">
					<img src={Toolbackground} class="img-fluid" alt="" />
				</div>
				<Container>
					<Row>
						<Col lg={10} className="mt-3 mb-5">
							<div className="heading-sea mt-5">
								<div className="banner-heading position-wrapper heading">
									<h1>
										Sea Freight FCL<span className="span"> Leading Time</span>
									</h1>
									<div className="banner-heading-para para-wrapper">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Condimentum id venenatis a condimentum vitae
											sapien. Velit euismod in pellentesque massa placerat duis
											ultricies lacus sed.
										</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<img src={toolservicesecond} className="img-fluid" alt="" />
						</Col>
					</Row>
					<Row>
						<Col lg={10} className="col-lg-10 mt-5 mb-5">
							<div className="heading-sea mt-5">
								<div className="banner-heading position-wrapper heading">
									<h1>
										Sea Freight LCL <span class="span"> Leading Time</span>
									</h1>
									<div className="banner-heading-para para-wrapper">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Condimentum id venenatis a condimentum vitae
											sapien. Velit euismod in pellentesque massa placerat duis
											ultricies lacus sed.
										</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={12}></Col>
					</Row>
					<Row>
						<Col lg={10} className=" mt-5 mb-5">
							<div className="heading-sea">
								<div className="banner-heading position-wrapper heading">
									<h1>
										Air Freight<span className="span"> Leading Time</span>
									</h1>
									<div className="banner-heading-para para-wrapper">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Condimentum id venenatis a condimentum vitae
											sapien. Velit euismod in pellentesque massa placerat duis
											ultricies lacus sed.
										</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={12} className="mt-5">
							<img src={toolserviceone} className="img-fluid" alt="" />
						</Col>
					</Row>
				</Container>
			</section>

			<Faqs />

			<Footers />
		</>
	);
}

export default Toolservice;
