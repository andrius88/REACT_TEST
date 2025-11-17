import axios from "axios";
import { useNavigate } from "react-router";

function BookCard ({book, getBooks}){
    const URL = `http://localhost:3000/books/${book.id}`;
    // console.log (URL);
    
    const deleteBook = async () => {
    const responce = await axios.get(URL);
    const { title, author } = responce.data;

    const confirmed = window.confirm(
      `Are you sure to delete book: ${title}, author:${author} donor`
    );
    if (!confirmed) return; // delete was canceled

    await axios.delete(URL);
    getBooks();
  };

//   const goToDonorDataPage = () => {
//   navigate(`/donordata/${donor.id}`);
// };

    return(
        <>
        <div className="border p-10 w-3xl">
        <img className="w-2xs"
          src={book.cover}
          alt="Book cover"
        />
        <h1>Title: {book.title}</h1>
        <h2>Author:{book.author}</h2>
        <h2>Category: {book.category}</h2>
        <h2>Price: {book.price}</h2>
        
        <div className="m-5">
          <button
            className="bg-red-300 p-1 mr-5"
            onClick={() => deleteBook()}
          >
            Delete
          </button>
          {/* <button
            className="bg-red-300 p-1 mr-5"
            onClick={() => goToDonorDataPage()}
          >
            Wiev donor data
          </button>
          <button
            className="bg-red-300 p-1 mr-5"
            onClick={() => goToEditDonorData()}
          >
            Edit donor data
          </button> */}
        </div>
      </div>
        </>
    )
}

export default BookCard;