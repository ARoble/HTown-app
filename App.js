import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import useFonts from "./hooks/useFont";

import Home from "./components/Home";
import List from "./components/List/List";
import Detail from "./components/Details/index";
import colors from "./assets/colors/colors";

import Tabs from "./navigation/tabs";
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
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
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <NavigationContainer theme={MyTheme}>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    // marginLeft: 20,
    backgroundColor: colors.background,
  },
});

export default App;
