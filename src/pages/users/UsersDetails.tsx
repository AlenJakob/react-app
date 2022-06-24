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

		const { name, email, picture, address, company, phone, website } =
			userInfo;
		const { large, thumbnail } = picture;
		const { geo, ...street } = address;

		const userBasicInfo = {
			name: name,
			website: website,
			email: email,
			phone: phone,
		};

		return (
			<div className="card mt-6 mx-auto column is-5">
				<div className="card-image p-5 is-flex is-justify-content-center">
					<figure className="image is-256x256">
						<img
							className="is-rounded"
							src={large}
							alt="Placeholder image1"
						/>
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
					<UserDropdownList list={userBasicInfo} title="General" />
					<UserDropdownList list={street} title="Address" />
					<UserDropdownList list={company} title="Company" />
				</div>
			</div>
		);
	} else {
		return <h1>Something Goes Wrong</h1>;
	}
};
