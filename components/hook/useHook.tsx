import { useState, useEffect } from "react";
import axios from "axios";

const useHook = async (search: any, books: any) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = "http://localhost:3000/api/data"; // veya uygun URL
  console.log("fetch books", search);

  try {
    const response = await axios.get(url, { headers });
    // API yanıtındaki veriyi kontrol et
    //console.log(response.data);
    // books özelliğini kontrol et
    const newBooks = response.data.books || [];
    if (search) {
      // Eğer bir arama terimi varsa, arama terimine uygun kitapları filtrele
      const filteredBooks = newBooks.filter((book: any) =>
        book.name.toLowerCase().includes(search.toLowerCase())
      );
      return [...filteredBooks];
    } else {
      return [...books, ...newBooks];
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    // Hata durumunda boş bir dizi veya başka bir değer dönebilirsiniz.
    return [];
  }
};

export default useHook;
