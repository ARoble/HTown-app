import { View, Text, StyleSheet } from "react-native";

export default function Cuisines() {
  return (
    <View style={styles.cuisineContainer}>
      <View style={styles.cuisineCard}>
        <Text>HEllo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cuisineContainer: {
    flexDirection: "row",
  },
  cuisineCard: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});
