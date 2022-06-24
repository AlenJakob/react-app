import { Link } from "react-router-dom";
import { User } from "../../types/users";
import "./UserItem.scss";
interface UserItemProps {
	user: User;
}

export const UserItem = ({ user }: UserItemProps) => {
	console.log(user);

	const { name, id, website, email, address, picture } = user;
	const { geo, ...rest } = address;
	const getLargePicture = picture !== undefined ? picture.large : "";
	return (
		<>
			<div className="card box">
				<div className="card-image is-flex is-justify-content-center">
					<figure className="image is-128x128 mb-4">
						<img
							className="is-rounded"
							src={getLargePicture}
							alt="Placeholder image1"
						/>
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<ul className="menu-list">
								<div className="tags has-addons columns">
									<b className="tag is-link is-light is-large column mb-4">
										{name}
									</b>
								</div>
								<div className="columns is-flex-direction-column">
									<span className="column " title={website}>
										{website}
									</span>
									<span className="column" title={email}>
										{email}
									</span>
								</div>
							</ul>
						</div>
					</div>
				</div>
				<Link to={`/user/${id}`}>
					<button className="button is-medium is-link is-outlined my-4 is-rounded">
						Show Details
					</button>
				</Link>
			</div>
		</>
	);
};
