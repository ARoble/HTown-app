import { View, Text, StyleSheet, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import colors from "../../assets/colors/colors";
import TextContent from "../Partials/Text";

export default function Search() {
  return (
    <View style={styles.searchBar}>
      <TextContent
        text="Resturaunt List"
        fontSize={20}
        font={"Montserrat_SemiBold"}
      />
      <View style={styles.filterBtn}>
        <Feather name="filter" size={25} color={colors.white}></Feather>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  filterBtn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 7,
    // shadow ios
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // shadow android
    elevation: 10,
    shadowColor: "black",
  },
});
