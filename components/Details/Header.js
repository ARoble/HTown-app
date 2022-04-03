import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import Feather from "react-native-vector-icons/Feather";

import TextContent from "../Partials/Text";
import colors from "../../assets/colors/colors";

export default function Header({ restaurant }) {
  return (
    <View>
      <View style={styles.bgImageContainer}>
        <Image
          style={styles.bgImage}
          source={{
            uri: `${restaurant.bgImage}`,
          }}
        />
      </View>
      <View style={styles.detailsCardContainer}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.restaurantImage}
            source={{
              uri: `${restaurant.image}`,
            }}
          />
        </View>
        <View style={styles.detailsContent}>
          <TextContent
            text={restaurant.name}
            fontSize={15}
            font={"Montserrat_SemiBold"}
          />
          <Feather name="clock" size={12}>
            <TextContent
              text="12 am - 7pm"
              fontSize={12}
              font={"Montserrat_Regular"}
              color={colors.black}
            />
          </Feather>
          <Feather name="map-pin" size={12}>
            <TextContent
              text={restaurant.location}
              fontSize={12}
              font={"Montserrat_Regular"}
              color={colors.black}
            />
          </Feather>
        </View>
      </View>
      <View style={styles.backButton}>
        <Feather name="arrow-left" size={23}></Feather>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsCardContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 30,
    position: "absolute",
    bottom: -35,
    // shadow ios
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // shadow android
    elevation: 10,
    shadowColor: "black",
    minHeight: 80,
  },
  restaurantImage: {
    height: "100%",
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  detailsContent: {
    flex: 2,
    padding: 10,
    justifyContent: "center",
  },
  bgImageContainer: {
    position: "relative",
  },
  bgImage: {
    width: "100%",
    height: 230,
  },
  backButton: {
    backgroundColor: colors.white,
    flexDirection: "row",
    position: "absolute",
    top: 10,
    left: 10,
    padding: 5,
    borderRadius: 100,

    // shadow ios
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // shadow android
    elevation: 10,
    shadowColor: "black",
  },
});
