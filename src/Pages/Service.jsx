import React from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Faqs from "../Components/Faqs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Assets/css/Service.css";
import {
	Ship,
	servicemain,
	Plan,
	Projectservice,
	Deport,
	Agencycran,
} from "../Image/Index";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y, Navigation } from "swiper";

function Service() {
	const servicecard = [
		{
			id: 1,
			img: Plan,
			title: "Aircargo Services",
			secondtitle: "Faster Cheaper  reliable ",
			para: "UUltricies mi quis hendrerit dolor magna eget est. Rhoncus            urna neque viverra justo nec ultrices dui sapien. At auctor            urna nunc id cursus metus aliquam. Maecenas accumsan lacus velfacilisis volutpat. Et malesuada fames. ",
			url: "/Service-detail",
		},
		{
			id: 1,
			img: Projectservice,
			title: "Project Services",
			secondtitle: "Faster Cheaper & reliable ",
			para: "UUltricies mi quis hendrerit dolor magna eget est. Rhoncus            urna neque viverra justo nec ultrices dui sapien. At auctor            urna nunc id cursus metus aliquam. Maecenas accumsan lacus velfacilisis volutpat. Et malesuada fames. ",
			url: "/Service-detail",
		},
		{
			id: 1,
			img: Deport,
			title: "Depots & Warehousing & Distributing",
			secondtitle: "Faster Cheaper & reliable ",
			para: "UUltricies mi quis hendrerit dolor magna eget est. Rhoncus            urna neque viverra justo nec ultrices dui sapien. At auctor            urna nunc id cursus metus aliquam. Maecenas accumsan lacus velfacilisis volutpat. Et malesuada fames. ",
			url: "/Service-detail",
		},
		{
			id: 1,
			img: Agencycran,
			title: "Agency Services",
			secondtitle: "Faster Cheaper & reliable  ",
			para: "UUltricies mi quis hendrerit dolor magna eget est. Rhoncus            urna neque viverra justo nec ultrices dui sapien. At auctor            urna nunc id cursus metus aliquam. Maecenas accumsan lacus velfacilisis volutpat. Et malesuada fames. ",
			url: "/Service-detail",
		},
	];

	return (
		<>
			<Header />

			<section id="main-banner">
				<Container>
					<Row>
						<Col lg={5}>
							<div className="banner-heading">
								<h1>
									CY UK <span class="span">Services </span>
								</h1>
							</div>
							<div className="banner-heading-para">
								<h3>
									As a global logistics operator, the range of CY UK Limited's
									services is truly vast
								</h3>
							</div>
						</Col>
						<Col lg={7} className="p-0">
							<div className="about-main-img">
								<img src={servicemain} className="img-fluid" alt="" />
							</div>
						</Col>
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
			<section id="work">
				<Container>
					<Row>
						<Col lg={12}>
							<div className="ship-wrapper">
								<Row>
									<Col lg={6}>
										<img src={Ship} className="img-fluid" alt="" />
									</Col>
									<Col lg={5} className="align-self-center">
										<div className="review-heading-para">
											<h3>Deepsea Services</h3>
											<h4>Cheaper Than Other takes a little longer</h4>
											<p>
												Ultricies mi quis hendrerit dolor magna eget est.
												Rhoncus urna neque viverra justo nec ultrices dui
												sapien. At auctor urna nunc id cursus metus aliquam.
												Maecenas accumsan lacus vel facilisis volutpat. Et
												malesuada fames ac turpis egestas sed tempus. Auctor
												augue mauris augue neque gravida.
											</p>
											<Link className="btn" to="/Service-detail">
												Read More
											</Link>
										</div>
									</Col>
									<Col lg={1}></Col>
								</Row>
							</div>
						</Col>
					</Row>
					<Row className="mt-5 mb-5 card-wrapper-service">
						{servicecard.map((item, index) => {
							return (
								<Col lg={6} className="card-wrapper" key={index}>
									<div className="business-card card1">
										<img src={item.img} className="img-fluid" alt="" />
										<h3>{item.title}</h3>
										<h2>{item.secondtitle}</h2>
										<p>{item.para}</p>
										<Link className="btn" to={item.url}>
											Read More
										</Link>
									</div>
								</Col>
							);
						})}
					</Row>
				</Container>
			</section>

			<Faqs />

			<Footers />
		</>
	);
}

export default Service;
