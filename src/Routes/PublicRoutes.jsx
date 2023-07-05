import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Toolservice from "../Pages/Toolservice";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Service" element={<Service />} />
				<Route path="/Toolservice" element={<Toolservice />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
