import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import { connect } from 'react-redux';

export class App extends Component {
  state = {
    estadoApp: 'Hola'
  }
  componentDidMount = () => {
    // console.log(this.props)
  };

  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    tryal: state
  }
}

export default connect(mapStateToProps, null)(App)