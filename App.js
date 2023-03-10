import * as React from "react";
import { View, StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeMessage from "./components/WelcomeMessage";
import MenuItem from "./components/MenuItem";
import LoginScreen from "./components/LoginScreen";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <LoginScreen />
      </View>

      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
