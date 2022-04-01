import { View, StyleSheet, Text } from "react-native";
import colors from "../../assets/colors/colors";
import TextContent from "../Partials/Text";
import Feather from "react-native-vector-icons/Feather";

export default function Coupon() {
  return (
    <View style={styles.couponContainer}>
      <View style={styles.couponText}>
        <Text style={styles.couponHeader}>
          <TextContent
            text="Redeem a coupon!"
            fontSize={15}
            font={"Montserrat_SemiBold"}
            color={colors.white}
          />
        </Text>
        <Text style={styles.couponInfo}>
          <TextContent
            text="Get a discount on your next order from your favoriate restaurant in
            the city!!!"
            fontSize={12}
            font={"Montserrat_Regular"}
            color={colors.white}
          />
        </Text>
      </View>

      <View style={styles.couponIcon}>
        <Feather name="arrow-right-circle" size={38} color={"white"}></Feather>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  couponContainer: {
    backgroundColor: colors.black,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
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
  },
  couponInfo: {
    fontSize: 13,
    color: colors.white,
  },
  couponIcon: {
    alignItems: "flex-end",
  },
});
