import { useState, useEffect } from "react";
import axios from "axios";
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

//const url = "http://localhost:3000/api/data";

const useHook = async (search: any, books: any) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = "http://localhost:3000/api/data";

  axios.get(url, { headers });
  console.log("fetch books", search);
  if (!search) {
    const response = await axios.get(`${URL}`);
    return [...books, ...response.data.books];
  } else {
    console.log("in else");
    const response = await axios.get(`${URL}`);
    console.log(response.data.books);
    return [...response.data.books];
  }
};

export default useHook;
