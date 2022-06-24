import axios from "axios";
//fetch Users List
const fetchUsers = async () => {
	const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
	return res.data;
};
//fetch Single User
const fetchUser = async (id: string = "0") => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	return res.data;
};
//fetch Images List
const fetchImages = async (imagesQty: number) => {
	const res = await axios.get(
		`https://randomuser.me/api/?results=${imagesQty}&inc=picture`
	);
	return res.data.results;
};
//fetch single Image
const fetchImage = async () => {
	const res = await axios.get(
		`https://randomuser.me/api/?results=1&inc=picture`
	);
	const { picture } = res.data.results[0];
	return picture;
};

export { fetchUsers, fetchUser, fetchImages, fetchImage };
