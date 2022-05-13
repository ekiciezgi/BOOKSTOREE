
import './App.css';
import Navi from './components/Navi';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import DashboardAddBook from "./components/DashboardAddBook";
import DashBoardBooks from "./components/DashBoardBooks";
import AuthRegister from "./components/AuthRegister";
import AuthForm from './components/AuthForm';

function App() {

  return (

    <>
      <Router>
        <Navi />
        <Switch>
          <Route path='/' exact component={Home} />
           <Route exact path="/addBook" component={DashboardAddBook} />
          <Route exact path="/books" component={DashBoardBooks} /> 
          <Route exact path="/login" component={AuthForm} /> 
          <Route exact path="/signup" component={AuthRegister} /> 
          
        </Switch>
        
    </Router>
    </>

  );
}

export default App;
