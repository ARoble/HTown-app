import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { restaurantList } from "../../assets/data/dummyData";
import Feather from "react-native-vector-icons/Feather";

import DetailsCard from "./DetailsCards";
import DetailsSection from "./DetailSection";
import Header from "./Header";
import colors from "../../assets/colors/colors";

import { couponList } from "../../assets/data/dummyData";
import TextContent from "../Partials/Text";

import Coupon from "../Home/Coupon";

export default function Index({ route }) {
  const { id } = route.params;
  const [restaurant, setRestaurant] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRestaurant(restaurantList.find((data) => data.id === id));
    setLoaded(true);
  }, []);
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView>
      <Header restaurant={restaurant} />
      <DetailsCard />
      <View style={styles.detailsContainer}>
        <DetailsSection cuisines={restaurant.cuisines} />

        <View style={{ marginVertical: 14 }}>
          <TextContent text="Coupons" fontSize={17} font={"Montserrat_Bold"} />
        </View>
        {couponList.map((coupon) => (
          <Coupon key={coupon.id} coupon={coupon} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  detailsCards: {
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "center",
  },
  detailsCard: {
    alignItems: "center",
  },
  detailsIcon: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 12,
  },
});
