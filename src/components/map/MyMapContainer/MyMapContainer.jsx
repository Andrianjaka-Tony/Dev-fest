import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, ZoomControl, Polygon, Polyline } from "react-leaflet";
import * as turf from "@turf/turf";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMapContainer.sass";

const MyMapContainer = () => {
  return (
    <div className="leaf">
      <MapContainer
        center={[-18.97186644585625, 47.543517726446666]}
        zoom={15}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        {/* <MapLocation searchOn={searchOn} addLocation={setMarkers} currentLocation={markers} /> */}
        <TileLayer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png" />
        {/* <Polygon pathOptions={{ color: "#5197F2" }} positions={markers} /> */}
        {/* <Polyline pathOptions={{ color: "yellow" }} positions={markers} />
      {markers.map((marker) => (
        <MyMarker position={marker} swift={swiftMarker} key={marker.id} markers={markers} />
      ))} */}
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default MyMapContainer;
