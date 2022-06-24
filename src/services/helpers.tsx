import { User, Image } from "../types/users";

const mergeTwoArraysOfObjects = (users: Array<User>, images: Array<Image>) => {
	return users.map((user, i) => {
		return { ...user, ...images[i] };
	});
};
const mergeTwoObject = (user: User, picture: Image) => {
	return { ...user, picture };
};
export { mergeTwoArraysOfObjects, mergeTwoObject };
