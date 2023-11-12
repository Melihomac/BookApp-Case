import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import { scaleHeight } from "../../scaleProps/ScaleProps";
import SearchComponent from "../search/SearchComponent";

interface Item {
  id: string;
  title: string;
}

const BottomSheetComponent = () => {
  const refRBSheet = useRef<RBSheet>(null);
  const snapPoints = useMemo(() => ["%75"], []);
  const DATA: Item[] = [
    { id: "1", title: "Kitap Ekle" },
    { id: "2", title: "Kitap Ekle" },
    { id: "3", title: "Kitap Ekle" },
    { id: "4", title: "Kitap Ekle" },
  ];

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.addBookOpacityStyle}
          onPress={openBottomSheet}
        >
          <ImageBackground
            source={require("../../assets/Cover.png")}
            style={styles.imageBackgroundStyle}
          >
            <Image
              style={styles.opacityPlusIcon}
              source={require("../../assets/icons/plusIcon.png")}
            />
            <Text style={styles.opacityTextStyle} numberOfLines={2}>
              {item.title}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.myBookSectionStyle}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <GestureHandlerRootView>
          <RBSheet
            ref={refRBSheet}
            height={scaleHeight(615)}
            openDuration={250}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
            }}
          >
            <View style={styles.bottomSheetStyle}>
              <View style={styles.shortStick}></View>
              <SearchComponent />
              <View style={styles.yourBooksStyle}>
                <Text style={styles.yourBooksBoldTextStyle}>
                  Okumuş Olabileceğin Kitaplar
                </Text>
                <Text style={styles.yourBooksTextStyle}>
                  Kartlara Tıklayarak seçim yapabilirsin
                </Text>
              </View>
            </View>
          </RBSheet>
        </GestureHandlerRootView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
  },
  bottomSheetStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: scaleHeight(605),
    borderTopColor: "#1E1E1E",
    borderWidth: 1,
  },
  shortStick: {
    width: "25%",
    height: 2,
    marginTop: 32,
    marginBottom: 48,
    backgroundColor: "#1E1E1E",
    alignSelf: "center",
  },
  textPrice: {
    color: "#000000",
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 3,
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
  yourBooksStyle: {
    width: 311,
    height: 64,
    marginTop: 16,
    marginLeft: 40,
  },
  yourBooksBoldTextStyle: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 27.5,
    color: "#1E1E1E",
    marginBottom: 8,
  },
  yourBooksTextStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: "#1E1E1E",
  },
});

export default BottomSheetComponent;
