import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { restaurantList } from "../../assets/data/dummyData";
import Feather from "react-native-vector-icons/Feather";

import TextContent from "../Partials/Text";
import colors from "../../assets/colors/colors";

export default function Index({ route }) {
  const { id } = route.params;
  const [restaurant, setRestaurant] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRestaurant(restaurantList.find((data) => data.id === id));
    setLoaded(true);
  }, []);
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "blue",
        height: 90,
        borderRadius: 10,
        width: "80%",
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: `${restaurant.image}`,
        }}
      />
      <View style={{ backgroundColor: "green", width: "50%" }}>
        <Text>
          A React component for displaying text. Text supports nesting, styling,
          and touch handling. In the following example, the nested title and
          body text will inherit the fontFamily from styles.baseText, but the
          title provides its own additional styles. The title and body will
          stack on top of each other on account of the literal newlines:
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
