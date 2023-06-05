import React from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { video } from "../Image/Index";

const Home = () => {
	return (
		<>
			<Header />
			<section id="banner" className="banner-main">
				<Container>
					<div className="banner-wrapper">
						<Row>
							<Col lg={6} className="justify-content-center align-item-center">
								<div className="banner-heading position-wrapper">
									<h1>
										CY UK <span class="span"> Limited </span>
									</h1>
									<div className="banner-heading-para para-wrapper">
										<h2>
											Provides best <span class="freight">freight </span>{" "}
											Solution
										</h2>
										<p>
											UK based company since 2007, is specialised in global
											integrated logistics in United Kingdom and has developed a
											full-fledged operational infrastructure with comprehensive
											customer services network.
										</p>
									</div>
								</div>
							</Col>
							<Col lg={6}>
								<div className="App">
									<video
										class="video-element"
										id="video-element"
										autoplay=""
										muted=""
										loop=""
										playsinline=""
										preload="metadata"
									>
										<source src={video} type="video/mp4" />
									</video>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
			<Footers />
		</>
	);
};

export default Home;
