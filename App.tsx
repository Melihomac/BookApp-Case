import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from "react-native";
import Library from "./components/Library";
import Home from "./components/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Kitaplık">
          <Tab.Screen
            name="Anasayfa"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image source={require("./assets/icons/HomeIcon.png")} />
              ),
            }}
          />
          <Tab.Screen
            name="Gözat"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image source={require("./assets/icons/HomeIcon.png")} />
              ),
            }}
          />
          <Tab.Screen
            name="Library"
            component={Library}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image source={require("./assets/icons/HomeIcon.png")} />
              ),
            }}
          />
          <Tab.Screen
            name="Profil"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image source={require("./assets/icons/HomeIcon.png")} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
