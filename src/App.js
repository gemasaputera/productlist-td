import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './css/main.css';

// Component
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import ProductList from './components/product-list/ProductList';
import Construction from './components/Construction';

class App extends Component {

  render() {
    return (
      <Router>
        <Header />
          <Route exact path="/" component={ProductList} />
          <Route path="/cons" component={Construction} />
        <Footer />
      </Router>
    );
  }
}

export default App;
