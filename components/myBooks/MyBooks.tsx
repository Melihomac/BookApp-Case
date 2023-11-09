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

const MyBooks = () => {
  return (
    <View style={styles.myBookStyle}>
      <View style={styles.childMyBookStyle}>
        <Text style={styles.childmyBookTextStyle}>Kitaplarım</Text>
        <Text style={styles.childAllSeeTextStyle}>Tümünü Gör</Text>
      </View>
      <View style={styles.welcomeBookMessageStyle}>
        <Text style={styles.welcomeMessageTextBoldStyle}>
          Kitaplığına hoşgeldin! Son bir adım kaldı.
        </Text>
        <Text style={styles.welcomeMessageTextStyle}>
          Sana daha uygun öneriler sunabilmemiz için, en sevdiğin 3 kitabı
          kitaplarına ekle.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myBookStyle: {
    height: 153,
    width: 343,
    marginTop: 16,
    marginLeft: 32,
  },
  childMyBookStyle: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  childmyBookTextStyle: {
    fontFamily: "FamilijenGrotest",
    fontSize: 22,
    marginTop: 11,
  },
  childAllSeeTextStyle: {
    fontFamily: "FamilijenGrotest",
    fontSize: 16,
    marginRight: 32,
    marginTop: 15,
    backgroundColor: "#FFFFFFB2",
  },
  welcomeBookMessageStyle: {
    width: 311,
    height: 103,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowOffset: { width: 2.5, height: 2.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  welcomeMessageTextBoldStyle: {
    marginLeft: 16,
    marginTop: 16,
    fontWeight: "bold",
    fontSize: 16,
  },
  welcomeMessageTextStyle: {
    marginLeft: 16,
    marginTop: 4,
    fontSize: 14,
  },
});

export default MyBooks;
