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
import { useFonts } from "expo-font";
import { useCallback } from "react";
import MainHeader from "./header/MainHeader";
import MyBooks from "./myBooks/MyBooks";
import NowReading from "./nowReading/NowReading";
import BookReviews from "./bookReviews/BookReviews";
import BottomSheetComponent from "./bottomSheet/BottomSheetComponent";

const Library = () => {
  const [fontsLoaded, fontError] = useFonts({
    "KronaOne-Regular": require("../assets/fonts/KronaOne-Regular.ttf"),
    FamilijenGrotest: require("../assets/fonts/FamiljenGrotesk-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {}, [
    fontsLoaded,
    fontError,
  ]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <MainHeader />
        <MyBooks />
        <BottomSheetComponent />
        <NowReading />
        <View style={styles.stickStyle}></View>
        <BookReviews />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  stickStyle: {
    borderTopColor: "#ACACAC",
    borderTopWidth: 1,
    marginBottom: 24,
  },
});

export default Library;
