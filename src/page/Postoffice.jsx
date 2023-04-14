import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 21.015505, lng: 105.800293 }}
    >
      <Marker position={{ lat: 21.015505, lng: 105.800293 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function PostOffice() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC0D_1QkWXVu9cvwcMpN6v_qBNiJMUEkqA`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

export default PostOffice;
