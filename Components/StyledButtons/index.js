import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButtons = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttons}
        onPress={() => {
          console.warn("hey there");
        }}
      >
        <Text style={styles.text}>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButtons;
