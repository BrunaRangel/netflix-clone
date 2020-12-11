import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './server/components/Header/index'
import MainPage from './server/components/MainPage/index'
import Footer from './server/components/Footer/index'

const Container = styled.section`
  background-color: #000000;
  margin:0;
  padding:0;
  max-width: 1366px;
  min-width: 768px;
`;

class App extends Component {

  render() {
    return (
      <Container>
        <Header />
        <MainPage />   
        <Footer />      
      </Container>
    );
  }
}

export default App;
