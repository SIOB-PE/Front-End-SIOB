import type { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


export function Test() {
	const position: LatLngTuple = [-8.05428, -34.8813];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '300px', width: '300px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Um pop-up bem legal! <br /> Facilmente customizável.
        </Popup>
      </Marker>
    </MapContainer>
    
  );
}
