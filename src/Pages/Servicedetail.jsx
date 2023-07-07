import React from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Faqs from "../Components/Faqs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Servicedetailimage } from "../Image/Index";
import "../Assets/css/Service.css";

function Servicedetail() {
	return (
		<>
			<Header />

			<section id="servicedetailbanner">
				<Container>
					<Row>
						<Col lg={5}>
							<div className="banner-heading">
								<h1>
									<span class="span"></span>CY UK
									<span class="span"> Deepsea Services </span>
								</h1>
							</div>
							<div className="banner-heading-para">
								<h3>Cheaper Than Other takes a little longer</h3>
							</div>
							<p>
								CY UK Limited is serving most countries with both import and
								export Deepsea Full-Load and Part-Load movements. Specializing
								in the Far East Import Logistics.
							</p>

							<p>
								CY UK has established a comprehensive reliable network to
								provide all the segments of a seamless transportation chain from
								factory to customer including Import Customs Clearance, Storage
								and Distribution throughout the UK and Europe.
							</p>
							<p>
								Whether importing, exporting or cross-trading, CY UK is able to
								service your requirements with a network of convenient receiving
								depots, offices and representatives throughout the world. Our
								services are suitable for clients with multiple overseas
								suppliers who seek the benefits of communication, co-ordination
								and consolidation.
							</p>
						</Col>
						<Col lg={7} className="p-0">
							<div className="detail-img">
								<img src={Servicedetailimage} class="img-fluid" alt="" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<Faqs />

			<Footers />
		</>
	);
}

export default Servicedetail;
