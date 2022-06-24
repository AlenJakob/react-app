import { Link } from "react-router-dom";
import { User } from "../../types/users";
import "./UserItem.scss";
interface UserItemProps {
	user: User;
}

export const UserItem = (props: UserItemProps) => {
	const { name, id, website, email, address, picture } = props.user;
	const { geo, ...rest } = address;
	const getLargePicture = picture !== undefined ? picture.large : "";
	return (
		<>
			<div className="card">
				<div className="card-image">
					<figure className="image is-3by2">
						<img src={getLargePicture} alt="Placeholder image1" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<ul className="menu-list">
								<div className="tags has-addons columns">
									<span className="tag is-info is-light is-large column mb-4">
										{name}
									</span>
								</div>
								<div className="tags has-addons is-justify-content-center">
									<span
										className="tag is-link is-medium is-light"
										title={website}
									>
										{website}
									</span>
									<span
										className="tag ml-1 is-link is-medium is-light"
										title={email}
									>
										{email}
									</span>
								</div>
							</ul>
						</div>
					</div>
				</div>
				<Link to={`/user/${id}`}>
					<button className="button is-link m-4">Show Details</button>
				</Link>
			</div>
		</>
	);
};
