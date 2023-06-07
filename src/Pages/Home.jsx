import React from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { video, cran } from "../Image/Index";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

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
										CY UK <span className="span"> Limited </span>
									</h1>
									<div className="banner-heading-para para-wrapper">
										<h2>
											Provides best <span className="freight">freight </span>{" "}
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
										className="video-element"
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
			<section id="about-us">
				<Container>
					<div class="about-wrapper">
						<Row>
							<Col lg={7}>
								<div className="about-heading">
									<h2>
										<span className="span">All About </span> CY UK
									</h2>
								</div>
								<div className="about-heading-para">
									<h2>Who we Are and What we do?</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Condimentum id venenatis a condimentum vitae sapien.
										Velit euismod in pellentesque massa placerat duis ultricies
										lacus sed.
									</p>
								</div>
								<div className="list-about">
									<ul>
										<li>
											<FaCheck />
											<span>In House Clearance Team</span>
										</li>
										<li>
											<p>
												CY UK in-house Clearance Team has Chinese Language
												support with direct response for the progress of customs
												clearance due to our service directly connecting with
												HMRC customs and port systems.
											</p>
										</li>
										<li>
											<FaCheck />
											<span>HMRC Customs warehouse (ETSF)</span>
										</li>
										<li>
											<FaCheck />
											<span>Transport License</span>
										</li>
										<li>
											<FaCheck />
											<span>B2C parcel clearance </span>
										</li>
										<li>
											<FaCheck />
											<span>E-Commerce shipment experience</span>
										</li>
									</ul>
									<div className="about-btn">
										<Link className="btn" to="">
											About Us
										</Link>
									</div>
								</div>
							</Col>
							<Col lg={5}>
								<div className="sec-about-img">
									<img src={cran} className="img-fluid" alt="" />
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
			<section id="business">
    <div class="background-img">
        <img src="img/logistic.webp" class="img-fluid" alt="">
    </div>
    <Container>
        <div class="row">
            <div class="col-lg-12 py-5">
                <h1><span class="span">What </span> CY UK Offers</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="business-card card1">
                    <img src="img/plan.webp" class="img-fluid" alt="">
                    <h3>Aircargo Services</h3>
                    <h2>Faster Cheaper &amp; reliable </h2>
                    <p>UUltricies mi quis hendrerit dolor magna eget est. Rhoncus urna neque viverra justo nec ultrices
                        dui sapien. At auctor urna nunc id cursus metus aliquam. Maecenas accumsan lacus vel facilisis
                        volutpat. Et malesuada fames. </p>
                    <a class="btn" href="service.php">Read More</a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="business-card card1">
                    <img src="img/project-service.webp" class="img-fluid" alt="">
                    <h3>Project Services</h3>
                    <h2>Faster Cheaper &amp; reliable </h2>
                    <p>UUltricies mi quis hendrerit dolor magna eget est. Rhoncus urna neque viverra justo nec ultrices
                        dui sapien. At auctor urna nunc id cursus metus aliquam. Maecenas accumsan lacus vel facilisis
                        volutpat. Et malesuada fames. </p>
                    <a class="btn" href="service.php">Read More</a>
                </div>
            </div>

        </div>
    </Container>
</section>

			<Footers />
		</>
	);
};

export default Home;
