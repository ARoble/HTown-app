import { StyleSheet, Text, View, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import CardItem from "./CardItem";
import colors from "../../assets/colors/colors";
import restaurantList from "../../assets/data/dummyData";
import TextContent from "../Partials/Text";

export default function Card({ title }) {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <TextContent text={title} fontSize={23} font={"Montserrat_Bold"} />
        <TextContent
          text={"View More"}
          fontSize={12}
          font={"Montserrat_Bold"}
        />
      </View>
      <View style={styles.cards}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {restaurantList.map((restaurant) => (
            <CardItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ScrollView>
      </View>
      {/* <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>
            <TextContent
              text={"View More"}
              fontSize={13}
              font={"Montserrat_Regular"}
            />
          </Text>
          <Feather
            name="arrow-right-circle"
            size={17}
            color={"white"}
          ></Feather>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    fontFamily: "Montserrat_Bold",
  },

  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },

  cardContainer: {
    paddingVertical: 10,
  },
  cards: {
    flexDirection: "row",
    marginVertical: 10,
  },

  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
    borderRadius: 100,
    width: 115,
    backgroundColor: colors.black,
  },
  btnText: {
    color: colors.white,
    fontWeight: "bold",
    paddingRight: 5,
  },
  btnContainer: {
    alignItems: "center",
  },
});
