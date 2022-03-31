import { View } from "react-native";

import Card from "./Home/Card";
import Cuisines from "./Home/Cuisines";

export default Home = () => {
  return (
    <View>
      <Cuisines />
      <Card title={"Restaurants 🍽"} />
      {/* <Card title={"Entertainment 🕺🏾"} /> */}
    </View>
  );
};
