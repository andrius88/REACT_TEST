import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Navigation from "./pages/Navigation.jsx";
import HomePage from "./pages/HomePage.jsx";
import BookList from "./pages/BookList.jsx";
import BookRegistration from "./pages/BookRegistration.jsx";
import BookData from "./pages/BookData.jsx";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const responce = await axios.get("http://localhost:3000/books");
    // console.log(responce.data);
    setBooks(() => responce.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    // <>
    // <Navigation />
    // <Routes>
    //   <Route  path="/"  element={<HomePage />} />
    //   <Route  path="/booklist"  element={
    //   <BookList books={books} getBooks={getBooks} />} />
    //   <Route  path="/bookregistration"  element={<BookRegistration getBooks={getBooks}/>} />
    //   <Route path="/bookdata/:id" element={<BookData />} />
    // </Routes>
    //   </>
    <>
      <h1 className="text-2xl text-center">BOOK LIST</h1>
      <h1 className="text-2xl">
        "DELETE" MYGTUKAS KNYGĄ PAŠALINA IŠ JSON, BET NAUJO SĄRAŠO NEATVAIZDUOJA</h1>
      <div>
        <BookList books={books} />
      </div>
    </>
  );
}

export default App;
