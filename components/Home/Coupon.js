import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../../assets/colors/colors";
import TextContent from "../Partials/Text";
import Feather from "react-native-vector-icons/Feather";

export default function Coupon({ coupon }) {
  return (
    <View style={styles.couponContainer}>
      <View style={styles.couponText}>
        <TextContent
          text={`COUPON ${coupon.couponId}`}
          fontSize={17}
          font={"Montserrat_Medium"}
          color={colors.black}
        />
        <TextContent
          text={coupon.value}
          fontSize={30}
          font={"Montserrat_Bold"}
          color={colors.black}
        />
        <TextContent
          text={"COUPON"}
          fontSize={18}
          font={"Montserrat_Regular"}
          color={colors.black}
        />

        <TextContent
          text={`** Ends ${coupon.ends}`}
          fontSize={13}
          font={"Montserrat_Regular"}
          color={colors.black}
        />
      </View>
      <View style={styles.couponIcon}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: `${coupon.image}`,
          }}
        />
        <Feather name="arrow-right-circle" size={22} color={"black"}></Feather>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  couponContainer: {
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    // shadow ios
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // shadow android
    elevation: 10,
    shadowColor: "black",
  },

  couponText: {
    width: "70%",
  },

  couponIcon: {
    alignItems: "flex-end",
  },
});
