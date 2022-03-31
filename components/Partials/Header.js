import { View, Image, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Image
          source={{
            uri: "https://logos-world.net/wp-content/uploads/2020/12/Yelp-Logo.png",
          }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Feather name="menu" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
});
