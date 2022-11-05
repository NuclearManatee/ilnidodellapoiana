import type { Geo } from "../types"
import { Marker, MapContainer, TileLayer } from "react-leaflet"; // eslint-disable-line import/no-webpack-loader-syntax


interface Props {
    coordinates : Geo
}

export default function Location( {coordinates} : Props ){

    const geos : any = [coordinates.lat, coordinates.lon];

    return(<>
        <MapContainer center={geos} zoom={12} scrollWheelZoom={false} className="map">
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={geos} />
        </MapContainer>
    </>)
}