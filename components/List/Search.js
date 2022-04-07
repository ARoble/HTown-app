import { View, Text, StyleSheet, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import colors from "../../assets/colors/colors";
import TextContent from "../Partials/Text";

export default function Search() {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchHeader}>
        <TextContent
          text="321 Resturaunt"
          fontSize={18}
          font={"Montserrat_SemiBold"}
        />
        <View style={styles.filterBtn}>
          <View style={styles.filered}>
            <TextContent
              text="0"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={"white"}
            />
          </View>
          <TextContent text="Filters" fontSize={12} font={"Montserrat_Bold"} />
          <Feather
            style={styles.locationIcon}
            name="chevron-down"
            size={15}
            color={"black"}
          ></Feather>
        </View>
      </View>
      <View style={styles.cusine}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.active}>
            <TextContent
              text="All"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={"white"}
            />
          </View>
          <View style={styles.cuisineItem}>
            <TextContent
              text="Arabian"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={"black"}
            />
          </View>
          <View style={styles.cuisineItem}>
            <TextContent
              text="Turkish"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={"black"}
            />
          </View>
          <View style={styles.cuisineItem}>
            <TextContent
              text="French"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={"black"}
            />
          </View>
          <View style={styles.cuisineItem}>
            <TextContent
              text="Somali"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={"black"}
            />
          </View>
          <View style={styles.cuisineItem}>
            <TextContent
              text="Italian"
              fontSize={13}
              font={"Montserrat_Medium"}
              color={"black"}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.darkGray,
  },
  searchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filered: {
    backgroundColor: colors.primary,
    paddingVertical: 2.5,
    paddingHorizontal: 7,
    borderRadius: 100,
    marginRight: 4,
  },
  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  cusine: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 14,
  },
  cuisineItem: {
    alignItems: "center",
    marginRight: 6,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  active: {
    alignItems: "center",
    marginRight: 6,
    backgroundColor: colors.black,

    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
