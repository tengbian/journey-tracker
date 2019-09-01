import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Craete a Track</Text>
      <Map></Map>
      {err ? <Text>Please enable location access</Text> : null}
      <TrackForm></TrackForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);
