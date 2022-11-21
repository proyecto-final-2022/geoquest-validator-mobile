import React from "react";
import { StyleSheet, View, useWindowDimensions, Image } from "react-native";
import ScanButton from "./ScanButton.js";
import Logo from "../assets/GeoQuestLogo.png";


export default function Home({navigation}) {
  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image
        source = {Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <ScanButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF9CA",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
});
