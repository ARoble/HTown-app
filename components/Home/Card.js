import { StyleSheet, Text, View, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import CardItem from "./CardItem";

export default function Card({ title }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.cards}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>View More</Text>
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

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
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
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    borderRadius: 100,
    width: 115,
    backgroundColor: "black",
  },
  btnText: {
    color: "white",
    paddingRight: 5,
  },
  btnContainer: {
    alignItems: "center",
  },
});
