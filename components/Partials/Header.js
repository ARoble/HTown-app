import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import TextContent from "./Text";
import colors from "../../assets/colors/colors";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://logos-world.net/wp-content/uploads/2020/12/Yelp-Logo.png",
        }}
        style={{ width: 40, height: 40 }}
      />
      <View style={styles.location}>
        <TextContent
          text="Jigjiga Yar"
          fontSize={12}
          font={"Montserrat_SemiBold"}
          color={"white"}
        />
        <Feather
          style={styles.locationIcon}
          name="chevron-down"
          size={12}
          color={"white"}
        ></Feather>
      </View>

      <View style={styles.userProfile}>
        <Image
          source={{
            uri: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
          }}
          style={{ width: 40, height: 40, marginRight: 5 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 5,
    paddingTop: 20,
    paddingBottom: 5,
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.black,
  },
  locationIcon: {
    paddingLeft: 10,
  },
});
