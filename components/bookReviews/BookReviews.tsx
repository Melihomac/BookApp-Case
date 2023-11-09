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

const BookReviews = () => {
  return (
    <View style={styles.lastSectionmyBooks}>
      <View style={styles.myBookCollection}>
        <Image
          style={styles.myBookCollectionIcon}
          source={require("../../assets/icons/CardButtonIcons.png")}
        />
        <Text style={styles.myBookCollectionTextStyle} numberOfLines={2}>
          Kitap Derlemelerim
        </Text>
      </View>
      <View style={styles.myBookList}>
        <Image
          style={styles.myBookCollectionIcon}
          source={require("../../assets/icons/CardButtonIcons.png")}
        />
        <Text style={styles.myBookCollectionTextStyle} numberOfLines={2}>
          İstek Listelerim
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lastSectionmyBooks: {
    width: 312,
    height: 148,
    marginLeft: 31,
    flexDirection: "row",
    marginBottom: 24,
  },
  myBookCollection: {
    width: 148,
    height: 148,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  myBookList: {
    width: 148,
    height: 148,
    borderRadius: 15,
    marginLeft: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  myBookCollectionIcon: {
    width: 64,
    height: 64,
    marginLeft: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  myBookCollectionTextStyle: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "FamilijenGrotest",
    width: 112,
    height: 44,
    marginLeft: 18,
  },
});

export default BookReviews;
