// import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

import Home from "./components/Home";
import Header from "./components/Partials/Header";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Home />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f6f6f6",
  },
});
