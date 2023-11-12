import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Library from "./components/Library";
import Home from "./components/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Library">
          <Tab.Screen
            name="Anasayfa"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={require("./assets/icons/BottomButtons/HomeIcon.png")}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Gözat"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={require("./assets/icons/BottomButtons/SearchButton.png")}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Library"
            component={Library}
            options={({ route }) => ({
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("./assets/icons/BottomButtons/LibraryActive.png")
                      : require("./assets/icons/BottomButtons/LibraryButton.png")
                  }
                />
              ),
            })}
          />
          <Tab.Screen
            name="Profil"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={require("./assets/icons/BottomButtons/ProfileButton.png")}
                />
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
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default App;
