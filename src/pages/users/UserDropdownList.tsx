import { useState } from "react";

interface UserDropdownListProps {
	list: UserDropdownProps;
}

interface UserDropdownProps {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
}
export const UserDropdownList = (
	{ list }: UserDropdownListProps,
	title: string
) => {
	const { street, suite, city, zipcode } = list;
	const [open, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen(!open);
	};
	return (
		<div>
			<button
				onClick={toggleMenu}
				className={`button is-medium is-warning is-fullwidth is-justify-content-space-between`}
			>
				<span>{title}</span>
				<i
					className={`ml-4 fa-solid fa-chevron-${
						open ? "up" : "down"
					}`}
				></i>
			</button>
			<div
				className={`panel panel__list ${open ? "panel__is-open" : ""}`}
			>
				<ul>
					<li className="panel-block">
						{street} {suite}
					</li>
					<li className="panel-block">
						{city}, {zipcode}
					</li>
					<li className="panel-block"></li>
				</ul>
			</div>
		</div>
	);
};
