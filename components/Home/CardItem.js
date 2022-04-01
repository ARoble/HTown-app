import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import TextContent from "../Partials/Text";
import colors from "../../assets/colors/colors";

import { useNavigation } from "@react-navigation/native";

export default function CardItem({ restaurant }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("List")}
    >
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: `${restaurant.image}`,
          }}
        />
      </View>

      <View style={styles.cardContent}>
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
          />
        </Feather>
        <View style={{ flexDirection: "row" }}>
          <Feather name="dollar-sign" size={14} color={"green"} />
          <Feather name="dollar-sign" size={14} color={"green"} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: 140,
    borderRadius: 7,
    marginVertical: 5,
    marginRight: 10,
  },
  cardHeading: {
    fontSize: 15,
    fontFamily: "Montserrat_SemiBold",
  },
  cardContent: {
    padding: 10,
  },
  cardImageContainer: {
    alignItems: "center",
    height: 80,
    width: "100%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    aspectRatio: 1.2,
  },
});
