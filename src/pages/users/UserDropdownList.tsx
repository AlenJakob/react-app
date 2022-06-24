import { useState } from "react";

interface UserDropdownListProps<T> {
	list: T;
	title: string;
}

export const UserDropdownList = <T,>({
	list,
	title,
}: UserDropdownListProps<T>) => {
	const [open, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen((open) => !open);
	};
	console.log(list);
	const parsedList = Object.entries(list);
	return (
		<span
			className={`panel-container ${
				open ? "panel-container__resize" : ""
			}`}
		>
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
				className={`panel panel__list ${
					open ? "panel__is-open" : "panel__is-close"
				}`}
			>
				<ul>
					{parsedList.map((item, idx) => (
						<li
							className="panel-block is-justify-content-left has-text-left"
							key={idx}
						>
							{item[0]}: {item[1]}
						</li>
					))}
				</ul>
			</div>
		</span>
	);
};
