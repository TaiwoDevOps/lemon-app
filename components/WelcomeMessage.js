import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function WelcomeMessage() {
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>

      <Text style={styles.subTitle}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 38,
    color: "#EDEFEE",
    textAlign: "center",
    marginVertical: 8,
    padding: 20,
  },
  container: {
    flex: 1,
  },
});
