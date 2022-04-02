import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import TextContent from "../Partials/Text";
import colors from "../../assets/colors/colors";
import CuisineItem from "./CuisineItem";

export default function ListItem({ restaurant }) {
  return (
    <View style={styles.listItem}>
      <Image
        style={styles.listImage}
        source={{
          uri: `${restaurant.image}`,
        }}
      />

      <View style={styles.listInfo}>
        <View style={styles.listContent}>
          <TextContent
            text={restaurant.name}
            fontSize={15}
            font={"Montserrat_SemiBold"}
          />
          <Feather name="map-pin" size={12}>
            <TextContent
              text={restaurant.location}
              fontSize={12}
              font={"Montserrat_Regular"}
              color={colors.black}
            />
          </Feather>
          <View style={styles.cuisineList}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {restaurant.cuisines.map((cusine) => (
                <CuisineItem cusine={cusine} />
              ))}

              {/* <Text>hi</Text> */}
            </ScrollView>
          </View>
        </View>
        <Feather style={styles.bookmark} name="bookmark" size={30}></Feather>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 5,
    marginBottom: 12,
    // shadow ios
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // shadow android
    elevation: 10,
    shadowColor: "black",
  },
  listImage: {
    height: 90,
    width: 90,
    borderRadius: 5,
  },
  listContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  listInfo: {
    flex: 1,
    position: "relative",
    // flexDirection: "row",
    // alignContent: "space-between",
    paddingTop: 10,
    paddingBottom: 3,
  },
  bookmark: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  cuisineList: {
    flexDirection: "row",
    marginRight: 5,
  },
  cusine: {
    backgroundColor: colors.textLight,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5,
  },
});
