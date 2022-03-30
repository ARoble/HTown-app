// import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";

import Home from "./components/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
    backgroundColor: "#ececec",
  },
});
