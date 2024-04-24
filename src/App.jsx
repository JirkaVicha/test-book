import Book from "./components/Book"
import books from './books'
import { useState } from "react"

const App = () => {
  const [allBooks, setAllBooks] = useState(books)

  const smazat = (id) => {
    if (window.confirm('Do you really want to delete this book?')) {
      const newBooks = allBooks.filter((book) => book.id !== id)
      setAllBooks(newBooks)
    } else {
      return;
    }
  }

  const nacistKnihy = () => {
    setAllBooks(books)
  }

  return (
    <>
    <header className="header">
      <h2>the books based on the bible</h2>
    </header>
    <div className="h-line"></div>
    {allBooks.length <= 0 ? (
      <div className="msg-empty">
        <p>no book to show</p>
        <button onClick={() => nacistKnihy()}>upload books</button>
      </div>
      ) : null
    }
    
    <section className="book-list">
      {allBooks.map((book) => {
        return (
         <Book 
            key={book.id} 
            //image={book.image}
            //title={book.title}
            //author={book.author}
            //desc={book.desc} 
            //link={book.link}
            smazat={smazat}
            //id={book.id}
            {...book}// nemusim posilat vse postupne, ale naraz jako object
          /> 
        ) 
      })}
    </section>
    </>
    
  )
}

export default App