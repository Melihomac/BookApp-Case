import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import { scaleHeight } from "../../scaleProps/ScaleProps";
import SearchComponent from "../search/SearchComponent";
import { db } from "../../FirebaseConfig";
import { ref, set, onValue } from "firebase/database";
import useHook from "../hook/useHook";

interface Item {
  id: string;
  title: string;
  image: string;
}

const BottomSheetComponent = () => {
  const refRBSheet = useRef<RBSheet>(null);
  const snapPoints = useMemo(() => ["%75"], []);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [matchBook, setMatchBook] = useState("");
  const [data, setData] = useState<Item[]>([
    { id: "0", title: "Kitap Ekle", image: "" },
    { id: "1", title: "Kitap Ekle", image: "" },
    { id: "2", title: "Kitap Ekle", image: "" },
    { id: "3", title: "Kitap Ekle", image: "" },
  ]);

  useEffect(() => {
    setData([
      { id: "0", title: matchBook, image: "" },
      { id: "1", title: "Kitap Ekle", image: "" },
      { id: "2", title: "Kitap Ekle", image: "" },
      { id: "3", title: "Kitap Ekle", image: "" },
    ]);
  }, [matchBook]);

  useEffect(() => {
    readData();
  }, []);

  const readData = () => {
    const starCountRef = ref(db, "books/");
    onValue(starCountRef, (snapshot) => {
      const dataFromFirebase = snapshot.val();
      useHook(searchTerm, books).then((data) => {
        const dataBooks = data.map((book) => book.name);
        console.log("DataBooks: ", dataBooks);
        if (Array.isArray(dataBooks) && dataBooks.length > 0) {
          if (dataBooks.includes(dataFromFirebase.selectedBook)) {
            console.log("MATCH");
            setMatchBook(dataFromFirebase?.selectedBook);
          } else {
            console.log("NO MATCH");
          }
        } else {
          console.log("DataBooks is not a valid array.");
        }
      });
    });
  };

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  const closeBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    return (
      <View key={index}>
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
              source={
                item.title === matchBook
                  ? {
                      uri: `/Users/melihomac/Desktop/JobBookApp/backend${item.image}`,
                    }
                  : require("../../assets/icons/plusIcon.png")
              }
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
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <GestureHandlerRootView>
          <RBSheet
            ref={refRBSheet}
            height={630}
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
              <SearchComponent onClose={closeBottomSheet} />
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
