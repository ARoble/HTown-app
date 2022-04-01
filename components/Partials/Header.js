import { View, Image, StyleSheet, SafeAreaView } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://logos-world.net/wp-content/uploads/2020/12/Yelp-Logo.png",
        }}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    // backgroundColor: "black",
  },
});
