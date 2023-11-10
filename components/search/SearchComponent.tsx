import React, { useState } from "react";
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

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchNow, setSearchNow] = useState(false);
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
});

export default SearchComponent;
