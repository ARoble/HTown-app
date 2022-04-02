import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import Search from "./Search";
import ListItem from "./ListItem";
import { restaurantList } from "../../assets/data/dummyData";

export default function List() {
  return (
    <View style={styles.listContainer}>
      <Search />
      {restaurantList.map((restaurant) => (
        <ListItem restaurant={restaurant} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 15,
  },
});
