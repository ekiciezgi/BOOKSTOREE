import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

export default function Navi() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link to='/'>
                    <a className="navbar-brand" href="#">E-Books</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to='/books'>
                                <a className="nav-link active" aria-current="page" href="#">Books</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/addBook'>
                                <a className="nav-link" href="#">Add Book</a></Link>
                            </li>
                        
                
                        </ul>
                        <form className="d-flex">
                       
                            <Link to="/login">
                            <button className="btn btn-outline-success" type="submit">Login</button>
                            </Link>
                               
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
