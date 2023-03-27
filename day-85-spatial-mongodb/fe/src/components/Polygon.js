import { useContext } from "react";
import { NeighborhoodsContext } from "../context/neighborhoods.context";
import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Popup,
  Polyline,
  Polygon,
  Rectangle,
} from "react-leaflet";

export default function aPolygon() {
  const neighborhoods = useContext(NeighborhoodsContext);
  return (
    <div>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={center}
          pathOptions={fillBlueOptions}
          radius={200}
        />
        <CircleMarker
          center={[51.51, -0.12]}
          pathOptions={redOptions}
          radius={20}
        >
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <Polyline
          pathOptions={limeOptions}
          positions={polyline}
        />
        <Polyline
          pathOptions={limeOptions}
          positions={multiPolyline}
        />
        <Polygon
          pathOptions={purpleOptions}
          positions={polygon}
        />
        <Polygon
          pathOptions={purpleOptions}
          positions={multiPolygon}
        />
        <Rectangle
          bounds={rectangle}
          pathOptions={blackOptions}
        />
      </MapContainer>
    </div>
  );
}
