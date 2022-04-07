import { View, Text, StyleSheet, Pressable } from "react-native";

import Coupon from "./Coupon";
import { couponList } from "../../assets/data/dummyData";
import TextContent from "../Partials/Text";
import colors from "../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

export default function Coupons() {
  const navigation = useNavigation();
  return (
    <View style={styles.couponContainer}>
      <View style={styles.couponHeader}>
        <TextContent
          text={"Coupons 🎫"}
          fontSize={23}
          font={"Montserrat_Bold"}
          color={colors.black}
          style={styles.header}
        />
        <Pressable onPress={() => navigation.navigate("List")}>
          <TextContent
            text={"View More"}
            fontSize={12}
            font={"Montserrat_SemiBold"}
            color={colors.black}
          />
        </Pressable>
      </View>
      {couponList.map((coupon) => (
        <Coupon key={coupon.id} coupon={coupon} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  couponContainer: {
    marginHorizontal: 15,
  },
  couponHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
