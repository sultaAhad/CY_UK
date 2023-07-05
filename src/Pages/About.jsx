import React from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Assets/css/About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { aboutmachine, work, toolwrapper } from "../Image/Index";
import { FaCheck } from "react-icons/fa";
import Faqs from "../Components/Faqs";


function About() {
	const date = [
		{
			id: 1,
			title: "China Logistics Specialist",
			para: "	Not only covers China, however China is our strongest area with massive resources.",
		},
		{
			id: 1,
			title: "Airfreight Specialist ",
			para: "Our service include SeaFreight & Airfreight, however, Airfreight is our strongest area.",
		},
		{
			id: 1,
			title: "Cold Chain Specialist ",
			para: "	We are not only doing general goods, but also frozen goods.",
		},
		{
			id: 1,
			title: "Neutral for UK freight forwarder ",
			para: "Issue MAWB as you are consignee by our China office.",
		},
	];
	return (
		<>
			<Header />

			<section id="about-banner">
				<Container>
					<Row>
						<Col lg={6}>
							<div className="banner-heading">
								<h1>
									<span className="span">What </span>CY UK
									<span class="span"> is all About? </span>
								</h1>
							</div>
							<div className="banner-heading-para">
								<h3>
									Our mission is to become Your Reliable Logistics Partner
								</h3>
							</div>
						</Col>
						<Col lg={6}></Col>
					</Row>
				</Container>
			</section>
			<section id="specialised">
				<Swiper
					spaceBetween={30}
					slidesPerView={1}
					watchSlidesProgress={true}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					speed={3500}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<h2>We are Specialised in global integrated logistics</h2>
					</SwiperSlide>
					<SwiperSlide>
						<h2>We are Specialised in global integrated logistics</h2>
					</SwiperSlide>
					<SwiperSlide>
						<h2>We are Specialised in global integrated logistics</h2>
					</SwiperSlide>
					<SwiperSlide>
						<h2>We are Specialised in global integrated logistics</h2>
					</SwiperSlide>
					<SwiperSlide>
						<h2>We are Specialised in global integrated logistics</h2>
					</SwiperSlide>
				</Swiper>
			</section>
			<section id="quality">
				<Container>
					<div className="main-quantity">
						<Row>
							<Col lg={7}>
								<div className="quality-heading">
									<h1>
										CY UK
										<span className="span">
											Your Reliable Logistics Partner
										</span>
									</h1>
									<Link className="btn" to="">
										Contact Us
									</Link>
									<Link
										target="_blank"
										className="faq-btn"
										to="https://netfreight.descartes.com/nettrack/Login/ClientLogin.aspx"
									>
										Cargo Tracking
									</Link>
								</div>
							</Col>
							<Col lg={5}>
								<Swiper
									modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
									spaceBetween={10}
									slidesPerView={3}
									autoplay={{
										delay: 3000,
										disableOnInteraction: false,
									}}
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
														<div key={index} virtualIndex={index}>
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
			<section id="about-us">
				<Container>
					<div className="about-wrapper">
						<Row>
							<Col lg={6}>
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
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</p>
									<Link to="">Read More</Link>
								</div>
								<div className="list-about">
									<ul>
										<li>
											<FaCheck />
											<span>B2C parcel clearance </span>
										</li>
										<li>
											<FaCheck />
											<span>E-Commerce shipment experience</span>
										</li>
									</ul>
								</div>
							</Col>
							<Col lg={6}>
								<div className="sec-about-img">
									<img src={aboutmachine} className="img-fluid" alt="" />
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
			<section id="work">
				<Container>
					<Row>
						<Col lg={12}>
							<div className="ship-wrapper">
								<Row>
									<Col lg={6}>
										<img src={work} className="img-fluid" alt="" />
									</Col>
									<Col lg={5} className="align-self-center">
										<div className="review-heading-para">
											<h3>Work with CY UK</h3>
											<h4>
												Come &amp; work with Our in Professional Enviroment
											</h4>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Condimentum id venenatis a condimentum
												vitae sapien. Velit euismod in pellentesque massa
												placerat duis ultricies lacus sed. Quisque id diam vel
												quam elementum pulvinar. Tempor commodo ullamcorper a
												lacus vestibulum sed.
											</p>
										</div>
									</Col>
									<Col lg={1}></Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section id="Logistics-process">
				<Container>
					<Row>
						<Col lg={10}>
							<div className="about-heading logistic">
								<h2>
									{" "}
									CY UK <span class="span">Logistics process </span>{" "}
								</h2>
							</div>
							<Row>
								<Col lg={9}>
									<div className="logistic-heading-para">
										<h4>We Are the solution for every Customer</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Condimentum id venenatis a condimentum vitae
											sapien. Velit euismod in pellentesque massa placerat duis
											ultricies lacus sed.{" "}
										</p>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<img src={toolwrapper} className="img-fluid" alt="" />
						</Col>
					</Row>
				</Container>
			</section>

			<Faqs />

			<Footers />
		</>
	);
}

export default About;
