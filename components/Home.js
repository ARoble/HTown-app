import { View, StyleSheet, Text, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import Header from "./Partials/Header";
import Card from "./Home/Card";
import Cuisines from "./Home/Cuisines";

import Coupons from "./Home/Coupons";

import { couponList } from "../assets/data/dummyData";

export default function Home() {
  return (
    <ScrollView>
      <Header />
      <Card title={"Near You"} scroll={true} />
      <Cuisines />
      <Card title={"Top Picks"} scroll={false} />
      <Coupons />
    </ScrollView>
  );
}
