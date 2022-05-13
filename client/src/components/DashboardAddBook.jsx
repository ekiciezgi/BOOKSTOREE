
import axios from 'axios';
import AddBook from './AddBook';
import React, { useState, useEffect } from 'react';
function DashboardAddBook() {

  const [book, setBook] = useState({
    bookName: '',
    author: '',
    quantity: '',
    department: '',
    comments: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      bookName: book.bookName,
      author: book.author,
      quantity: book.quantity,
      comments: book.comments,
      department: book.department,
    }
    axios.post('/newbook', newBook);
    alert(`The Book ${book.bookName} is added to the`)
    setBook({ bookName: "", author: "", quantity: "", department: "", comments: "" })
  }


  return (
    <div >
      <AddBook book={book} handleChange={handleChange} addBook={addBook} />

    </div>
  )
}

export default DashboardAddBook