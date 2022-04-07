import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import Search from "./Search";
import ListItem from "./ListItem";
import { restaurantList } from "../../assets/data/dummyData";
import colors from "../../assets/colors/colors";

export default function List() {
  return (
    <View>
      <Search />
      <View style={styles.listContainer}>
        {restaurantList.map((restaurant) => (
          <ListItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 15,
  },
});
