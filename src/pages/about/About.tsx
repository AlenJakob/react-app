import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { Me } from "./Me";

export const About = () => {
	return (
		<div>
			<h1>Welcome to Aboutpage</h1>
			<Link className="navbar__list-link" to="/about/me">
				Me
			</Link>
			<Routes>
				<Route path="me" element={<Me />}></Route>
			</Routes>
		</div>
	);
};
