import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import useFonts from "./hooks/useFont";

import Home from "./components/Home";
import Header from "./components/Partials/Header";
import List from "./components/List/List";
import colors from "./assets/colors/colors";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

const customFonts = {
  Montserrat_Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
  Montserrat_Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
  Montserrat_Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  Montserrat_SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
};

function App() {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <View style={styles.container}>
        <Header />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // fontFamily: " Montserrat_600SemiBold",
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
});

export default App;
