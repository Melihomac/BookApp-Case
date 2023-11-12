import axios from "axios";

const useHook = async (search: any, books: any) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const url = "http://localhost:3000/api/data";
  try {
    const response = await axios.get(url, { headers });
    const newBooks = response.data.books || [];
    if (search) {
      const filteredBooks = newBooks.filter((book: any) =>
        book.name.toLowerCase().includes(search.toLowerCase())
      );
      return [...filteredBooks];
    } else {
      return [...books, ...newBooks];
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export default useHook;
