import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home/Home.jsx';


export class App extends Component {
  componentDidMount = () => {
    console.log(this)
  };

  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}

export default App