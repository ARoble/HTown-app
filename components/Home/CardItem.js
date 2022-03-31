import { StyleSheet, Text, View, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function CardItem() {
  return (
    <View style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo.png",
          }}
        />
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardHeading}>Sultan</Text>
        <Feather name="map-pin" size={14}>
          Xero awr
        </Feather>
        <View style={{ flexDirection: "row" }}>
          <Feather name="dollar-sign" size={14} color={"green"} />
          <Feather name="dollar-sign" size={14} color={"green"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: 140,
    borderRadius: 7,
    marginVertical: 5,
    marginRight: 10,
  },
  cardHeading: {
    fontSize: 17,
    fontWeight: "bold",
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
