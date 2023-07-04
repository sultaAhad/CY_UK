import React from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Assets/css/About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation , } from "swiper";

function About() {
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
					speed={3000}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
					<SwiperSlide>Slide 8</SwiperSlide>
					<SwiperSlide>Slide 9</SwiperSlide>
				</Swiper>
			</section>
			<Footers />
		</>
	);
}

export default About;
