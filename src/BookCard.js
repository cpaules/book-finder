import React from 'react';


const BookCard = ({ book }) => (
    <div key={book.id} className="BookCard">
      {console.log(book)}
      <h3>{book.volumeInfo.title} </h3>
      <h5>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : ""}</h5>
      <img className="BookImg" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
      <p className="BookTitle">{book.searchInfo ? book.searchInfo.textSnippet : ""} </p>   
    </div>
  )
  
export default BookCard;