import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { User, Image } from "../../types/users";
import { mergeTwoObject } from "../../services/helpers";
import { fetchUser, fetchImage } from "../../services/fetchData";
import "./UsersDetails.scss";
import { UserDropdownList } from "./UserDropdownList";

export const UserDetails = () => {
	const { id } = useParams();
	const userId = id ? id : 0;

	const { data: user } = useQuery<User>(["user", id], () =>
		fetchUser(String(userId))
	);
	const { data: image } = useQuery<Image>("image", fetchImage);

	if (user && image) {
		const userInfo = mergeTwoObject(user, image);

		const { name, email, picture, address, company } = userInfo;
		const { large, thumbnail } = picture;
		const { geo, ...street } = address;
		const parseStreet = Object.entries(street);
		const parseCompany = Object.entries(company);
		// console.log(parseStreet);
		// console.log(parseCompany);

		return (
			<div className="card mt-6 mx-auto column is-3">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={large} alt="Placeholder image1" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-48x48">
								<img src={thumbnail} alt="Placeholder image2" />
							</figure>
						</div>
						<div className="media-content">
							<p className="title is-4 has-text-left">{name}</p>
							<p className="subtitle is-6 has-text-left">
								{email}
							</p>
						</div>
					</div>
					<UserDropdownList list={street} title="Address" />
					<UserDropdownList list={company} title="Company" />
				</div>
			</div>
		);
	} else {
		return <h1>Something Goes Wrong</h1>;
	}
};
