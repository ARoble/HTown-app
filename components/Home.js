import { View, StyleSheet, Text, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import Header from "./Partials/Header";
import Card from "./Home/Card";
import Cuisines from "./Home/Cuisines";

import Coupon from "./Home/Coupon";

export default function Home() {
  return (
    <ScrollView>
      <Header />
      <Card title={"Places Near You 🍽"} scroll={true} />
      <Cuisines />
      <Card title={"Top Picks 🍽"} scroll={false} />
      <Coupon />
    </ScrollView>
  );
}
