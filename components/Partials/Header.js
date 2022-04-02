import { View, Image, StyleSheet, SafeAreaView } from "react-native";

import TextContent from "./Text";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.userProfile}>
        <Image
          source={{
            uri: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
          }}
          style={{ width: 40, height: 40, marginRight: 5 }}
        />
        <View>
          <TextContent
            text="Good Morning"
            fontSize={12}
            font={"Montserrat_Regular"}
          />
          <TextContent
            text="Abdulladif Roble"
            fontSize={15}
            font={"Montserrat_SemiBold"}
          />
        </View>
      </View>
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
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 5,
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
});
