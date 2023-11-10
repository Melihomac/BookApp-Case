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

interface Item {
  id: string;
  title: string;
}

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchNow, setSearchNow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setLoading(true);
    useHook(searchTerm, books).then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, [searchNow]);

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => handleMovie(item?.id)}
        >
          <View style={{ width: "100%" }}>
            <Text style={styles.newMovieNames} numberOfLines={2}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
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
        />
      </View>
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={() => {
          console.log("pressed");
          setSearchNow(!searchNow);
        }}
      ></TouchableOpacity>
      <View>
        <FlatList
          data={books}
          renderItem={renderItem}
          style={{ marginBottom: 165 }}
        />
      </View>
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
  searchBtn: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A20E0E",
    borderRadius: 15,
    marginLeft: 5,
  },
});

export default SearchComponent;
