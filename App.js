import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./Components/CarItem/Index";
import CarList from "./Components/CarList";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem
        name={"Model 3"}
        tagline={"Order Online For"}
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/Model3.jpeg")}
      /> */}
      <CarList />
      {/* <CarItem
        name={"Model X"}
        tagline={"Starting From $55,500"}
        image={require("./assets/images/ModelX.jpeg")}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
