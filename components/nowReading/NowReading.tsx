import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const NowReading = () => {
  return (
    <View style={styles.nowReadingSection}>
      <View style={styles.childNowReadingStyle}>
        <Text style={styles.childNowReadingTextStyle}>Şu an okuduklarım</Text>
        <Text style={styles.childAllSeeTextStyle}>Tümünü Gör</Text>
      </View>
      <View style={styles.nowReadingSectionStyle}>
        <Text style={styles.nowReadingSectionTextStyle}>
          Şuan okuduğun kitabı ekle ve kişisel notlar almaya başla!
        </Text>
        <Image
          style={styles.nowReadingIcon}
          source={require("../../assets/icons/RoundedButtons.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nowReadingSection: {
    height: 153,
    width: 343,
    marginLeft: 32,
    marginTop: 8,
    marginBottom: 24,
  },
  nowReadingSectionTextStyle: {
    width: 204,
    height: "auto",
    marginLeft: 16,
    marginTop: 16,
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 22,
  },
  nowReadingIcon: {
    marginTop: 30,
    marginBottom: 30,
  },
  nowReadingSectionStyle: {
    width: 311,
    height: 103,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowOffset: { width: 2.5, height: 2.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: "row",
  },
  childNowReadingStyle: {
    flexDirection: "row",
    width: 343,
    height: 50,
  },
  childNowReadingTextStyle: {
    fontFamily: "FamilijenGrotest",
    fontSize: 22,
    marginTop: 11,
    marginRight: 43,
  },
  childAllSeeTextStyle: {
    fontFamily: "FamilijenGrotest",
    fontSize: 16,
    marginRight: 32,
    marginTop: 15,
    backgroundColor: "#FFFFFFB2",
  },
});

export default NowReading;
