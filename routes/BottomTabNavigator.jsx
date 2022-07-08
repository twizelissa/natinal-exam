import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Candidates from "../screens/Candidates";
import { AntDesign } from "@expo/vector-icons";
import Polls from "../screens/Polls";
import Settings from "../screens/Settings";
import CreateCandidate from "../screens/CreateCandidate";

export default function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator();

  //is route active
  const isRouteActive = (route) => {
    return route.state?.index > 0 ? true : false;
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Polls"
      screenOptions={{ tabBarActiveTintColor: "#0B4890" }}
    >
      <BottomTab.Screen
        name="Polls"
        component={Polls}
        options={({ navigation, route }) => ({
          title: "Polls",
          headerShown: false,
          tabBarIcon: () => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <AntDesign
                name="dashboard"
                size={24}
                color={a ? "#0B4890" : "black"}
              />
            );
          },
        })}
      />
      {/* <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={({ navigation, route }) => ({
          title: "Settings",
          headerShown: false,
          tabBarIcon: () => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <AntDesign
                name="setting"
                size={24}
                color={a ? "#0B4890" : "black"}
              />
            );
          },
        })}
      /> */}

      <BottomTab.Screen
        name="createCandidate"
        component={CreateCandidate}
        options={({ navigation, route }) => ({
          headerShown: false,
          title: "create candidate",
          tabBarIcon: () => {
            const a = isRouteActive(route.name, navigation.getState());
            return (
              <AntDesign
                name="adduser"
                size={24}
                color={a ? "#0B4890" : "black"}
              />
            );
          },
        })}
      />
    </BottomTab.Navigator>
  );
}
