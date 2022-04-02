import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Search from "./Search";

import { restaurantList } from "../../assets/data/dummyData";
import TextContent from "../Partials/Text";
import colors from "../../assets/colors/colors";

export default function List() {
  return (
    <View style={styles.listContainer}>
      <Search />

      <View style={styles.listItem}>
        <Image
          style={styles.listImage}
          source={{
            uri: `https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg`,
          }}
        />

        <View style={styles.listInfo}>
          <View style={styles.listContent}>
            <TextContent
              text="Fish & Stake"
              fontSize={15}
              font={"Montserrat_SemiBold"}
            />
            <Feather name="map-pin" size={12}>
              <TextContent
                text="Jigjiga Yar"
                fontSize={12}
                font={"Montserrat_Regular"}
                color={colors.black}
              />
            </Feather>
            <View style={styles.cuisineList}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Text style={styles.cusine}>
                  <TextContent
                    text="Indian"
                    fontSize={12}
                    font={"Montserrat_Medium"}
                    color={colors.black}
                  />
                </Text>
                <Text style={styles.cusine}>
                  <TextContent
                    text="Indian"
                    fontSize={12}
                    font={"Montserrat_Medium"}
                    color={colors.black}
                  />
                </Text>
                <Text style={styles.cusine}>
                  <TextContent
                    text="Indian"
                    fontSize={12}
                    font={"Montserrat_Medium"}
                    color={colors.black}
                  />
                </Text>
                <Text style={styles.cusine}>
                  <TextContent
                    text="Indian"
                    fontSize={12}
                    font={"Montserrat_Medium"}
                    color={colors.black}
                  />
                </Text>
                <Text style={styles.cusine}>
                  <TextContent
                    text="Indian"
                    fontSize={12}
                    font={"Montserrat_Medium"}
                    color={colors.black}
                  />
                </Text>
                <Text style={styles.cusine}>
                  <TextContent
                    text="Indian"
                    fontSize={12}
                    font={"Montserrat_Medium"}
                    color={colors.black}
                  />
                </Text>
                <Text style={styles.cusine}>
                  <TextContent
                    text="Indian"
                    fontSize={12}
                    font={"Montserrat_Medium"}
                    color={colors.black}
                  />
                </Text>
              </ScrollView>
            </View>
          </View>
          <Feather style={styles.bookmark} name="bookmark" size={30}></Feather>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 15,
  },

  listItem: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 5,
    // shadow ios
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // shadow android
    elevation: 10,
    shadowColor: "black",
  },
  listImage: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  listContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  listInfo: {
    flex: 1,
    position: "relative",
    // flexDirection: "row",
    // alignContent: "space-between",
    paddingTop: 10,
    paddingBottom: 3,
  },
  bookmark: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  cuisineList: {
    flexDirection: "row",
  },
  cusine: {
    backgroundColor: colors.textLight,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5,
  },
});
