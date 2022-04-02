import { View, Text, StyleSheet } from "react-native";
import TextContent from "../Partials/Text";

import colors from "../../assets/colors/colors";

export default function CuisineItem({ cusine }) {
  return (
    <View>
      <Text style={styles.cusine}>
        <TextContent
          text={cusine}
          fontSize={12}
          font={"Montserrat_Medium"}
          color={colors.black}
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cusine: {
    backgroundColor: colors.textLight,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5,
  },
});
