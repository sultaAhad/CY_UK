import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Toolservice from "../Pages/Toolservice";
import Contactus  from "../Pages/Contactus";
import Servicedetail  from "../Pages/Servicedetail";
import Shipment  from "../Pages/Shipment";
import Privacy  from "../Pages/Privacy";
import Termcondition  from "../Pages/Termcondition";


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Service" element={<Service />} />
				<Route path="/Tool-service" element={<Toolservice />} />
				<Route path="/Contact-us" element={<Contactus />} />
				<Route path="/Service-detail" element={<Servicedetail />} />
				<Route path="/Shipment" element={<Shipment />} />
				<Route path="/Privacy" element={<Privacy />} />
				<Route path="/Termcondition" element={<Termcondition />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
