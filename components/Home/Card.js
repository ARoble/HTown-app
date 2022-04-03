import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import CardItem from "./CardItem";
import colors from "../../assets/colors/colors";
import { restaurantList } from "../../assets/data/dummyData";
import TextContent from "../Partials/Text";
import { useNavigation } from "@react-navigation/native";

function scrolledList() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.cards}>
        {restaurantList.map((restaurant) => (
          <CardItem key={restaurant.id} restaurant={restaurant} scroll={true} />
        ))}
      </View>
    </ScrollView>
  );
}

function noScroll() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.cardsNoScroll}>
        {restaurantList.map((restaurant) => (
          <CardItem
            key={restaurant.id}
            restaurant={restaurant}
            scroll={false}
          />
        ))}
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Pressable
            style={styles.btnText}
            onPress={() => navigation.navigate("List")}
          >
            <TextContent
              text={"View More"}
              fontSize={13}
              font={"Montserrat_Regular"}
              color={colors.white}
            />
          </Pressable>
          <Feather
            name="arrow-right-circle"
            size={17}
            color={"white"}
          ></Feather>
        </View>
      </View>
    </View>
  );
}

export default function Card({ title, scroll }) {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <TextContent text={title} fontSize={23} font={"Montserrat_Bold"} />
        {scroll && (
          <Pressable onPress={() => navigation.navigate("List")}>
            <TextContent
              text={"View More"}
              fontSize={12}
              font={"Montserrat_SemiBold"}
              color={colors.primary}
            />
          </Pressable>
        )}
      </View>
      {scroll ? scrolledList() : noScroll()}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },

  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },

  cardContainer: {
    paddingVertical: 10,
    marginLeft: 15,
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
    backgroundColor: colors.primary,
  },
  btnText: {
    color: colors.white,
    fontWeight: "bold",
    paddingRight: 5,
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  // noscroll
  cardsNoScroll: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
