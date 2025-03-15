// components/RoomLocation.tsx
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface RoomLocationProps {
  latitude: number;
  longitude: number;
  address: string;
}

const RoomLocation = ({ latitude, longitude, address }: RoomLocationProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <Text style={styles.address}>{address}</Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.01, // Zoom level
            longitudeDelta: 0.01, // Zoom level
          }}
          scrollEnabled={true} // Disable scrolling
          zoomEnabled={true} // Disable zooming
          pitchEnabled={false} // Disable 3D tilt
          rotateEnabled={false} // Disable rotation
        >
          <Marker coordinate={{ latitude, longitude }} />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3f3f3f",
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    color: "#696969",
    marginBottom: 12,
  },
  mapContainer: {
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
});

export default RoomLocation;