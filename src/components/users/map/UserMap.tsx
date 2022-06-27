import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import L from "leaflet";
import "./UserMap.scss";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
type MapGeo = {
	lat: string;
	lng: string;
};
interface UserMapProps {
	geo: MapGeo;
}

export const UserMap = ({ geo }: UserMapProps) => {
	const { lat, lng } = geo;
	const defaultLatLng: LatLngTuple = [Number(lng), Number(lat)];
	return (
		<>
			<div>
				<MapContainer
					className="map-container"
					center={defaultLatLng}
					zoom={11}
				>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Marker position={defaultLatLng}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
				<span className="is-flex box">
					<b>{lat}</b>
					<b>{lng}</b>
				</span>
			</div>
		</>
	);
};
