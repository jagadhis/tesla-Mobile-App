import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButtons from "../StyledButtons";
const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <StyledButtons />
    </View>
  );
};

export default CarItem;