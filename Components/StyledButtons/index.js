import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButtons = (props) => {
  return (
    <View>
      <Pressable
        style={styles.buttons}
        onPress={() => {
          console.warn("hey there");
        }}
      >
        <Text>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButtons;
