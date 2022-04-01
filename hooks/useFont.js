import * as Font from "expo-font";

export default async function useFonts() {
  await Font.loadAsync({
    Montserrat_Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    Montserrat_Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    Montserrat_SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
}
