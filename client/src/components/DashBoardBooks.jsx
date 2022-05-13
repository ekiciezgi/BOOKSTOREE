
import axios from 'axios';
import Books from './Books';
import React, { useState, useEffect } from 'react';
function DashBoardBooks() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    bookName: '',
    author: '',
    quantity: '',
    department: '',
    comments: '',
  })

  useEffect(() => {
    fetch('/books').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setBooks(jsonRes))
  }, [])

  const deleteBook = (id) => {
    axios.delete('/delete/' + id);
    alert(`Book ${book.bookName}is deleted`)

  }
  const lendBook = (id) => {
    axios.put('/lend/' + id);
    alert(`Book ${book.bookName}is lended`)

  }

  const backBook = (id) => {
    axios.put('/back/' + id);
    alert(`Book ${book.bookName}is backed`)

  }
  return (
    <div >
      <Books books={books} lendBook={lendBook} backBook={backBook} deleteBook={deleteBook} />
    </div>
  )
}

export default DashBoardBooks