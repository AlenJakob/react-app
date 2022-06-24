interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
	picture: Image;
}

interface Image {
	large: string;
	medium: string;
	thumbnail: string;
}
interface Images {
	images: Array<Image> | undefined;
}

export type { User, Image, Images };
