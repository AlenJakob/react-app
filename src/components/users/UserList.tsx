import { mergeTwoArraysOfObjects } from "../../services/helpers";
import { User, Image } from "../../types/users";
import { UserItem } from "./UserItem";

interface UserListProps {
	users: Array<User> | undefined;
	pictures: Array<Image> | undefined;
}

export const UserList = (props: UserListProps) => {
	const users = props.users !== undefined ? props.users : [];
	const images = props.pictures !== undefined ? props.pictures : [];

	const mergedObjects = mergeTwoArraysOfObjects(users, images);

	return (
		<>
			<div className="columns is-flex-wrap-wrap  container mx-auto">
				{mergedObjects.map((user, index) => (
					<div className="column is-3" key={index}>
						<UserItem user={user}></UserItem>
					</div>
				))}
			</div>
		</>
	);
};
