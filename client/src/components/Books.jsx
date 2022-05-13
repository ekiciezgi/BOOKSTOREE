import React from 'react'
import './book.css';
export default function Books({ books,deleteBook,lendBook,backBook }) {
  return (
    <div className="containr">
    <div className=" mt-5 mx-auto ">

      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">BookName</th>
            <th scope="col">Author</th>
            <th scope="col">Department</th>
            <th scope="col">Quantity</th>
            <th scope="col" colSpan="3">Process</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((books, index) => {
              return (
                <tr scope="col" key={index}>
                  <td scope="col">{books._id}</td>
                 <td data-toggle="tooltip" data-placement="top" title={books.comments}>{books.bookName}</td>
                 <td>{books.author}</td>
                 <td>{books.department}</td>
                 <td>{books.quantity}</td>
                 <td><button className="btn btn-info" onClick={()=>deleteBook(books._id)} >Delete</button></td>
                 <td><button className="btn btn-info" onClick={()=>lendBook(books._id)}>Lend</button></td>
                 <td><button className="btn btn-info" onClick={()=>backBook(books._id)} >Back</button></td>
                </tr>
              )

            })
          }
        </tbody>
      </table>
    </div>
    </div>
  )
}
