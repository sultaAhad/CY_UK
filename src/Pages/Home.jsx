import React, { useState, useEffect } from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { video, cran, plan, logistic, projectservice } from "../Image/Index";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
	const date = [
		{
			id: 1,
			title:
				"China and Far East Specialists Comprehensive and reliable network",
			para: "	elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis			nostrud exercitation ullamco laboris nisi ut aliquip			ex ea commodo consequat. Duis aute irure dolor in 			reprehenderit in voluptate velit esse cillum dolore eu			fugiat nulla pariatur. Excepteur sint occaecat			cupidatat non proident, sunt in culpa qui officia			deserunt mollit anim id est laborum.",
		},
		{
			id: 1,
			title: "15 years’ experience with HM Customs in UK",
			para: "elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis			nostrud exercitation ullamco laboris nisi ut aliquip			ex ea commodo consequat. Duis aute irure dolor in 			reprehenderit in voluptate velit esse cillum dolore eu			fugiat nulla pariatur. Excepteur sint occaecat			cupidatat non proident, sunt in culpa qui officia			deserunt mollit anim id est laborum.",
		},
		{
			id: 1,
			title:
				"China and Far East Specialists Comprehensive and reliable network",
			para: "	elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis			nostrud exercitation ullamco laboris nisi ut aliquip			ex ea commodo consequat. Duis aute irure dolor in 			reprehenderit in voluptate velit esse cillum dolore eu			fugiat nulla pariatur. Excepteur sint occaecat			cupidatat non proident, sunt in culpa qui officia			deserunt mollit anim id est laborum.",
		},
		{
			id: 1,
			title: "15 years’ experience with HM Customs in UK",
			para: "elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis			nostrud exercitation ullamco laboris nisi ut aliquip			ex ea commodo consequat. Duis aute irure dolor in 			reprehenderit in voluptate velit esse cillum dolore eu			fugiat nulla pariatur. Excepteur sint occaecat			cupidatat non proident, sunt in culpa qui officia			deserunt mollit anim id est laborum.",
		},
	];

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
					<div className="about-wrapper">
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
				<div className="background-img">
					<img src={logistic} className="img-fluid" alt="" />
				</div>
				<Container>
					<Row>
						<Col lg={12} className="py-5">
							<h1>
								<span className="span">What </span> CY UK Offers
							</h1>
						</Col>
					</Row>
					<Row>
						<Col lg={6}>
							<div className="business-card card1">
								<img src={plan} className="img-fluid" alt="" />
								<h3>Aircargo Services</h3>
								<h2>Faster Cheaper &amp; reliable </h2>
								<p>
									UUltricies mi quis hendrerit dolor magna eget est. Rhoncus
									urna neque viverra justo nec ultrices dui sapien. At auctor
									urna nunc id cursus metus aliquam. Maecenas accumsan lacus vel
									facilisis volutpat. Et malesuada fames.{" "}
								</p>
								<Link className="btn" to="">
									Read More
								</Link>
							</div>
						</Col>
						<Col lg={6}>
							<div className="business-card card1">
								<img src={projectservice} className="img-fluid" alt="" />
								<h3>Project Services</h3>
								<h2>Faster Cheaper &amp; reliable </h2>
								<p>
									UUltricies mi quis hendrerit dolor magna eget est. Rhoncus
									urna neque viverra justo nec ultrices dui sapien. At auctor
									urna nunc id cursus metus aliquam. Maecenas accumsan lacus vel
									facilisis volutpat. Et malesuada fames.{" "}
								</p>
								<Link className="btn" to="">
									Read More
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section id="quality">
				<Container>
					<div className="main-quantity">
						<Row>
							<Col lg={6}>
								<div className="quality-heading">
									<h1>
										CY UK <span className="span"> Qualities</span>
									</h1>
									<h4>Here is Why We Are Best </h4>
									<h2>01</h2>
									{/* <Link className="btn" to="">Book Now</Link> */}
								</div>
							</Col>
							<Col lg={6}>
								<Swiper
									modules={[Navigation, Pagination, Scrollbar, A11y]}
									spaceBetween={10}
									slidesPerView={2}
									direction={"vertical"}
									// pagination={{
									// 	clickable: false,
									// }}
									onSlideChange={() => console.log("slide change")}
									className="mySwiper"
								>
									{date.map((item, index) => {
										return (
											<SwiperSlide>
												{({ isActive }) => (
													<div>
														<div key={index}>
															<h4>{item.title}</h4>
															<p>{item.para}</p>
														</div>
													</div>
												)}
											</SwiperSlide>
										);
									})}
								</Swiper>
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
