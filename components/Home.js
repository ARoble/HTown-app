import { StyleSheet, Text, View, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import Card from "./Home/Card";

export default Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://logos-world.net/wp-content/uploads/2020/12/Yelp-Logo.png",
            }}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <Feather name="menu" size={24} />
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.heading}>Restaurants 🍽</Text>
        <View style={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
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
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  imageContainer: {
    // backgroundColor: "gray",
    // padding: 10,
    // borderRadius: 70,
    // color: "white",
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
    flexWrap: "wrap",
    justifyContent: "space-between",
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
