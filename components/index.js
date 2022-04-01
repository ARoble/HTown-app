import { View, StyleSheet, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import Card from "./Home/Card";
import Cuisines from "./Home/Cuisines";
import colors from "../assets/colors/colors";

export default Home = () => {
  return (
    <View>
      {/* <Cuisines /> */}
      <Card title={"Restaurants 🍽"} />
      {/* <Card title={"Entertainment 🕺🏾"} /> */}
      <View style={styles.couponContainer}>
        <View style={styles.couponText}>
          <Text style={styles.couponHeader}>Redeem a coupon!</Text>
          <Text style={styles.couponInfo}>
            Get a discount on your next order from your favoriate restaurant in
            the city!
          </Text>
        </View>
        <View style={styles.couponIcon}>
          <Feather
            name="arrow-right-circle"
            size={38}
            color={"white"}
          ></Feather>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  couponContainer: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  couponText: {
    width: "70%",
  },

  couponHeader: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
  },
  couponInfo: {
    fontSize: 13,
    color: colors.white,
  },
  couponIcon: {
    alignItems: "flex-end",
  },
});
