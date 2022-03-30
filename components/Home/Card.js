import { StyleSheet, Text, View, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function Card() {
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
          Jigjiga Yar
        </Feather>
        <Feather name="clock" size={14}>
          Open 7 days
        </Feather>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "48.5%",
    borderRadius: 7,
    marginVertical: 5,
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
  },
  cardImage: {
    width: "100%",
    height: 100,
    aspectRatio: 1,
  },
});
