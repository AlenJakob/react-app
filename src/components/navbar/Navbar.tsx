import "./Navbar.scss";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { About } from "../../pages/about/About";
import { Users } from "../../pages/users/Users";
import { UserDetails } from "../../pages/users/UsersDetails";

export const Navbar = () => {
	let [num, setNum] = useState(0);
	let title = "React-App";
	const handleClick = () => {
		setNum((prevNum) => prevNum + 1);
	};
	const [cartIsEmpty] = useState(false);

	return (
		<div>
			<BrowserRouter>
				<nav className="navbar">
					<Link to="/">
						<h2>
							{title} {num}
						</h2>
					</Link>

					<ul className="navbar__list">
						<li className="navbar__list-item button ">
							<Link className="navbar__list-link" to="/about/">
								About
							</Link>
						</li>
						<li className="navbar__list-item button ">
							<Link className="navbar__list-link" to="/users">
								Users
							</Link>
						</li>
						<li className="navbar__list-item button ">
							<Link className="navbar__list-link" to="/#">
								Contact
							</Link>
						</li>
						<button onClick={handleClick}>Dark Mode</button>
					</ul>
				</nav>

				<Routes>
					<Route path="/about/*" element={<About />}></Route>
					<Route path="/users" element={<Users />}></Route>
					<Route path="/user/:id/*" element={<UserDetails />}></Route>

					<Route
						path="checkout"
						element={
							cartIsEmpty ? (
								<Navigate to="/users" />
							) : (
								<p>Out of</p>
							)
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
