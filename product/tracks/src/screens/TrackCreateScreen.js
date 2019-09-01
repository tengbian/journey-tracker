// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

import { Dimensions } from "react-native";
import Spacer from "../components/Spacer";
const screenWidth = Math.round(Dimensions.get("window").width);

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
      <Spacer>
        <Text style={styles.header}>New Track</Text>
      </Spacer>
      <Map mapHeader={styles.map}></Map>
      {err ? <Text>Please enable location access</Text> : null}
      <TrackForm></TrackForm>
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20}></FontAwesome>
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
export default withNavigationFocus(TrackCreateScreen);
