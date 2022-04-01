import { View, StyleSheet, Text, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import Card from "./Home/Card";
import Cuisines from "./Home/Cuisines";

import Coupon from "./Home/Coupon";

export default function Home() {
  return (
    <ScrollView>
      <Card title={"Places Near You 🍽"} />
      <Cuisines />
      <Card title={"Top Picks 🍽"} />
      <Coupon />
    </ScrollView>
  );
}
