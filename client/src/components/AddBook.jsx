import React from 'react'
import './Home.css';
import video from "../videos/px (1).mp4"
export default function AddBook({ book, handleChange, addBook }) {

    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <div className="container w-50 mt-3 border border-secondary">


                <form style={{ padding: "20px 20px 10px 20px" }}>
                    <div className="form-floating mb-3">
                        <input type="text" value={book.bookName} onChange={handleChange} name="bookName" class="form-control" id="floatingInput" />
                        <label for="floatingInput">Book Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" value={book.author} onChange={handleChange} name="author" class="form-control" id="floatingInput" />
                        <label for="floatingInput">Author</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" value={book.quantity} onChange={handleChange} name="quantity" class="form-control" id="floatingInput" />
                        <label for="floatingInput">Quantity</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" value={book.department} onChange={handleChange} name="department" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Department</option>
                            <option value="1">History</option>
                            <option value="2">Religious</option>
                            <option value="3">Music</option>
                        </select>
                        <label for="floatingSelect">Offer</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea class="form-control" value={book.comments} onChange={handleChange} name="comments" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <button type="button" class="btn btn-info" onClick={addBook}>Add Book</button>
                </form>
            </div>
        </div>

    )
}
