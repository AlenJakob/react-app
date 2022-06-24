import { useEffect, useState } from "react";
// import axios from "axios";
type Post = {
	title: string;
	description: string;
	id: number;
};

export const Blog = () => {
	useEffect(() => {
		// axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
		// 	const persons = res.data;
		// 	console.log("Use Effect");
		// });
	});
	const [posts] = useState<Post[]>([
		{
			title: "Title 1",
			description: "lorem ipsum blablablabl",
			id: 1,
		},
		{
			title: "Title 1",
			description: "lorem ipsum blablablabl",
			id: 21,
		},
	]);
	return (
		<div className="navbar">
			{posts.map(({ title, description, id }) => (
				<article key={id}>
					<h2>{title}</h2>
					<p>{description}</p>
				</article>
			))}
		</div>
	);
};
