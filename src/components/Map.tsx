import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { Box } from ".";
import { selectOrigin } from "../Redux/slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  console.log(origin);
  return (
    <Box flex={1}>
      <MapView
        flex={1}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
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
      </MapView>
    </Box>
  );
};

export default Map;
