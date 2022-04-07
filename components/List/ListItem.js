import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import TextContent from "../Partials/Text";
import colors from "../../assets/colors/colors";
import CuisineItem from "./CuisineItem";

export default function ListItem({ restaurant }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.list}>
        <View style={styles.listImageContainer}>
          <Image
            source={{
              uri: `${restaurant.image}`,
            }}
            style={styles.listImageContainer}
          />
          <View style={styles.bookMark}>
            <Feather name="heart" size={18} color={colors.primary}></Feather>
          </View>
        </View>
        <View style={styles.listContent}>
          <View>
            <TextContent
              text={restaurant.name}
              fontSize={15}
              font={"Montserrat_Bold"}
            />
            <View style={styles.listItems}>
              <View style={styles.iconItem}>
                <Feather name="star" size={16} color={colors.primary}></Feather>
                <TextContent
                  text={restaurant.rating}
                  fontSize={13}
                  font={"Montserrat_Medium"}
                />
              </View>
              <View style={styles.iconItem}>
                <Feather
                  name="clock"
                  size={16}
                  color={colors.primary}
                ></Feather>
                <TextContent
                  text={restaurant.distance}
                  fontSize={13}
                  font={"Montserrat_Medium"}
                />
              </View>
            </View>
            <View>
              <TextContent
                text={restaurant.cuisines.join(", ")}
                fontSize={12}
                font={"Montserrat_SemiBold"}
                color={colors.textGray}
              />
            </View>
          </View>
          <View>
            <Feather
              name="arrow-right-circle"
              size={25}
              color={colors.black}
            ></Feather>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 15,
    paddingBottom: 13,
    borderRadius: 1,
    borderBottomWidth: 1,
    borderColor: colors.darkGray,
  },
  list: {
    flexDirection: "row",
  },
  listImageContainer: {
    position: "relative",
    height: 80,
    width: 80,
    borderRadius: 15,
  },
  bookMark: {
    position: "absolute",
    top: 0,
    backgroundColor: colors.white,
    padding: 3,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  listContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  listItems: {
    flexDirection: "row",
    paddingTop: 3,
  },
  iconItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 7,
  },
});
