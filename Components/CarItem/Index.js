import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButtons from "../StyledButtons";
const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttoncontainer}>
        <StyledButtons
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom order pressed");
          }}
        />
        <StyledButtons
          type="Secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Inventory pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
