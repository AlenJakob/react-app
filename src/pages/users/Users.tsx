import { UserList } from "../../components/users/UserList";
import { useQuery } from "react-query";
import { User, Image } from "../../types/users";
import { fetchImages, fetchUsers } from "../../services/fetchData";

export const Users = () => {
	const { data: users, status } = useQuery<Array<User>>("users", fetchUsers);
	const usersListLength = users ? users.length : 0;
	const { data: pictures } = useQuery<Array<Image>>(
		["pictures", usersListLength],
		() => fetchImages(usersListLength)
	);
	const isSuccess = status === "success";
	return (
		<div>{isSuccess && <UserList users={users} pictures={pictures} />}</div>
	);
};
