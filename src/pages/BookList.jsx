
import BookCard from "./BookCard";

function BookList ({books, getBooks})
{
    const bookCardList = books.map((book) => 
        
        <BookCard book={book} getBooks={getBooks} key={book.id} />);
        return (bookCardList);
}

export default BookList; 