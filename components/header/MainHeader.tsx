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
import { scaleHeight, scaleWidth } from "../../scaleProps/ScaleProps";

const MainHeader = () => {
  return (
    <View style={styles.mainHeaderStyle}>
      <Text style={styles.textPositionStyle}>Kitaplık</Text>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/icons/LibraryIcon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeaderStyle: {
    width: scaleWidth(375),
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: { width: 2.5, height: 2.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#fff",
  },
  textPositionStyle: {
    width: scaleWidth(247),
    marginTop: 84.5,
    fontSize: 24,
    fontFamily: "KronaOne-Regular",
    marginLeft: 32,
    marginBottom: 23.5,
    marginRight: 96,
  },
  imageStyle: {
    marginLeft: -279,
    marginBottom: -6.5,
    marginTop: 67.5,
    marginRight: 32,
  },
});

export default MainHeader;
