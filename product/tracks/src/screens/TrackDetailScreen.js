import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import Spacer from "../components/Spacer";

import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);

const TrackDetailScreen = ({ navigation }) => {
  navigationOptions = {
    title: "New Track"
  };

  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <View>
      <Spacer>
        <Text style={styles.header}>{track.name}</Text>
      </Spacer>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={track.locations.map(loc => loc.coords)}
        ></Polyline>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    height: 300,
    width: screenWidth * 0.9
  },
  header: {
    fontSize: 30,
    textAlign: "center"
  }
});
export default TrackDetailScreen;
