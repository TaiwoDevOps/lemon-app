import * as React from "react";
import { Text, StyleSheet, ScrollView, TextInput } from "react-native";

export default function WelcomeMessage() {
  const [value, onChangeValue] = useState("");

  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>

      <Text style={styles.subTitle}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeValue}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
