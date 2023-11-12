import React, { useState, useEffect } from "react";
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
  TextInput,
} from "react-native";
import search from "../../assets/icons/BottomButtons/SearchButton.png";
import useHook from "../hook/useHook";
import { ref, set } from "firebase/database";

interface Item {
  id: string;
  title: string;
  name: any;
  books: any;
  image: string;
  author: string;
  data: string;
}

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchNow, setSearchNow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [active, setActive] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [selectedBook, setSelectedBook] = useState("");
  useEffect(() => {
    setLoading(true);
    useHook(searchTerm, books).then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, [searchNow]);
  const onPressHandler = (item: Item) => {
    setActive(true);
    setBackgroundColor("#F09336");
    setSelectedBook(`${item.name}`);
    console.log("Seçilen Kitap: ", item.name);
    console.log(selectedBook);
  };
  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    //console.log("BURASI " + item.image);
    //console.log(item.author);
    return (
      <View key={index}>
        <TouchableOpacity onPress={() => onPressHandler(item)}>
          <View style={styles.resultStyle}>
            <Image
              source={{
                uri: `/Users/melihomac/Desktop/JobBookApp/backend${item.image}`,
              }}
              style={styles.imageStyle}
            />
            <View style={styles.bookInfoStyle}>
              <Text style={styles.bookNameStyle}>{item.name}</Text>
              <Text style={styles.bookAuthorStyle}>{item.author}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const onSubmitted = () => {
    setSearchNow(!searchNow);
  };
  const create = () => {};
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <Image
          source={search}
          resizeMode="contain"
          width={30}
          height={30}
          style={styles.searchBtnImage}
        />
        <TextInput
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Bir kitap ya da yazar adı ara"
          placeholderTextColor="#ACACAC"
          autoFocus={false}
          autoComplete="off"
          onSubmitEditing={() => onSubmitted()}
        />
      </View>
      <View>
        <FlatList
          data={books}
          renderItem={renderItem}
          style={styles.bookStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.addBookFuncStyle,
          active ? styles.activeStyle : styles.inActiveStyle,
        ]}
        disabled={!active}
        onPress={create}
      >
        <Text
          style={[
            styles.addBookTextStyle,
            active ? styles.activeStyle : styles.inActiveStyle,
          ]}
        >
          Seçimi Ekle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 52,
    width: 311,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1E1E1E",
  },
  searchWrapper: {
    padding: 14,
    flexDirection: "row",
  },
  searchBtnImage: {
    marginRight: 10,
  },
  bookStyle: {
    marginTop: 80,
    height: 331,
    width: 311,
  },
  resultStyle: {
    width: 184.51,
    borderRadius: 18.83,
    height: 305,
    backgroundColor: "#E0DFDE",
    marginRight: 16,
  },
  imageStyle: {
    height: 227.18,
    width: 152.52,
    marginTop: 16.32,
    marginLeft: 16.32,
    borderRadius: 6.28,
  },
  bookInfoStyle: {
    width: 185,
    height: 87.86,
    marginBottom: 16.32,
    shadowOffset: { width: 2.5, height: 2.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 18.83,
    borderBottomRightRadius: 18.83,
  },
  bookNameStyle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20.08,
    marginTop: 13.93,
  },
  bookAuthorStyle: {
    width: 144.86,
    height: 60,
    fontSize: 16,
    marginLeft: 20.08,
    marginTop: 5.93,
  },
  addBookFuncStyle: {
    width: 311,
    height: 50,
    backgroundColor: "#E0DFDE",
    borderRadius: 40,
    marginTop: 20,
    color: "#ACACAC",
  },
  inActiveStyle: {
    backgroundColor: "#E0DFDE",
    color: "#ACACAC",
  },
  activeStyle: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
  },
  addBookTextStyle: {
    marginLeft: 115.5,
    marginTop: 15,
  },
});

export default SearchComponent;
