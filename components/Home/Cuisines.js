import { View, Text, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function Cuisines() {
  return (
    <View style={styles.cuisineContainer}>
      <View style={styles.cuisineCard}>
        <View style={styles.cuisineItem}>
          <View style={styles.cuisineIcon}>
            <Feather name="menu" size={30} />
          </View>
          {/* <Text style={styles.cuisineText}>Arabian</Text> */}
        </View>
        <View style={styles.cuisineItem}>
          <View style={styles.cuisineIcon}>
            <Feather name="menu" size={30} />
          </View>
          {/* <Text style={styles.cuisineText}>Indian</Text> */}
        </View>
        <View style={styles.cuisineItem}>
          <View style={styles.cuisineIcon}>
            <Feather name="menu" size={30} />
          </View>
          {/* <Text style={styles.cuisineText}>Family Friendly</Text> */}
        </View>
        <View style={styles.cuisineItem}>
          <View style={styles.cuisineIcon}>
            <Feather name="menu" size={30} />
          </View>
          {/* <Text style={styles.cuisineText}>Work Friendly</Text> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cuisineContainer: {
    flexDirection: "row",
  },
  cuisineCard: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cuisineItem: {
    alignItems: "center",
    marginRight: 10,
    width: 70,
  },
  cuisineIcon: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 100,
  },
  cuisineText: {
    fontSize: 15,
  },
});
