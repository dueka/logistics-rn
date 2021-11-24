import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv";
import { Box } from "../../components";
import { selectDestination, selectOrigin } from "../../Redux/slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin || !destination) return;
    // Zoom and fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "description"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);
  return (
    <Box flex={1}>
      <MapView
        ref={mapRef}
        flex={1}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
          />
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="Destination"
          />
        )}
      </MapView>
    </Box>
  );
};

export default Map;
