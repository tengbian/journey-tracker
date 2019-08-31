import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        location => {
          addLocation(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Craete a Track</Text>
      <Map></Map>
      {err ? <Text>Please enable location access</Text> : null}
    </SafeAreaView>
  );

  return <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>;
};

const styles = StyleSheet.create({});
export default TrackCreateScreen;
