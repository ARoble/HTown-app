import { Text, View, StyleSheet, Image } from "react-native";
import colors from "../../assets/colors/colors";

import TextContent from "../Partials/Text";

export default function DetailsSection({ cuisines }) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TextContent
          text="Cuisine: "
          fontSize={15}
          font={"Montserrat_SemiBold"}
        />
        <Text>{cuisines.join(",")}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <TextContent
          text="Popular Dish"
          fontSize={17}
          font={"Montserrat_Bold"}
        />
        <View style={styles.popularCards}>
          <View style={styles.popularCard}>
            <Image
              style={styles.popularImage}
              source={{
                uri: "https://naturalfertilityexpert.com/wp-content/uploads/pexels-photo-2313686.jpeg",
              }}
            />
            <View style={styles.popularTitle}>
              <TextContent
                text="Fish Soup"
                fontSize={13}
                font={"Montserrat_SemiBold"}
                color={colors.black}
              />
              <TextContent
                text="$8.4"
                fontSize={19}
                font={"Montserrat_SemiBold"}
                color={colors.primary}
              />
            </View>
          </View>
          <View style={styles.popularCard}>
            <Image
              style={styles.popularImage}
              source={{
                uri: "https://naturalfertilityexpert.com/wp-content/uploads/pexels-photo-2313686.jpeg",
              }}
            />
            <View style={styles.popularTitle}>
              <TextContent
                text="Fish Soup"
                fontSize={13}
                font={"Montserrat_SemiBold"}
                color={colors.black}
              />
              <TextContent
                text="$8.4"
                fontSize={19}
                font={"Montserrat_SemiBold"}
                color={colors.primary}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: 10,
  },
  popularCards: {
    flexDirection: "row",
    marginTop: 10,
  },
  popularCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginRight: 10,
    // shadow ios
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // shadow android
    elevation: 10,
    shadowColor: "black",
  },
  popularImage: {
    width: 130,
    height: 150,
    borderRadius: 10,
    margin: 5,
  },
  popularTitle: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
});
