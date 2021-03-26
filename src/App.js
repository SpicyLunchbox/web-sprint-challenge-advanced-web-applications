import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";

//removes token from localStorage and redirects to homepage upon logout button click
const handleClick = () => {
  localStorage.removeItem('token')
  window.location.href='http://localhost:3000/';
}



function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <button data-testid="logoutButton" onClick={handleClick}>logout</button>
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubblepage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;