import { View, Text, StyleSheet, ScrollView } from "react-native";

import TextContent from "../Partials/Text";
import colors from "../../assets/colors/colors";

export default function Cuisines() {
  return (
    <View style={styles.cuisineContainer}>
      <TextContent text="Cuisines" fontSize={17} font={"Montserrat_Bold"} />
      <View style={styles.cuisineCard}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cuisineItem}>
            <TextContent
              text="Indian"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={colors.black}
            />
          </View>
          <View style={styles.cuisineItem}>
            <TextContent
              text="Arabian"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={colors.black}
            />
          </View>
          <View style={styles.cuisineItem}>
            <TextContent
              text="Italian"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={colors.black}
            />
          </View>
          <View style={styles.cuisineItem}>
            <TextContent
              text="Somali"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={colors.black}
            />
          </View>
          <View style={styles.cuisineItem}>
            <TextContent
              text="French"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={colors.black}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cuisineContainer: {
    marginVertical: 10,
    marginLeft: 10,
  },
  cuisineCard: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cuisineItem: {
    alignItems: "center",
    marginRight: 10,
    backgroundColor: colors.gray,

    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  cuisineText: {
    fontSize: 15,
    color: "black",
  },
});
