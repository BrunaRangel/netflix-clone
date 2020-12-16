import React, { Component } from 'react';
import './style.css'
import Header from './server/components/Header/index'
import MainPage from './server/components/MainPage/index'
import Footer from './server/components/Footer/index'


class App extends Component {

  render() {
    return (
      <section className="container">
        <Header />
        <MainPage />   
        <Footer />      
      </section>
    );
  }
}

export default App;
