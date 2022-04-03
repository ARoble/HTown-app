import { View, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import colors from "../../assets/colors/colors";

import TextContent from "../Partials/Text";

export default function DetailsCard() {
  return (
    <View>
      <View style={styles.detailsCards}>
        {/* one card */}
        <View style={styles.detailsCard}>
          <View style={styles.detailsIcon}>
            <Feather name="users" size={25} color={colors.primary}></Feather>
          </View>
          <TextContent
            text="Low"
            fontSize={18}
            font={"Montserrat_SemiBold"}
            color={colors.black}
          />
          <TextContent
            text="workload"
            fontSize={12}
            font={"Montserrat_Medium"}
            color={colors.textGray}
          />
        </View>
        {/* one card */}
        {/* one card */}
        <View style={styles.detailsCard}>
          <View style={styles.detailsIcon}>
            <Feather name="star" size={25} color={colors.primary}></Feather>
          </View>
          <TextContent
            text="4.3"
            fontSize={18}
            font={"Montserrat_SemiBold"}
            color={colors.black}
          />
          <TextContent
            text="rating"
            fontSize={12}
            font={"Montserrat_Medium"}
            color={colors.textGray}
          />
        </View>
        {/* one card */}
        {/* one card */}
        <View style={styles.detailsCard}>
          <View style={styles.detailsIcon}>
            <Feather name="compass" size={25} color={colors.primary}></Feather>
          </View>
          <TextContent
            text="1km"
            fontSize={18}
            font={"Montserrat_SemiBold"}
            color={colors.black}
          />
          <TextContent
            text="for you"
            fontSize={12}
            font={"Montserrat_Medium"}
            color={colors.textGray}
          />
        </View>
        {/* one card */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsCards: {
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "center",
  },
  detailsCard: {
    alignItems: "center",
  },
  detailsIcon: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 12,
  },
});
