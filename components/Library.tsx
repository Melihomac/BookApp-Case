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
import BottomSheet from "./bottomSheet/BottomSheet";

interface Item {
  id: string;
  name: string;
  title: string;
  poster_path: string;
  genre_ids: string;
}

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
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d721",
      title: "Third Item",
    },
  ];
  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View>
        <TouchableOpacity style={styles.addBookOpacityStyle}>
          <ImageBackground
            source={require("../assets/Cover.png")}
            style={styles.imageBackgroundStyle}
          >
            <Image
              style={styles.opacityPlusIcon}
              source={require("../assets/icons/plusIcon.png")}
            />
            <Text style={styles.opacityTextStyle} numberOfLines={2}>
              Kitap Ekle
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <MainHeader />
        <MyBooks />
        <View style={styles.myBookSectionStyle}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <NowReading />
        <View style={styles.stickStyle}></View>
        <BookReviews />
        <BottomSheet />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  myBookSectionStyle: {
    width: "auto",
    height: 195,
    marginTop: 24,
    paddingLeft: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#ACACAC",
  },
  addBookOpacityStyle: {
    width: 98.51,
    height: 147.36,
    marginTop: 24,
    marginBottom: 23.64,
    marginRight: 8.36,
    shadowOffset: { width: 2.5, height: 2.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  imageBackgroundStyle: {
    width: 98.51,
    height: 147.36,
  },
  opacityPlusIcon: {
    width: 43.96,
    height: 43.96,
    marginTop: 45.59,
    marginLeft: 27.68,
  },
  opacityTextStyle: {
    width: 50.48,
    fontFamily: "KronaOne-Regular",
    marginTop: 17.1,
    marginLeft: 24.42,
    fontSize: 9.77,
    textAlign: "center",
  },
  stickStyle: {
    borderTopColor: "#ACACAC",
    borderTopWidth: 1,
    marginBottom: 24,
  },
});

export default Library;
