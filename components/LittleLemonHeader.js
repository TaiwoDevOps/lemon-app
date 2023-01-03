import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 0.15, backgroundColor: "#EE9972" },
  textStyle: {
    padding: 50,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
