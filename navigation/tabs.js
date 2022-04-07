import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, Image, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwsome from "react-native-vector-icons/FontAwesome";

import Home from "../components/Home";
import List from "../components/List/List";
import colors from "../assets/colors/colors";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={20}
              style={{ color: focused ? colors.primary : colors.white }}
            ></Feather>
          ),
        }}
      />

      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={20}
              style={{ color: focused ? colors.primary : colors.white }}
            ></Feather>
          ),
        }}
      />
      <Tab.Screen
        name="QR"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwsome
              name="qrcode"
              size={40}
              style={{ color: focused ? colors.primary : colors.white }}
            ></FontAwsome>
          ),
        }}
      />
      <Tab.Screen
        name="Coupons"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="percent"
              size={20}
              style={{ color: focused ? colors.primary : colors.white }}
            ></Feather>
          ),
        }}
      />
      <Tab.Screen
        name="Faviourate"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwsome
              name="heart"
              size={20}
              style={{ color: focused ? "red" : colors.white }}
            ></FontAwsome>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
