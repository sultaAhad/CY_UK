import React from "react";
import Footers from "../Components/Footers";
import Header from "../Components/Header";
import Faqs from "../Components/Faqs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Assets/css/Privacyalldetail.css";

function Shipment() {
	return (
		<>
			<Header />

			<section id="shipment">
				<Container>
					<Row>
						<Col lg={12}>
							<h2 className="shipment-main">shipment</h2>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<div className="shipment">
								<h5>Lorem ipsum dolor </h5>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Eveniet suscipit maiores sunt eum fuga aliquid soluta
									cupiditate, facilis enim quia laudantium adipisci accusantium
									ducimus minus recusandae explicabo ab. Aliquid id in iure
									asperiores natus maiores omnis eveniet nam temporibus earum
									impedit, animi molestiae, eligendi rerum ad. Et molestias
									quaerat at!
								</p>
								<h5>Lorem ipsum dolor </h5>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Eveniet suscipit maiores sunt eum fuga aliquid soluta
									cupiditate, facilis enim quia laudantium adipisci accusantium
									ducimus minus recusandae explicabo ab. Aliquid id in iure
									asperiores natus maiores omnis eveniet nam temporibus earum
									impedit, animi molestiae, eligendi rerum ad. Et molestias
									quaerat at!
								</p>
								<h5>Lorem ipsum dolor </h5>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Eveniet suscipit maiores sunt eum fuga aliquid soluta
									cupiditate, facilis enim quia laudantium adipisci accusantium
									ducimus minus recusandae explicabo ab. Aliquid id in iure
									asperiores natus maiores omnis eveniet nam temporibus earum
									impedit, animi molestiae, eligendi rerum ad. Et molestias
									quaerat at!
								</p>
								<h5>Lorem ipsum dolor </h5>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Eveniet suscipit maiores sunt eum fuga aliquid soluta
									cupiditate, facilis enim quia laudantium adipisci accusantium
									ducimus minus recusandae explicabo ab. Aliquid id in iure
									asperiores natus maiores omnis eveniet nam temporibus earum
									impedit, animi molestiae, eligendi rerum ad. Et molestias
									quaerat at!
								</p>
								<h5>Lorem ipsum dolor </h5>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Eveniet suscipit maiores sunt eum fuga aliquid soluta
									cupiditate, facilis enim quia laudantium adipisci accusantium
									ducimus minus recusandae explicabo ab. Aliquid id in iure
									asperiores natus maiores omnis eveniet nam temporibus earum
									impedit, animi molestiae, eligendi rerum ad. Et molestias
									quaerat at!
								</p>
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

export default Shipment;
