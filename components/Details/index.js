import { Text, View, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import dummyData from "../../assets/data/dummyData";
import Feather from "react-native-vector-icons/Feather";

import TextContent from "../Partials/Text";
import colors from "../../assets/colors/colors";

export default function Index({ route }) {
  const { id } = route.params;
  const [restaurant, setRestaurant] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRestaurant(dummyData.find((data) => data.id === id));
    setLoaded(true);
  }, []);
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.details}>
      {/* <View style={styles.backButton}>
        <Text>hi</Text>
        <Feather name="arrow-left" size={30} color="white"></Feather>
      </View> */}
      <View style={styles.detailsImageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: `${restaurant.bgImage}`,
          }}
        />

        <View style={styles.cardData}>
          <Image
            style={styles.restaurantLogo}
            source={{
              uri: `${restaurant.image}`,
            }}
          />

          <View>
            <TextContent
              text={restaurant.name}
              fontSize={19}
              font={"Montserrat_SemiBold"}
            />
            <Feather name="map-pin" size={12}>
              <TextContent
                text={restaurant.location}
                fontSize={12}
                font={"Montserrat_Regular"}
              />
            </Feather>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsImageContainer: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    height: 250,
    backgroundColor: "blue",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  cardData: {
    flexDirection: "row",
    backgroundColor: "white",
    position: "absolute",
    bottom: -30,
    width: "80%",
    borderRadius: 15,
    height: 80,
    alignItems: "center",
    // shadow ios
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // shadow android
    elevation: 10,
    shadowColor: "black",
  },
  restaurantLogo: {
    width: 100,
    height: "100%",
    marginRight: 7,
  },
  backButton: {
    flexDirection: "row",
    backgroundColor: "blue",
  },
});
